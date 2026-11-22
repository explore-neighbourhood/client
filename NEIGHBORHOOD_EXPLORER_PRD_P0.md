# Neighborhood Explorer — P0 Product Requirements Document (PRD)

**Product type:** Multi-tenant B2B SaaS + standalone consumer experience  
**Document status:** Product baseline, v1.1 with Immersive 3D Journey Engine extension  
**Date:** 21 November 2026  
**Primary geography for validation:** Bengaluru, India  
**Launch capacity target:** 5,000 concurrently active visitors **per enterprise customer** (to be validated by load testing)  
**Audience:** Product owner, UX designer, engineering agent/team, QA, and prospective property-platform partners

> **One-line promise:** *Find a home in the right area, then experience the journeys and essentials of daily life before deciding to visit it.*

---

The [Immersive 3D Journey Engine specification](../../docs/immersive-journey-playback-spec.md) extends this baseline with F20 and acceptance criteria J01–J10. First-person exploration remains independently usable. The supplied explorer brief describes the animated third-person character as optional, while the engine extension tracks the requested third-person and vehicle capabilities. Detailed Bengaluru coverage, model rights and measured capacity require evidence before completion.

## 1. Executive summary

Neighborhood Explorer helps renters and buyers answer a question existing property cards rarely answer well: **“If I live here, what will my daily life actually be like?”**

Today, users may see photos, prices, and property attributes yet still need to open a separate map, guess the true locality boundary, check distances to hospitals and schools, compare office commutes, and independently explore the streets. Users who do not know Bengaluru's locality names may struggle to choose the right search area. Nearby localities may appear alongside exact-locality results without sufficient separation.

The product combines **AI-assisted search, geographic search controls, property discovery, nearby essentials, route planning, Street View exploration, and explainable lifestyle comparisons** into a single map-centric decision experience.

It has **two delivery surfaces powered by the same core capabilities**:
1. **Standalone:** A visitor starts with a locality, office, landmark, or map location and explores compatible properties from inventory we are authorized to show.
2. **Embedded SaaS:** Housing portals, builders, agents, and property managers embed the experience inside a listing page or property-search journey. The partner controls its authorized inventory and branding. Large portals such as 99acres or Housing.com are **target customers**, not assumed integrations.

**Non-negotiable:** The full neighborhood, facility, multimodal routing, area expansion, AI search, comparison, and Street View experiences belong to **P0**. 3D interior reconstruction and furniture fit do **not**.

## 2. The problems we are solving

| ID | Buyer / renter problem | Desired product outcome |
|---|---|---|
| PROB-01 | Search for “1 BHK in HSR Layout” may feel geographically imprecise | Clearly show the actual locality boundary and respect an explicit **within locality only** filter. |
| PROB-02 | Newcomers do not know which neighborhoods are near the office | Let them start with an office/landmark, expand the surrounding area, and discover properties. |
| PROB-03 | A 3 km circle does not describe actual travel convenience | Show routed travel distance/time; optionally filter homes by maximum commute time. |
| PROB-04 | Users cannot easily determine what services surround a property | Discover schools, hospitals, emergency departments, pharmacies, parks, supermarkets, playgrounds, bus stops, metro and other essentials. |
| PROB-05 | A list of nearby amenities does not explain how to reach them | Show home-to-destination paths, modes, travel times, and transit-stop access. |
| PROB-06 | A property image does not show the street or approach road | Offer Street View exploration at the home and along selected route segments, with coverage warnings. |
| PROB-07 | Comparing properties requires multiple tabs and mental arithmetic | Provide side-by-side, evidence-based location and lifestyle comparison. |
| PROB-08 | Property platforms need differentiation and measurable engagement | Provide a brandable SaaS module, tenant isolation, analytics, quota controls, and partner conversion integration. |

## 3. Customer segments and personas

**Primary buyers of the SaaS:** large property portals, builders/developers, broker networks, rental platforms, and property-management providers.

