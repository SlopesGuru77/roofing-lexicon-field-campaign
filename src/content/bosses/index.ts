import type { BossBank } from './types';
import { lowSlope01 } from './low-slope/01-ndl-warranty';

export const BOSS_BANKS: Record<string, BossBank> = {
  'low-slope-01': lowSlope01,
};

export function bossBank(bossId: string): BossBank | undefined {
  return BOSS_BANKS[bossId];
}
