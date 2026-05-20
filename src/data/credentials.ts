import type { Zone, ProfileRow, EarnedCard } from '../types';
import { cardsByZone } from '../content/cards';
import { shouldIssueCredential } from '../lib/credential';
import { addMasteryZone } from './profiles';

interface CheckInput {
  profile: ProfileRow;
  earned: EarnedCard[];
  zone: Zone;
}

// Returns true if a new credential was just issued (caller fires Plausible event).
export async function checkAndIssueCredential({ profile, earned, zone }: CheckInput): Promise<boolean> {
  if (profile.masteryPassedZones.includes(zone)) return false; // already had it
  const zoneCardIds = cardsByZone(zone).map(c => c.id);
  const ownedIds = earned.map(e => e.cardId);
  const issue = shouldIssueCredential({
    zone,
    ownedCardIds: ownedIds,
    zoneCardIds,
    masteryPassedZones: [...profile.masteryPassedZones, zone],
  });
  if (issue) {
    await addMasteryZone(profile.userId, zone);
    return true;
  }
  return false;
}
