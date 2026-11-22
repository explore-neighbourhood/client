'use client';

import { apiFetch } from '../../embed/session';

import { useEffect, useState, type FormEvent } from 'react';
import { z } from 'zod';

const localityList = z.object({
  data: z.array(z.object({ id: z.string(), name: z.string(), source: z.string() })),
});

export function LocalityPicker({ value, onSelect, initialQuery = '' }: { value: string; onSelect(value: string): void; initialQuery?: string }) {
  const [text, setText] = useState(initialQuery);
  const [prefix, setPrefix] = useState(initialQuery);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<z.infer<typeof localityList>['data'] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const request = new AbortController();
    const query = prefix ? `?${new URLSearchParams({ prefix })}` : '';
    apiFetch(`/api/v1/localities${query}`, {
      cache: 'no-store', signal: AbortSignal.any([request.signal, AbortSignal.timeout(6000)]),
    }).then(async response => {
      if (!response.ok) throw new Error('Could not load localities');
      const list = localityList.parse(await response.json());
      if (!request.signal.aborted) setResult(list.data);
    }).catch(() => {
      if (!request.signal.aborted) setError(true);
    });
    return () => request.abort();
  }, [prefix, attempt]);

  function lookUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setError(false);
    onSelect('');
    setPrefix(text.trim());
    setAttempt(current => current + 1);
  }

  return (
    <div className="locality-picker">
      <form className="corner-form" onSubmit={lookUp}>
        <label>Locality name<input value={text} maxLength={64} onChange={event => { setText(event.target.value); onSelect(''); }} /></label>
        <button type="submit" className="light">Find localities</button>
      </form>
      {error ? <p role="alert">Locality lookup is unavailable. Try again or search near a pin.</p>
        : !result ? <p role="status">Looking up verified localities…</p>
        : result.length === 0 ? <p>No verified locality is available. You can search near a pin or draw an area.</p>
        : <label>Verified boundary
          <select value={value} onChange={event => onSelect(event.target.value)}>
            <option value="">Choose a locality</option>
            {result.map(place => <option key={place.id} value={place.id}>{place.name}</option>)}
          </select>
        </label>}
    </div>
  );
}
