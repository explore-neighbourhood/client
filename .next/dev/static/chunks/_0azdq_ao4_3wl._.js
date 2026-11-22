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
"[project]/src/features/neighborhood/person-journey.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PersonJourney",
    ()=>PersonJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/js-api-loader/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/google-loader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/geometry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function bearing(from, to) {
    const radians = Math.PI / 180;
    const longitude = (to.lng - from.lng) * radians;
    const latitude = from.lat * radians;
    const destination = to.lat * radians;
    return (Math.atan2(Math.sin(longitude) * Math.cos(destination), Math.cos(latitude) * Math.sin(destination) - Math.sin(latitude) * Math.cos(destination) * Math.cos(longitude)) / radians + 360) % 360;
}
function PersonJourney({ origin, path, active, paused, onPosition, onProgress, onMap, onStreet, onNearby }) {
    _s();
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        point: origin,
        heading: 0
    });
    const distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const ground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const terrain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const positionCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onPosition);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('preparing');
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [attempt, setAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [follow, setFollow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [failure, setFailure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [camera, setCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('street');
    const cameraPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        range: 8,
        tilt: 82
    });
    const start = path?.[0] ?? origin;
    const cumulative = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PersonJourney.useMemo[cumulative]": ()=>{
            let total = 0;
            return (path ?? []).map({
                "PersonJourney.useMemo[cumulative]": (point, index)=>{
                    if (index > 0) total += (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMeters"])(path[index - 1], point);
                    return total;
                }
            }["PersonJourney.useMemo[cumulative]"]);
        }
    }["PersonJourney.useMemo[cumulative]"], [
        path
    ]);
    const total = cumulative.at(-1) ?? 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            onProgress?.(total > 0 ? progress / total : 0);
        }
    }["PersonJourney.useEffect"], [
        progress,
        total,
        onProgress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            cameraPreset.current = camera === 'street' ? {
                range: 8,
                tilt: 82
            } : {
                range: 24,
                tilt: 60
            };
            update(pose.current, true);
        }
    }["PersonJourney.useEffect"], [
        camera
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            positionCallback.current = onPosition;
        }
    }["PersonJourney.useEffect"], [
        onPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            const element = controls.current;
            const stage = element?.closest('.map-stage');
            if (!element || !stage) return;
            const observer = new ResizeObserver({
                "PersonJourney.useEffect": ()=>{
                    const height = element.getBoundingClientRect().height;
                    if (height > 0) stage.style.setProperty('--person-controls-height', `${height}px`);
                }
            }["PersonJourney.useEffect"]);
            observer.observe(element);
            return ({
                "PersonJourney.useEffect": ()=>{
                    observer.disconnect();
                    stage.style.removeProperty('--person-controls-height');
                }
            })["PersonJourney.useEffect"];
        }
    }["PersonJourney.useEffect"], []);
    function update(next, followCamera) {
        const current = scene.current;
        pose.current = next;
        if (!current) return;
        current.person.position = {
            ...next.point,
            altitude: 0
        };
        current.person.orientation = {
            heading: next.heading,
            tilt: 270,
            roll: 0
        };
        if (followCamera) {
            current.map.center = {
                ...next.point,
                altitude: ground.current + 1
            };
            current.map.heading = next.heading;
            current.map.range = cameraPreset.current.range;
            current.map.tilt = cameraPreset.current.tilt;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            let disposed = false;
            let failed = false;
            let map;
            const abort = new AbortController();
            setStatus('preparing');
            setFailure('');
            setPlaying(false);
            distance.current = 0;
            setProgress(0);
            ground.current = 0;
            const initialHeading = path && path.length > 1 ? bearing(path[0], path[1]) : 0;
            pose.current = {
                point: start,
                heading: initialHeading
            };
            const fail = {
                "PersonJourney.useEffect.fail": ()=>{
                    if (disposed) return;
                    failed = true;
                    clearTimeout(timeout);
                    abort.abort();
                    setPlaying(false);
                    setFailure('The Google 3D scene could not prepare. Retry, use Street View or continue on the map.');
                    setStatus('error');
                }
            }["PersonJourney.useEffect.fail"];
            const timeout = setTimeout(fail, 20000);
            async function prepare() {
                const key = ("TURBOPACK compile-time value", "AIzaSyD7rqUpTzUpEbxm-Xc7ikltFJGzOhd92Qk");
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGoogleMaps"])(key);
                // Only the selected, application-owned GLB is prepared. Google loads its own scene.
                const [library, elevation, asset] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('maps3d'),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('elevation'),
                    fetch('/models/pedestrian.glb', {
                        signal: abort.signal,
                        cache: 'force-cache'
                    })
                ]);
                if (!asset.ok) throw new Error('Pedestrian asset unavailable');
                const bytes = await asset.arrayBuffer();
                if (bytes.byteLength < 12 || new DataView(bytes).getUint32(0, true) !== 0x46546c67) throw new Error('Invalid GLB');
                const points = path?.length ? path : [
                    origin
                ];
                const stride = Math.max(1, Math.ceil(points.length / 32));
                const samples = points.map({
                    "PersonJourney.useEffect.prepare.samples": (point, index)=>({
                            point,
                            meters: cumulative[index] ?? 0
                        })
                }["PersonJourney.useEffect.prepare.samples"]).filter({
                    "PersonJourney.useEffect.prepare.samples": (_, index)=>index % stride === 0 || index === points.length - 1
                }["PersonJourney.useEffect.prepare.samples"]);
                const heights = await new elevation.ElevationService().getElevationForLocations({
                    locations: samples.map({
                        "PersonJourney.useEffect.prepare": (sample)=>sample.point
                    }["PersonJourney.useEffect.prepare"])
                });
                if (heights.results.length !== samples.length) throw new Error('Terrain elevation unavailable');
                if (disposed || failed || !target.current) return;
                terrain.current = heights.results.map({
                    "PersonJourney.useEffect.prepare": (result, index)=>({
                            meters: samples[index].meters,
                            altitude: result.elevation
                        })
                }["PersonJourney.useEffect.prepare"]);
                ground.current = terrain.current[0].altitude;
                map = new library.Map3DElement({
                    center: {
                        ...start,
                        altitude: ground.current + 1
                    },
                    ...cameraPreset.current,
                    heading: initialHeading,
                    mode: 'HYBRID',
                    defaultUIHidden: false,
                    gestureHandling: 'GREEDY'
                });
                const person = new library.Model3DElement({
                    src: new URL('/models/pedestrian.glb', window.location.origin),
                    position: {
                        ...start,
                        altitude: 0
                    },
                    altitudeMode: 'CLAMP_TO_GROUND',
                    scale: 1,
                    orientation: {
                        heading: initialHeading,
                        tilt: 270,
                        roll: 0
                    }
                });
                map.append(person);
                scene.current = {
                    map,
                    person
                };
                map.addEventListener('gmp-steadychange', {
                    "PersonJourney.useEffect.prepare": (event)=>{
                        if (disposed || failed || !event.isSteady) return;
                        clearTimeout(timeout);
                        setStatus('ready');
                    }
                }["PersonJourney.useEffect.prepare"]);
                map.addEventListener('gmp-error', fail);
                // Road placement is explicit. A clicked point is not asserted to be a road snap.
                map.addEventListener('gmp-click', {
                    "PersonJourney.useEffect.prepare": (event)=>{
                        if (!event.position || total > 0) return;
                        const point = {
                            lat: event.position.lat,
                            lng: event.position.lng
                        };
                        ground.current = event.position.altitude;
                        update({
                            point,
                            heading: pose.current.heading
                        }, true);
                        positionCallback.current(point);
                    }
                }["PersonJourney.useEffect.prepare"]);
                target.current.replaceChildren(map);
                positionCallback.current(start);
            }
            void prepare().catch({
                "PersonJourney.useEffect": ()=>{
                    if (!abort.signal.aborted) fail();
                }
            }["PersonJourney.useEffect"]);
            return ({
                "PersonJourney.useEffect": ()=>{
                    disposed = true;
                    abort.abort();
                    clearTimeout(timeout);
                    map?.stopCameraAnimation();
                    map?.remove();
                    scene.current = null;
                }
            })["PersonJourney.useEffect"];
        }
    }["PersonJourney.useEffect"], [
        start.lat,
        start.lng,
        attempt,
        path
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            if (!active || paused) setPlaying(false);
        }
    }["PersonJourney.useEffect"], [
        active,
        paused
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            const pause = {
                "PersonJourney.useEffect.pause": ()=>{
                    if (document.hidden) setPlaying(false);
                }
            }["PersonJourney.useEffect.pause"];
            document.addEventListener('visibilitychange', pause);
            return ({
                "PersonJourney.useEffect": ()=>document.removeEventListener('visibilitychange', pause)
            })["PersonJourney.useEffect"];
        }
    }["PersonJourney.useEffect"], []);
    function placeAtDistance(meters, headingBlend, followCamera) {
        if (!path || path.length < 2 || terrain.current.length === 0) return;
        distance.current = Math.max(0, Math.min(total, meters));
        const end = cumulative.findIndex((meters)=>meters > distance.current);
        const index = end < 0 ? path.length - 1 : Math.max(1, end);
        const from = path[index - 1];
        const to = path[index];
        const length = cumulative[index] - cumulative[index - 1];
        const ratio = length > 0 ? (distance.current - cumulative[index - 1]) / length : 1;
        const point = {
            lat: from.lat + (to.lat - from.lat) * ratio,
            lng: from.lng + (to.lng - from.lng) * ratio
        };
        const desired = bearing(from, to);
        const elevationEnd = terrain.current.findIndex((sample)=>sample.meters > distance.current);
        const elevationIndex = elevationEnd < 0 ? terrain.current.length - 1 : Math.max(1, elevationEnd);
        const low = terrain.current[Math.max(0, elevationIndex - 1)];
        const high = terrain.current[elevationIndex];
        const span = high.meters - low.meters;
        const elevationRatio = span > 0 ? Math.min(1, (distance.current - low.meters) / span) : 1;
        ground.current = low.altitude + (high.altitude - low.altitude) * elevationRatio;
        const change = (desired - pose.current.heading + 540) % 360 - 180;
        const heading = (pose.current.heading + change * headingBlend + 360) % 360;
        update({
            point,
            heading
        }, followCamera);
        return point;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonJourney.useEffect": ()=>{
            if (!playing || !active || paused || status !== 'ready' || !path || total === 0) return;
            let frame = 0;
            let previous = 0;
            let published = 0;
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            function tick(now) {
                const elapsed = previous ? Math.min((now - previous) / 1000, .1) : 0;
                previous = now;
                distance.current = Math.min(total, distance.current + elapsed * 1.4 * speed);
                const point = placeAtDistance(distance.current, Math.min(1, elapsed * 5), follow && !reducedMotion);
                if (!point) {
                    setPlaying(false);
                    return;
                }
                if (now - published >= 150 || distance.current >= total) {
                    published = now;
                    positionCallback.current(point);
                    setProgress(distance.current);
                }
                if (distance.current >= total) {
                    setPlaying(false);
                    return;
                }
                frame = requestAnimationFrame(tick);
            }
            frame = requestAnimationFrame(tick);
            return ({
                "PersonJourney.useEffect": ()=>cancelAnimationFrame(frame)
            })["PersonJourney.useEffect"];
        }
    }["PersonJourney.useEffect"], [
        playing,
        active,
        paused,
        status,
        path,
        cumulative,
        total,
        follow,
        speed
    ]);
    function seek(meters) {
        setPlaying(false);
        const point = placeAtDistance(meters, 1, follow);
        if (!point) return;
        setProgress(distance.current);
        positionCallback.current(point);
    }
    function reset() {
        setPlaying(false);
        distance.current = 0;
        setProgress(0);
        ground.current = terrain.current[0]?.altitude ?? ground.current;
        update({
            point: start,
            heading: path && path.length > 1 ? bearing(path[0], path[1]) : 0
        }, true);
        positionCallback.current(start);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "person-journey",
        hidden: !active,
        "aria-label": "Google Maps 3D person exploration",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: target,
                className: "person-map"
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: controls,
                className: "person-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "playback-topline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Journey playback"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 254,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                role: "status",
                                children: [
                                    Math.round(progress),
                                    " m",
                                    total > 0 ? ` of ${Math.round(total)} m` : ' · Choose a route to begin'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 254,
                                columnNumber: 76
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "journey-scrubber",
                        type: "range",
                        "aria-label": "Journey progress",
                        min: "0",
                        max: Math.max(1, Math.ceil(total)),
                        step: "1",
                        value: Math.round(progress),
                        disabled: status !== 'ready' || total === 0,
                        onChange: (event)=>seek(Number(event.target.value))
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "playback-primary",
                                "aria-label": playing ? 'Pause journey' : progress >= total && total > 0 ? 'Replay journey' : 'Play journey',
                                type: "button",
                                disabled: status !== 'ready' || total === 0 || paused,
                                onClick: ()=>{
                                    if (distance.current >= total) reset();
                                    setPlaying((value)=>!value);
                                },
                                children: playing ? 'Pause' : progress >= total && total > 0 ? 'Replay' : 'Play'
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                disabled: status !== 'ready',
                                "aria-label": "Restart journey",
                                onClick: reset,
                                children: "Restart"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "playback-speed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Speed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                        lineNumber: 262,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        "aria-label": "Playback speed",
                                        value: speed,
                                        onChange: (event)=>setSpeed(Number(event.target.value)),
                                        children: [
                                            1,
                                            2,
                                            4,
                                            8,
                                            16
                                        ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: value,
                                                children: [
                                                    value,
                                                    "×"
                                                ]
                                            }, value, true, {
                                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                                lineNumber: 263,
                                                columnNumber: 44
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                        lineNumber: 262,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "playback-camera",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Camera"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                        lineNumber: 265,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        "aria-label": "Journey camera",
                                        value: camera,
                                        onChange: (event)=>{
                                            setCamera(event.target.value);
                                            setFollow(true);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "street",
                                                children: "Street level"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                                lineNumber: 266,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "overview",
                                                children: "Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                                lineNumber: 266,
                                                columnNumber: 57
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                        lineNumber: 265,
                                        columnNumber: 65
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "person-options",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        children: "Options"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "person-options-menu",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "light",
                                                type: "button",
                                                "aria-pressed": follow,
                                                onClick: (event)=>{
                                                    event.currentTarget.closest('details')?.removeAttribute('open');
                                                    const next = !follow;
                                                    setFollow(next);
                                                    setPlaying(false);
                                                    if (next) update(pose.current, true);
                                                },
                                                children: "Follow person"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "light",
                                                type: "button",
                                                onClick: (event)=>{
                                                    event.currentTarget.closest('details')?.removeAttribute('open');
                                                    onNearby();
                                                },
                                                children: "Nearby Places"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "playback-note",
                        children: "Illustrative playback speed · Drag the timeline to explore any point"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            status === 'preparing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "walk-feedback",
                role: "status",
                children: "Preparing Google 3D map and person…"
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                lineNumber: 278,
                columnNumber: 34
            }, this),
            status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "walk-feedback",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: failure
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setAttempt((value)=>value + 1),
                                children: "Retry 3D"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                onClick: onStreet,
                                children: "Street View"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                onClick: onMap,
                                children: "Map View"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/person-journey.tsx",
                lineNumber: 279,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/neighborhood/person-journey.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_s(PersonJourney, "YvEOsft8vF6ZQGYnZGKGvTiOfBs=");
_c = PersonJourney;
var _c;
__turbopack_context__.k.register(_c, "PersonJourney");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/person-journey.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/neighborhood/person-journey.tsx [app-client] (ecmascript)"));
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

//# sourceMappingURL=_0azdq_ao4_3wl._.js.map