import { localTodayISO, isYesterday } from '../../src/lib/date';

test('localTodayISO returns ISO date string from a Date', () => {
  // 2026-05-20 18:00 in any timezone should produce 2026-05-20 in player local
  const d = new Date('2026-05-20T18:00:00');
  expect(localTodayISO(d)).toMatch(/^2026-05-\d{2}$/);
});
test('isYesterday: 2026-05-19 vs today 2026-05-20 → true', () => {
  expect(isYesterday('2026-05-19', '2026-05-20')).toBe(true);
});
test('isYesterday: same day → false', () => {
  expect(isYesterday('2026-05-20', '2026-05-20')).toBe(false);
});
test('isYesterday: 2 days ago → false', () => {
  expect(isYesterday('2026-05-18', '2026-05-20')).toBe(false);
});
test('isYesterday handles month boundary', () => {
  expect(isYesterday('2026-04-30', '2026-05-01')).toBe(true);
});
test('isYesterday handles year boundary', () => {
  expect(isYesterday('2025-12-31', '2026-01-01')).toBe(true);
});
