import { compositeTier } from '../../src/lib/composite-tier';

test('all false → common', () => {
  expect(compositeTier({ perfect: false, holo: false, legend: false })).toBe('common');
});
test('perfect only → rare', () => {
  expect(compositeTier({ perfect: true, holo: false, legend: false })).toBe('rare');
});
test('holo only → holo', () => {
  expect(compositeTier({ perfect: false, holo: true, legend: false })).toBe('holo');
});
test('perfect + holo → rare-holo', () => {
  expect(compositeTier({ perfect: true, holo: true, legend: false })).toBe('rare-holo');
});
test('legend (no perfect) → legend regardless of holo', () => {
  expect(compositeTier({ perfect: false, holo: false, legend: true })).toBe('legend');
  expect(compositeTier({ perfect: false, holo: true, legend: true })).toBe('legend');
});
test('perfect + legend → legendary-master regardless of holo', () => {
  expect(compositeTier({ perfect: true, holo: false, legend: true })).toBe('legendary-master');
  expect(compositeTier({ perfect: true, holo: true, legend: true })).toBe('legendary-master');
});
