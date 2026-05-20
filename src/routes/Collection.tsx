import { useState } from 'react';
import { ZoneSwitcher } from '../components/shell/ZoneSwitcher';
import { Card } from '../components/card/Card';
import { CardSilhouette } from '../components/card/CardSilhouette';
import { cardsByZone, ZONE_LABEL } from '../content/cards';
import { useCollection } from '../state/CollectionContext';
import type { Zone } from '../types';

export default function Collection() {
  const [zone, setZone] = useState<Zone>('shingles');
  const { earned } = useCollection();
  const cards = cardsByZone(zone);
  const byId = new Map(earned.map(e => [e.cardId, e]));
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-display text-2xl mb-2">{ZONE_LABEL[zone]} Collection</h1>
      <ZoneSwitcher value={zone} onChange={setZone} />
      <div className="grid grid-cols-3 gap-3 mt-6">
        {cards.map(c => {
          const e = byId.get(c.id);
          return e ? <Card key={c.id} card={c} earned={e}/> : <CardSilhouette key={c.id} card={c}/>;
        })}
      </div>
    </div>
  );
}
