import type { SearchResult } from '../api';

const priceFormat = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

export function listingPrice(property: SearchResult) {
  if (property.priceInr === null) return 'Price unavailable';
  return priceFormat.format(property.priceInr) + (property.intent === 'rent' ? ' / month' : '');
}

export function propertySummary(property: SearchResult) {
  return `${property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} BHK`} · ${property.locality ?? 'Locality unavailable'}`;
}
