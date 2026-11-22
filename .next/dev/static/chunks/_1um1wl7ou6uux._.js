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
"[project]/src/features/property-search/components/globe-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobeMap",
    ()=>GlobeMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/js-api-loader/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/area.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/geometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/google-loader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/map-legend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/property-details.tsx [app-client] (ecmascript)");
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
function GlobeMap({ apiKey, onFallback, area, pendingPin, properties, selectedId, neighborhood, draft, drawing, onPick, onSelect, onPlace }) {
    _s();
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onPick,
        onSelect,
        onPlace
    });
    const [scene, setScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [attempt, setAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const selected = properties.find((home)=>home.id === selectedId);
    const focus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlobeMap.useMemo[focus]": ()=>{
            let points = [
                pendingPin ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$area$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cityView"]
            ];
            if (area?.kind === 'radius') points = [
                area.center
            ];
            if (area?.kind === 'polygon' && area.points.length) points = [
                ...area.points
            ];
            if (selected) points = [
                selected.location
            ];
            if (neighborhood.route.length) points = neighborhood.route;
            const center = points.reduce({
                "GlobeMap.useMemo[focus].center": (sum, point)=>({
                        lat: sum.lat + point.lat / points.length,
                        lng: sum.lng + point.lng / points.length
                    })
            }["GlobeMap.useMemo[focus].center"], {
                lat: 0,
                lng: 0
            });
            const radius = points.reduce({
                "GlobeMap.useMemo[focus].radius": (maximum, point)=>Math.max(maximum, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMeters"])(center, point))
            }["GlobeMap.useMemo[focus].radius"], 0);
            let range = Math.max(600, radius * 3);
            if (!selected && !neighborhood.route.length && area?.kind === 'radius') range = Math.max(600, area.radiusKm * 3000);
            if (!selected && !area && !pendingPin && !neighborhood.route.length) range = 12000;
            return {
                center,
                range
            };
        }
    }["GlobeMap.useMemo[focus]"], [
        area,
        pendingPin,
        selected?.location.lat,
        selected?.location.lng,
        neighborhood.route
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeMap.useEffect": ()=>{
            callbacks.current = {
                onPick,
                onSelect,
                onPlace
            };
        }
    }["GlobeMap.useEffect"], [
        onPick,
        onSelect,
        onPlace
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeMap.useEffect": ()=>{
            let disposed = false;
            let failed = false;
            let map;
            setScene(undefined);
            setStatus('loading');
            const fail = {
                "GlobeMap.useEffect.fail": ()=>{
                    if (disposed) return;
                    failed = true;
                    clearTimeout(timeout);
                    setStatus('error');
                }
            }["GlobeMap.useEffect.fail"];
            const timeout = setTimeout(fail, 20000);
            async function prepare() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGoogleMaps"])(apiKey);
                const [library, elevation, geometry, markers] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('maps3d'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('elevation'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('geometry'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('marker')
                ]);
                const heights = await new elevation.ElevationService().getElevationForLocations({
                    locations: [
                        focus.center
                    ]
                });
                const altitude = heights.results[0]?.elevation;
                if (altitude === undefined) throw new Error('Terrain height unavailable');
                if (disposed || failed || !target.current) return;
                map = new library.Map3DElement({
                    center: {
                        ...focus.center,
                        altitude
                    },
                    range: focus.range,
                    tilt: 55,
                    mode: 'HYBRID',
                    gestureHandling: 'COOPERATIVE'
                });
                map.addEventListener('gmp-steadychange', {
                    "GlobeMap.useEffect.prepare": (event)=>{
                        if (disposed || failed || !event.isSteady) return;
                        clearTimeout(timeout);
                        setStatus('ready');
                    }
                }["GlobeMap.useEffect.prepare"]);
                map.addEventListener('gmp-error', fail);
                map.addEventListener('gmp-click', {
                    "GlobeMap.useEffect.prepare": (event)=>{
                        if (event.position && !event.defaultPrevented) callbacks.current.onPick({
                            lat: event.position.lat,
                            lng: event.position.lng
                        });
                    }
                }["GlobeMap.useEffect.prepare"]);
                target.current.replaceChildren(map);
                setScene({
                    map,
                    library,
                    geometry,
                    markers,
                    altitude
                });
            }
            void prepare().catch(fail);
            return ({
                "GlobeMap.useEffect": ()=>{
                    disposed = true;
                    clearTimeout(timeout);
                    map?.stopCameraAnimation();
                    map?.remove();
                }
            })["GlobeMap.useEffect"];
        }
    }["GlobeMap.useEffect"], [
        apiKey,
        focus,
        attempt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeMap.useEffect": ()=>{
            if (!scene) return;
            const { map, library, geometry } = scene;
            const overlays = [];
            const marker = {
                "GlobeMap.useEffect.marker": (position, label, action, options = {})=>{
                    const element = new library.Marker3DInteractiveElement({
                        position,
                        label,
                        title: options.title ?? label,
                        altitudeMode: 'CLAMP_TO_GROUND',
                        drawsWhenOccluded: true
                    });
                    element.append(new scene.markers.PinElement({
                        background: '#087e79',
                        borderColor: '#fff',
                        glyphColor: '#fff',
                        ...options.pin
                    }));
                    element.addEventListener('gmp-click', {
                        "GlobeMap.useEffect.marker": (event)=>{
                            event.preventDefault();
                            event.stopPropagation();
                            action?.();
                        }
                    }["GlobeMap.useEffect.marker"]);
                    overlays.push(element);
                }
            }["GlobeMap.useEffect.marker"];
            properties.forEach({
                "GlobeMap.useEffect": (home)=>marker(home.location, `${selectedId === home.id ? 'Selected · ' : ''}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listingPrice"])(home)}`, {
                        "GlobeMap.useEffect": ()=>callbacks.current.onSelect(home.id)
                    }["GlobeMap.useEffect"], {
                        title: `${home.title} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$property$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listingPrice"])(home)}`,
                        pin: {
                            background: selectedId === home.id ? '#172b3c' : '#087e79'
                        }
                    })
            }["GlobeMap.useEffect"]);
            const facility = neighborhood.category ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["facilityMarkers"][neighborhood.category] : {
                color: '#ad601f',
                glyph: '•'
            };
            neighborhood.places.forEach({
                "GlobeMap.useEffect": (place)=>marker(place.location, place.name, {
                        "GlobeMap.useEffect": ()=>callbacks.current.onPlace(place.id)
                    }["GlobeMap.useEffect"], {
                        pin: {
                            background: facility.color,
                            glyphText: facility.glyph
                        }
                    })
            }["GlobeMap.useEffect"]);
            if (pendingPin && !drawing) marker(pendingPin, 'Selected location', undefined, {
                pin: {
                    glyphText: '+'
                }
            });
            const polygon = area?.kind === 'radius' ? Array.from({
                length: 65
            }, {
                "GlobeMap.useEffect": (_, index)=>geometry.spherical.computeOffset(area.center, area.radiusKm * 1000, index * 360 / 64).toJSON()
            }["GlobeMap.useEffect"]) : area?.kind === 'polygon' ? area.points : [];
            if (polygon.length >= 3) overlays.push(new library.Polygon3DElement({
                outerCoordinates: polygon,
                fillColor: '#087e7928',
                strokeColor: '#087e79',
                strokeWidth: 2,
                altitudeMode: 'CLAMP_TO_GROUND'
            }));
            if (neighborhood.route.length > 1) overlays.push(new library.Polyline3DElement({
                coordinates: neighborhood.route,
                strokeColor: '#2554a4',
                strokeWidth: 5,
                altitudeMode: 'CLAMP_TO_GROUND'
            }));
            if (drawing && draft.length) {
                draft.forEach({
                    "GlobeMap.useEffect": (point, index)=>marker(point, String(index + 1))
                }["GlobeMap.useEffect"]);
                overlays.push(new library.Polyline3DElement({
                    coordinates: draft,
                    strokeColor: '#087e79',
                    strokeWidth: 3,
                    altitudeMode: 'CLAMP_TO_GROUND'
                }));
            }
            map.append(...overlays);
            return ({
                "GlobeMap.useEffect": ()=>overlays.forEach({
                        "GlobeMap.useEffect": (element)=>element.remove()
                    }["GlobeMap.useEffect"])
            })["GlobeMap.useEffect"];
        }
    }["GlobeMap.useEffect"], [
        scene,
        properties,
        selectedId,
        neighborhood.places,
        neighborhood.category,
        neighborhood.route,
        area,
        drawing,
        draft,
        pendingPin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeMap.useEffect": ()=>{
            if (!scene || !neighborhood.streetPoint) return;
            const marker = new scene.library.Marker3DElement({
                position: neighborhood.streetPoint,
                label: 'Journey position',
                altitudeMode: 'CLAMP_TO_GROUND'
            });
            scene.map.append(marker);
            return ({
                "GlobeMap.useEffect": ()=>marker.remove()
            })["GlobeMap.useEffect"];
        }
    }["GlobeMap.useEffect"], [
        scene,
        neighborhood.streetPoint
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "globe-map",
                ref: target,
                "aria-label": "Google 3D globe map"
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                lineNumber: 147,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "light",
                        disabled: !scene || status !== 'ready',
                        onClick: ()=>{
                            if (!scene) return;
                            scene.map.stopCameraAnimation();
                            scene.map.center = {
                                ...focus.center,
                                altitude: scene.altitude
                            };
                            scene.map.range = focus.range;
                            scene.map.tilt = 55;
                        },
                        children: "Reset view"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                        lineNumber: 149,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "light",
                        disabled: !scene || status !== 'ready',
                        onClick: ()=>{
                            if (!scene) return;
                            scene.map.stopCameraAnimation();
                            scene.map.range = 20000000;
                            scene.map.tilt = 0;
                        },
                        children: "Show globe"
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                        lineNumber: 156,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$map$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapLegend"], {
                        neighborhood: neighborhood
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                        lineNumber: 162,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                lineNumber: 148,
                columnNumber: 5
            }, this),
            status === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-loading-overlay",
                role: "status",
                children: "Preparing 3D view…"
            }, void 0, false, {
                fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                lineNumber: 164,
                columnNumber: 30
            }, this),
            status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-loading-overlay",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "3D view is unavailable on this device or connection."
                    }, void 0, false, {
                        fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                        lineNumber: 166,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setAttempt((value)=>value + 1),
                                children: "Retry 3D view"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                                lineNumber: 168,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "light",
                                onClick: onFallback,
                                children: "Use Default view"
                            }, void 0, false, {
                                fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                                lineNumber: 169,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                        lineNumber: 167,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/property-search/components/globe-map.tsx",
                lineNumber: 165,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/property-search/components/globe-map.tsx",
        lineNumber: 146,
        columnNumber: 10
    }, this);
}
_s(GlobeMap, "6WJ9ovbyJQTgL/pnM9m1tZ1eIUY=");
_c = GlobeMap;
var _c;
__turbopack_context__.k.register(_c, "GlobeMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/property-search/components/globe-map.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/property-search/components/globe-map.tsx [app-client] (ecmascript)"));
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
]);

//# sourceMappingURL=_1um1wl7ou6uux._.js.map