**End users:**
- **Relocating professional:** Knows office location and maximum rent, but does not know localities.
- **Family:** Cares about schools, parks, public transport, pharmacies, and suitable hospitals.
- **Commuter:** Wants a realistic car / two-wheeler / transit journey to the office.
- **Safety-conscious renter:** Wants to inspect access roads and locate nearby emergency facilities; expects uncertainty to be visible.
- **Portal visitor:** Already selected a listing and wants to explore its surroundings without leaving the partner website.

**Jobs to be done:**
- “Find a 1 BHK within 20 minutes of my office, under ₹25,000.”
- “Only show me homes **inside HSR Layout**—do not mix in adjacent neighborhoods.”
- “Start from this flat and show the closest bus stop and how I would walk to it.”
- “Show routes to hospitals with emergency departments within 15 minutes by bike.”
- “Show me what the road to the supermarket looks like.”
- “Compare these two flats for my daily commute and access to essentials.”

## 4. Product principles

1. **Geography is explicit.** A locality polygon, a search radius, and a travel-time limit are different user choices.
2. **The map and property results must always agree.** No hidden expansion of a strict locality or drawn boundary.
3. **Explain, do not fabricate.** AI interprets intent and summarizes evidence; structured sources determine actual matches, places, and routes.
4. **Route first, virtual imagery second.** A route can exist even when Street View coverage is missing.
5. **Useful before beautiful.** Nearest essentials, travel time, location fit, and clear warnings take precedence over animation polish.
6. **Partner data stays partner data.** Authorized inventory, strong tenant isolation, customer branding, and consent-respecting analytics.
7. **A missing answer is better than a false one.** Mark unverified facilities, unavailable route modes, approximate locations, and unknown imagery coverage.
8. **Cost is a product requirement.** Minimize expensive provider requests without violating provider caching or content-use rules.

## 5. P0 user experiences

### Journey A — AI search with strict locality

**Entry:** User types: “Show 1 BHK rentals in HSR Layout below ₹25,000.”

1. AI extracts: rental, 1 bedroom, rent ceiling ₹25,000, locality HSR Layout, and default **strict** locality mode.
2. User sees editable filter chips before or alongside the results.
3. The map shades the **verified HSR Layout boundary** and shows matching pins only inside it.
4. List cards and pins are synchronized; price, BHK, and listing source are visible.
5. No matches? Show zero results plus an explicit **“Include nearby areas”** action. Never silently add them.
6. Clicking a listing opens the neighborhood exploration experience.

**Acceptance:** Properties just outside the boundary must not appear in strict results, even if the label says “HSR.” A boundary that cannot be validated must not be presented as authoritative.

### Journey B — Office-first expandable area

**Entry:** “My office is in Bellandur; show 1 BHK homes under ₹25,000 within 3 km.”

1. Resolve and confirm the office pin/location; let the user change it.
2. Draw a visible 3 km circle around the chosen office; populate matching authorized inventory.
3. Change the radius to 5 km / 8 km / 10 km; update the map, result count, and cards together.
4. Allow the user to switch to **maximum commute time** (e.g., 20/30/45 minutes) and travel mode (walk / bike / car / transit where available).
5. Show route-time-qualified matches; distinguish **not yet checked** from **does not match**.
6. Let the user combine locality, price, BHK, and geography; display how overlapping constraints are applied.

**Acceptance:** Radius is road-independent (straight-line geographic circle), while commute-time eligibility uses route calculations. Never present “3 km” as equivalent to “10 minutes.”

### Journey C — User-drawn area

1. User chooses **Draw Search Area**.
2. Draws a closed area on the map around preferred streets/blocks.
3. Only matching listings within that area appear.
4. User can edit, clear, or replace the area and see the count change immediately.

**Acceptance:** The custom area is visible and persists while changing non-location filters. The UI clearly explains whether it replaces or intersects other geographic constraints.

### Journey D — Explore daily essentials from a selected home

**Entry:** User selects a property and taps **Explore Neighborhood**.

