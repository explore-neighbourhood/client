export type Point = { lat: number; lng: number };
export type SearchArea =
  | { kind: 'radius'; center: Point; radiusKm: number }
  | { kind: 'polygon'; points: readonly Point[] };
export type SearchSelection = SearchArea | { kind: 'locality'; id: string };

export const cityView: Point = { lat: 12.9716, lng: 77.5946 };
export const initialRadius = 3;
export const presets = [1, 3, 5, 10];

export function numericQueryValue(value: number) {
  return value.toFixed(6).replace(/\.?0+$/, '');
}
