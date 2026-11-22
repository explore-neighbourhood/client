'use client';

import { useEffect, useRef, useState } from 'react';
import { AnchorPicker } from './anchor-picker';
import type { JourneyLocation } from '../../journey-planner/journey-planner';

export function MapLocationSearch({ start, destination, onPick, onPlan, compact = false }: {
  start?: JourneyLocation;
  destination?: JourneyLocation;
  onPick(target: 'place' | 'start' | 'destination', location: JourneyLocation): void;
  onPlan(): void;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(!compact);
  useEffect(() => setOpen(!compact), [compact]);
  const [target, setTarget] = useState<'place' | 'start' | 'destination'>('place');
  const [chosen, setChosen] = useState('');
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const stage = element.closest<HTMLElement>('.map-stage');
    const observer = new ResizeObserver(() => stage?.style.setProperty('--map-search-height', `${element.getBoundingClientRect().height}px`));
    observer.observe(element);
    return () => { observer.disconnect(); stage?.style.removeProperty('--map-search-height'); };
  }, []);

  return <section ref={root} className="map-location-search" aria-label="Search places on the map">
    <details open={open} onToggle={event => setOpen(event.currentTarget.open)}>
    <summary>Search Google Maps · Start / Destination</summary>
    <div className="segments" aria-label="Use search result as">
      {(['place', 'start', 'destination'] as const).map(value => <button type="button" key={value}
        aria-pressed={target === value} onClick={() => { setTarget(value); setChosen(''); }}>
        {value === 'place' ? 'Find a place' : value === 'start' ? 'Start' : 'Destination'}
      </button>)}
    </div>
    <AnchorPicker key={target} label={target === 'start' ? 'Search start on Google Maps' : target === 'destination' ? 'Search destination on Google Maps' : 'Search Google Maps'}
      searchButtonLabel="Search map" selectedLabel={chosen} onClear={() => setChosen('')}
      onPick={(point, label) => {
        onPick(target, { point, label });
        if (target === 'start') { setTarget('destination'); setChosen(''); }
        else setChosen(label);
      }} />
    {(start || destination) && <div className="map-search-endpoints">
      <p><strong>Start:</strong> {start?.label || 'Choose a start'}</p>
      <p><strong>Destination:</strong> {destination?.label || 'Choose a destination'}</p>
      {start && destination && <button type="button" onClick={onPlan}>Plan this route</button>}
    </div>}
    </details>
  </section>;
}
