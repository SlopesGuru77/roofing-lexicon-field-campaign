export function RoundIntro({ round, title, onStart }: { round: number; title: string; onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <div className="font-mono uppercase text-footnote">Round {round}</div>
      <div className="font-display text-3xl my-3">{title}</div>
      <button onClick={onStart} className="mt-6 bg-ink text-newsprint px-6 py-2 font-mono uppercase">Start</button>
    </div>
  );
}
