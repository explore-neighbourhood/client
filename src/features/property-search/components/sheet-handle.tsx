'use client';

import { useRef, type RefObject } from 'react';

export function SheetHandle({ panel, height, onHeight }: {
  panel: RefObject<HTMLElement | null>;
  height: number;
  onHeight(height: number): void;
}) {
  const drag = useRef<{ y: number; height: number } | null>(null);
  const constrain = (value: number) => Math.max(35, Math.min(90, value));
  return (
    <div className="sheet-handle" role="slider" tabIndex={0} aria-label="Property panel height" aria-orientation="vertical"
      aria-valuemin={35} aria-valuemax={90} aria-valuenow={Math.round(height)} aria-valuetext={`${Math.round(height)} percent of map area`}
      onPointerDown={event => {
        drag.current = { y: event.clientY, height };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={event => {
        const areaHeight = panel.current?.parentElement?.clientHeight;
        if (!drag.current || !areaHeight) return;
        onHeight(constrain(drag.current.height + (drag.current.y - event.clientY) / areaHeight * 100));
      }}
      onPointerUp={event => { drag.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      onPointerCancel={() => { drag.current = null; }}
      onKeyDown={event => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault();
          onHeight(constrain(height + (event.key === 'ArrowUp' ? 10 : -10)));
        }
      }}>
      <span aria-hidden="true" />
    </div>
  );
}
