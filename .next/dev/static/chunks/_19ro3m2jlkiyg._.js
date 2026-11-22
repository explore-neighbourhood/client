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
"[project]/src/features/neighborhood/surroundings-walk.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurroundingsWalk",
    ()=>SurroundingsWalk
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
function SurroundingsWalk({ location, onClose, onPosition }) {
    _s();
    const footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const back = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const previousPano = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const lastPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const walked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onClose,
        onPosition
    });
    const [library, setLibrary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const [meters, setMeters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const checkpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurroundingsWalk.useMemo[checkpoints]": ()=>location.path ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleRoute"])(location.path, goal) : []
    }["SurroundingsWalk.useMemo[checkpoints]"], [
        location.path,
        goal
    ]);
    const requestedPoint = checkpoints[index]?.point ?? location.point;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            callbacks.current = {
                onClose,
                onPosition
            };
        }
    }["SurroundingsWalk.useEffect"], [
        onClose,
        onPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            const focused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            back.current?.focus();
            const escape = {
                "SurroundingsWalk.useEffect.escape": (event)=>{
                    if (event.key === 'Escape') callbacks.current.onClose();
                }
            }["SurroundingsWalk.useEffect.escape"];
            document.addEventListener('keydown', escape);
            return ({
                "SurroundingsWalk.useEffect": ()=>{
                    document.removeEventListener('keydown', escape);
                    focused?.focus({
                        preventScroll: true
                    });
                }
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            const caption = footer.current;
            const stage = caption?.closest('.map-stage');
            if (!caption || !stage) return;
            const observer = new ResizeObserver({
                "SurroundingsWalk.useEffect": ()=>{
                    stage.style.setProperty('--walk-footer-height', `${caption.getBoundingClientRect().height}px`);
                }
            }["SurroundingsWalk.useEffect"]);
            observer.observe(caption);
            return ({
                "SurroundingsWalk.useEffect": ()=>{
                    observer.disconnect();
                    stage.style.removeProperty('--walk-footer-height');
                }
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            let mounted = true;
            const key = ("TURBOPACK compile-time value", "AIzaSyD7rqUpTzUpEbxm-Xc7ikltFJGzOhd92Qk");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGoogleMaps"])(key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('streetView').then({
                "SurroundingsWalk.useEffect": (result)=>{
                    if (mounted) setLibrary(result);
                }
            }["SurroundingsWalk.useEffect"]).catch({
                "SurroundingsWalk.useEffect": ()=>{
                    if (mounted) setStatus('gap');
                }
            }["SurroundingsWalk.useEffect"]);
            return ({
                "SurroundingsWalk.useEffect": ()=>{
                    mounted = false;
                    sequence.current += 1;
                    if (viewer.current) {
                        google.maps.event.clearInstanceListeners(viewer.current);
                        viewer.current.setVisible(false);
                    }
                }
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], []);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SurroundingsWalk.useCallback[show]": async (request)=>{
            if (!library) return;
            const generation = ++sequence.current;
            setStatus('loading');
            setMessage('');
            let timeout;
            try {
                const service = new library.StreetViewService();
                const response = await Promise.race([
                    service.getPanorama(request),
                    new Promise({
                        "SurroundingsWalk.useCallback[show]": (_, reject)=>{
                            timeout = setTimeout({
                                "SurroundingsWalk.useCallback[show]": ()=>reject(new Error('Coverage timeout'))
                            }["SurroundingsWalk.useCallback[show]"], 10000);
                        }
                    }["SurroundingsWalk.useCallback[show]"])
                ]);
                if (generation !== sequence.current || !target.current) return;
                const { data } = response;
                if (!data.location?.pano) throw new Error('No panorama');
                if (!viewer.current) {
                    viewer.current = new library.StreetViewPanorama(target.current, {
                        pano: data.location.pano,
                        addressControl: false,
                        fullscreenControl: false,
                        imageDateControl: true,
                        motionTracking: false,
                        linksControl: true,
                        panControl: true,
                        zoomControl: true,
                        clickToGo: true
                    });
                    viewer.current.addListener('position_changed', {
                        "SurroundingsWalk.useCallback[show]": ()=>{
                            const point = viewer.current?.getPosition()?.toJSON();
                            if (!point) return;
                            if (lastPosition.current) walked.current += (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMeters"])(lastPosition.current, point);
                            lastPosition.current = point;
                            setMeters(Math.round(walked.current));
                            callbacks.current.onPosition(point);
                        }
                    }["SurroundingsWalk.useCallback[show]"]);
                } else {
                    const current = viewer.current.getPano();
                    if (current !== data.location.pano) previousPano.current = current;
                    viewer.current.setPano(data.location.pano);
                    viewer.current.setVisible(true);
                }
                setDate(data.imageDate);
                setStatus('ready');
                requestAnimationFrame({
                    "SurroundingsWalk.useCallback[show]": ()=>{
                        if (generation === sequence.current && viewer.current) google.maps.event.trigger(viewer.current, 'resize');
                    }
                }["SurroundingsWalk.useCallback[show]"]);
            } catch  {
                if (generation === sequence.current) {
                    setPlaying(false);
                    setStatus('gap');
                    viewer.current?.setVisible(false);
                }
            } finally{
                clearTimeout(timeout);
            }
        }
    }["SurroundingsWalk.useCallback[show]"], [
        library
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            if (!library) return;
            previousPano.current = undefined;
            lastPosition.current = undefined;
            walked.current = 0;
            setMeters(0);
            void show({
                location: requestedPoint,
                radius: 80,
                sources: [
                    google.maps.StreetViewSource.OUTDOOR
                ]
            });
        }
    }["SurroundingsWalk.useEffect"], [
        library,
        show,
        requestedPoint.lat,
        requestedPoint.lng
    ]);
    const advance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SurroundingsWalk.useCallback[advance]": ()=>{
            if (location.path) {
                if (index < checkpoints.length - 1) setIndex({
                    "SurroundingsWalk.useCallback[advance]": (current)=>current + 1
                }["SurroundingsWalk.useCallback[advance]"]);
                else {
                    setPlaying(false);
                    setMessage('You reached the viewing distance.');
                }
                return;
            }
            const panorama = viewer.current;
            if (!panorama) return;
            const heading = panorama.getPov().heading;
            const angle = {
                "SurroundingsWalk.useCallback[advance].angle": (link)=>Math.abs(((link.heading ?? heading) - heading + 540) % 360 - 180)
            }["SurroundingsWalk.useCallback[advance].angle"];
            const next = (panorama.getLinks() ?? []).filter({
                "SurroundingsWalk.useCallback[advance]": (link)=>link !== null
            }["SurroundingsWalk.useCallback[advance]"]).filter({
                "SurroundingsWalk.useCallback[advance]": (link)=>link.pano && link.pano !== previousPano.current && angle(link) < 110
            }["SurroundingsWalk.useCallback[advance]"]).sort({
                "SurroundingsWalk.useCallback[advance]": (a, b)=>angle(a) - angle(b)
            }["SurroundingsWalk.useCallback[advance]"])[0];
            if (!next?.pano) {
                setPlaying(false);
                setMessage('No connected view ahead. Look in another direction or return to the map.');
                return;
            }
            if (next.heading != null) panorama.setPov({
                heading: next.heading,
                pitch: panorama.getPov().pitch
            });
            void show({
                pano: next.pano
            });
        }
    }["SurroundingsWalk.useCallback[advance]"], [
        location.path,
        index,
        checkpoints.length,
        show
    ]);
    const progress = location.path ? checkpoints[index]?.meters ?? 0 : meters;
    const complete = location.path ? index >= checkpoints.length - 1 : meters >= goal;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            if (complete) setPlaying(false);
            if (!playing || status !== 'ready' || complete) return;
            const timer = setTimeout(advance, 3500);
            return ({
                "SurroundingsWalk.useEffect": ()=>clearTimeout(timer)
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], [
        playing,
        status,
        complete,
        advance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "surroundings-walk",
        "aria-label": "Explore surroundings",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "walk-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: location.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 178,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "First-person street exploration"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 178,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: back,
                        className: "light",
                        type: "button",
                        onClick: onClose,
                        children: "Back to map"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "walk-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: status !== 'ready' || complete,
                        onClick: ()=>setPlaying((value)=>!value),
                        children: playing ? 'Pause walking' : 'Start walking'
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        disabled: status === 'loading' || complete,
                        onClick: advance,
                        children: "Step forward"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Viewing distance",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: goal,
                                onChange: (event)=>{
                                    setPlaying(false);
                                    setGoal(Number(event.target.value));
                                    setIndex(0);
                                },
                                children: [
                                    100,
                                    200,
                                    500,
                                    1000
                                ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: value,
                                        children: [
                                            value,
                                            " m"
                                        ]
                                    }, value, true, {
                                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                        lineNumber: 188,
                                        columnNumber: 49
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        role: "status",
                        children: [
                            progress,
                            " m explored",
                            complete ? ' · Viewing distance reached' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "walk-scene",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: target,
                        className: "walk-panorama",
                        "aria-label": "First-person Street View"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    status === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "walk-feedback",
                        role: "status",
                        children: "Finding street imagery near this location…"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 195,
                        columnNumber: 34
                    }, this),
                    status === 'gap' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "walk-feedback",
                        role: "status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Street imagery is unavailable here."
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            location.path && index < checkpoints.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: advance,
                                children: "Try next route viewpoint"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                children: "Choose another location on the map"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 196,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                ref: footer,
                className: "walk-caption",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: message || 'Drag to look around. Step forward or start walking in the direction you are facing.'
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Historical Google Street View · ",
                            date ? `Requested imagery ${date}` : 'Imagery date unavailable',
                            " · Coverage varies.",
                            location.synthetic && ' Starting from a fictional listing location.'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(SurroundingsWalk, "ltoHbWg/ykNy/ShGOzyUXypfMkk=");
_c = SurroundingsWalk;
var _c;
__turbopack_context__.k.register(_c, "SurroundingsWalk");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/surroundings-walk.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/neighborhood/surroundings-walk.tsx [app-client] (ecmascript)"));
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

//# sourceMappingURL=_19ro3m2jlkiyg._.js.map