import { supabase } from '../lib/supabase';

const TABLE = 'rlfc_attempts';

export interface AttemptInput {
  userId: string;
  bossId: string;
  isMasteryExam: boolean;
  score: number;
  passed: boolean;
  wasPerfect: boolean;
  streakDaysAtAttempt: number;
  missedTermKeys: string[];
}

export async function logAttempt(a: AttemptInput): Promise<void> {
  const { error } = await supabase.from(TABLE).insert({
    user_id: a.userId, boss_id: a.bossId, is_mastery_exam: a.isMasteryExam,
    score: a.score, passed: a.passed, was_perfect: a.wasPerfect,
    streak_days_at_attempt: a.streakDaysAtAttempt, missed_term_keys: a.missedTermKeys,
  });
  if (error) throw error;
}

export async function recentMissedTermKeys(userId: string, sinceDays = 14): Promise<string[]> {
  const since = new Date(Date.now() - sinceDays * 86_400_000).toISOString();
  const { data, error } = await supabase.from(TABLE)
    .select('missed_term_keys')
    .eq('user_id', userId)
    .gte('attempted_at', since);
  if (error) throw error;
  const all = (data ?? []).flatMap(r => r.missed_term_keys as string[]);
  return Array.from(new Set(all));
}
