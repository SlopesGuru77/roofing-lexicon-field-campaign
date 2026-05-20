import type { BossBank } from './types';
import { lowSlope01 } from './low-slope/01-ndl-warranty';
import { lowSlope02 } from './low-slope/02-epdm-ndl';
import { lowSlope03 } from './low-slope/03-modbit-ndl';
import { lowSlope04 } from './low-slope/04-bur';
import { lowSlope05 } from './low-slope/05-cool-roof';
import { lowSlope06 } from './low-slope/06-insulation';
import { lowSlope07 } from './low-slope/07-cover-board';
import { lowSlope08 } from './low-slope/08-coatings';
import { lowSlope09 } from './low-slope/09-wind-uplift';
import { lowSlope10 } from './low-slope/10-drainage';
import { lowSlope11Mastery } from './low-slope/11-mastery';
import { shingles01 } from './shingles/01-anatomy';
import { shingles02 } from './shingles/02-underlayment';
import { shingles03 } from './shingles/03-flashing';
import { shingles04 } from './shingles/04-ventilation';

export const BOSS_BANKS: Record<string, BossBank> = {
  'low-slope-01': lowSlope01,
  'low-slope-02': lowSlope02,
  'low-slope-03': lowSlope03,
  'low-slope-04': lowSlope04,
  'low-slope-05': lowSlope05,
  'low-slope-06': lowSlope06,
  'low-slope-07': lowSlope07,
  'low-slope-08': lowSlope08,
  'low-slope-09': lowSlope09,
  'low-slope-10': lowSlope10,
  'low-slope-11-mastery': lowSlope11Mastery,
  'shingles-01': shingles01,
  'shingles-02': shingles02,
  'shingles-03': shingles03,
  'shingles-04': shingles04,
};

export function bossBank(bossId: string): BossBank | undefined {
  return BOSS_BANKS[bossId];
}
