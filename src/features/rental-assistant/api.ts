import { z } from 'zod';
import { apiFetch } from '../embed/session';
import { propertySchema } from '../property-search/api';

export const rentalPropertySchema = propertySchema.extend({
  city: z.string().nullable().optional(),
  location: z.object({ lat: z.number(), lng: z.number() }).nullable(),
  rental: propertySchema.shape.rental.unwrap().unwrap().extend({ bathrooms: z.number().optional(), areaType: z.string().optional(), tenantPreferred: z.string().optional(), contactType: z.string().optional(), dwellingTypeKnown: z.boolean().optional() }).nullable().optional(),
});
export type RentalProperty = z.infer<typeof rentalPropertySchema>;

export const needsSchema = z.object({
  city: z.string().nullable(), locations: z.array(z.string()), officeLocation: z.string().nullable(), configuration: z.string().nullable(),
  budgetMin: z.number().nullable(), budgetMax: z.number().nullable(), depositMax: z.number().nullable(), furnishing: z.string().nullable(),
  moveInDate: z.string().nullable(), amenities: z.array(z.string()), preferences: z.array(z.string()), commuteMaxMinutes: z.number().nullable(),
  commuteMode: z.string(), occupants: z.number().nullable(), pets: z.boolean().nullable(), otherConstraints: z.array(z.string()),
});
export const conversationSchema = z.object({
  id: z.string(), revision: z.number(), requirements: needsSchema, updatedFields: z.array(z.string()), skippedQuestions: z.array(z.string()),
  selectedPropertyId: z.string().nullable(), viewedPropertyIds: z.array(z.string()), pinnedPropertyIds: z.array(z.string()),
  shortlistedPropertyIds: z.array(z.string()), rejectedPropertyIds: z.array(z.string()), expiresAt: z.string(),
  messages: z.array(z.object({ id: z.string(), role: z.enum(['user', 'assistant']), content: z.string(), createdAt: z.string() })),
});
export const candidateSchema = z.object({
  property: rentalPropertySchema, matchType: z.enum(['BEST_MATCH', 'GOOD_MATCH', 'ALTERNATIVE']), availability: z.enum(['VERIFIED', 'CONFIRMATION_REQUIRED']),
  reasons: z.array(z.string()), mismatches: z.array(z.string()), missingPreferences: z.array(z.string()), explanation: z.string(),
});
export const agentResponseSchema = z.object({
  candidates: z.array(candidateSchema), searchedCount: z.number(), truncated: z.boolean(), missingInformation: z.array(z.string()),
  mapAction: z.object({ type: z.string(), locations: z.array(z.string()), areaDisclosure: z.string(),
    boundary: z.object({ name: z.string(), source: z.string(), polygon: z.array(z.tuple([z.number(), z.number()])) }).nullable(),
    highlightPropertyIds: z.array(z.string()), candidatePropertyIds: z.array(z.string()),
  }),
  modelAvailable: z.boolean(), message: z.string().optional(), aiUsed: z.boolean().optional(), comparison: z.array(rentalPropertySchema).optional(),
  commute: z.object({ status: z.string(), durationSeconds: z.number().optional(), distanceMeters: z.number().optional(), encodedPolyline: z.string().optional(), mode: z.string().optional(), choices: z.array(z.object({ id: z.string(), name: z.string() })).optional() }).nullable().optional(),
  explanations: z.array(z.object({ propertyId: z.string(), text: z.string() })).optional(),
  locationChoices: z.array(z.object({ id: z.string(), name: z.string(), location: z.object({ lat: z.number(), lng: z.number() }), attributions: z.array(z.object({ provider: z.string(), providerUri: z.string().optional() })) })).optional(),
});
export type Conversation = z.infer<typeof conversationSchema>;
export type AgentResponse = z.infer<typeof agentResponseSchema>;
export type Candidate = z.infer<typeof candidateSchema>;
export type ConversationCredentials = { id: string; key: string };
export class RentalApiError extends Error {
  constructor(readonly status: number, message: string) { super(message); }
}
export async function rentalRequest(path: string, schema: z.ZodType, init: RequestInit = {}, credentials?: ConversationCredentials) {
  const headers = new Headers(init.headers);
  if (init.body) headers.set('Content-Type', 'application/json');
  if (credentials) headers.set('X-Conversation-Key', credentials.key);
  const result = await apiFetch(`/api/v1/rental/${path}`, { ...init, headers });
  if (!result.ok) {
    const error = await result.json().catch(() => ({}));
    throw new RentalApiError(result.status, error.error?.message ?? 'The rental service is temporarily unavailable. Please retry.');
  }
  if (result.status === 204) return null;
  return schema.parse(await result.json());
}
const envelope = z.object({ data: conversationSchema, response: agentResponseSchema.optional(), conversationKey: z.string().optional() });
export async function conversationRequest(path: string, init?: RequestInit, credentials?: ConversationCredentials) {
  return envelope.parse(await rentalRequest(path, envelope, init, credentials));
}
export async function getCatalog(signal: AbortSignal, bounds?: string, cursor?: string) {
  const schema = z.object({ data: z.array(rentalPropertySchema), truncated: z.boolean(), nextCursor: z.string().nullable().default(null) });
  const params = new URLSearchParams(); if (bounds) params.set('bounds', bounds); if (cursor) params.set('cursor', cursor);
  return schema.parse(await rentalRequest(`catalog?${params}`, schema, { signal }));
}
export async function getRentalProperty(id: string, signal: AbortSignal) {
  const schema = z.object({ data: rentalPropertySchema });
  return schema.parse(await rentalRequest(`properties/${encodeURIComponent(id)}`, schema, { signal })).data;
}
export const configurationLabel = (property: RentalProperty) => property.rental?.configuration ?? (property.bedrooms ? `${property.bedrooms}BHK` : 'Home');
export const rupees = (value: number | null | undefined) => value == null ? 'Not supplied' : `₹${new Intl.NumberFormat('en-IN').format(value)}`;
