import type { NextConfig } from 'next';

function parseOrigin(value: string, allowLocal = false) {
  const url = new URL(value);
  const local = allowLocal && url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  if ((!local && url.protocol !== 'https:') || url.origin !== value || url.hostname.includes('*')) {
    throw new Error('Expected an HTTPS origin without a path, query, credentials, or wildcard.');
  }
  return url.origin;
}

const apiOrigin = parseOrigin(
  process.env.API_ORIGIN ?? (process.env.VERCEL ? '' : 'http://127.0.0.1:4000'),
  !process.env.VERCEL,
);
const origins = (process.env.EMBED_FRAME_ANCESTORS ?? '').trim().split(/\s+/).filter(Boolean).map(value => parseOrigin(value, !process.env.VERCEL));

const config: NextConfig = {
  poweredByHeader: false,
  env: { NEXT_PUBLIC_EMBED_ORIGINS: origins.join(' ') },
  async rewrites() {
    return [
      { source: '/api/v1/rental/:path*', destination: `${apiOrigin}/api/v1/rental/:path*` },
      { source: '/api/v1/search/interpret', destination: `${apiOrigin}/api/v1/search/interpret` },
      { source: '/api/v1/journeys/route', destination: `${apiOrigin}/api/v1/journeys/route` },
      { source: '/api/v1/journeys/assistant', destination: `${apiOrigin}/api/v1/journeys/assistant` },
      { source: '/api/v1/locations/nearby', destination: `${apiOrigin}/api/v1/locations/nearby` },
      { source: '/api/v1/locations/route', destination: `${apiOrigin}/api/v1/locations/route` },
      { source: '/api/v1/locations/search', destination: `${apiOrigin}/api/v1/locations/search` },
      { source: '/api/v1/localities', destination: `${apiOrigin}/api/v1/localities` },
      { source: '/api/v1/properties/search', destination: `${apiOrigin}/api/v1/properties/search` },
      { source: '/api/v1/properties/:id', destination: `${apiOrigin}/api/v1/properties/:id` },
      { source: '/api/v1/properties/:id/nearby', destination: `${apiOrigin}/api/v1/properties/:id/nearby` },
      { source: '/api/v1/properties/:id/route', destination: `${apiOrigin}/api/v1/properties/:id/route` },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: `frame-ancestors ${origins.join(' ') || "'none'"}` },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        source: '/api/v1/properties/:path*',
        headers: [{ key: 'Cache-Control', value: 'private, no-store' }],
      },
    ];
  },
};

export default config;
