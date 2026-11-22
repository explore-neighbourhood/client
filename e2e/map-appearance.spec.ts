import { expect, test } from '@playwright/test';

// Exercise the real React entry point while recording provider commands.
test('map types and appearance preserve the camera and follow system changes', async ({ page }) => {
  await page.addInitScript(() => {
    class MapView {
      center = { lat: 12.9716, lng: 77.5946 };
      zoom = 12;
      constructor(readonly element: HTMLElement, options: Record<string, unknown>) {
        this.setOptions(options);
        element.dataset.scheme = String(options.colorScheme);
        element.addEventListener('test-pan', event => this.setOptions((event as CustomEvent).detail));
      }
      setOptions(options: Record<string, unknown>) {
        if (options.center) {
          const center = options.center as { lat: number; lng: number; toJSON?: () => { lat: number; lng: number } };
          this.center = center.toJSON ? center.toJSON() : center;
        }
        if (typeof options.zoom === 'number') this.zoom = options.zoom;
        this.element.dataset.center = JSON.stringify(this.center);
        this.element.dataset.zoom = String(this.zoom);
      }
      setCenter(center: object) { this.setOptions({ center }); }
      setZoom(zoom: number) { this.setOptions({ zoom }); }
      panTo(center: object) { this.setOptions({ center }); }
      getCenter() { return { toJSON: () => this.center }; }
      getZoom() { return this.zoom; }
      getHeading() { return 0; }
      getTilt() { return 0; }
      setMapTypeId(value: string) { this.element.dataset.mapType = value; }
      addListener(name: string, callback: () => void) {
        if (name === 'tilesloaded') queueMicrotask(callback);
        return { remove() {} };
      }
    }
    class Marker extends HTMLElement {
      constructor(options: object) { super(); Object.assign(this, options); }
      addListener() { return { remove() {} }; }
    }
    class Pin extends HTMLElement {}
    customElements.define('test-map-marker', Marker);
    customElements.define('test-map-pin', Pin);
    Object.assign(window, { google: { maps: {
      event: { trigger() {} },
      async importLibrary(name: string) {
        if (name === 'maps') return { Map: MapView };
        if (name === 'marker') return { AdvancedMarkerElement: Marker, PinElement: Pin };
        throw new Error('Controlled unsupported 3D provider');
      },
    } } });
  });
  await page.goto('/explore');
  const map = page.locator('.google-map');
  const view = page.getByLabel('Map view', { exact: true });
  const appearance = page.getByLabel('Appearance', { exact: true });
  await expect(map).toHaveAttribute('data-map-type', 'roadmap');
  await view.selectOption('satellite');
  await expect(map).toHaveAttribute('data-map-type', 'satellite');
  await view.selectOption('terrain');
  await expect(map).toHaveAttribute('data-map-type', 'terrain');
  const center = { lat: 12.92776, lng: 77.6842 };
  await map.evaluate((element, point) => element.dispatchEvent(new CustomEvent('test-pan', { detail: { center: point, zoom: 16 } })), center);
  await appearance.selectOption('dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(map).toHaveAttribute('data-scheme', 'DARK');
  await expect(map).toHaveAttribute('data-center', JSON.stringify(center));
  await expect(map).toHaveAttribute('data-zoom', '16');
  await expect(map).toHaveAttribute('data-map-type', 'terrain');
  await appearance.selectOption('light');
  await expect(map).toHaveAttribute('data-scheme', 'LIGHT');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await appearance.selectOption('system');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(map).toHaveAttribute('data-scheme', 'FOLLOW_SYSTEM');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await view.selectOption('globe');
  await expect(page.getByRole('region', { name: 'Property map', exact: true }).getByRole('alert')).toContainText('3D view is unavailable');
  await page.getByRole('button', { name: 'Use Default view', exact: true }).click();
  await expect(view).toHaveValue('roadmap');
  await expect(map).toHaveAttribute('data-map-type', 'roadmap');
});
