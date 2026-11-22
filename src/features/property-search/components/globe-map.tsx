'use client';

import { importLibrary } from '@googlemaps/js-api-loader';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cityView } from '../area';
import { distanceMeters } from '../../neighborhood/geometry';
import type { MapProps } from './area-map';
import { setupGoogleMaps } from './google-loader';
import { facilityMarkers, MapLegend } from './map-legend';
import { listingPrice } from './property-details';

type Scene = {
  map: google.maps.maps3d.Map3DElement;
  library: google.maps.Maps3DLibrary;
  geometry: google.maps.GeometryLibrary;
  markers: google.maps.MarkerLibrary;
  altitude: number;
};

export function GlobeMap({ apiKey, onFallback, area, pendingPin, properties, selectedId, neighborhood, draft, drawing, onPick, onSelect, onPlace }:
  MapProps & { apiKey: string; onFallback(): void }) {
  const target = useRef<HTMLDivElement>(null);
  const callbacks = useRef({ onPick, onSelect, onPlace });
  const [scene, setScene] = useState<Scene>();
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  const selected = properties.find(home => home.id === selectedId);
  const focus = useMemo(() => {
    let points = [pendingPin ?? cityView];
    if (area?.kind === 'radius') points = [area.center];
    if (area?.kind === 'polygon' && area.points.length) points = [...area.points];
    if (selected) points = [selected.location];
    if (neighborhood.route.length) points = neighborhood.route;
    const center = points.reduce((sum, point) => ({
      lat: sum.lat + point.lat / points.length, lng: sum.lng + point.lng / points.length,
    }), { lat: 0, lng: 0 });
    const radius = points.reduce((maximum, point) => Math.max(maximum, distanceMeters(center, point)), 0);
    let range = Math.max(600, radius * 3);
    if (!selected && !neighborhood.route.length && area?.kind === 'radius') range = Math.max(600, area.radiusKm * 3000);
    if (!selected && !area && !pendingPin && !neighborhood.route.length) range = 12000;
    return { center, range };
  }, [area, pendingPin, selected?.location.lat, selected?.location.lng, neighborhood.route]);

  useEffect(() => { callbacks.current = { onPick, onSelect, onPlace }; }, [onPick, onSelect, onPlace]);

  useEffect(() => {
    let disposed = false;
    let failed = false;
    let map: google.maps.maps3d.Map3DElement | undefined;
    setScene(undefined);
    setStatus('loading');
    const fail = () => {
      if (disposed) return;
      failed = true;
      clearTimeout(timeout);
      setStatus('error');
    };
    const timeout = setTimeout(fail, 20000);
    async function prepare() {
      setupGoogleMaps(apiKey);
      const [library, elevation, geometry, markers] = await Promise.all([
        importLibrary('maps3d'), importLibrary('elevation'), importLibrary('geometry'), importLibrary('marker'),
      ]);
      const heights = await new elevation.ElevationService().getElevationForLocations({ locations: [focus.center] });
      const altitude = heights.results[0]?.elevation;
      if (altitude === undefined) throw new Error('Terrain height unavailable');
      if (disposed || failed || !target.current) return;
      map = new library.Map3DElement({
        center: { ...focus.center, altitude }, range: focus.range, tilt: 55,
        mode: 'HYBRID', gestureHandling: 'COOPERATIVE',
      });
      map.addEventListener('gmp-steadychange', event => {
        if (disposed || failed || !event.isSteady) return;
        clearTimeout(timeout);
        setStatus('ready');
      });
      map.addEventListener('gmp-error', fail);
      map.addEventListener('gmp-click', event => {
        if (event.position && !event.defaultPrevented) callbacks.current.onPick({ lat: event.position.lat, lng: event.position.lng });
      });
      target.current.replaceChildren(map);
      setScene({ map, library, geometry, markers, altitude });
    }
    void prepare().catch(fail);
    return () => {
      disposed = true;
      clearTimeout(timeout);
      map?.stopCameraAnimation();
      map?.remove();
    };
  }, [apiKey, focus, attempt]);

  useEffect(() => {
    if (!scene) return;
    const { map, library, geometry } = scene;
    const overlays: HTMLElement[] = [];
    const marker = (position: google.maps.LatLngLiteral, label: string, action?: () => void,
      options: { title?: string; pin?: google.maps.marker.PinElementOptions } = {}) => {
      const element = new library.Marker3DInteractiveElement({
        position, label, title: options.title ?? label, altitudeMode: 'CLAMP_TO_GROUND', drawsWhenOccluded: true,
      });
      element.append(new scene.markers.PinElement({ background: '#087e79', borderColor: '#fff', glyphColor: '#fff', ...options.pin }));
      element.addEventListener('gmp-click', event => {
        event.preventDefault();
        event.stopPropagation();
        action?.();
      });
      overlays.push(element);
    };
    properties.forEach(home => marker(home.location, `${selectedId === home.id ? 'Selected · ' : ''}${listingPrice(home)}`,
      () => callbacks.current.onSelect(home.id), {
        title: `${home.title} · ${listingPrice(home)}`,
        pin: { background: selectedId === home.id ? '#172b3c' : '#087e79' },
      }));
    const facility = neighborhood.category ? facilityMarkers[neighborhood.category] : { color: '#ad601f', glyph: '•' };
    neighborhood.places.forEach(place => marker(place.location, place.name, () => callbacks.current.onPlace(place.id), {
      pin: { background: facility.color, glyphText: facility.glyph },
    }));
    if (pendingPin && !drawing) marker(pendingPin, 'Selected location', undefined, { pin: { glyphText: '+' } });
    const polygon = area?.kind === 'radius'
      ? Array.from({ length: 65 }, (_, index) => geometry.spherical.computeOffset(area.center, area.radiusKm * 1000, index * 360 / 64).toJSON())
      : area?.kind === 'polygon' ? area.points : [];
    if (polygon.length >= 3) overlays.push(new library.Polygon3DElement({
      outerCoordinates: polygon, fillColor: '#087e7928', strokeColor: '#087e79', strokeWidth: 2, altitudeMode: 'CLAMP_TO_GROUND',
    }));
    if (neighborhood.route.length > 1) overlays.push(new library.Polyline3DElement({
      coordinates: neighborhood.route, strokeColor: '#2554a4', strokeWidth: 5, altitudeMode: 'CLAMP_TO_GROUND',
    }));
    if (drawing && draft.length) {
      draft.forEach((point, index) => marker(point, String(index + 1)));
      overlays.push(new library.Polyline3DElement({ coordinates: draft, strokeColor: '#087e79', strokeWidth: 3, altitudeMode: 'CLAMP_TO_GROUND' }));
    }
    map.append(...overlays);
    return () => overlays.forEach(element => element.remove());
  }, [scene, properties, selectedId, neighborhood.places, neighborhood.category, neighborhood.route, area, drawing, draft, pendingPin]);

  useEffect(() => {
    if (!scene || !neighborhood.streetPoint) return;
    const marker = new scene.library.Marker3DElement({
      position: neighborhood.streetPoint, label: 'Journey position', altitudeMode: 'CLAMP_TO_GROUND',
    });
    scene.map.append(marker);
    return () => marker.remove();
  }, [scene, neighborhood.streetPoint]);

  return <>
    <div className="globe-map" ref={target} aria-label="Google 3D globe map" />
    <div className="map-controls">
      <button type="button" className="light" disabled={!scene || status !== 'ready'} onClick={() => {
        if (!scene) return;
        scene.map.stopCameraAnimation();
        scene.map.center = { ...focus.center, altitude: scene.altitude };
        scene.map.range = focus.range;
        scene.map.tilt = 55;
      }}>Reset view</button>
      <button type="button" className="light" disabled={!scene || status !== 'ready'} onClick={() => {
        if (!scene) return;
        scene.map.stopCameraAnimation();
        scene.map.range = 20000000;
        scene.map.tilt = 0;
      }}>Show globe</button>
      <MapLegend neighborhood={neighborhood} />
    </div>
    {status === 'loading' && <div className="map-loading-overlay" role="status">Preparing 3D view…</div>}
    {status === 'error' && <div className="map-loading-overlay" role="alert">
      <p>3D view is unavailable on this device or connection.</p>
      <div className="inline-controls">
        <button type="button" onClick={() => setAttempt(value => value + 1)}>Retry 3D view</button>
        <button type="button" className="light" onClick={onFallback}>Use Default view</button>
      </div>
    </div>}
  </>;
}
