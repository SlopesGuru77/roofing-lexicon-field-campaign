import type { CardDef } from '../../types';
export function CardSilhouette({ card }: { card: CardDef }) {
  return (
    <div className="aspect-[3/4] p-2 border border-paper-line bg-paper-dark flex flex-col opacity-60">
      <div className="font-mono text-[10px] uppercase text-footnote">{card.zone}</div>
      <div className="font-display text-sm mt-1 flex-1 text-footnote">{card.name}</div>
      <div className="font-mono text-[10px] uppercase text-footnote">unearned</div>
    </div>
  );
}
