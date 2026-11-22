'use client';

import { useEffect, useRef, useState } from 'react';
import { fetchProperties, SearchError, type SearchResult } from './api';

type State = {
  results: SearchResult[];
  cursor: string | null;
  status: 'idle' | 'loading' | 'done' | 'error';
  error?: string;
};

const initial: State = { results: [], cursor: null, status: 'idle' };
const errorMessages: Record<number, string> = {
  400: 'Check your search area and filters. Drawn areas need a simple outline with 3–24 corners.',
  404: 'That verified locality boundary is no longer available.',
  401: 'An authorized standalone catalog is not configured here.',
  429: 'You’ve reached the search limit. Wait a moment before trying again.',
  503: 'Property search is temporarily unavailable. Try again shortly.',
};

export function usePropertySearch() {
  const [state, setState] = useState<State>(initial);
  const active = useRef<AbortController | null>(null);
  const previous = useRef<{ filters: URLSearchParams; cursor: string | null } | null>(null);

  useEffect(() => () => active.current?.abort(), []);

  async function run(filters: URLSearchParams, cursor: string | null) {
    active.current?.abort();
    const request = new AbortController();
    active.current = request;
    previous.current = { filters, cursor };
    setState(current => ({ ...(cursor ? current : initial), status: 'loading', error: undefined }));
    try {
      const result = await fetchProperties(filters, cursor, AbortSignal.any([request.signal, AbortSignal.timeout(10000)]));
      if (request.signal.aborted) return null;
      setState(current => ({
        results: cursor ? [...current.results, ...result.data] : result.data,
        cursor: result.page.nextCursor,
        status: 'done',
      }));
      return result;
    } catch (error) {
      if (request.signal.aborted) return null;
      const message = error instanceof SearchError ? errorMessages[error.status] : undefined;
      setState(current => ({ ...current, status: 'error', error: message ?? 'We couldn’t load properties. Try again.' }));
      return null;
    }
  }

  return {
    state,
    search: (filters: URLSearchParams) => run(filters, null),
    next: () => previous.current && state.cursor ? run(previous.current.filters, state.cursor) : undefined,
    retry: () => previous.current ? run(previous.current.filters, previous.current.cursor) : undefined,
  };
}
