export interface FightAnswer { termKey: string; correct: boolean; }
export interface FightResult {
  score: number;
  passed: boolean;
  wasPerfect: boolean;
  missedTermKeys: string[];
}

export function scoreFight(answers: FightAnswer[], passThreshold: number): FightResult {
  const total = answers.length;
  const correctCount = answers.filter(a => a.correct).length;
  const score = Math.round((correctCount / total) * 100);
  return {
    score,
    passed: score >= passThreshold,
    wasPerfect: correctCount === total,
    missedTermKeys: answers.filter(a => !a.correct).map(a => a.termKey),
  };
}
