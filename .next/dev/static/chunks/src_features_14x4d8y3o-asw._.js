(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/embed/explorer-entry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExplorerEntry",
    ()=>ExplorerEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$strictObject$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .strictObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .literal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$property$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/property-explorer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const bootstrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$strictObject$3e$__["z"].strictObject({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal('neighborhood:init'),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).max(4096),
    propertyId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^[a-f0-9]{24}$/)
});
function ExplorerEntry() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'loading',
        message: 'Opening Neighborhood Explorer…'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExplorerEntry.useEffect": ()=>{
            const embedded = window.parent !== window;
            if (!embedded) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setEmbedToken"])();
                setState({
                    status: 'standalone'
                });
                return;
            }
            const allowed = (("TURBOPACK compile-time value", "http://localhost:3302") ?? '').split(' ').filter(Boolean);
            let request;
            let currentProperty;
            setState({
                status: 'loading',
                message: 'Waiting for this property’s authorized portal context…'
            });
            async function receive(event) {
                if (event.source !== window.parent || !allowed.includes(event.origin)) return;
                const data = bootstrap.safeParse(event.data);
                if (!data.success) return;
                request?.abort();
                const active = new AbortController();
                request = active;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setEmbedToken"])(data.data.token, {
                    "ExplorerEntry.useEffect.receive": ()=>window.parent.postMessage({
                            type: 'neighborhood:session-required'
                        }, event.origin)
                }["ExplorerEntry.useEffect.receive"]);
                if (currentProperty?.id !== data.data.propertyId) {
                    setState({
                        status: 'loading',
                        message: 'Opening the selected property…'
                    });
                }
                try {
                    const property = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProperty"])(data.data.propertyId, AbortSignal.any([
                        active.signal,
                        AbortSignal.timeout(7000)
                    ]));
                    if (!active.signal.aborted) {
                        currentProperty = property;
                        setState({
                            status: 'ready',
                            property
                        });
                        window.parent.postMessage({
                            type: 'neighborhood:context-ready'
                        }, event.origin);
                    }
                } catch  {
                    if (!active.signal.aborted) {
                        setState({
                            status: 'error',
                            message: 'This property context is unavailable or expired. Reopen the explorer from the portal.'
                        });
                    }
                }
            }
            window.addEventListener('message', receive);
            for (const origin of allowed)window.parent.postMessage({
                type: 'neighborhood:ready'
            }, origin);
            return ({
                "ExplorerEntry.useEffect": ()=>{
                    window.removeEventListener('message', receive);
                    request?.abort();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setEmbedToken"])();
                }
            })["ExplorerEntry.useEffect"];
        }
    }["ExplorerEntry.useEffect"], []);
    if (state.status === 'standalone') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$property$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyExplorer"], {}, void 0, false, {
        fileName: "[project]/src/features/embed/explorer-entry.tsx",
        lineNumber: 58,
        columnNumber: 45
    }, this);
    if (state.status === 'ready') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$property$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyExplorer"], {
        initialProperty: state.property,
        embedded: true
    }, state.property.id, false, {
        fileName: "[project]/src/features/embed/explorer-entry.tsx",
        lineNumber: 59,
        columnNumber: 40
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "embed-status",
        role: state.status === 'error' ? 'alert' : 'status',
        children: state.message
    }, void 0, false, {
        fileName: "[project]/src/features/embed/explorer-entry.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(ExplorerEntry, "YymBQhy59NW1jQqst2FzpLaqswY=");
_c = ExplorerEntry;
var _c;
__turbopack_context__.k.register(_c, "ExplorerEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/embed/session.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiFetch",
    ()=>apiFetch,
    "setEmbedToken",
    ()=>setEmbedToken
]);
let token;
let onUnauthorized;
let renewalRequested = false;
function setEmbedToken(value, renew) {
    token = value;
    onUnauthorized = renew;
    renewalRequested = false;
}
async function apiFetch(path, init = {}) {
    if (!path.startsWith('/api/v1/')) throw new Error('Expected a local API path');
    const session = token;
    const headers = new Headers(init.headers);
    if (session) headers.set('Authorization', `Bearer ${session}`);
    const response = await fetch(path, {
        ...init,
        headers,
        cache: 'no-store',
        credentials: 'omit'
    });
    if (response.status === 401 && session && session === token && !renewalRequested) {
        renewalRequested = true;
        onUnauthorized?.();
    }
    return response;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/journey-planner/journey-planner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JourneyPlanner",
    ()=>JourneyPlanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/polyline-codec/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$anchor$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/anchor-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function JourneyPlanner({ initialStart, initialDestination, mapSelection, onOrigin, onPreview, onView }) {
    _s();
    const [origin, setOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStart);
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDestination);
    const [pickTarget, setPickTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStart ? 'destination' : 'origin');
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('WALK');
    const [route, setRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onOrigin,
        onPreview
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyPlanner.useEffect": ()=>{
            callbacks.current = {
                onOrigin,
                onPreview
            };
        }
    }["JourneyPlanner.useEffect"], [
        onOrigin,
        onPreview
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyPlanner.useEffect": ()=>({
                "JourneyPlanner.useEffect": ()=>request.current?.abort()
            })["JourneyPlanner.useEffect"]
    }["JourneyPlanner.useEffect"], []);
    function clearRoute() {
        request.current?.abort();
        setRoute(undefined);
        setError('');
        setStatus('idle');
        callbacks.current.onPreview(undefined);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyPlanner.useEffect": ()=>{
            setOrigin(initialStart);
            request.current?.abort();
            setRoute(undefined);
            setStatus('idle');
            setError('');
            callbacks.current.onPreview(undefined);
        }
    }["JourneyPlanner.useEffect"], [
        initialStart?.point.lat,
        initialStart?.point.lng,
        initialStart?.label
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyPlanner.useEffect": ()=>{
            if (!initialDestination) return;
            request.current?.abort();
            setDestination(initialDestination);
            setRoute(undefined);
            setStatus('idle');
            setError('');
            callbacks.current.onPreview(undefined);
        }
    }["JourneyPlanner.useEffect"], [
        initialDestination?.point.lat,
        initialDestination?.point.lng,
        initialDestination?.label
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyPlanner.useEffect": ()=>{
            if (!mapSelection) return;
            clearRoute();
            const location = {
                point: mapSelection,
                label: pickTarget === 'origin' ? 'Selected start on map' : 'Selected destination on map'
            };
            if (pickTarget === 'origin') {
                setOrigin(location);
                callbacks.current.onOrigin(location);
                setPickTarget('destination');
            } else setDestination(location);
        }
    }["JourneyPlanner.useEffect"], [
        mapSelection
    ]);
    async function prepare() {
        if (!origin || !destination) {
            setError('Choose both locations from the results or the map.');
            return;
        }
        clearRoute();
        const active = new AbortController();
        request.current = active;
        setStatus('connecting');
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareJourney"])(origin.point, destination.point, mode, AbortSignal.any([
                active.signal,
                AbortSignal.timeout(15000)
            ]), ()=>{
                if (!active.signal.aborted) setStatus('routing');
            });
            if (active.signal.aborted) return;
            if (!data) {
                setError('No route is available for this mode. Choose another mode or destination.');
                return;
            }
            const journey = {
                ...data,
                mode,
                direct: true,
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(data.encodedPolyline).map(([lat, lng])=>({
                        lat,
                        lng
                    })),
                destination: {
                    id: `point:${destination.point.lat},${destination.point.lng}`,
                    name: destination.label,
                    location: destination.point,
                    destination: '',
                    attributions: []
                }
            };
            if (journey.path.length < 2) {
                setError('This route has no usable path. Choose a different destination.');
                return;
            }
            setRoute(journey);
            callbacks.current.onPreview(journey);
        } catch (failure) {
            if (!active.signal.aborted) setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeFailure"])(failure));
        } finally{
            if (!active.signal.aborted) setStatus('idle');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "journey-planner",
        "aria-label": "Plan your journey",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "planner-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "YOUR EVERYDAY JOURNEY"
                    }, void 0, false, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 95,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "journey-planner-heading",
                        children: [
                            "See the way",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 95,
                                columnNumber: 134
                            }, this),
                            "before you go."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 95,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Choose two places and explore the route between them."
                    }, void 0, false, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 95,
                        columnNumber: 159
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "journey-locations",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-location origin-location",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$anchor$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnchorPicker"], {
                                label: "Start location",
                                selectedLabel: origin?.label ?? '',
                                onClear: ()=>{
                                    clearRoute();
                                    setOrigin(undefined);
                                },
                                onPick: (point, label)=>{
                                    clearRoute();
                                    const location = {
                                        point,
                                        label
                                    };
                                    setOrigin(location);
                                    onOrigin(location);
                                    setPickTarget('destination');
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 98,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-button",
                                type: "button",
                                "aria-pressed": pickTarget === 'origin',
                                onClick: ()=>setPickTarget('origin'),
                                children: "Choose start on map"
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 100,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 97,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-location destination-location",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$anchor$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnchorPicker"], {
                                label: "Destination",
                                selectedLabel: destination?.label ?? '',
                                onClear: ()=>{
                                    clearRoute();
                                    setDestination(undefined);
                                },
                                onPick: (point, label)=>{
                                    clearRoute();
                                    setDestination({
                                        point,
                                        label
                                    });
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 103,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-button",
                                type: "button",
                                "aria-pressed": pickTarget === 'destination',
                                onClick: ()=>setPickTarget('destination'),
                                children: "Choose destination on map"
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 105,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 102,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Travel mode",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: mode,
                        onChange: (event)=>{
                            clearRoute();
                            setMode(event.target.value);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "WALK",
                                children: "Walking"
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 109,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "TWO_WHEELER",
                                children: "Two-wheeler"
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 109,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "DRIVE",
                                children: "Car"
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 109,
                                columnNumber: 92
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "TRANSIT",
                                children: "Public transit"
                            }, void 0, false, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 109,
                                columnNumber: 126
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 108,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "primary-action",
                type: "button",
                disabled: status !== 'idle' || !origin || !destination,
                onClick: ()=>void prepare(),
                children: status === 'idle' ? 'Preview route' : 'Preparing your route…'
            }, void 0, false, {
                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, this),
            status !== 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "preparation-status",
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "loading-ring"
                    }, void 0, false, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 114,
                        columnNumber: 77
                    }, this),
                    status === 'connecting' ? 'Connecting to the journey service…' : 'Calculating your route…'
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                lineNumber: 114,
                columnNumber: 27
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-error",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                lineNumber: 115,
                columnNumber: 15
            }, this),
            route && origin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prepared-journey",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "YOUR ROUTE IS READY"
                    }, void 0, false, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 117,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-metrics",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    (route.distanceMeters / 1000).toFixed(2),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: " km"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                        lineNumber: 118,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 118,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    Math.max(1, Math.round(route.durationSeconds / 60)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: " min"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                        lineNumber: 118,
                                        columnNumber: 178
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                                lineNumber: 118,
                                columnNumber: 117
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 118,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Google Maps estimate · ",
                            route.mode === 'WALK' ? 'Walking' : route.mode === 'DRIVE' ? 'Car' : route.mode === 'TWO_WHEELER' ? 'Two-wheeler' : 'Transit'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 119,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "primary-action",
                        onClick: ()=>onView(route, origin),
                        children: "View journey"
                    }, void 0, false, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 120,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "fine-print",
                        children: "Your 3D scene prepares before playback. Street View and map are available as alternatives."
                    }, void 0, false, {
                        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                        lineNumber: 121,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
                lineNumber: 116,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/journey-planner/journey-planner.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, this);
}
_s(JourneyPlanner, "S+c8R86l93C4/Zvf+DyzGqdzuyM=");
_c = JourneyPlanner;
var _c;
__turbopack_context__.k.register(_c, "JourneyPlanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeFailure",
    ()=>describeFailure,
    "fetchPlaces",
    ()=>fetchPlaces,
    "fetchRoute",
    ()=>fetchRoute,
    "prepareJourney",
    ()=>prepareJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$discriminatedUnion$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .discriminatedUnion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .literal>");
;
;
const place = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        lat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
        lng: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number()
    }),
    destination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    attributions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        providerUri: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
    }))
});
const route = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    durationSeconds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nonnegative(),
    distanceMeters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nonnegative(),
    encodedPolyline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    steps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        distanceMeters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nonnegative(),
        instruction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        maneuver: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
    })).optional()
});
class NeighborhoodError extends Error {
    status;
    code;
    constructor(status, code){
        super(code), this.status = status, this.code = code;
    }
}
function describeFailure(error) {
    if (error instanceof NeighborhoodError) {
        if (error.status === 429) return 'The neighborhood request limit has been reached. Try again later.';
        if (error.code === 'PROVIDER_DISABLED') return 'Google Maps services are unavailable for this catalog.';
        if (error.code === 'INVALID_DESTINATION') return 'This nearby selection expired. Choose a category again to refresh it.';
        if (error.status === 404) return 'This listing is no longer available.';
    }
    return 'Google Maps services are temporarily unavailable. You can still search properties.';
}
async function request(origin, endpoint, body, data, signal) {
    const path = typeof origin === 'string' ? `/api/v1/properties/${encodeURIComponent(origin)}/${endpoint}` : `/api/v1/locations/${endpoint}`;
    const payloadBody = typeof origin === 'string' ? body : {
        ...body,
        origin
    };
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payloadBody),
        cache: 'no-store',
        signal
    });
    const payload = await response.json().catch(()=>null);
    if (!response.ok) {
        const error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
            })
        }).safeParse(payload);
        throw new NeighborhoodError(response.status, error.success ? error.data.error.code : '');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        data
    }).parse(payload).data;
}
function fetchPlaces(id, category, radiusMeters, signal) {
    return request(id, 'nearby', {
        category,
        radiusMeters
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(place), signal);
}
function fetchRoute(id, destination, mode, signal) {
    return request(id, 'route', {
        destination,
        mode
    }, route.nullable(), signal);
}
const journeyEvent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$discriminatedUnion$3e$__["z"].discriminatedUnion('type', [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal('stage'),
        stage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal('routing')
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal('route'),
        data: route.nullable()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal('error'),
        error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
        })
    })
]);
async function prepareJourney(origin, destination, mode, signal, onStage) {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/api/v1/journeys/route', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/x-ndjson'
        },
        body: JSON.stringify({
            origin,
            destination,
            mode
        }),
        signal
    });
    if (!response.ok || !response.body) throw new NeighborhoodError(response.status, '');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let pending = '';
    try {
        while(true){
            const { done, value } = await reader.read();
            pending += decoder.decode(value, {
                stream: !done
            });
            if (pending.length > 1000000) throw new Error('Journey response exceeded its limit');
            let newline = pending.indexOf('\n');
            while(newline >= 0){
                const line = pending.slice(0, newline).trim();
                pending = pending.slice(newline + 1);
                if (line) {
                    const event = journeyEvent.parse(JSON.parse(line));
                    if (event.type === 'stage') onStage();
                    if (event.type === 'error') throw new NeighborhoodError(503, event.error.code);
                    if (event.type === 'route') return event.data;
                }
                newline = pending.indexOf('\n');
            }
            if (done) throw new Error('Journey response ended before the route');
        }
    } finally{
        await reader.cancel().catch(()=>{});
        reader.releaseLock();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/categories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories
]);
const categories = {
    hospital: 'Hospitals',
    emergency: 'Emergency care',
    pharmacy: 'Pharmacies',
    school: 'Schools',
    supermarket: 'Supermarkets',
    park: 'Parks',
    bus: 'Bus stops',
    metro: 'Metro stations',
    restaurant: 'Restaurants',
    gym: 'Gyms'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/geometry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "distanceMeters",
    ()=>distanceMeters,
    "sampleRoute",
    ()=>sampleRoute
]);
function distanceMeters(a, b) {
    const rad = Math.PI / 180;
    const haversine = Math.sin((b.lat - a.lat) * rad / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin((b.lng - a.lng) * rad / 2) ** 2;
    return 12_742_017.6 * Math.asin(Math.sqrt(Math.min(1, haversine)));
}
function sampleRoute(path, limit) {
    const first = path[0];
    if (!first) return [];
    const samples = [
        {
            point: first,
            meters: 0
        }
    ];
    let covered = 0;
    let nextStep = 100;
    for(let index = 1; index < path.length; index++){
        const from = path[index - 1];
        const to = path[index];
        const length = distanceMeters(from, to);
        while(nextStep <= covered + length && nextStep <= limit && length > 0){
            const ratio = (nextStep - covered) / length;
            samples.push({
                point: {
                    lat: from.lat + (to.lat - from.lat) * ratio,
                    lng: from.lng + (to.lng - from.lng) * ratio
                },
                meters: nextStep
            });
            nextStep += 100;
        }
        covered += length;
        if (covered >= limit) break;
    }
    const last = path.at(-1);
    if (last && covered < limit && samples.at(-1).meters < covered) samples.push({
        point: last,
        meters: Math.round(covered)
    });
    return samples;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/neighborhood-explorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NeighborhoodExplorer",
    ()=>NeighborhoodExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/polyline-codec/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/property-details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$property$2d$comparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/property-comparison.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$route$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/route-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/geometry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const mapsKey = ("TURBOPACK compile-time value", "AIzaSyD7rqUpTzUpEbxm-Xc7ikltFJGzOhd92Qk");
const modes = {
    WALK: 'Walking',
    TWO_WHEELER: 'Motorized two-wheeler',
    DRIVE: 'Car',
    TRANSIT: 'Public transit'
};
const emptyMap = {
    places: [],
    route: []
};
const coordinates = {
    verified_entrance: 'Verified entrance coordinates',
    approximate: 'Approximate location. The entrance may differ.',
    unknown: 'Entrance location unverified.'
};
function length(meters) {
    return meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(1)} km`;
}
function attributionUri(uri) {
    try {
        if (uri && new URL(uri).protocol === 'https:') return uri;
    } catch  {}
    return undefined;
}
function sourceLink(property, place, mode) {
    const params = new URLSearchParams({
        api: '1',
        origin: `${property.location.lat},${property.location.lng}`,
        destination: `${place.location.lat},${place.location.lng}`,
        destination_place_id: place.id,
        travelmode: {
            WALK: 'walking',
            DRIVE: 'driving',
            TRANSIT: 'transit',
            TWO_WHEELER: 'two-wheeler'
        }[mode]
    });
    return `https://www.google.com/maps/dir/?${params}`;
}
function NeighborhoodExplorer({ property, shortlist, toggleShortlist, selectHome, onClose, onMap, pickedPlaceId, onExplore, evidence, onEvidence }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Essentials');
    const [radiusMeters, setRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [lastRadius, setLastRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [places, setPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('WALK');
    const [route, setRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [previewPoint, setPreviewPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listed = shortlist.some((home)=>home.id === property.id);
    const sourceDate = new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'medium',
        timeZone: 'UTC'
    }).format(new Date(property.source.updatedAt));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeighborhoodExplorer.useEffect": ()=>({
                "NeighborhoodExplorer.useEffect": ()=>{
                    request.current?.abort();
                    onMap(emptyMap);
                }
            })["NeighborhoodExplorer.useEffect"]
    }["NeighborhoodExplorer.useEffect"], [
        onMap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeighborhoodExplorer.useEffect": ()=>{
            onMap({
                places,
                category,
                route: route?.path ?? [],
                streetPoint: previewPoint
            });
        }
    }["NeighborhoodExplorer.useEffect"], [
        onMap,
        places,
        category,
        route,
        previewPoint
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeighborhoodExplorer.useEffect": ()=>{
            if (pickedPlaceId) setTab('Essentials');
        }
    }["NeighborhoodExplorer.useEffect"], [
        pickedPlaceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeighborhoodExplorer.useEffect": ()=>{
            if (!pickedPlaceId || tab !== 'Essentials') return;
            const item = document.getElementById(`place-${pickedPlaceId}`);
            item?.scrollIntoView({
                block: 'nearest'
            });
            item?.focus({
                preventScroll: true
            });
        }
    }["NeighborhoodExplorer.useEffect"], [
        pickedPlaceId,
        places,
        tab
    ]);
    function begin() {
        request.current?.abort();
        const controller = new AbortController();
        request.current = controller;
        return {
            controller,
            signal: AbortSignal.any([
                controller.signal,
                AbortSignal.timeout(12000)
            ])
        };
    }
    async function explore(selected) {
        const { controller, signal } = begin();
        setCategory(selected);
        setLastRadius(radiusMeters);
        setPlaces([]);
        setRoute(undefined);
        setDestination(undefined);
        setError(undefined);
        setLoading('places');
        try {
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPlaces"])(property.id, selected, radiusMeters, signal);
            if (!controller.signal.aborted) setPlaces(results);
        } catch (failure) {
            if (!controller.signal.aborted) setError({
                tab: 'Essentials',
                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeFailure"])(failure)
            });
        } finally{
            if (!controller.signal.aborted) setLoading(undefined);
        }
    }
    async function showRoute(selected, travel) {
        const { controller, signal } = begin();
        setTab('Routes');
        setDestination(selected);
        setMode(travel);
        setRoute(undefined);
        setError(undefined);
        setLoading('route');
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRoute"])(property.id, selected.destination, travel, signal);
            if (!controller.signal.aborted) {
                if (result) onEvidence({
                    propertyId: property.id,
                    destinationId: selected.id,
                    destinationName: selected.name,
                    category,
                    mode: travel,
                    distanceMeters: result.distanceMeters,
                    durationSeconds: result.durationSeconds,
                    checkedAt: new Date().toISOString()
                });
                setRoute(result && {
                    ...result,
                    mode: travel,
                    path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(result.encodedPolyline).map(([lat, lng])=>({
                            lat,
                            lng
                        }))
                });
            }
        } catch (failure) {
            if (!controller.signal.aborted) setError({
                tab: 'Routes',
                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeFailure"])(failure)
            });
        } finally{
            if (!controller.signal.aborted) setLoading(undefined);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "selected-home",
        className: "home-detail",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "selected-home",
                        children: property.title
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: onClose,
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertySummary"])(property)
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "home-price",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listingPrice"])(property)
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: coordinates[property.coordinateQuality]
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "listing-attribution",
                children: [
                    property.source.synthetic && 'Sample listing · ',
                    property.source.name,
                    " · Updated ",
                    sourceDate
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            property.source.synthetic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                children: "Fictional home and price at an illustrative map point. Places, routes and imagery come from Google for this point."
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 151,
                columnNumber: 37
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "segments neighborhood-tabs",
                "aria-label": "Neighborhood views",
                children: [
                    [
                        'Essentials',
                        'Routes',
                        'Compare'
                    ].map((view)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-pressed": view === tab,
                            onClick: ()=>{
                                setTab(view);
                            },
                            children: view
                        }, view, false, {
                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)),
                    mapsKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onExplore(route && destination ? {
                                ...route,
                                destination,
                                category
                            } : undefined),
                        children: "Street View"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 158,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            error?.tab === tab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-error",
                role: "alert",
                children: error.text
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 160,
                columnNumber: 30
            }, this),
            tab === 'Essentials' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Facility radius",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: radiusMeters,
                                onChange: (event)=>setRadius(Number(event.target.value)),
                                children: [
                                    500,
                                    1000,
                                    3000,
                                    5000,
                                    10000
                                ].map((radius)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: radius,
                                        children: length(radius)
                                    }, radius, false, {
                                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                        lineNumber: 164,
                                        columnNumber: 59
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "category-grid",
                        "aria-label": "Nearby categories",
                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"]).map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                "aria-pressed": category === key,
                                onClick: ()=>void explore(key),
                                children: label
                            }, key, false, {
                                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "status",
                        children: loading === 'places' ? 'Finding nearby places…' : !error && places.length === 0 ? `No matching places found within ${length(lastRadius)}.` : places.length > 0 ? `${places.length} found within ${length(lastRadius)}` : ''
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 173,
                        columnNumber: 22
                    }, this),
                    category === 'emergency' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "notice",
                        children: "These are hospital candidates. Emergency services and operating hours are unverified."
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 178,
                        columnNumber: 38
                    }, this),
                    places.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "google-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "facility-list",
                                children: places.map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        id: `place-${place.id}`,
                                        tabIndex: -1,
                                        className: pickedPlaceId === place.id ? 'facility-selected' : undefined,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: place.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    length((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMeters"])(property.location, place.location)),
                                                    " straight-line distance"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this),
                                            place.attributions.map((source, index)=>{
                                                const url = attributionUri(source.providerUri);
                                                return url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: source.provider
                                                }, index, false, {
                                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 30
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: source.provider
                                                }, index, false, {
                                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 113
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "light",
                                                type: "button",
                                                onClick: ()=>void showRoute(place, 'WALK'),
                                                children: "Show route"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, place.id, true, {
                                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                        lineNumber: 181,
                                        columnNumber: 34
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "map-credit",
                                translate: "no",
                                children: "Google Maps"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 179,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 161,
                columnNumber: 32
            }, this),
            tab === 'Routes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: destination ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                property.title,
                                " to ",
                                destination.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Travel mode",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: mode,
                                    onChange: (event)=>setMode(event.target.value),
                                    children: Object.entries(modes).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: value,
                                            children: label
                                        }, value, false, {
                                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                            lineNumber: 200,
                                            columnNumber: 62
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: loading === 'route',
                            onClick: ()=>void showRoute(destination, mode),
                            children: "Get route"
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        loading === 'route' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            children: "Finding a route…"
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                            lineNumber: 204,
                            columnNumber: 35
                        }, this),
                        route === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            children: "No route was returned for this mode. Try another travel mode."
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                            lineNumber: 205,
                            columnNumber: 30
                        }, this),
                        route && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "google-content journey-details",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        modes[route.mode],
                                        " · ",
                                        length(route.distanceMeters),
                                        " · about ",
                                        Math.max(1, Math.round(route.durationSeconds / 60)),
                                        " min"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Estimated travel time. ",
                                        [
                                            'WALK',
                                            'TWO_WHEELER'
                                        ].includes(route.mode) && 'This route may omit suitable paths or road restrictions.'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: sourceLink(property, destination, route.mode),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Open directions in Google Maps"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                mapsKey && route.path.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "light",
                                    type: "button",
                                    onClick: ()=>onExplore({
                                            ...route,
                                            destination,
                                            category
                                        }),
                                    children: "Explore streets along route"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                    lineNumber: 210,
                                    columnNumber: 50
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$route$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutePreview"], {
                                    path: route.path,
                                    onPosition: setPreviewPoint
                                }, `${destination.id}:${route.mode}`, false, {
                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "map-credit",
                                    translate: "no",
                                    children: "Google Maps"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                            lineNumber: 206,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                    lineNumber: 196,
                    columnNumber: 24
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Select a nearby place in Essentials to see how to get there."
                }, void 0, false, {
                    fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                    lineNumber: 214,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 195,
                columnNumber: 28
            }, this),
            tab === 'Compare' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        disabled: !listed && shortlist.length >= 3,
                        onClick: ()=>toggleShortlist(property),
                        children: listed ? 'Remove this home' : 'Add this home to comparison'
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$property$2d$comparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyComparison"], {
                        homes: shortlist,
                        evidence: evidence,
                        onSelect: selectHome,
                        onRemove: toggleShortlist
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
                lineNumber: 216,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/neighborhood/neighborhood-explorer.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(NeighborhoodExplorer, "9CM2l6/7VasWpiIdTVSj8Or3QVw=");
