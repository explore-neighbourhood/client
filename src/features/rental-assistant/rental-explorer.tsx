'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { AppearanceControl } from '../appearance/appearance';
import { AgentComparison, RentalDetails } from './rental-details';
import { configurationLabel, conversationRequest, getCatalog, getRentalProperty, rentalRequest, RentalApiError, rupees, type AgentResponse, type Conversation, type ConversationCredentials, type RentalProperty } from './api';

const RentalMap = dynamic(() => import('./rental-map').then(module => module.RentalMap), { ssr: false, loading: () => <div className="rental-map-loading" role="status">Loading property map…</div> });
type Session = { credentials: ConversationCredentials; conversation: Conversation };
export function RentalExplorer({ initialProperty, embedded = false }: { initialProperty?: RentalProperty; embedded?: boolean }) {
  const [session, setSession] = useState<Session | null>(null);
  const sessionRef = useRef<Session | null>(null);
  const [response, setResponse] = useState<AgentResponse | null>(null);
  const [catalog, setCatalog] = useState<RentalProperty[]>(initialProperty ? [initialProperty] : []);
  const [catalogError, setCatalogError] = useState('');
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [truncated, setTruncated] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const catalogBounds = useRef<string | undefined>(undefined);
  const [selected, setSelected] = useState<RentalProperty | null>(initialProperty ?? null);
  const [showDetails, setShowDetails] = useState(!!initialProperty);
  const [chatOpen, setChatOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [pendingMessage, setPendingMessage] = useState('');
  const [error, setError] = useState('');
  const [starting, setStarting] = useState(true);
  const [focusKey, setFocusKey] = useState(0);
  const [focusPoint, setFocusPoint] = useState<{ lat: number; lng: number } | null>(null);
  const lastRequest = useRef<{ text: string; id: string } | null>(null);
  const [retry, setRetry] = useState(0);
  const [catalogRetry, setCatalogRetry] = useState(0);
  const messageEnd = useRef<HTMLDivElement>(null);
  const composer = useRef<HTMLTextAreaElement>(null);
  const actionQueue = useRef<Promise<unknown>>(Promise.resolve());
  const viewportAbort = useRef<AbortController | null>(null);
  const boundsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const storageKey = `neighborhood-rental-v1:${embedded ? initialProperty?.id ?? 'embed' : 'public'}`;
  const updateSession = useCallback((value: Session) => { sessionRef.current = value; setSession(value); }, []);
  const enqueue = useCallback((operation: () => Promise<void>) => {
    const task = actionQueue.current.then(operation);
    actionQueue.current = task.catch(() => undefined);
    return task;
  }, []);
  useEffect(() => {
    const active = new AbortController();
    async function start() {
      setStarting(true); setError('');
      try {
        let credentials: ConversationCredentials | undefined;
        try { const saved = localStorage.getItem(storageKey); if (saved) credentials = z.object({ id: z.uuid(), key: z.string().regex(/^[a-f0-9]{64}$/) }).parse(JSON.parse(saved)); } catch { /* Storage may be unavailable. */ }
        let result: Awaited<ReturnType<typeof conversationRequest>> | undefined;
        if (credentials) {
          try { result = await conversationRequest(`conversations/${credentials.id}`, { signal: active.signal }, credentials); }
          catch (failure) { if (!(failure instanceof RentalApiError && failure.status === 404)) throw failure; credentials = undefined; }
        }
        if (!result) {
          result = await conversationRequest('conversations', { method: 'POST', signal: active.signal });
          credentials = { id: result.data.id, key: result.conversationKey! };
        }
        if (active.signal.aborted) return;
        updateSession({ credentials: credentials!, conversation: result.data });
        try { localStorage.setItem(storageKey, JSON.stringify(credentials)); } catch { /* In-memory session still works. */ }
        if (result.response) { setResponse(result.response); setFocusKey(value => value + 1); }
        const selectedId = result.data.selectedPropertyId ?? initialProperty?.id;
        if (selectedId) {
          const property = initialProperty?.id === selectedId ? initialProperty : await getRentalProperty(selectedId, active.signal).catch(() => null);
          if (!active.signal.aborted) { setSelected(property); setShowDetails(!!property); }
        }
      } catch (failure) { if (!active.signal.aborted) setError(failure instanceof Error ? failure.message : 'The conversation could not be opened.'); }
      finally { if (!active.signal.aborted) setStarting(false); }
    }
    void start();
    return () => { active.abort(); };
  }, [storageKey, initialProperty, retry, updateSession]);
  useEffect(() => {
    const active = new AbortController();
    setCatalogLoading(true); setCatalogError('');
    getCatalog(active.signal).then(result => { setCatalog(result.data); setTruncated(result.truncated); setNextCursor(result.nextCursor); catalogBounds.current = undefined; }).catch(() => { if (!active.signal.aborted) setCatalogError('The property catalog could not load. Please retry.'); }).finally(() => { if (!active.signal.aborted) setCatalogLoading(false); });
    return () => active.abort();
  }, [catalogRetry]);
  useEffect(() => () => { viewportAbort.current?.abort(); if (boundsTimer.current) clearTimeout(boundsTimer.current); }, []);
  useEffect(() => { messageEnd.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' }); }, [session?.conversation.messages.length, pendingMessage, response]);
  const onBounds = useCallback((bounds: string) => {
    if (boundsTimer.current) clearTimeout(boundsTimer.current);
    boundsTimer.current = setTimeout(() => {
      viewportAbort.current?.abort(); const active = new AbortController(); viewportAbort.current = active;
      getCatalog(active.signal, bounds).then(result => { if (!active.signal.aborted) { setCatalog(result.data); setTruncated(result.truncated); setNextCursor(result.nextCursor); catalogBounds.current = bounds; setCatalogError(''); } })
        .catch(() => { if (!active.signal.aborted) setCatalogError('Map listings could not refresh. Showing the last loaded catalog.'); });
    }, 500);
  }, []);
  const allProperties = [...new Map([...catalog, ...(response?.candidates.map(row => row.property) ?? []), ...(selected ? [selected] : [])].map(row => [row.id, row])).values()];
  async function loadMore() {
    if (!nextCursor || catalogLoading) return;
    setCatalogLoading(true);
    try {
      const bounds = catalogBounds.current;
      const result = await getCatalog(AbortSignal.timeout(7000), bounds, nextCursor);
      if (bounds === catalogBounds.current) { setCatalog(current => [...new Map([...current, ...result.data].map(row => [row.id, row])).values()]); setNextCursor(result.nextCursor); setTruncated(result.truncated); }
    } catch { setCatalogError('More listings could not load. Please retry.'); }
    finally { setCatalogLoading(false); }
  }
  function persistSelection(property: RentalProperty | null, pin = false) {
    setError('');
    if (property) setSelected(property);
    void enqueue(async () => {
      const current = sessionRef.current;
      if (!current) return;
      const pinnedPropertyIds = pin && property ? [...new Set([...current.conversation.pinnedPropertyIds, property.id])].slice(-3) : current.conversation.pinnedPropertyIds;
      const result = await conversationRequest(`conversations/${current.credentials.id}/selection`, { method: 'PATCH', body: JSON.stringify({ expectedRevision: current.conversation.revision, selectedPropertyId: property?.id ?? null, pinnedPropertyIds }) }, current.credentials);
      updateSession({ ...current, conversation: result.data });
    }).catch(failure => setError(failure instanceof Error ? failure.message : 'The selected property could not be attached.'));
  }
  function choose(id: string) {
    const property = allProperties.find(row => row.id === id); if (!property) return;
    setSelected(property); setShowDetails(true); setChatOpen(false); setListOpen(false); persistSelection(property);
    void getRentalProperty(id, AbortSignal.timeout(7000)).then(fresh => setSelected(current => current?.id === id ? fresh : current)).catch(() => undefined);
  }
  function pin() {
    if (!selected) return;
    persistSelection(selected, true); setChatOpen(true);
    composer.current?.focus();
  }
  async function send(text = input, officePlaceId?: string) {
    if (!text.trim() || sending || !sessionRef.current) return;
    setSending(true); setPendingMessage(text); setError(''); setChatOpen(true);
    try {
      await enqueue(async () => {
        const current = sessionRef.current!;
        const requestId = lastRequest.current?.text === text ? lastRequest.current.id : crypto.randomUUID();
        lastRequest.current = { text, id: requestId };
        const result = await conversationRequest(`conversations/${current.credentials.id}/messages`, {
          method: 'POST', body: JSON.stringify({ message: text, expectedRevision: current.conversation.revision, requestId, officePlaceId,
            selectedPropertyId: selected?.id ?? null, pinnedPropertyIds: current.conversation.pinnedPropertyIds }),
          signal: AbortSignal.timeout(35000),
        }, current.credentials);
        updateSession({ ...current, conversation: result.data });
        if (result.response) { setResponse(result.response); setFocusKey(value => value + 1); }
        if (result.response?.locationChoices?.length === 1) setFocusPoint(result.response.locationChoices[0]!.location);
        lastRequest.current = null;
        setInput('');
      });
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Your message could not be sent. Please retry.');
      if (failure instanceof RentalApiError && failure.status === 409) {
        const current = sessionRef.current;
        if (current) { const result = await conversationRequest(`conversations/${current.credentials.id}`, {}, current.credentials).catch(() => null); if (result) updateSession({ ...current, conversation: result.data }); }
      }
    } finally { setSending(false); setPendingMessage(''); }
  }
  async function startNew() {
    if (sending) return;
    const current = sessionRef.current;
    try {
      if (current) await rentalRequest(`conversations/${current.credentials.id}`, z.unknown(), { method: 'DELETE' }, current.credentials);
      try { localStorage.removeItem(storageKey); } catch { /* Storage may be unavailable. */ }
      setSession(null); sessionRef.current = null; setResponse(null); setSelected(null); setShowDetails(false); setInput(''); setRetry(value => value + 1);
    } catch (failure) { setError(failure instanceof Error ? failure.message : 'Could not clear this conversation.'); }
  }
  const needs = session?.conversation.requirements;
  const chips = needs ? [needs.configuration, ...needs.locations, needs.budgetMax !== null ? `Up to ${rupees(needs.budgetMax)}/mo` : null, needs.furnishing?.toLowerCase().replaceAll('_', ' '), needs.moveInDate ? `Move in ${needs.moveInDate}` : null, ...needs.amenities.map(value => value.replaceAll('_', ' ').toLowerCase()), needs.officeLocation ? `Office: ${needs.officeLocation}` : null,
    needs.depositMax !== null ? `Deposit ≤ ${rupees(needs.depositMax)}` : null, needs.occupants ? `${needs.occupants} occupants` : null, needs.pets ? 'Pets allowed' : null, needs.commuteMaxMinutes ? `Commute ≤ ${needs.commuteMaxMinutes} min` : null,
  ].filter(Boolean) : [];
  const highlights = response?.mapAction.highlightPropertyIds ?? [];
  return <main className={`rental-app ${showDetails && selected ? 'has-details' : ''} ${chatOpen ? 'chat-open' : ''} ${listOpen ? 'list-open' : ''}`}>
    <header className="rental-header"><a className="rental-brand" href="/"><span className="rental-brand-symbol" aria-hidden="true">N</span><span>Neighborhood<span className="rental-brand-caption">Find a place that fits your life</span></span></a>
      <span className="rental-header-label">AI rental assistant</span><AppearanceControl />
    </header>
    <div className="rental-workspace">
      {showDetails && selected && <RentalDetails property={selected} shortlisted={session?.conversation.shortlistedPropertyIds.includes(selected.id) ?? false}
        onClose={() => setShowDetails(false)} onPin={pin} onAsk={question => { persistSelection(selected, true); void send(question); }} />}
      <section className="rental-map-section" aria-label="Rental property exploration">
        <RentalMap properties={allProperties} selectedId={selected?.id ?? null} response={response} focusKey={focusKey} focusPoint={focusPoint} onSelect={choose} onBounds={onBounds} />
        <div className="rental-map-top"><div><strong>{needs?.locations.length ? needs.locations.join(' + ') : 'Explore rental listings'}</strong><span>{catalogLoading ? 'Loading catalog…' : `${catalog.length}${truncated ? '+' : ''} catalog listings · ${catalog.filter(property => property.location).length} on map`}</span></div>
          <button className="light" aria-expanded={listOpen} onClick={() => { setListOpen(value => !value); setChatOpen(false); }}>Browse listings</button></div>
        {catalog.some(property => !property.location) && <div className="rental-unmapped-note" role="status">{catalog.filter(property => !property.location).length} historical listings need map coordinates. Browse or chat to review their supplied facts.</div>}
        <div className="rental-map-legend"><span><i className="legend-match" />Matching</span><span><i className="legend-other" />Other listing</span><span><i className="legend-selected" />Selected</span></div>
        {response && <p className="rental-area-disclosure">{response.mapAction.areaDisclosure}{response.mapAction.boundary ? ` · ${response.mapAction.boundary.source}` : ''}</p>}
        {catalogError && <div className="rental-catalog-error" role="alert">{catalogError}<button className="light" onClick={() => setCatalogRetry(value => value + 1)}>Retry catalog</button></div>}
        {listOpen && <section className="rental-catalog" aria-label="Available catalog listings"><div className="rental-panel-heading"><h2>Catalog listings</h2><button className="light" onClick={() => setListOpen(false)}>Close list</button></div>
          {!catalogLoading && !catalog.length && <p>No available rentals in this map view.</p>}
          {catalog.map(property => <button key={property.id} className={`rental-listing ${selected?.id === property.id ? 'selected' : ''}`} onClick={() => choose(property.id)}>
            <span><strong>{configurationLabel(property)}</strong> · {rupees(property.priceInr)}/mo</span><span>{property.title}</span><small>{property.source.synthetic ? 'Sample listing · not a rental offer' : highlights.includes(property.id) ? 'Verified match' : 'Check availability in details'}{!property.location ? ' · coordinates unavailable' : ''}</small></button>)}
          {nextCursor && <button className="light" disabled={catalogLoading} onClick={() => void loadMore()}>{catalogLoading ? 'Loading listings…' : 'Load more listings'}</button>}
        </section>}
        <button className="rental-mobile-chat" onClick={() => { setChatOpen(true); setListOpen(false); }} aria-expanded={chatOpen}>Ask your rental assistant{chips.length ? ` · ${chips.length} requirements` : ''}</button>
      </section>
      <aside className="rental-chat" aria-label="AI rental assistant">
        <div className="rental-chat-heading"><div><span className="rental-eyebrow">YOUR HOME SEARCH</span><h1>Let’s find your next home.</h1></div><button className="light rental-chat-close" onClick={() => setChatOpen(false)}>Close chat</button></div>
        <div className="rental-chat-toolbar"><p>Tell me what matters. I’ll check the catalog.</p><button className="rental-text-button" disabled={sending || starting} onClick={() => void startNew()}>New search</button></div>
        {!!chips.length && <div className="rental-requirements" aria-label="Confirmed requirements">{chips.map((chip, index) => <span key={`${chip}-${index}`}>{chip}</span>)}
          {!!needs?.preferences.length && <p>Preferences: {needs.preferences.map(value => value.replaceAll('_', ' ').toLowerCase()).join(', ')}</p>}</div>}
        <div className="rental-chat-history" aria-live="polite" aria-busy={sending || starting}>
          {starting && <p role="status">Opening your conversation…</p>}
          {!starting && !session?.conversation.messages.length && <div className="rental-welcome"><span className="rental-assistant-icon" aria-hidden="true">N</span><h2>A home search, in your own words.</h2><p>Share your preferred area, budget and the kind of home you want. Add your office to check a real commute.</p>
            <button className="rental-suggestion" disabled={!session || sending} onClick={() => void send('I need a 1BHK in Bellandur under ₹25k. My office is in HSR Layout.')}>1BHK in Bellandur, under ₹25k</button>
            <button className="rental-suggestion" disabled={!session || sending} onClick={() => void send('Find a 2BHK near Manyata Tech Park under ₹35,000.')}>A 2BHK near Manyata Tech Park</button>
            <p className="rental-quiet">You can also browse the map and select a listing to ask about it.</p></div>}
          {session?.conversation.messages.map(message => <div className={`rental-message ${message.role}`} key={message.id}><span className="rental-message-role">{message.role === 'user' ? 'You' : 'Rental assistant'}</span><p>{message.content}</p></div>)}
          {pendingMessage && <><div className="rental-message user"><span className="rental-message-role">You</span><p>{pendingMessage}</p></div><p role="status" className="rental-checking">Checking your requirements and current inventory…</p></>}
          {response && !sending && <div className="rental-recommendations" aria-label="Property recommendations">
            {!!response.candidates.length && <h2>{highlights.length ? 'Your matches & alternatives' : 'Alternatives to review'}</h2>}
            {response.candidates.map(candidate => <article className="rental-candidate" key={candidate.property.id}>
              <span className={`rental-match-tag ${candidate.matchType.toLowerCase()}`}>{candidate.matchType === 'BEST_MATCH' ? 'Best match' : candidate.matchType === 'GOOD_MATCH' ? 'Good match' : 'Alternative'}</span>
              <button className="rental-candidate-title" onClick={() => choose(candidate.property.id)}>{candidate.property.title}</button>
              <p><strong>{rupees(candidate.property.priceInr)}/mo</strong> · {configurationLabel(candidate.property)}</p>
              <p className="rental-candidate-reason">{candidate.explanation}</p>
              {response.explanations?.find(row => row.propertyId === candidate.property.id) && <p className="rental-candidate-reason">{response.explanations.find(row => row.propertyId === candidate.property.id)!.text}</p>}
            </article>)}
            {response.truncated && <p className="rental-quiet">Ranking covers the first 250 catalog candidates. Narrow the area for a more complete search.</p>}
            {!!response.comparison?.length && <AgentComparison properties={response.comparison} onSelect={id => { const property = response.comparison!.find(row => row.id === id)!; setSelected(property); setShowDetails(true); setChatOpen(false); persistSelection(property); }} />}
            {response.commute?.status === 'NEEDS_DESTINATION' && <div><p>Choose your office destination:</p>{response.commute.choices?.map(choice => <button key={choice.id} className="rental-suggestion" onClick={() => void send('Calculate the commute from this property to my office.', choice.id)}>{choice.name}</button>)}</div>}
            {(response.locationChoices?.length ?? 0) > 1 && <div className="rental-location-choices"><p>Choose the location to focus on the map:</p>{response.locationChoices!.map(choice => <button className="rental-suggestion" key={choice.id} onClick={() => { setFocusPoint(choice.location); setChatOpen(false); }}>{choice.name}</button>)}<small>Google Maps</small></div>}
            {response.aiUsed === false && <p className="rental-quiet">{response.modelAvailable ? 'Gemini is temporarily unavailable.' : 'Gemini is not configured.'} Basic requirement matching is active.</p>}
          </div>}
          <div ref={messageEnd} />
        </div>
        {selected && <div className="rental-chat-reference"><span>{session?.conversation.pinnedPropertyIds.includes(selected.id) ? 'Pinned' : 'Selected'}: <button className="rental-text-button" onClick={() => { setShowDetails(true); setChatOpen(false); }}>{selected.title}</button></span>
          <small>ID {selected.id.slice(-6)} · {session?.conversation.pinnedPropertyIds.length ?? 0} pinned</small></div>}
        {!!session?.conversation.pinnedPropertyIds.length && <div className="rental-pinned-actions"><button className="rental-text-button" disabled={sending} onClick={() => void send('Compare my pinned properties')}>Compare pinned properties</button>
          <button className="rental-text-button" onClick={() => { const current = sessionRef.current; if (!current) return; void enqueue(async () => { const fresh = sessionRef.current!; const result = await conversationRequest(`conversations/${fresh.credentials.id}/selection`, { method: 'PATCH', body: JSON.stringify({ expectedRevision: fresh.conversation.revision, selectedPropertyId: selected?.id ?? null, pinnedPropertyIds: [] }) }, fresh.credentials); updateSession({ ...fresh, conversation: result.data }); }).catch(failure => setError(failure.message)); }}>Clear pins</button></div>}
        {error && <div className="rental-error" role="alert">{error}{!session && <button className="light" onClick={() => setRetry(value => value + 1)}>Retry conversation</button>}</div>}
        <form className="rental-composer" onSubmit={event => { event.preventDefault(); void send(); }}><label className="sr-only" htmlFor="rental-message">Message your rental assistant</label>
          <textarea id="rental-message" ref={composer} value={input} onChange={event => setInput(event.target.value)} placeholder="A 1BHK near my office, under ₹25k…" rows={2} maxLength={2000}
            onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void send(); } }} />
          <div><span>Search real inventory. Confirm before you visit.</span><button disabled={sending || starting || !session || !input.trim()} type="submit">{sending ? 'Checking…' : 'Send'}</button></div>
        </form>
      </aside>
    </div>
  </main>;
}
