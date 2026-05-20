import { ZONES, ZONE_LABEL } from '../../content/cards';
import type { Zone } from '../../types';

export function ZoneSwitcher({ value, onChange }: { value: Zone; onChange: (z: Zone) => void }) {
  return (
    <div className="flex border border-paper-line">
      {ZONES.map(z => (
        <button key={z} onClick={() => onChange(z)}
          className={`flex-1 py-2 font-mono uppercase text-sm ${
            value === z ? 'bg-ink text-newsprint' : 'text-footnote'
          }`}>{ZONE_LABEL[z]}</button>
      ))}
    </div>
  );
}
