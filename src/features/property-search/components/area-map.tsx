'use client';

import dynamic from 'next/dynamic';
import { useState, type MouseEvent } from 'react';
import type { MapNeighborhood } from '../../neighborhood/neighborhood-explorer';
import type { SearchResult } from '../api';
import { cityView, type Point, type SearchArea } from '../area';
import { MapLegend } from './map-legend';

const GoogleMap = dynamic(() => import('./google-map').then(module => module.GoogleMap), {
  ssr: false,
  loading: () => <div className="map-loading" role="status">Loading map…</div>,
});
const GlobeMap = dynamic(() => import('./globe-map').then(module => module.GlobeMap), {
  ssr: false,
  loading: () => <div className="map-loading" role="status">Opening 3D view…</div>,
});
const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

export type MapProps = {
  area: SearchArea | null;
  draft: readonly Point[];
  pendingPin: Point | null;
  drawing: boolean;
  properties: SearchResult[];
  selectedId?: string;
  onSelect(id: string): void;
  neighborhood: MapNeighborhood;
  onPlace(id: string): void;
  onPick(point: Point): void;
};

function CoordinateView(props: MapProps) {
  const { area, pendingPin, draft, drawing, properties, selectedId, onPick, onSelect } = props;
  const [zoom, setZoom] = useState(1);
  const polygon = area?.kind === 'polygon' ? area.points : [];
  const polygonCenter = polygon.length ? polygon.reduce((sum, point) => ({
    lat: sum.lat + point.lat / polygon.length, lng: sum.lng + point.lng / polygon.length,
  }), { lat: 0, lng: 0 }) : null;
  const center = area?.kind === 'radius' ? area.center : polygonCenter ?? pendingPin ?? cityView;
  const latitudeScale = Math.max(.001, Math.cos(center.lat * Math.PI / 180));
  const wrappedLongitude = (lng: number) => ((lng - center.lng + 540) % 360) - 180;
  const halfSpan = (area?.kind === 'radius' ? area.radiusKm * 1.18 / 111.2
    : polygon.length ? Math.max(...polygon.map(point => Math.max(Math.abs(point.lat - center.lat), Math.abs(wrappedLongitude(point.lng)) * latitudeScale))) * 1.25
    : .065) / zoom;
  const project = (point: Point) => ({
    x: 50 + 50 * wrappedLongitude(point.lng) * latitudeScale / halfSpan,
    y: 50 - 50 * (point.lat - center.lat) / halfSpan,
  });
  const location = (point: Point) => {
    const { x, y } = project(point);
    if (x < 0 || x > 100 || y < 0 || y > 100) return null;
    return { left: `${x}%`, top: `${y}%` };
  };
  const clip = (points: readonly Point[]) => `polygon(${points.map(point => {
    const { x, y } = project(point);
    return `${x}% ${y}%`;
  }).join(',')})`;

  function pick(event: MouseEvent<HTMLDivElement>) {
    if ((event.target as Element).closest('button')) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const lng = center.lng + ((event.clientX - bounds.left) / bounds.width * 2 - 1) * halfSpan / latitudeScale;
    const lat = center.lat - ((event.clientY - bounds.top) / bounds.height * 2 - 1) * halfSpan;
    if (lat >= -90 && lat <= 90) onPick({ lat, lng: ((lng + 540) % 360) - 180 });
  }

  return (
    <div className="coordinate-map">
      <p className="map-caption">Coordinate view <span>Street basemap unavailable</span></p>
      <div className="coordinate-plot" onClick={pick}>
        {area?.kind === 'radius' && <div className="radius-plot" style={{ width: `${area.radiusKm / 111.2 / halfSpan * 100}%` }} />}
        {polygon.length > 0 && <div className="polygon-plot" style={{ clipPath: clip(polygon) }} />}
        {drawing && draft.length >= 3 && <div className="polygon-plot draft-plot" style={{ clipPath: clip(draft) }} />}
        {drawing && draft.map((point, index) => {
          const position = location(point);
          return position && <span aria-hidden="true" className="plot-point" key={index} style={position}>{index + 1}</span>;
        })}
        {pendingPin && location(pendingPin) && !drawing && <span className="plot-point" aria-hidden="true" style={location(pendingPin)!}>+</span>}
        {properties.map(property => {
          const position = location(property.location);
          return position && (
            <button type="button" className={`map-pin ${selectedId === property.id ? 'active' : ''}`}
              key={property.id} style={position} aria-label={`Select ${property.title} on map`}
              aria-pressed={selectedId === property.id} onClick={() => onSelect(property.id)} />
          );
        })}
      </div>
      <div className="map-controls">
        <button className="light" type="button" aria-label="Zoom out" onClick={() => setZoom(current => Math.max(.25, current / 2))}>−</button>
        <button className="light" type="button" aria-label="Zoom in" onClick={() => setZoom(current => Math.min(8, current * 2))}>+</button>
        <button className="light" type="button" onClick={() => setZoom(1)}>Reset view</button>
        <MapLegend neighborhood={props.neighborhood} />
        {drawing && <p>Select corners on the map to outline your search area.</p>}
      </div>
    </div>
  );
}

export function AreaMap(props: MapProps) {
  const [unavailable, setUnavailable] = useState(false);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'terrain' | 'globe'>('roadmap');
  return (
    <section className="map-panel" aria-label="Property map">
      <label className="map-style-controls">Map view
        <select aria-label="Map view" value={mapType} disabled={!mapsKey || !mapId || unavailable}
          onChange={event => setMapType(event.target.value as typeof mapType)}>
          <option value="roadmap">Default (Roadmap)</option>
          <option value="satellite">Satellite</option>
          <option value="terrain">Terrain</option>
          <option value="globe">3D / Globe</option>
        </select>
      </label>
      {mapsKey && mapId && !unavailable
        ? mapType === 'globe'
          ? <GlobeMap {...props} apiKey={mapsKey} onFallback={() => setMapType('roadmap')} />
          : <GoogleMap {...props} apiKey={mapsKey} mapId={mapId} mapType={mapType} onError={() => setUnavailable(true)} />
        : <CoordinateView key={JSON.stringify(props.area)} {...props} />}
    </section>
  );
}
