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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$rental$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/rental-assistant/rental-explorer.tsx [app-client] (ecmascript)");
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
    if (state.status === 'standalone') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$rental$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RentalExplorer"], {}, void 0, false, {
        fileName: "[project]/src/features/embed/explorer-entry.tsx",
        lineNumber: 58,
        columnNumber: 45
    }, this);
    if (state.status === 'ready') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$rental$2d$explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RentalExplorer"], {
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
        'townhouse',
        'unknown'
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
    }),
    rental: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        configuration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        depositInr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().optional(),
        furnishing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        images: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()).optional(),
        amenities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()).optional(),
        bikeParking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional(),
        carParking: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional(),
        gatedCommunity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional(),
        petsAllowed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional(),
        maxOccupants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().optional(),
        areaSqFt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().optional(),
        floor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        enquiryUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        availability: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
            verifiedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
            availableFrom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
        }).optional()
    }).nullable().optional()
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
"[project]/src/features/rental-assistant/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RentalApiError",
    ()=>RentalApiError,
    "agentResponseSchema",
    ()=>agentResponseSchema,
    "candidateSchema",
    ()=>candidateSchema,
    "configurationLabel",
    ()=>configurationLabel,
    "conversationRequest",
    ()=>conversationRequest,
    "conversationSchema",
    ()=>conversationSchema,
    "getCatalog",
    ()=>getCatalog,
    "getRentalProperty",
    ()=>getRentalProperty,
    "needsSchema",
    ()=>needsSchema,
    "rentalPropertySchema",
    ()=>rentalPropertySchema,
    "rentalRequest",
    ()=>rentalRequest,
    "rupees",
    ()=>rupees
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$tuple$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .tuple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/api.ts [app-client] (ecmascript)");
;
;
;
const rentalPropertySchema = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertySchema"].extend({
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable().optional(),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        lat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
        lng: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number()
    }).nullable(),
    rental: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertySchema"].shape.rental.unwrap().unwrap().extend({
        bathrooms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().optional(),
        areaType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        tenantPreferred: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        contactType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        dwellingTypeKnown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional()
    }).nullable().optional()
});
const needsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    locations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    officeLocation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    configuration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    budgetMin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nullable(),
    budgetMax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nullable(),
    depositMax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nullable(),
    furnishing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    moveInDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    amenities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    preferences: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    commuteMaxMinutes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nullable(),
    commuteMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    occupants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().nullable(),
    pets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().nullable(),
    otherConstraints: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string())
});
const conversationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    revision: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
    requirements: needsSchema,
    updatedFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    skippedQuestions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    selectedPropertyId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable(),
    viewedPropertyIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    pinnedPropertyIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    shortlistedPropertyIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    rejectedPropertyIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
    messages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
            'user',
            'assistant'
        ]),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
    }))
});
const candidateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    property: rentalPropertySchema,
    matchType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        'BEST_MATCH',
        'GOOD_MATCH',
        'ALTERNATIVE'
    ]),
    availability: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        'VERIFIED',
        'CONFIRMATION_REQUIRED'
    ]),
    reasons: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    mismatches: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    missingPreferences: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    explanation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
});
const agentResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    candidates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(candidateSchema),
    searchedCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
    truncated: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
    missingInformation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
    mapAction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        locations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
        areaDisclosure: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        boundary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
            source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
            polygon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$tuple$3e$__["z"].tuple([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number()
            ]))
        }).nullable(),
        highlightPropertyIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()),
        candidatePropertyIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string())
    }),
    modelAvailable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
    aiUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional(),
    comparison: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(rentalPropertySchema).optional(),
    commute: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        durationSeconds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().optional(),
        distanceMeters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().optional(),
        encodedPolyline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional(),
        choices: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
        })).optional()
    }).nullable().optional(),
    explanations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        propertyId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()
    })).optional(),
    locationChoices: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
        location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            lat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number(),
            lng: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number()
        }),
        attributions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
            provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string(),
            providerUri: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
        }))
    })).optional()
});
class RentalApiError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
    }
}
async function rentalRequest(path, schema, init = {}, credentials) {
    const headers = new Headers(init.headers);
    if (init.body) headers.set('Content-Type', 'application/json');
    if (credentials) headers.set('X-Conversation-Key', credentials.key);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/v1/rental/${path}`, {
        ...init,
        headers
    });
    if (!result.ok) {
        const error = await result.json().catch(()=>({}));
        throw new RentalApiError(result.status, error.error?.message ?? 'The rental service is temporarily unavailable. Please retry.');
    }
    if (result.status === 204) return null;
    return schema.parse(await result.json());
}
const envelope = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    data: conversationSchema,
    response: agentResponseSchema.optional(),
    conversationKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
});
async function conversationRequest(path, init, credentials) {
    return envelope.parse(await rentalRequest(path, envelope, init, credentials));
}
async function getCatalog(signal, bounds, cursor) {
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(rentalPropertySchema),
        truncated: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
        nextCursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().nullable().default(null)
    });
    const params = new URLSearchParams();
    if (bounds) params.set('bounds', bounds);
    if (cursor) params.set('cursor', cursor);
    return schema.parse(await rentalRequest(`catalog?${params}`, schema, {
        signal
    }));
}
async function getRentalProperty(id, signal) {
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        data: rentalPropertySchema
    });
    return schema.parse(await rentalRequest(`properties/${encodeURIComponent(id)}`, schema, {
        signal
    })).data;
}
const configurationLabel = (property)=>property.rental?.configuration ?? (property.bedrooms ? `${property.bedrooms}BHK` : 'Home');
const rupees = (value)=>value == null ? 'Not supplied' : `₹${new Intl.NumberFormat('en-IN').format(value)}`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/rental-assistant/rental-details.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentComparison",
    ()=>AgentComparison,
    "RentalDetails",
    ()=>RentalDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/rental-assistant/api.ts [app-client] (ecmascript)");
'use client';
;
;
const readable = (value)=>value ? value.toLowerCase().replaceAll('_', ' ') : 'Not supplied';
const yesNo = (value)=>value === undefined ? 'Not supplied' : value ? 'Yes' : 'No';
function availability(property) {
    const record = property.rental?.availability;
    if (property.source.synthetic) return 'Sample listing · not a real rental offer';
    if (record?.status === 'UNAVAILABLE') return 'No longer available';
    const checked = Date.parse(record?.verifiedAt ?? '');
    return record?.status === 'AVAILABLE' && checked <= Date.now() && Date.now() - checked <= 48 * 3600000 ? 'Available · recently verified' : 'Availability confirmation required';
}
function RentalDetails({ property, shortlisted, onClose, onPin, onAsk }) {
    const facts = property.rental;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "rental-details",
        "aria-label": "Selected property details",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rental-panel-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rental-eyebrow",
                        children: "PROPERTY DETAILS"
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 18,
                        columnNumber: 121
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        onClick: onClose,
                        children: "Close details"
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 18,
                        columnNumber: 177
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                lineNumber: 18,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rental-details-scroll",
                children: [
                    facts?.images?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rental-photo-strip",
                        children: facts.images.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: url,
                                alt: `${property.title}, photo ${index + 1}`,
                                loading: "lazy",
                                referrerPolicy: "no-referrer"
                            }, `${url}-${index}`, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 20,
                                columnNumber: 102
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 20,
                        columnNumber: 32
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rental-no-photo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "⌂"
                            }, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 21,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No photos supplied by the source"
                            }, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 21,
                                columnNumber: 77
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rental-configuration",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurationLabel"])(property),
                            " · ",
                            facts?.dwellingTypeKnown === false || property.type === 'unknown' || property.source.name.startsWith('House_Rent_Dataset.csv') ? 'Property type not supplied' : readable(property.type)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 22,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: property.title
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 22,
                        columnNumber: 271
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            property.locality ?? 'Locality not supplied',
                            property.city ? `, ${property.city}` : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 22,
                        columnNumber: 296
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rental-detail-price",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(property.priceInr),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/ month"
                            }, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 23,
                                columnNumber: 69
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `rental-availability ${property.source.synthetic ? 'sample' : ''}`,
                        children: availability(property)
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 23,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "rental-facts",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Security deposit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 24,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(facts?.depositInr)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 24,
                                        columnNumber: 66
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 24,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Furnishing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 24,
                                        columnNumber: 113
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: readable(facts?.furnishing)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 24,
                                        columnNumber: 132
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 24,
                                columnNumber: 108
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Available from"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 25,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.availability?.availableFrom ?? 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 25,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 25,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Area"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 25,
                                        columnNumber: 111
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.areaSqFt ? `${facts.areaSqFt} sq ft` : 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 25,
                                        columnNumber: 124
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 25,
                                columnNumber: 106
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Floor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 25,
                                        columnNumber: 206
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.floor ?? 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 25,
                                        columnNumber: 220
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 25,
                                columnNumber: 201
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Bike parking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: yesNo(facts?.bikeParking)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 26,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Car parking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 82
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: yesNo(facts?.carParking)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 102
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 26,
                                columnNumber: 77
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Gated community"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 148
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: yesNo(facts?.gatedCommunity)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 172
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 26,
                                columnNumber: 143
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Pets allowed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 222
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: yesNo(facts?.petsAllowed)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 26,
                                        columnNumber: 243
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 26,
                                columnNumber: 217
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Bathrooms"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 27,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.bathrooms ?? 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 27,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 27,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Area type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 27,
                                        columnNumber: 88
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.areaType ?? 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 27,
                                        columnNumber: 106
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 27,
                                columnNumber: 83
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Tenant preference"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.tenantPreferred ?? 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 28,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Contact type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 102
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.contactType ?? 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 123
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 28,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 29,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: facts?.address ?? 'Not supplied'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                        lineNumber: 29,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Amenities"
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: facts?.amenities?.length ? facts.amenities.map(readable).join(', ') : 'No amenity information supplied.'
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 30,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rental-quiet",
                        children: !property.location ? 'Map coordinates were not supplied. This listing cannot be placed on the map or used as a commute origin.' : property.coordinateQuality === 'verified_entrance' ? 'Entrance coordinates verified by the source.' : 'Approximate location. The entrance may differ.'
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 31,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rental-quiet",
                        children: [
                            "Source: ",
                            property.source.name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 32,
                                columnNumber: 65
                            }, this),
                            "Updated ",
                            new Date(property.source.updatedAt).toLocaleDateString('en-IN'),
                            " · Listing ID ",
                            property.id
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, this),
                    facts?.enquiryUrl && /^https:\/\//.test(facts.enquiryUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rental-enquiry",
                        href: facts.enquiryUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Enquire with listing source"
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 33,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rental-details-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onPin,
                        children: "Ask AI About This Property"
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 35,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                onClick: ()=>onAsk('How far is this property from my office?'),
                                children: "Check commute"
                            }, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 35,
                                columnNumber: 109
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                onClick: ()=>onAsk('Shortlist this property'),
                                children: shortlisted ? 'Shortlisted' : 'Shortlist'
                            }, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                lineNumber: 35,
                                columnNumber: 223
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                        lineNumber: 35,
                        columnNumber: 104
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c = RentalDetails;
function AgentComparison({ properties, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rental-comparison",
        "aria-label": "Property facts comparison",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: properties.length === 1 ? 'Listing facts' : 'Property comparison'
            }, void 0, false, {
                fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                lineNumber: 39,
                columnNumber: 88
            }, this),
            properties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rental-candidate-title",
                            onClick: ()=>onSelect(property.id),
                            children: property.title
                        }, void 0, false, {
                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                            lineNumber: 40,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                            className: "rental-facts",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 41,
                                            columnNumber: 12
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurationLabel"])(property)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 41,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                    lineNumber: 41,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Monthly rent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 41,
                                            columnNumber: 84
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(property.priceInr)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 41,
                                            columnNumber: 105
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                    lineNumber: 41,
                                    columnNumber: 79
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Deposit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 41,
                                            columnNumber: 152
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(property.rental?.depositInr)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 41,
                                            columnNumber: 168
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                    lineNumber: 41,
                                    columnNumber: 147
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Furnishing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 12
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: readable(property.rental?.furnishing)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                    lineNumber: 42,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Bike parking"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 90
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: yesNo(property.rental?.bikeParking)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 111
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                    lineNumber: 42,
                                    columnNumber: 85
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Gated community"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 168
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: yesNo(property.rental?.gatedCommunity)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 192
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                    lineNumber: 42,
                                    columnNumber: 163
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            children: "Availability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 252
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            children: availability(property)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                            lineNumber: 42,
                                            columnNumber: 273
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                                    lineNumber: 42,
                                    columnNumber: 247
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                            lineNumber: 40,
                            columnNumber: 166
                        }, this)
                    ]
                }, property.id, true, {
                    fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
                    lineNumber: 40,
                    columnNumber: 33
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/rental-assistant/rental-details.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_c1 = AgentComparison;
var _c, _c1;
__turbopack_context__.k.register(_c, "RentalDetails");
__turbopack_context__.k.register(_c1, "AgentComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/rental-assistant/rental-explorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RentalExplorer",
    ()=>RentalExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .uuid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$unknown$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .unknown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$appearance$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/appearance/appearance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$rental$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/rental-assistant/rental-details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/rental-assistant/api.ts [app-client] (ecmascript)");
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
const RentalMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/features/rental-assistant/rental-map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((module)=>module.RentalMap), {
    loadableGenerated: {
        modules: [
            "[project]/src/features/rental-assistant/rental-map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rental-map-loading",
            role: "status",
            children: "Loading property map…"
        }, void 0, false, {
            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
            lineNumber: 10,
            columnNumber: 119
        }, ("TURBOPACK compile-time value", void 0))
});
_c = RentalMap;
function RentalExplorer({ initialProperty, embedded = false }) {
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [catalog, setCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProperty ? [
        initialProperty
    ] : []);
    const [catalogError, setCatalogError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [catalogLoading, setCatalogLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [truncated, setTruncated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextCursor, setNextCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const catalogBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProperty ?? null);
    const [showDetails, setShowDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!initialProperty);
    const [chatOpen, setChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [listOpen, setListOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingMessage, setPendingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [starting, setStarting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [focusKey, setFocusKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [focusPoint, setFocusPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const lastRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [retry, setRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [catalogRetry, setCatalogRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const messageEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const composer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const actionQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve());
    const viewportAbort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boundsTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const storageKey = `neighborhood-rental-v1:${embedded ? initialProperty?.id ?? 'embed' : 'public'}`;
    const updateSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RentalExplorer.useCallback[updateSession]": (value)=>{
            sessionRef.current = value;
            setSession(value);
        }
    }["RentalExplorer.useCallback[updateSession]"], []);
    const enqueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RentalExplorer.useCallback[enqueue]": (operation)=>{
            const task = actionQueue.current.then(operation);
            actionQueue.current = task.catch({
                "RentalExplorer.useCallback[enqueue]": ()=>undefined
            }["RentalExplorer.useCallback[enqueue]"]);
            return task;
        }
    }["RentalExplorer.useCallback[enqueue]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RentalExplorer.useEffect": ()=>{
            const active = new AbortController();
            async function start() {
                setStarting(true);
                setError('');
                try {
                    let credentials;
                    try {
                        const saved = localStorage.getItem(storageKey);
                        if (saved) credentials = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__["z"].uuid(),
                            key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^[a-f0-9]{64}$/)
                        }).parse(JSON.parse(saved));
                    } catch  {}
                    let result;
                    if (credentials) {
                        try {
                            result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationRequest"])(`conversations/${credentials.id}`, {
                                signal: active.signal
                            }, credentials);
                        } catch (failure) {
                            if (!(failure instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RentalApiError"] && failure.status === 404)) throw failure;
                            credentials = undefined;
                        }
                    }
                    if (!result) {
                        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationRequest"])('conversations', {
                            method: 'POST',
                            signal: active.signal
                        });
                        credentials = {
                            id: result.data.id,
                            key: result.conversationKey
                        };
                    }
                    if (active.signal.aborted) return;
                    updateSession({
                        credentials: credentials,
                        conversation: result.data
                    });
                    try {
                        localStorage.setItem(storageKey, JSON.stringify(credentials));
                    } catch  {}
                    if (result.response) {
                        setResponse(result.response);
                        setFocusKey({
                            "RentalExplorer.useEffect.start": (value)=>value + 1
                        }["RentalExplorer.useEffect.start"]);
                    }
                    const selectedId = result.data.selectedPropertyId ?? initialProperty?.id;
                    if (selectedId) {
                        const property = initialProperty?.id === selectedId ? initialProperty : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRentalProperty"])(selectedId, active.signal).catch({
                            "RentalExplorer.useEffect.start": ()=>null
                        }["RentalExplorer.useEffect.start"]);
                        if (!active.signal.aborted) {
                            setSelected(property);
                            setShowDetails(!!property);
                        }
                    }
                } catch (failure) {
                    if (!active.signal.aborted) setError(failure instanceof Error ? failure.message : 'The conversation could not be opened.');
                } finally{
                    if (!active.signal.aborted) setStarting(false);
                }
            }
            void start();
            return ({
                "RentalExplorer.useEffect": ()=>{
                    active.abort();
                }
            })["RentalExplorer.useEffect"];
        }
    }["RentalExplorer.useEffect"], [
        storageKey,
        initialProperty,
        retry,
        updateSession
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RentalExplorer.useEffect": ()=>{
            const active = new AbortController();
            setCatalogLoading(true);
            setCatalogError('');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCatalog"])(active.signal).then({
                "RentalExplorer.useEffect": (result)=>{
                    setCatalog(result.data);
                    setTruncated(result.truncated);
                    setNextCursor(result.nextCursor);
                    catalogBounds.current = undefined;
                }
            }["RentalExplorer.useEffect"]).catch({
                "RentalExplorer.useEffect": ()=>{
                    if (!active.signal.aborted) setCatalogError('The property catalog could not load. Please retry.');
                }
            }["RentalExplorer.useEffect"]).finally({
                "RentalExplorer.useEffect": ()=>{
                    if (!active.signal.aborted) setCatalogLoading(false);
                }
            }["RentalExplorer.useEffect"]);
            return ({
                "RentalExplorer.useEffect": ()=>active.abort()
            })["RentalExplorer.useEffect"];
        }
    }["RentalExplorer.useEffect"], [
        catalogRetry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RentalExplorer.useEffect": ()=>({
                "RentalExplorer.useEffect": ()=>{
                    viewportAbort.current?.abort();
                    if (boundsTimer.current) clearTimeout(boundsTimer.current);
                }
            })["RentalExplorer.useEffect"]
    }["RentalExplorer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RentalExplorer.useEffect": ()=>{
            messageEnd.current?.scrollIntoView({
                block: 'nearest',
                behavior: 'instant'
            });
        }
    }["RentalExplorer.useEffect"], [
        session?.conversation.messages.length,
        pendingMessage,
        response
    ]);
    const onBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RentalExplorer.useCallback[onBounds]": (bounds)=>{
            if (boundsTimer.current) clearTimeout(boundsTimer.current);
            boundsTimer.current = setTimeout({
                "RentalExplorer.useCallback[onBounds]": ()=>{
                    viewportAbort.current?.abort();
                    const active = new AbortController();
                    viewportAbort.current = active;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCatalog"])(active.signal, bounds).then({
                        "RentalExplorer.useCallback[onBounds]": (result)=>{
                            if (!active.signal.aborted) {
                                setCatalog(result.data);
                                setTruncated(result.truncated);
                                setNextCursor(result.nextCursor);
                                catalogBounds.current = bounds;
                                setCatalogError('');
                            }
                        }
                    }["RentalExplorer.useCallback[onBounds]"]).catch({
                        "RentalExplorer.useCallback[onBounds]": ()=>{
                            if (!active.signal.aborted) setCatalogError('Map listings could not refresh. Showing the last loaded catalog.');
                        }
                    }["RentalExplorer.useCallback[onBounds]"]);
                }
            }["RentalExplorer.useCallback[onBounds]"], 500);
        }
    }["RentalExplorer.useCallback[onBounds]"], []);
    const allProperties = [
        ...new Map([
            ...catalog,
            ...response?.candidates.map((row)=>row.property) ?? [],
            ...selected ? [
                selected
            ] : []
        ].map((row)=>[
                row.id,
                row
            ])).values()
    ];
    async function loadMore() {
        if (!nextCursor || catalogLoading) return;
        setCatalogLoading(true);
        try {
            const bounds = catalogBounds.current;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCatalog"])(AbortSignal.timeout(7000), bounds, nextCursor);
            if (bounds === catalogBounds.current) {
                setCatalog((current)=>[
                        ...new Map([
                            ...current,
                            ...result.data
                        ].map((row)=>[
                                row.id,
                                row
                            ])).values()
                    ]);
                setNextCursor(result.nextCursor);
                setTruncated(result.truncated);
            }
        } catch  {
            setCatalogError('More listings could not load. Please retry.');
        } finally{
            setCatalogLoading(false);
        }
    }
    function persistSelection(property, pin = false) {
        setError('');
        if (property) setSelected(property);
        void enqueue(async ()=>{
            const current = sessionRef.current;
            if (!current) return;
            const pinnedPropertyIds = pin && property ? [
                ...new Set([
                    ...current.conversation.pinnedPropertyIds,
                    property.id
                ])
            ].slice(-3) : current.conversation.pinnedPropertyIds;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationRequest"])(`conversations/${current.credentials.id}/selection`, {
                method: 'PATCH',
                body: JSON.stringify({
                    expectedRevision: current.conversation.revision,
                    selectedPropertyId: property?.id ?? null,
                    pinnedPropertyIds
                })
            }, current.credentials);
            updateSession({
                ...current,
                conversation: result.data
            });
        }).catch((failure)=>setError(failure instanceof Error ? failure.message : 'The selected property could not be attached.'));
    }
    function choose(id) {
        const property = allProperties.find((row)=>row.id === id);
        if (!property) return;
        setSelected(property);
        setShowDetails(true);
        setChatOpen(false);
        setListOpen(false);
        persistSelection(property);
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRentalProperty"])(id, AbortSignal.timeout(7000)).then((fresh)=>setSelected((current)=>current?.id === id ? fresh : current)).catch(()=>undefined);
    }
    function pin() {
        if (!selected) return;
        persistSelection(selected, true);
        setChatOpen(true);
        composer.current?.focus();
    }
    async function send(text = input, officePlaceId) {
        if (!text.trim() || sending || !sessionRef.current) return;
        setSending(true);
        setPendingMessage(text);
        setError('');
        setChatOpen(true);
        try {
            await enqueue(async ()=>{
                const current = sessionRef.current;
                const requestId = lastRequest.current?.text === text ? lastRequest.current.id : crypto.randomUUID();
                lastRequest.current = {
                    text,
                    id: requestId
                };
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationRequest"])(`conversations/${current.credentials.id}/messages`, {
                    method: 'POST',
                    body: JSON.stringify({
                        message: text,
                        expectedRevision: current.conversation.revision,
                        requestId,
                        officePlaceId,
                        selectedPropertyId: selected?.id ?? null,
                        pinnedPropertyIds: current.conversation.pinnedPropertyIds
                    }),
                    signal: AbortSignal.timeout(35000)
                }, current.credentials);
                updateSession({
                    ...current,
                    conversation: result.data
                });
                if (result.response) {
                    setResponse(result.response);
                    setFocusKey((value)=>value + 1);
                }
                if (result.response?.locationChoices?.length === 1) setFocusPoint(result.response.locationChoices[0].location);
                lastRequest.current = null;
                setInput('');
            });
        } catch (failure) {
            setError(failure instanceof Error ? failure.message : 'Your message could not be sent. Please retry.');
            if (failure instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RentalApiError"] && failure.status === 409) {
                const current = sessionRef.current;
                if (current) {
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationRequest"])(`conversations/${current.credentials.id}`, {}, current.credentials).catch(()=>null);
                    if (result) updateSession({
                        ...current,
                        conversation: result.data
                    });
                }
            }
        } finally{
            setSending(false);
            setPendingMessage('');
        }
    }
    async function startNew() {
        if (sending) return;
        const current = sessionRef.current;
        try {
            if (current) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rentalRequest"])(`conversations/${current.credentials.id}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$unknown$3e$__["z"].unknown(), {
                method: 'DELETE'
            }, current.credentials);
            try {
                localStorage.removeItem(storageKey);
            } catch  {}
            setSession(null);
            sessionRef.current = null;
            setResponse(null);
            setSelected(null);
            setShowDetails(false);
            setInput('');
            setRetry((value)=>value + 1);
        } catch (failure) {
            setError(failure instanceof Error ? failure.message : 'Could not clear this conversation.');
        }
    }
    const needs = session?.conversation.requirements;
    const chips = needs ? [
        needs.configuration,
        ...needs.locations,
        needs.budgetMax !== null ? `Up to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(needs.budgetMax)}/mo` : null,
        needs.furnishing?.toLowerCase().replaceAll('_', ' '),
        needs.moveInDate ? `Move in ${needs.moveInDate}` : null,
        ...needs.amenities.map((value)=>value.replaceAll('_', ' ').toLowerCase()),
        needs.officeLocation ? `Office: ${needs.officeLocation}` : null,
        needs.depositMax !== null ? `Deposit ≤ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(needs.depositMax)}` : null,
        needs.occupants ? `${needs.occupants} occupants` : null,
        needs.pets ? 'Pets allowed' : null,
        needs.commuteMaxMinutes ? `Commute ≤ ${needs.commuteMaxMinutes} min` : null
    ].filter(Boolean) : [];
    const highlights = response?.mapAction.highlightPropertyIds ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `rental-app ${showDetails && selected ? 'has-details' : ''} ${chatOpen ? 'chat-open' : ''} ${listOpen ? 'list-open' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "rental-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rental-brand",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rental-brand-symbol",
                                "aria-hidden": "true",
                                children: "N"
                            }, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 169,
                                columnNumber: 76
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Neighborhood",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rental-brand-caption",
                                        children: "Find a place that fits your life"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 169,
                                        columnNumber: 159
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 169,
                                columnNumber: 141
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                        lineNumber: 169,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rental-header-label",
                        children: "AI rental assistant"
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                        lineNumber: 170,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$appearance$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceControl"], {}, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                        lineNumber: 170,
                        columnNumber: 71
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                lineNumber: 169,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rental-workspace",
                children: [
                    showDetails && selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$rental$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RentalDetails"], {
                        property: selected,
                        shortlisted: session?.conversation.shortlistedPropertyIds.includes(selected.id) ?? false,
                        onClose: ()=>setShowDetails(false),
                        onPin: pin,
                        onAsk: (question)=>{
                            persistSelection(selected, true);
                            void send(question);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                        lineNumber: 173,
                        columnNumber: 35
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rental-map-section",
                        "aria-label": "Rental property exploration",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RentalMap, {
                                properties: allProperties,
                                selectedId: selected?.id ?? null,
                                response: response,
                                focusKey: focusKey,
                                focusPoint: focusPoint,
                                onSelect: choose,
                                onBounds: onBounds
                            }, void 0, false, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 176,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-map-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: needs?.locations.length ? needs.locations.join(' + ') : 'Explore rental listings'
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 177,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: catalogLoading ? 'Loading catalog…' : `${catalog.length}${truncated ? '+' : ''} catalog listings · ${catalog.filter((property)=>property.location).length} on map`
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 177,
                                                columnNumber: 146
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 177,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light",
                                        "aria-expanded": listOpen,
                                        onClick: ()=>{
                                            setListOpen((value)=>!value);
                                            setChatOpen(false);
                                        },
                                        children: "Browse listings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 178,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 177,
                                columnNumber: 9
                            }, this),
                            catalog.some((property)=>!property.location) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-unmapped-note",
                                role: "status",
                                children: [
                                    catalog.filter((property)=>!property.location).length,
                                    " historical listings need map coordinates. Browse or chat to review their supplied facts."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 179,
                                columnNumber: 58
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-map-legend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "legend-match"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 180,
                                                columnNumber: 50
                                            }, this),
                                            "Matching"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "legend-other"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 180,
                                                columnNumber: 101
                                            }, this),
                                            "Other listing"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 95
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "legend-selected"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 180,
                                                columnNumber: 157
                                            }, this),
                                            "Selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 151
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 180,
                                columnNumber: 9
                            }, this),
                            response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rental-area-disclosure",
                                children: [
                                    response.mapAction.areaDisclosure,
                                    response.mapAction.boundary ? ` · ${response.mapAction.boundary.source}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 181,
                                columnNumber: 22
                            }, this),
                            catalogError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-catalog-error",
                                role: "alert",
                                children: [
                                    catalogError,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light",
                                        onClick: ()=>setCatalogRetry((value)=>value + 1),
                                        children: "Retry catalog"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 182,
                                        columnNumber: 91
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 182,
                                columnNumber: 26
                            }, this),
                            listOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rental-catalog",
                                "aria-label": "Available catalog listings",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rental-panel-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Catalog listings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 183,
                                                columnNumber: 136
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "light",
                                                onClick: ()=>setListOpen(false),
                                                children: "Close list"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 183,
                                                columnNumber: 161
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 183,
                                        columnNumber: 98
                                    }, this),
                                    !catalogLoading && !catalog.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No available rentals in this map view."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 184,
                                        columnNumber: 50
                                    }, this),
                                    catalog.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `rental-listing ${selected?.id === property.id ? 'selected' : ''}`,
                                            onClick: ()=>choose(property.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurationLabel"])(property)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 19
                                                        }, this),
                                                        " · ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(property.priceInr),
                                                        "/mo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: property.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 106
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        property.source.synthetic ? 'Sample listing · not a rental offer' : highlights.includes(property.id) ? 'Verified match' : 'Check availability in details',
                                                        !property.location ? ' · coordinates unavailable' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 135
                                                }, this)
                                            ]
                                        }, property.id, true, {
                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                            lineNumber: 185,
                                            columnNumber: 36
                                        }, this)),
                                    nextCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light",
                                        disabled: catalogLoading,
                                        onClick: ()=>void loadMore(),
                                        children: catalogLoading ? 'Loading listings…' : 'Load more listings'
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 187,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 183,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rental-mobile-chat",
                                onClick: ()=>{
                                    setChatOpen(true);
                                    setListOpen(false);
                                },
                                "aria-expanded": chatOpen,
                                children: [
                                    "Ask your rental assistant",
                                    chips.length ? ` · ${chips.length} requirements` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 189,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                        lineNumber: 175,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "rental-chat",
                        "aria-label": "AI rental assistant",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-chat-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rental-eyebrow",
                                                children: "YOUR HOME SEARCH"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 192,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Let’s find your next home."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 192,
                                                columnNumber: 107
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 192,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light rental-chat-close",
                                        onClick: ()=>setChatOpen(false),
                                        children: "Close chat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 192,
                                        columnNumber: 148
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 192,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-chat-toolbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Tell me what matters. I’ll check the catalog."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 193,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rental-text-button",
                                        disabled: sending || starting,
                                        onClick: ()=>void startNew(),
                                        children: "New search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 193,
                                        columnNumber: 98
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 193,
                                columnNumber: 9
                            }, this),
                            !!chips.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-requirements",
                                "aria-label": "Confirmed requirements",
                                children: [
                                    chips.map((chip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: chip
                                        }, `${chip}-${index}`, false, {
                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 129
                                        }, this)),
                                    !!needs?.preferences.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Preferences: ",
                                            needs.preferences.map((value)=>value.replaceAll('_', ' ').toLowerCase()).join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 195,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 194,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-chat-history",
                                "aria-live": "polite",
                                "aria-busy": sending || starting,
                                children: [
                                    starting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        role: "status",
                                        children: "Opening your conversation…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 197,
                                        columnNumber: 24
                                    }, this),
                                    !starting && !session?.conversation.messages.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rental-welcome",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rental-assistant-icon",
                                                "aria-hidden": "true",
                                                children: "N"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 198,
                                                columnNumber: 99
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "A home search, in your own words."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 198,
                                                columnNumber: 166
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Share your preferred area, budget and the kind of home you want. Add your office to check a real commute."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 198,
                                                columnNumber: 208
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rental-suggestion",
                                                disabled: !session || sending,
                                                onClick: ()=>void send('I need a 1BHK in Bellandur under ₹25k. My office is in HSR Layout.'),
                                                children: "1BHK in Bellandur, under ₹25k"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 199,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rental-suggestion",
                                                disabled: !session || sending,
                                                onClick: ()=>void send('Find a 2BHK near Manyata Tech Park under ₹35,000.'),
                                                children: "A 2BHK near Manyata Tech Park"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 200,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rental-quiet",
                                                children: "You can also browse the map and select a listing to ask about it."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 201,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 198,
                                        columnNumber: 67
                                    }, this),
                                    session?.conversation.messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rental-message ${message.role}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rental-message-role",
                                                    children: message.role === 'user' ? 'You' : 'Rental assistant'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 125
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: message.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 224
                                                }, this)
                                            ]
                                        }, message.id, true, {
                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                            lineNumber: 202,
                                            columnNumber: 58
                                        }, this)),
                                    pendingMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rental-message user",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rental-message-role",
                                                        children: "You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 69
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: pendingMessage
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 117
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 203,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                role: "status",
                                                className: "rental-checking",
                                                children: "Checking your requirements and current inventory…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 203,
                                                columnNumber: 146
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 203,
                                        columnNumber: 30
                                    }, this),
                                    response && !sending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rental-recommendations",
                                        "aria-label": "Property recommendations",
                                        children: [
                                            !!response.candidates.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: highlights.length ? 'Your matches & alternatives' : 'Alternatives to review'
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 205,
                                                columnNumber: 46
                                            }, this),
                                            response.candidates.map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "rental-candidate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `rental-match-tag ${candidate.matchType.toLowerCase()}`,
                                                            children: candidate.matchType === 'BEST_MATCH' ? 'Best match' : candidate.matchType === 'GOOD_MATCH' ? 'Good match' : 'Alternative'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "rental-candidate-title",
                                                            onClick: ()=>choose(candidate.property.id),
                                                            children: candidate.property.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: [
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rupees"])(candidate.property.priceInr),
                                                                        "/mo"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 18
                                                                }, this),
                                                                " · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configurationLabel"])(candidate.property)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "rental-candidate-reason",
                                                            children: candidate.explanation
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 15
                                                        }, this),
                                                        response.explanations?.find((row)=>row.propertyId === candidate.property.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "rental-candidate-reason",
                                                            children: response.explanations.find((row)=>row.propertyId === candidate.property.id).text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 96
                                                        }, this)
                                                    ]
                                                }, candidate.property.id, true, {
                                                    fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 51
                                                }, this)),
                                            response.truncated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rental-quiet",
                                                children: "Ranking covers the first 250 catalog candidates. Narrow the area for a more complete search."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 213,
                                                columnNumber: 36
                                            }, this),
                                            !!response.comparison?.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$rental$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentComparison"], {
                                                properties: response.comparison,
                                                onSelect: (id)=>{
                                                    const property = response.comparison.find((row)=>row.id === id);
                                                    setSelected(property);
                                                    setShowDetails(true);
                                                    setChatOpen(false);
                                                    persistSelection(property);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 214,
                                                columnNumber: 47
                                            }, this),
                                            response.commute?.status === 'NEEDS_DESTINATION' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Choose your office destination:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 71
                                                    }, this),
                                                    response.commute.choices?.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "rental-suggestion",
                                                            onClick: ()=>void send('Calculate the commute from this property to my office.', choice.id),
                                                            children: choice.name
                                                        }, choice.id, false, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 150
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 215,
                                                columnNumber: 66
                                            }, this),
                                            (response.locationChoices?.length ?? 0) > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rental-location-choices",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Choose the location to focus on the map:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 102
                                                    }, this),
                                                    response.locationChoices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "rental-suggestion",
                                                            onClick: ()=>{
                                                                setFocusPoint(choice.location);
                                                                setChatOpen(false);
                                                            },
                                                            children: choice.name
                                                        }, choice.id, false, {
                                                            fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 190
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Google Maps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 340
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 216,
                                                columnNumber: 61
                                            }, this),
                                            response.aiUsed === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rental-quiet",
                                                children: [
                                                    response.modelAvailable ? 'Gemini is temporarily unavailable.' : 'Gemini is not configured.',
                                                    " Basic requirement matching is active."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 217,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 204,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messageEnd
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 219,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 196,
                                columnNumber: 9
                            }, this),
                            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-chat-reference",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            session?.conversation.pinnedPropertyIds.includes(selected.id) ? 'Pinned' : 'Selected',
                                            ": ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rental-text-button",
                                                onClick: ()=>{
                                                    setShowDetails(true);
                                                    setChatOpen(false);
                                                },
                                                children: selected.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 221,
                                                columnNumber: 156
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 221,
                                        columnNumber: 61
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: [
                                            "ID ",
                                            selected.id.slice(-6),
                                            " · ",
                                            session?.conversation.pinnedPropertyIds.length ?? 0,
                                            " pinned"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 222,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 221,
                                columnNumber: 22
                            }, this),
                            !!session?.conversation.pinnedPropertyIds.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-pinned-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rental-text-button",
                                        disabled: sending,
                                        onClick: ()=>void send('Compare my pinned properties'),
                                        children: "Compare pinned properties"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 223,
                                        columnNumber: 101
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rental-text-button",
                                        onClick: ()=>{
                                            const current = sessionRef.current;
                                            if (!current) return;
                                            void enqueue(async ()=>{
                                                const fresh = sessionRef.current;
                                                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$rental$2d$assistant$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationRequest"])(`conversations/${fresh.credentials.id}/selection`, {
                                                    method: 'PATCH',
                                                    body: JSON.stringify({
                                                        expectedRevision: fresh.conversation.revision,
                                                        selectedPropertyId: selected?.id ?? null,
                                                        pinnedPropertyIds: []
                                                    })
                                                }, fresh.credentials);
                                                updateSession({
                                                    ...fresh,
                                                    conversation: result.data
                                                });
                                            }).catch((failure)=>setError(failure.message));
                                        },
                                        children: "Clear pins"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 224,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 223,
                                columnNumber: 62
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rental-error",
                                role: "alert",
                                children: [
                                    error,
                                    !session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "light",
                                        onClick: ()=>setRetry((value)=>value + 1),
                                        children: "Retry conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 225,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 225,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "rental-composer",
                                onSubmit: (event)=>{
                                    event.preventDefault();
                                    void send();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "sr-only",
                                        htmlFor: "rental-message",
                                        children: "Message your rental assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 226,
                                        columnNumber: 104
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "rental-message",
                                        ref: composer,
                                        value: input,
                                        onChange: (event)=>setInput(event.target.value),
                                        placeholder: "A 1BHK near my office, under ₹25k…",
                                        rows: 2,
                                        maxLength: 2000,
                                        onKeyDown: (event)=>{
                                            if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
                                                event.preventDefault();
                                                void send();
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 227,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Search real inventory. Confirm before you visit."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 229,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: sending || starting || !session || !input.trim(),
                                                type: "submit",
                                                children: sending ? 'Checking…' : 'Send'
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                                lineNumber: 229,
                                                columnNumber: 77
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                        lineNumber: 229,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                                lineNumber: 226,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                        lineNumber: 191,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
                lineNumber: 172,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/rental-assistant/rental-explorer.tsx",
        lineNumber: 168,
        columnNumber: 10
    }, this);
}
_s(RentalExplorer, "ThjtEv3JO0KJSu8yJ2YT1q7V9D8=");
_c1 = RentalExplorer;
var _c, _c1;
__turbopack_context__.k.register(_c, "RentalMap");
__turbopack_context__.k.register(_c1, "RentalExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_1goglw23_jugt._.js.map