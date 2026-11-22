'use client';

import { importLibrary } from '@googlemaps/js-api-loader';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Point } from '../property-search/area';
import { setupGoogleMaps } from '../property-search/components/google-loader';
import { distanceMeters } from './geometry';

type Pose = { point: Point; heading: number };
type Scene = { map: google.maps.maps3d.Map3DElement; person: google.maps.maps3d.Model3DElement };

function bearing(from: Point, to: Point) {
  const radians = Math.PI / 180;
  const longitude = (to.lng - from.lng) * radians;
  const latitude = from.lat * radians;
  const destination = to.lat * radians;
  return (Math.atan2(Math.sin(longitude) * Math.cos(destination),
    Math.cos(latitude) * Math.sin(destination) - Math.sin(latitude) * Math.cos(destination) * Math.cos(longitude)) / radians + 360) % 360;
}

export function PersonJourney({ origin, path, active, paused, onPosition, onProgress, onMap, onStreet, onNearby }: {
  origin: Point;
  path?: readonly Point[];
  active: boolean;
  paused: boolean;
  onPosition(point: Point): void;
  onProgress?(fraction: number): void;
  onMap(): void;
  onStreet(): void;
  onNearby(): void;
}) {
  const target = useRef<HTMLDivElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const scene = useRef<Scene | null>(null);
  const pose = useRef<Pose>({ point: origin, heading: 0 });
  const distance = useRef(0);
  const ground = useRef(0);
  const terrain = useRef<{ meters: number; altitude: number }[]>([]);
  const positionCallback = useRef(onPosition);
  const [status, setStatus] = useState<'preparing' | 'ready' | 'error'>('preparing');
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [follow, setFollow] = useState(true);
  const [speed, setSpeed] = useState(4);
  const [failure, setFailure] = useState('');
  const [camera, setCamera] = useState<'street' | 'overview'>('street');
  const cameraPreset = useRef({ range: 8, tilt: 82 });
  const start = path?.[0] ?? origin;
  const cumulative = useMemo(() => {
    let total = 0;
    return (path ?? []).map((point, index) => {
      if (index > 0) total += distanceMeters(path![index - 1]!, point);
      return total;
    });
  }, [path]);
  const total = cumulative.at(-1) ?? 0;
  useEffect(() => { onProgress?.(total > 0 ? progress / total : 0); }, [progress, total, onProgress]);
  useEffect(() => {
    cameraPreset.current = camera === 'street' ? { range: 8, tilt: 82 } : { range: 24, tilt: 60 };
    update(pose.current, true);
  }, [camera]);

  useEffect(() => { positionCallback.current = onPosition; }, [onPosition]);
  useEffect(() => {
    const element = controls.current;
    const stage = element?.closest<HTMLElement>('.map-stage');
    if (!element || !stage) return;
    const observer = new ResizeObserver(() => {
      const height = element.getBoundingClientRect().height;
      if (height > 0) stage.style.setProperty('--person-controls-height', `${height}px`);
    });
    observer.observe(element);
    return () => { observer.disconnect(); stage.style.removeProperty('--person-controls-height'); };
  }, []);

  function update(next: Pose, followCamera: boolean) {
    const current = scene.current;
    pose.current = next;
    if (!current) return;
    current.person.position = { ...next.point, altitude: 0 };
    current.person.orientation = { heading: next.heading, tilt: 270, roll: 0 };
    if (followCamera) {
      current.map.center = { ...next.point, altitude: ground.current + 1 };
      current.map.heading = next.heading;
      current.map.range = cameraPreset.current.range;
      current.map.tilt = cameraPreset.current.tilt;
    }
  }

  useEffect(() => {
    let disposed = false;
    let failed = false;
    let map: google.maps.maps3d.Map3DElement | undefined;
    const abort = new AbortController();
    setStatus('preparing');
    setFailure('');
    setPlaying(false);
    distance.current = 0;
    setProgress(0);
    ground.current = 0;
    const initialHeading = path && path.length > 1 ? bearing(path[0]!, path[1]!) : 0;
    pose.current = { point: start, heading: initialHeading };
    const fail = () => {
      if (disposed) return;
      failed = true;
      clearTimeout(timeout);
      abort.abort();
      setPlaying(false);
      setFailure('The Google 3D scene could not prepare. Retry, use Street View or continue on the map.');
      setStatus('error');
    };
    const timeout = setTimeout(fail, 20000);
    async function prepare() {
      const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
      if (!key) throw new Error('Maps key unavailable');
      setupGoogleMaps(key);
      // Only the selected, application-owned GLB is prepared. Google loads its own scene.
      const [library, elevation, asset] = await Promise.all([
        importLibrary('maps3d'),
        importLibrary('elevation'),
        fetch('/models/pedestrian.glb', { signal: abort.signal, cache: 'force-cache' }),
      ]);
      if (!asset.ok) throw new Error('Pedestrian asset unavailable');
      const bytes = await asset.arrayBuffer();
      if (bytes.byteLength < 12 || new DataView(bytes).getUint32(0, true) !== 0x46546c67) throw new Error('Invalid GLB');
      const points = path?.length ? path : [origin];
      const stride = Math.max(1, Math.ceil(points.length / 32));
      const samples = points.map((point, index) => ({ point, meters: cumulative[index] ?? 0 }))
        .filter((_, index) => index % stride === 0 || index === points.length - 1);
      const heights = await new elevation.ElevationService().getElevationForLocations({ locations: samples.map(sample => sample.point) });
      if (heights.results.length !== samples.length) throw new Error('Terrain elevation unavailable');
      if (disposed || failed || !target.current) return;
      terrain.current = heights.results.map((result, index) => ({ meters: samples[index]!.meters, altitude: result.elevation }));
      ground.current = terrain.current[0]!.altitude;
      map = new library.Map3DElement({
        center: { ...start, altitude: ground.current + 1 }, ...cameraPreset.current, heading: initialHeading,
        mode: 'HYBRID', defaultUIHidden: false, gestureHandling: 'GREEDY',
      });
      const person = new library.Model3DElement({
        src: new URL('/models/pedestrian.glb', window.location.origin),
        position: { ...start, altitude: 0 }, altitudeMode: 'CLAMP_TO_GROUND', scale: 1,
        orientation: { heading: initialHeading, tilt: 270, roll: 0 },
      });
      map.append(person);
      scene.current = { map, person };
      map.addEventListener('gmp-steadychange', event => {
        if (disposed || failed || !event.isSteady) return;
        clearTimeout(timeout);
        setStatus('ready');
      });
      map.addEventListener('gmp-error', fail);
      // Road placement is explicit. A clicked point is not asserted to be a road snap.
      map.addEventListener('gmp-click', event => {
        if (!event.position || total > 0) return;
        const point = { lat: event.position.lat, lng: event.position.lng };
        ground.current = event.position.altitude;
        update({ point, heading: pose.current.heading }, true);
        positionCallback.current(point);
      });
      target.current.replaceChildren(map);
      positionCallback.current(start);
    }
    void prepare().catch(() => { if (!abort.signal.aborted) fail(); });
    return () => {
      disposed = true;
      abort.abort();
      clearTimeout(timeout);
      map?.stopCameraAnimation();
      map?.remove();
      scene.current = null;
    };
  }, [start.lat, start.lng, attempt, path]);

  useEffect(() => {
    if (!active || paused) setPlaying(false);
  }, [active, paused]);

  useEffect(() => {
    const pause = () => { if (document.hidden) setPlaying(false); };
    document.addEventListener('visibilitychange', pause);
    return () => document.removeEventListener('visibilitychange', pause);
  }, []);

  function placeAtDistance(meters: number, headingBlend: number, followCamera: boolean) {
    if (!path || path.length < 2 || terrain.current.length === 0) return;
    distance.current = Math.max(0, Math.min(total, meters));
    const end = cumulative.findIndex(meters => meters > distance.current);
    const index = end < 0 ? path!.length - 1 : Math.max(1, end);
    const from = path![index - 1]!;
    const to = path![index]!;
    const length = cumulative[index]! - cumulative[index - 1]!;
    const ratio = length > 0 ? (distance.current - cumulative[index - 1]!) / length : 1;
    const point = { lat: from.lat + (to.lat - from.lat) * ratio, lng: from.lng + (to.lng - from.lng) * ratio };
    const desired = bearing(from, to);
    const elevationEnd = terrain.current.findIndex(sample => sample.meters > distance.current);
    const elevationIndex = elevationEnd < 0 ? terrain.current.length - 1 : Math.max(1, elevationEnd);
    const low = terrain.current[Math.max(0, elevationIndex - 1)]!;
    const high = terrain.current[elevationIndex]!;
    const span = high.meters - low.meters;
    const elevationRatio = span > 0 ? Math.min(1, (distance.current - low.meters) / span) : 1;
    ground.current = low.altitude + (high.altitude - low.altitude) * elevationRatio;
    const change = ((desired - pose.current.heading + 540) % 360) - 180;
    const heading = (pose.current.heading + change * headingBlend + 360) % 360;
    update({ point, heading }, followCamera);
    return point;
  }

  useEffect(() => {
    if (!playing || !active || paused || status !== 'ready' || !path || total === 0) return;
    let frame = 0;
    let previous = 0;
    let published = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function tick(now: number) {
      const elapsed = previous ? Math.min((now - previous) / 1000, .1) : 0;
      previous = now;
      distance.current = Math.min(total, distance.current + elapsed * 1.4 * speed);
      const point = placeAtDistance(distance.current, Math.min(1, elapsed * 5), follow && !reducedMotion);
      if (!point) { setPlaying(false); return; }
      if (now - published >= 150 || distance.current >= total) {
        published = now;
        positionCallback.current(point);
        setProgress(distance.current);
      }
      if (distance.current >= total) { setPlaying(false); return; }
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, active, paused, status, path, cumulative, total, follow, speed]);

  function seek(meters: number) {
    setPlaying(false);
    const point = placeAtDistance(meters, 1, follow);
    if (!point) return;
    setProgress(distance.current);
    positionCallback.current(point);
  }

  function reset() {
    setPlaying(false);
    distance.current = 0;
    setProgress(0);
    ground.current = terrain.current[0]?.altitude ?? ground.current;
    update({ point: start, heading: path && path.length > 1 ? bearing(path[0]!, path[1]!) : 0 }, true);
    positionCallback.current(start);
  }

  return (
    <section className="person-journey" hidden={!active} aria-label="Google Maps 3D person exploration">
      <div ref={target} className="person-map" />
      <div ref={controls} className="person-controls">
        <div className="playback-topline"><strong>Journey playback</strong><p role="status">{Math.round(progress)} m{total > 0 ? ` of ${Math.round(total)} m` : ' · Choose a route to begin'}</p></div>
        <input className="journey-scrubber" type="range" aria-label="Journey progress" min="0" max={Math.max(1, Math.ceil(total))} step="1" value={Math.round(progress)} disabled={status !== 'ready' || total === 0} onChange={event => seek(Number(event.target.value))} />
        <div className="inline-controls">
          <button className="playback-primary" aria-label={playing ? 'Pause journey' : progress >= total && total > 0 ? 'Replay journey' : 'Play journey'} type="button" disabled={status !== 'ready' || total === 0 || paused} onClick={() => {
            if (distance.current >= total) reset();
            setPlaying(value => !value);
          }}>{playing ? 'Pause' : progress >= total && total > 0 ? 'Replay' : 'Play'}</button>
          <button className="light" type="button" disabled={status !== 'ready'} aria-label="Restart journey" onClick={reset}>Restart</button>
          <label className="playback-speed"><span>Speed</span><select aria-label="Playback speed" value={speed} onChange={event => setSpeed(Number(event.target.value))}>
            {[1, 2, 4, 8, 16].map(value => <option key={value} value={value}>{value}×</option>)}
          </select></label>
          <label className="playback-camera"><span>Camera</span><select aria-label="Journey camera" value={camera} onChange={event => { setCamera(event.target.value as 'street' | 'overview'); setFollow(true); }}>
            <option value="street">Street level</option><option value="overview">Overview</option>
          </select></label>
          <details className="person-options">
            <summary>Options</summary>
            <div className="person-options-menu">
              <button className="light" type="button" aria-pressed={follow} onClick={event => { event.currentTarget.closest('details')?.removeAttribute('open'); const next = !follow; setFollow(next); setPlaying(false); if (next) update(pose.current, true); }}>Follow person</button>
              <button className="light" type="button" onClick={event => { event.currentTarget.closest('details')?.removeAttribute('open'); onNearby(); }}>Nearby Places</button>
            </div>
          </details>
        </div>
        <span className="playback-note">Illustrative playback speed · Drag the timeline to explore any point</span>
      </div>
      {status === 'preparing' && <div className="walk-feedback" role="status">Preparing Google 3D map and person…</div>}
      {status === 'error' && <div className="walk-feedback" role="alert">
        <p>{failure}</p>
        <div className="inline-controls">
          <button type="button" onClick={() => setAttempt(value => value + 1)}>Retry 3D</button>
          <button className="light" type="button" onClick={onStreet}>Street View</button>
          <button className="light" type="button" onClick={onMap}>Map View</button>
        </div>
      </div>}
    </section>
  );
}
