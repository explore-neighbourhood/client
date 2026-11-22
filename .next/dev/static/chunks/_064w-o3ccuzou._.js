(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@googlemaps/js-api-loader/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader,
    "importLibrary",
    ()=>importLibrary,
    "setOptions",
    ()=>setOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const MSG_DEPRECATED_LOADER = "The Loader class is no longer available in this version." + "\nPlease use the new functional API: setOptions() and importLibrary()." + "\nFor more information, see the updated documentation at: " + "https://github.com/googlemaps/js-api-loader/blob/main/README.md";
const MSG_REPEATED_SET_OPTIONS = (options)=>`The setOptions() function should only be called once. The options passed ` + `to the additional call (${JSON.stringify(options)}) will be ignored.`;
const MSG_IMPORT_LIBRARY_EXISTS = (options)=>`The google.maps.importLibrary() function is already defined, and ` + `@googlemaps/js-api-loader will use the existing function instead of ` + `overwriting it. The options passed to setOptions ` + `(${JSON.stringify(options)}) will be ignored.`;
const MSG_SET_OPTIONS_NOT_CALLED = "No options were set before calling importLibrary. Make sure to configure " + "the loader using setOptions().";
const MSG_SCRIPT_ELEMENT_EXISTS = "There already is a script loading the Google Maps JavaScript " + "API, and no google.maps.importLibrary function is defined. " + "@googlemaps/js-api-loader will proceed to bootstrap the API " + "with the specified options, but the existing script might cause " + "problems using the API. Make sure to remove the script " + "loading the API.";
const MSG_API_KEY_USED = "The 'apiKey' parameter was used in setOptions(), but 'key' is the correct " + "parameter name. Please update your configuration.";
const MSG_TRUSTED_TYPES_POLICY_FAILED = (policyName, error)=>`Failed to create Trusted Types policy "${policyName}": ${error instanceof Error ? error.message : String(error)}.\n\n` + `If your Content Security Policy uses "require-trusted-types-for 'script'", ` + `allow this policy with "trusted-types ${policyName} google-maps-api-loader google-maps-api#html lit-html". ` + `The "google-maps-api-loader", "lit-html", and "google-maps-api#html" policies are required for full Maps JavaScript API execution. ` + `Falling back to a string script URL.`;
const __DEV__$1 = ("TURBOPACK compile-time value", "development") !== 'production';
const logDevWarning = ("TURBOPACK compile-time truthy", 1) ? (message)=>{
    console.warn(`[@googlemaps/js-api-loader] ${message}`);
} : "TURBOPACK unreachable";
const logDevNotice = ("TURBOPACK compile-time truthy", 1) ? (message)=>{
    console.info(`[@googlemaps/js-api-loader] ${message}`);
} : "TURBOPACK unreachable";
/*
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const TRUSTED_TYPES_POLICY_NAME = "@googlemaps/js-api-loader";
const fallbackPolicy = {
    createScriptURL: (url)=>url
};
let policy;
/*
 * Tries to create a Trusted Types policy when supported. Falls back to a string passthrough
 * when Trusted Types is unsupported, blocked by CSP, or already registered.
 */ function getPolicy() {
    if (policy) {
        return policy;
    }
    const trustedTypes = globalThis.trustedTypes;
    if (!trustedTypes) {
        policy = fallbackPolicy;
        return policy;
    }
    try {
        policy = trustedTypes.createPolicy(TRUSTED_TYPES_POLICY_NAME, {
            createScriptURL: (url)=>url
        });
    } catch (e) {
        logDevWarning(MSG_TRUSTED_TYPES_POLICY_FAILED(TRUSTED_TYPES_POLICY_NAME, e));
        policy = fallbackPolicy;
    }
    return policy;
}
function setScriptSrc(script, src) {
    script.src = getPolicy().createScriptURL(src);
}
/*
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const bootstrap = (bootstrapParams)=>{
    var bootstrapPromise;
    var script;
    var bootstrapParamsKey;
    var PRODUCT_NAME = "The Google Maps JavaScript API";
    var GOOGLE = "google";
    var IMPORT_API_NAME = "importLibrary";
    var PENDING_BOOTSTRAP_KEY = "__ib__";
    var doc = document;
    var global_ = window;
    var google_ = global_[GOOGLE] || (global_[GOOGLE] = {});
    var namespace = google_.maps || (google_.maps = {});
    var libraries = new Set();
    var searchParams = new URLSearchParams();
    var triggerBootstrap = ()=>bootstrapPromise || (bootstrapPromise = new Promise(async (resolve, reject)=>{
            await (script = doc.createElement("script"));
            searchParams.set("libraries", [
                ...libraries
            ] + "");
            for(bootstrapParamsKey in bootstrapParams){
                searchParams.set(bootstrapParamsKey.replace(/[A-Z]/g, (g)=>"_" + g[0].toLowerCase()), bootstrapParams[bootstrapParamsKey]);
            }
            searchParams.set("callback", GOOGLE + ".maps." + PENDING_BOOTSTRAP_KEY);
            setScriptSrc(script, "https://maps.googleapis.com/maps/api/js?" + searchParams);
            namespace[PENDING_BOOTSTRAP_KEY] = resolve;
            script.onerror = ()=>bootstrapPromise = reject(Error(PRODUCT_NAME + " could not load."));
            script.nonce = doc.querySelector("script[nonce]")?.nonce || "";
            doc.head.append(script);
        }));
    namespace[IMPORT_API_NAME] ? console.warn(PRODUCT_NAME + " only loads once. Ignoring:", bootstrapParams) : namespace[IMPORT_API_NAME] = (libraryName, ...args)=>libraries.add(libraryName) && triggerBootstrap().then(()=>namespace[IMPORT_API_NAME](libraryName, ...args));
};
/*
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */ /**
 * @deprecated Use the new functional API: `setOptions()` and `importLibrary()`.
 * See the migration guide for more details: MIGRATION.md
 */ class Loader {
    constructor(...args){
        throw new Error(`[@googlemaps/js-api-loader]: ${MSG_DEPRECATED_LOADER}`);
    }
}
/*
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const __DEV__ = ("TURBOPACK compile-time value", "development") !== "production";
let setOptionsWasCalled_ = false;
/**
 * Sets the options for the Maps JavaScript API.
 *
 * Has to be called before any library is loaded.
 *
 * See https://developers.google.com/maps/documentation/javascript/load-maps-js-api#required_parameters
 * for the full documentation of available options.
 *
 * @param options The options to set.
 */ function setOptions(options) {
    if (setOptionsWasCalled_) {
        logDevWarning(MSG_REPEATED_SET_OPTIONS(options));
        return;
    }
    if (options.apiKey) {
        logDevWarning(MSG_API_KEY_USED);
        if (!options.key) {
            options.key = options.apiKey;
        }
    }
    installImportLibrary_(options);
    setOptionsWasCalled_ = true;
}
async function importLibrary(libraryName) {
    if (!setOptionsWasCalled_) {
        logDevWarning(MSG_SET_OPTIONS_NOT_CALLED);
    }
    if (!window?.google?.maps?.importLibrary) {
        throw new Error("google.maps.importLibrary is not installed.");
    }
    return await google.maps.importLibrary(libraryName);
}
/**
 * The installImportLibrary_ function makes sure that a usable version of the
 * `google.maps.importLibrary` function exists.
 */ function installImportLibrary_(options) {
    const importLibraryExists = Boolean(window.google?.maps?.importLibrary);
    if (importLibraryExists) {
        logDevNotice(MSG_IMPORT_LIBRARY_EXISTS(options));
    } else if ("TURBOPACK compile-time truthy", 1) {
        const scriptEl = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
        if (scriptEl) {
            logDevWarning(MSG_SCRIPT_ELEMENT_EXISTS);
        }
    }
    // If the google.maps.importLibrary function already exists, bootstrap()
    // won't do anything, so we won't call it
    if (!importLibraryExists) {
        bootstrap(options);
    }
}
;
}),
"[project]/src/features/property-search/components/google-loader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGoogleMaps",
    ()=>setupGoogleMaps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/js-api-loader/dist/index.js [app-client] (ecmascript)");
