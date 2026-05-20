export type Zone = 'shingles' | 'low-slope' | 'code';

export type Role =
  | 'estimator'
  | 'supplement_writer'
  | 'inspector'
  | 'claims_adjuster'
  | 'public_adjuster'
  | 'other';

export type CompositeTier =
  | 'common'
  | 'rare'
  | 'holo'
  | 'rare-holo'
  | 'legend'
  | 'legendary-master';

export interface CardDef {
  id: string;
  zone: Zone;
  name: string;
  termKey: string;
  illustrationPath: string;
  isMastery: boolean;
  blurb: string;
}

export interface EarnedCard {
  cardId: string;
  perfectEver: boolean;
  holoEver: boolean;
  legendEver: boolean;
  firstEarnedAt: string;
  lastEarnedAt: string;
}

export interface ProfileRow {
  userId: string;
  displayName: string;
  role: Role;
  streakDays: number;
  lastPlayedAt: string | null;
  studyCred: number;
  masteryPassedZones: Zone[];
}
