import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({ page }) => {
  await page.route('https://maps.googleapis.com/**', route => route.abort());
  await page.route('**/api/v1/properties/search?*', async route => {
    const url = new URL(route.request().url());
    const response = await route.fetch({ url: `http://127.0.0.1:4100${url.pathname}${url.search}` });
    await route.fulfill({ response });
  });
  await page.route('**/api/v1/locations/search', route => route.fulfill({ json: { data: [{
    id: 'controlled-central-location', name: 'Central Bengaluru test location',
    location: { lat: 12.9716, lng: 77.5946 }, attributions: [],
  }] } }));
});

async function fillCenter(page: Page) {
  const list = page.getByRole('button', { name: 'Search & list' });
  if (await list.isVisible()) await list.click();
  if (!(await page.locator('.search-settings').evaluate(element => (element as HTMLDetailsElement).open))) {
    await page.getByText('Search settings', { exact: true }).click();
  }
  await page.getByLabel('Location, building or landmark').fill('Central Bengaluru');
  await page.getByRole('button', { name: 'Find location', exact: true }).click();
  await page.getByRole('button', { name: 'Central Bengaluru test location', exact: true }).click();
}

async function openFilters(page: Page) {
  if (!(await page.locator('.advanced-filters').evaluate(element => (element as HTMLDetailsElement).open))) {
    await page.getByText('Filters & radius', { exact: true }).click();
  }
}

test('anonymous search, pagination, synchronized selection, source and empty state', async ({ page }) => {
  await page.goto('/explore');
  await fillCenter(page);
  await page.getByRole('button', { name: 'Search properties' }).click();
  const apartmentD = page.getByRole('button', { name: /^Sample Apartment D / });
  const apartmentA = page.getByRole('button', { name: /^Sample Apartment A / });
  await expect(apartmentD).toBeVisible();
  await expect(apartmentA).toHaveCount(0);
  await page.getByRole('button', { name: 'Load more' }).click();
  await expect(apartmentA).toBeVisible();
  await expect(page.getByText('Second Portal Sample')).toHaveCount(0);
  await apartmentA.click();
  await expect(page.getByRole('heading', { name: 'Sample Apartment A' })).toBeVisible();
  await expect(page.getByText('Approximate location. The entrance may differ.')).toBeVisible();
  const mapView = page.getByRole('button', { name: 'Map', exact: true });
  if (await mapView.isVisible()) await mapView.click();
  await expect(page.getByRole('button', { name: 'Select Sample Apartment A on map' })).toHaveAttribute('aria-pressed', 'true');
  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => innerWidth));

  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await fillCenter(page);
  await openFilters(page);
  await page.getByLabel('Bedrooms (BHK)').fill('12');
  await page.getByRole('button', { name: 'Search properties' }).click();
  await expect(page.getByText('No properties match this area and filters.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Expand area' })).toBeVisible();
});

test('drawn area and price filters stay strict', async ({ page }) => {
  await page.goto('/explore');
  const list = page.getByRole('button', { name: 'Search & list' });
  if (await list.isVisible()) await list.click();
  await page.getByRole('button', { name: 'Draw', exact: true }).click();
  const mapView = page.getByRole('button', { name: 'Map', exact: true });
  if (await mapView.isVisible()) await mapView.click();
  const plot = page.locator('.coordinate-plot');
  await plot.waitFor();
  const bounds = await plot.boundingBox();
  if (!bounds) throw new Error('The drawing surface is unavailable');
  for (const [x, y] of [[.485, .485], [.515, .485], [.515, .515], [.485, .515]]) {
    await plot.click({ position: { x: bounds.width * x, y: bounds.height * y } });
  }
  await expect(page.getByText('4 corners added')).toBeVisible();
  if (await list.isVisible()) await list.click();
  await openFilters(page);
  await page.getByLabel('Listing type').selectOption('rent');
  await page.getByLabel('Maximum price (₹)').fill('25000');
  await page.getByRole('button', { name: 'Search properties' }).click();
  await expect(page.getByRole('button', { name: /^Sample Apartment A / })).toBeVisible();
  await expect(page.getByRole('button', { name: /^Sample Apartment D / })).toHaveCount(0);
});

test('offers retry for a dependency failure', async ({ page }) => {
  await page.route('**/api/v1/properties/search?*', route => route.fulfill({
    status: 503, json: { error: { code: 'SEARCH_UNAVAILABLE' } },
  }), { times: 1 });
  await page.goto('/explore');
  await fillCenter(page);
  await page.getByRole('button', { name: 'Search properties' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'temporarily unavailable' })).toContainText('temporarily unavailable');
  await page.getByRole('button', { name: 'Retry' }).click();
  await expect(page.getByRole('button', { name: /^Sample Apartment D / })).toBeVisible();
});
