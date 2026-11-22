'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { AppearanceControl } from '../appearance/appearance';
import { JourneyPlanner, type JourneyLocation } from '../journey-planner/journey-planner';
import { distanceMeters } from '../neighborhood/geometry';
import type { WalkLocation } from '../neighborhood/surroundings-walk';
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { numericQueryValue, type Point, type SearchArea, type SearchSelection } from './area';
import { AreaMap } from './components/area-map';
import { MapLocationSearch } from './components/map-location-search';
import { listingPrice, propertySummary } from './components/property-details';
import { SheetHandle } from './components/sheet-handle';
import type { RouteEvidence } from '../neighborhood/route-evidence';
import type { JourneyRoute } from '../neighborhood/nearby-destinations';
import { SearchFilters, type AreaMode } from './components/search-filters';
import { NeighborhoodExplorer, type MapNeighborhood } from '../neighborhood/neighborhood-explorer';
import type { SearchResult } from './api';
import { usePropertySearch } from './use-property-search';

const SurroundingsWalk = dynamic(() => import('../neighborhood/surroundings-walk').then(module => module.SurroundingsWalk), {
  ssr: false, loading: () => <div className="walk-loading" role="status">Opening your surroundings…</div>,
});

export function PropertyExplorer({ initialProperty, embedded = false }: { initialProperty?: SearchResult; embedded?: boolean }) {
  const resultBody = useRef<HTMLDivElement>(null);
  const detailPanel = useRef<HTMLElement>(null);
  const [walk, setWalk] = useState<WalkLocation | null>(null);
  const [panel, setPanel] = useState<'homes' | 'journey'>('homes');
  const [journeyMapPoint, setJourneyMapPoint] = useState<Point>();
  const [mapStart, setMapStart] = useState<JourneyLocation>();
  const [mapDestination, setMapDestination] = useState<JourneyLocation>();
  const [searchSettingsOpen, setSearchSettingsOpen] = useState(true);
  const [sheetHeight, setSheetHeight] = useState(50);
  const [evidence, setEvidence] = useState<RouteEvidence[]>([]);
  const [walkMapView, setWalkMapView] = useState(false);
  const [walkPosition, setWalkPosition] = useState<Point>();
  const [mode, setMode] = useState<AreaMode>('radius');
  const [pin, setPin] = useState(initialProperty ? { lat: String(initialProperty.location.lat), lng: String(initialProperty.location.lng), label: initialProperty.title } : { lat: '', lng: '', label: '' });
  const [points, setPoints] = useState<Point[]>([]);
  const [activeArea, setActiveArea] = useState<SearchArea | null>(null);
  const [requestedArea, setRequestedArea] = useState<SearchSelection | null>(null);
  const [boundary, setBoundary] = useState<{ name: string; source: string }>();
  const [selection, setSelection] = useState<string | undefined>(initialProperty?.id);
  const [pickedPlace, setPickedPlace] = useState<string>();
  const [overlay, setOverlay] = useState<MapNeighborhood>({ places: [], route: [] });
  const previousOverlay = useRef<MapNeighborhood>({ places: [], route: [] });
  const [shortlist, setShortlist] = useState<SearchResult[]>([]);
  const [view, setView] = useState<'map' | 'list'>('map');
  const { state, search, next, retry } = usePropertySearch();
  const selected = (initialProperty?.id === selection ? initialProperty : undefined) ?? state.results.find(result => result.id === selection) ?? shortlist.find(result => result.id === selection);
  const mapProperties = useMemo(() => initialProperty && state.results.length === 0 ? [initialProperty] : state.results, [initialProperty, state.results]);
  const pendingPin = useMemo(() => mode === 'radius' && pin.lat !== '' && pin.lng !== ''
    ? { lat: Number(pin.lat), lng: Number(pin.lng) } : null, [mode, pin.lat, pin.lng]);
  const plannerStart = useMemo(() => mapStart ?? (pendingPin ? { point: pendingPin, label: pin.label }
    : selected ? { point: selected.location, label: selected.title } : undefined), [mapStart, selected, pendingPin, pin.label]);
  const plannerDestination = useMemo(() => mapDestination ?? (selected && pendingPin && distanceMeters(selected.location, pendingPin) > 5
    ? { point: selected.location, label: selected.title } : undefined), [mapDestination, selected, pendingPin]);

  useEffect(() => {
    if (!selection) return;
    const card = resultBody.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"]');
    card?.scrollIntoView({ block: 'nearest' });
    detailPanel.current?.scrollTo({ top: 0 });
  }, [selection]);

  const noResults = state.status === 'done' && state.results.length === 0;

  const recordEvidence = useCallback((route: RouteEvidence) => {
    setEvidence(current => [...current.filter(item => !(item.propertyId === route.propertyId && item.destinationId === route.destinationId && item.mode === route.mode)), route]);
  }, []);

  function selectHome(id: string) {
    setMapStart(undefined);
    setMapDestination(undefined);
    setSheetHeight(50);
    setPickedPlace(undefined);
    setWalk(null);
    setSelection(id);
    setView('map');
  }

  function exploreSurroundings(journey?: JourneyRoute) {
    const point = selected?.location ?? pendingPin;
    if (!point) return;
    setWalkPosition(undefined);
    setWalkMapView(false);
    previousOverlay.current = overlay;
    setWalk({
      point, title: selected?.title ?? pin.label ?? 'Selected location',
      synthetic: selected?.source.synthetic, propertyId: selected?.id, path: journey?.path, journey,
      initialView: 'street',
    });
    setView('map');
  }

  function previewJourney(journey?: JourneyRoute) {
    setOverlay({ places: journey ? [journey.destination] : [], route: journey?.path ?? [] });
    if (journey) setView('map');
  }

  function viewJourney(journey: JourneyRoute, origin: JourneyLocation) {
    previousOverlay.current = overlay;
    setWalkPosition(undefined);
    setWalkMapView(false);
    setWalk({ point: origin.point, title: origin.label, journey, path: journey.path, initialView: 'person' });
    setView('map');
  }

  function toggleShortlist(property: SearchResult) {
    setShortlist(current => current.some(home => home.id === property.id)
      ? current.filter(home => home.id !== property.id) : current.length < 3 ? [...current, property] : current);
  }

  function applyBoundary(area: SearchSelection, locality?: { name: string; source: string; polygon: [number, number][] }) {
    if (area.kind === 'locality') {
      if (locality) {
        setActiveArea({ kind: 'polygon', points: locality.polygon.map(([lng, lat]) => ({ lat, lng })) });
        setBoundary({ name: locality.name, source: locality.source });
      }
    } else {
      setActiveArea(area);
    }
  }

  function submit(filters: URLSearchParams, area: SearchSelection) {
    setMapStart(undefined);
    setMapDestination(undefined);
    setSearchSettingsOpen(false);
    setSelection(undefined);
    setWalk(null);
    if (area.kind !== 'locality') setActiveArea(area);
    setView('list');
    resultBody.current?.scrollTo({ top: 0 });
    setBoundary(undefined);
    setRequestedArea(area);
    void search(filters).then(result => {
      if (result) applyBoundary(area, result.boundary);
      if (!result || result.data.length === 0) setSearchSettingsOpen(true);
    });
  }

  function pickPoint(point: Point) {
    if (mode === 'locality') return;
    setMapStart(undefined);
    setMapDestination(undefined);
    setSelection(undefined);
    setWalk(null);
    const precise = { lat: Number(numericQueryValue(point.lat)), lng: Number(numericQueryValue(point.lng)) };
    if (mode === 'radius') {
      setPin({ lat: String(precise.lat), lng: String(precise.lng), label: 'Selected map location' });
      return;
    }
    setPoints(current => current.length >= 24 || current.some(entry => entry.lat === precise.lat && entry.lng === precise.lng)
      ? current : [...current, precise]);
  }

  return (
    <main className={`explorer-app ${embedded ? 'embedded-explorer' : ''} ${walk ? 'journey-active' : ''}`}>
      <header className="masthead">
        <div className="product-brand"><span className="brand-mark" aria-hidden="true">n</span><h1>Neighborhood Explorer</h1></div>
        <span className="workspace-location" title={pin.label}>{pin.label || 'Bengaluru, India'}</span>
        <AppearanceControl />
        <div className="segments compact-view" aria-label="Results view">
          <button type="button" aria-pressed={view === 'map'} onClick={() => { setWalk(null); setView('map'); }}>Map</button>
          <button type="button" aria-pressed={view === 'list'} onClick={() => { setWalk(null); setSelection(undefined); setView('list'); }}>Search &amp; list</button>
        </div>
      </header>
      <div className={`workspace view-${view} ${panel === 'journey' ? 'planner-active' : ''} ${selected ? 'has-selected-home' : ''} ${walk ? 'is-walking' : ''} ${walk && walkMapView ? 'walk-map-view' : ''}`} style={{ '--sheet-height': `${sheetHeight}%` } as CSSProperties}>
        <aside className={`search-panel ${state.status !== 'idle' ? 'has-search' : ''}`} aria-labelledby={panel === 'homes' ? 'search-heading' : 'journey-planner-heading'}>
          <div className="workspace-tabs" aria-label="Explore or plan">
            <button type="button" aria-pressed={panel === 'homes'} onClick={() => setPanel('homes')}>Find a home</button>
            <button type="button" aria-pressed={panel === 'journey'} onClick={() => { setPanel('journey'); setJourneyMapPoint(undefined); setView('map'); }}>Plan a journey</button>
          </div>
          {panel === 'journey' ? <div className="planner-body"><JourneyPlanner initialStart={plannerStart} initialDestination={plannerDestination} mapSelection={journeyMapPoint}
            onOrigin={origin => { setMapStart(origin); setSelection(undefined); setMode('radius'); setPin({ lat: String(origin.point.lat), lng: String(origin.point.lng), label: origin.label }); }}
            onPreview={previewJourney} onView={viewJourney} /></div> : <>
          <div className="search-intro"><h2 id="search-heading">Start with a place.</h2><p>Find a home. Get to know the neighborhood and the journeys around it.</p></div>
          <details className="search-controls search-settings" open={searchSettingsOpen} onToggle={event => setSearchSettingsOpen(event.currentTarget.open)}>
            <summary>Search settings</summary>
            {process.env.NEXT_PUBLIC_DEMO_MODE === 'true' && <div className="demo-entry">
              <p>Take a look around Bellandur with sample homes.</p>
              <button className="light" type="button" aria-label="Explore Bellandur sample homes" onClick={() => {
                const center = { lat: 12.9257, lng: 77.6762 };
                setMode('radius');
                setPin({ lat: String(center.lat), lng: String(center.lng), label: 'Bellandur sample homes' });
                submit(new URLSearchParams({ lat: String(center.lat), lng: String(center.lng), radiusKm: '3', limit: '20' }),
                  { kind: 'radius', center, radiusKm: 3 });
              }}>Explore Bellandur sample homes</button>
            </div>}
            <SearchFilters mode={mode} setMode={setMode} pin={pin} setPin={setPin}
              points={points} changePoints={setPoints} onSearch={submit} expand={noResults && activeArea?.kind === 'radius'} busy={state.status === 'loading'} />
          </details>
          <section className="results" aria-labelledby="results-heading">
            <div className="title-row">
              <h2 id="results-heading">Properties</h2>
              <p role="status">
                {state.status === 'loading' ? 'Searching…' : state.results.length > 0 ? `${state.results.length} shown` : ''}
              </p>
            </div>
            <div className="result-body" ref={resultBody} tabIndex={0} aria-label="Property results" aria-busy={state.status === 'loading'}>
              {boundary && <p>{boundary.name} · Boundary source {boundary.source}</p>}
              {state.status === 'idle' && <p>Choose a search area to see properties.</p>}
              {noResults && <p>No properties match this area and filters.</p>}
              {state.error && <div className="error" role="alert">
                <p>{state.error}</p>
                <button type="button" className="light" onClick={() => {
                  void retry()?.then(result => { if (result && requestedArea) applyBoundary(requestedArea, result.boundary); });
                }}>Retry</button>
              </div>}
              {state.results.length > 0 && <ul className="property-list">{state.results.map(property => (
                <li key={property.id}>
                  <button className="listing-card" type="button" aria-pressed={selection === property.id} onClick={() => selectHome(property.id)}>
                    {property.source.synthetic && <div className="listing-visual" aria-hidden="true"><Image src="/images/illustrative-apartment.png" alt="" width={640} height={360} sizes="400px" /><span>Illustrative</span></div>}
                    <strong>{property.title}</strong>
                    <span>{propertySummary(property)}</span>
                    <span>{listingPrice(property)}</span>
                    <span>{property.coordinateQuality === 'verified_entrance' ? 'Verified entrance' : 'Approximate location'}</span>
                    <span className="source">Updated {new Date(property.source.updatedAt).toLocaleDateString('en-IN')}</span>
                    <span className="source">{property.source.synthetic ? 'Sample listing · ' : ''}{property.source.name}</span>
                  </button>
                </li>
              ))}</ul>}
              {state.cursor && !state.error && <button className="light" type="button" disabled={state.status === 'loading'} onClick={next}>Load more</button>}
            </div>
          </section>
          </>}
        </aside>
        <div className="map-stage">
          <AreaMap area={activeArea} draft={points} drawing={mode === 'polygon'}
            pendingPin={pendingPin}
            properties={mapProperties} selectedId={selection} onSelect={selectHome} onPick={point => { if (panel === 'journey') setJourneyMapPoint(point); else pickPoint(point); }}
            neighborhood={walk ? { ...overlay, streetPoint: walkPosition } : overlay} onPlace={setPickedPlace} />
          {!walk && <MapLocationSearch compact={panel === 'journey' || mode === 'polygon'} start={mapStart} destination={mapDestination}
            onPick={(target, location) => {
              setOverlay({ places: [], route: [] });
              setJourneyMapPoint(undefined);
              if (target === 'destination') { setMapDestination(location); return; }
              setSelection(undefined);
              setMode('radius');
              setPin({ lat: String(location.point.lat), lng: String(location.point.lng), label: location.label });
              if (target === 'start') setMapStart(location);
              else { setMapStart(undefined); setMapDestination(undefined); }
            }}
            onPlan={() => { setPanel('journey'); setView('map'); }} />}
          {!walk && panel === 'homes' && (selected || mode === 'radius' && pendingPin) && <div className="map-selection-action">
            <strong>{selected?.title ?? pin.label}</strong>
            <button type="button" onClick={() => exploreSurroundings()}>Explore Neighborhood</button>
            <button type="button" className="light" onClick={() => { setPanel('journey'); setJourneyMapPoint(undefined); setView('map'); }}>Plan a journey</button>
          </div>}
          {walk && <SurroundingsWalk key={`${walk.point.lat},${walk.point.lng}:${walk.title}`} location={walk}
            onEvidence={recordEvidence} onMap={setOverlay} onPerspective={setWalkMapView} onPosition={setWalkPosition} onClose={() => { setOverlay(previousOverlay.current); setWalk(null); }} />}
        </div>
        <aside ref={detailPanel} className={`explorer-panel ${selected ? 'has-selection' : ''}`} aria-label="Neighborhood details">
          <SheetHandle panel={detailPanel} height={sheetHeight} onHeight={setSheetHeight} />
          {selected ? <NeighborhoodExplorer key={selected.id} property={selected} shortlist={shortlist} toggleShortlist={toggleShortlist}
            evidence={evidence} onEvidence={recordEvidence} onExplore={exploreSurroundings} selectHome={selectHome} pickedPlaceId={pickedPlace} onMap={setOverlay} onClose={() => setSelection(undefined)} /> : <>
            <h2>Neighborhood details</h2>
            <p>Select a property on the map or in the list to explore it.</p>
          </>}
        </aside>
      </div>
    </main>
  );
}
