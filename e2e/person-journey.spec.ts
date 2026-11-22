import { expect, test, type Page } from '@playwright/test';
import { encode } from '@googlemaps/polyline-codec';
import AxeBuilder from '@axe-core/playwright';

// Controlled provider responses verify state and positioning. Live Bengaluru
// rendering evidence is recorded separately in docs/p0-delivery.md.
async function controlledGoogle(page: Page) {
  await page.addInitScript(() => {
    class MapScene extends HTMLElement {
      center = { lat: 0, lng: 0, altitude: 0 };
      constructor(options: object) { super(); Object.assign(this, options); }
      connectedCallback() {
        queueMicrotask(() => this.dispatchEvent(Object.assign(new Event('gmp-steadychange'), { isSteady: true })));
      }
      stopCameraAnimation() {}
    }
    class PersonModel extends HTMLElement {
      constructor(options: object) { super(); Object.assign(this, options); }
    }
    customElements.define('gmp-map-3d', MapScene);
    customElements.define('gmp-model-3d', PersonModel);
    const provider = {
      async importLibrary(name: string) {
        if (name === 'maps3d') return { Map3DElement: MapScene, Model3DElement: PersonModel };
        if (name === 'elevation') return {
          ElevationService: class {
            async getElevationForLocations(request: { locations: object[] }) {
              return { results: request.locations.map(() => ({ elevation: 903 })) };
            }
          },
        };
        throw new Error('Other provider views disabled in this controlled test');
      },
    };
    Object.assign(window, { google: { maps: provider } });
  });
}

test('3D pedestrian uses terrain elevation and preserves paused route progress', async ({ page }) => {
  await controlledGoogle(page);
  await page.route('**/api/v1/locations/search', route => route.fulfill({ json: { data: [{
    id: 'controlled-origin', name: 'Bengaluru controlled origin',
    location: { lat: 12.92776, lng: 77.6842 }, attributions: [],
  }] } }));
  await page.route('**/api/v1/locations/nearby', route => route.fulfill({ json: { data: [{
    id: 'controlled-destination', name: 'Controlled destination',
    location: { lat: 12.92876, lng: 77.6842 }, attributions: [], destination: 'controlled-ticket',
  }] } }));
  await page.route('**/api/v1/locations/route', route => route.fulfill({ json: { data: {
    distanceMeters: 111, durationSeconds: 90,
    encodedPolyline: encode([[12.92776, 77.6842], [12.92876, 77.6842]]),
  } } }));
  await page.goto('/explore');
  const list = page.getByRole('button', { name: 'Search & list', exact: true });
  if (await list.isVisible()) await list.click();
  await page.getByLabel('Location, building or landmark').fill('Bengaluru controlled origin');
  await page.getByRole('button', { name: 'Find location', exact: true }).click();
  await page.getByRole('button', { name: 'Bengaluru controlled origin', exact: true }).click();
  const map = page.getByRole('button', { name: 'Map', exact: true });
  if (await map.isVisible()) await map.click();
  await page.getByRole('button', { name: 'Explore Neighborhood', exact: true }).click();
  await page.getByRole('button', { name: '3D Person', exact: true }).click();
  const person = page.getByRole('region', { name: 'Google Maps 3D person exploration' });
  await expect(person.getByRole('button', { name: 'Restart journey', exact: true })).toBeEnabled();
  const camera = await person.locator('gmp-map-3d').evaluate(element => (element as google.maps.maps3d.Map3DElement).center);
  expect(camera?.altitude).toBe(904);
  const orientation = await person.locator('gmp-model-3d').evaluate(element => (element as google.maps.maps3d.Model3DElement).orientation);
  expect(orientation?.tilt).toBe(270);
  await person.getByText('Options', { exact: true }).click();
  await person.getByRole('button', { name: 'Nearby Places', exact: true }).click();
  await page.getByRole('button', { name: 'Find nearby places', exact: true }).click();
  await page.getByRole('button', { name: 'Show Route', exact: true }).click();
  await page.getByRole('button', { name: '3D Person', exact: true }).click();
  await expect(person.getByRole('button', { name: 'Play journey', exact: true })).toBeEnabled();
  await person.getByRole('button', { name: 'Play journey', exact: true }).click();
  await expect(person.getByRole('status')).not.toHaveText(/^0 m/);
  await person.getByRole('button', { name: 'Pause journey', exact: true }).click();
  const paused = await person.getByRole('status').innerText();
  await page.getByRole('button', { name: 'Map View', exact: true }).first().click();
  await expect(person).toBeHidden();
  await page.getByRole('button', { name: '3D Person', exact: true }).click();
  await expect(person.getByRole('status')).toHaveText(paused);
  await page.getByRole('button', { name: 'Street View', exact: true }).first().click();
  await expect(person).toBeHidden();
  await page.getByRole('button', { name: '3D Person', exact: true }).click();
  await expect(person.getByRole('status')).toHaveText(paused);
  await person.getByRole('button', { name: 'Restart journey', exact: true }).click();
  await expect(person.getByRole('status')).toHaveText(/^0 m/);
  const accessibility = await new AxeBuilder({ page }).exclude('nextjs-portal').analyze();
  expect(accessibility.violations).toEqual([]);
});

