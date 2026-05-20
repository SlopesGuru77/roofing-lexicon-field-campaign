export function ProgressBar({ round, totalRounds, scoreSoFar }:
  { round: number; totalRounds: number; scoreSoFar: number }) {
  return (
    <div className="border-b border-paper-line py-2 px-4 flex justify-between font-mono text-xs uppercase">
      <span>Round {round} / {totalRounds}</span>
      <span>{scoreSoFar} pt</span>
    </div>
  );
}
