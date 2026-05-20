import { useState } from 'react';
import { ZoneSwitcher } from '../components/shell/ZoneSwitcher';
import { BossNode } from '../components/map/BossNode';
import { cardsByZone } from '../content/cards';
import { useCollection } from '../state/CollectionContext';
import type { Zone } from '../types';

export default function Map() {
  const [zone, setZone] = useState<Zone>('shingles');
  const { earned } = useCollection();
  const cards = cardsByZone(zone);
  const ownedIds = new Set(earned.map(e => e.cardId));
  const standardCleared = cards.filter(c => !c.isMastery && ownedIds.has(c.id)).length;
  const allStandardCleared = cards.filter(c => !c.isMastery).every(c => ownedIds.has(c.id));

  return (
    <div className="max-w-md mx-auto">
      <ZoneSwitcher value={zone} onChange={setZone} />
      <p className="font-mono text-xs text-footnote uppercase mt-3 text-center">
        {standardCleared} / 10 standard cleared
      </p>
      <div className="mt-6 flex flex-col items-center gap-6">
        {cards.map((c, i) => (
          <div key={c.id} className={i % 2 === 0 ? 'self-start ml-6' : 'self-end mr-6'}>
            <BossNode
              card={c}
              earned={earned.find(e => e.cardId === c.id)}
              locked={c.isMastery && !allStandardCleared}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
