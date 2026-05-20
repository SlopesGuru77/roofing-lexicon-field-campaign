import { useState } from 'react';
import { TermBrowser } from '../components/library/TermBrowser';
import { Flashcards } from '../components/library/Flashcards';
import { TroubleTerms } from '../components/library/TroubleTerms';

type Sub = 'browse' | 'flashcards' | 'trouble';

export default function Library() {
  const [sub, setSub] = useState<Sub>('browse');
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex gap-2 mb-4">
        {(['browse','flashcards','trouble'] as Sub[]).map(s => (
          <button key={s} onClick={() => setSub(s)}
            className={`flex-1 py-2 font-mono uppercase text-sm border-b-2 ${
              sub === s ? 'border-redline text-redline' : 'border-paper-line text-footnote'
            }`}>{s === 'browse' ? 'Terms' : s === 'flashcards' ? 'Flashcards' : 'Trouble'}</button>
        ))}
      </div>
      {sub === 'browse'     && <TermBrowser />}
      {sub === 'flashcards' && <Flashcards />}
      {sub === 'trouble'    && <TroubleTerms />}
    </div>
  );
}
