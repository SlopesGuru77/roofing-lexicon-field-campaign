export interface R1Question {
  prompt: string;
  termKey: string;
  choices: string[];
}

export interface R2Scenario {
  prompt: string;
  choices: { text: string; correct: boolean }[];
  relatedTermKey?: string;
}

export interface R3Prompt {
  topic: string;
  poor: string;
  better: string;
  best: string;
  why: string;
  relatedTermKey?: string;
}

export interface BossBank {
  bossId: string;
  round1: R1Question[];
  round2: R2Scenario[];
  round3: R3Prompt[];
}

export interface MasteryBank extends BossBank {
  isMastery: true;
}
