import { Link } from 'react-router-dom';
import type { CardDef, EarnedCard } from '../../types';
import { Card } from '../card/Card';

interface Props {
  passed: boolean;
  score: number;
  card: CardDef;
  earned?: EarnedCard;
  onReview: () => void;
  onRetry: () => void;
}

export function ResultScreen({ passed, score, card, earned, onReview, onRetry }: Props) {
  return (
    <div className="p-6 flex flex-col items-center min-h-[80vh]">
      <div className="font-mono uppercase text-footnote">{passed ? 'Cleared' : 'Failed'}</div>
      <div className="font-display text-5xl my-3">{score}</div>
      {passed && earned && (
        <div className="w-32 my-4">
          <Card card={card} earned={earned} />
        </div>
      )}
      <div className="flex gap-3 mt-6">
        {!passed && (
          <button onClick={onReview} className="border border-ink px-4 py-2 font-mono uppercase">Review</button>
        )}
        <button onClick={onRetry} className="border border-ink px-4 py-2 font-mono uppercase">Retry</button>
        <Link to="/map" className="bg-ink text-newsprint px-4 py-2 font-mono uppercase">Back to Map</Link>
      </div>
    </div>
  );
}