;
let configured = false;
function setupGoogleMaps(key) {
    if (configured) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOptions"])({
        key,
        v: 'quarterly',
        region: 'IN'
    });
    configured = true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/google-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleMap",
    ()=>GoogleMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/js-api-loader/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/area.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/google-loader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/map-legend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$appearance$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/appearance/appearance.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const markerPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    notation: 'compact',
    maximumFractionDigits: 1
});
function fit(context, area) {
    const { map, maps } = context;
    if (!area) {
        map.setCenter(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cityView"]);
        map.setZoom(12);
        return;
    }
    if (area.kind === 'radius') {
        const circle = new maps.Circle({
            center: area.center,
            radius: area.radiusKm * 1000
        });
        const bounds = circle.getBounds();
        if (bounds) map.fitBounds(bounds, 46);
        return;
    }
    const bounds = new google.maps.LatLngBounds();
    area.points.forEach((point)=>bounds.extend(point));
    map.fitBounds(bounds, 46);
}
function GoogleMap({ apiKey, mapId, mapType, area, draft, drawing, pendingPin, properties, selectedId, onPick, onSelect, onError, neighborhood, onPlace }) {
    _s();
    const { appearance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$appearance$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppearance"])();
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressMarker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onPick,
        onSelect,
        onError,
        onPlace
    });
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            callbacks.current = {
                onPick,
                onSelect,
                onError,
                onPlace
            };
        }
    }["GoogleMap.useEffect"], [
        onPick,
        onSelect,
        onError,
        onPlace
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            let mounted = true;
            let currentMap;
            let click;
            let initTimeout = setTimeout({
                "GoogleMap.useEffect.initTimeout": ()=>{
                    if (mounted) callbacks.current.onError();
                }
            }["GoogleMap.useEffect.initTimeout"], 10000);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGoogleMaps"])(apiKey);
            Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('maps'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('marker')
            ]).then({
                "GoogleMap.useEffect": ([maps, marker])=>{
                    if (!mounted || !target.current) return;
                    const map = new maps.Map(target.current, {
                        mapId,
                        center: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cityView"],
                        zoom: 12,
                        streetViewControl: false,
                        fullscreenControl: false,
                        mapTypeControl: false,
                        clickableIcons: false,
                        gestureHandling: 'cooperative',
                        zoomControl: true,
                        colorScheme: appearance === 'system' ? 'FOLLOW_SYSTEM' : appearance.toUpperCase(),
                        ...viewport.current
                    });
                    currentMap = map;
                    const ready = map.addListener('tilesloaded', {
                        "GoogleMap.useEffect.ready": ()=>{
                            clearTimeout(initTimeout);
                            initTimeout = undefined;
                            ready.remove();
                        }
                    }["GoogleMap.useEffect.ready"]);
                    click = map.addListener('click', {
                        "GoogleMap.useEffect": (event)=>{
                            if (event.latLng) callbacks.current.onPick(event.latLng.toJSON());
                        }
                    }["GoogleMap.useEffect"]);
                    setContext({
                        map,
                        maps,
                        marker
                    });
                }
            }["GoogleMap.useEffect"]).catch({
                "GoogleMap.useEffect": ()=>{
                    if (mounted) callbacks.current.onError();
                }
            }["GoogleMap.useEffect"]);
            return ({
                "GoogleMap.useEffect": ()=>{
                    mounted = false;
                    if (currentMap) viewport.current = {
                        center: currentMap.getCenter(),
                        zoom: currentMap.getZoom(),
                        heading: currentMap.getHeading(),
                        tilt: currentMap.getTilt()
                    };
                    clearTimeout(initTimeout);
                    click?.remove();
                }
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        apiKey,
        mapId,
        appearance
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            context?.map.setMapTypeId(mapType);
        }
    }["GoogleMap.useEffect"], [
        context,
        mapType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context) return;
            fit(context, area);
            const style = {
                map: context.map,
                fillColor: '#087e79',
                fillOpacity: .16,
                strokeColor: '#087e79',
                strokeWeight: 2,
                clickable: false
            };
            const shape = area?.kind === 'radius' ? new context.maps.Circle({
                ...style,
                center: area.center,
                radius: area.radiusKm * 1000
            }) : area?.kind === 'polygon' ? new context.maps.Polygon({
                ...style,
                paths: [
                    ...area.points
                ]
            }) : null;
            return ({
                "GoogleMap.useEffect": ()=>shape?.setMap(null)
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        context,
        area
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            const element = target.current;
            if (!context || !element) return;
            let frame;
            const observer = new ResizeObserver({
                "GoogleMap.useEffect": (entries)=>{
                    if (!entries.some({
                        "GoogleMap.useEffect": (entry)=>entry.contentRect.width > 0 && entry.contentRect.height > 0
                    }["GoogleMap.useEffect"])) return;
                    if (frame !== undefined) cancelAnimationFrame(frame);
                    frame = requestAnimationFrame({
                        "GoogleMap.useEffect": ()=>{
                            const center = context.map.getCenter();
                            google.maps.event.trigger(context.map, 'resize');
                            if (center) context.map.setCenter(center);
                        }
                    }["GoogleMap.useEffect"]);
                }
            }["GoogleMap.useEffect"]);
            observer.observe(element);
            return ({
                "GoogleMap.useEffect": ()=>{
                    observer.disconnect();
                    if (frame !== undefined) cancelAnimationFrame(frame);
                }
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        context
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context) return;
            if (pendingPin && !drawing) context.map.panTo(pendingPin);
            const points = drawing ? draft : pendingPin ? [
                pendingPin
            ] : [];
            const markers = points.map({
                "GoogleMap.useEffect.markers": (position, index)=>{
                    const pin = new context.marker.PinElement({
                        glyphText: drawing ? String(index + 1) : '+',
                        background: '#e6f7f3',
                        borderColor: '#087e79'
                    });
                    const marker = new context.marker.AdvancedMarkerElement({
                        map: context.map,
                        position
                    });
                    marker.append(pin);
                    return marker;
                }
            }["GoogleMap.useEffect.markers"]);
            const outline = drawing ? new context.maps.Polyline({
                path: [
                    ...draft
                ],
                map: context.map,
                strokeColor: '#087e79',
                clickable: false
            }) : undefined;
            return ({
                "GoogleMap.useEffect": ()=>{
                    markers.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            marker.map = null;
                        }
                    }["GoogleMap.useEffect"]);
                    outline?.setMap(null);
                }
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        context,
        draft,
        drawing,
        pendingPin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context) return;
            const items = properties.map({
                "GoogleMap.useEffect.items": (property)=>{
                    const selected = selectedId === property.id;
                    const priceLabel = property.priceInr === null ? 'Home' : `${markerPrice.format(property.priceInr)}${property.intent === 'rent' ? '/mo' : ''}`;
                    const marker = new context.marker.AdvancedMarkerElement({
                        map: context.map,
                        position: property.location,
                        title: `${property.title} · ${priceLabel}`,
                        gmpClickable: true,
                        zIndex: selected ? 10 : 1,
                        collisionBehavior: selected ? google.maps.CollisionBehavior.REQUIRED : google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY
                    });
                    const label = document.createElement('span');
                    label.className = `property-map-label ${selected ? 'selected' : ''}`;
                    label.textContent = priceLabel;
                    marker.append(label);
                    const listener = marker.addListener('click', {
                        "GoogleMap.useEffect.items.listener": ()=>callbacks.current.onSelect(property.id)
                    }["GoogleMap.useEffect.items.listener"]);
                    return {
                        marker,
                        listener
                    };
                }
            }["GoogleMap.useEffect.items"]);
            return ({
                "GoogleMap.useEffect": ()=>items.forEach({
                        "GoogleMap.useEffect": ({ marker, listener })=>{
                            listener.remove();
                            marker.map = null;
                        }
                    }["GoogleMap.useEffect"])
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        context,
        properties,
        selectedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context) return;
            const items = neighborhood.places.map({
                "GoogleMap.useEffect.items": (place)=>{
                    const style = neighborhood.category ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["facilityMarkers"][neighborhood.category] : {
                        color: '#ad601f',
                        glyph: '•'
                    };
                    const pin = new context.marker.PinElement({
                        background: style.color,
                        borderColor: '#fff',
                        glyphColor: '#fff',
                        glyphText: style.glyph
                    });
                    const marker = new context.marker.AdvancedMarkerElement({
                        map: context.map,
                        position: place.location,
                        title: place.name,
                        gmpClickable: true
                    });
                    marker.append(pin);
                    return {
                        marker,
                        listener: marker.addListener('click', {
                            "GoogleMap.useEffect.items": ()=>callbacks.current.onPlace(place.id)
                        }["GoogleMap.useEffect.items"])
                    };
                }
            }["GoogleMap.useEffect.items"]);
            const route = neighborhood.route.length ? new context.maps.Polyline({
                map: context.map,
                path: neighborhood.route,
                strokeColor: '#2554a4',
                strokeOpacity: .9,
                strokeWeight: 5,
                clickable: false
            }) : undefined;
            return ({
                "GoogleMap.useEffect": ()=>{
                    items.forEach({
                        "GoogleMap.useEffect": ({ marker, listener })=>{
                            listener.remove();
                            marker.map = null;
                        }
                    }["GoogleMap.useEffect"]);
                    route?.setMap(null);
                }
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        context,
        neighborhood.places,
        neighborhood.category,
        neighborhood.route
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context) return;
            const marker = new context.marker.AdvancedMarkerElement({
                title: 'Journey preview position'
            });
            marker.append(new context.marker.PinElement({
                background: '#2554a4',
                borderColor: '#172b3c'
            }));
            progressMarker.current = marker;
            return ({
                "GoogleMap.useEffect": ()=>{
                    marker.map = null;
                    progressMarker.current = null;
                }
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        context
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context || !progressMarker.current) return;
            progressMarker.current.position = neighborhood.streetPoint;
            progressMarker.current.map = neighborhood.streetPoint ? context.map : null;
        }
    }["GoogleMap.useEffect"], [
        context,
        neighborhood.streetPoint
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context || neighborhood.route.length === 0) return;
            const bounds = new google.maps.LatLngBounds();
            neighborhood.route.forEach({
                "GoogleMap.useEffect": (point)=>bounds.extend(point)
            }["GoogleMap.useEffect"]);
            context.map.fitBounds(bounds, 48);
        }
    }["GoogleMap.useEffect"], [
        context,
        neighborhood.route
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (!context || !selectedId) return;
            const property = properties.find({
                "GoogleMap.useEffect.property": (item)=>item.id === selectedId
            }["GoogleMap.useEffect.property"]);
            if (property) context.map.panTo(property.location);
        }
    }["GoogleMap.useEffect"], [
        context,
        selectedId,
        properties
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (context && viewport.current) context.map.setOptions(viewport.current);
        }
    }["GoogleMap.useEffect"], [
        context
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "google-map",
                ref: target
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/google-map.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: ()=>{
                            if (context) fit(context, area);
                        },
                        children: "Reset view"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/google-map.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapLegend"], {
                        neighborhood: neighborhood
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/google-map.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    drawing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select corners on the map to outline your search area."
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/google-map.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/google-map.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/google-map.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_s(GoogleMap, "HEWi6aIJJrfk/RXonLxbocKv/0E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$appearance$2f$appearance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppearance"]
    ];
});
_c = GoogleMap;
var _c;
__turbopack_context__.k.register(_c, "GoogleMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/google-map.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/property-search/components/google-map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_064w-o3ccuzou._.js.map