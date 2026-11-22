import { expect, test } from '@playwright/test';
import { encode } from '@googlemaps/polyline-codec';

test.beforeEach(async ({ page }) => {
  await page.route('https://maps.googleapis.com/**', route => route.abort());
  await page.route('**/api/v1/locations/search', route => {
    const end = route.request().postDataJSON().query.includes('Agara');
    return route.fulfill({ json: { data: [{ id: end ? 'lake' : 'home', name: end ? 'Agara Lake test destination' : 'HSR test start',
      location: { lat: end ? 12.92876 : 12.92776, lng: 77.6842 }, attributions: [] }] } });
  });
  await page.route('**/api/v1/journeys/route', route => {
    expect(route.request().postDataJSON()).toEqual({ origin: { lat: 12.92776, lng: 77.6842 }, destination: { lat: 12.92876, lng: 77.6842 }, mode: 'WALK' });
    return route.fulfill({ contentType: 'application/x-ndjson', body: JSON.stringify({ type: 'route', data: {
      distanceMeters: 111, durationSeconds: 90, encodedPolyline: encode([[12.92776, 77.6842], [12.92876, 77.6842]]),
    } }) + '\n' });
  });
});

test('map search sets both journey endpoints and prepares their actual coordinates', async ({ page }) => {
  await page.goto('/explore');
  const search = page.getByRole('region', { name: 'Search places on the map', exact: true });
  await search.getByRole('button', { name: 'Start', exact: true }).click();
  await search.getByLabel('Search start on Google Maps').fill('HSR Layout');
  await search.getByRole('button', { name: 'Search map', exact: true }).click();
  await search.getByRole('button', { name: 'HSR test start', exact: true }).click();
  await search.getByLabel('Search destination on Google Maps').fill('Agara Lake');
  await search.getByRole('button', { name: 'Search map', exact: true }).click();
  await search.getByRole('button', { name: 'Agara Lake test destination', exact: true }).click();
  await search.getByRole('button', { name: 'Plan this route', exact: true }).click();
  const planner = page.getByRole('region', { name: 'Plan your journey', exact: true });
  await expect(planner.getByLabel('Start location', { exact: true })).toHaveValue('HSR test start');
  await expect(planner.getByLabel('Destination', { exact: true })).toHaveValue('Agara Lake test destination');
  await planner.getByRole('button', { name: 'Preview route', exact: true }).click();
  await expect(planner.getByRole('button', { name: 'View journey', exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => innerWidth));
});

test('property Street View opens street perspective when a destination route already exists', async ({ page }) => {
  await page.route('**/api/v1/properties/search?*', route => route.fulfill({ json: { data: [{
    id: '111111111111111111111111', title: 'Street View test home', type: 'apartment', bedrooms: 2,
    source: { name: 'Test inventory', synthetic: true, updatedAt: '2026-11-21T00:00:00Z' },
    intent: 'rent', priceInr: 26000, locality: 'Bengaluru', coordinateQuality: 'approximate',
    listedAt: '2026-11-21T00:00:00Z', location: { lat: 12.92776, lng: 77.6842 },
  }], page: { nextCursor: null } } }));
  await page.route('**/api/v1/properties/*/nearby', route => route.fulfill({ json: { data: [{
    id: 'hospital', name: 'Test hospital', location: { lat: 12.92876, lng: 77.6842 }, attributions: [], destination: 'test-ticket',
  }] } }));
  await page.route('**/api/v1/properties/*/route', route => route.fulfill({ json: { data: {
    distanceMeters: 111, durationSeconds: 90, encodedPolyline: encode([[12.92776, 77.6842], [12.92876, 77.6842]]),
  } } }));
  await page.goto('/explore');
  const list = page.getByRole('button', { name: 'Search & list', exact: true });
  if (await list.isVisible()) await list.click();
  await page.getByRole('button', { name: 'Explore Bellandur sample homes', exact: true }).click();
  await page.locator('.listing-card').first().click();
  const detail = page.getByRole('region', { name: 'Street View test home', exact: true });
  await detail.getByRole('button', { name: 'Hospitals', exact: true }).click();
  await detail.getByRole('button', { name: 'Show route', exact: true }).click();
  await expect(detail.getByRole('button', { name: 'Explore streets along route', exact: true })).toBeVisible();
  await detail.getByRole('button', { name: 'Street View', exact: true }).click();
  const explorer = page.getByRole('region', { name: 'Immersive Neighborhood Explorer', exact: true });
  await expect(explorer.getByRole('button', { name: 'Street View', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(explorer.getByRole('button', { name: '3D Person', exact: true })).toHaveAttribute('aria-pressed', 'false');
});
