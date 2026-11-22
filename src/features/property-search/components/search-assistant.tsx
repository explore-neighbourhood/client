'use client';

import { apiFetch } from '../../embed/session';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { z } from 'zod';

const schema = z.object({
  intent: z.enum(['rent', 'buy']).nullable(),
  bedrooms: z.number().int().min(0).max(20).nullable(),
  maxPriceInr: z.number().int().positive().nullable(),
  radiusKm: z.number().min(.1).max(25).nullable(),
  officeOrLandmark: z.string().nullable(),
  locality: z.string().nullable(),
  unverifiedRequirements: z.array(z.string()).max(8),
});
export type Interpretation = z.infer<typeof schema>;

export function SearchAssistant({ onApply }: { onApply(draft: Interpretation): void }) {
  const [query, setQuery] = useState('');
  const [draft, setDraft] = useState<Interpretation>();
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState('');
  const [editing, setEditing] = useState(false);
  const active = useRef<AbortController>(null);

  useEffect(() => () => active.current?.abort(), []);

  async function interpret(event: FormEvent) {
    event.preventDefault();
    active.current?.abort();
    const request = new AbortController();
    active.current = request;
    setLoading(true);
    setFailure('');
    setDraft(undefined);
    setEditing(false);
    try {
      const response = await apiFetch('/api/v1/search/interpret', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query }),
        cache: 'no-store', signal: AbortSignal.any([request.signal, AbortSignal.timeout(12000)]),
      });
      if (!response.ok) throw new Error('Assistant unavailable');
      const parsed = z.object({ data: schema }).parse(await response.json());
      if (!request.signal.aborted) setDraft(parsed.data);
    } catch {
      if (!request.signal.aborted) setFailure('Search assistance is unavailable. Search by location or building name and adjust the filters below.');
    } finally {
      if (!request.signal.aborted) setLoading(false);
    }
  }

  return (
    <section className="search-assistant" aria-label="Describe your search">
      <form className="corner-form" onSubmit={interpret}>
        <label>What are you looking for?
          <textarea value={query} onChange={event => setQuery(event.target.value)} minLength={5} maxLength={600} rows={3}
            placeholder="1 BHK rental up to ₹25,000 near my Bellandur office" required />
        </label>
        <button className="light" type="submit" disabled={loading}>Find matching filters</button>
      </form>
      {loading && <p role="status">Interpreting your search…</p>}
      {failure && <p className="notice" role="alert">{failure}</p>}
      {draft && <>
        <ul className="interpretation" aria-label="Suggested filters">
          {draft.intent && <li><button type="button" className="light" onClick={() => setEditing(true)} aria-label="Edit interpreted listing type">{draft.intent === 'rent' ? 'Rent' : 'Buy'}</button></li>}
          {draft.bedrooms !== null && <li><button type="button" className="light" onClick={() => setEditing(true)} aria-label="Edit interpreted bedrooms">{draft.bedrooms} BHK</button></li>}
          {draft.maxPriceInr !== null && <li><button type="button" className="light" onClick={() => setEditing(true)} aria-label="Edit interpreted budget">Up to ₹{draft.maxPriceInr.toLocaleString('en-IN')}</button></li>}
          {draft.radiusKm !== null && <li><button type="button" className="light" onClick={() => setEditing(true)} aria-label="Edit interpreted radius">{draft.radiusKm} km</button></li>}
          {draft.locality && <li><button type="button" className="light" onClick={() => setEditing(true)} aria-label="Edit interpreted locality">{draft.locality}</button></li>}
          {draft.officeOrLandmark && <li><button type="button" className="light" onClick={() => setEditing(true)} aria-label="Edit interpreted landmark">{draft.officeOrLandmark}</button></li>}
        </ul>
        <button type="button" className="light" aria-expanded={editing} onClick={() => setEditing(current => !current)}>{editing ? 'Close filter editor' : 'Edit suggested filters'}</button>
        {editing && <div className="corner-form" aria-label="Edit suggested filters">
          <div className="field-pair">
            <label>Suggested listing type<select value={draft.intent ?? ''} onChange={event => setDraft({ ...draft, intent: event.target.value === 'rent' ? 'rent' : event.target.value === 'buy' ? 'buy' : null })}>
              <option value="">Any</option><option value="rent">Rent</option><option value="buy">Buy</option>
            </select></label>
            <label>Suggested bedrooms<input type="number" min="0" max="20" step="1" value={draft.bedrooms ?? ''} onChange={event => setDraft({ ...draft, bedrooms: event.target.value === '' ? null : Number(event.target.value) })} /></label>
            <label>Suggested maximum price (₹)<input type="number" min="1" step="1" value={draft.maxPriceInr ?? ''} onChange={event => setDraft({ ...draft, maxPriceInr: event.target.value === '' ? null : Number(event.target.value) })} /></label>
            <label>Suggested radius (km)<input type="number" min="0.1" max="25" step="0.1" value={draft.radiusKm ?? ''} onChange={event => setDraft({ ...draft, radiusKm: event.target.value === '' ? null : Number(event.target.value) })} /></label>
          </div>
          <label>Suggested office or landmark<input maxLength={200} value={draft.officeOrLandmark ?? ''} onChange={event => setDraft({ ...draft, officeOrLandmark: event.target.value || null })} /></label>
          <label>Suggested locality<input maxLength={200} value={draft.locality ?? ''} onChange={event => setDraft({ ...draft, locality: event.target.value || null })} /></label>
          <p>Listing and area filters are required for matching. Additional needs below remain unverified. Confirm any suggested location before searching.</p>
        </div>}
        {draft.unverifiedRequirements.length > 0 && <div className="notice">
          <p>These requirements still need verification before you can treat a property as a match.</p>
          <ul>{draft.unverifiedRequirements.map((entry, index) => <li key={index}>{entry}</li>)}</ul>
        </div>}
        {!schema.safeParse(draft).success && <p className="notice" role="alert">Check the suggested numbers. Use 0–20 bedrooms, a positive whole-number price and a radius of 0.1–25 km.</p>}
        <button className="light" type="button" disabled={!schema.safeParse(draft).success} onClick={() => onApply(draft)}>Use these filters</button>
      </>}
    </section>
  );
}
