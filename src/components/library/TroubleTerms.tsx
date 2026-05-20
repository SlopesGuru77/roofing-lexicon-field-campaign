import { useEffect, useState } from 'react';
import { useAuth } from '../../state/AuthContext';
import { recentMissedTermKeys } from '../../data/attempts';
import { TERMS } from '../../content/library';

export function TroubleTerms() {
  const { user } = useAuth();
  const [keys, setKeys] = useState<string[]>([]);
  useEffect(() => {
    if (!user) return;
    recentMissedTermKeys(user.id, 14).then(setKeys);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  if (!keys.length) return <p className="font-serif text-footnote">No trouble terms yet — failed boss questions land here.</p>;
  const cards = TERMS.filter(t => keys.includes(t.t));
  return (
    <ul className="divide-y divide-paper-line">
      {cards.map(t => (
        <li key={t.t} className="py-3">
          <div className="font-display text-lg">{t.t}</div>
          <p className="font-serif text-sm">{t.d}</p>
        </li>
      ))}
    </ul>
  );
}