1. Property entrance/location is the central reference point. When only approximate coordinates are available, show that limitation.
2. Show categories: **Hospitals, Emergency Care, Pharmacies, Schools, Parks, Playgrounds, Supermarkets, Bus Stops, Metro, Gyms**, plus search for another destination.
3. User selects a category and facility radius such as 500 m, 1 km, 3 km, or 5 km.
4. Facility markers and a ranked list appear with available details, distances and source/context.
5. User selects a facility and sees the route path from the property, estimated duration, mode, and a directions action.
6. User can change from walking to motorized two-wheeler or car, and transit where routing is supported.
7. Routes remain visible while viewing a Street View panorama or stepping through covered viewpoints.

**Acceptance:** Facility-search radius is **separate** from property-listing search area. A facility outside HSR Layout can appear if it is within the selected radius of an HSR property.

### Journey E — Bus stop and metro access

**Entry:** “How do I get to the nearest bus stop from this home?”

1. Identify **candidate** nearby stops; prefer actual feasible route/walk distance over pure aerial distance.
2. Show a walking route from the home to a chosen stop, its length, duration and navigation guidance.
3. If transit information is available, show available onward public-transport routes with walking legs and transfer details.
4. If schedule or route information is unavailable, show the stop and walk route without inventing a bus timetable.

**Acceptance:** Do not claim a stop is “nearest” solely based on aerial distance when actual walkability is unknown. Label unverified accessibility.

### Journey F — Emergency-care access

**Entry:** “Find a hospital with emergency services near this home and show how to drive there.”

1. Surface nearby candidate hospitals/medical centers with available types and source details.
2. Distinguish **hospital** from **verified 24-hour emergency department**. Do not assign emergency capability unless validated from an appropriate source.
3. Show routes and indicative driving/two-wheeler times where supported.
4. State that displayed travel times, operating hours, medical capacity, and ambulance availability can change.

**Acceptance:** No emergency capability, bed availability, emergency response promise, or clinical suitability is inferred from proximity alone. Provide an option to open the provider's official contact/directions when available.

### Journey G — Street View and route experience

**Entry:** User chooses a property or a selected facility route and taps **Explore Streets**.

1. Check Street View imagery availability at/near the selected start point.
2. Display the real panorama with look-around and manual movement controls.
3. Offer a **route-follow** mode that advances between available connected panoramas aligned to the route and shows progress on the map.
4. User can choose a short exploration target (100 m / 200 m / 500 m / 1 km) or explore toward a selected facility.
5. Allow pause, continue, switch back to map, and jump to a covered route segment.
6. For a road section lacking imagery, keep showing the route and explain the gap; never invent a realistic street view.

**Acceptance:** Do **not** claim live video, real-time road conditions, an exact first-person vehicle simulation, continuous frame-perfect animation, or road safety certification. An animated map progress indicator is acceptable; Street View is linked panoramic imagery, not a live camera feed.

### Journey H — AI insights and comparison

**Entry:** User selects two or three properties and asks “Which is better for my lifestyle?”

1. Collect explicit priorities (e.g., commute 50%, transit 20%, schools 20%, parks 10%) or use understandable defaults.
2. Compare **properties we are authorized to expose** using matched location, price, verified facility presence, and route information.
3. Show side-by-side metrics and reasons, including unanswered questions.
4. AI writes a short explanation grounded in recorded, permitted input facts, with timestamps/availability labels where needed.
5. Let the customer adjust weights and see changes explained.

**Acceptance:** A “suitability score” must be reproducible and transparent, never a random LLM number. Missing data reduces confidence; it must not silently improve a score.

## 6. P0 feature catalogue and acceptance criteria

