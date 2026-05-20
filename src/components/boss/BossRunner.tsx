import { useState } from 'react';
import type { BossBank } from '../../content/bosses/types';
import type { CardDef, EarnedCard } from '../../types';
import { ProgressBar } from './ProgressBar';
import { RoundIntro } from './RoundIntro';
import { R1RapidId } from './R1RapidId';
import { R2ScenarioRound } from './R2Scenario';
import { R3ReportLang } from './R3ReportLang';
import { ResultScreen } from './ResultScreen';
import { ReviewScreen } from './ReviewScreen';
import { scoreFight } from '../../lib/boss-scoring';
import type { FightAnswer } from '../../lib/boss-scoring';
import { useProfile } from '../../state/ProfileContext';
import { useAuth } from '../../state/AuthContext';
import { useCollection } from '../../state/CollectionContext';
import { logAttempt } from '../../data/attempts';
import { earnCard, fetchEarnedCards } from '../../data/earned-cards';
import { updateStreak, addMasteryZone, getProfile } from '../../data/profiles';
import { nextStreak } from '../../lib/streak';
import { localTodayISO } from '../../lib/date';
import { fire } from '../../lib/plausible';
import { compositeTier } from '../../lib/composite-tier';
import { checkAndIssueCredential } from '../../data/credentials';

type Phase = 'intro-1' | 'r1' | 'intro-2' | 'r2' | 'intro-3' | 'r3' | 'result' | 'review';

interface Props { card: CardDef; bank: BossBank; }

const PASS = (isMastery: boolean) => isMastery ? 90 : 85;

export function BossRunner({ card, bank }: Props) {
  const { user } = useAuth();
  const { profile, reload: reloadProfile } = useProfile();
  const { reload: reloadCollection } = useCollection();

  const [phase, setPhase] = useState<Phase>('intro-1');
  const [answers, setAnswers] = useState<FightAnswer[]>([]);
  const [result, setResult] = useState<ReturnType<typeof scoreFight> | null>(null);
  const [earnedRow, setEarnedRow] = useState<EarnedCard | null>(null);

  function appendRound(a: FightAnswer[], nextPhase: Phase) {
    setAnswers(prev => [...prev, ...a]);
    setPhase(nextPhase);
  }

  async function finishFight(allAnswers: FightAnswer[]) {
    if (!user || !profile) return;
    const r = scoreFight(allAnswers, PASS(card.isMastery));
    setResult(r);

    // streak roll-over
    const today = localTodayISO();
    const ns = nextStreak({ streakDays: profile.streakDays, lastPlayedAt: profile.lastPlayedAt, today });
    await updateStreak(profile.userId, ns.streakDays, ns.lastPlayedAt);
    const streakUsed = ns.streakDays;

    await logAttempt({
      userId: user.id, bossId: card.id, isMasteryExam: card.isMastery,
      score: r.score, passed: r.passed, wasPerfect: r.wasPerfect,
      streakDaysAtAttempt: streakUsed, missedTermKeys: r.missedTermKeys,
    });

    if (r.passed) {
      const holoEarned = streakUsed >= 7;
      const legendEarned = streakUsed >= 30 || card.isMastery;
      const earned = await earnCard({
        userId: user.id, cardId: card.id,
        wasPerfect: r.wasPerfect, holoEarned, legendEarned,
      });
      setEarnedRow(earned);
      const tier = compositeTier({ perfect: earned.perfectEver, holo: earned.holoEver, legend: earned.legendEver });
      fire('card_earned', { rarity: tier, composite_tier: tier, boss_id: card.id, zone: card.zone });

      if (card.isMastery) {
        await addMasteryZone(user.id, card.zone);
      }

      await reloadProfile();
      await reloadCollection();
      const [p, e] = await Promise.all([getProfile(user.id), fetchEarnedCards(user.id)]);
      if (p) {
        const issued = await checkAndIssueCredential({ profile: p, earned: e, zone: card.zone });
        if (issued) fire('credential_issued', { zone: card.zone });
      }
    }
    setPhase('result');
  }

  const scoreSoFar = answers.filter(a => a.correct).length;
  const totalRounds = 3;

  return (
    <div className="min-h-screen flex flex-col">
      {phase !== 'result' && phase !== 'review' && (
        <ProgressBar
          round={phase === 'r1' || phase === 'intro-1' ? 1 : phase === 'r2' || phase === 'intro-2' ? 2 : 3}
          totalRounds={totalRounds}
          scoreSoFar={scoreSoFar}
        />
      )}

      {phase === 'intro-1' && <RoundIntro round={1} title="Rapid term ID" onStart={() => setPhase('r1')} />}
      {phase === 'r1' && <R1RapidId qs={bank.round1} onComplete={a => appendRound(a, 'intro-2')} />}
      {phase === 'intro-2' && <RoundIntro round={2} title="Scenario decision" onStart={() => setPhase('r2')} />}
      {phase === 'r2' && <R2ScenarioRound qs={bank.round2} onComplete={a => appendRound(a, 'intro-3')} />}
      {phase === 'intro-3' && <RoundIntro round={3} title="Report language" onStart={() => setPhase('r3')} />}
      {phase === 'r3' && <R3ReportLang qs={bank.round3} onComplete={a => {
        const all = [...answers, ...a];
        setAnswers(all);
        finishFight(all);
      }}/>}
      {phase === 'result' && result && (
        <ResultScreen
          passed={result.passed}
          score={result.score}
          card={card}
          earned={earnedRow ?? undefined}
          onReview={() => setPhase('review')}
          onRetry={() => { setPhase('intro-1'); setAnswers([]); setResult(null); setEarnedRow(null); }}
        />
      )}
      {phase === 'review' && (
        <ReviewScreen answers={answers} onClose={() => setPhase('result')} />
      )}
    </div>
  );
}
