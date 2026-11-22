'use client';

import { apiFetch } from '../../embed/session';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { z } from 'zod';
import type { Point } from '../area';

const payload = z.object({
  data: z.array(z.object({
    id: z.string(), name: z.string(), address: z.string().optional(),
    location: z.object({ lat: z.number().min(-90).max(90), lng: z.number().min(-180).max(180) }),
    attributions: z.array(z.object({ provider: z.string(), providerUri: z.string().optional() })),
  })),
});

export function AnchorPicker({ onPick, onClear, selectedLabel, initialQuery = '', label = 'Location, building or landmark', searchButtonLabel = 'Find location' }: {
  onPick(point: Point, label: string): void;
  onClear(): void;
  initialQuery?: string;
  selectedLabel: string;
  label?: string;
  searchButtonLabel?: string;
}) {
  const inputId = useId();
  const [text, setText] = useState(initialQuery);
  const [selectedId, setSelectedId] = useState<string>();
  const [results, setResults] = useState<z.infer<typeof payload>['data']>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const active = useRef<AbortController>(null);
  useEffect(() => () => active.current?.abort(), []);

  function changeText(value: string) {
    active.current?.abort();
    setText(value);
    setResults(undefined);
    setSelectedId(undefined);
    setLoading(false);
    setError('');
    onClear();
  }

  async function search(event: FormEvent) {
    event.preventDefault();
    active.current?.abort();
    const request = new AbortController();
    active.current = request;
    onClear();
    setSelectedId(undefined);
    setLoading(true);
    setError('');
    setResults(undefined);
    try {
      const response = await apiFetch('/api/v1/locations/search', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query: text.trim() }),
        cache: 'no-store', signal: AbortSignal.any([request.signal, AbortSignal.timeout(12000)]),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = data?.error?.code === 'PROVIDER_DISABLED'
          ? 'Location search is unavailable right now. You can choose a point on the map.'
          : response.status === 429 ? 'The location lookup limit was reached. Try again later.'
          : 'Location search is temporarily unavailable. Try again or choose a point on the map.';
        if (!request.signal.aborted) setError(message);
        return;
      }
      const data = payload.parse(await response.json()).data;
      if (!request.signal.aborted) setResults(data);
    } catch {
      if (!request.signal.aborted) setError('Location search is temporarily unavailable. Try again or choose a point on the map.');
    } finally {
      if (!request.signal.aborted) setLoading(false);
    }
  }

  return (
    <section className="location-search" aria-label="Find a location">
      <form className="corner-form" onSubmit={search}>
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} type="search" required minLength={3} maxLength={100}
          value={selectedLabel || text} onChange={event => changeText(event.target.value)}
          placeholder="e.g. Bellandur, EcoSpace or a building name" autoComplete="off" />
        {selectedLabel
          ? <button className="light" type="button" onClick={() => changeText('')}>Change location</button>
          : <button type="submit" disabled={loading}>{loading ? 'Finding places…' : searchButtonLabel}</button>}
      </form>
      {loading && <p role="status">Looking up matching places…</p>}
      {error && <p className="notice" role="alert">{error}</p>}
      {results?.length === 0 && <p>No matching locations. Add a city or street and try again.</p>}
      {results && results.length > 0 && !selectedLabel && <div className="google-content place-suggestions">
        <p>Choose the place you meant.</p>
        <ul className="facility-list" aria-label="Matching locations">{results.map(place => (
          <li key={place.id}>
            <button type="button" className="light" aria-pressed={selectedId === place.id} onClick={() => {
              setSelectedId(place.id);
              setText(place.name);
              onPick(place.location, place.name);
            }}>{place.name}</button>
            {place.address && <p>{place.address}</p>}
            {place.attributions.map((source, index) => <p key={index}>{source.provider}</p>)}
          </li>
        ))}</ul>
        <p className="map-credit" translate="no">Google Maps</p>
      </div>}
    </section>
  );
}