| ID | P0 module | Required behavior / definition of done |
|---|---|---|
| F01 | Natural-language AI search | Parse BHK, rent/buy, budget, locality, office, amenities, travel mode, and time/radius; show editable structured filters; clarify only material ambiguity. |
| F02 | Strict locality search | Use verified/licensed locality polygons; filter by property coordinates; never silently broaden; clean zero-result state. |
| F03 | Office / landmark / map-pin search | Confirm search anchor; support office location and arbitrary chosen map point. |
| F04 | Adjustable area | Radius slider/controls, visible circle, synchronized results, explicit area expansion; configurable limits. |
| F05 | Custom area drawing | User draws/edits/clears polygon; only properties within active area match. |
| F06 | Travel-time property search | Mode + max duration + time-of-day where supported; results based on routes, not straight-line distance; unknown results labeled. |
| F07 | Listing map and cards | Matching pins and paginated cards sync; property detail entry; clear source/approximate coordinates; count and filters visible. |
| F08 | Nearby essentials | Categories include schools, hospitals, emergency centers, pharmacies, parks, play areas, supermarkets, bus stops, metro, gyms. |
| F09 | Nearby radius controls | Facility radius anchored on chosen property; separate from area for property discovery; list and markers update. |
| F10 | Route planning | Home ↔ selected place / office, actual route geometry, distance, ETA, possible alternatives, map directions action. |
| F11 | Travel modes | Walking, motorized two-wheeler, car and transit where available; unsupported modes are disabled/explained. |
| F12 | Bus/metro directions | Route/walk to stops; when supported, onward transit leg and transfer details; no fabricated timetables. |
| F13 | Street View | Panorama at home and along route where coverage exists; progress/map coordination; honest gaps and imagery age uncertainty. |
| F14 | AI lifestyle summary | Personalized strengths/limitations from authorized source facts; distinguish facts, estimates, unknowns; transparent rationale. |
| F15 | Compare properties | Compare 2–3 homes on cost, office commute, amenities, transit, emergency access and user preferences; show evidence gaps. |
| F16 | Standalone website | Search locality, office and map without external partner site; property search only when authorized inventory is present. |
| F17 | Partner embedding | Embed listing-centric explorer + discovery variant with tenant-configurable branding and approved inventory. |
| F18 | Partner configuration and analytics | Tenant onboarding, allowed origins, plan/quotas, theme, feature flags, event metrics and engagement/conversion funnel. |
| F19 | Trust, privacy and fallback | Sources/coverage labels, consent, deletion controls, no unauthorized scraping, accessible empty/error states. |
| F20 | Immersive 3D Journey Engine | Supported Google 3D and authorized GLB assets, pedestrian and vehicle models, first/third-person views, prepared route playback, progressive permitted assets, reusable configuration and Street View/2D fallback. Validate J01–J10 in Bengaluru and both delivery surfaces. |

**P0 is considered finished only when all F01–F20 meet the acceptance criteria, including J01–J10 for F20, for at least one real authorized partner inventory and the standalone flow.** Work may be delivered incrementally within P0, but no item is demoted to a later phase.

## 7. Essential screens and primary controls

| Screen | Must display |
|---|---|
| **S1 — Search / Discover** | AI query, locality/office entry, rent/buy, BHK, budget, search mode, filters. |
| **S2 — Map + Results** | Verified locality highlight OR office-centered radius OR custom polygon; property markers/cards/count; expand-area controls. |
| **S3 — Property Neighborhood** | Selected property anchor, amenities categories, facility-radius selector, nearby essentials list, routes entry, Street View entry. |
| **S4 — Journey Planner** | Origin = selected home, destination search/selection, travel mode, route geometry, distance, ETA, directions, supported transit details. |
| **S5 — Immersive Journey** | Preparation and readiness, supported 3D/Street View/map perspectives, authorized model selection, route trace, progress, playback controls and coverage recovery. |
| **S6 — Compare + AI Insights** | Selected properties, prioritization controls, side-by-side metrics, evidence and data limitations, explanatory summary. |
| **S7 — SaaS Partner Console** | Tenant setup, inventory status, domain authorization, branding, usage, costs, errors, engagement, conversion-event configuration. |

**UX constraints:** Mobile-first responsive screens; keyboard/touch accessibility; readable labels; clear distinction between property-radius, amenity-radius, and travel-time; location permission requested only when beneficial, with a manual-location alternative.

