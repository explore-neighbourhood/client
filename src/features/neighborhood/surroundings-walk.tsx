'use client';

import { decode } from '@googlemaps/polyline-codec';
import { importLibrary } from '@googlemaps/js-api-loader';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Point } from '../property-search/area';
import { setupGoogleMaps } from '../property-search/components/google-loader';
import { distanceMeters, sampleRoute } from './geometry';
import { NearbyDestinations, type JourneyRoute } from './nearby-destinations';
import { describeFailure, fetchRoute, prepareJourney, type Mode, type Place } from './api';
import type { RouteEvidence } from './route-evidence';
import type { MapNeighborhood } from './neighborhood-explorer';
import type { Category } from './categories';
import { JourneyNavigation } from './journey-navigation';

export type WalkLocation = { point: Point; title: string; synthetic?: boolean; propertyId?: string; path?: Point[]; journey?: JourneyRoute; initialView?: 'person' | 'street' };
type Visit = { pano: string; heading: number; pitch: number };
type Status = 'loading' | 'ready' | 'gap';
const PersonJourney = dynamic(() => import('./person-journey').then(module => module.PersonJourney), {
  ssr: false, loading: () => <div className="walk-feedback" role="status">Opening 3D person exploration…</div>,
});

export function SurroundingsWalk({ location, onClose, onPosition, onMap, onPerspective, onEvidence }: {
  location: WalkLocation;
  onClose(): void;
  onPosition(point: Point): void;
  onMap(overlay: MapNeighborhood): void;
  onPerspective(map: boolean): void;
  onEvidence(evidence: RouteEvidence): void;
}) {
  const scene = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLElement>(null);
  const header = useRef<HTMLElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const exit = useRef<HTMLButtonElement>(null);
  const viewer = useRef<google.maps.StreetViewPanorama | null>(null);
  const routeRequest = useRef<AbortController | null>(null);
  const sequence = useRef(0);
  const history = useRef<Visit[]>([]);
  const lastPosition = useRef<Point | undefined>(undefined);
  const walked = useRef(0);
  const callbacks = useRef({ onPosition, onMap, onPerspective });
  const perspective = useRef(false);
  const [library, setLibrary] = useState<google.maps.StreetViewLibrary>();
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [status, setStatus] = useState<Status>('loading');
  const [playing, setPlaying] = useState(false);
  const [goal, setGoal] = useState(500);
  const [meters, setMeters] = useState(0);
  const [date, setDate] = useState<string>();
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState(0);
  const [historySize, setHistorySize] = useState(0);
  const [mapView, setMapView] = useState(false);
  const [thirdPerson, setThirdPerson] = useState(location.initialView === 'person');
  const [personOpened, setPersonOpened] = useState(location.initialView === 'person');
  const [streetOpened, setStreetOpened] = useState(location.initialView !== 'person');
  const [placesOpen, setPlacesOpen] = useState(false);
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeCategory, setPlaceCategory] = useState<Category>();
  const [routeBusy, setRouteBusy] = useState(false);
  const [routeNotice, setRouteNotice] = useState('');
  const [journey, setJourney] = useState<JourneyRoute | undefined>(location.journey);
  const [followingRoute, setFollowingRoute] = useState(Boolean(location.path));
  const [coverage, setCoverage] = useState<Record<number, 'ready' | 'gap'>>({});
  const [personFraction, setPersonFraction] = useState(0);
  const path = journey?.path ?? location.path;
  const pathLength = useMemo(() => path?.reduce((sum, point, index) => index ? sum + distanceMeters(path[index - 1]!, point) : 0, 0) ?? 0, [path]);
  const checkpoints = useMemo(() => path ? sampleRoute(path, goal) : [], [path, goal]);

  useEffect(() => () => routeRequest.current?.abort(), []);

  useEffect(() => { callbacks.current = { onPosition, onMap, onPerspective }; }, [onPosition, onMap, onPerspective]);

  useEffect(() => {
    exit.current?.focus();
    const caption = footer.current;
    const stage = caption?.closest<HTMLElement>('.map-stage');
    if (!caption || !stage) return;
    const observer = new ResizeObserver(() => {
      stage.style.setProperty('--walk-footer-height', `${caption.getBoundingClientRect().height}px`);
      if (header.current) stage.style.setProperty('--walk-header-height', `${header.current.getBoundingClientRect().height}px`);
      if (scene.current) {
        const bounds = scene.current.getBoundingClientRect();
        stage.style.setProperty('--walk-map-top', `${bounds.top - stage.getBoundingClientRect().top}px`);
        stage.style.setProperty('--walk-map-height', `${bounds.height}px`);
      }
    });
    observer.observe(caption);
    if (header.current) observer.observe(header.current);
    if (scene.current) observer.observe(scene.current);
    return () => {
      observer.disconnect();
      for (const name of ['--walk-footer-height', '--walk-header-height', '--walk-map-top', '--walk-map-height']) stage.style.removeProperty(name);
    };
  }, []);

  useEffect(() => {
    callbacks.current.onMap({ places, category: placeCategory, route: path ?? [] });
  }, [places, placeCategory, path]);

  useEffect(() => {
    perspective.current = mapView || thirdPerson;
    callbacks.current.onPerspective(mapView);
    viewer.current?.setVisible(!mapView && !thirdPerson);
    if (!mapView && !thirdPerson) requestAnimationFrame(() => {
      if (viewer.current) google.maps.event.trigger(viewer.current, 'resize');
    });
  }, [mapView, thirdPerson]);

  useEffect(() => {
    if (!streetOpened) return;
    let mounted = true;
    setStatus('loading');
    setMessage('');
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    if (!key) { setMessage('Street View is unavailable for this environment.'); setStatus('gap'); return; }
    const timeout = setTimeout(() => {
      mounted = false;
      setMessage('Street View took too long to load. Retry or continue on the route map.');
      setStatus('gap');
    }, 10000);
    void Promise.resolve().then(() => {
      setupGoogleMaps(key);
      return importLibrary('streetView');
    }).then(result => {
      if (mounted) { clearTimeout(timeout); setLibrary(result); }
    }).catch(() => {
      if (mounted) {
        clearTimeout(timeout);
        setMessage('Street View could not load. Retry or continue on the route map.');
        setStatus('gap');
      }
    });
    return () => {
      mounted = false;
      clearTimeout(timeout);
      sequence.current += 1;
      if (viewer.current) { google.maps.event.clearInstanceListeners(viewer.current); viewer.current.setVisible(false); }
      viewer.current = null;
    };
  }, [loadAttempt, streetOpened]);

  const show = useCallback(async (
    request: google.maps.StreetViewLocationRequest | google.maps.StreetViewPanoRequest,
    movement: 'push' | 'back' | 'reset' = 'push',
    facing?: { heading: number; pitch: number },
  ): Promise<boolean> => {
    if (!library) return false;
    const generation = ++sequence.current;
    setStatus('loading');
    setMessage('');
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      const response = await Promise.race([
        new library.StreetViewService().getPanorama(request),
        new Promise<never>((_, reject) => { timeout = setTimeout(() => reject(new Error('Coverage timeout')), 10000); }),
      ]);
      if (generation !== sequence.current || !target.current) return false;
      const { data } = response;
      const pano = data.location?.pano;
      if (!pano) throw new Error('No panorama');
      const current = viewer.current?.getPano();
      const pov = viewer.current?.getPov();
      if (movement === 'reset') {
        history.current = [];
        walked.current = 0;
        lastPosition.current = undefined;
        setMeters(0);
      } else if (movement === 'push' && current && current !== pano && pov) {
        history.current.push({ pano: current, heading: pov.heading, pitch: pov.pitch });
      } else if (movement === 'back') {
        history.current.pop();
      }
      setHistorySize(history.current.length);
      if (!viewer.current) {
        viewer.current = new library.StreetViewPanorama(target.current, {
          pano, addressControl: false, fullscreenControl: false, imageDateControl: true,
          visible: !perspective.current,
          motionTracking: false, linksControl: false, panControl: false, zoomControl: true, clickToGo: false,
        });
        viewer.current.addListener('position_changed', () => {
          const point = viewer.current?.getPosition()?.toJSON();
          if (!point) return;
          if (lastPosition.current) walked.current += distanceMeters(lastPosition.current, point);
          lastPosition.current = point;
          setMeters(Math.round(walked.current));
          callbacks.current.onPosition(point);
        });
      } else {
        viewer.current.setPano(pano);
        viewer.current.setVisible(!perspective.current);
      }
      if (facing) viewer.current.setPov(facing);
      setDate(data.imageDate);
      setStatus('ready');
      requestAnimationFrame(() => {
        if (generation === sequence.current && viewer.current) google.maps.event.trigger(viewer.current, 'resize');
      });
      return true;
    } catch {
      if (generation === sequence.current) {
        setPlaying(false);
        setStatus('gap');
        viewer.current?.setVisible(false);
      }
      return false;
    } finally { clearTimeout(timeout); }
  }, [library]);

  useEffect(() => {
    if (!library || followingRoute) return;
    void show({ location: location.point, radius: 80, preference: google.maps.StreetViewPreference.NEAREST, sources: [google.maps.StreetViewSource.OUTDOOR] }, 'reset');
  }, [library, show, location.point.lat, location.point.lng, followingRoute]);

  useEffect(() => {
    if (!library || !followingRoute) return;
    if (!checkpoints[index]) {
      setStatus('gap');
      setMessage('This route has no street viewpoints. Continue on the route map or return home.');
      return;
    }
    let active = true;
    const point = checkpoints[index]!.point;
    void show({ location: point, radius: 80, preference: google.maps.StreetViewPreference.NEAREST, sources: [google.maps.StreetViewSource.OUTDOOR] }, index === 0 ? 'reset' : 'push')
      .then(ok => { if (active) setCoverage(current => ({ ...current, [index]: ok ? 'ready' : 'gap' })); });
    return () => { active = false; };
  }, [library, show, followingRoute, checkpoints, index]);

  const advance = useCallback(() => {
    if (followingRoute) {
      if (index < checkpoints.length - 1) setIndex(current => current + 1);
      else { setPlaying(false); setMessage('You reached the route viewing distance.'); }
      return;
    }
    const panorama = viewer.current;
    if (!panorama) return;
    const heading = panorama.getPov().heading;
    const previous = history.current.at(-1)?.pano;
    const angle = (link: google.maps.StreetViewLink) => Math.abs(((link.heading ?? heading) - heading + 540) % 360 - 180);
    const next = (panorama.getLinks() ?? [])
      .filter((link): link is google.maps.StreetViewLink => link !== null)
      .filter(link => link.pano && link.pano !== previous && angle(link) < 110)
      .sort((a, b) => angle(a) - angle(b))[0];
    if (!next?.pano) {
      setPlaying(false);
      setMessage('No connected view ahead. Turn toward another street or return home.');
      return;
    }
    void show({ pano: next.pano }, 'push', { heading: next.heading ?? heading, pitch: panorama.getPov().pitch });
  }, [followingRoute, index, checkpoints.length, show]);

  function goBack() {
    setPlaying(false);
    if (followingRoute) { setIndex(current => Math.max(0, current - 1)); return; }
    const visit = history.current.at(-1);
    if (visit) void show({ pano: visit.pano }, 'back', visit);
  }

  function look(heading: number, pitch = 0) {
    setPlaying(false);
    const panorama = viewer.current;
    if (!panorama) return;
    const pov = panorama.getPov();
    panorama.setPov({ heading: (pov.heading + heading + 360) % 360, pitch: Math.max(-80, Math.min(80, pov.pitch + pitch)) });
  }

  function returnHome() {
    routeRequest.current?.abort();
    setRouteBusy(false);
    if (!library) return;
    setPlaying(false);
    setPlacesOpen(false);
    setIndex(0);
    if (followingRoute) setFollowingRoute(false);
    else void show({ location: location.point, radius: 80, preference: google.maps.StreetViewPreference.NEAREST, sources: [google.maps.StreetViewSource.OUTDOOR] }, 'reset');
  }

  function chooseRoute(route: JourneyRoute, openPerson = true) {
    if (location.propertyId) onEvidence({
      propertyId: location.propertyId, destinationId: route.destination.id, destinationName: route.destination.name, category: route.category,
      mode: route.mode, distanceMeters: route.distanceMeters, durationSeconds: route.durationSeconds, checkedAt: new Date().toISOString(),
    });
    setPlaying(false);
    setJourney(route);
    setCoverage({});
    setIndex(0);
    setFollowingRoute(true);
    setPlacesOpen(false);
    if (openPerson) {
      setMapView(false);
      setThirdPerson(true);
      setPersonOpened(true);
    }
  }

  async function changeRouteMode(mode: Mode) {
    if (!journey) return;
    routeRequest.current?.abort();
    const active = new AbortController();
    routeRequest.current = active;
    setPlaying(false);
    setRouteBusy(true);
    setRouteNotice('');
    try {
      const signal = AbortSignal.any([active.signal, AbortSignal.timeout(15000)]);
      const result = journey.direct
        ? await prepareJourney(location.point, journey.destination.location, mode, signal, () => {})
        : await fetchRoute(location.propertyId ?? location.point, journey.destination.destination, mode, signal);
      if (active.signal.aborted) return;
      if (!result) { setRouteNotice('No route is available for this mode. Your previous route remains visible.'); return; }
      chooseRoute({ ...journey, mode, distanceMeters: result.distanceMeters, durationSeconds: result.durationSeconds,
        steps: result.steps,
        path: decode(result.encodedPolyline).map(([lat, lng]) => ({ lat, lng })) }, false);
    } catch (error) {
      if (!active.signal.aborted) setRouteNotice(describeFailure(error));
    } finally {
      if (!active.signal.aborted) setRouteBusy(false);
    }
  }

  const progress = followingRoute ? checkpoints[index]?.meters ?? 0 : meters;
  const complete = followingRoute ? index >= checkpoints.length - 1 : meters >= goal;
  useEffect(() => {
    if (complete || mapView || thirdPerson || placesOpen) setPlaying(false);
    if (!playing || status !== 'ready' || complete || mapView || thirdPerson || placesOpen) return;
    const timer = setTimeout(advance, 3500);
    return () => clearTimeout(timer);
  }, [playing, status, complete, mapView, thirdPerson, placesOpen, advance]);

  return (
    <section className="surroundings-walk" aria-label="Immersive Neighborhood Explorer" onKeyDown={event => {
      if (event.key === 'Escape') { event.stopPropagation(); onClose(); }
    }}>
      <header ref={header} className="walk-header">
        <div className="journey-heading"><span className="eyebrow">{journey ? 'YOUR JOURNEY' : 'NEIGHBORHOOD EXPLORER'}</span><h2 title={location.title}>{location.title}</h2><p title={journey?.destination.name}>{followingRoute && journey ? `To ${journey.destination.name}` : 'Explore at your own pace'}</p></div>
        <div className="inline-controls journey-view-controls">
          <button type="button" aria-pressed={thirdPerson && !mapView} onClick={() => { setPersonOpened(true); setThirdPerson(true); setMapView(false); setPlaying(false); }}>3D Person</button>
          <button className="light" type="button" aria-pressed={!thirdPerson && !mapView} onClick={() => { setStreetOpened(true); setThirdPerson(false); setMapView(false); }}>Street View</button>
          <button className="light" type="button" aria-pressed={mapView} onClick={() => setMapView(true)}>Map View</button>
          <button ref={exit} className="light" type="button" aria-label="Exit Exploration" onClick={onClose}>Exit</button>
        </div>
      </header>
      {!thirdPerson && <div className="walk-toolbar">
        <button type="button" disabled={(!playing && status !== 'ready') || complete || mapView} onClick={() => setPlaying(value => !value)}>{playing ? 'Pause' : 'Play'}</button>
        <button className="light" type="button" disabled={status !== 'ready' || complete || mapView} onClick={advance}>Walk Forward</button>
        <button className="light" type="button" disabled={status === 'loading' || (followingRoute ? index === 0 : historySize === 0)} onClick={goBack}>Walk Back</button>
        <button className="light" type="button" onClick={returnHome}>Return Home</button>
        <button className="light" type="button" onClick={() => setPlacesOpen(value => !value)}>Nearby Places</button>
        <details className="walk-more">
          <summary>Look &amp; distance</summary>
          <div className="walk-more-content">
            <div className="inline-controls">
              <button type="button" className="light" onClick={() => look(-45)}>Turn Left</button>
              <button type="button" className="light" onClick={() => look(45)}>Turn Right</button>
              <button type="button" className="light" onClick={() => look(0, 20)}>Look Up</button>
              <button type="button" className="light" onClick={() => look(0, -20)}>Look Down</button>
            </div>
            <label>Viewing distance<select value={goal} onChange={event => { setPlaying(false); setGoal(Number(event.target.value)); setIndex(0); setCoverage({}); }}>
              {[100, 200, 500, 1000].map(value => <option key={value} value={value}>{value} m</option>)}
            </select></label>
          </div>
        </details>
        <span role="status" title={followingRoute ? 'Distance along the calculated route' : 'Approximate distance between panorama positions'}>{followingRoute ? '' : '≈ '}{progress} m {followingRoute ? 'along route' : 'explored'}{complete ? ' · Viewing distance reached' : ''}</span>
      </div>}
      {journey && <div className="walk-route-summary">
        <strong><span className="route-travel-name">{journey.mode === 'TWO_WHEELER' ? 'Bike' : journey.mode === 'DRIVE' ? 'Car' : journey.mode === 'WALK' ? 'Walking' : 'Transit'} · </span>{(journey.distanceMeters / 1000).toFixed(2)} km · about {Math.max(1, Math.round(journey.durationSeconds / 60))} min</strong>
        <span> Google Maps estimate</span>
        <label><span>Journey travel mode</span><select aria-label="Journey travel mode" value={journey.mode} disabled={routeBusy} onChange={event => void changeRouteMode(event.target.value as Mode)}>
          <option value="WALK">Walking</option><option value="TWO_WHEELER">Bike</option><option value="DRIVE">Car</option><option value="TRANSIT">Transit</option>
        </select></label>
        {routeBusy && <span role="status">Updating route…</span>}
        {routeNotice && <p role="alert">{routeNotice}</p>}
        {!followingRoute && <button className="light" type="button" onClick={() => { setIndex(0); setFollowingRoute(true); }}>Follow route</button>}
      </div>}
      <div ref={scene} className="walk-scene">
        <div ref={target} className="walk-panorama" hidden={thirdPerson} tabIndex={0} aria-label="Street exploration. Drag to look around, W to walk forward, S to go back, arrow keys to look."
          onKeyDown={event => {
            const commands: Record<string, () => void> = { ArrowLeft: () => look(-30), ArrowRight: () => look(30), ArrowUp: () => look(0, 15), ArrowDown: () => look(0, -15), w: advance, s: goBack };
            const command = commands[event.key];
            if (command && event.target === target.current && status === 'ready') { event.preventDefault(); event.stopPropagation(); command(); }
          }} />
        {personOpened && <PersonJourney origin={location.point} path={path} active={thirdPerson && !mapView} paused={placesOpen || routeBusy}
          onProgress={setPersonFraction}
          onPosition={onPosition} onNearby={() => setPlacesOpen(true)} onMap={() => setMapView(true)}
          onStreet={() => { setStreetOpened(true); setThirdPerson(false); setMapView(false); }} />}
        {status === 'loading' && !mapView && !thirdPerson && <div className="walk-feedback" role="status">Finding street imagery near this location…</div>}
        {status === 'gap' && !mapView && !thirdPerson && <div className="walk-feedback" role="status">
          <p>{message || 'Street imagery is unavailable at this viewpoint.'}</p>
          <button type="button" onClick={() => { setLibrary(undefined); setLoadAttempt(value => value + 1); }}>Retry Street View</button>
          {followingRoute && index < checkpoints.length - 1 && <button type="button" onClick={advance}>Try next route viewpoint</button>}
          <button className="light" type="button" onClick={() => setMapView(true)}>Map View</button>
          <button className="light" type="button" onClick={returnHome}>Return Home</button>
        </div>}
        {placesOpen && <NearbyDestinations origin={location.propertyId ?? location.point}
          onPlaces={(results, category) => { setPlaces(results); setPlaceCategory(category); }} onRoute={route => { routeRequest.current?.abort(); setRouteBusy(false); setRouteNotice(''); chooseRoute(route); }} onClose={() => setPlacesOpen(false)} />}
      </div>
      {journey && !placesOpen && <JourneyNavigation key={`${journey.destination.id}:${journey.mode}:${journey.distanceMeters}:${journey.durationSeconds}`}
        journey={journey} origin={location.title} fraction={thirdPerson ? personFraction : pathLength > 0 ? Math.min(1, progress / pathLength) : 0}
        onNearby={() => { setPlaying(false); setPlacesOpen(true); }} />}
      <footer ref={footer} className="walk-caption">
        {followingRoute && !thirdPerson && <div className="walk-coverage" aria-label="Route viewpoint coverage">
          {checkpoints.map((checkpoint, checkpointIndex) => <button type="button" key={checkpointIndex}
            className={coverage[checkpointIndex] ?? 'unchecked'} aria-pressed={index === checkpointIndex}
            onClick={() => { setPlaying(false); setIndex(checkpointIndex); }}>
            {checkpoint.meters} m · {coverage[checkpointIndex] === 'gap' ? 'no imagery' : coverage[checkpointIndex] === 'ready' ? 'imagery' : 'unchecked'}
          </button>)}
        </div>}
        {mapView ? <p>Route overview · Google Maps · Travel estimates and entrance locations may vary.</p> : thirdPerson ? <p>Simulated person on Google Maps 3D · Detailed street geometry depends on local coverage. Bengaluru may show satellite imagery on terrain.</p> : <>
          <p>{message || (followingRoute ? 'Imagery is checked at route viewpoints. Coverage between them can vary.' : 'Drag to look around or use Look & distance. Movement follows connected panoramas.')}</p>
          <p>Historical Google Street View · {date ? `Requested imagery ${date}` : 'Imagery date unavailable'} · {location.synthetic ? 'Fictional listing location.' : 'Entrance location may differ.'}</p>
        </>}
      </footer>
    </section>
  );
}
