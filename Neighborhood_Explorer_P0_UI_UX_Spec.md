# Neighborhood Explorer — P0 UI/UX Specification & Agent Handoff

**Status:** P0 experience baseline / design concept  
**Product:** Neighborhood Explorer, a standalone experience and embeddable B2B SaaS module  
**Audience:** AI development agent, product designer, frontend engineer, backend engineer, QA  
**Authentication:** **Do not build buyer login, registration, OTP, password reset, user profile, or account screens in P0.** Visitors can explore immediately. Tenant-to-platform authorization remains necessary behind the scenes for SaaS partners.  
**Source of truth:** Read this together with [P0 PRD](NEIGHBORHOOD_EXPLORER_PRD_P0.md), [engineering standards](../../docs/engineering-standards.md) and [Immersive 3D Journey Engine](../../docs/immersive-journey-playback-spec.md).

## 1. The job to be done

A user must be able to say: **"My office is in Bellandur. Find 1 BHK flats under ₹25,000; show hospitals, emergency centers, the nearest reachable bus stop, and how I would travel from each home."**

The experience must let that user: (a) find homes in an accurately bounded area, (b) expand or draw the search area without losing context, (c) select a home, (d) inspect nearby essentials, (e) choose a destination, (f) see an actual route and estimated travel time by walking, bike, car, or supported transit, (g) open Street View viewpoints along that route when coverage exists, and (h) compare candidate homes by the lifestyle needs they selected.

**Do not build a generic chatbot, a simple listings feed, or a Street View-only demo. The destination journey is the differentiator.**

## 2. Design direction

- **Map-first, clean, calm and trustworthy.** The map should remain the dominant surface, with contextual panels rather than many separate pages.
- **Low cognitive load:** Give users one obvious next action on each step. Use progressive disclosure.
- **Visual hierarchy:** Search and geography → selected property → essentials → route → virtual street journey → comparison.
- **Color system:** Deep slate text `#172B3C`, teal primary `#087E79`, pale mint focus backgrounds `#E6F7F3`, neutral panels `#FFFFFF`, subtle borders `#DDE6ED`, warm orange sparingly for warnings.
- **Type:** Legible system/Inter-like sans serif. Primary body at least 14px for the real application; the HTML concept uses compact demo-scale text to fit a three-panel screenshot, so implement accessible real-world sizes.
- **Branding:** Product brand in standalone mode; partner name, colors and logo in embedded mode. Do not couple product logic to branding.
- **Trust:** Show source/last-updated information where available; distinguish straight-line radius, routed distance, traffic-sensitive estimates, and unknown data.

