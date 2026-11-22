'use client';

import { useRef, useState } from 'react';
import { initialRadius, numericQueryValue, presets, type Point, type SearchSelection } from '../area';

import { SearchAssistant, type Interpretation } from './search-assistant';
import { AnchorPicker } from './anchor-picker';
import { LocalityPicker } from './locality-picker';

export type AreaMode = 'radius' | 'polygon' | 'locality';

type Props = {
  mode: AreaMode;
  setMode(mode: AreaMode): void;
  pin: { lat: string; lng: string; label: string };
  setPin(pin: { lat: string; lng: string; label: string }): void;
  points: readonly Point[];
  changePoints(points: Point[]): void;
  onSearch(params: URLSearchParams, area: SearchSelection): void;
  expand?: boolean;
  busy: boolean;
};

export function SearchFilters({ mode, setMode, pin, setPin, points, changePoints, onSearch, expand, busy }: Props) {
  const advanced = useRef<HTMLDetailsElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [acknowledged, setAcknowledged] = useState(false);
  const [suggestion, setSuggestion] = useState<Interpretation>();
  const [locality, setLocality] = useState('');
  const [radius, setRadius] = useState(initialRadius);
  const [entry, setEntry] = useState<'location' | 'description'>('location');
  const [error, setError] = useState('');

  function apply(draft: Interpretation) {
    setSuggestion(draft);
    if (advanced.current) advanced.current.open = true;
    setAcknowledged(false);
    for (const [key, value] of Object.entries({
      intent: draft.intent, bedrooms: draft.bedrooms, maxPriceInr: draft.maxPriceInr,
    })) {
      const field = form.current?.elements.namedItem(key);
      if (value !== null && (field instanceof HTMLInputElement || field instanceof HTMLSelectElement)) field.value = String(value);
    }
    if (draft.radiusKm !== null) setRadius(Math.round(draft.radiusKm * 10) / 10);
    if (draft.locality) {
      setLocality('');
      setMode('locality');
    } else if (draft.officeOrLandmark) {
      setPin({ lat: '', lng: '', label: '' });
      setEntry('location');
      setMode('radius');
    }
  }

  function search(radiusOverride?: number) {
    if (!form.current) return;
    if (!form.current.checkValidity()) {
      if (advanced.current) advanced.current.open = true;
      form.current.reportValidity();
      return;
    }
    const filters = new URLSearchParams();
    for (const [key, value] of new FormData(form.current)) {
      if (typeof value === 'string' && value) filters.set(key, value);
    }
    let area: SearchSelection;
    if (mode === 'radius') {
      if (pin.lat === '' || pin.lng === '' || !Number.isFinite(Number(pin.lat)) || !Number.isFinite(Number(pin.lng))) {
        setError('Find a location and choose the matching place, or select a point on the map.');
        return;
      }
      const center = { lat: Number(numericQueryValue(Number(pin.lat))), lng: Number(numericQueryValue(Number(pin.lng))) };
      const distance = radiusOverride ?? radius;
      area = { kind: 'radius', center, radiusKm: distance };
      filters.set('lat', numericQueryValue(center.lat));
      filters.set('lng', numericQueryValue(center.lng));
      filters.set('radiusKm', numericQueryValue(distance));
    } else if (mode === 'locality') {
      if (!locality) {
        setError('Choose a verified locality before searching.');
        return;
      }
      area = { kind: 'locality', id: locality };
      filters.set('localityId', locality);
    } else {
      if (points.length < 3) {
        setError('Add at least three corners to draw the search area.');
        return;
      }
      area = { kind: 'polygon', points };
      filters.set('polygon', JSON.stringify(points.map(({ lat, lng }) => [lng, lat])));
    }
    if (suggestion?.unverifiedRequirements.length && !acknowledged) {
      setError('Confirm that you want to search using only the verified filters below.');
      return;
    }
    if (filters.has('maxPriceInr') && !filters.has('intent')) {
      setError('Choose rent or buy to apply a maximum price.');
      return;
    }
    setError('');
    filters.set('limit', '3');
    onSearch(filters, area);
  }

  return (
    <div className="filters">
      <div className="segments" aria-label="Search input">
        <button type="button" aria-pressed={entry === 'location'} onClick={() => setEntry('location')}>Place name</button>
        <button type="button" aria-pressed={entry === 'description'} onClick={() => setEntry('description')}>Describe search</button>
      </div>
      {entry === 'description' ? <SearchAssistant onApply={apply} /> :
        <AnchorPicker key={`anchor:${suggestion?.officeOrLandmark ?? ''}`} initialQuery={suggestion?.officeOrLandmark ?? ''} selectedLabel={pin.label}
          onClear={() => { setPin({ lat: '', lng: '', label: '' }); setError(''); }}
          onPick={(point, label) => {
            setPin({ lat: numericQueryValue(point.lat), lng: numericQueryValue(point.lng), label });
            setError('');
            setMode('radius');
          }} />}
      <div className="segments" aria-label="Search area">
        <button aria-pressed={mode === 'locality'} onClick={() => { setError(''); setMode('locality'); }}>Locality</button>
        <button aria-pressed={mode === 'radius'} onClick={() => { setError(''); setMode('radius'); }}>Near a place</button>
        <button aria-pressed={mode === 'polygon'} onClick={() => { setError(''); setMode('polygon'); }}>Draw</button>
      </div>
      {mode === 'locality' && <LocalityPicker key={`locality:${suggestion?.locality ?? ''}`} initialQuery={suggestion?.locality ?? ''} value={locality} onSelect={setLocality} />}
      {mode === 'polygon' && (
        <div className="corner-form">
          <p>Select at least three corners on the map to draw your search area. This boundary replaces the radius.</p>
          <div className="inline-controls">
            {points.length > 0 && <>
              <button type="button" className="light" onClick={() => changePoints(points.slice(0, -1))}>Undo corner</button>
              <button type="button" className="light" onClick={() => changePoints([])}>Clear area</button>
            </>}
          </div>
          <p role="status">{points.length} corners added</p>
        </div>
      )}
      <form ref={form} className="search-form" noValidate onSubmit={event => { event.preventDefault(); search(); }}>
        {mode === 'radius' && <>
          <p className="selected-location" role="status">
            {pin.label ? `Search around ${pin.label}` : 'Choose a location above or select a point on the map.'}
          </p>
        </>}
        <details className="advanced-filters" ref={advanced}>
          <summary>Filters &amp; radius</summary>
          <div className="advanced-fields">
            {mode === 'radius' && <>
              <label>Search radius <span className="range-label">{radius} km</span>
                <input type="range" min="0.1" max="25" step="0.1" value={radius} onChange={event => setRadius(Number(event.target.value))} />
              </label>
              <div className="inline-controls" aria-label="Radius presets">
                {presets.map(value => <button type="button" key={value} className="light" aria-pressed={value === radius} onClick={() => setRadius(value)}>{value} km</button>)}
          </div>
        </>}
        <div className="field-pair">
          <label>Listing type<select name="intent"><option value="">Any</option><option value="rent">Rent</option><option value="buy">Buy</option></select></label>
          <label>Bedrooms (BHK)<input type="number" name="bedrooms" min="0" max="20" step="1" placeholder="Any" /></label>
          <label>Maximum price (₹)<input type="number" name="maxPriceInr" min="1" max="100000000000" step="1" placeholder="Any" /></label>
          <label>Property type<select name="type"><option value="">Any</option><option value="apartment">Apartment</option><option value="house">House</option><option value="townhouse">Townhouse</option></select></label>
        </div>
          </div>
        </details>
        {Boolean(suggestion?.unverifiedRequirements.length) && <label className="constraint-confirm">
          <input type="checkbox" checked={acknowledged} onChange={event => setAcknowledged(event.target.checked)} />
          Search using the manual filters only. The additional requirements are unverified.
        </label>}
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" aria-busy={busy}>Search properties</button>
        {expand && mode === 'radius' && radius < 25 && <button type="button" className="light" onClick={() => {
          const next = presets.find(value => value > radius) ?? 25;
          setRadius(next);
          search(next);
        }}>Expand area</button>}
      </form>
    </div>
  );
}
