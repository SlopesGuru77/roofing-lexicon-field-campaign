import { nextStreak } from '../../src/lib/streak';

test('first play ever → 1', () => {
  expect(nextStreak({ streakDays: 0, lastPlayedAt: null, today: '2026-05-20' }))
    .toEqual({ streakDays: 1, lastPlayedAt: '2026-05-20', didIncrement: true });
});
test('already played today → no-op', () => {
  expect(nextStreak({ streakDays: 5, lastPlayedAt: '2026-05-20', today: '2026-05-20' }))
    .toEqual({ streakDays: 5, lastPlayedAt: '2026-05-20', didIncrement: false });
});
test('played yesterday → increment', () => {
  expect(nextStreak({ streakDays: 5, lastPlayedAt: '2026-05-19', today: '2026-05-20' }))
    .toEqual({ streakDays: 6, lastPlayedAt: '2026-05-20', didIncrement: true });
});
test('gap of 2+ days → reset to 1', () => {
  expect(nextStreak({ streakDays: 12, lastPlayedAt: '2026-05-17', today: '2026-05-20' }))
    .toEqual({ streakDays: 1, lastPlayedAt: '2026-05-20', didIncrement: true });
});
