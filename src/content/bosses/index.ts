import type { BossBank } from './types';
// Imports for each of the 33 boss bank files go here when they are authored.
// e.g., import { shingles01 } from './shingles/01';
export const BOSS_BANKS: Record<string, BossBank> = {
  // 'shingles-01': shingles01,
};

export function bossBank(bossId: string): BossBank | undefined {
  return BOSS_BANKS[bossId];
}
