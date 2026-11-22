import { apiFetch } from '../embed/session';
import type { Point } from '../property-search/area';
import { z } from 'zod';

const place = z.object({
  id: z.string(),
  name: z.string(),
  location: z.object({ lat: z.number(), lng: z.number() }),
  destination: z.string(),
  attributions: z.array(z.object({ provider: z.string(), providerUri: z.string().optional() })),
});
const route = z.object({
  durationSeconds: z.number().nonnegative(),
  distanceMeters: z.number().nonnegative(),
  encodedPolyline: z.string(),
  steps: z.array(z.object({ distanceMeters: z.number().nonnegative(), instruction: z.string(), maneuver: z.string() })).optional(),
});
export type Place = z.infer<typeof place>;
export type Mode = 'WALK' | 'TWO_WHEELER' | 'DRIVE' | 'TRANSIT';

class NeighborhoodError extends Error {
  constructor(readonly status: number, readonly code: string) {
    super(code);
  }
}

export function describeFailure(error: unknown) {
  if (error instanceof NeighborhoodError) {
    if (error.status === 429) return 'The neighborhood request limit has been reached. Try again later.';
    if (error.code === 'PROVIDER_DISABLED') return 'Google Maps services are unavailable for this catalog.';
    if (error.code === 'INVALID_DESTINATION') return 'This nearby selection expired. Choose a category again to refresh it.';
    if (error.status === 404) return 'This listing is no longer available.';
  }
  return 'Google Maps services are temporarily unavailable. You can still search properties.';
}

async function request<T>(origin: string | Point, endpoint: 'nearby' | 'route', body: object, data: z.ZodType<T>, signal: AbortSignal) {
  const path = typeof origin === 'string' ? `/api/v1/properties/${encodeURIComponent(origin)}/${endpoint}` : `/api/v1/locations/${endpoint}`;
  const payloadBody = typeof origin === 'string' ? body : { ...body, origin };
  const response = await apiFetch(path, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payloadBody),
    cache: 'no-store', signal,
  });
  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const error = z.object({ error: z.object({ code: z.string() }) }).safeParse(payload);
    throw new NeighborhoodError(response.status, error.success ? error.data.error.code : '');
  }
  return z.object({ data }).parse(payload).data;
}

export function fetchPlaces(id: string | Point, category: string, radiusMeters: number, signal: AbortSignal) {
  return request(id, 'nearby', { category, radiusMeters }, z.array(place), signal);
}
export function fetchRoute(id: string | Point, destination: string, mode: Mode, signal: AbortSignal) {
  return request(id, 'route', { destination, mode }, route.nullable(), signal);
}

const journeyEvent = z.discriminatedUnion('type', [
  z.object({ type: z.literal('stage'), stage: z.literal('routing') }),
  z.object({ type: z.literal('route'), data: route.nullable() }),
  z.object({ type: z.literal('error'), error: z.object({ code: z.string() }) }),
]);

export async function prepareJourney(origin: Point, destination: Point, mode: Mode, signal: AbortSignal, onStage: () => void) {
  const response = await apiFetch('/api/v1/journeys/route', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/x-ndjson' },
    body: JSON.stringify({ origin, destination, mode }), signal,
  });
  if (!response.ok || !response.body) throw new NeighborhoodError(response.status, '');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let pending = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      pending += decoder.decode(value, { stream: !done });
      if (pending.length > 1000000) throw new Error('Journey response exceeded its limit');
      let newline = pending.indexOf('\n');
      while (newline >= 0) {
        const line = pending.slice(0, newline).trim();
        pending = pending.slice(newline + 1);
        if (line) {
          const event = journeyEvent.parse(JSON.parse(line));
          if (event.type === 'stage') onStage();
          if (event.type === 'error') throw new NeighborhoodError(503, event.error.code);
          if (event.type === 'route') return event.data;
        }
        newline = pending.indexOf('\n');
      }
      if (done) throw new Error('Journey response ended before the route');
    }
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}
