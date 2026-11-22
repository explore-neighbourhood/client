'use client';

import { decode } from '@googlemaps/polyline-codec';
import { useEffect, useRef, useState } from 'react';
import type { SearchResult } from '../property-search/api';
import type { Point } from '../property-search/area';
import { listingPrice, propertySummary } from '../property-search/components/property-details';
import { describeFailure, fetchPlaces, fetchRoute, type Mode, type Place } from './api';
import { categories } from './categories';
import { PropertyComparison } from './property-comparison';
import type { RouteEvidence } from './route-evidence';
import { RoutePreview } from './route-preview';
import { distanceMeters } from './geometry';
import type { JourneyRoute } from './nearby-destinations';

const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
const modes: Record<Mode, string> = { WALK: 'Walking', TWO_WHEELER: 'Motorized two-wheeler', DRIVE: 'Car', TRANSIT: 'Public transit' };
type Category = keyof typeof categories;
type Tab = 'Essentials' | 'Routes' | 'Compare';
type Route = { distanceMeters: number; durationSeconds: number; path: Point[]; mode: Mode; steps?: { distanceMeters: number; instruction: string; maneuver: string }[] };
export type MapNeighborhood = { places: Place[]; category?: Category; route: Point[]; streetPoint?: Point };
const emptyMap = { places: [], route: [] };
const coordinates = {
  verified_entrance: 'Verified entrance coordinates',
  approximate: 'Approximate location. The entrance may differ.',
  unknown: 'Entrance location unverified.',
};

function length(meters: number) {
  return meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(1)} km`;
}

function attributionUri(uri: string | undefined) {
  try {
    if (uri && new URL(uri).protocol === 'https:') return uri;
  } catch { /* Show the provider name without a link. */ }
  return undefined;
}

function sourceLink(property: SearchResult, place: Place, mode: Mode) {
  const params = new URLSearchParams({
    api: '1',
    origin: `${property.location.lat},${property.location.lng}`,
    destination: `${place.location.lat},${place.location.lng}`,
    destination_place_id: place.id,
    travelmode: { WALK: 'walking', DRIVE: 'driving', TRANSIT: 'transit', TWO_WHEELER: 'two-wheeler' }[mode],
  });
  return `https://www.google.com/maps/dir/?${params}`;
}

