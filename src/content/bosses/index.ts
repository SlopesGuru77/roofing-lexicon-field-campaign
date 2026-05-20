import type { BossBank } from './types';
import { lowSlope01 } from './low-slope/01-ndl-warranty';
import { lowSlope02 } from './low-slope/02-epdm-ndl';
import { lowSlope03 } from './low-slope/03-modbit-ndl';
import { lowSlope04 } from './low-slope/04-bur';
import { lowSlope05 } from './low-slope/05-cool-roof';
import { lowSlope06 } from './low-slope/06-insulation';
import { lowSlope07 } from './low-slope/07-cover-board';

export const BOSS_BANKS: Record<string, BossBank> = {
  'low-slope-01': lowSlope01,
  'low-slope-02': lowSlope02,
  'low-slope-03': lowSlope03,
  'low-slope-04': lowSlope04,
  'low-slope-05': lowSlope05,
  'low-slope-06': lowSlope06,
  'low-slope-07': lowSlope07,
};

export function bossBank(bossId: string): BossBank | undefined {
  return BOSS_BANKS[bossId];
}
