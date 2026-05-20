import { Link } from 'react-router-dom';
import { TERMS } from '../../content/library';
import type { FightAnswer } from '../../lib/boss-scoring';

export function ReviewScreen({ answers, onClose }: { answers: FightAnswer[]; onClose: () => void }) {
  const missed = answers.filter(a => !a.correct);
  return (
    <div className="p-6">
      <h2 className="font-display text-2xl mb-3">Review</h2>
      <ul className="divide-y divide-paper-line">
        {missed.map(a => {
          const t = TERMS.find(t => t.t === a.termKey);
          return (
            <li key={a.termKey} className="py-3">
              <div className="font-display">{t?.t ?? a.termKey}</div>
              <p className="font-serif text-sm">{t?.d ?? '(no entry in library — scenario or report-language item)'}</p>
              {t && <Link to={`/library?q=${encodeURIComponent(t.t)}`} className="font-mono text-xs uppercase text-citation">Open in Library →</Link>}
            </li>
          );
        })}
      </ul>
      <button onClick={onClose} className="mt-6 bg-ink text-newsprint px-4 py-2 font-mono uppercase">Done</button>
    </div>
  );
}
