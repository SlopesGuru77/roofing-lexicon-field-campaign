import { useState } from 'react';
import type { R3Prompt } from '../../content/bosses/types';
import type { FightAnswer } from '../../lib/boss-scoring';

export function R3ReportLang({ qs, onComplete }: { qs: R3Prompt[]; onComplete: (a: FightAnswer[]) => void }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<FightAnswer[]>([]);
  const q = qs[i];

  function pick(level: 'poor' | 'better' | 'best') {
    const next = [...answers, { termKey: q.relatedTermKey ?? `report-${i}`, correct: level === 'best' }];
    if (i + 1 >= qs.length) onComplete(next);
    else { setAnswers(next); setI(i + 1); }
  }

  return (
    <div className="p-6">
      <p className="font-mono text-xs text-footnote uppercase">Topic {i+1} / {qs.length}</p>
      <h2 className="font-display text-lg mt-2 mb-3">{q.topic}</h2>
      <div className="grid gap-2">
        {(['poor','better','best'] as const).map(level => (
          <button key={level} onClick={() => pick(level)}
            className="border border-paper-line bg-card px-3 py-3 text-left font-serif">
            <span className="font-mono text-xs uppercase text-footnote mr-2">{level}</span>{q[level]}
          </button>
        ))}
      </div>
    </div>
  );
}
