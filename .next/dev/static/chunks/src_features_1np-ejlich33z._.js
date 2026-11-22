(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/neighborhood/journey-navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JourneyNavigation",
    ()=>JourneyNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .literal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/embed/session.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const answerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        answer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(4000),
        aiUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
        action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
            'nearby'
        ]).nullable(),
        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal('journey-preview')
    })
});
const length = (meters)=>meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${Math.round(meters)} m`;
function JourneyNavigation({ journey, origin, fraction, onNearby }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JourneyNavigation.useEffect": ()=>{
            setOpen(window.matchMedia('(min-width: 768px)').matches);
            return ({
                "JourneyNavigation.useEffect": ()=>active.current?.abort()
            })["JourneyNavigation.useEffect"];
        }
    }["JourneyNavigation.useEffect"], []);
    const progress = Math.max(0, Math.min(1, fraction)) * journey.distanceMeters;
    const remaining = Math.max(0, journey.distanceMeters - progress);
    const steps = journey.steps ?? [];
    const stepTotal = steps.reduce((sum, step)=>sum + step.distanceMeters, 0);
    const stepProgress = Math.max(0, Math.min(1, fraction)) * stepTotal;
    let stepEnd = 0;
    let stepIndex = steps.findIndex((step)=>{
        stepEnd += step.distanceMeters;
        return stepEnd > stepProgress;
    });
    if (stepIndex < 0) stepIndex = steps.length - 1;
    const current = steps[stepIndex];
    const next = steps[stepIndex + 1];
    const nextIn = Math.max(0, stepEnd - stepProgress);
    const arrived = fraction >= .99999;
    async function ask(event) {
        event.preventDefault();
        active.current?.abort();
        const request = new AbortController();
        active.current = request;
        setBusy(true);
        setError('');
        setAnswer(undefined);
        const at = progress;
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$embed$2f$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/api/v1/journeys/assistant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                cache: 'no-store',
                signal: AbortSignal.any([
                    request.signal,
                    AbortSignal.timeout(12000)
                ]),
                body: JSON.stringify({
                    query: question,
                    context: {
                        origin: origin.slice(0, 250),
                        destination: journey.destination.name.slice(0, 250),
                        mode: journey.mode,
                        distanceMeters: journey.distanceMeters,
                        durationSeconds: journey.durationSeconds,
                        progressMeters: progress,
                        currentInstruction: arrived ? 'You reached the end of this route preview.' : current?.instruction ?? '',
                        nextInstruction: arrived ? '' : next?.instruction ?? '',
                        nextInMeters: nextIn
                    }
                })
            });
            if (!response.ok) throw new Error('Assistant unavailable');
            const { data } = answerSchema.parse(await response.json());
            if (!request.signal.aborted) setAnswer({
                text: data.answer,
                aiUsed: data.aiUsed,
                action: data.action,
                at
            });
        } catch  {
            if (!request.signal.aborted) setError('The journey assistant could not answer. Route instructions remain available; please retry.');
        } finally{
            if (!request.signal.aborted) setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "journey-navigation",
        "aria-label": "Journey navigation and assistant",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
            open: open,
            onToggle: (event)=>setOpen(event.currentTarget.open),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                    children: [
                        "Navigation · ",
                        length(remaining),
                        " left"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                    lineNumber: 58,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "journey-navigation-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "JOURNEY PREVIEW"
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 60,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            title: journey.destination.name,
                            children: [
                                "To ",
                                journey.destination.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 61,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                length(progress),
                                " travelled · about ",
                                Math.ceil(journey.durationSeconds * (1 - Math.min(1, fraction)) / 60),
                                " min remaining"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("progress", {
                            "aria-label": "Route completion",
                            max: "1",
                            value: Math.max(0, Math.min(1, fraction))
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 63,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navigation-next",
                            "aria-label": "Current route instruction",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: arrived ? 'Preview complete' : current?.instruction || 'Turn instructions unavailable'
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this),
                                !arrived && next && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "In approximately ",
                                        length(nextIn),
                                        ": ",
                                        next.instruction || 'Continue to the next route segment'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 66,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 64,
                            columnNumber: 9
                        }, this),
                        steps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "navigation-steps",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    children: [
                                        "All ",
                                        steps.length,
                                        " route steps"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 68,
                                    columnNumber: 68
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            "aria-current": index === stepIndex ? 'step' : undefined,
                                            children: [
                                                step.instruction || 'Continue along the route',
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        "(",
                                                        length(step.distanceMeters),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                            lineNumber: 69,
                                            columnNumber: 43
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 69,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 68,
                            columnNumber: 30
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fine-print",
                            children: "Google Maps route · Estimated preview position, not live GPS navigation. Playback speed does not change the travel estimate."
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 73,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "journey-question",
                            onSubmit: ask,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "journey-question",
                                    children: "Ask about this journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 75,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "journey-question",
                                    value: question,
                                    required: true,
                                    minLength: 3,
                                    maxLength: 600,
                                    onChange: (event)=>setQuestion(event.target.value),
                                    placeholder: "What is the next turn?"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 76,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: busy,
                                    children: busy ? 'Answering…' : 'Ask assistant'
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 77,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 74,
                            columnNumber: 9
                        }, this),
                        busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            children: "Checking your journey snapshot…"
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 79,
                            columnNumber: 18
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "alert",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 80,
                            columnNumber: 19
                        }, this),
                        answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "journey-answer",
                            role: "status",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: answer.text
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 81,
                                    columnNumber: 66
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: [
                                        answer.aiUsed ? 'Gemini + journey facts' : 'Journey facts · AI unavailable',
                                        " · At ",
                                        length(answer.at),
                                        " in the preview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 82,
                                    columnNumber: 11
                                }, this),
                                answer.action === 'nearby' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "light",
                                    onClick: onNearby,
                                    children: "Open Nearby Places"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                                    lineNumber: 83,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                            lineNumber: 81,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
                    lineNumber: 59,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
            lineNumber: 57,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/neighborhood/journey-navigation.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
_s(JourneyNavigation, "34BGkJI7UlUmdMIrs1kQpmjflOA=");
_c = JourneyNavigation;
var _c;
__turbopack_context__.k.register(_c, "JourneyNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/nearby-destinations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NearbyDestinations",
    ()=>NearbyDestinations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/polyline-codec/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NearbyDestinations({ origin, onPlaces, onRoute, onClose }) {
    _s();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hospital');
    const [radius, setRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('WALK');
    const [places, setPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [resultCategory, setResultCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hospital');
    const [resultRadius, setResultRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NearbyDestinations.useEffect": ()=>({
                "NearbyDestinations.useEffect": ()=>active.current?.abort()
            })["NearbyDestinations.useEffect"]
    }["NearbyDestinations.useEffect"], []);
    function request() {
        active.current?.abort();
        const controller = new AbortController();
        active.current = controller;
        setMessage('');
        return {
            controller,
            signal: AbortSignal.any([
                controller.signal,
                AbortSignal.timeout(12000)
            ])
        };
    }
    async function findPlaces() {
        const { controller, signal } = request();
        setPlaces(undefined);
        onPlaces([], category);
        setStatus('places');
        try {
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPlaces"])(origin, category, radius, signal);
            if (!controller.signal.aborted) {
                setPlaces(results);
                setResultCategory(category);
                setResultRadius(radius);
                onPlaces(results, category);
            }
        } catch (error) {
            if (!controller.signal.aborted) setMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeFailure"])(error));
        } finally{
            if (!controller.signal.aborted) setStatus('idle');
        }
    }
    async function routeTo(destination) {
        const { controller, signal } = request();
        setStatus('route');
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRoute"])(origin, destination.destination, mode, signal);
            if (controller.signal.aborted) return;
            if (!result) {
                setMessage('No route is available for this travel mode. Try another mode.');
                return;
            }
            onRoute({
                destination,
                category: resultCategory,
                mode,
                distanceMeters: result.distanceMeters,
                durationSeconds: result.durationSeconds,
                steps: result.steps,
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(result.encodedPolyline).map(([lat, lng])=>({
                        lat,
                        lng
                    }))
            });
        } catch (error) {
            if (!controller.signal.aborted) setMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeFailure"])(error));
        } finally{
            if (!controller.signal.aborted) setStatus('idle');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "walk-destinations",
        "aria-label": "Nearby destinations",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Nearby Places"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 85,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "light",
                        onClick: onClose,
                        children: "Close places"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 85,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "field-pair",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Category",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: category,
                                onChange: (event)=>setCategory(event.target.value),
                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"]).map(([value, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: value,
                                        children: name
                                    }, value, false, {
                                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                        lineNumber: 88,
                                        columnNumber: 62
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                lineNumber: 87,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Facility radius",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: radius,
                                onChange: (event)=>setRadius(Number(event.target.value)),
                                children: [
                                    500,
                                    1000,
                                    3000,
                                    5000,
                                    10000
                                ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: value,
                                        children: value < 1000 ? '500 m' : `${value / 1000} km`
                                    }, value, false, {
                                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                        lineNumber: 91,
                                        columnNumber: 56
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                lineNumber: 90,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>void findPlaces(),
                disabled: status !== 'idle',
                children: "Find nearby places"
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Travel mode",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: mode,
                        onChange: (event)=>setMode(event.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "WALK",
                                children: "Walking"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                lineNumber: 96,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "TWO_WHEELER",
                                children: "Bike · motorized two-wheeler"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                lineNumber: 96,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "DRIVE",
                                children: "Car"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                lineNumber: 97,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "TRANSIT",
                                children: "Public transit"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                lineNumber: 97,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 95,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            category === 'emergency' || places?.length && resultCategory === 'emergency' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                children: "Hospital candidates. Emergency services and operating hours are unverified."
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 99,
                columnNumber: 89
            }, this) : null,
            status !== 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: status === 'route' ? 'Calculating route…' : 'Finding nearby places…'
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 100,
                columnNumber: 29
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                role: "alert",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 101,
                columnNumber: 19
            }, this),
            places?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No matching places were returned. Try a wider radius."
            }, void 0, false, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 102,
                columnNumber: 32
            }, this),
            places && places.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "google-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"][resultCategory],
                            " within ",
                            resultRadius < 1000 ? `${resultRadius} m` : `${resultRadius / 1000} km`,
                            " of the selected starting location."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    (category !== resultCategory || radius !== resultRadius) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Choose Find nearby places to apply the changed category or radius."
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 105,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "facility-list",
                        children: places.map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: place.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                        lineNumber: 107,
                                        columnNumber: 11
                                    }, this),
                                    place.attributions.map((source, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: source.provider
                                        }, index, false, {
                                            fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                            lineNumber: 108,
                                            columnNumber: 54
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "light",
                                        disabled: status !== 'idle',
                                        onClick: ()=>void routeTo(place),
                                        children: "Show Route"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                        lineNumber: 109,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, place.id, true, {
                                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                                lineNumber: 106,
                                columnNumber: 60
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "map-credit",
                        translate: "no",
                        children: "Google Maps"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
                lineNumber: 103,
                columnNumber: 39
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/neighborhood/nearby-destinations.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(NearbyDestinations, "vlvgZsE1//eMvhXkUeT8tKuTLFQ=");
_c = NearbyDestinations;
var _c;
__turbopack_context__.k.register(_c, "NearbyDestinations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/neighborhood/surroundings-walk.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurroundingsWalk",
    ()=>SurroundingsWalk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/polyline-codec/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/js-api-loader/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/property-search/components/google-loader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/geometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$nearby$2d$destinations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/nearby-destinations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$journey$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/neighborhood/journey-navigation.tsx [app-client] (ecmascript)");
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
const PersonJourney = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/features/neighborhood/person-journey.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((module)=>module.PersonJourney), {
    loadableGenerated: {
        modules: [
            "[project]/src/features/neighborhood/person-journey.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "walk-feedback",
            role: "status",
            children: "Opening 3D person exploration…"
        }, void 0, false, {
            fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
            lineNumber: 21,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0))
});
_c = PersonJourney;
function SurroundingsWalk({ location, onClose, onPosition, onMap, onPerspective, onEvidence }) {
    _s();
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const exit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const routeRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const walked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onPosition,
        onMap,
        onPerspective
    });
    const perspective = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [library, setLibrary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loadAttempt, setLoadAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const [meters, setMeters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [historySize, setHistorySize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mapView, setMapView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thirdPerson, setThirdPerson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(location.initialView === 'person');
    const [personOpened, setPersonOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(location.initialView === 'person');
    const [streetOpened, setStreetOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(location.initialView !== 'person');
    const [placesOpen, setPlacesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [places, setPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [placeCategory, setPlaceCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [routeBusy, setRouteBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [routeNotice, setRouteNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [journey, setJourney] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(location.journey);
    const [followingRoute, setFollowingRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(location.path));
    const [coverage, setCoverage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [personFraction, setPersonFraction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const path = journey?.path ?? location.path;
    const pathLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurroundingsWalk.useMemo[pathLength]": ()=>path?.reduce({
                "SurroundingsWalk.useMemo[pathLength]": (sum, point, index)=>index ? sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMeters"])(path[index - 1], point) : 0
            }["SurroundingsWalk.useMemo[pathLength]"], 0) ?? 0
    }["SurroundingsWalk.useMemo[pathLength]"], [
        path
    ]);
    const checkpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurroundingsWalk.useMemo[checkpoints]": ()=>path ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleRoute"])(path, goal) : []
    }["SurroundingsWalk.useMemo[checkpoints]"], [
        path,
        goal
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>({
                "SurroundingsWalk.useEffect": ()=>routeRequest.current?.abort()
            })["SurroundingsWalk.useEffect"]
    }["SurroundingsWalk.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            callbacks.current = {
                onPosition,
                onMap,
                onPerspective
            };
        }
    }["SurroundingsWalk.useEffect"], [
        onPosition,
        onMap,
        onPerspective
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            exit.current?.focus();
            const caption = footer.current;
            const stage = caption?.closest('.map-stage');
            if (!caption || !stage) return;
            const observer = new ResizeObserver({
                "SurroundingsWalk.useEffect": ()=>{
                    stage.style.setProperty('--walk-footer-height', `${caption.getBoundingClientRect().height}px`);
                    if (header.current) stage.style.setProperty('--walk-header-height', `${header.current.getBoundingClientRect().height}px`);
                    if (scene.current) {
                        const bounds = scene.current.getBoundingClientRect();
                        stage.style.setProperty('--walk-map-top', `${bounds.top - stage.getBoundingClientRect().top}px`);
                        stage.style.setProperty('--walk-map-height', `${bounds.height}px`);
                    }
                }
            }["SurroundingsWalk.useEffect"]);
            observer.observe(caption);
            if (header.current) observer.observe(header.current);
            if (scene.current) observer.observe(scene.current);
            return ({
                "SurroundingsWalk.useEffect": ()=>{
                    observer.disconnect();
                    for (const name of [
                        '--walk-footer-height',
                        '--walk-header-height',
                        '--walk-map-top',
                        '--walk-map-height'
                    ])stage.style.removeProperty(name);
                }
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            callbacks.current.onMap({
                places,
                category: placeCategory,
                route: path ?? []
            });
        }
    }["SurroundingsWalk.useEffect"], [
        places,
        placeCategory,
        path
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            perspective.current = mapView || thirdPerson;
            callbacks.current.onPerspective(mapView);
            viewer.current?.setVisible(!mapView && !thirdPerson);
            if (!mapView && !thirdPerson) requestAnimationFrame({
                "SurroundingsWalk.useEffect": ()=>{
                    if (viewer.current) google.maps.event.trigger(viewer.current, 'resize');
                }
            }["SurroundingsWalk.useEffect"]);
        }
    }["SurroundingsWalk.useEffect"], [
        mapView,
        thirdPerson
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            if (!streetOpened) return;
            let mounted = true;
            setStatus('loading');
            setMessage('');
            const key = ("TURBOPACK compile-time value", "AIzaSyD7rqUpTzUpEbxm-Xc7ikltFJGzOhd92Qk");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const timeout = setTimeout({
                "SurroundingsWalk.useEffect.timeout": ()=>{
                    mounted = false;
                    setMessage('Street View took too long to load. Retry or continue on the route map.');
                    setStatus('gap');
                }
            }["SurroundingsWalk.useEffect.timeout"], 10000);
            void Promise.resolve().then({
                "SurroundingsWalk.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$property$2d$search$2f$components$2f$google$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGoogleMaps"])(key);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$js$2d$api$2d$loader$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importLibrary"])('streetView');
                }
            }["SurroundingsWalk.useEffect"]).then({
                "SurroundingsWalk.useEffect": (result)=>{
                    if (mounted) {
                        clearTimeout(timeout);
                        setLibrary(result);
                    }
                }
            }["SurroundingsWalk.useEffect"]).catch({
                "SurroundingsWalk.useEffect": ()=>{
                    if (mounted) {
                        clearTimeout(timeout);
                        setMessage('Street View could not load. Retry or continue on the route map.');
                        setStatus('gap');
                    }
                }
            }["SurroundingsWalk.useEffect"]);
            return ({
                "SurroundingsWalk.useEffect": ()=>{
                    mounted = false;
                    clearTimeout(timeout);
                    sequence.current += 1;
                    if (viewer.current) {
                        google.maps.event.clearInstanceListeners(viewer.current);
                        viewer.current.setVisible(false);
                    }
                    viewer.current = null;
                }
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], [
        loadAttempt,
        streetOpened
    ]);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SurroundingsWalk.useCallback[show]": async (request, movement = 'push', facing)=>{
            if (!library) return false;
            const generation = ++sequence.current;
            setStatus('loading');
            setMessage('');
            let timeout;
            try {
                const response = await Promise.race([
                    new library.StreetViewService().getPanorama(request),
                    new Promise({
                        "SurroundingsWalk.useCallback[show]": (_, reject)=>{
                            timeout = setTimeout({
                                "SurroundingsWalk.useCallback[show]": ()=>reject(new Error('Coverage timeout'))
                            }["SurroundingsWalk.useCallback[show]"], 10000);
                        }
                    }["SurroundingsWalk.useCallback[show]"])
                ]);
                if (generation !== sequence.current || !target.current) return false;
                const { data } = response;
                const pano = data.location?.pano;
                if (!pano) throw new Error('No panorama');
                const current = viewer.current?.getPano();
                const pov = viewer.current?.getPov();
                if (movement === 'reset') {
                    history.current = [];
                    walked.current = 0;
                    lastPosition.current = undefined;
                    setMeters(0);
                } else if (movement === 'push' && current && current !== pano && pov) {
                    history.current.push({
                        pano: current,
                        heading: pov.heading,
                        pitch: pov.pitch
                    });
                } else if (movement === 'back') {
                    history.current.pop();
                }
                setHistorySize(history.current.length);
                if (!viewer.current) {
                    viewer.current = new library.StreetViewPanorama(target.current, {
                        pano,
                        addressControl: false,
                        fullscreenControl: false,
                        imageDateControl: true,
                        visible: !perspective.current,
                        motionTracking: false,
                        linksControl: false,
                        panControl: false,
                        zoomControl: true,
                        clickToGo: false
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
                    viewer.current.setPano(pano);
                    viewer.current.setVisible(!perspective.current);
                }
                if (facing) viewer.current.setPov(facing);
                setDate(data.imageDate);
                setStatus('ready');
                requestAnimationFrame({
                    "SurroundingsWalk.useCallback[show]": ()=>{
                        if (generation === sequence.current && viewer.current) google.maps.event.trigger(viewer.current, 'resize');
                    }
                }["SurroundingsWalk.useCallback[show]"]);
                return true;
            } catch  {
                if (generation === sequence.current) {
                    setPlaying(false);
                    setStatus('gap');
                    viewer.current?.setVisible(false);
                }
                return false;
            } finally{
                clearTimeout(timeout);
            }
        }
    }["SurroundingsWalk.useCallback[show]"], [
        library
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            if (!library || followingRoute) return;
            void show({
                location: location.point,
                radius: 80,
                preference: google.maps.StreetViewPreference.NEAREST,
                sources: [
                    google.maps.StreetViewSource.OUTDOOR
                ]
            }, 'reset');
        }
    }["SurroundingsWalk.useEffect"], [
        library,
        show,
        location.point.lat,
        location.point.lng,
        followingRoute
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            if (!library || !followingRoute) return;
            if (!checkpoints[index]) {
                setStatus('gap');
                setMessage('This route has no street viewpoints. Continue on the route map or return home.');
                return;
            }
            let active = true;
            const point = checkpoints[index].point;
            void show({
                location: point,
                radius: 80,
                preference: google.maps.StreetViewPreference.NEAREST,
                sources: [
                    google.maps.StreetViewSource.OUTDOOR
                ]
            }, index === 0 ? 'reset' : 'push').then({
                "SurroundingsWalk.useEffect": (ok)=>{
                    if (active) setCoverage({
                        "SurroundingsWalk.useEffect": (current)=>({
                                ...current,
                                [index]: ok ? 'ready' : 'gap'
                            })
                    }["SurroundingsWalk.useEffect"]);
                }
            }["SurroundingsWalk.useEffect"]);
            return ({
                "SurroundingsWalk.useEffect": ()=>{
                    active = false;
                }
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], [
        library,
        show,
        followingRoute,
        checkpoints,
        index
    ]);
    const advance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SurroundingsWalk.useCallback[advance]": ()=>{
            if (followingRoute) {
                if (index < checkpoints.length - 1) setIndex({
                    "SurroundingsWalk.useCallback[advance]": (current)=>current + 1
                }["SurroundingsWalk.useCallback[advance]"]);
                else {
                    setPlaying(false);
                    setMessage('You reached the route viewing distance.');
                }
                return;
            }
            const panorama = viewer.current;
            if (!panorama) return;
            const heading = panorama.getPov().heading;
            const previous = history.current.at(-1)?.pano;
            const angle = {
                "SurroundingsWalk.useCallback[advance].angle": (link)=>Math.abs(((link.heading ?? heading) - heading + 540) % 360 - 180)
            }["SurroundingsWalk.useCallback[advance].angle"];
            const next = (panorama.getLinks() ?? []).filter({
                "SurroundingsWalk.useCallback[advance]": (link)=>link !== null
            }["SurroundingsWalk.useCallback[advance]"]).filter({
                "SurroundingsWalk.useCallback[advance]": (link)=>link.pano && link.pano !== previous && angle(link) < 110
            }["SurroundingsWalk.useCallback[advance]"]).sort({
                "SurroundingsWalk.useCallback[advance]": (a, b)=>angle(a) - angle(b)
            }["SurroundingsWalk.useCallback[advance]"])[0];
            if (!next?.pano) {
                setPlaying(false);
                setMessage('No connected view ahead. Turn toward another street or return home.');
                return;
            }
            void show({
                pano: next.pano
            }, 'push', {
                heading: next.heading ?? heading,
                pitch: panorama.getPov().pitch
            });
        }
    }["SurroundingsWalk.useCallback[advance]"], [
        followingRoute,
        index,
        checkpoints.length,
        show
    ]);
    function goBack() {
        setPlaying(false);
        if (followingRoute) {
            setIndex((current)=>Math.max(0, current - 1));
            return;
        }
        const visit = history.current.at(-1);
        if (visit) void show({
            pano: visit.pano
        }, 'back', visit);
    }
    function look(heading, pitch = 0) {
        setPlaying(false);
        const panorama = viewer.current;
        if (!panorama) return;
        const pov = panorama.getPov();
        panorama.setPov({
            heading: (pov.heading + heading + 360) % 360,
            pitch: Math.max(-80, Math.min(80, pov.pitch + pitch))
        });
    }
    function returnHome() {
        routeRequest.current?.abort();
        setRouteBusy(false);
        if (!library) return;
        setPlaying(false);
        setPlacesOpen(false);
        setIndex(0);
        if (followingRoute) setFollowingRoute(false);
        else void show({
            location: location.point,
            radius: 80,
            preference: google.maps.StreetViewPreference.NEAREST,
            sources: [
                google.maps.StreetViewSource.OUTDOOR
            ]
        }, 'reset');
    }
    function chooseRoute(route, openPerson = true) {
        if (location.propertyId) onEvidence({
            propertyId: location.propertyId,
            destinationId: route.destination.id,
            destinationName: route.destination.name,
            category: route.category,
            mode: route.mode,
            distanceMeters: route.distanceMeters,
            durationSeconds: route.durationSeconds,
            checkedAt: new Date().toISOString()
        });
        setPlaying(false);
        setJourney(route);
        setCoverage({});
        setIndex(0);
        setFollowingRoute(true);
        setPlacesOpen(false);
        if (openPerson) {
            setMapView(false);
            setThirdPerson(true);
            setPersonOpened(true);
        }
    }
    async function changeRouteMode(mode) {
        if (!journey) return;
        routeRequest.current?.abort();
        const active = new AbortController();
        routeRequest.current = active;
        setPlaying(false);
        setRouteBusy(true);
        setRouteNotice('');
        try {
            const signal = AbortSignal.any([
                active.signal,
                AbortSignal.timeout(15000)
            ]);
            const result = journey.direct ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareJourney"])(location.point, journey.destination.location, mode, signal, ()=>{}) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRoute"])(location.propertyId ?? location.point, journey.destination.destination, mode, signal);
            if (active.signal.aborted) return;
            if (!result) {
                setRouteNotice('No route is available for this mode. Your previous route remains visible.');
                return;
            }
            chooseRoute({
                ...journey,
                mode,
                distanceMeters: result.distanceMeters,
                durationSeconds: result.durationSeconds,
                steps: result.steps,
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$polyline$2d$codec$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(result.encodedPolyline).map(([lat, lng])=>({
                        lat,
                        lng
                    }))
            }, false);
        } catch (error) {
            if (!active.signal.aborted) setRouteNotice((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeFailure"])(error));
        } finally{
            if (!active.signal.aborted) setRouteBusy(false);
        }
    }
    const progress = followingRoute ? checkpoints[index]?.meters ?? 0 : meters;
    const complete = followingRoute ? index >= checkpoints.length - 1 : meters >= goal;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurroundingsWalk.useEffect": ()=>{
            if (complete || mapView || thirdPerson || placesOpen) setPlaying(false);
            if (!playing || status !== 'ready' || complete || mapView || thirdPerson || placesOpen) return;
            const timer = setTimeout(advance, 3500);
            return ({
                "SurroundingsWalk.useEffect": ()=>clearTimeout(timer)
            })["SurroundingsWalk.useEffect"];
        }
    }["SurroundingsWalk.useEffect"], [
        playing,
        status,
        complete,
        mapView,
        thirdPerson,
        placesOpen,
        advance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "surroundings-walk",
        "aria-label": "Immersive Neighborhood Explorer",
        onKeyDown: (event)=>{
            if (event.key === 'Escape') {
                event.stopPropagation();
                onClose();
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                ref: header,
                className: "walk-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: journey ? 'YOUR JOURNEY' : 'NEIGHBORHOOD EXPLORER'
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 337,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                title: location.title,
                                children: location.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 337,
                                columnNumber: 127
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                title: journey?.destination.name,
                                children: followingRoute && journey ? `To ${journey.destination.name}` : 'Explore at your own pace'
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 337,
                                columnNumber: 175
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-controls journey-view-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": thirdPerson && !mapView,
                                onClick: ()=>{
                                    setPersonOpened(true);
                                    setThirdPerson(true);
                                    setMapView(false);
                                    setPlaying(false);
                                },
                                children: "3D Person"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                "aria-pressed": !thirdPerson && !mapView,
                                onClick: ()=>{
                                    setStreetOpened(true);
                                    setThirdPerson(false);
                                    setMapView(false);
                                },
                                children: "Street View"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                "aria-pressed": mapView,
                                onClick: ()=>setMapView(true),
                                children: "Map View"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: exit,
                                className: "light",
                                type: "button",
                                "aria-label": "Exit Exploration",
                                onClick: onClose,
                                children: "Exit"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            !thirdPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "walk-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !playing && status !== 'ready' || complete || mapView,
                        onClick: ()=>setPlaying((value)=>!value),
                        children: playing ? 'Pause' : 'Play'
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        disabled: status !== 'ready' || complete || mapView,
                        onClick: advance,
                        children: "Walk Forward"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        disabled: status === 'loading' || (followingRoute ? index === 0 : historySize === 0),
                        onClick: goBack,
                        children: "Walk Back"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: returnHome,
                        children: "Return Home"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: ()=>setPlacesOpen((value)=>!value),
                        children: "Nearby Places"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "walk-more",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "Look & distance"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "walk-more-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-controls",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "light",
                                                onClick: ()=>look(-45),
                                                children: "Turn Left"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "light",
                                                onClick: ()=>look(45),
                                                children: "Turn Right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "light",
                                                onClick: ()=>look(0, 20),
                                                children: "Look Up"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "light",
                                                onClick: ()=>look(0, -20),
                                                children: "Look Down"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
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
                                                    setCoverage({});
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
                                                        lineNumber: 361,
                                                        columnNumber: 51
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                                lineNumber: 360,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        role: "status",
                        title: followingRoute ? 'Distance along the calculated route' : 'Approximate distance between panorama positions',
                        children: [
                            followingRoute ? '' : '≈ ',
                            progress,
                            " m ",
                            followingRoute ? 'along route' : 'explored',
                            complete ? ' · Viewing distance reached' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 345,
                columnNumber: 24
            }, this),
            journey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "walk-route-summary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "route-travel-name",
                                children: [
                                    journey.mode === 'TWO_WHEELER' ? 'Bike' : journey.mode === 'DRIVE' ? 'Car' : journey.mode === 'WALK' ? 'Walking' : 'Transit',
                                    " · "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 368,
                                columnNumber: 17
                            }, this),
                            (journey.distanceMeters / 1000).toFixed(2),
                            " km · about ",
                            Math.max(1, Math.round(journey.durationSeconds / 60)),
                            " min"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: " Google Maps estimate"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Journey travel mode"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 370,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                "aria-label": "Journey travel mode",
                                value: journey.mode,
                                disabled: routeBusy,
                                onChange: (event)=>void changeRouteMode(event.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "WALK",
                                        children: "Walking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                        lineNumber: 371,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "TWO_WHEELER",
                                        children: "Bike"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                        lineNumber: 371,
                                        columnNumber: 48
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "DRIVE",
                                        children: "Car"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                        lineNumber: 371,
                                        columnNumber: 89
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "TRANSIT",
                                        children: "Transit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                        lineNumber: 371,
                                        columnNumber: 123
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 370,
                                columnNumber: 48
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    routeBusy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        role: "status",
                        children: "Updating route…"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 373,
                        columnNumber: 23
                    }, this),
                    routeNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        children: routeNotice
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 374,
                        columnNumber: 25
                    }, this),
                    !followingRoute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "light",
                        type: "button",
                        onClick: ()=>{
                            setIndex(0);
                            setFollowingRoute(true);
                        },
                        children: "Follow route"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 375,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 367,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scene,
                className: "walk-scene",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: target,
                        className: "walk-panorama",
                        hidden: thirdPerson,
                        tabIndex: 0,
                        "aria-label": "Street exploration. Drag to look around, W to walk forward, S to go back, arrow keys to look.",
                        onKeyDown: (event)=>{
                            const commands = {
                                ArrowLeft: ()=>look(-30),
                                ArrowRight: ()=>look(30),
                                ArrowUp: ()=>look(0, 15),
                                ArrowDown: ()=>look(0, -15),
                                w: advance,
                                s: goBack
                            };
                            const command = commands[event.key];
                            if (command && event.target === target.current && status === 'ready') {
                                event.preventDefault();
                                event.stopPropagation();
                                command();
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    personOpened && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PersonJourney, {
                        origin: location.point,
                        path: path,
                        active: thirdPerson && !mapView,
                        paused: placesOpen || routeBusy,
                        onProgress: setPersonFraction,
                        onPosition: onPosition,
                        onNearby: ()=>setPlacesOpen(true),
                        onMap: ()=>setMapView(true),
                        onStreet: ()=>{
                            setStreetOpened(true);
                            setThirdPerson(false);
                            setMapView(false);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 384,
                        columnNumber: 26
                    }, this),
                    status === 'loading' && !mapView && !thirdPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "walk-feedback",
                        role: "status",
                        children: "Finding street imagery near this location…"
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 388,
                        columnNumber: 62
                    }, this),
                    status === 'gap' && !mapView && !thirdPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "walk-feedback",
                        role: "status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: message || 'Street imagery is unavailable at this viewpoint.'
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setLibrary(undefined);
                                    setLoadAttempt((value)=>value + 1);
                                },
                                children: "Retry Street View"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            followingRoute && index < checkpoints.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: advance,
                                children: "Try next route viewpoint"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 392,
                                columnNumber: 64
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                onClick: ()=>setMapView(true),
                                children: "Map View"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "light",
                                type: "button",
                                onClick: returnHome,
                                children: "Return Home"
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 389,
                        columnNumber: 58
                    }, this),
                    placesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$nearby$2d$destinations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearbyDestinations"], {
                        origin: location.propertyId ?? location.point,
                        onPlaces: (results, category)=>{
                            setPlaces(results);
                            setPlaceCategory(category);
                        },
                        onRoute: (route)=>{
                            routeRequest.current?.abort();
                            setRouteBusy(false);
                            setRouteNotice('');
                            chooseRoute(route);
                        },
                        onClose: ()=>setPlacesOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 396,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            journey && !placesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$neighborhood$2f$journey$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JourneyNavigation"], {
                journey: journey,
                origin: location.title,
                fraction: thirdPerson ? personFraction : pathLength > 0 ? Math.min(1, progress / pathLength) : 0,
                onNearby: ()=>{
                    setPlaying(false);
                    setPlacesOpen(true);
                }
            }, `${journey.destination.id}:${journey.mode}:${journey.distanceMeters}:${journey.durationSeconds}`, false, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 399,
                columnNumber: 34
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                ref: footer,
                className: "walk-caption",
                children: [
                    followingRoute && !thirdPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "walk-coverage",
                        "aria-label": "Route viewpoint coverage",
                        children: checkpoints.map((checkpoint, checkpointIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: coverage[checkpointIndex] ?? 'unchecked',
                                "aria-pressed": index === checkpointIndex,
                                onClick: ()=>{
                                    setPlaying(false);
                                    setIndex(checkpointIndex);
                                },
                                children: [
                                    checkpoint.meters,
                                    " m · ",
                                    coverage[checkpointIndex] === 'gap' ? 'no imagery' : coverage[checkpointIndex] === 'ready' ? 'imagery' : 'unchecked'
                                ]
                            }, checkpointIndex, true, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 404,
                                columnNumber: 61
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 403,
                        columnNumber: 44
                    }, this),
                    mapView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Route overview · Google Maps · Travel estimates and entrance locations may vary."
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 410,
                        columnNumber: 20
                    }, this) : thirdPerson ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Simulated person on Google Maps 3D · Detailed street geometry depends on local coverage. Bengaluru may show satellite imagery on terrain."
                    }, void 0, false, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 410,
                        columnNumber: 124
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: message || (followingRoute ? 'Imagery is checked at route viewpoints. Coverage between them can vary.' : 'Drag to look around or use Look & distance. Movement follows connected panoramas.')
                            }, void 0, false, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Historical Google Street View · ",
                                    date ? `Requested imagery ${date}` : 'Imagery date unavailable',
                                    " · ",
                                    location.synthetic ? 'Fictional listing location.' : 'Entrance location may differ.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                        lineNumber: 410,
                        columnNumber: 271
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/neighborhood/surroundings-walk.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
_s(SurroundingsWalk, "5/TdKNRcx+z4sWkvRVnndZYQHds=");
_c1 = SurroundingsWalk;
var _c, _c1;
__turbopack_context__.k.register(_c, "PersonJourney");
__turbopack_context__.k.register(_c1, "SurroundingsWalk");
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

//# sourceMappingURL=src_features_1np-ejlich33z._.js.map