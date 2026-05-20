import { useProfile } from '../state/ProfileContext';
import { useAuth } from '../state/AuthContext';
import { useCollection } from '../state/CollectionContext';
import { cardsByZone, ZONES, ZONE_LABEL } from '../content/cards';
import { Link } from 'react-router-dom';
import type { Zone } from '../types';

export default function Profile() {
  const { profile, loading } = useProfile();
  const { earned } = useCollection();
  const { signOut } = useAuth();
  if (loading || !profile) return <div>Loading…</div>;

  const earnedByZone = (zone: Zone) => {
    const ids = new Set(earned.map(e => e.cardId));
    return cardsByZone(zone).filter(c => ids.has(c.id)).length;
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-display text-3xl">{profile.displayName}</h1>
      <p className="font-mono text-footnote text-sm uppercase">{profile.role.replace('_', ' ')}</p>

      <div className="mt-6 flex gap-4">
        <div><div className="font-display text-2xl text-redline">{profile.streakDays}</div><div className="font-mono text-xs uppercase">Streak</div></div>
        <div><div className="font-display text-2xl">{profile.studyCred}</div><div className="font-mono text-xs uppercase">Study Cred</div></div>
      </div>

      <h2 className="font-display text-xl mt-8 mb-3">Credentials</h2>
      <ul className="space-y-2">
        {ZONES.map(z => {
          const total = cardsByZone(z).length;
          const have = earnedByZone(z);
          const issued = profile.masteryPassedZones.includes(z) && have === total;
          return (
            <li key={z} className="flex justify-between border-b border-paper-line py-2">
              <span className="font-serif">{ZONE_LABEL[z]} Mastery</span>
              <span className="font-mono text-sm">
                {issued
                  ? <Link to={`/credential/${z}`} className="text-good">Issued — view</Link>
                  : `${have}/${total}`}
              </span>
            </li>
          );
        })}
      </ul>

      <button onClick={signOut}
        className="mt-10 border border-paper-line px-4 py-2 font-mono text-sm uppercase">
        Sign out
      </button>
    </div>
  );
}
