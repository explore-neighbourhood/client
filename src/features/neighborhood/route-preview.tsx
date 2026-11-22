'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Point } from '../property-search/area';
import { distanceMeters } from './geometry';

export function RoutePreview({ path, onPosition }: { path: readonly Point[]; onPosition(point?: Point): void }) {
  const [playing, setPlaying] = useState(false);
  const [distance, setDistance] = useState(0);
  const cumulative = useMemo(() => {
    let meters = 0;
    return path.map((point, index) => {
      if (index > 0) meters += distanceMeters(path[index - 1]!, point);
      return meters;
    });
  }, [path]);
  const total = cumulative.at(-1) ?? 0;

  useEffect(() => () => onPosition(undefined), [onPosition]);

  useEffect(() => {
    setDistance(0);
    setPlaying(false);
  }, [path]);

  useEffect(() => {
    if (path.length === 0) return;
    const end = cumulative.findIndex(meters => meters >= distance);
    const index = end < 0 ? path.length - 1 : end;
    const from = path[Math.max(0, index - 1)]!;
    const to = path[index]!;
    const start = cumulative[Math.max(0, index - 1)]!;
    const segment = cumulative[index]! - start;
    const ratio = segment > 0 ? Math.max(0, Math.min(1, (distance - start) / segment)) : 0;
    onPosition({ lat: from.lat + (to.lat - from.lat) * ratio, lng: from.lng + (to.lng - from.lng) * ratio });
  }, [distance, cumulative, path, onPosition]);

  useEffect(() => {
    if (!playing) return;
    // A fixed visual playback speed. The provider's ETA is displayed separately.
    const tick = setInterval(() => setDistance(current => Math.min(total, current + total / 200)), 100);
    return () => clearInterval(tick);
  }, [playing, total]);

  useEffect(() => {
    if (distance >= total) setPlaying(false);
  }, [distance, total]);

  return (
    <div className="route-preview">
      <p>Animated route preview · playback speed is illustrative.</p>
      <progress aria-label="Route preview progress" max={Math.max(1, total)} value={distance} />
      <div className="inline-controls">
        <button className="light" type="button" disabled={total === 0} onClick={() => {
          if (distance >= total) setDistance(0);
          setPlaying(current => !current);
        }}>{playing ? 'Pause map preview' : 'Play map preview'}</button>
        <button className="light" type="button" onClick={() => { setPlaying(false); setDistance(0); }}>Restart</button>
      </div>
    </div>
  );
}
