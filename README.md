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


## Google 3D person

Open Explore Neighborhood and choose 3D Person. Select a nearby destination and route to enable Walk route. The original GLB person follows the returned geometry with a terrain-aware camera. Map View and Street View retain the paused person progress. Without a route, tap a map point to place the person.

Enable the Elevation API on the referrer-restricted browser key used by `NEXT_PUBLIC_GOOGLE_MAPS_KEY`. The camera uses elevation samples for the selected route. Initial preparation times out with retry and map/Street View recovery. Detailed 3D street coverage depends on Google's local data. The Bellandur check displayed satellite imagery on terrain.

The original model is generated locally with `node scripts/generate-pedestrian.mjs`. Its source and GLB are owned application assets. The current person moves in a standing pose. Vehicle models, animated gait and the remaining F20 criteria are tracked in `../../docs/p0-delivery.md`.


## Map display and theme

Use Map view to choose Default (Roadmap), Satellite, Terrain or 3D / Globe. Show globe zooms out from the prepared 3D scene. Reset view restores the search or route context. The 3D renderer requires the browser Maps key and Elevation API configuration described above, with a Default-view recovery action for unavailable 3D rendering.

Theme defaults to System and offers Light and Dark for the current visit. Roadmap and Terrain follow the selected map color scheme. Satellite and hybrid 3D imagery retain their captured colors. Cloud styling and detailed local building geometry depend on the configured Maps project and Google's coverage.


## Start-to-destination workspace

Find a home keeps the existing inventory, locality, radius, drawing, manual/AI filters and comparison flows. Search settings collapse after matching homes arrive. Plan a journey accepts confirmed start and destination place results or explicit map points. Preview route requests a tenant-budgeted route through the Node API. View journey opens a prepared 3D person scene with play/pause, restart, seeking and 1×/2×/4×/8×/16× illustrative speed. The initial playback setting is 4×. Street View and map remain available.

The client requests `application/x-ndjson` from `POST /api/v1/journeys/route`. It consumes validated preparation and route records. Google loads the scene through its browser library. The server's Gemini integration handles natural-language search interpretation, while deterministic location selection and routing remain usable independently.

The demo catalog contains explicitly fictional Bellandur and HSR homes. Production portal inventory needs an authorized feed. The illustration below is generated and shared by sample cards. Source names and prices in the demo describe application-owned fixtures.

### Illustrative asset provenance

`public/images/illustrative-apartment.png` was generated with the built-in image generator for the current project. Next Image serves responsive versions. The generation prompt was the following.

> Create an original photorealistic architectural editorial photograph for a clearly fictional apartment listing in a Bengaluru neighborhood exploration web application. A tasteful contemporary mid-rise apartment building in Bengaluru, warm ivory facade, terracotta accents, deep balconies, lush tropical trees and native landscaping, viewed from the street in gentle morning sunshine. Premium yet believable middle-market Indian residential architecture, 5 to 7 floors, no people prominent, no text, no logos, no signs, no portal branding, no collages. Wide landscape composition, clean realistic materials, natural colors, beautiful restrained photography. This is an illustrative fictional property photograph, not a specific existing listing.
# client