## 3. Primary desktop layout (1440px and wider)

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Logo / partner brand    Neighborhood Explorer           [Map/List] [Help]   │
├──────────────────┬─────────────────────────────┬─────────────────────────────┤
│ SEARCH PANEL     │  LIVE MAP                   │ HOME + NEIGHBORHOOD PANEL   │
│ ~320px           │  flexible width             │ ~360px                      │
│                  │                             │                             │
│ AI search        │  Highlight selected         │ Property title & location   │
│ Editable filters │  locality/radius/polygon    │ [Essentials][Routes]        │
│ Locality/Office/ │                             │ [Street View][Compare]      │
│ Draw area        │  Property markers           │                             │
│ Radius/commute   │  Amenity markers            │ Hospital / Bus / School...  │
│ Budget/BHK       │  Route path                 │ Destination detail         │
│ Property results │  Street View position       │ Travel mode & ETA          │
│                  │                             │ Street route CTA            │
└──────────────────┴─────────────────────────────┴─────────────────────────────┘
```

**Important:** Do not permanently occupy the map with a large chat box. AI search is a compact, collapsible prompt area, with editable extracted filter chips.

## 4. P0 UI components (must build)

### 4.1 Global application shell
- Standalone: brand header, optional "How this works", no login buttons.
- Partner property listing: embed is opened from **Explore Neighborhood** CTA on the listing page (modal, side panel, or dedicated responsive tab); initialized with `tenant`, `propertyId`, and approved partner context. It should not display irrelevant public-search controls by default when a property is already selected.
- Same functional engine for both surfaces; embed uses partner inventory and theme.
- No compulsory sign-in to search, compare temporarily, or explore a route. Session-local state can be anonymous.

### 4.2 AI search bar
- Input supports locality, office, landmark, budget, BHK, commute time, nearby essentials, and travel-mode preferences.
- On submit, show **editable interpretation chips**, e.g. `1 BHK`, `≤ ₹25,000`, `Office: Bellandur`, `5 km radius`, `Hospital ≤ 10 min by bike`.
- Clarify ambiguous locations rather than silently picking one. Ask only when necessary.
- State what is a hard constraint vs soft preference.
- "Change search" editing must not reset unrelated filters.
- AI is optional: manual filters remain fully usable if AI is slow or unavailable.

### 4.3 Search-area selector
Offer **three independent entry methods**:
1. **Locality:** choose known locality; highlight **validated locality polygon** and default to strict inside-only results. Nearby areas require explicit opt-in.
2. **Near Office/Landmark:** place a pin; adjust geographic radius (initial 1/3/5/10 km presets plus controlled slider). Show result count change, and optionally swap **distance** to **max commute time**.
3. **Draw Area:** draw/edit a polygon. Make edit/clear actions obvious. Explain whether drawn area replaces or intersects a selected locality.

The **property search geography**, **nearby-facility radius**, and **maximum travel time** are different filters; never use one slider for all three.

### 4.4 Property map + cards
- Map and list share one canonical search state; changing either updates both.
- Property markers display price or small label; selecting a property highlights its card and pin.
- Hover/focus must not trigger new billable requests automatically.
- Different marker styling for homes, hospitals, emergency centers, schools, parks, bus stops and metro stops.
- The map displays a visible circle/polygon/locality boundary, plus a legible legend and reset-view action.
- Property cards show price, BHK, locality, approximate/verified location indicator, key distance/commute summary, listing source, and selected state.
- If no match: clear 0-results message, editable filters, and explicit "Expand area" action. Never auto-expand strict locality.

### 4.5 Selected home panel
- Header: selected property, location, disclosure if coordinates are approximate.
- Tabs: **Essentials | Routes | Street View | Compare**.
- Always show a nearby category grid that includes: Hospitals, **Emergency care**, Pharmacies, Schools, Parks/Playgrounds, Supermarkets, Bus stops, Metro/Transit; additional categories may expand.
- Facility radius: 500 m / 1 km / 3 km / 5 km / 10 km, kept separate from property search radius.
- Facility list: name, facility type, short evidence-based metadata, available distance, and clear **Show Route** action.
- A nearby "hospital" must not be promoted as "24/7 emergency" unless verified.

### 4.6 Route inspector (P0 hero workflow)
- Selecting a destination should show **Home → Destination** clearly in the right panel.
- Draw route polyline on the map. Present routed distance, estimated duration, mode, and optional alternate route if actually provided.
- Modes: walking, motorized two-wheeler, car, and public transit where provider coverage is available. Disable unsupported modes with explanation, not fabricated routes.
- Bus access: show a **walking path to a reachable stop** before onward public transit details. "Nearest" must specify whether geographical or walkable route distance is being used.
- Option to view turn guidance/directions. In a demo, indicate the difference between illustrative and live navigation.
- Keep property origin, destination and selected travel mode visible as users switch tabs.

### 4.7 Street View experience
- Entry from property or an existing route. Support selecting 100m/200m/500m/1km viewing goal or destination-based exploration.
- Desktop: use a focused split-screen or large viewer overlay with route map inset, progress and controls; mobile: map ↔ panorama toggle.
- Look around, manually navigate, pause/start route-guided progression where connected panoramas permit.
- Show which route segments have panorama coverage. Gracefully fall back to map when imagery has gaps.
- Clear disclosure: historical Street View panoramas, **not live video**. Do not invent high-fidelity vehicle animations that imply current road conditions.
- Do not build AI analysis or long-term storage from Google Street View imagery without applicable rights.

### 4.8 AI neighborhood insights (P0)
- Brief insight card: 2–4 sentences, **with reasons**, reflecting the user's chosen priorities.
- Labels for verified, estimated, missing and unknown information.
- E.g. "This home has a sample bus stop reachable by foot, but the hospital route is longer than for Home B." Never assert nonexistent facilities, "safe roads", verified emergency service or accurate scores from model guesses.
- Insights update when selected home, route, area, or preference changes; show skeleton while updating.

### 4.9 Property comparison (P0)
- Let users select 2–3 homes without login; preserve the selected shortlist within the current visit.
- Compare rent, actual routed office commute, walking time to the chosen bus stop, hospital/emergency access where validated, selected facility access, and preference fit.
- Comparisons must distinguish "not available" from "worse". Display the underlying evidence and allow a map jump to each property.
- Include partner CTA to original listing or request a visit, but do not fabricate leads or integrate paid transactions in P0.

## 5. Recommended screen-by-screen journeys

| Screen/state | Primary action | What changes visually |
|---|---|---|
| A. Search landing | Enter natural-language need or select office/locality | Map focuses chosen center and search chips appear |
| B. Results map | Expand radius / draw or adjust area | Boundary and property pins update in sync |
| C. Property selected | Click card/pin | Right panel becomes neighborhood explorer |
| D. Nearby essentials | Select Hospitals / Bus stops / Parks | Facility pins/list update using independent radius |
| E. Route to facility | Click Show Route | Route appears, along with mode and estimated time |
| F. Street experience | Click Explore Streets | Panorama viewer where coverage exists; map progress persists |
| G. Compare homes | Select compare for 2–3 properties | Side-by-side lifestyle metrics and evidence |

**Top demonstration scenario:** Search around Bellandur office → grow 3 km to 5 km → choose an HSR property → select hospital → car route → switch to bus stop → walking route → inspect street views along selected path → compare two homes.

## 6. Responsive behavior

- **Desktop ≥ 1280px:** Three-pane layout: left search 300–340px, central map takes remaining space, right explorer 340–390px.
- **Tablet 768–1279px:** Search pane narrower and the right explorer becomes a collapsible overlay drawer. Map remains visible.
- **Mobile < 768px:** Full-screen map with compact search overlay near top; property/essential/route content in a draggable bottom sheet; large touch targets; route and Street View viewer get as much room as possible. Do not shrink three desktop panels side-by-side.
- **Embedded SaaS:** Responsive to *container* width rather than only viewport width. Can be launched as an inline module, modal or full-screen flow. Must not break host styles or steal global keyboard controls.

## 7. States that the agent MUST design

1. First visit / no office or locality selected.
2. AI interpreting a query, AI unavailable and manual fallback.
3. Ambiguous location / failed geocode.
4. Searching properties / results loaded / no results / partial inventory coverage.
5. Strict locality selected vs include-nearby opt-in.
6. Facility loading / no facilities in radius / place provider timeout.
7. Route loading / mode unavailable / transit timetable unavailable / route not found.
8. Street View unavailable at start / gaps partway through route.
9. Approximate property coordinates and unknown entrance.
10. Hospital listed but emergency-service status unverified.
11. Tenant quota / Google provider quota exhausted with graceful degradation.
12. Very narrow embedded widget and low-end phone network.

Never mask an error by showing realistic-looking fake route numbers.

## 8. Partner SaaS integration UX: no buyer auth, but secure tenancy

A partner listing might show a prominent button: **Explore this neighborhood** below the property's location or neighborhood section. On click, open the explorer with the property already selected; users should jump straight to essentials and a sample journey. A partner search-results page can embed the wider AI search and area controls.

No buyer login in P0 does **not** mean no security. Require authorized partner origin/credential exchange or server-issued short-lived embed context as appropriate, enforce tenant isolation server-side, isolate partner configuration and data, protect quotas and abuse. Do not use an unrestricted public API key to retrieve every tenant's inventory. The visitor's UI remains anonymous.

Keep provider-dependent fields configurable and never assume a signed-in consumer identity. Visitor analytics should respect consent and privacy, use minimal identifiers, and offer partner conversion callbacks without leaking personal details.

## 9. Accessibility, performance and interaction quality

- All forms labelled; keyboard-operable filters/tabs, clear focus states and screen reader accessible status updates.
- Map-only information must have a list-based alternative; do not depend on marker color alone.
- Debounce search input and map-idle triggers; cancel stale requests; enforce request deduplication and virtualize long result sets.
- Avoid fetching Places, Routes and Street View until needed. Show explicit intent to fetch routes when the user selects a facility. Request only required external fields; comply with licenses.
- Cache only owned/permitted data. Treat 5,000 active concurrent visitors per tenant as a **measurable capacity objective**, not a claim verified by the UI.
- Include informative skeletons, optimistic UI only where safe, and refresh/error controls.
- Maintain URL/shareable filters where practical without user accounts, avoiding personally identifying office/home data in publicly shareable URLs by default.

## 10. P0 UI acceptance criteria

- [ ] A visitor can complete the full core journey without creating an account.
- [ ] Standalone and embedded surfaces are available, with partner branding and property context in embed mode.
- [ ] Users can search by strict locality, office radius and drawn area; selected geometry is visible.
- [ ] The map, search count, selected card and property detail remain synchronized after every filter change.
- [ ] Facility radius is separate from property radius; results never appear to be inside a strict locality if they are not.
- [ ] At least hospitals, emergency care, pharmacies, schools, parks, supermarkets, bus stops and metro can be selected.
- [ ] Selecting a facility shows an actual route when provider data exists, distance/time and supported travel modes.
- [ ] Users can inspect a route's available Street View viewpoints, with coverage and historical-imagery disclosure.
- [ ] The AI search/insights are evidence-driven; results remain accessible if AI fails.
- [ ] Two homes can be compared for actual daily-life access metrics.
- [ ] Loading, empty, partial, unavailable, rate-limited and error states are visually designed.
- [ ] Mobile and narrow embed experiences remain usable.
- [ ] Do not mark these items done because this standalone mockup appears to work. Replace all mock data with authorized property and provider integrations, test the real flows, and obtain performance and security validation.

## 11. Prototype handoff

- `index.html`: self-contained **interactive UI concept**; works offline.
- It includes deliberately synthetic buildings, places, route shapes and travel times.
- Interactions demonstrate layout/state changes (search mode, radius, property selection, amenity selection, show-route, travel mode, Street View tab, comparison and embed preview).
- It does **not** perform live geocoding, call Google, show real Street View, calculate real routes or prove accuracy/load capacity.
- When implementing, do not copy prototype's compact typography into the real production application. Use its information architecture, interactions and visual hierarchy as the design reference.

**P0 is complete only when the real neighborhood-to-destination experience works, not when the mockup is visually similar.**


## Immersive 3D Journey Engine extension

F20 adds the engine acceptance criteria J01–J10 while preserving every existing P0 flow. Explore Neighborhood transforms the current map surface. First-person remains usable without a character. The supplied explorer brief describes the animated third-person character as optional, and the engine extension tracks the requested third-person and vehicle capabilities separately.

Show preparation stages for route resolution, renderer initialization, the initial view and required authorized assets. Enable Play only after those stages are ready. Every loading state has a finite timeout, Retry, Map View and Exit Exploration. Optional progressive assets have measured loading budgets and cannot block a prepared first-person experience indefinitely.

Keep camera perspective separate from rendering source. Offer first-person and supported third-person views within the prepared scene. Provide compact Play/Pause, forward/back, look, Return Home, destination, mode and progress controls. Model selection includes authorized pedestrian avatars, motorbikes, cars, vans, buses and trucks with meaningful availability labels. Vehicle-specific routing limitations remain visible. A simulated model must not imply actual traffic or transit service.

Switching between supported 3D, real Street View and the 2D route preserves the home, destination, travel mode and journey progress. Explain unavailable detail and imagery at the current route position. Respect reduced motion and pause background playback. Retain required provider attribution in all layouts. Test approved-origin iframes, desktop and narrow phone viewports without buyer login.

Reusable configuration controls save permitted preferences and references. Provider-derived routes, imagery and tiles require explicit retention permission. Detailed preparation, streaming, coverage and Bengaluru acceptance criteria are in the engine specification. Current 3D implementation status remains visible in the P0 delivery register.


## Map views and appearance

Provide a Map view selector on the main map with Default (Roadmap), Satellite, Terrain and 3D / Globe. Default starts with roads, labels and landmarks. Satellite provides overhead imagery. Terrain uses Google's elevation-oriented basemap. The supported 3D renderer provides perspective and a Show globe control, with geographic building detail determined by provider coverage. Keep selected properties, search boundaries, nearby facilities and route overlays available when changing the view.

Provide an app Theme setting with System, Light and Dark choices. Default to System and respond to device appearance changes. Apply the selected appearance to application panels, forms, controls and supported map color schemes. Roadmap and Terrain use the corresponding Google color scheme. Satellite and hybrid 3D imagery retain captured colors. Theme selection lasts for the current application visit.

The Maps JavaScript color scheme is initialized with the map. When an explicit scheme change requires a new 2D map instance, restore its center, zoom, tilt and heading, plus existing overlays and selection. The supported 3D view has a bounded preparation state and recovery to Default view when the renderer or connection fails. The selectors remain keyboard-accessible on narrow screens and approved-origin embeds.


## Journey-first workspace revision

Present Find a home and Plan a journey as the main workspace choices. Keep one focused left panel and let the map occupy the remaining space. Show selected-home details contextually over the map. Use clearly labeled illustrative imagery for fictional listings. Collapse search settings after matching homes arrive, with immediate access to refine them and automatic reopening when the search has no results or fails.

The planner collects confirmed start and destination locations, including explicit map picks, and a supported travel mode. Preview route streams real preparation state and the returned path. The ready card shows actual distance/ETA and View journey. This action prepares and opens the person scene with exactly one visibly active view choice. Controls are Play/Pause, Restart, a distance timeline and 1×/2×/4×/8×/16× speed. Initial illustrative speed is 4×. Opening a view keeps playback paused until preparation completes and the user presses Play.

Keep the scene full size beneath compact floating controls. Truncate long provider names visually while retaining their full accessible text. Measure header and playback-dock heights so route details and the inset map do not cover interactive controls. On phones, suppress duplicate workspace map/list navigation during playback. Keep the same planner available from approved-origin listing embeds, with no buyer login. Preserve all existing P0 searches, facilities, modes, comparisons and intelligence requirements.

### Map location search · 21 November 2026

The main map includes a floating, collapsible Search Google Maps panel. Find a place centers the selected result; Start and Destination assign confirmed Google results as journey endpoints. Selecting Start advances to Destination. Plan this route transfers both endpoints to the existing planner, where the user chooses travel mode and previews the route. The map search collapses in planner mode to preserve map interaction on small screens. Property Street View and Explore streets along route open first-person imagery; the journey planner's View journey opens the 3D person preview.
