'use client';

import { configurationLabel, rupees, type RentalProperty } from './api';

const readable = (value?: string | null) => value ? value.toLowerCase().replaceAll('_', ' ') : 'Not supplied';
const yesNo = (value?: boolean) => value === undefined ? 'Not supplied' : value ? 'Yes' : 'No';
function availability(property: RentalProperty) {
  const record = property.rental?.availability;
  if (property.source.synthetic) return 'Sample listing · not a real rental offer';
  if (record?.status === 'UNAVAILABLE') return 'No longer available';
  const checked = Date.parse(record?.verifiedAt ?? '');
  return record?.status === 'AVAILABLE' && checked <= Date.now() && Date.now() - checked <= 48 * 3600000 ? 'Available · recently verified' : 'Availability confirmation required';
}
export function RentalDetails({ property, shortlisted, onClose, onPin, onAsk }: {
  property: RentalProperty; shortlisted: boolean; onClose(): void; onPin(): void; onAsk(question: string): void;
}) {
  const facts = property.rental;
  return <aside className="rental-details" aria-label="Selected property details"><div className="rental-panel-heading"><span className="rental-eyebrow">PROPERTY DETAILS</span><button className="light" onClick={onClose}>Close details</button></div>
    <div className="rental-details-scroll">
      {facts?.images?.length ? <div className="rental-photo-strip">{facts.images.map((url, index) => <img key={`${url}-${index}`} src={url} alt={`${property.title}, photo ${index + 1}`} loading="lazy" referrerPolicy="no-referrer" />)}</div>
        : <div className="rental-no-photo"><span aria-hidden="true">⌂</span><p>No photos supplied by the source</p></div>}
      <span className="rental-configuration">{configurationLabel(property)} · {facts?.dwellingTypeKnown === false || property.type === 'unknown' || property.source.name.startsWith('House_Rent_Dataset.csv') ? 'Property type not supplied' : readable(property.type)}</span><h2>{property.title}</h2><p>{property.locality ?? 'Locality not supplied'}{property.city ? `, ${property.city}` : ''}</p>
      <p className="rental-detail-price">{rupees(property.priceInr)}<span>/ month</span></p><p className={`rental-availability ${property.source.synthetic ? 'sample' : ''}`}>{availability(property)}</p>
      <dl className="rental-facts"><div><dt>Security deposit</dt><dd>{rupees(facts?.depositInr)}</dd></div><div><dt>Furnishing</dt><dd>{readable(facts?.furnishing)}</dd></div>
        <div><dt>Available from</dt><dd>{facts?.availability?.availableFrom ?? 'Not supplied'}</dd></div><div><dt>Area</dt><dd>{facts?.areaSqFt ? `${facts.areaSqFt} sq ft` : 'Not supplied'}</dd></div><div><dt>Floor</dt><dd>{facts?.floor ?? 'Not supplied'}</dd></div>
        <div><dt>Bike parking</dt><dd>{yesNo(facts?.bikeParking)}</dd></div><div><dt>Car parking</dt><dd>{yesNo(facts?.carParking)}</dd></div><div><dt>Gated community</dt><dd>{yesNo(facts?.gatedCommunity)}</dd></div><div><dt>Pets allowed</dt><dd>{yesNo(facts?.petsAllowed)}</dd></div>
        <div><dt>Bathrooms</dt><dd>{facts?.bathrooms ?? 'Not supplied'}</dd></div><div><dt>Area type</dt><dd>{facts?.areaType ?? 'Not supplied'}</dd></div>
        <div><dt>Tenant preference</dt><dd>{facts?.tenantPreferred ?? 'Not supplied'}</dd></div><div><dt>Contact type</dt><dd>{facts?.contactType ?? 'Not supplied'}</dd></div>
        <div><dt>Address</dt><dd>{facts?.address ?? 'Not supplied'}</dd></div></dl>
      <h3>Amenities</h3><p>{facts?.amenities?.length ? facts.amenities.map(readable).join(', ') : 'No amenity information supplied.'}</p>
      <p className="rental-quiet">{!property.location ? 'Map coordinates were not supplied. This listing cannot be placed on the map or used as a commute origin.' : property.coordinateQuality === 'verified_entrance' ? 'Entrance coordinates verified by the source.' : 'Approximate location. The entrance may differ.'}</p>
      <p className="rental-quiet">Source: {property.source.name}<br />Updated {new Date(property.source.updatedAt).toLocaleDateString('en-IN')} · Listing ID {property.id}</p>
      {facts?.enquiryUrl && /^https:\/\//.test(facts.enquiryUrl) && <a className="rental-enquiry" href={facts.enquiryUrl} target="_blank" rel="noopener noreferrer">Enquire with listing source</a>}
    </div>
    <div className="rental-details-actions"><button onClick={onPin}>Ask AI About This Property</button><div><button className="light" onClick={() => onAsk('How far is this property from my office?')}>Check commute</button><button className="light" onClick={() => onAsk('Shortlist this property')}>{shortlisted ? 'Shortlisted' : 'Shortlist'}</button></div></div>
  </aside>;
}
export function AgentComparison({ properties, onSelect }: { properties: RentalProperty[]; onSelect(id: string): void }) {
  return <section className="rental-comparison" aria-label="Property facts comparison"><h2>{properties.length === 1 ? 'Listing facts' : 'Property comparison'}</h2>
    {properties.map(property => <article key={property.id}><button className="rental-candidate-title" onClick={() => onSelect(property.id)}>{property.title}</button><dl className="rental-facts">
      <div><dt>Configuration</dt><dd>{configurationLabel(property)}</dd></div><div><dt>Monthly rent</dt><dd>{rupees(property.priceInr)}</dd></div><div><dt>Deposit</dt><dd>{rupees(property.rental?.depositInr)}</dd></div>
      <div><dt>Furnishing</dt><dd>{readable(property.rental?.furnishing)}</dd></div><div><dt>Bike parking</dt><dd>{yesNo(property.rental?.bikeParking)}</dd></div><div><dt>Gated community</dt><dd>{yesNo(property.rental?.gatedCommunity)}</dd></div><div><dt>Availability</dt><dd>{availability(property)}</dd></div></dl></article>)}
  </section>;
}
