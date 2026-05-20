import type { Zone } from '../types';

interface Input {
  zone: Zone;
  ownedCardIds: string[];
  zoneCardIds: string[];
  masteryPassedZones: Zone[];
}

export function shouldIssueCredential({ zone, ownedCardIds, zoneCardIds, masteryPassedZones }: Input): boolean {
  if (!masteryPassedZones.includes(zone)) return false;
  const owned = new Set(ownedCardIds);
  return zoneCardIds.every(id => owned.has(id));
}
