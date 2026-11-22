'use client';

import { decode } from '@googlemaps/polyline-codec';
import { useEffect, useRef, useState } from 'react';
import { categories, type Category } from './categories';
import { describeFailure, fetchPlaces, fetchRoute, type Mode, type Place } from './api';
import type { Point } from '../property-search/area';

export type JourneyRoute = {
  destination: Place;
  category?: Category;
  mode: Mode;
  distanceMeters: number;
  durationSeconds: number;
  path: Point[];
  direct?: boolean;
  steps?: { distanceMeters: number; instruction: string; maneuver: string }[];
};

export function NearbyDestinations({ origin, onPlaces, onRoute, onClose }: {
  origin: string | Point;
  onPlaces(places: Place[], category: Category): void;
  onRoute(route: JourneyRoute): void;
  onClose(): void;
}) {
  const [category, setCategory] = useState<Category>('hospital');
  const [radius, setRadius] = useState(1000);
  const [mode, setMode] = useState<Mode>('WALK');
  const [places, setPlaces] = useState<Place[]>();
  const [resultCategory, setResultCategory] = useState<Category>('hospital');
  const [resultRadius, setResultRadius] = useState(1000);
  const [status, setStatus] = useState<'idle' | 'places' | 'route'>('idle');
  const [message, setMessage] = useState('');
  const active = useRef<AbortController | null>(null);
  useEffect(() => () => active.current?.abort(), []);

  function request() {
    active.current?.abort();
    const controller = new AbortController();
    active.current = controller;
    setMessage('');
    return { controller, signal: AbortSignal.any([controller.signal, AbortSignal.timeout(12000)]) };
  }

  async function findPlaces() {
    const { controller, signal } = request();
    setPlaces(undefined);
    onPlaces([], category);
    setStatus('places');
    try {
      const results = await fetchPlaces(origin, category, radius, signal);
      if (!controller.signal.aborted) {
        setPlaces(results);
        setResultCategory(category);
        setResultRadius(radius);
        onPlaces(results, category);
      }
    } catch (error) {
      if (!controller.signal.aborted) setMessage(describeFailure(error));
    } finally {
      if (!controller.signal.aborted) setStatus('idle');
    }
  }

  async function routeTo(destination: Place) {
    const { controller, signal } = request();
    setStatus('route');
    try {
      const result = await fetchRoute(origin, destination.destination, mode, signal);
      if (controller.signal.aborted) return;
      if (!result) { setMessage('No route is available for this travel mode. Try another mode.'); return; }
      onRoute({
        destination, category: resultCategory, mode, distanceMeters: result.distanceMeters, durationSeconds: result.durationSeconds, steps: result.steps,
        path: decode(result.encodedPolyline).map(([lat, lng]) => ({ lat, lng })),
      });
    } catch (error) {
      if (!controller.signal.aborted) setMessage(describeFailure(error));
    } finally {
      if (!controller.signal.aborted) setStatus('idle');
    }
  }

  return (
    <section className="walk-destinations" aria-label="Nearby destinations">
      <div className="title-row"><h3>Nearby Places</h3><button type="button" className="light" onClick={onClose}>Close places</button></div>
      <div className="field-pair">
        <label>Category<select value={category} onChange={event => setCategory(event.target.value as Category)}>
          {Object.entries(categories).map(([value, name]) => <option key={value} value={value}>{name}</option>)}
        </select></label>
        <label>Facility radius<select value={radius} onChange={event => setRadius(Number(event.target.value))}>
          {[500, 1000, 3000, 5000, 10000].map(value => <option key={value} value={value}>{value < 1000 ? '500 m' : `${value / 1000} km`}</option>)}
        </select></label>
      </div>
      <button type="button" onClick={() => void findPlaces()} disabled={status !== 'idle'}>Find nearby places</button>
      <label>Travel mode<select value={mode} onChange={event => setMode(event.target.value as Mode)}>
        <option value="WALK">Walking</option><option value="TWO_WHEELER">Bike · motorized two-wheeler</option>
        <option value="DRIVE">Car</option><option value="TRANSIT">Public transit</option>
      </select></label>
      {(category === 'emergency' || places?.length && resultCategory === 'emergency') ? <p className="notice">Hospital candidates. Emergency services and operating hours are unverified.</p> : null}
      {status !== 'idle' && <p role="status">{status === 'route' ? 'Calculating route…' : 'Finding nearby places…'}</p>}
      {message && <p className="notice" role="alert">{message}</p>}
      {places?.length === 0 && <p>No matching places were returned. Try a wider radius.</p>}
      {places && places.length > 0 && <div className="google-content">
        <p>{categories[resultCategory]} within {resultRadius < 1000 ? `${resultRadius} m` : `${resultRadius / 1000} km`} of the selected starting location.</p>
        {(category !== resultCategory || radius !== resultRadius) && <p>Choose Find nearby places to apply the changed category or radius.</p>}
        <ul className="facility-list">{places.map(place => <li key={place.id}>
          <strong>{place.name}</strong>
          {place.attributions.map((source, index) => <p key={index}>{source.provider}</p>)}
          <button type="button" className="light" disabled={status !== 'idle'} onClick={() => void routeTo(place)}>Show Route</button>
        </li>)}</ul>
        <p className="map-credit" translate="no">Google Maps</p>
      </div>}
    </section>
  );
}
