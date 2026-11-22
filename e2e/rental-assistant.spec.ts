import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({ page }) => {
  await page.route('https://maps.googleapis.com/**', route => route.abort());
  // Forward real requests to an isolated Mongo-backed API; no invented frontend responses.
  await page.route('**/api/v1/**', async route => {
    const path = new URL(route.request().url());
    const response = await route.fetch({ url: `http://127.0.0.1:4100${path.pathname}${path.search}` });
    await route.fulfill({ response });
  });
});
async function openChat(page: Page) {
  await expect(page.locator('.rental-app')).toBeVisible();
  const open = page.getByRole('button', { name: /^Ask your rental assistant/ });
  if ((page.viewportSize()?.width ?? 1280) <= 760 && !await page.getByLabel('Message your rental assistant').isVisible()) await open.click();
  await expect(page.getByLabel('Message your rental assistant')).toBeVisible();
  await expect(page.getByRole('status').filter({ hasText: 'Opening your conversation' })).toHaveCount(0);
}
async function send(page: Page, message: string) {
  await openChat(page);
  await page.getByLabel('Message your rental assistant').fill(message);
  await page.getByRole('button', { name: 'Send', exact: true }).click();
  await expect(page.locator('.rental-chat-history .rental-message.user').last()).toContainText(message);
  await expect(page.getByRole('button', { name: 'Checking…', exact: true })).toHaveCount(0);
}
async function pick(page: Page, title: string) {
  const closeChat = page.getByRole('button', { name: 'Close chat', exact: true });
  if (await closeChat.isVisible()) await closeChat.click();
  const closeDetails = page.getByRole('button', { name: 'Close details', exact: true });
  if (await closeDetails.isVisible()) await closeDetails.click();
  await page.getByRole('button', { name: 'Browse listings', exact: true }).click();
  await page.getByRole('button').filter({ hasText: title }).filter({ has: page.locator('small') }).first().click();
  await expect(page.getByRole('heading', { name: title, exact: true })).toBeVisible();
}

test('rental conversation extracts complete requirements and preserves them across budget and area corrections', async ({ page }) => {
  const errors: string[] = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  const date = new Date().toISOString().slice(0, 10);
  await send(page, `I need a semi-furnished 1BHK in Bellandur under ₹25k with bike parking, preferably a gated apartment. My office is in HSR Layout. Move in ${date}.`);
  const chips = page.getByLabel('Confirmed requirements');
  await expect(chips).toContainText('1BHK'); await expect(chips).toContainText('₹25,000'); await expect(chips).toContainText('semi furnished');
  await expect(page.locator('.rental-message.assistant').last()).not.toContainText('maximum monthly rental budget');
  await expect(page.locator('.rental-match-tag.best_match').first()).toBeVisible();
  await send(page, 'Actually, my budget is ₹20k.'); await expect(chips).toContainText('₹20,000'); await expect(chips).toContainText('1BHK');
  await expect(page.locator('.rental-match-tag.best_match')).toHaveCount(0);
  await send(page, 'Can you also check HSR Layout?'); await expect(chips).toContainText('Bellandur');
  await send(page, 'Forget Bellandur. Search only in HSR Layout.'); await expect(chips).not.toContainText('Bellandur'); await expect(chips).toContainText('₹20,000');
  await page.reload(); await openChat(page); await expect(chips).toContainText('HSR Layout'); await expect(chips).toContainText('₹20,000');
  expect(errors).toEqual([]);
});

test('property selection, pinning, comparisons and commute use stored property IDs and survive refresh', async ({ page }) => {
  await page.goto('/');
  await pick(page, 'Test rental 01');
  await page.getByRole('button', { name: 'Ask AI About This Property', exact: true }).click();
  await send(page, 'Tell me about this property'); await expect(page.getByLabel('Property facts comparison')).toContainText('₹60,000');
  await pick(page, 'Test rental 02');
  await page.getByRole('button', { name: 'Ask AI About This Property', exact: true }).click();
  await page.getByRole('button', { name: 'Compare pinned properties', exact: true }).click();
  await expect(page.getByLabel('Property facts comparison')).toContainText('Test rental 01'); await expect(page.getByLabel('Property facts comparison')).toContainText('Test rental 02');
  await send(page, 'My office is in HSR Layout.');
  await send(page, 'How far is this from my office?'); await expect(page.locator('.rental-message.assistant').last()).toContainText('20 minutes');
  await page.reload(); await openChat(page); await expect(page.locator('.rental-chat-reference')).toContainText('Test rental 02'); await expect(page.locator('.rental-chat-reference')).toContainText('2 pinned');
});

test('CSV listings expose real source facts and missing coordinates without inventing availability', async ({ page }) => {
  await page.goto('/');
  await send(page, 'Find a semi-furnished 1BHK in HSR Layout under ₹20k.');
  const candidate = page.locator('.rental-candidate').filter({ hasText: 'Hsr Layout Sector 3, HSR Layout' });
  await expect(candidate).toContainText('₹15,000'); await expect(candidate).toContainText('Availability confirmation required');
  await candidate.getByRole('button').click();
  const details = page.getByLabel('Selected property details');
  await expect(details).toContainText('House_Rent_Dataset.csv'); await expect(details).toContainText('Map coordinates were not supplied'); await expect(details).toContainText('2022');
  await expect(details).toContainText('semi furnished');
  await expect(page.locator('.rental-pin').filter({ hasText: 'Hsr Layout Sector 3' })).toHaveCount(0);
});

test('empty results, accessibility and small screen bounds stay usable', async ({ page }) => {
  await page.goto('/'); await send(page, 'Find a 9BHK in Nowhereville under ₹1k.');
  await expect(page.locator('.rental-message.assistant').last()).toContainText('No rentals were found');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => innerWidth));
  await page.setViewportSize({ width: 320, height: 568 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  await expect(page.getByLabel('Message your rental assistant')).toBeVisible();
});
