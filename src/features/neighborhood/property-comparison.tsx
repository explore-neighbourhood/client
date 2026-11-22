'use client';

import { useRef } from 'react';
import type { SearchResult } from '../property-search/api';
import { listingPrice, propertySummary } from '../property-search/components/property-details';
import { categories } from './categories';
import { travelNames, type RouteEvidence } from './route-evidence';

export function PropertyComparison({ homes, evidence, onSelect, onRemove }: {
  homes: SearchResult[];
  evidence: RouteEvidence[];
  onSelect(id: string): void;
  onRemove(home: SearchResult): void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <p>{homes.length} of 3 homes selected</p>
      {homes.length < 2 && <p>Add two homes to compare their listing details and checked journeys.</p>}
      <ul className="comparison-list">
        {homes.map(home => <li key={home.id}>
          <strong>{home.title}</strong><p>{listingPrice(home)}</p>
          <div className="inline-controls">
            <button className="light" type="button" onClick={() => onSelect(home.id)}>View home</button>
            <button className="light" type="button" aria-label={`Remove ${home.title}`} onClick={() => onRemove(home)}>Remove</button>
          </div>
        </li>)}
      </ul>
      <button type="button" disabled={homes.length < 2} onClick={() => dialog.current?.showModal()}>Compare selected homes</button>
      <dialog ref={dialog} className="comparison-dialog" aria-labelledby="comparison-heading">
        <header className="title-row"><h2 id="comparison-heading">Compare homes</h2><button className="light" type="button" onClick={() => dialog.current?.close()}>Close comparison</button></header>
        <p>Listing facts and journeys checked during this visit. Routes are estimates at the displayed check time.</p>
        <div className="comparison-columns" style={{ gridTemplateColumns: `repeat(${homes.length}, minmax(0, 1fr))` }}>
          {homes.map(home => {
            const routes = evidence.filter(route => route.propertyId === home.id);
            return <section key={home.id} className="comparison-home">
              <h3>{home.title}</h3><strong>{listingPrice(home)}</strong><p>{propertySummary(home)}</p>
              <p>{home.coordinateQuality === 'verified_entrance' ? 'Verified entrance' : 'Approximate or unverified entrance'}</p>
              <p>{home.source.synthetic && 'Sample listing · '}{home.source.name}</p>
              <h4>Checked journeys</h4>
              {routes.length === 0 && <p>No routes checked for this home yet.</p>}
              {routes.map(route => <div key={`${route.destinationId}:${route.mode}`} className="comparison-route">
                <strong>{route.destinationName}</strong>
                <p>{route.category ? categories[route.category] : 'Selected destination'} · {travelNames[route.mode]}</p>
                <p>{(route.distanceMeters / 1000).toFixed(2)} km · about {Math.max(1, Math.round(route.durationSeconds / 60))} min</p>
                <p>Estimated · checked <time dateTime={route.checkedAt}>{new Date(route.checkedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time></p>
              </div>)}
              <h4>Evidence gaps</h4>
              <p>Office commute, emergency capability and other unrequested journeys remain unknown.</p>
              <button className="light" type="button" onClick={() => { dialog.current?.close(); onSelect(home.id); }}>Show home on map</button>
            </section>;
          })}
        </div>
        {homes.some(home => evidence.some(route => route.propertyId === home.id)) && <p className="map-credit" translate="no">Route information from Google Maps</p>}
      </dialog>
    </>
  );
}
