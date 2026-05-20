import { isYesterday } from './date';

interface Input { streakDays: number; lastPlayedAt: string | null; today: string; }
interface Output { streakDays: number; lastPlayedAt: string; didIncrement: boolean; }

export function nextStreak({ streakDays, lastPlayedAt, today }: Input): Output {
  if (lastPlayedAt === today) {
    return { streakDays, lastPlayedAt, didIncrement: false };
  }
  if (lastPlayedAt && isYesterday(lastPlayedAt, today)) {
    return { streakDays: streakDays + 1, lastPlayedAt: today, didIncrement: true };
  }
  return { streakDays: 1, lastPlayedAt: today, didIncrement: true };
}
