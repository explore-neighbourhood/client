import type { Mode } from './api';
import type { Category } from './categories';

export type RouteEvidence = {
  propertyId: string;
  destinationId: string;
  destinationName: string;
  category?: Category;
  mode: Mode;
  distanceMeters: number;
  durationSeconds: number;
  checkedAt: string;
};

export const travelNames: Record<Mode, string> = {
  WALK: 'Walking', TWO_WHEELER: 'Motorized two-wheeler', DRIVE: 'Car', TRANSIT: 'Public transit',
};