test('start-to-destination planner consumes streamed routes and opens an adjustable person preview', async ({ page }) => {
  await controlledGoogle(page);
  await page.route('**/api/v1/locations/search', route => {
    const end = route.request().postDataJSON().query.includes('destination');
    return route.fulfill({ json: { data: [{ id: end ? 'end' : 'start', name: end ? 'Controlled destination' : 'Controlled start',
      location: { lat: end ? 12.92876 : 12.92776, lng: 77.6842 }, attributions: [] }] } });
  });
  await page.route('**/api/v1/journeys/route', route => {
    expect(route.request().headers().accept).toBe('application/x-ndjson');
    expect(route.request().postDataJSON()).toEqual({ origin: { lat: 12.92776, lng: 77.6842 }, destination: { lat: 12.92876, lng: 77.6842 }, mode: 'WALK' });
    return route.fulfill({ contentType: 'application/x-ndjson', body: [
      JSON.stringify({ type: 'stage', stage: 'routing' }),
      JSON.stringify({ type: 'route', data: { distanceMeters: 111, durationSeconds: 90, encodedPolyline: encode([[12.92776, 77.6842], [12.92876, 77.6842]]), steps: [{ distanceMeters: 60, instruction: 'Head north', maneuver: 'DEPART' }, { distanceMeters: 51, instruction: 'Turn left onto Lake Road', maneuver: 'TURN_LEFT' }] } }), '',
    ].join('\n') });
  });
  await page.goto('/explore');
  await page.locator('.workspace-tabs').getByRole('button', { name: 'Plan a journey', exact: true }).click();
  const planner = page.getByRole('region', { name: 'Plan your journey', exact: true });
  await planner.getByLabel('Start location', { exact: true }).fill('Controlled start');
  await planner.locator('.origin-location').getByRole('button', { name: 'Find location', exact: true }).click();
  await planner.getByRole('button', { name: 'Controlled start', exact: true }).click();
  await planner.getByLabel('Destination', { exact: true }).fill('Controlled destination');
  await planner.locator('.destination-location').getByRole('button', { name: 'Find location', exact: true }).click();
  await planner.getByRole('button', { name: 'Controlled destination', exact: true }).click();
  await planner.getByRole('button', { name: 'Preview route', exact: true }).click();
  await planner.getByRole('button', { name: 'View journey', exact: true }).click();
  const person = page.getByRole('region', { name: 'Google Maps 3D person exploration' });
  await expect(page.getByRole('button', { name: '3D Person', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Map View', exact: true }).first()).toHaveAttribute('aria-pressed', 'false');
  await expect(person.getByRole('button', { name: 'Play journey', exact: true })).toBeEnabled();
  const map = person.locator('gmp-map-3d');
  expect(await map.evaluate(element => ({ range: (element as google.maps.maps3d.Map3DElement).range, tilt: (element as google.maps.maps3d.Map3DElement).tilt }))).toEqual({ range: 8, tilt: 82 });
  await person.getByLabel('Journey camera', { exact: true }).selectOption('overview');
  await expect.poll(() => map.evaluate(element => (element as google.maps.maps3d.Map3DElement).range)).toBe(24);
  await person.getByLabel('Journey camera', { exact: true }).selectOption('street');
  await expect.poll(() => map.evaluate(element => (element as google.maps.maps3d.Map3DElement).range)).toBe(8);
  const navigation = page.getByRole('complementary', { name: 'Journey navigation and assistant' });
  if (!(await navigation.locator('details').first().evaluate(element => (element as HTMLDetailsElement).open))) await navigation.locator('summary').first().click();
  await expect(navigation.getByLabel('Current route instruction')).toContainText('Head north');
  await expect(navigation.getByLabel('Current route instruction')).toContainText('Turn left onto Lake Road');
  await page.route('**/api/v1/journeys/assistant', route => {
    const body = route.request().postDataJSON();
    expect(body.context.destination).toBe('Controlled destination');
    expect(body.context.nextInstruction).toBe('Turn left onto Lake Road');
    expect(body.context.progressMeters).toBe(0);
    return route.fulfill({ json: { data: { answer: 'Next, turn left onto Lake Road.', aiUsed: false, action: null, source: 'journey-preview' } } });
  });
  await navigation.getByLabel('Ask about this journey', { exact: true }).fill('What is the next turn?');
  await navigation.getByRole('button', { name: 'Ask assistant', exact: true }).click();
  await expect(navigation.locator('.journey-answer')).toContainText('Next, turn left');
  await person.getByLabel('Playback speed', { exact: true }).selectOption('16');
  await person.getByRole('button', { name: 'Play journey', exact: true }).click();
  await expect(person.getByRole('status')).not.toHaveText(/^0 m/);
  await person.getByRole('button', { name: 'Pause journey', exact: true }).click();
  await person.getByLabel('Journey progress', { exact: true }).press('End');
  await expect(person.getByRole('button', { name: 'Replay journey', exact: true })).toBeVisible();
  await expect(navigation.getByLabel('Current route instruction')).toContainText('Preview complete');
  await person.getByRole('button', { name: 'Restart journey', exact: true }).click();
  await expect(person.getByRole('status')).toHaveText(/^0 m/);
});


test('planner accepts explicitly chosen map endpoints', async ({ page }) => {
  await controlledGoogle(page);
  await page.goto('/explore');
  await page.locator('.workspace-tabs').getByRole('button', { name: 'Plan a journey', exact: true }).click();
  const planner = page.getByRole('region', { name: 'Plan your journey', exact: true });
  const plot = page.locator('.coordinate-plot');
  await plot.waitFor();
  const bounds = await plot.boundingBox();
  if (!bounds) throw new Error('Map selection surface unavailable');
  await planner.getByRole('button', { name: 'Choose start on map', exact: true }).click();
  await plot.click({ position: { x: bounds.width * .45, y: bounds.height * .5 } });
  await expect(planner.getByLabel('Start location', { exact: true })).toHaveValue('Selected start on map');
  await planner.getByRole('button', { name: 'Choose destination on map', exact: true }).click();
  await plot.click({ position: { x: bounds.width * .55, y: bounds.height * .5 } });
  await expect(planner.getByLabel('Destination', { exact: true })).toHaveValue('Selected destination on map');
  await expect(planner.getByRole('button', { name: 'Preview route', exact: true })).toBeEnabled();
});

test('a selected home becomes the destination while the search location stays the start', async ({ page }) => {
  await controlledGoogle(page);
  await page.route('**/api/v1/locations/search', route => route.fulfill({ json: { data: [{
    id: 'office', name: 'Controlled office', location: { lat: 12.92776, lng: 77.6842 }, attributions: [],
  }] } }));
  await page.route('**/api/v1/properties/search?*', route => route.fulfill({ json: { data: [{
    id: '111111111111111111111111', title: 'Sample home near the office', type: 'apartment', bedrooms: 2,
    source: { name: 'Controlled sample inventory', synthetic: true, updatedAt: '2026-11-21T00:00:00Z' },
    intent: 'rent', priceInr: 26000, locality: 'Bengaluru sample', coordinateQuality: 'approximate',
    listedAt: '2026-11-21T00:00:00Z', location: { lat: 12.92876, lng: 77.6842 },
  }], page: { nextCursor: null } } }));
  await page.goto('/explore');
  const list = page.getByRole('button', { name: 'Search & list', exact: true });
  if (await list.isVisible()) await list.click();
  await page.getByLabel('Location, building or landmark').fill('Controlled office');
  await page.getByRole('button', { name: 'Find location', exact: true }).click();
  await page.getByRole('button', { name: 'Controlled office', exact: true }).click();
  await page.getByRole('button', { name: 'Search properties', exact: true }).click();
  await page.locator('.listing-card').first().click();
  await page.locator('.map-selection-action').getByRole('button', { name: 'Plan a journey', exact: true }).click();
  const planner = page.getByRole('region', { name: 'Plan your journey', exact: true });
  await expect(planner.getByLabel('Start location', { exact: true })).toHaveValue('Controlled office');
  await expect(planner.getByLabel('Destination', { exact: true })).toHaveValue('Sample home near the office');
  await expect(planner.getByRole('button', { name: 'Preview route', exact: true })).toBeEnabled();
});