## 8. Search and geography logic (product rules)

- **Strict locality:** Geographic containment of partner-supplied property coordinates within **verified locality polygon**; addresses/marketing labels alone are not enough.
- **Office-radius search:** A circle around a confirmed office/map point. Expanding radius may expose new listings, but existing BHK/budget constraints remain active.
- **Custom polygon:** A user-controlled region; its intersection with any other active geographic restriction must be visibly stated.
- **Travel-time search:** A calculated route-time condition for the chosen mode; candidate pruning for performance must not silently exclude eligible homes or label unverified homes as confirmed matches.
- **Amenity discovery:** Separate radius around **one selected home**; does not alter which properties match.
- **Nearest:** By meaningful travel time or route distance when available; aerial distance is a clearly labeled fallback.
- **Location quality:** Verified entrance coordinates preferred; approximate building centroid allowed only with badge; unusable coords must block precise claims.
- **Boundary ownership:** Obtain validated geographic data/rights; a geocoder viewport must not be treated as official locality borders.
- **No unauthorized inventory:** Listing cards come from partner-authorized feeds or direct-owner submissions with consent, not from generic Maps/Places queries.

## 9. AI role, reliability, and data permissions

### AI is allowed to
- Translate natural-language needs into editable structured search criteria.
- Explain selected routes/amenities and compare properties based on verifiable, legitimately usable data.
- Identify missing preferences and ask short, relevant questions.
- Produce a transparent lifestyle summary, with reasons and uncertainty.

### AI must not
- Invent properties, availability, room counts, prices, bus schedules, hospitals' emergency capabilities, route times, flooding risk, or neighborhood safety.
- Override a user's strict locality/budget constraints without approval.
- Analyze, bulk download, or store extracted road features from Google Street View imagery without explicit permissions and compliant data rights.
- Retain restricted Google Maps content, route results, or third-party imagery in a permanent proprietary dataset unless the applicable license expressly permits it.

**AI data boundary:** Operate on authorized partner metadata, independently collected/licensed observations, and provider outputs only within their applicable usage terms. Validate current provider terms before connecting any AI summarization directly to Maps content. If a planned AI workflow is not permitted, use non-Google licensed/first-party data or leave the insight unavailable. Do not treat the presence of a Google API response as permission to feed all of it to an LLM or persist it.

## 10. SaaS partner experience and commercial requirements

### Delivery modes
- **Partner listing widget:** Portal passes a listing identifier and authorized location; user opens the property-centric Neighborhood Explorer.
- **Partner discovery experience:** Portal hosts a broader search page where customers can search partner-authorized inventory by locality, office or custom area.
- **Standalone:** Our domain hosts the consumer experience, using our own licensed/owner-authorized inventory.

### Required partner capabilities
- **Tenant isolation:** Listings, brand settings, quotas, event data and user information never leak across partners.
- **Secure embedding:** Approved domains, short-lived tenant-specific sessions, and server-to-server credentials; no customer private API secrets in public browser code.
- **Branding:** Logo, colors, button labels, supported property actions, localized copy.
- **Inventory lifecycle:** Authorized create/update/delete/unpublish feed, coordinate quality flags, last-updated status, and source attribution.
- **Conversion path:** Return the buyer to the partner's property page or site-visit/contact action, with explicit event tracking rules.
- **Observability + quotas:** Tenant usage dashboard, provider usage budget and soft/hard limits, operational alerts, and agreed support processes.
- **Billing concept:** Subscription + usage allowance + enterprise negotiated volume; do not finalize commercial prices until real traffic and Maps costs are measured.

### Partner's minimal responsibilities
1. Supply or approve listings and their usage rights.
2. Provide accurate property coordinates where possible.
3. Approve embedding origins and branding.
4. Agree on analytics events, privacy notice, and permitted conversion tracking.

## 11. Traffic, scale, and quality-of-service requirements

