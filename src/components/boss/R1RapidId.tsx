import { useState } from 'react';
import type { R1Question } from '../../content/bosses/types';
import type { FightAnswer } from '../../lib/boss-scoring';

export function R1RapidId({ qs, onComplete }: { qs: R1Question[]; onComplete: (a: FightAnswer[]) => void }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<FightAnswer[]>([]);
  const q = qs[i];

  function pick(choice: string) {
    const next = [...answers, { termKey: q.termKey, correct: choice === q.termKey }];
    if (i + 1 >= qs.length) onComplete(next);
    else { setAnswers(next); setI(i + 1); }
  }

  return (
    <div className="p-6">
      <p className="font-mono text-xs text-footnote uppercase">Term {i+1} / {qs.length}</p>
      <h2 className="font-display text-xl mt-2 mb-4">{q.prompt}</h2>
      <div className="grid gap-2">
        {q.choices.map(c => (
          <button key={c} onClick={() => pick(c)}
            className="border border-paper-line bg-card px-3 py-3 text-left font-serif">{c}</button>
        ))}
      </div>
    </div>
  );
}