export function NeighborhoodExplorer({ property, shortlist, toggleShortlist, selectHome, onClose, onMap, pickedPlaceId, onExplore, evidence, onEvidence }:
  { property: SearchResult; shortlist: SearchResult[]; toggleShortlist(property: SearchResult): void; selectHome(id: string): void;
    onClose(): void; onMap(overlay: MapNeighborhood): void; pickedPlaceId?: string; onExplore(route?: JourneyRoute): void; evidence: RouteEvidence[]; onEvidence(evidence: RouteEvidence): void }) {
  const [tab, setTab] = useState<Tab>('Essentials');
  const [radiusMeters, setRadius] = useState(1000);
  const [lastRadius, setLastRadius] = useState(1000);
  const [category, setCategory] = useState<Category>();
  const [places, setPlaces] = useState<Place[]>([]);
  const [destination, setDestination] = useState<Place>();
  const [mode, setMode] = useState<Mode>('WALK');
  const [route, setRoute] = useState<Route | null>();
  const [loading, setLoading] = useState<'places' | 'route'>();
  const [error, setError] = useState<{ tab: Tab; text: string }>();
  const [previewPoint, setPreviewPoint] = useState<Point>();
  const request = useRef<AbortController | null>(null);
  const listed = shortlist.some(home => home.id === property.id);
  const sourceDate = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(property.source.updatedAt));

  useEffect(() => () => {
    request.current?.abort();
    onMap(emptyMap);
  }, [onMap]);

  useEffect(() => {
    onMap({ places, category, route: route?.path ?? [], streetPoint: previewPoint });
  }, [onMap, places, category, route, previewPoint]);

  useEffect(() => {
    if (pickedPlaceId) setTab('Essentials');
  }, [pickedPlaceId]);

  useEffect(() => {
    if (!pickedPlaceId || tab !== 'Essentials') return;
    const item = document.getElementById(`place-${pickedPlaceId}`);
    item?.scrollIntoView({ block: 'nearest' });
    item?.focus({ preventScroll: true });
  }, [pickedPlaceId, places, tab]);

  function begin() {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    return { controller, signal: AbortSignal.any([controller.signal, AbortSignal.timeout(12000)]) };
  }

  async function explore(selected: Category) {
    const { controller, signal } = begin();
    setCategory(selected);
    setLastRadius(radiusMeters);
    setPlaces([]);
    setRoute(undefined);
    setDestination(undefined);
    setError(undefined);
    setLoading('places');
    try {
      const results = await fetchPlaces(property.id, selected, radiusMeters, signal);
      if (!controller.signal.aborted) setPlaces(results);
    } catch (failure) {
      if (!controller.signal.aborted) setError({ tab: 'Essentials', text: describeFailure(failure) });
    } finally {
      if (!controller.signal.aborted) setLoading(undefined);
    }
  }

  async function showRoute(selected: Place, travel: Mode) {
    const { controller, signal } = begin();
    setTab('Routes');
    setDestination(selected);
    setMode(travel);
    setRoute(undefined);
    setError(undefined);
    setLoading('route');
    try {
      const result = await fetchRoute(property.id, selected.destination, travel, signal);
      if (!controller.signal.aborted) {
        if (result) onEvidence({
          propertyId: property.id, destinationId: selected.id, destinationName: selected.name, category,
          mode: travel, distanceMeters: result.distanceMeters, durationSeconds: result.durationSeconds, checkedAt: new Date().toISOString(),
        });
        setRoute(result && {
          ...result, mode: travel, path: decode(result.encodedPolyline).map(([lat, lng]) => ({ lat, lng })),
        });
      }
    } catch (failure) {
      if (!controller.signal.aborted) setError({ tab: 'Routes', text: describeFailure(failure) });
    } finally {
      if (!controller.signal.aborted) setLoading(undefined);
    }
  }

  return (
    <section aria-labelledby="selected-home" className="home-detail">
      <div className="title-row">
        <h2 id="selected-home">{property.title}</h2>
        <button className="light" type="button" onClick={onClose}>Close</button>
      </div>
      <p>{propertySummary(property)}</p>
      <strong className="home-price">{listingPrice(property)}</strong>
      <p>{coordinates[property.coordinateQuality]}</p>
      <p className="listing-attribution">{property.source.synthetic && 'Sample listing · '}{property.source.name} · Updated {sourceDate}</p>
      {property.source.synthetic && <p className="notice">Fictional home and price at an illustrative map point. Places, routes and imagery come from Google for this point.</p>}
      <div className="segments neighborhood-tabs" aria-label="Neighborhood views">
        {(['Essentials', 'Routes', 'Compare'] as const).map(view => (
          <button type="button" key={view} aria-pressed={view === tab} onClick={() => {
            setTab(view);
          }}>{view}</button>
        ))}
        {mapsKey && <button type="button" onClick={() => onExplore(route && destination ? { ...route, destination, category } : undefined)}>Street View</button>}
      </div>
      {error?.tab === tab && <p className="form-error" role="alert">{error.text}</p>}
      {tab === 'Essentials' && <>
        <label>Facility radius
          <select value={radiusMeters} onChange={event => setRadius(Number(event.target.value))}>
            {[500, 1000, 3000, 5000, 10000].map(radius => <option key={radius} value={radius}>{length(radius)}</option>)}
          </select>
        </label>
        <div className="category-grid" aria-label="Nearby categories">
          {(Object.entries(categories) as [Category, string][]).map(([key, label]) => (
            <button className="light" type="button" key={key}
              aria-pressed={category === key} onClick={() => void explore(key)}>{label}</button>
          ))}
        </div>
        {category && <p role="status">
          {loading === 'places' ? 'Finding nearby places…'
            : !error && places.length === 0 ? `No matching places found within ${length(lastRadius)}.`
            : places.length > 0 ? `${places.length} found within ${length(lastRadius)}` : ''}
        </p>}
        {category === 'emergency' && <p className="notice">These are hospital candidates. Emergency services and operating hours are unverified.</p>}
        {places.length > 0 && <div className="google-content">
          <ul className="facility-list">
            {places.map(place => <li key={place.id} id={`place-${place.id}`} tabIndex={-1}
              className={pickedPlaceId === place.id ? 'facility-selected' : undefined}>
              <strong>{place.name}</strong>
              <p>{length(distanceMeters(property.location, place.location))} straight-line distance</p>
              {place.attributions.map((source, index) => {
                const url = attributionUri(source.providerUri);
                return url ? <a key={index} href={url} target="_blank" rel="noreferrer">{source.provider}</a> : <p key={index}>{source.provider}</p>;
              })}
              <button className="light" type="button" onClick={() => void showRoute(place, 'WALK')}>Show route</button>
            </li>)}
          </ul>
          <p className="map-credit" translate="no">Google Maps</p>
        </div>}
      </>}
      {tab === 'Routes' && <>
        {destination ? <>
          <strong>{property.title} to {destination.name}</strong>
          <label>Travel mode
            <select value={mode} onChange={event => setMode(event.target.value as Mode)}>
              {Object.entries(modes).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <button type="button" disabled={loading === 'route'} onClick={() => void showRoute(destination, mode)}>Get route</button>
          {loading === 'route' && <p role="status">Finding a route…</p>}
          {route === null && <p role="status">No route was returned for this mode. Try another travel mode.</p>}
          {route && <div className="google-content journey-details">
            <strong>{modes[route.mode]} · {length(route.distanceMeters)} · about {Math.max(1, Math.round(route.durationSeconds / 60))} min</strong>
            <p>Estimated travel time. {['WALK', 'TWO_WHEELER'].includes(route.mode) && 'This route may omit suitable paths or road restrictions.'}</p>
            <a href={sourceLink(property, destination, route.mode)} target="_blank" rel="noreferrer">Open directions in Google Maps</a>
            {mapsKey && route.path.length > 0 && <button className="light" type="button" onClick={() => onExplore({ ...route, destination, category })}>Explore streets along route</button>}
            <RoutePreview key={`${destination.id}:${route.mode}`} path={route.path} onPosition={setPreviewPoint} />
            <p className="map-credit" translate="no">Google Maps</p>
          </div>}
        </> : <p>Select a nearby place in Essentials to see how to get there.</p>}
      </>}
      {tab === 'Compare' && <>
        <button className="light" type="button" disabled={!listed && shortlist.length >= 3} onClick={() => toggleShortlist(property)}>
          {listed ? 'Remove this home' : 'Add this home to comparison'}
        </button>
        <PropertyComparison homes={shortlist} evidence={evidence} onSelect={selectHome} onRemove={toggleShortlist} />
      </>}
    </section>
  );
}
