import { supabase } from '../lib/supabase';
import type { EarnedCard } from '../types';

const TABLE = 'rlfc_earned_cards';

function fromRow(r: any): EarnedCard {
  return {
    cardId: r.card_id,
    perfectEver: r.perfect_ever,
    holoEver: r.holo_ever,
    legendEver: r.legend_ever,
    firstEarnedAt: r.first_earned_at,
    lastEarnedAt: r.last_earned_at,
  };
}

export async function fetchEarnedCards(userId: string): Promise<EarnedCard[]> {
  const { data, error } = await supabase.from(TABLE).select('*').eq('user_id', userId);
  if (error) throw error;
  return (data ?? []).map(fromRow);
}

interface EarnInput {
  userId: string;
  cardId: string;
  wasPerfect: boolean;
  holoEarned: boolean;
  legendEarned: boolean;
}

export async function earnCard({ userId, cardId, wasPerfect, holoEarned, legendEarned }: EarnInput): Promise<EarnedCard> {
  const { data: existing } = await supabase.from(TABLE)
    .select('*').eq('user_id', userId).eq('card_id', cardId).maybeSingle();

  const now = new Date().toISOString();

  if (!existing) {
    const { data, error } = await supabase.from(TABLE).insert({
      user_id: userId, card_id: cardId,
      perfect_ever: wasPerfect, holo_ever: holoEarned, legend_ever: legendEarned,
      first_earned_at: now, last_earned_at: now,
    }).select().single();
    if (error) throw error;
    return fromRow(data);
  }

  const { data, error } = await supabase.from(TABLE).update({
    perfect_ever: existing.perfect_ever || wasPerfect,
    holo_ever:    existing.holo_ever    || holoEarned,
    legend_ever:  existing.legend_ever  || legendEarned,
    last_earned_at: now,
  }).eq('user_id', userId).eq('card_id', cardId).select().single();
  if (error) throw error;
  return fromRow(data);
}
