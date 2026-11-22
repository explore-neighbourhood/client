import { apiFetch } from '../embed/session';
import { z } from 'zod';

export const propertySchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum(['apartment', 'house', 'townhouse', 'unknown']),
  bedrooms: z.number().int().nonnegative(),
  source: z.object({ name: z.string(), updatedAt: z.iso.datetime(), synthetic: z.boolean() }),
  intent: z.enum(['rent', 'buy']).nullable(),
  priceInr: z.number().nonnegative().nullable(),
  locality: z.string().nullable(),
  coordinateQuality: z.enum(['verified_entrance', 'approximate', 'unknown']),
  listedAt: z.iso.datetime(),
  location: z.object({ lat: z.number(), lng: z.number() }),
  rental: z.object({
    configuration: z.string().optional(), depositInr: z.number().optional(), furnishing: z.string().optional(),
    address: z.string().optional(), images: z.array(z.string()).optional(), amenities: z.array(z.string()).optional(),
    bikeParking: z.boolean().optional(), carParking: z.boolean().optional(), gatedCommunity: z.boolean().optional(),
    petsAllowed: z.boolean().optional(), maxOccupants: z.number().optional(), areaSqFt: z.number().optional(), floor: z.string().optional(),
    enquiryUrl: z.string().optional(), availability: z.object({ status: z.string(), verifiedAt: z.string().optional(), availableFrom: z.string().optional() }).optional(),
  }).nullable().optional(),
});

const searchResponse = z.object({
  data: z.array(propertySchema),
  boundary: z.object({
    name: z.string(), source: z.string(),
    polygon: z.array(z.tuple([z.number(), z.number()])).min(4).max(501),
  }).optional(),
  page: z.object({ nextCursor: z.string().nullable() }),
});

export type SearchResult = z.infer<typeof propertySchema>;

export class SearchError extends Error {
  constructor(readonly status: number) {
    super('Property search failed');
  }
}

export async function fetchProperties(filters: URLSearchParams, cursor: string | null, signal: AbortSignal) {
  const params = new URLSearchParams(filters);
  if (cursor) params.set('cursor', cursor);
  const response = await apiFetch(`/api/v1/properties/search?${params}`, {
    cache: 'no-store',
    signal,
  });
  if (!response.ok) throw new SearchError(response.status);
  return searchResponse.parse(await response.json());
}

export async function fetchProperty(id: string, signal: AbortSignal) {
  const response = await apiFetch(`/api/v1/properties/${encodeURIComponent(id)}`, { signal });
  if (!response.ok) throw new SearchError(response.status);
  return z.object({ data: propertySchema }).parse(await response.json()).data;
}
