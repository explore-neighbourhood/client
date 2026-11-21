# Neighborhood Explorer client

Next.js and React. Use Node 22 or 24 and run `npm ci`, `npm run dev`, or `npm run build` from this directory.

Local settings are loaded from `.env.local`. It contains the API origin, public Maps key, map ID and frame allowlist. Copy `.env.example` to `.env.local` for a fresh checkout and populate your own values. Restart the client after changing settings. Vercel uses the environment values configured on its project and requires a redeployment for build-time settings.

## Vercel

1. Import the repository and set **Root Directory** to `apps/client`. Use the Next.js preset, `npm ci` as the install command if overridden, and the default Next.js build.
2. Configure `API_ORIGIN` to the HTTPS API origin, such as `https://api.example.com`. Set it separately for each Vercel environment.
3. For a street basemap, configure `NEXT_PUBLIC_GOOGLE_MAPS_KEY` and `NEXT_PUBLIC_GOOGLE_MAP_ID`. Use a referrer- and API-restricted browser key. The coordinate view and list are available without a Maps key.
4. Leave `EMBED_FRAME_ANCESTORS` empty for standalone deployment. Approved frame origins are set as individual space-separated HTTPS origins when the embed integration is ready.
5. Validate the deployed search rewrite, security headers, and 401/429/503 handling. The app forwards versioned search, locality, and neighborhood requests same-origin to EC2. Server credentials stay on EC2. [Vercel build settings](https://vercel.com/docs/builds/configure-a-build) · [Vercel rewrites](https://vercel.com/docs/routing/rewrites)

## Local browser checks

Start the local API with MongoDB, Redis and the sample catalog, then start this client. The existing browser checks use real inventory search with controlled location-lookup responses and the coordinate fallback, so they do not call paid Google APIs. They cover named-place selection, pagination, map drawing, strict filters, selection, accessibility, empty states and retries on desktop and mobile.

```sh
npx playwright install chromium
npm run test:e2e
```

Set `E2E_BASE_URL` to test a different client URL or `E2E_CHROMIUM_PATH` for an existing Chrome/Chromium.
# client
