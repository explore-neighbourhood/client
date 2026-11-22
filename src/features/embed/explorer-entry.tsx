'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { RentalExplorer } from '../rental-assistant/rental-explorer';
import { fetchProperty, type SearchResult } from '../property-search/api';
import { setEmbedToken } from './session';

const bootstrap = z.strictObject({
  type: z.literal('neighborhood:init'),
  token: z.string().min(1).max(4096),
  propertyId: z.string().regex(/^[a-f0-9]{24}$/),
});
type State =
  | { status: 'loading' | 'error'; message: string }
  | { status: 'standalone' }
  | { status: 'ready'; property: SearchResult };

export function ExplorerEntry() {
  const [state, setState] = useState<State>({ status: 'loading', message: 'Opening Neighborhood Explorer…' });
  useEffect(() => {
    const embedded = window.parent !== window;
    if (!embedded) { setEmbedToken(); setState({ status: 'standalone' }); return; }
    const allowed = (process.env.NEXT_PUBLIC_EMBED_ORIGINS ?? '').split(' ').filter(Boolean);
    let request: AbortController | undefined;
    let currentProperty: SearchResult | undefined;
    setState({ status: 'loading', message: 'Waiting for this property’s authorized portal context…' });

    async function receive(event: MessageEvent) {
      if (event.source !== window.parent || !allowed.includes(event.origin)) return;
      const data = bootstrap.safeParse(event.data);
      if (!data.success) return;
      request?.abort();
      const active = new AbortController();
      request = active;
      setEmbedToken(data.data.token, () => window.parent.postMessage({ type: 'neighborhood:session-required' }, event.origin));
      if (currentProperty?.id !== data.data.propertyId) {
        setState({ status: 'loading', message: 'Opening the selected property…' });
      }
      try {
        const property = await fetchProperty(data.data.propertyId, AbortSignal.any([active.signal, AbortSignal.timeout(7000)]));
        if (!active.signal.aborted) {
          currentProperty = property;
          setState({ status: 'ready', property });
          window.parent.postMessage({ type: 'neighborhood:context-ready' }, event.origin);
        }
      } catch {
        if (!active.signal.aborted) {
          setState({ status: 'error', message: 'This property context is unavailable or expired. Reopen the explorer from the portal.' });
        }
      }
    }
    window.addEventListener('message', receive);
    for (const origin of allowed) window.parent.postMessage({ type: 'neighborhood:ready' }, origin);
    return () => { window.removeEventListener('message', receive); request?.abort(); setEmbedToken(); };
  }, []);

  if (state.status === 'standalone') return <RentalExplorer />;
  if (state.status === 'ready') return <RentalExplorer key={state.property.id} initialProperty={state.property} embedded />;
  return <main className="embed-status" role={state.status === 'error' ? 'alert' : 'status'}>{state.message}</main>;
}