_c = NeighborhoodExplorer;
var _c;
__turbopack_context__.k.register(_c, "NeighborhoodExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/property-comparison.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyComparison",
    ()=>PropertyComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/property-details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$route$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/route-evidence.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PropertyComparison({ homes, evidence, onSelect, onRemove }) {
    _s();
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    homes.length,
                    " of 3 homes selected"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            homes.length < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Add two homes to compare their listing details and checked journeys."
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                lineNumber: 19,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "comparison-list",
                children: homes.map((home)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: home.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listingPrice"])(home)
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                lineNumber: 22,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light",
                                        type: "button",
                                        onClick: ()=>onSelect(home.id),
                                        children: "View home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light",
                                        type: "button",
                                        "aria-label": `Remove ${home.title}`,
                                        onClick: ()=>onRemove(home),
                                        children: "Remove"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, home.id, true, {
                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                        lineNumber: 21,
                        columnNumber: 28
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: homes.length < 2,
                onClick: ()=>dialog.current?.showModal(),
                children: "Compare selected homes"
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialog,
                className: "comparison-dialog",
                "aria-labelledby": "comparison-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "title-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "comparison-heading",
                                children: "Compare homes"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                lineNumber: 31,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                onClick: ()=>dialog.current?.close(),
                                children: "Close comparison"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                lineNumber: 31,
                                columnNumber: 85
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Listing facts and journeys checked during this visit. Routes are estimates at the displayed check time."
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "comparison-columns",
                        style: {
                            gridTemplateColumns: `repeat(${homes.length}, minmax(0, 1fr))`
                        },
                        children: homes.map((home)=>{
                            const routes = evidence.filter((route)=>route.propertyId === home.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "comparison-home",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: home.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listingPrice"])(home)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 37,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertySummary"])(home)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 37,
                                        columnNumber: 73
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: home.coordinateQuality === 'verified_entrance' ? 'Verified entrance' : 'Approximate or unverified entrance'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            home.source.synthetic && 'Sample listing · ',
                                            home.source.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Checked journeys"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    routes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No routes checked for this home yet."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 41,
                                        columnNumber: 39
                                    }, this),
                                    routes.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "comparison-route",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: route.destinationName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        route.category ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"][route.category] : 'Selected destination',
                                                        " · ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$route$2d$evidence$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["travelNames"][route.mode]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        (route.distanceMeters / 1000).toFixed(2),
                                                        " km · about ",
                                                        Math.max(1, Math.round(route.durationSeconds / 60)),
                                                        " min"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Estimated · checked ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                            dateTime: route.checkedAt,
                                                            children: new Date(route.checkedAt).toLocaleTimeString([], {
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, `${route.destinationId}:${route.mode}`, true, {
                                            fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                            lineNumber: 42,
                                            columnNumber: 36
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Evidence gaps"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Office commute, emergency capability and other unrequested journeys remain unknown."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light",
                                        type: "button",
                                        onClick: ()=>{
                                            dialog.current?.close();
                                            onSelect(home.id);
                                        },
                                        children: "Show home on map"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, home.id, true, {
                                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                                lineNumber: 36,
                                columnNumber: 20
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    homes.some((home)=>evidence.some((route)=>route.propertyId === home.id)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "map-credit",
                        translate: "no",
                        children: "Route information from Google Maps"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                        lineNumber: 54,
                        columnNumber: 86
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/neighborhood/property-comparison.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(PropertyComparison, "XgwKeSAsoUKlFtTyP6HNHe9gHWc=");
_c = PropertyComparison;
var _c;
__turbopack_context__.k.register(_c, "PropertyComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/route-evidence.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "travelNames",
    ()=>travelNames
]);
const travelNames = {
    WALK: 'Walking',
    TWO_WHEELER: 'Motorized two-wheeler',
    DRIVE: 'Car',
    TRANSIT: 'Public transit'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/route-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoutePreview",
    ()=>RoutePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/geometry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RoutePreview({ path, onPosition }) {
    _s();
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [distance, setDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cumulative = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RoutePreview.useMemo[cumulative]": ()=>{
            let meters = 0;
            return path.map({
                "RoutePreview.useMemo[cumulative]": (point, index)=>{
                    if (index > 0) meters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMeters"])(path[index - 1], point);
                    return meters;
                }
            }["RoutePreview.useMemo[cumulative]"]);
        }
    }["RoutePreview.useMemo[cumulative]"], [
        path
    ]);
    const total = cumulative.at(-1) ?? 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutePreview.useEffect": ()=>({
                "RoutePreview.useEffect": ()=>onPosition(undefined)
            })["RoutePreview.useEffect"]
    }["RoutePreview.useEffect"], [
        onPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutePreview.useEffect": ()=>{
            setDistance(0);
            setPlaying(false);
        }
    }["RoutePreview.useEffect"], [
        path
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutePreview.useEffect": ()=>{
            if (path.length === 0) return;
            const end = cumulative.findIndex({
                "RoutePreview.useEffect.end": (meters)=>meters >= distance
            }["RoutePreview.useEffect.end"]);
            const index = end < 0 ? path.length - 1 : end;
            const from = path[Math.max(0, index - 1)];
            const to = path[index];
            const start = cumulative[Math.max(0, index - 1)];
            const segment = cumulative[index] - start;
            const ratio = segment > 0 ? Math.max(0, Math.min(1, (distance - start) / segment)) : 0;
            onPosition({
                lat: from.lat + (to.lat - from.lat) * ratio,
                lng: from.lng + (to.lng - from.lng) * ratio
            });
        }
    }["RoutePreview.useEffect"], [
        distance,
        cumulative,
        path,
        onPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutePreview.useEffect": ()=>{
            if (!playing) return;
            // A fixed visual playback speed. The provider's ETA is displayed separately.
            const tick = setInterval({
                "RoutePreview.useEffect.tick": ()=>setDistance({
                        "RoutePreview.useEffect.tick": (current)=>Math.min(total, current + total / 200)
                    }["RoutePreview.useEffect.tick"])
            }["RoutePreview.useEffect.tick"], 100);
            return ({
                "RoutePreview.useEffect": ()=>clearInterval(tick)
            })["RoutePreview.useEffect"];
        }
    }["RoutePreview.useEffect"], [
        playing,
        total
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutePreview.useEffect": ()=>{
            if (distance >= total) setPlaying(false);
        }
    }["RoutePreview.useEffect"], [
        distance,
        total
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "route-preview",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Animated route preview · playback speed is illustrative."
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/route-preview.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("progress", {
                "aria-label": "Route preview progress",
                max: Math.max(1, total),
                value: distance
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/route-preview.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        disabled: total === 0,
                        onClick: ()=>{
                            if (distance >= total) setDistance(0);
                            setPlaying((current)=>!current);
                        },
                        children: playing ? 'Pause map preview' : 'Play map preview'
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/route-preview.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: ()=>{
                            setPlaying(false);
                            setDistance(0);
                        },
                        children: "Restart"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/route-preview.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/route-preview.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/neighborhood/route-preview.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(RoutePreview, "g0wl5y+lueHUSd9RDNj58e84Oo0=");
_c = RoutePreview;
var _c;
__turbopack_context__.k.register(_c, "RoutePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchError",
    ()=>SearchError,
    "fetchProperties",
    ()=>fetchProperties,
    "fetchProperty",
    ()=>fetchProperty,
    "propertySchema",
    ()=>propertySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .iso>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$tuple$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .tuple>");
;
;
const propertySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        'apartment',
        'house',
        'townhouse'
    ]),
    bedrooms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().nonnegative(),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.datetime(),
        synthetic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean()
    }),
    intent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        'rent',
        'buy'
    ]).nullable(),
    priceInr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nonnegative().nullable(),
    locality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    coordinateQuality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        'verified_entrance',
        'approximate',
        'unknown'
    ]),
    listedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.datetime(),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        lat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
        lng: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number()
    })
});
const searchResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(propertySchema),
    boundary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        polygon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$tuple$3e$__["z"].tuple([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number()
        ])).min(4).max(501)
    }).optional(),
    page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        nextCursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable()
    })
});
class SearchError extends Error {
    status;
    constructor(status){
        super('Property search failed'), this.status = status;
    }
}
async function fetchProperties(filters, cursor, signal) {
    const params = new URLSearchParams(filters);
    if (cursor) params.set('cursor', cursor);
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/v1/properties/search?${params}`, {
        cache: 'no-store',
        signal
    });
    if (!response.ok) throw new SearchError(response.status);
    return searchResponse.parse(await response.json());
}
async function fetchProperty(id, signal) {
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/v1/properties/${encodeURIComponent(id)}`, {
        signal
    });
    if (!response.ok) throw new SearchError(response.status);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        data: propertySchema
    }).parse(await response.json()).data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/area.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cityView",
    ()=>cityView,
    "initialRadius",
    ()=>initialRadius,
    "numericQueryValue",
    ()=>numericQueryValue,
    "presets",
    ()=>presets
]);
const cityView = {
    lat: 12.9716,
    lng: 77.5946
};
const initialRadius = 3;
const presets = [
    1,
    3,
    5,
    10
];
function numericQueryValue(value) {
    return value.toFixed(6).replace(/\.?0+$/, '');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/anchor-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnchorPicker",
    ()=>AnchorPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .number>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            lat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().min(-90).max(90),
            lng: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().min(-180).max(180)
        }),
        attributions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
            providerUri: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
        }))
    }))
});
function AnchorPicker({ onPick, onClear, selectedLabel, initialQuery = '', label = 'Location, building or landmark', searchButtonLabel = 'Find location' }) {
    _s();
    const inputId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnchorPicker.useEffect": ()=>({
                "AnchorPicker.useEffect": ()=>active.current?.abort()
            })["AnchorPicker.useEffect"]
    }["AnchorPicker.useEffect"], []);
    function changeText(value) {
        active.current?.abort();
        setText(value);
        setResults(undefined);
        setSelectedId(undefined);
        setLoading(false);
        setError('');
        onClear();
    }
    async function search(event) {
        event.preventDefault();
        active.current?.abort();
        const request = new AbortController();
        active.current = request;
        onClear();
        setSelectedId(undefined);
        setLoading(true);
        setError('');
        setResults(undefined);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/api/v1/locations/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: text.trim()
                }),
                cache: 'no-store',
                signal: AbortSignal.any([
                    request.signal,
                    AbortSignal.timeout(12000)
                ])
            });
            if (!response.ok) {
                const data = await response.json().catch(()=>null);
                const message = data?.error?.code === 'PROVIDER_DISABLED' ? 'Location search is unavailable right now. You can choose a point on the map.' : response.status === 429 ? 'The location lookup limit was reached. Try again later.' : 'Location search is temporarily unavailable. Try again or choose a point on the map.';
                if (!request.signal.aborted) setError(message);
                return;
            }
            const data = payload.parse(await response.json()).data;
            if (!request.signal.aborted) setResults(data);
        } catch  {
            if (!request.signal.aborted) setError('Location search is temporarily unavailable. Try again or choose a point on the map.');
        } finally{
            if (!request.signal.aborted) setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "location-search",
        "aria-label": "Find a location",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "corner-form",
                onSubmit: search,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: inputId,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: inputId,
                        type: "search",
                        required: true,
                        minLength: 3,
                        maxLength: 100,
                        value: selectedLabel || text,
                        onChange: (event)=>changeText(event.target.value),
                        placeholder: "e.g. Bellandur, EcoSpace or a building name",
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    selectedLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: ()=>changeText(''),
                        children: "Change location"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        children: loading ? 'Finding places…' : searchButtonLabel
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Looking up matching places…"
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                lineNumber: 88,
                columnNumber: 19
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                lineNumber: 89,
                columnNumber: 17
            }, this),
            results?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No matching locations. Add a city or street and try again."
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                lineNumber: 90,
                columnNumber: 33
            }, this),
            results && results.length > 0 && !selectedLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "google-content place-suggestions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Choose the place you meant."
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "facility-list",
                        "aria-label": "Matching locations",
                        children: results.map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "light",
                                        "aria-pressed": selectedId === place.id,
                                        onClick: ()=>{
                                            setSelectedId(place.id);
                                            setText(place.name);
                                            onPick(place.location, place.name);
                                        },
                                        children: place.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    place.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: place.address
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                                        lineNumber: 100,
                                        columnNumber: 31
                                    }, this),
                                    place.attributions.map((source, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: source.provider
                                        }, index, false, {
                                            fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                                            lineNumber: 101,
                                            columnNumber: 56
                                        }, this))
                                ]
                            }, place.id, true, {
                                fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "map-credit",
                        translate: "no",
                        children: "Google Maps"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
                lineNumber: 91,
                columnNumber: 59
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/anchor-picker.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(AnchorPicker, "uQjlcPpeefORycXZ7yuUCbKkA6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = AnchorPicker;
var _c;
__turbopack_context__.k.register(_c, "AnchorPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/area-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaMap",
    ()=>AreaMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/area.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/map-legend.tsx [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const GoogleMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/features/property-search/components/google-map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((module)=>module.GoogleMap), {
    loadableGenerated: {
        modules: [
            "[project]/src/features/property-search/components/google-map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "map-loading",
            role: "status",
            children: "Loading map…"
        }, void 0, false, {
            fileName: "[project]/src/features/property-search/components/area-map.tsx",
            lineNumber: 12,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = GoogleMap;
const GlobeMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/features/property-search/components/globe-map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((module)=>module.GlobeMap), {
    loadableGenerated: {
        modules: [
            "[project]/src/features/property-search/components/globe-map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "map-loading",
            role: "status",
            children: "Opening 3D view…"
        }, void 0, false, {
            fileName: "[project]/src/features/property-search/components/area-map.tsx",
            lineNumber: 16,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = GlobeMap;
const mapsKey = ("TURBOPACK compile-time value", "AIzaSyD7rqUpTzUpEbxm-Xc7ikltFJGzOhd92Qk");
const mapId = ("TURBOPACK compile-time value", "DEMO_MAP_ID");
function CoordinateView(props) {
    _s();
    const { area, pendingPin, draft, drawing, properties, selectedId, onPick, onSelect } = props;
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const polygon = area?.kind === 'polygon' ? area.points : [];
    const polygonCenter = polygon.length ? polygon.reduce((sum, point)=>({
            lat: sum.lat + point.lat / polygon.length,
            lng: sum.lng + point.lng / polygon.length
        }), {
        lat: 0,
        lng: 0
    }) : null;
    const center = area?.kind === 'radius' ? area.center : polygonCenter ?? pendingPin ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cityView"];
    const latitudeScale = Math.max(.001, Math.cos(center.lat * Math.PI / 180));
    const wrappedLongitude = (lng)=>(lng - center.lng + 540) % 360 - 180;
    const halfSpan = (area?.kind === 'radius' ? area.radiusKm * 1.18 / 111.2 : polygon.length ? Math.max(...polygon.map((point)=>Math.max(Math.abs(point.lat - center.lat), Math.abs(wrappedLongitude(point.lng)) * latitudeScale))) * 1.25 : .065) / zoom;
    const project = (point)=>({
            x: 50 + 50 * wrappedLongitude(point.lng) * latitudeScale / halfSpan,
            y: 50 - 50 * (point.lat - center.lat) / halfSpan
        });
    const location = (point)=>{
        const { x, y } = project(point);
        if (x < 0 || x > 100 || y < 0 || y > 100) return null;
        return {
            left: `${x}%`,
            top: `${y}%`
        };
    };
    const clip = (points)=>`polygon(${points.map((point)=>{
            const { x, y } = project(point);
            return `${x}% ${y}%`;
        }).join(',')})`;
    function pick(event) {
        if (event.target.closest('button')) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const lng = center.lng + ((event.clientX - bounds.left) / bounds.width * 2 - 1) * halfSpan / latitudeScale;
        const lat = center.lat - ((event.clientY - bounds.top) / bounds.height * 2 - 1) * halfSpan;
        if (lat >= -90 && lat <= 90) onPick({
            lat,
            lng: (lng + 540) % 360 - 180
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "coordinate-map",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "map-caption",
                children: [
                    "Coordinate view ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Street basemap unavailable"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 71,
                        columnNumber: 50
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "coordinate-plot",
                onClick: pick,
                children: [
                    area?.kind === 'radius' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "radius-plot",
                        style: {
                            width: `${area.radiusKm / 111.2 / halfSpan * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 73,
                        columnNumber: 37
                    }, this),
                    polygon.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "polygon-plot",
                        style: {
                            clipPath: clip(polygon)
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 74,
                        columnNumber: 32
                    }, this),
                    drawing && draft.length >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "polygon-plot draft-plot",
                        style: {
                            clipPath: clip(draft)
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 75,
                        columnNumber: 42
                    }, this),
                    drawing && draft.map((point, index)=>{
                        const position = location(point);
                        return position && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            className: "plot-point",
                            style: position,
                            children: index + 1
                        }, index, false, {
                            fileName: "[project]/src/features/property-search/components/area-map.tsx",
                            lineNumber: 78,
                            columnNumber: 30
                        }, this);
                    }),
                    pendingPin && location(pendingPin) && !drawing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "plot-point",
                        "aria-hidden": "true",
                        style: location(pendingPin),
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 80,
                        columnNumber: 60
                    }, this),
                    properties.map((property)=>{
                        const position = location(property.location);
                        return position && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `map-pin ${selectedId === property.id ? 'active' : ''}`,
                            style: position,
                            "aria-label": `Select ${property.title} on map`,
                            "aria-pressed": selectedId === property.id,
                            onClick: ()=>onSelect(property.id)
                        }, property.id, false, {
                            fileName: "[project]/src/features/property-search/components/area-map.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        "aria-label": "Zoom out",
                        onClick: ()=>setZoom((current)=>Math.max(.25, current / 2)),
                        children: "−"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        "aria-label": "Zoom in",
                        onClick: ()=>setZoom((current)=>Math.min(8, current * 2)),
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: ()=>setZoom(1),
                        children: "Reset view"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapLegend"], {
                        neighborhood: props.neighborhood
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    drawing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select corners on the map to outline your search area."
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 95,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/area-map.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(CoordinateView, "fhMwrxTFvTvNHgg4SUBRiRg8zY0=");
_c2 = CoordinateView;
function AreaMap(props) {
    _s1();
    const [unavailable, setUnavailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapType, setMapType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "map-panel",
        "aria-label": "Property map",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "map-style-controls",
                children: [
                    "Map view",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        "aria-label": "Map view",
                        value: mapType,
                        disabled: !mapsKey || !mapId || unavailable,
                        onChange: (event)=>setMapType(event.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "roadmap",
                                children: "Default (Roadmap)"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "satellite",
                                children: "Satellite"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "terrain",
                                children: "Terrain"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "globe",
                                children: "3D / Globe"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/area-map.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            mapsKey && mapId && !unavailable ? mapType === 'globe' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeMap, {
                ...props,
                apiKey: mapsKey,
                onFallback: ()=>setMapType('roadmap')
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleMap, {
                ...props,
                apiKey: mapsKey,
                mapId: mapId,
                mapType: mapType,
                onError: ()=>setUnavailable(true)
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoordinateView, {
                ...props
            }, JSON.stringify(props.area), false, {
                fileName: "[project]/src/features/property-search/components/area-map.tsx",
                lineNumber: 119,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/area-map.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s1(AreaMap, "dvQlsZZj9yKfMqAiEJDPT9guZfA=");
_c3 = AreaMap;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GoogleMap");
__turbopack_context__.k.register(_c1, "GlobeMap");
__turbopack_context__.k.register(_c2, "CoordinateView");
__turbopack_context__.k.register(_c3, "AreaMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/locality-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalityPicker",
    ()=>LocalityPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const localityList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
    }))
});
function LocalityPicker({ value, onSelect, initialQuery = '' }) {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [prefix, setPrefix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [attempt, setAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalityPicker.useEffect": ()=>{
            const request = new AbortController();
            const query = prefix ? `?${new URLSearchParams({
                prefix
            })}` : '';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/v1/localities${query}`, {
                cache: 'no-store',
                signal: AbortSignal.any([
                    request.signal,
                    AbortSignal.timeout(6000)
                ])
            }).then({
                "LocalityPicker.useEffect": async (response)=>{
                    if (!response.ok) throw new Error('Could not load localities');
                    const list = localityList.parse(await response.json());
                    if (!request.signal.aborted) setResult(list.data);
                }
            }["LocalityPicker.useEffect"]).catch({
                "LocalityPicker.useEffect": ()=>{
                    if (!request.signal.aborted) setError(true);
                }
            }["LocalityPicker.useEffect"]);
            return ({
                "LocalityPicker.useEffect": ()=>request.abort()
            })["LocalityPicker.useEffect"];
        }
    }["LocalityPicker.useEffect"], [
        prefix,
        attempt
    ]);
    function lookUp(event) {
        event.preventDefault();
        setResult(null);
        setError(false);
        onSelect('');
        setPrefix(text.trim());
        setAttempt((current)=>current + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "locality-picker",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "corner-form",
                onSubmit: lookUp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Locality name",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: text,
                                maxLength: 64,
                                onChange: (event)=>{
                                    setText(event.target.value);
                                    onSelect('');
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                                lineNumber: 46,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "light",
                        children: "Find localities"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                children: "Locality lookup is unavailable. Try again or search near a pin."
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                lineNumber: 49,
                columnNumber: 16
            }, this) : !result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Looking up verified localities…"
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                lineNumber: 50,
                columnNumber: 21
            }, this) : result.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No verified locality is available. You can search near a pin or draw an area."
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                lineNumber: 51,
                columnNumber: 33
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Verified boundary",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: value,
                        onChange: (event)=>onSelect(event.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Choose a locality"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            result.map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: place.id,
                                    children: place.name
                                }, place.id, false, {
                                    fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                                    lineNumber: 55,
                                    columnNumber: 34
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
                lineNumber: 52,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/locality-picker.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(LocalityPicker, "b0QRp3FqUnnvJx70a6nMAyRiVlQ=");
_c = LocalityPicker;
var _c;
__turbopack_context__.k.register(_c, "LocalityPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/map-legend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapLegend",
    ()=>MapLegend,
    "facilityMarkers",
    ()=>facilityMarkers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/categories.ts [app-client] (ecmascript)");
;
;
const facilityMarkers = {
    hospital: {
        glyph: 'H',
        color: '#a53a45'
    },
    emergency: {
        glyph: 'E?',
        color: '#984800'
    },
    pharmacy: {
        glyph: '+',
        color: '#176856'
    },
    school: {
        glyph: 'S',
        color: '#70429a'
    },
    supermarket: {
        glyph: 'G',
        color: '#806000'
    },
    park: {
        glyph: 'P',
        color: '#35702f'
    },
    bus: {
        glyph: 'B',
        color: '#2554a4'
    },
    metro: {
        glyph: 'M',
        color: '#5146a5'
    },
    restaurant: {
        glyph: 'R',
        color: '#934719'
    },
    gym: {
        glyph: 'F',
        color: '#755144'
    }
};
function MapLegend({ neighborhood }) {
    const category = neighborhood.category;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "map-legend",
        "aria-label": "Map legend",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "legend-home",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this),
                    "Homes"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "legend-selected",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this),
                    "Selected home"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            category && neighborhood.places.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "legend-facility",
                        style: {
                            background: facilityMarkers[category].color
                        },
                        "aria-hidden": "true",
                        children: facilityMarkers[category].glyph
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    category === 'emergency' ? 'Emergency unverified' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"][category]
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                lineNumber: 23,
                columnNumber: 54
            }, this),
            neighborhood.route.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "legend-route",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                        lineNumber: 27,
                        columnNumber: 47
                    }, this),
                    "Route"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/map-legend.tsx",
                lineNumber: 27,
                columnNumber: 41
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/map-legend.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = MapLegend;
var _c;
__turbopack_context__.k.register(_c, "MapLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/map-location-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapLocationSearch",
    ()=>MapLocationSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$anchor$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/anchor-picker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MapLocationSearch({ start, destination, onPick, onPlan, compact = false }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!compact);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapLocationSearch.useEffect": ()=>setOpen(!compact)
    }["MapLocationSearch.useEffect"], [
        compact
    ]);
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('place');
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapLocationSearch.useEffect": ()=>{
            const element = root.current;
            if (!element) return;
            const stage = element.closest('.map-stage');
            const observer = new ResizeObserver({
                "MapLocationSearch.useEffect": ()=>stage?.style.setProperty('--map-search-height', `${element.getBoundingClientRect().height}px`)
            }["MapLocationSearch.useEffect"]);
            observer.observe(element);
            return ({
                "MapLocationSearch.useEffect": ()=>{
                    observer.disconnect();
                    stage?.style.removeProperty('--map-search-height');
                }
            })["MapLocationSearch.useEffect"];
        }
    }["MapLocationSearch.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: root,
        className: "map-location-search",
        "aria-label": "Search places on the map",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
            open: open,
            onToggle: (event)=>setOpen(event.currentTarget.open),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                    children: "Search Google Maps · Start / Destination"
                }, void 0, false, {
                    fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                    lineNumber: 30,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "segments",
                    "aria-label": "Use search result as",
                    children: [
                        'place',
                        'start',
                        'destination'
                    ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-pressed": target === value,
                            onClick: ()=>{
                                setTarget(value);
                                setChosen('');
                            },
                            children: value === 'place' ? 'Find a place' : value === 'start' ? 'Start' : 'Destination'
                        }, value, false, {
                            fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                            lineNumber: 32,
                            columnNumber: 66
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                    lineNumber: 31,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$anchor$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnchorPicker"], {
                    label: target === 'start' ? 'Search start on Google Maps' : target === 'destination' ? 'Search destination on Google Maps' : 'Search Google Maps',
                    searchButtonLabel: "Search map",
                    selectedLabel: chosen,
                    onClear: ()=>setChosen(''),
                    onPick: (point, label)=>{
                        onPick(target, {
                            point,
                            label
                        });
                        if (target === 'start') {
                            setTarget('destination');
                            setChosen('');
                        } else setChosen(label);
                    }
                }, target, false, {
                    fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                    lineNumber: 37,
                    columnNumber: 5
                }, this),
                (start || destination) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "map-search-endpoints",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Start:"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                                    lineNumber: 45,
                                    columnNumber: 10
                                }, this),
                                " ",
                                start?.label || 'Choose a start'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                            lineNumber: 45,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Destination:"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                                    lineNumber: 46,
                                    columnNumber: 10
                                }, this),
                                " ",
                                destination?.label || 'Choose a destination'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                            lineNumber: 46,
                            columnNumber: 7
                        }, this),
                        start && destination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onPlan,
                            children: "Plan this route"
                        }, void 0, false, {
                            fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                            lineNumber: 47,
                            columnNumber: 32
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
                    lineNumber: 44,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/property-search/components/map-location-search.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_s(MapLocationSearch, "0XoJsTJ1nKKwKEABdscn9gfQFC8=");
_c = MapLocationSearch;
var _c;
__turbopack_context__.k.register(_c, "MapLocationSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/property-details.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listingPrice",
    ()=>listingPrice,
    "propertySummary",
    ()=>propertySummary
]);
const priceFormat = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
});
function listingPrice(property) {
    if (property.priceInr === null) return 'Price unavailable';
    return priceFormat.format(property.priceInr) + (property.intent === 'rent' ? ' / month' : '');
}
function propertySummary(property) {
    return `${property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} BHK`} · ${property.locality ?? 'Locality unavailable'}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/search-assistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchAssistant",
    ()=>SearchAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .array>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    intent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        'rent',
        'buy'
    ]).nullable(),
    bedrooms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(20).nullable(),
    maxPriceInr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().positive().nullable(),
    radiusKm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().min(.1).max(25).nullable(),
    officeOrLandmark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    locality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    unverifiedRequirements: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()).max(8)
});
function SearchAssistant({ onApply }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [failure, setFailure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchAssistant.useEffect": ()=>({
                "SearchAssistant.useEffect": ()=>active.current?.abort()
            })["SearchAssistant.useEffect"]
    }["SearchAssistant.useEffect"], []);
    async function interpret(event) {
        event.preventDefault();
        active.current?.abort();
        const request = new AbortController();
        active.current = request;
        setLoading(true);
        setFailure('');
        setDraft(undefined);
        setEditing(false);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/api/v1/search/interpret', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query
                }),
                cache: 'no-store',
                signal: AbortSignal.any([
                    request.signal,
                    AbortSignal.timeout(12000)
                ])
            });
            if (!response.ok) throw new Error('Assistant unavailable');
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                data: schema
            }).parse(await response.json());
            if (!request.signal.aborted) setDraft(parsed.data);
        } catch  {
            if (!request.signal.aborted) setFailure('Search assistance is unavailable. Search by location or building name and adjust the filters below.');
        } finally{
            if (!request.signal.aborted) setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "search-assistant",
        "aria-label": "Describe your search",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "corner-form",
                onSubmit: interpret,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "What are you looking for?",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                minLength: 5,
                                maxLength: 600,
                                rows: 3,
                                placeholder: "1 BHK rental up to ₹25,000 near my Bellandur office",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "submit",
                        disabled: loading,
                        children: "Find matching filters"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Interpreting your search…"
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                lineNumber: 62,
                columnNumber: 19
            }, this),
            failure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                role: "alert",
                children: failure
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                lineNumber: 63,
                columnNumber: 19
            }, this),
            draft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "interpretation",
                        "aria-label": "Suggested filters",
                        children: [
                            draft.intent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>setEditing(true),
                                    "aria-label": "Edit interpreted listing type",
                                    children: draft.intent === 'rent' ? 'Rent' : 'Buy'
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                    lineNumber: 66,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 66,
                                columnNumber: 28
                            }, this),
                            draft.bedrooms !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>setEditing(true),
                                    "aria-label": "Edit interpreted bedrooms",
                                    children: [
                                        draft.bedrooms,
                                        " BHK"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                    lineNumber: 67,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 67,
                                columnNumber: 39
                            }, this),
                            draft.maxPriceInr !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>setEditing(true),
                                    "aria-label": "Edit interpreted budget",
                                    children: [
                                        "Up to ₹",
                                        draft.maxPriceInr.toLocaleString('en-IN')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                    lineNumber: 68,
                                    columnNumber: 46
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 68,
                                columnNumber: 42
                            }, this),
                            draft.radiusKm !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>setEditing(true),
                                    "aria-label": "Edit interpreted radius",
                                    children: [
                                        draft.radiusKm,
                                        " km"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                    lineNumber: 69,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 69,
                                columnNumber: 39
                            }, this),
                            draft.locality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>setEditing(true),
                                    "aria-label": "Edit interpreted locality",
                                    children: draft.locality
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                    lineNumber: 70,
                                    columnNumber: 34
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 70,
                                columnNumber: 30
                            }, this),
                            draft.officeOrLandmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>setEditing(true),
                                    "aria-label": "Edit interpreted landmark",
                                    children: draft.officeOrLandmark
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                    lineNumber: 71,
                                    columnNumber: 42
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 71,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "light",
                        "aria-expanded": editing,
                        onClick: ()=>setEditing((current)=>!current),
                        children: editing ? 'Close filter editor' : 'Edit suggested filters'
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "corner-form",
                        "aria-label": "Edit suggested filters",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field-pair",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Suggested listing type",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: draft.intent ?? '',
                                                onChange: (event)=>setDraft({
                                                        ...draft,
                                                        intent: event.target.value === 'rent' ? 'rent' : event.target.value === 'buy' ? 'buy' : null
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "rent",
                                                        children: "Rent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 44
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "buy",
                                                        children: "Buy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 78
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                                lineNumber: 76,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Suggested bedrooms",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                max: "20",
                                                step: "1",
                                                value: draft.bedrooms ?? '',
                                                onChange: (event)=>setDraft({
                                                        ...draft,
                                                        bedrooms: event.target.value === '' ? null : Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                                lineNumber: 79,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Suggested maximum price (₹)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                step: "1",
                                                value: draft.maxPriceInr ?? '',
                                                onChange: (event)=>setDraft({
                                                        ...draft,
                                                        maxPriceInr: event.target.value === '' ? null : Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                                lineNumber: 80,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Suggested radius (km)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0.1",
                                                max: "25",
                                                step: "0.1",
                                                value: draft.radiusKm ?? '',
                                                onChange: (event)=>setDraft({
                                                        ...draft,
                                                        radiusKm: event.target.value === '' ? null : Number(event.target.value)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                                lineNumber: 81,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Suggested office or landmark",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        maxLength: 200,
                                        value: draft.officeOrLandmark ?? '',
                                        onChange: (event)=>setDraft({
                                                ...draft,
                                                officeOrLandmark: event.target.value || null
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                        lineNumber: 83,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Suggested locality",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        maxLength: 200,
                                        value: draft.locality ?? '',
                                        onChange: (event)=>setDraft({
                                                ...draft,
                                                locality: event.target.value || null
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                        lineNumber: 84,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Listing and area filters are required for matching. Additional needs below remain unverified. Confirm any suggested location before searching."
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this),
                    draft.unverifiedRequirements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notice",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "These requirements still need verification before you can treat a property as a match."
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: draft.unverifiedRequirements.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: entry
                                    }, index, false, {
                                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                        lineNumber: 89,
                                        columnNumber: 67
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 87,
                        columnNumber: 53
                    }, this),
                    !schema.safeParse(draft).success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "notice",
                        role: "alert",
                        children: "Check the suggested numbers. Use 0–20 bedrooms, a positive whole-number price and a radius of 0.1–25 km."
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 91,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        disabled: !schema.safeParse(draft).success,
                        onClick: ()=>onApply(draft),
                        children: "Use these filters"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
                lineNumber: 64,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/search-assistant.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(SearchAssistant, "9768VS7EXWndXOt5LK7dTkoAgvE=");
_c = SearchAssistant;
var _c;
__turbopack_context__.k.register(_c, "SearchAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/search-filters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchFilters",
    ()=>SearchFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/area.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$search$2d$assistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/search-assistant.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$anchor$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/anchor-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$locality$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/locality-picker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SearchFilters({ mode, setMode, pin, setPin, points, changePoints, onSearch, expand, busy }) {
    _s();
    const advanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [acknowledged, setAcknowledged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestion, setSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [locality, setLocality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [radius, setRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialRadius"]);
    const [entry, setEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('location');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function apply(draft) {
        setSuggestion(draft);
        if (advanced.current) advanced.current.open = true;
        setAcknowledged(false);
        for (const [key, value] of Object.entries({
            intent: draft.intent,
            bedrooms: draft.bedrooms,
            maxPriceInr: draft.maxPriceInr
        })){
            const field = form.current?.elements.namedItem(key);
            if (value !== null && (field instanceof HTMLInputElement || field instanceof HTMLSelectElement)) field.value = String(value);
        }
        if (draft.radiusKm !== null) setRadius(Math.round(draft.radiusKm * 10) / 10);
        if (draft.locality) {
            setLocality('');
            setMode('locality');
        } else if (draft.officeOrLandmark) {
            setPin({
                lat: '',
                lng: '',
                label: ''
            });
            setEntry('location');
            setMode('radius');
        }
    }
    function search(radiusOverride) {
        if (!form.current) return;
        if (!form.current.checkValidity()) {
            if (advanced.current) advanced.current.open = true;
            form.current.reportValidity();
            return;
        }
        const filters = new URLSearchParams();
        for (const [key, value] of new FormData(form.current)){
            if (typeof value === 'string' && value) filters.set(key, value);
        }
        let area;
        if (mode === 'radius') {
            if (pin.lat === '' || pin.lng === '' || !Number.isFinite(Number(pin.lat)) || !Number.isFinite(Number(pin.lng))) {
                setError('Find a location and choose the matching place, or select a point on the map.');
                return;
            }
            const center = {
                lat: Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(Number(pin.lat))),
                lng: Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(Number(pin.lng)))
            };
            const distance = radiusOverride ?? radius;
            area = {
                kind: 'radius',
                center,
                radiusKm: distance
            };
            filters.set('lat', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(center.lat));
            filters.set('lng', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(center.lng));
            filters.set('radiusKm', (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(distance));
        } else if (mode === 'locality') {
            if (!locality) {
                setError('Choose a verified locality before searching.');
                return;
            }
            area = {
                kind: 'locality',
                id: locality
            };
            filters.set('localityId', locality);
        } else {
            if (points.length < 3) {
                setError('Add at least three corners to draw the search area.');
                return;
            }
            area = {
                kind: 'polygon',
                points
            };
            filters.set('polygon', JSON.stringify(points.map(({ lat, lng })=>[
                    lng,
                    lat
                ])));
        }
        if (suggestion?.unverifiedRequirements.length && !acknowledged) {
            setError('Confirm that you want to search using only the verified filters below.');
            return;
        }
        if (filters.has('maxPriceInr') && !filters.has('intent')) {
            setError('Choose rent or buy to apply a maximum price.');
            return;
        }
        setError('');
        filters.set('limit', '3');
        onSearch(filters, area);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "filters",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "segments",
                "aria-label": "Search input",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": entry === 'location',
                        onClick: ()=>setEntry('location'),
                        children: "Place name"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": entry === 'description',
                        onClick: ()=>setEntry('description'),
                        children: "Describe search"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            entry === 'description' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$search$2d$assistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchAssistant"], {
                onApply: apply
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                lineNumber: 112,
                columnNumber: 34
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$anchor$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnchorPicker"], {
                initialQuery: suggestion?.officeOrLandmark ?? '',
                selectedLabel: pin.label,
                onClear: ()=>{
                    setPin({
                        lat: '',
                        lng: '',
                        label: ''
                    });
                    setError('');
                },
                onPick: (point, label)=>{
                    setPin({
                        lat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(point.lat),
                        lng: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(point.lng),
                        label
                    });
                    setError('');
                    setMode('radius');
                }
            }, `anchor:${suggestion?.officeOrLandmark ?? ''}`, false, {
                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "segments",
                "aria-label": "Search area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": mode === 'locality',
                        onClick: ()=>{
                            setError('');
                            setMode('locality');
                        },
                        children: "Locality"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": mode === 'radius',
                        onClick: ()=>{
                            setError('');
                            setMode('radius');
                        },
                        children: "Near a place"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-pressed": mode === 'polygon',
                        onClick: ()=>{
                            setError('');
                            setMode('polygon');
                        },
                        children: "Draw"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            mode === 'locality' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$locality$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalityPicker"], {
                initialQuery: suggestion?.locality ?? '',
                value: locality,
                onSelect: setLocality
            }, `locality:${suggestion?.locality ?? ''}`, false, {
                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                lineNumber: 125,
                columnNumber: 31
            }, this),
            mode === 'polygon' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "corner-form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select at least three corners on the map to draw your search area. This boundary replaces the radius."
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-controls",
                        children: points.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>changePoints(points.slice(0, -1)),
                                    children: "Undo corner"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: ()=>changePoints([]),
                                    children: "Clear area"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                            lineNumber: 130,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "status",
                        children: [
                            points.length,
                            " corners added"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                ref: form,
                className: "search-form",
                noValidate: true,
                onSubmit: (event)=>{
                    event.preventDefault();
                    search();
                },
                children: [
                    mode === 'radius' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "selected-location",
                            role: "status",
                            children: pin.label ? `Search around ${pin.label}` : 'Choose a location above or select a point on the map.'
                        }, void 0, false, {
                            fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 139,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "advanced-filters",
                        ref: advanced,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "Filters & radius"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "advanced-fields",
                                children: [
                                    mode === 'radius' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Search radius ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "range-label",
                                                        children: [
                                                            radius,
                                                            " km"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0.1",
                                                        max: "25",
                                                        step: "0.1",
                                                        value: radius,
                                                        onChange: (event)=>setRadius(Number(event.target.value))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-controls",
                                                "aria-label": "Radius presets",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presets"].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "light",
                                                        "aria-pressed": value === radius,
                                                        onClick: ()=>setRadius(value),
                                                        children: [
                                                            value,
                                                            " km"
                                                        ]
                                                    }, value, true, {
                                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 39
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                        lineNumber: 147,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field-pair",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Listing type",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "intent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 52
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "rent",
                                                                children: "Rent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 81
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "buy",
                                                                children: "Buy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 115
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                lineNumber: 156,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Bedrooms (BHK)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "bedrooms",
                                                        min: "0",
                                                        max: "20",
                                                        step: "1",
                                                        placeholder: "Any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                lineNumber: 157,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Maximum price (₹)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "maxPriceInr",
                                                        min: "1",
                                                        max: "100000000000",
                                                        step: "1",
                                                        placeholder: "Any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                lineNumber: 158,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Property type",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "type",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Any"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "apartment",
                                                                children: "Apartment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 80
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "house",
                                                                children: "House"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 124
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "townhouse",
                                                                children: "Townhouse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 160
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                                lineNumber: 159,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                        lineNumber: 155,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    Boolean(suggestion?.unverifiedRequirements.length) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "constraint-confirm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: acknowledged,
                                onChange: (event)=>setAcknowledged(event.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            "Search using the manual filters only. The additional requirements are unverified."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 163,
                        columnNumber: 64
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-error",
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 167,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        "aria-busy": busy,
                        children: "Search properties"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    expand && mode === 'radius' && radius < 25 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "light",
                        onClick: ()=>{
                            const next = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presets"].find((value)=>value > radius) ?? 25;
                            setRadius(next);
                            search(next);
                        },
                        children: "Expand area"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                        lineNumber: 169,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/search-filters.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/search-filters.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(SearchFilters, "IKWErnTKYveYbySsY+dBiGiiJnc=");
_c = SearchFilters;
var _c;
__turbopack_context__.k.register(_c, "SearchFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/sheet-handle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SheetHandle",
    ()=>SheetHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SheetHandle({ panel, height, onHeight }) {
    _s();
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const constrain = (value)=>Math.max(35, Math.min(90, value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sheet-handle",
        role: "slider",
        tabIndex: 0,
        "aria-label": "Property panel height",
        "aria-orientation": "vertical",
        "aria-valuemin": 35,
        "aria-valuemax": 90,
        "aria-valuenow": Math.round(height),
        "aria-valuetext": `${Math.round(height)} percent of map area`,
        onPointerDown: (event)=>{
            drag.current = {
                y: event.clientY,
                height
            };
            event.currentTarget.setPointerCapture(event.pointerId);
        },
        onPointerMove: (event)=>{
            const areaHeight = panel.current?.parentElement?.clientHeight;
            if (!drag.current || !areaHeight) return;
            onHeight(constrain(drag.current.height + (drag.current.y - event.clientY) / areaHeight * 100));
        },
        onPointerUp: (event)=>{
            drag.current = null;
            if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        },
        onPointerCancel: ()=>{
            drag.current = null;
        },
        onKeyDown: (event)=>{
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault();
                onHeight(constrain(height + (event.key === 'ArrowUp' ? 10 : -10)));
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/features/property-search/components/sheet-handle.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/property-search/components/sheet-handle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(SheetHandle, "gIddYogjP+VVdD1QmmHwmANJEG4=");
_c = SheetHandle;
var _c;
__turbopack_context__.k.register(_c, "SheetHandle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/property-explorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyExplorer",
    ()=>PropertyExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$appearance$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/appearance/appearance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$journey$2d$planner$2f$journey$2d$planner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/journey-planner/journey-planner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/geometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/area.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$area$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/area-map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$location$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/map-location-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/property-details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$sheet$2d$handle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/sheet-handle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$search$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/search-filters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$neighborhood$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/neighborhood-explorer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$use$2d$property$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/use-property-search.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SurroundingsWalk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/features/neighborhood/surroundings-walk.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((module)=>module.SurroundingsWalk), {
    loadableGenerated: {
        modules: [
            "[project]/src/features/neighborhood/surroundings-walk.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "walk-loading",
            role: "status",
            children: "Opening your surroundings…"
        }, void 0, false, {
            fileName: "[project]/src/features/property-search/property-explorer.tsx",
            lineNumber: 23,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0))
});
_c = SurroundingsWalk;
function PropertyExplorer({ initialProperty, embedded = false }) {
    _s();
    const resultBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const detailPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [walk, setWalk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [panel, setPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('homes');
    const [journeyMapPoint, setJourneyMapPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [mapStart, setMapStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [mapDestination, setMapDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [searchSettingsOpen, setSearchSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sheetHeight, setSheetHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [evidence, setEvidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [walkMapView, setWalkMapView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [walkPosition, setWalkPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('radius');
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProperty ? {
        lat: String(initialProperty.location.lat),
        lng: String(initialProperty.location.lng),
        label: initialProperty.title
    } : {
        lat: '',
        lng: '',
        label: ''
    });
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeArea, setActiveArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [requestedArea, setRequestedArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [boundary, setBoundary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProperty?.id);
    const [pickedPlace, setPickedPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [overlay, setOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        places: [],
        route: []
    });
    const previousOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        places: [],
        route: []
    });
    const [shortlist, setShortlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('map');
    const { state, search, next, retry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$use$2d$property$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertySearch"])();
    const selected = (initialProperty?.id === selection ? initialProperty : undefined) ?? state.results.find((result)=>result.id === selection) ?? shortlist.find((result)=>result.id === selection);
    const mapProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PropertyExplorer.useMemo[mapProperties]": ()=>initialProperty && state.results.length === 0 ? [
                initialProperty
            ] : state.results
    }["PropertyExplorer.useMemo[mapProperties]"], [
        initialProperty,
        state.results
    ]);
    const pendingPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PropertyExplorer.useMemo[pendingPin]": ()=>mode === 'radius' && pin.lat !== '' && pin.lng !== '' ? {
                lat: Number(pin.lat),
                lng: Number(pin.lng)
            } : null
    }["PropertyExplorer.useMemo[pendingPin]"], [
        mode,
        pin.lat,
        pin.lng
    ]);
    const plannerStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PropertyExplorer.useMemo[plannerStart]": ()=>mapStart ?? (pendingPin ? {
                point: pendingPin,
                label: pin.label
            } : selected ? {
                point: selected.location,
                label: selected.title
            } : undefined)
    }["PropertyExplorer.useMemo[plannerStart]"], [
        mapStart,
        selected,
        pendingPin,
        pin.label
    ]);
    const plannerDestination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PropertyExplorer.useMemo[plannerDestination]": ()=>mapDestination ?? (selected && pendingPin && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMeters"])(selected.location, pendingPin) > 5 ? {
                point: selected.location,
                label: selected.title
            } : undefined)
    }["PropertyExplorer.useMemo[plannerDestination]"], [
        mapDestination,
        selected,
        pendingPin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertyExplorer.useEffect": ()=>{
            if (!selection) return;
            const card = resultBody.current?.querySelector('[aria-pressed="true"]');
            card?.scrollIntoView({
                block: 'nearest'
            });
            detailPanel.current?.scrollTo({
                top: 0
            });
        }
    }["PropertyExplorer.useEffect"], [
        selection
    ]);
    const noResults = state.status === 'done' && state.results.length === 0;
    const recordEvidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PropertyExplorer.useCallback[recordEvidence]": (route)=>{
            setEvidence({
                "PropertyExplorer.useCallback[recordEvidence]": (current)=>[
                        ...current.filter({
                            "PropertyExplorer.useCallback[recordEvidence]": (item)=>!(item.propertyId === route.propertyId && item.destinationId === route.destinationId && item.mode === route.mode)
                        }["PropertyExplorer.useCallback[recordEvidence]"]),
                        route
                    ]
            }["PropertyExplorer.useCallback[recordEvidence]"]);
        }
    }["PropertyExplorer.useCallback[recordEvidence]"], []);
    function selectHome(id) {
        setMapStart(undefined);
        setMapDestination(undefined);
        setSheetHeight(50);
        setPickedPlace(undefined);
        setWalk(null);
        setSelection(id);
        setView('map');
    }
    function exploreSurroundings(journey) {
        const point = selected?.location ?? pendingPin;
        if (!point) return;
        setWalkPosition(undefined);
        setWalkMapView(false);
        previousOverlay.current = overlay;
        setWalk({
            point,
            title: selected?.title ?? pin.label ?? 'Selected location',
            synthetic: selected?.source.synthetic,
            propertyId: selected?.id,
            path: journey?.path,
            journey,
            initialView: 'street'
        });
        setView('map');
    }
    function previewJourney(journey) {
        setOverlay({
            places: journey ? [
                journey.destination
            ] : [],
            route: journey?.path ?? []
        });
        if (journey) setView('map');
    }
    function viewJourney(journey, origin) {
        previousOverlay.current = overlay;
        setWalkPosition(undefined);
        setWalkMapView(false);
        setWalk({
            point: origin.point,
            title: origin.label,
            journey,
            path: journey.path,
            initialView: 'person'
        });
        setView('map');
    }
    function toggleShortlist(property) {
        setShortlist((current)=>current.some((home)=>home.id === property.id) ? current.filter((home)=>home.id !== property.id) : current.length < 3 ? [
                ...current,
                property
            ] : current);
    }
    function applyBoundary(area, locality) {
        if (area.kind === 'locality') {
            if (locality) {
                setActiveArea({
                    kind: 'polygon',
                    points: locality.polygon.map(([lng, lat])=>({
                            lat,
                            lng
                        }))
                });
                setBoundary({
                    name: locality.name,
                    source: locality.source
                });
            }
        } else {
            setActiveArea(area);
        }
    }
    function submit(filters, area) {
        setMapStart(undefined);
        setMapDestination(undefined);
        setSearchSettingsOpen(false);
        setSelection(undefined);
        setWalk(null);
        if (area.kind !== 'locality') setActiveArea(area);
        setView('list');
        resultBody.current?.scrollTo({
            top: 0
        });
        setBoundary(undefined);
        setRequestedArea(area);
        void search(filters).then((result)=>{
            if (result) applyBoundary(area, result.boundary);
            if (!result || result.data.length === 0) setSearchSettingsOpen(true);
        });
    }
    function pickPoint(point) {
        if (mode === 'locality') return;
        setMapStart(undefined);
        setMapDestination(undefined);
        setSelection(undefined);
        setWalk(null);
        const precise = {
            lat: Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(point.lat)),
            lng: Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numericQueryValue"])(point.lng))
        };
        if (mode === 'radius') {
            setPin({
                lat: String(precise.lat),
                lng: String(precise.lng),
                label: 'Selected map location'
            });
            return;
        }
        setPoints((current)=>current.length >= 24 || current.some((entry)=>entry.lat === precise.lat && entry.lng === precise.lng) ? current : [
                ...current,
                precise
            ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `explorer-app ${embedded ? 'embedded-explorer' : ''} ${walk ? 'journey-active' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "masthead",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "product-brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                "aria-hidden": "true",
                                children: "n"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 162,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Neighborhood Explorer"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 162,
                                columnNumber: 96
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "workspace-location",
                        title: pin.label,
                        children: pin.label || 'Bengaluru, India'
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$appearance$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceControl"], {}, void 0, false, {
                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "segments compact-view",
                        "aria-label": "Results view",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": view === 'map',
                                onClick: ()=>{
                                    setWalk(null);
                                    setView('map');
                                },
                                children: "Map"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": view === 'list',
                                onClick: ()=>{
                                    setWalk(null);
                                    setSelection(undefined);
                                    setView('list');
                                },
                                children: "Search & list"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `workspace view-${view} ${panel === 'journey' ? 'planner-active' : ''} ${selected ? 'has-selected-home' : ''} ${walk ? 'is-walking' : ''} ${walk && walkMapView ? 'walk-map-view' : ''}`,
                style: {
                    '--sheet-height': `${sheetHeight}%`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `search-panel ${state.status !== 'idle' ? 'has-search' : ''}`,
                        "aria-labelledby": panel === 'homes' ? 'search-heading' : 'journey-planner-heading',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "workspace-tabs",
                                "aria-label": "Explore or plan",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": panel === 'homes',
                                        onClick: ()=>setPanel('homes'),
                                        children: "Find a home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": panel === 'journey',
                                        onClick: ()=>{
                                            setPanel('journey');
                                            setJourneyMapPoint(undefined);
                                            setView('map');
                                        },
                                        children: "Plan a journey"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            panel === 'journey' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "planner-body",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$journey$2d$planner$2f$journey$2d$planner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JourneyPlanner"], {
                                    initialStart: plannerStart,
                                    initialDestination: plannerDestination,
                                    mapSelection: journeyMapPoint,
                                    onOrigin: (origin)=>{
                                        setMapStart(origin);
                                        setSelection(undefined);
                                        setMode('radius');
                                        setPin({
                                            lat: String(origin.point.lat),
                                            lng: String(origin.point.lng),
                                            label: origin.label
                                        });
                                    },
                                    onPreview: previewJourney,
                                    onView: viewJourney
                                }, void 0, false, {
                                    fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                    lineNumber: 176,
                                    columnNumber: 64
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 176,
                                columnNumber: 34
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "search-intro",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "search-heading",
                                                children: "Start with a place."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                lineNumber: 179,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Find a home. Get to know the neighborhood and the journeys around it."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                lineNumber: 179,
                                                columnNumber: 89
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 179,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "search-controls search-settings",
                                        open: searchSettingsOpen,
                                        onToggle: (event)=>setSearchSettingsOpen(event.currentTarget.open),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                children: "Search settings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 13
                                            }, this),
                                            ("TURBOPACK compile-time value", "true") === 'true' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "demo-entry",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Take a look around Bellandur with sample homes."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "light",
                                                        type: "button",
                                                        "aria-label": "Explore Bellandur sample homes",
                                                        onClick: ()=>{
                                                            const center = {
                                                                lat: 12.9257,
                                                                lng: 77.6762
                                                            };
                                                            setMode('radius');
                                                            setPin({
                                                                lat: String(center.lat),
                                                                lng: String(center.lng),
                                                                label: 'Bellandur sample homes'
                                                            });
                                                            submit(new URLSearchParams({
                                                                lat: String(center.lat),
                                                                lng: String(center.lng),
                                                                radiusKm: '3',
                                                                limit: '20'
                                                            }), {
                                                                kind: 'radius',
                                                                center,
                                                                radiusKm: 3
                                                            });
                                                        },
                                                        children: "Explore Bellandur sample homes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                lineNumber: 182,
                                                columnNumber: 62
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$search$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchFilters"], {
                                                mode: mode,
                                                setMode: setMode,
                                                pin: pin,
                                                setPin: setPin,
                                                points: points,
                                                changePoints: setPoints,
                                                onSearch: submit,
                                                expand: noResults && activeArea?.kind === 'radius',
                                                busy: state.status === 'loading'
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                lineNumber: 192,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "results",
                                        "aria-labelledby": "results-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "title-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        id: "results-heading",
                                                        children: "Properties"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        role: "status",
                                                        children: state.status === 'loading' ? 'Searching…' : state.results.length > 0 ? `${state.results.length} shown` : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                lineNumber: 196,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "result-body",
                                                ref: resultBody,
                                                tabIndex: 0,
                                                "aria-label": "Property results",
                                                "aria-busy": state.status === 'loading',
                                                children: [
                                                    boundary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            boundary.name,
                                                            " · Boundary source ",
                                                            boundary.source
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 28
                                                    }, this),
                                                    state.status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Choose a search area to see properties."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 43
                                                    }, this),
                                                    noResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "No properties match this area and filters."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 29
                                                    }, this),
                                                    state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "error",
                                                        role: "alert",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: state.error
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "light",
                                                                onClick: ()=>{
                                                                    void retry()?.then((result)=>{
                                                                        if (result && requestedArea) applyBoundary(requestedArea, result.boundary);
                                                                    });
                                                                },
                                                                children: "Retry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 31
                                                    }, this),
                                                    state.results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "property-list",
                                                        children: state.results.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "listing-card",
                                                                    type: "button",
                                                                    "aria-pressed": selection === property.id,
                                                                    onClick: ()=>selectHome(property.id),
                                                                    children: [
                                                                        property.source.synthetic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "listing-visual",
                                                                            "aria-hidden": "true",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                                                    src: "/images/illustrative-apartment.png",
                                                                                    alt: "",
                                                                                    width: 640,
                                                                                    height: 360,
                                                                                    sizes: "400px"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                                    lineNumber: 215,
                                                                                    columnNumber: 102
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Illustrative"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                                    lineNumber: 215,
                                                                                    columnNumber: 198
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 51
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: property.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                            lineNumber: 216,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertySummary"])(property)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listingPrice"])(property)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: property.coordinateQuality === 'verified_entrance' ? 'Verified entrance' : 'Approximate location'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                            lineNumber: 219,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "source",
                                                                            children: [
                                                                                "Updated ",
                                                                                new Date(property.source.updatedAt).toLocaleDateString('en-IN')
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                            lineNumber: 220,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "source",
                                                                            children: [
                                                                                property.source.synthetic ? 'Sample listing · ' : '',
                                                                                property.source.name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, property.id, false, {
                                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 17
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 44
                                                    }, this),
                                                    state.cursor && !state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "light",
                                                        type: "button",
                                                        disabled: state.status === 'loading',
                                                        onClick: next,
                                                        children: "Load more"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                                lineNumber: 202,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 195,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 178,
                                columnNumber: 72
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "map-stage",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$area$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaMap"], {
                                area: activeArea,
                                draft: points,
                                drawing: mode === 'polygon',
                                pendingPin: pendingPin,
                                properties: mapProperties,
                                selectedId: selection,
                                onSelect: selectHome,
                                onPick: (point)=>{
                                    if (panel === 'journey') setJourneyMapPoint(point);
                                    else pickPoint(point);
                                },
                                neighborhood: walk ? {
                                    ...overlay,
                                    streetPoint: walkPosition
                                } : overlay,
                                onPlace: setPickedPlace
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            !walk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$location$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapLocationSearch"], {
                                compact: panel === 'journey' || mode === 'polygon',
                                start: mapStart,
                                destination: mapDestination,
                                onPick: (target, location)=>{
                                    setOverlay({
                                        places: [],
                                        route: []
                                    });
                                    setJourneyMapPoint(undefined);
                                    if (target === 'destination') {
                                        setMapDestination(location);
                                        return;
                                    }
                                    setSelection(undefined);
                                    setMode('radius');
                                    setPin({
                                        lat: String(location.point.lat),
                                        lng: String(location.point.lng),
                                        label: location.label
                                    });
                                    if (target === 'start') setMapStart(location);
                                    else {
                                        setMapStart(undefined);
                                        setMapDestination(undefined);
                                    }
                                },
                                onPlan: ()=>{
                                    setPanel('journey');
                                    setView('map');
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 235,
                                columnNumber: 21
                            }, this),
                            !walk && panel === 'homes' && (selected || mode === 'radius' && pendingPin) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "map-selection-action",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: selected?.title ?? pin.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>exploreSurroundings(),
                                        children: "Explore Neighborhood"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "light",
                                        onClick: ()=>{
                                            setPanel('journey');
                                            setJourneyMapPoint(undefined);
                                            setView('map');
                                        },
                                        children: "Plan a journey"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 247,
                                columnNumber: 91
                            }, this),
                            walk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SurroundingsWalk, {
                                location: walk,
                                onEvidence: recordEvidence,
                                onMap: setOverlay,
                                onPerspective: setWalkMapView,
                                onPosition: setWalkPosition,
                                onClose: ()=>{
                                    setOverlay(previousOverlay.current);
                                    setWalk(null);
                                }
                            }, `${walk.point.lat},${walk.point.lng}:${walk.title}`, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 252,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: detailPanel,
                        className: `explorer-panel ${selected ? 'has-selection' : ''}`,
                        "aria-label": "Neighborhood details",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$sheet$2d$handle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHandle"], {
                                panel: detailPanel,
                                height: sheetHeight,
                                onHeight: setSheetHeight
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$neighborhood$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeighborhoodExplorer"], {
                                property: selected,
                                shortlist: shortlist,
                                toggleShortlist: toggleShortlist,
                                evidence: evidence,
                                onEvidence: recordEvidence,
                                onExplore: exploreSurroundings,
                                selectHome: selectHome,
                                pickedPlaceId: pickedPlace,
                                onMap: setOverlay,
                                onClose: ()=>setSelection(undefined)
                            }, selected.id, false, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 257,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Neighborhood details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Select a property on the map or in the list to explore it."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                                lineNumber: 258,
                                columnNumber: 209
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/property-explorer.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/property-explorer.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/property-explorer.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(PropertyExplorer, "THbZyl8iSTKHVm5nAtAtfl5+g3o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$use$2d$property$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertySearch"]
    ];
});
_c1 = PropertyExplorer;
var _c, _c1;
__turbopack_context__.k.register(_c, "SurroundingsWalk");
__turbopack_context__.k.register(_c1, "PropertyExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/use-property-search.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePropertySearch",
    ()=>usePropertySearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const initial = {
    results: [],
    cursor: null,
    status: 'idle'
};
const errorMessages = {
    400: 'Check your search area and filters. Drawn areas need a simple outline with 3–24 corners.',
    404: 'That verified locality boundary is no longer available.',
    401: 'An authorized standalone catalog is not configured here.',
    429: 'You’ve reached the search limit. Wait a moment before trying again.',
    503: 'Property search is temporarily unavailable. Try again shortly.'
};
function usePropertySearch() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previous = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePropertySearch.useEffect": ()=>({
                "usePropertySearch.useEffect": ()=>active.current?.abort()
            })["usePropertySearch.useEffect"]
    }["usePropertySearch.useEffect"], []);
    async function run(filters, cursor) {
        active.current?.abort();
        const request = new AbortController();
        active.current = request;
        previous.current = {
            filters,
            cursor
        };
        setState((current)=>({
                ...cursor ? current : initial,
                status: 'loading',
                error: undefined
            }));
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProperties"])(filters, cursor, AbortSignal.any([
                request.signal,
                AbortSignal.timeout(10000)
            ]));
            if (request.signal.aborted) return null;
            setState((current)=>({
                    results: cursor ? [
                        ...current.results,
                        ...result.data
                    ] : result.data,
                    cursor: result.page.nextCursor,
                    status: 'done'
                }));
            return result;
        } catch (error) {
            if (request.signal.aborted) return null;
            const message = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchError"] ? errorMessages[error.status] : undefined;
            setState((current)=>({
                    ...current,
                    status: 'error',
                    error: message ?? 'We couldn’t load properties. Try again.'
                }));
            return null;
        }
    }
    return {
        state,
        search: (filters)=>run(filters, null),
        next: ()=>previous.current && state.cursor ? run(previous.current.filters, state.cursor) : undefined,
        retry: ()=>previous.current ? run(previous.current.filters, previous.current.cursor) : undefined
    };
}
_s(usePropertySearch, "UJ/Svre8Y+dRPFqrzX4/RacR0dQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_14x4d8y3o-asw._.js.map