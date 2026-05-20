import type { CardDef, EarnedCard } from '../../types';
import { compositeTier } from '../../lib/composite-tier';

const FRAME: Record<string, string> = {
  common: 'border-2 border-ink bg-card',
  rare: 'border-2 border-redline bg-card',
  holo: 'border-2 border-ink bg-card bg-gradient-to-br from-card via-paper-dark to-card',
  'rare-holo': 'border-2 border-redline bg-gradient-to-br from-card via-paper-dark to-card',
  legend: 'border-2 border-citation bg-card shadow-[0_0_12px_4px_rgba(255,200,80,0.45)]',
  'legendary-master': 'border-4 border-citation bg-card shadow-[0_0_18px_6px_rgba(255,210,100,0.65)]',
};

export function Card({ card, earned }: { card: CardDef; earned: EarnedCard }) {
  const tier = compositeTier({ perfect: earned.perfectEver, holo: earned.holoEver, legend: earned.legendEver });
  return (
    <div className={`aspect-[3/4] p-2 flex flex-col ${FRAME[tier]}`}>
      <div className="font-mono text-[10px] uppercase text-footnote">{card.zone}</div>
      <div className="font-display text-sm mt-1 flex-1">{card.name}</div>
      <div className="font-mono text-[10px] uppercase text-citation mt-1">{tier.replace('-', ' ')}</div>
      <div className="flex gap-1 text-[10px]">
        {earned.perfectEver && <span title="Perfect run">P</span>}
        {(earned.holoEver || earned.legendEver) && <span title="Streak earned">🔥</span>}
      </div>
    </div>
  );
}
