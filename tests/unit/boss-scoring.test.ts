import { scoreFight, type FightAnswer } from '../../src/lib/boss-scoring';

const allCorrect: FightAnswer[] = [
  { termKey: 'a', correct: true }, { termKey: 'b', correct: true }, { termKey: 'c', correct: true },
];
const oneWrong: FightAnswer[] = [
  { termKey: 'a', correct: true }, { termKey: 'b', correct: false }, { termKey: 'c', correct: true },
];

test('all correct → 100, passed=true (standard 85), perfect=true', () => {
  expect(scoreFight(allCorrect, 85))
    .toEqual({ score: 100, passed: true, wasPerfect: true, missedTermKeys: [] });
});
test('one wrong of three → 67, passed=false (85), perfect=false', () => {
  expect(scoreFight(oneWrong, 85))
    .toEqual({ score: 67, passed: false, wasPerfect: false, missedTermKeys: ['b'] });
});
test('86% threshold: 9/10 = 90 → passed', () => {
  const answers: FightAnswer[] = Array.from({ length: 10 }, (_, i) =>
    ({ termKey: `t${i}`, correct: i !== 0 }));
  const result = scoreFight(answers, 85);
  expect(result.score).toBe(90);
  expect(result.passed).toBe(true);
  expect(result.wasPerfect).toBe(false);
});
test('mastery exam threshold 90: 89% fails', () => {
  // 89/100 misses by 1
  const answers: FightAnswer[] = Array.from({ length: 100 }, (_, i) =>
    ({ termKey: `t${i}`, correct: i >= 11 }));
  const result = scoreFight(answers, 90);
  expect(result.score).toBe(89);
  expect(result.passed).toBe(false);
});
