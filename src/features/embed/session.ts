let token: string | undefined;
let onUnauthorized: (() => void) | undefined;
let renewalRequested = false;

// The module is used by browser-only request handlers. Tokens live for this frame session.
export function setEmbedToken(value?: string, renew?: () => void) {
  token = value;
  onUnauthorized = renew;
  renewalRequested = false;
}

export async function apiFetch(path: string, init: RequestInit = {}) {
  if (!path.startsWith('/api/v1/')) throw new Error('Expected a local API path');
  const session = token;
  const headers = new Headers(init.headers);
  if (session) headers.set('Authorization', `Bearer ${session}`);
  const response = await fetch(path, { ...init, headers, cache: 'no-store', credentials: 'omit' });
  if (response.status === 401 && session && session === token && !renewalRequested) {
    renewalRequested = true;
    onUnauthorized?.();
  }
  return response;
}
