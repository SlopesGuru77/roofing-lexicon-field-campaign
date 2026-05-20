import { supabase } from '../lib/supabase';
import type { ProfileRow, Role, Zone } from '../types';

const TABLE = 'rlfc_profiles';

function fromRow(r: any): ProfileRow {
  return {
    userId: r.user_id,
    displayName: r.display_name,
    role: r.role,
    streakDays: r.streak_days,
    lastPlayedAt: r.last_played_at,
    studyCred: r.study_cred,
    masteryPassedZones: r.mastery_passed_zones ?? [],
  };
}

export async function getProfile(userId: string): Promise<ProfileRow | null> {
  const { data, error } = await supabase.from(TABLE).select('*').eq('user_id', userId).maybeSingle();
  if (error) throw error;
  return data ? fromRow(data) : null;
}

export async function createProfile(input: { userId: string; displayName: string; role: Role }): Promise<ProfileRow> {
  const { data, error } = await supabase.from(TABLE).insert({
    user_id: input.userId,
    display_name: input.displayName,
    role: input.role,
  }).select().single();
  if (error) throw error;
  return fromRow(data);
}

export async function updateStreak(userId: string, streakDays: number, lastPlayedAt: string): Promise<void> {
  const { error } = await supabase.from(TABLE)
    .update({ streak_days: streakDays, last_played_at: lastPlayedAt })
    .eq('user_id', userId);
  if (error) throw error;
}

export async function incrementStudyCred(userId: string, by: number): Promise<void> {
  const { data, error } = await supabase.from(TABLE).select('study_cred').eq('user_id', userId).single();
  if (error) throw error;
  const next = (data.study_cred ?? 0) + by;
  const { error: e2 } = await supabase.from(TABLE).update({ study_cred: next }).eq('user_id', userId);
  if (e2) throw e2;
}

export async function addMasteryZone(userId: string, zone: Zone): Promise<void> {
  const { data, error } = await supabase.from(TABLE).select('mastery_passed_zones').eq('user_id', userId).single();
  if (error) throw error;
  const cur = (data.mastery_passed_zones ?? []) as Zone[];
  if (cur.includes(zone)) return;
  const { error: e2 } = await supabase.from(TABLE)
    .update({ mastery_passed_zones: [...cur, zone] })
    .eq('user_id', userId);
  if (e2) throw e2;
}
