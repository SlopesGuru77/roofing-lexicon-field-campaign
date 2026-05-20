import type { BossBank } from './types';
import { lowSlope01 } from './low-slope/01-ndl-warranty';
import { lowSlope02 } from './low-slope/02-epdm-ndl';
import { lowSlope03 } from './low-slope/03-modbit-ndl';

export const BOSS_BANKS: Record<string, BossBank> = {
  'low-slope-01': lowSlope01,
  'low-slope-02': lowSlope02,
  'low-slope-03': lowSlope03,
};

export function bossBank(bossId: string): BossBank | undefined {
  return BOSS_BANKS[bossId];
}