**Target:** Support **at least 5,000 concurrently active sessions for one enterprise tenant**. This is a design/validation target, **not an existing benchmark result**. Simultaneous sessions do not equal 5,000 requests/sec; scenario load must reflect user think time and actions.

### NFRs / acceptance targets (initial, adjustable after measurement)

| ID | Nonfunctional requirement | Launch target / validation |
|---|---|---|
| NFR-01 | Tenant scalability | 5,000 active sessions for one tenant in a representative load test, then multi-tenant mixed load. |
| NFR-02 | Owned-inventory search latency | p95 < 500 ms for warmed, indexed, normal-load search requests, measured separately from external routing. |
| NFR-03 | Search availability | Proposed 99.9% monthly availability for owned property search after hardening. Not a customer SLA until contractually committed. |
| NFR-04 | External dependencies | Google API timeout, quota, or outage must not break basic listing search; show scoped fallback/errors. |
| NFR-05 | Security | Tenant isolation tests, authenticated import, allowlisted embeds, restricted keys, rate limits, abuse protection, audits. |
| NFR-06 | Usage budgets | Per-tenant and global ceilings, provider call telemetry, rate controls, and a cost/visit model before pilot. |
| NFR-07 | Mobile and accessibility | Functional mobile touch experience and keyboard/screen-reader access to core search and route info. |
| NFR-08 | Freshness and provenance | Property source/last-updated; map imagery historical-not-live; route ETA approximate/time-dependent; facility attributes labeled. |
| NFR-09 | Privacy | Consent for optional precise location and usage analytics; deletion/retention controls; avoid unnecessary personal-location storage. |
| NFR-10 | Performance validation | Burst, soak, and failure tests; provider calls safely stubbed/capped during high-concurrency simulation. |

### Critical load scenarios

1. 5,000 active visitors browsing search results, adjusting area and filters.
2. A burst of users selecting one popular property after portal promotion.
3. Hundreds initiating nearby-facility searches and route planning in a short interval.
4. Many users opening Street View simultaneously; browser/network cost and third-party quota examined separately.
5. An external Maps provider rate limit or temporary failure during peak usage.
6. Two large tenants active at once, with strict data isolation and fair provider-budget enforcement.

**Illustrative load math only:** 5,000 active users issuing one search per minute ≈ **83 searches/second**; do not assume this rate without measuring usage. Rate of Places, Routes and Street View usage is a separate billable-capacity question.

## 12. Analytics and evidence of customer value

**Buyer funnel:** Search started → query interpreted → filter adjusted → property viewed → neighborhood opened → amenity selected → route launched → Street View opened → comparison opened → partner lead/visit click.

**Partner-facing metrics:** neighborhood engagement rate, route requests per engaged listing, percentage using nearby facilities, Street View coverage, search-zero-result rate, lead/visit conversion (only where partner shares compliant attribution), search performance, failed calls, and estimated external-provider costs.

**North-star candidate:** Percentage of property viewers who complete a meaningful neighborhood evaluation (at least one facility route or Street View route, or a comparison) before taking a property action. **Hypothesis, to validate:** this improves informed enquiries rather than maximizing time spent.

**Guardrail metrics:** search precision, geographic false positives, external costs/engaged user, route failure rate, unsupported-data claims, and privacy opt-outs.

## 13. Edge cases that must be tested

