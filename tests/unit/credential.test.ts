import { shouldIssueCredential } from '../../src/lib/credential';

const shinglesCardIds = ['s01','s02','s03','s04','s05','s06','s07','s08','s09','s10','s11-mastery'];

test('all 11 owned + mastery passed → true', () => {
  expect(shouldIssueCredential({
    zone: 'shingles',
    ownedCardIds: shinglesCardIds,
    zoneCardIds: shinglesCardIds,
    masteryPassedZones: ['shingles'],
  })).toBe(true);
});
test('missing 1 card → false', () => {
  expect(shouldIssueCredential({
    zone: 'shingles',
    ownedCardIds: shinglesCardIds.slice(0, 10),
    zoneCardIds: shinglesCardIds,
    masteryPassedZones: ['shingles'],
  })).toBe(false);
});
test('all owned but mastery not passed → false', () => {
  expect(shouldIssueCredential({
    zone: 'shingles',
    ownedCardIds: shinglesCardIds,
    zoneCardIds: shinglesCardIds,
    masteryPassedZones: [],
  })).toBe(false);
});
test('different zone in mastery list does not count', () => {
  expect(shouldIssueCredential({
    zone: 'shingles',
    ownedCardIds: shinglesCardIds,
    zoneCardIds: shinglesCardIds,
    masteryPassedZones: ['code'],
  })).toBe(false);
});
