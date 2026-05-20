import { Link } from 'react-router-dom';
import type { CardDef, EarnedCard } from '../../types';
import { compositeTier } from '../../lib/composite-tier';

interface Props { card: CardDef; earned?: EarnedCard; locked?: boolean; }

const TIER_HALO: Record<string, string> = {
  common: 'shadow-none',
  rare: 'shadow-[0_0_0_2px_var(--color-redline,#b91c1c)]',
  holo: 'shadow-[0_0_12px_4px_rgba(180,180,255,0.6)]',
  'rare-holo': 'shadow-[0_0_14px_4px_rgba(255,200,200,0.7)]',
  legend: 'shadow-[0_0_20px_6px_rgba(255,200,80,0.7)]',
  'legendary-master': 'shadow-[0_0_24px_8px_rgba(255,220,120,0.85)]',
};

export function BossNode({ card, earned, locked }: Props) {
  const tier = earned
    ? compositeTier({ perfect: earned.perfectEver, holo: earned.holoEver, legend: earned.legendEver })
    : 'common';
  const halo = earned ? TIER_HALO[tier] : '';
  const base = `block w-20 h-20 rounded-full border-2 flex items-center justify-center font-display text-xs text-center ${halo}`;
  const styles = locked
    ? `${base} border-paper-line bg-paper-dark text-footnote opacity-50`
    : earned
      ? `${base} border-ink bg-card`
      : `${base} border-ink bg-newsprint`;

  if (locked) {
    return <div className={styles}>Locked</div>;
  }
  return <Link to={`/boss/${card.id}`} className={styles}>{card.name}</Link>;
}
