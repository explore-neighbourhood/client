import { expect, test } from '@playwright/test';

test('a stalled Maps library offers retry and map recovery', async ({ page }) => {
  // Leave the SDK request pending to exercise an import that never settles.
  await page.route('https://maps.googleapis.com/**', () => {});
  await page.route('**/api/v1/locations/search', route => route.fulfill({ json: { data: [{
    id: 'controlled-origin', name: 'Bengaluru test origin',
    location: { lat: 12.9716, lng: 77.5946 }, attributions: [],
  }] } }));
  await page.clock.install();
  await page.goto('/explore');
  const listView = page.getByRole('button', { name: 'Search & list', exact: true });
  if (await listView.isVisible()) await listView.click();
  await page.getByLabel('Location, building or landmark').fill('Bengaluru test origin');
  await page.getByRole('button', { name: 'Find location', exact: true }).click();
  await page.getByRole('button', { name: 'Bengaluru test origin', exact: true }).click();
  const mapView = page.getByRole('button', { name: 'Map', exact: true });
  if (await mapView.isVisible()) await mapView.click();
  await page.getByRole('button', { name: 'Explore Neighborhood', exact: true }).click();
  await expect(page.getByText('Finding street imagery near this location…', { exact: true })).toBeVisible();
  await page.clock.fastForward(11000);
  await expect(page.getByText('Street View took too long to load. Retry or continue on the route map.', { exact: true }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Retry Street View', exact: true }).click();
  await expect(page.getByText('Finding street imagery near this location…', { exact: true })).toBeVisible();
  await page.clock.fastForward(11000);
  const explorer = page.getByRole('region', { name: 'Immersive Neighborhood Explorer', exact: true });
  await explorer.getByRole('button', { name: 'Map View', exact: true }).first().click();
  await expect(page.locator('.workspace')).toHaveClass(/walk-map-view/);
  await explorer.getByRole('button', { name: 'Exit Exploration', exact: true }).click();
  await expect(explorer).toHaveCount(0);
});
