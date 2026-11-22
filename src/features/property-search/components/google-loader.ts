import { setOptions } from '@googlemaps/js-api-loader';

let configured = false;

export function setupGoogleMaps(key: string) {
  if (configured) return;
  setOptions({ key, v: 'quarterly', region: 'IN' });
  configured = true;
}
