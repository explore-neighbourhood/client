'use client';

import { importLibrary } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { decode } from '@googlemaps/polyline-codec';
import { useEffect, useRef, useState } from 'react';
import { setupGoogleMaps } from '../property-search/components/google-loader';
import { configurationLabel, type AgentResponse, type RentalProperty } from './api';

type Props = {
  properties: RentalProperty[]; selectedId: string | null; response: AgentResponse | null; focusKey: number;
  onSelect(id: string): void; onBounds(bounds: string): void;
  focusPoint?: { lat: number; lng: number } | null;
};
export function RentalMap(props: Props) {
  const target = useRef<HTMLDivElement>(null);
  const callbacks = useRef(props); callbacks.current = props;
  const [context, setContext] = useState<{ map: google.maps.Map; marker: google.maps.MarkerLibrary } | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  useEffect(() => {
    if (!context || !props.focusPoint) return;
    context.map.panTo(props.focusPoint); context.map.setZoom(14);
  }, [context, props.focusPoint]);
  useEffect(() => {
    if (!key) return;
    let cancelled = false; let map: google.maps.Map | undefined;
    const timeout = setTimeout(() => { if (!cancelled) setUnavailable(true); }, 12000);
    setupGoogleMaps(key);
    Promise.all([importLibrary('maps'), importLibrary('marker')]).then(([maps, marker]) => {
      if (cancelled || !target.current) return;
      map = new maps.Map(target.current, {
        center: { lat: 12.9716, lng: 77.5946 }, zoom: 12, mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID ?? 'DEMO_MAP_ID',
        mapTypeId: 'roadmap', tilt: 0, heading: 0, streetViewControl: false, mapTypeControl: false, fullscreenControl: false,
        clickableIcons: false, gestureHandling: 'greedy', zoomControl: true,
      });
      const ready = map.addListener('tilesloaded', () => { clearTimeout(timeout); ready.remove(); });
      map.addListener('idle', () => {
        const bounds = map?.getBounds();
        if (bounds) { const sw = bounds.getSouthWest(), ne = bounds.getNorthEast(); if (sw.lng() < ne.lng()) callbacks.current.onBounds([sw.lng(), sw.lat(), ne.lng(), ne.lat()].join(',')); }
      });
      setContext({ map, marker });
    }).catch(() => { if (!cancelled) setUnavailable(true); });
    return () => { cancelled = true; clearTimeout(timeout); if (map) google.maps.event.clearInstanceListeners(map); setContext(null); };
  }, [key, attempt]);
  useEffect(() => {
    if (!context) return;
    const { map, marker: library } = context;
    const recommended = new Set(props.response?.mapAction.highlightPropertyIds ?? []);
    const alternatives = new Set(props.response?.mapAction.candidatePropertyIds ?? []);
    const markers = props.properties.filter(property => property.location !== null).map(property => {
      const selected = property.id === props.selectedId;
      const content = document.createElement('button');
      content.type = 'button'; content.textContent = configurationLabel(property);
      content.className = `rental-pin ${selected ? 'is-selected' : recommended.has(property.id) ? 'is-match' : alternatives.has(property.id) ? 'is-alternative' : props.response ? 'is-subdued' : ''}`;
      content.setAttribute('aria-label', `Select ${property.title} on map`);
      content.setAttribute('aria-pressed', String(selected));
      const marker = new library.AdvancedMarkerElement({ position: property.location!, title: property.title, zIndex: selected ? 100 : recommended.has(property.id) ? 10 : 1 });
      marker.append(content);
      content.addEventListener('click', () => callbacks.current.onSelect(property.id));
      return marker;
    });
    const clusterer = new MarkerClusterer({ map, markers });
    return () => { clusterer.clearMarkers(); clusterer.setMap(null); markers.forEach(marker => { marker.map = null; }); };
  }, [context, props.properties, props.selectedId, props.response]);
  const focusedOnce = useRef(false);
  useEffect(() => {
    if (!context || !props.properties.some(property => property.location) || focusedOnce.current) return;
    const bounds = new google.maps.LatLngBounds(); props.properties.forEach(property => { if (property.location) bounds.extend(property.location); });
    context.map.fitBounds(bounds, 60); focusedOnce.current = true;
  }, [context, props.properties]);
  useEffect(() => {
    if (!context || !props.response) return;
    const shape = props.response.mapAction.boundary;
    const polygon = shape ? new google.maps.Polygon({ paths: shape.polygon.map(([lng, lat]) => ({ lat, lng })), map: context.map, fillColor: '#087e79', fillOpacity: .1, strokeColor: '#087e79', strokeWeight: 2, clickable: false }) : null;
    const bounds = new google.maps.LatLngBounds();
    if (shape) shape.polygon.forEach(([lng, lat]) => bounds.extend({ lat, lng }));
    else callbacks.current.properties.filter(row => props.response!.mapAction.candidatePropertyIds.includes(row.id)).forEach(row => { if (row.location) bounds.extend(row.location); });
    if (!bounds.isEmpty()) context.map.fitBounds(bounds, 55);
    return () => polygon?.setMap(null);
  }, [context, props.focusKey]); // A selection or viewport fetch must not refit the search.
  useEffect(() => {
    if (!context || !props.selectedId) return;
    const selected = props.properties.find(row => row.id === props.selectedId);
    if (selected?.location) context.map.panTo(selected.location);
  }, [context, props.selectedId]);
  useEffect(() => {
    if (!context || !props.response?.commute?.encodedPolyline) return;
    const points = decode(props.response.commute.encodedPolyline).map(([lat, lng]) => ({ lat, lng }));
    const route = new google.maps.Polyline({ map: context.map, path: points, strokeColor: '#245bc4', strokeWeight: 5 });
    const bounds = new google.maps.LatLngBounds(); points.forEach(point => bounds.extend(point)); context.map.fitBounds(bounds, 50);
    return () => route.setMap(null);
  }, [context, props.response?.commute?.encodedPolyline]);
  if (!key || unavailable) return <div className="rental-map-fallback"><div className="rental-map-grid" aria-hidden="true" />
    <div className="rental-map-unavailable" role="status"><strong>Map unavailable</strong><p>{key ? 'The map could not load. You can still browse the catalog and chat.' : 'A browser map key is needed to display the interactive map. The catalog is available below.'}</p>
      {key && <button className="light" onClick={() => { setUnavailable(false); focusedOnce.current = false; setAttempt(value => value + 1); }}>Retry map</button>}
    </div></div>;
  return <div ref={target} className="rental-live-map" aria-label="Interactive rental property map" />;
}
