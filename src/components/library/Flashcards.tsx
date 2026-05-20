import { useState, useEffect } from 'react';
import { TERMS } from '../../content/library';
import { useProfile } from '../../state/ProfileContext';
import { incrementStudyCred, updateStreak } from '../../data/profiles';
import { nextStreak } from '../../lib/streak';
import { localTodayISO } from '../../lib/date';

interface Card { termKey: string; box: 0|1|2|3|4|5; }
const LS_KEY = 'rlfc_leitner';

function load(): Record<string, Card> {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch { return {}; }
}
function save(s: Record<string, Card>) { localStorage.setItem(LS_KEY, JSON.stringify(s)); }

export function Flashcards() {
  const [state, setState] = useState<Record<string, Card>>(load);
  const [idx, setIdx] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const { profile, reload } = useProfile();

  const deck = TERMS.filter(t => (state[t.t]?.box ?? 0) < 5);
  const term = deck[idx % Math.max(1, deck.length)];

  useEffect(() => { save(state); }, [state]);

  async function mark(correct: boolean) {
    if (!term) return;
    const cur = state[term.t] ?? { termKey: term.t, box: 0 };
    const nextBox = Math.max(0, Math.min(5, cur.box + (correct ? 1 : -1))) as Card['box'];
    setState({ ...state, [term.t]: { ...cur, box: nextBox } });
    setShowBack(false);
    setIdx(i => i + 1);

    // streak + study cred
    if (profile && correct) {
      const today = localTodayISO();
      const ns = nextStreak({ streakDays: profile.streakDays, lastPlayedAt: profile.lastPlayedAt, today });
      await updateStreak(profile.userId, ns.streakDays, ns.lastPlayedAt);
      await incrementStudyCred(profile.userId, 1);
      await reload();
    }
  }

  if (!term) return <p className="font-serif">All mastered. Try Trouble Terms.</p>;

  return (
    <div className="border border-paper-line bg-card p-4">
      <div className="font-mono text-xs text-footnote uppercase">{term.c} · Tier {term.tier}</div>
      <div className="font-display text-2xl mt-2">{term.t}</div>
      {showBack
        ? <>
            <p className="font-serif mt-3">{term.d}</p>
            <div className="mt-4 flex gap-3">
              <button onClick={() => mark(false)} className="flex-1 border border-redline py-2 font-mono uppercase">Missed</button>
              <button onClick={() => mark(true)}  className="flex-1 bg-good text-newsprint py-2 font-mono uppercase">Got it</button>
            </div>
          </>
        : <button onClick={() => setShowBack(true)} className="mt-6 bg-ink text-newsprint w-full py-2 font-mono uppercase">Reveal</button>
      }
    </div>
  );
}
