'use client';

import { decode } from '@googlemaps/polyline-codec';
import { useEffect, useRef, useState } from 'react';
import { AnchorPicker } from '../property-search/components/anchor-picker';
import type { Point } from '../property-search/area';
import { describeFailure, prepareJourney, type Mode } from '../neighborhood/api';
import type { JourneyRoute } from '../neighborhood/nearby-destinations';

export type JourneyLocation = { point: Point; label: string };

export function JourneyPlanner({ initialStart, initialDestination, mapSelection, onOrigin, onPreview, onView }: {
  initialStart?: JourneyLocation;
  initialDestination?: JourneyLocation;
  mapSelection?: Point;
  onOrigin(location: JourneyLocation): void;
  onPreview(route?: JourneyRoute): void;
  onView(route: JourneyRoute, origin: JourneyLocation): void;
}) {
  const [origin, setOrigin] = useState<JourneyLocation | undefined>(initialStart);
  const [destination, setDestination] = useState<JourneyLocation | undefined>(initialDestination);
  const [pickTarget, setPickTarget] = useState<'origin' | 'destination'>(initialStart ? 'destination' : 'origin');
  const [mode, setMode] = useState<Mode>('WALK');
  const [route, setRoute] = useState<JourneyRoute>();
  const [status, setStatus] = useState<'idle' | 'connecting' | 'routing'>('idle');
  const [error, setError] = useState('');
  const request = useRef<AbortController | null>(null);
  const callbacks = useRef({ onOrigin, onPreview });
  useEffect(() => { callbacks.current = { onOrigin, onPreview }; }, [onOrigin, onPreview]);
  useEffect(() => () => request.current?.abort(), []);

  function clearRoute() {
    request.current?.abort();
    setRoute(undefined);
    setError('');
    setStatus('idle');
    callbacks.current.onPreview(undefined);
  }

  useEffect(() => {
    setOrigin(initialStart);
    request.current?.abort();
    setRoute(undefined);
    setStatus('idle');
    setError('');
    callbacks.current.onPreview(undefined);
  }, [initialStart?.point.lat, initialStart?.point.lng, initialStart?.label]);

  useEffect(() => {
    if (!initialDestination) return;
    request.current?.abort();
    setDestination(initialDestination);
    setRoute(undefined);
    setStatus('idle');
    setError('');
    callbacks.current.onPreview(undefined);
  }, [initialDestination?.point.lat, initialDestination?.point.lng, initialDestination?.label]);

  useEffect(() => {
    if (!mapSelection) return;
    clearRoute();
    const location = { point: mapSelection, label: pickTarget === 'origin' ? 'Selected start on map' : 'Selected destination on map' };
    if (pickTarget === 'origin') { setOrigin(location); callbacks.current.onOrigin(location); setPickTarget('destination'); }
    else setDestination(location);
  }, [mapSelection]);

  async function prepare() {
    if (!origin || !destination) { setError('Choose both locations from the results or the map.'); return; }
    clearRoute();
    const active = new AbortController();
    request.current = active;
    setStatus('connecting');
    try {
      const data = await prepareJourney(origin.point, destination.point, mode,
        AbortSignal.any([active.signal, AbortSignal.timeout(15000)]), () => { if (!active.signal.aborted) setStatus('routing'); });
      if (active.signal.aborted) return;
      if (!data) { setError('No route is available for this mode. Choose another mode or destination.'); return; }
      const journey: JourneyRoute = {
        ...data, mode, direct: true,
        path: decode(data.encodedPolyline).map(([lat, lng]) => ({ lat, lng })),
        destination: { id: `point:${destination.point.lat},${destination.point.lng}`, name: destination.label,
          location: destination.point, destination: '', attributions: [] },
      };
      if (journey.path.length < 2) { setError('This route has no usable path. Choose a different destination.'); return; }
      setRoute(journey);
      callbacks.current.onPreview(journey);
    } catch (failure) {
      if (!active.signal.aborted) setError(describeFailure(failure));
    } finally {
      if (!active.signal.aborted) setStatus('idle');
    }
  }

  return <section className="journey-planner" aria-label="Plan your journey">
    <div className="planner-intro"><span className="eyebrow">YOUR EVERYDAY JOURNEY</span><h2 id="journey-planner-heading">See the way<br />before you go.</h2><p>Choose two places and explore the route between them.</p></div>
    <div className="journey-locations">
      <div className="journey-location origin-location">
        <AnchorPicker label="Start location" selectedLabel={origin?.label ?? ''} onClear={() => { clearRoute(); setOrigin(undefined); }}
          onPick={(point, label) => { clearRoute(); const location = { point, label }; setOrigin(location); onOrigin(location); setPickTarget('destination'); }} />
        <button className="text-button" type="button" aria-pressed={pickTarget === 'origin'} onClick={() => setPickTarget('origin')}>Choose start on map</button>
      </div>
      <div className="journey-location destination-location">
        <AnchorPicker label="Destination" selectedLabel={destination?.label ?? ''} onClear={() => { clearRoute(); setDestination(undefined); }}
          onPick={(point, label) => { clearRoute(); setDestination({ point, label }); }} />
        <button className="text-button" type="button" aria-pressed={pickTarget === 'destination'} onClick={() => setPickTarget('destination')}>Choose destination on map</button>
      </div>
    </div>
    <label>Travel mode<select value={mode} onChange={event => { clearRoute(); setMode(event.target.value as Mode); }}>
      <option value="WALK">Walking</option><option value="TWO_WHEELER">Two-wheeler</option><option value="DRIVE">Car</option><option value="TRANSIT">Public transit</option>
    </select></label>
    <button className="primary-action" type="button" disabled={status !== 'idle' || !origin || !destination} onClick={() => void prepare()}>
      {status === 'idle' ? 'Preview route' : 'Preparing your route…'}
    </button>
    {status !== 'idle' && <div className="preparation-status" role="status"><span className="loading-ring" />{status === 'connecting' ? 'Connecting to the journey service…' : 'Calculating your route…'}</div>}
    {error && <p className="form-error" role="alert">{error}</p>}
    {route && origin && <div className="prepared-journey">
      <span className="eyebrow">YOUR ROUTE IS READY</span>
      <div className="journey-metrics"><strong>{(route.distanceMeters / 1000).toFixed(2)}<small> km</small></strong><strong>{Math.max(1, Math.round(route.durationSeconds / 60))}<small> min</small></strong></div>
      <p>Google Maps estimate · {route.mode === 'WALK' ? 'Walking' : route.mode === 'DRIVE' ? 'Car' : route.mode === 'TWO_WHEELER' ? 'Two-wheeler' : 'Transit'}</p>
      <button type="button" className="primary-action" onClick={() => onView(route, origin)}>View journey</button>
      <p className="fine-print">Your 3D scene prepares before playback. Street View and map are available as alternatives.</p>
    </div>}
  </section>;
}
