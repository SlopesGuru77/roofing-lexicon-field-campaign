import { useState } from 'react';
import type { R2Scenario } from '../../content/bosses/types';
import type { FightAnswer } from '../../lib/boss-scoring';

export function R2ScenarioRound({ qs, onComplete }: { qs: R2Scenario[]; onComplete: (a: FightAnswer[]) => void }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<FightAnswer[]>([]);
  const q = qs[i];

  function pick(idx: number) {
    const choice = q.choices[idx];
    const next = [...answers, { termKey: q.relatedTermKey ?? `scenario-${i}`, correct: choice.correct }];
    if (i + 1 >= qs.length) onComplete(next);
    else { setAnswers(next); setI(i + 1); }
  }

  return (
    <div className="p-6">
      <p className="font-mono text-xs text-footnote uppercase">Scenario {i+1} / {qs.length}</p>
      <p className="font-serif mt-2 mb-4">{q.prompt}</p>
      <div className="grid gap-2">
        {q.choices.map((c, idx) => (
          <button key={idx} onClick={() => pick(idx)}
            className="border border-paper-line bg-card px-3 py-3 text-left font-serif">{c.text}</button>
        ))}
      </div>
    </div>
  );
}
