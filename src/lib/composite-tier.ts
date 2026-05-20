import type { CompositeTier } from '../types';

interface Booleans { perfect: boolean; holo: boolean; legend: boolean; }

export function compositeTier({ perfect, holo, legend }: Booleans): CompositeTier {
  if (legend && perfect) return 'legendary-master';
  if (legend) return 'legend';
  if (perfect && holo) return 'rare-holo';
  if (holo) return 'holo';
  if (perfect) return 'rare';
  return 'common';
}
