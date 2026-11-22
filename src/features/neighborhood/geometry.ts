import type { Point } from '../property-search/area';

export function distanceMeters(a: Point, b: Point) {
  const rad = Math.PI / 180;
  const haversine = Math.sin((b.lat - a.lat) * rad / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin((b.lng - a.lng) * rad / 2) ** 2;
  return 12_742_017.6 * Math.asin(Math.sqrt(Math.min(1, haversine)));
}

export function sampleRoute(path: readonly Point[], limit: number) {
  const first = path[0];
  if (!first) return [];
  const samples = [{ point: first, meters: 0 }];
  let covered = 0;
  let nextStep = 100;
  for (let index = 1; index < path.length; index++) {
    const from = path[index - 1]!;
    const to = path[index]!;
    const length = distanceMeters(from, to);
    while (nextStep <= covered + length && nextStep <= limit && length > 0) {
      const ratio = (nextStep - covered) / length;
      samples.push({ point: { lat: from.lat + (to.lat - from.lat) * ratio, lng: from.lng + (to.lng - from.lng) * ratio }, meters: nextStep });
      nextStep += 100;
    }
    covered += length;
    if (covered >= limit) break;
  }
  const last = path.at(-1);
  if (last && covered < limit && samples.at(-1)!.meters < covered) samples.push({ point: last, meters: Math.round(covered) });
  return samples;
}
