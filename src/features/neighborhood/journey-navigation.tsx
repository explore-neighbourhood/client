'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { z } from 'zod';
import { apiFetch } from '../embed/session';
import type { JourneyRoute } from './nearby-destinations';

const answerSchema = z.object({ data: z.object({ answer: z.string().max(4000), aiUsed: z.boolean(), action: z.enum(['nearby']).nullable(), source: z.literal('journey-preview') }) });
const length = (meters: number) => meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${Math.round(meters)} m`;

export function JourneyNavigation({ journey, origin, fraction, onNearby }: {
  journey: JourneyRoute; origin: string; fraction: number; onNearby(): void;
}) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<{ text: string; aiUsed: boolean; action: 'nearby' | null; at: number }>();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const active = useRef<AbortController | null>(null);
  useEffect(() => { setOpen(window.matchMedia('(min-width: 768px)').matches); return () => active.current?.abort(); }, []);
  const progress = Math.max(0, Math.min(1, fraction)) * journey.distanceMeters;
  const remaining = Math.max(0, journey.distanceMeters - progress);
  const steps = journey.steps ?? [];
  const stepTotal = steps.reduce((sum, step) => sum + step.distanceMeters, 0);
  const stepProgress = Math.max(0, Math.min(1, fraction)) * stepTotal;
  let stepEnd = 0;
  let stepIndex = steps.findIndex(step => { stepEnd += step.distanceMeters; return stepEnd > stepProgress; });
  if (stepIndex < 0) stepIndex = steps.length - 1;
  const current = steps[stepIndex];
  const next = steps[stepIndex + 1];
  const nextIn = Math.max(0, stepEnd - stepProgress);
  const arrived = fraction >= .99999;

  async function ask(event: FormEvent) {
    event.preventDefault();
    active.current?.abort();
    const request = new AbortController();
    active.current = request;
    setBusy(true); setError(''); setAnswer(undefined);
    const at = progress;
    try {
      const response = await apiFetch('/api/v1/journeys/assistant', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, cache: 'no-store',
        signal: AbortSignal.any([request.signal, AbortSignal.timeout(12000)]),
        body: JSON.stringify({ query: question, context: { origin: origin.slice(0, 250), destination: journey.destination.name.slice(0, 250),
          mode: journey.mode, distanceMeters: journey.distanceMeters, durationSeconds: journey.durationSeconds, progressMeters: progress,
          currentInstruction: arrived ? 'You reached the end of this route preview.' : current?.instruction ?? '', nextInstruction: arrived ? '' : next?.instruction ?? '', nextInMeters: nextIn } }),
      });
      if (!response.ok) throw new Error('Assistant unavailable');
      const { data } = answerSchema.parse(await response.json());
      if (!request.signal.aborted) setAnswer({ text: data.answer, aiUsed: data.aiUsed, action: data.action, at });
    } catch { if (!request.signal.aborted) setError('The journey assistant could not answer. Route instructions remain available; please retry.'); }
    finally { if (!request.signal.aborted) setBusy(false); }
  }

  return <aside className="journey-navigation" aria-label="Journey navigation and assistant">
    <details open={open} onToggle={event => setOpen(event.currentTarget.open)}>
      <summary>Navigation · {length(remaining)} left</summary>
      <div className="journey-navigation-body">
        <p className="eyebrow">JOURNEY PREVIEW</p>
        <h3 title={journey.destination.name}>To {journey.destination.name}</h3>
        <p>{length(progress)} travelled · about {Math.ceil(journey.durationSeconds * (1 - Math.min(1, fraction)) / 60)} min remaining</p>
        <progress aria-label="Route completion" max="1" value={Math.max(0, Math.min(1, fraction))} />
        <div className="navigation-next" aria-label="Current route instruction">
          <strong>{arrived ? 'Preview complete' : current?.instruction || 'Turn instructions unavailable'}</strong>
          {!arrived && next && <p>In approximately {length(nextIn)}: {next.instruction || 'Continue to the next route segment'}</p>}
        </div>
        {steps.length > 0 && <details className="navigation-steps"><summary>All {steps.length} route steps</summary>
          <ol>{steps.map((step, index) => <li key={index} aria-current={index === stepIndex ? 'step' : undefined}>
            {step.instruction || 'Continue along the route'} <small>({length(step.distanceMeters)})</small>
          </li>)}</ol>
        </details>}
        <p className="fine-print">Google Maps route · Estimated preview position, not live GPS navigation. Playback speed does not change the travel estimate.</p>
        <form className="journey-question" onSubmit={ask}>
          <label htmlFor="journey-question">Ask about this journey</label>
          <input id="journey-question" value={question} required minLength={3} maxLength={600} onChange={event => setQuestion(event.target.value)} placeholder="What is the next turn?" />
          <button type="submit" disabled={busy}>{busy ? 'Answering…' : 'Ask assistant'}</button>
        </form>
        {busy && <p role="status">Checking your journey snapshot…</p>}
        {error && <p role="alert">{error}</p>}
        {answer && <div className="journey-answer" role="status"><p>{answer.text}</p>
          <small>{answer.aiUsed ? 'Gemini + journey facts' : 'Journey facts · AI unavailable'} · At {length(answer.at)} in the preview</small>
          {answer.action === 'nearby' && <button type="button" className="light" onClick={onNearby}>Open Nearby Places</button>}
        </div>}
      </div>
    </details>
  </aside>;
}
