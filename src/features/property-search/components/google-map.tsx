'use client';

import { importLibrary } from '@googlemaps/js-api-loader';
import { useEffect, useRef, useState } from 'react';
import { cityView, type SearchArea } from '../area';
import type { MapProps } from './area-map';
import { setupGoogleMaps } from './google-loader';
import { facilityMarkers, MapLegend } from './map-legend';
import { useAppearance } from '../../appearance/appearance';

const markerPrice = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', notation: 'compact', maximumFractionDigits: 1 });

type MapContext = {
  map: google.maps.Map;
  maps: google.maps.MapsLibrary;
  marker: google.maps.MarkerLibrary;
};

function fit(context: MapContext, area: SearchArea | null) {
  const { map, maps } = context;
  if (!area) {
    map.setCenter(cityView);
    map.setZoom(12);
    return;
  }
  if (area.kind === 'radius') {
    const circle = new maps.Circle({ center: area.center, radius: area.radiusKm * 1000 });
    const bounds = circle.getBounds();
    if (bounds) map.fitBounds(bounds, 46);
    return;
  }
  const bounds = new google.maps.LatLngBounds();
  area.points.forEach(point => bounds.extend(point));
  map.fitBounds(bounds, 46);
}

export function GoogleMap({ apiKey, mapId, mapType, area, draft, drawing, pendingPin, properties, selectedId, onPick, onSelect, onError, neighborhood, onPlace }:
  MapProps & { apiKey: string; mapId: string; mapType: 'roadmap' | 'satellite' | 'terrain'; onError(): void }) {
  const { appearance } = useAppearance();
  const viewport = useRef<google.maps.MapOptions | null>(null);
  const progressMarker = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const target = useRef<HTMLDivElement>(null);
  const callbacks = useRef({ onPick, onSelect, onError, onPlace });
  const [context, setContext] = useState<MapContext | null>(null);

  useEffect(() => { callbacks.current = { onPick, onSelect, onError, onPlace }; }, [onPick, onSelect, onError, onPlace]);

  useEffect(() => {
    let mounted = true;
    let currentMap: google.maps.Map | undefined;
    let click: google.maps.MapsEventListener | undefined;
    let initTimeout: ReturnType<typeof setTimeout> | undefined = setTimeout(() => {
      if (mounted) callbacks.current.onError();
    }, 10000);
    setupGoogleMaps(apiKey);
    Promise.all([importLibrary('maps'), importLibrary('marker')]).then(([maps, marker]) => {
      if (!mounted || !target.current) return;
      const map = new maps.Map(target.current, {
        mapId, center: cityView, zoom: 12, streetViewControl: false, fullscreenControl: false,
        mapTypeControl: false, clickableIcons: false, gestureHandling: 'cooperative', zoomControl: true,
        colorScheme: appearance === 'system' ? 'FOLLOW_SYSTEM' : appearance.toUpperCase(),
        ...viewport.current,
      });
      currentMap = map;
      const ready = map.addListener('tilesloaded', () => {
        clearTimeout(initTimeout);
        initTimeout = undefined;
        ready.remove();
      });
      click = map.addListener('click', (event: google.maps.MapMouseEvent) => {
        if (event.latLng) callbacks.current.onPick(event.latLng.toJSON());
      });
      setContext({ map, maps, marker });
    }).catch(() => { if (mounted) callbacks.current.onError(); });
    return () => {
      mounted = false;
      if (currentMap) viewport.current = {
        center: currentMap.getCenter(), zoom: currentMap.getZoom(),
        heading: currentMap.getHeading(), tilt: currentMap.getTilt(),
      };
      clearTimeout(initTimeout);
      click?.remove();
    };
  }, [apiKey, mapId, appearance]);

  useEffect(() => {
    context?.map.setMapTypeId(mapType);
  }, [context, mapType]);

  useEffect(() => {
    if (!context) return;
    fit(context, area);
    const style = { map: context.map, fillColor: '#087e79', fillOpacity: .16, strokeColor: '#087e79', strokeWeight: 2, clickable: false };
    const shape = area?.kind === 'radius' ? new context.maps.Circle({ ...style, center: area.center, radius: area.radiusKm * 1000 })
      : area?.kind === 'polygon' ? new context.maps.Polygon({ ...style, paths: [...area.points] }) : null;
    return () => shape?.setMap(null);
  }, [context, area]);

  useEffect(() => {
    const element = target.current;
    if (!context || !element) return;
    let frame: number | undefined;
    const observer = new ResizeObserver(entries => {
      if (!entries.some(entry => entry.contentRect.width > 0 && entry.contentRect.height > 0)) return;
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = context.map.getCenter();
        google.maps.event.trigger(context.map, 'resize');
        if (center) context.map.setCenter(center);
      });
    });
    observer.observe(element);
    return () => { observer.disconnect(); if (frame !== undefined) cancelAnimationFrame(frame); };
  }, [context]);

  useEffect(() => {
    if (!context) return;
    if (pendingPin && !drawing) context.map.panTo(pendingPin);
    const points = drawing ? draft : pendingPin ? [pendingPin] : [];
    const markers = points.map((position, index) => {
      const pin = new context.marker.PinElement({ glyphText: drawing ? String(index + 1) : '+', background: '#e6f7f3', borderColor: '#087e79' });
      const marker = new context.marker.AdvancedMarkerElement({ map: context.map, position });
      marker.append(pin);
      return marker;
    });
    const outline = drawing ? new context.maps.Polyline({ path: [...draft], map: context.map, strokeColor: '#087e79', clickable: false }) : undefined;
    return () => {
      markers.forEach(marker => { marker.map = null; });
      outline?.setMap(null);
    };
  }, [context, draft, drawing, pendingPin]);

  useEffect(() => {
    if (!context) return;
    const items = properties.map(property => {
      const selected = selectedId === property.id;
      const priceLabel = property.priceInr === null ? 'Home' : `${markerPrice.format(property.priceInr)}${property.intent === 'rent' ? '/mo' : ''}`;
      const marker = new context.marker.AdvancedMarkerElement({
        map: context.map, position: property.location, title: `${property.title} · ${priceLabel}`, gmpClickable: true, zIndex: selected ? 10 : 1,
        collisionBehavior: selected ? google.maps.CollisionBehavior.REQUIRED : google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY,
      });
      const label = document.createElement('span');
      label.className = `property-map-label ${selected ? 'selected' : ''}`;
      label.textContent = priceLabel;
      marker.append(label);
      const listener = marker.addListener('click', () => callbacks.current.onSelect(property.id));
      return { marker, listener };
    });
    return () => items.forEach(({ marker, listener }) => { listener.remove(); marker.map = null; });
  }, [context, properties, selectedId]);


  useEffect(() => {
    if (!context) return;
    const items = neighborhood.places.map(place => {
      const style = neighborhood.category ? facilityMarkers[neighborhood.category] : { color: '#ad601f', glyph: '•' };
      const pin = new context.marker.PinElement({ background: style.color, borderColor: '#fff', glyphColor: '#fff', glyphText: style.glyph });
      const marker = new context.marker.AdvancedMarkerElement({
        map: context.map, position: place.location, title: place.name, gmpClickable: true,
      });
      marker.append(pin);
      return { marker, listener: marker.addListener('click', () => callbacks.current.onPlace(place.id)) };
    });
    const route = neighborhood.route.length ? new context.maps.Polyline({
      map: context.map, path: neighborhood.route, strokeColor: '#2554a4', strokeOpacity: .9, strokeWeight: 5, clickable: false,
    }) : undefined;
    return () => {
      items.forEach(({ marker, listener }) => { listener.remove(); marker.map = null; });
      route?.setMap(null);
    };
  }, [context, neighborhood.places, neighborhood.category, neighborhood.route]);

  useEffect(() => {
    if (!context) return;
    const marker = new context.marker.AdvancedMarkerElement({ title: 'Journey preview position' });
    marker.append(new context.marker.PinElement({ background: '#2554a4', borderColor: '#172b3c' }));
    progressMarker.current = marker;
    return () => { marker.map = null; progressMarker.current = null; };
  }, [context]);

  useEffect(() => {
    if (!context || !progressMarker.current) return;
    progressMarker.current.position = neighborhood.streetPoint;
    progressMarker.current.map = neighborhood.streetPoint ? context.map : null;
  }, [context, neighborhood.streetPoint]);

  useEffect(() => {
    if (!context || neighborhood.route.length === 0) return;
    const bounds = new google.maps.LatLngBounds();
    neighborhood.route.forEach(point => bounds.extend(point));
    context.map.fitBounds(bounds, 48);
  }, [context, neighborhood.route]);

  useEffect(() => {
    if (!context || !selectedId) return;
    const property = properties.find(item => item.id === selectedId);
    if (property) context.map.panTo(property.location);
  }, [context, selectedId, properties]);

  useEffect(() => {
    if (context && viewport.current) context.map.setOptions(viewport.current);
  }, [context]);

  return (
    <>
      <div className="google-map" ref={target} />
      <div className="map-controls">
        <button className="light" type="button" onClick={() => { if (context) fit(context, area); }}>Reset view</button>
        <MapLegend neighborhood={neighborhood} />
        {drawing && <p>Select corners on the map to outline your search area.</p>}
      </div>
    </>
  );
}