| Case | Expected behavior |
|---|---|
| No listings in strict HSR boundary | Honest zero state; nearby areas offered as opt-in only. |
| Property tagged HSR but geolocation outside polygon | Exclude from strict HSR results; flag partner data-quality issue. |
| Office is an ambiguous company address | Ask user to choose the correct location before drawing search area. |
| Search radius expanded while budget still set | Preserve all other filters; update both map and cards. |
| Locality boundary not licensed/verified | No invented hard boundary; clear limitation and alternative search mode. |
| Nearby Search returns limited places | Label “matching places found,” not “all places in this area.” |
| Hospital not confirmed as emergency capable | Show general hospital classification; avoid emergency verification badge. |
| Route mode unsupported or transit missing | Explain and offer available modes; never show made-up routes. |
| Street View gaps / outdated images | Keep map route visible; show availability and historical-imagery note. |
| Property coordinates approximate | Warn that entrance-level routes and distance may be inexact. |
| AI response contradicts hard search filter | Deterministic filter rules win; do not render misleading AI match. |
| Vendor API outage / tenant quota hit | Preserve basic search and listing UI; localized error and retry policy. |
| Partner A tries to access Partner B listing | Deny and audit; no data leak. |
| Partner listing removed/unpublished | Listing disappears from discovery and direct access follows tenant policy. |
| Visitor declines location permission | Manual office/locality/map pin still works. |

## 14. What is deliberately **not** P0

- Generating 3D interiors from owner-uploaded flat videos or panoramas.
- Digitally reconstructing precise room dimensions and furniture-clearance simulation.
- Buyer video upload of existing furniture to fit into the new flat.
- ML road-quality or pothole detection from Google Street View imagery.
- Guaranteed real-time driving simulation, real-time road safety certification, or emergency-response prediction.
- Building a new nationwide property-data marketplace by scraping portals.

**Future:** AI-assisted 3D walkthroughs, validated room plans, place-your-furniture experiences, and other explicitly licensed neighborhood intelligence.

## 15. P0 delivery sequencing — all are still P0

This is a development sequence **within P0**, not a change in scope.

| Wave | Deliverable | Exit test |
|---|---|---|
| **P0-A — Find** | Tenant inventory, AI parsing, locality polygons, office anchor, expandable radius, drawn area, map/list synchronization, standalone + embed skeleton | User can reliably find the right flats **only** inside selected areas. |
| **P0-B — Experience** | Nearby essentials, separate amenity radius, hospital/emergency category labels, route planner for supported modes, bus/metro access, Street View along selected route | User can go from a selected home to a hospital/bus stop and explore the route. |
| **P0-C — Decide + Operate** | Commute-time property filtering, AI lifestyle insights, compare 2–3 homes, partner analytics/branding, quotas, failure handling, compliance review, 5k-session test | One paying-customer-quality partner pilot can run reliably with verified capacity and measured cost. |

### Definition of complete P0

A buyer on a partner portal can say **“Find me a 1 BHK under ₹25k near my Bellandur office, within a 30-minute bike commute; show nearby hospitals, the bus stop walk, and the route to the supermarket; let me inspect the streets and compare two flats.”** The product returns authorized matching listings and honest routes/nearby results with clear source limitations, without switching sites. The same capabilities are accessible in the standalone product with permitted inventory. The system is tenant-safe and passes representative 5,000-concurrent-active-user tests.

## 16. Agent-ready work instructions (product-level, no code dictated)

**Treat this PRD as the P0 source of truth.** Begin by comparing the existing repository to F01–F19 and creating a gap register: **working / partial / missing / blocked by dependency**. Do not equate a demo endpoint or sample data with complete product functionality.

1. **Preserve all P0 features.** They may be completed in waves P0-A/B/C; do not move nearby amenities, navigation, comparison, travel-time search, or lifestyle insights out of P0.
2. **Build strict geography first.** Demo boundaries are not production verification. Persist filter semantics as explicit state, and validate with near-boundary test points.
3. **Use real, authorized listings in integration tests.** Do not scrape Housing.com, 99acres, or NoBroker without agreement and rights.
4. **Prove a full facility journey:** property → nearby hospital/bus stop → select destination → mode → real route and ETA → route-aligned Street View with coverage fallback.
5. **Use deterministic matching; explain with AI.** Never let an LLM invent the property inventory, public-transit service, healthcare capability, or geographic match.
6. **Design for 5k active sessions, measure it.** Build tenant-aware budgets, isolate external providers, record p95 and 5xx, and run reproducible load tests with controlled provider mocks.
7. **Track each acceptance criterion.** Show product owner evidence: screenshots/screen recording, API/test outputs, data source, and limitations for each user journey.
8. **Call out blockers explicitly.** Credentials, partner inventory, authoritative boundary licenses, legal/commercial permission, provider quotas and costs are external dependencies—not features to silently fake.

**Agent output requested first:** a repository gap analysis mapped to F01–F19, a page-by-page UX wireframe plan, an incremental backlog mapped to the three P0 waves, and a validation/testing plan. Then implement starting from P0-A, delivering working vertical slices and preserving the full PRD scope.

## 17. External dependencies / decisions to confirm before production rollout

- **Listing provider:** First paying pilot partner and legally authorized feed, fields, updates, data deletion and coordinates.
- **Geographic boundaries:** Verified sources/usage rights for Bengaluru locality polygons and optional sector boundaries.
- **Google Maps Platform:** API project and billing, enabled Maps JS, Places, Routes, Street View, live quota and budget estimates, India-specific pricing, and usage/AI/storage rights review.
- **Healthcare and transport quality:** Which verified data sources establish a 24/7 emergency center or transit service where Google records are incomplete?
- **Partner integration:** iframe widget and/or approved API/SDK, partner event tracking and conversion link behavior; final enterprise security review.
- **Monetization:** Usage unit (engaged sessions / Places or Routes usage / property views), included volume, overages, support tier, and price.
- **SLOs:** Confirm against production infrastructure and measured partner traffic rather than promising untested performance.

## Immersive journey extension acceptance

Preserve every existing P0 requirement. Deliver F20 in the existing P0-B Experience and P0-C Decide + Operate sequence. Scene readiness must precede Play. A stalled provider or asset load must resolve to a bounded recovery state with route-map access. Reusable configurations contain permitted application data and authorized asset references. Provider imagery and tiles use supported provider loading and require express permission for storage, bulk prefetch or redistribution.

Validate actual Bengaluru routes, camera/character alignment, model permissions, preparation timing, frame pacing, progressive asset disposal, reduced motion, mobile and anonymous approved-origin embedding. A mock road or unrelated demo city cannot establish realistic 3D street simulation. The 5,000-active-session target includes API, asset delivery, browser resources, provider quotas, burst/soak/failure tests and tenant isolation. Current implementation gaps and external dependencies are tracked in the delivery register.

## 18. Official references (for engineering/legal verification)

- Google Nearby Search (New): https://developers.google.com/maps/documentation/places/web-service/nearby-search
- Google Routes API: https://developers.google.com/maps/documentation/routes/
- Google two-wheeler routing: https://developers.google.com/maps/documentation/routes/route_two_wheel
- Google Routes Matrix: https://developers.google.com/maps/documentation/routes/compute-route-matrix
- Google Street View JavaScript: https://developers.google.com/maps/documentation/javascript/streetview
- Google Maps Platform Terms: https://cloud.google.com/maps-platform/terms
- Google Maps service-specific terms: https://cloud.google.com/maps-platform/terms/maps-service-terms
- Google Maps pricing: https://developers.google.com/maps/billing-and-pricing/pricing-india

These are technical/legal reference links, not permission to use any API content without checking applicable terms for the specific account and use case.

---

### Agent handoff — paste this with the PRD

> Build **Neighborhood Explorer P0** as a multi-tenant real-estate SaaS with standalone and partner-embedded experiences. Use the attached PRD as the source of truth. All modules F01–F19 are P0, including AI property search, verified locality and expandable office-radius/custom-area search, travel-time search, nearby schools/hospitals/emergency care/bus stops/metro/parks/supermarkets, walking/two-wheeler/car/transit routes, Street View route exploration, AI lifestyle insights, and property comparisons. Do not start the deferred 3D interior work. First audit the existing repo and report implementation gaps, then deliver P0-A/B/C working vertical slices with tests. Treat 5,000 concurrent active users **per enterprise tenant** as a load-test target, not a claim. Follow Google licensing and do not fabricate geodata or healthcare/transit details.
