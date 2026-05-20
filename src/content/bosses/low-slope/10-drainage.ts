import type { BossBank } from '../types';

// Positive Drainage & Ponding boss — slope, tapered insulation, drains,
// scuppers, crickets, the 48-hour rule, and why ponding voids warranties.

export const lowSlope10: BossBank = {
  bossId: 'low-slope-10',

  round1: [
    {
      prompt: 'Positive drainage is defined by what timeline?',
      termKey: 'Positive Drainage',
      choices: [
        'The roof fully drains within 48 hours of rainfall',
        'The roof fully drains within 24 hours of rainfall',
        'The roof drains within 1 hour of rainfall',
        'There is no specific timeline',
      ],
    },
    {
      prompt: 'Ponding water is typically defined as standing water still present after:',
      termKey: 'Ponding Water',
      choices: [
        'Roughly 24 hours or more after rain',
        'Roughly 1 hour after rain',
        'Roughly 1 week after rain',
        'The next rainfall arrives',
      ],
    },
    {
      prompt: 'A scupper is best described as:',
      termKey: 'Scupper',
      choices: [
        'An opening at a roof edge or through a parapet that drains water',
        'A central interior drain',
        'A raised structure that diverts water around an obstruction',
        'A type of waterproof flashing',
      ],
    },
    {
      prompt: 'A cricket (saddle) is installed where?',
      termKey: 'Cricket (Saddle)',
      choices: [
        'On the up-slope side of a chimney or curb, to channel water around the obstruction',
        'Across the entire roof field to create slope',
        'Inside the drain to prevent leaves',
        'At the parapet only',
      ],
    },
    {
      prompt: 'Tapered insulation\'s primary function is:',
      termKey: 'Tapered Insulation',
      choices: [
        'To build slope into an otherwise flat roof and direct water toward drains',
        'To add R-value uniformly across the roof',
        'To stiffen the roof for foot traffic',
        'To replace the deck',
      ],
    },
    {
      prompt: 'A roof spec\'d as "dead level" can only be tolerated reliably with which bitumen?',
      termKey: 'Coal Tar Pitch',
      choices: ['Coal tar pitch (self-healing under standing water)', 'Asphalt bitumen', 'SBS modified', 'APP modified'],
    },
    {
      prompt: 'Manufacturer NDL warranties commonly EXCLUDE coverage for leaks attributable to:',
      termKey: 'Ponding Water',
      choices: [
        'Ponding water beyond the manufacturer\'s stated window',
        'Manufacturer-defect-driven seam failure',
        'Hail-resistance failure on rated assemblies',
        'Materials supplied directly by the manufacturer',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'An owner reports a leak on a 6-year-old modified-bitumen roof, in a low quadrant where water still stands more than 60 hours after rain. The owner wants the leak covered under the manufacturer NDL warranty.',
      choices: [
        {
          text: 'Document the ponding as a separate finding before submitting. NDL warranties (mod-bit included) typically exclude leaks caused by ponding water; submitting the warranty claim without naming the ponding sets up a denial. Two separate documentation paths: the warranty (likely won\'t pay in the ponding area) and the design defect (slope/drainage problem that is its own claim path against whoever was responsible for the slope).',
          correct: true,
        },
        {
          text: 'Submit the warranty claim without mentioning the ponding.',
          correct: false,
        },
        {
          text: "Tell the owner ponding is harmless and refuse to file anything.",
          correct: false,
        },
      ],
      relatedTermKey: 'Ponding Water',
    },
    {
      prompt:
        'A re-roof spec on a 50,000 sq ft warehouse calls for tapered insulation to achieve 1/4\":12 slope. The owner pushes back, asking why the existing dead-level roof needs slope at all when it has lasted 30 years.',
      choices: [
        {
          text: 'The previous roof was likely coal-tar pitch BUR, which historically tolerated dead-level slope; that membrane chemistry is largely off the market and modern membranes (TPO, EPDM, PVC, mod-bit asphalt) all require positive drainage to maintain their warranties and avoid ponding-driven failure. Tapered insulation is the standard fix when the deck cannot be re-sloped.',
          correct: true,
        },
        {
          text: 'The previous roof worked because dead-level is fine for any membrane.',
          correct: false,
        },
        {
          text: 'Skip the taper to save money; warranties are recommendations.',
          correct: false,
        },
      ],
      relatedTermKey: 'Tapered Insulation',
    },
    {
      prompt:
        'A new HVAC unit was installed on top of an existing low-slope roof without a cricket on the up-slope side. The owner reports persistent staining and a slow drip below the unit.',
      choices: [
        {
          text: 'Document the missing cricket as the root cause. Water hits the up-slope side of the unit, dams against the equipment curb, and migrates under the flashing at the stagnation line — exactly what a cricket exists to prevent. Recommend cricket retrofit and curb flashing rebuild, photograph the staining and drip pattern, and route the work scope through the HVAC installer if they touched the roof.',
          correct: true,
        },
        {
          text: 'The drip is normal for new equipment; ignore it.',
          correct: false,
        },
        {
          text: 'Install another drain right next to the unit.',
          correct: false,
        },
      ],
      relatedTermKey: 'Cricket (Saddle)',
    },
  ],

  round3: [
    {
      topic: 'Explaining the 48-hour positive-drainage rule to an owner',
      poor: 'The roof should drain.',
      better: 'A properly designed low-slope roof drains fully within 48 hours of rain; longer than that is ponding.',
      best: "Positive drainage means the roof is sloped so all standing water clears within 48 hours of the rain ending. Anything beyond that window is ponding, and most manufacturer warranties carry a written exclusion for leaks caused by ponded water. Two consequences follow: (1) ponding makes warranty claims in those areas unfightable, and (2) ponding accelerates the membrane and seam failure where it sits, so the area gets worse on its own timeline. Slope correction is rarely a 'simple add' — it usually means tapered insulation or supplemental drains, which has real cost — but the alternative is a slow-failing zone the warranty won't cover.",
      why: "Owners hear 'positive drainage' as a vague design preference. Naming the 48-hour rule, the warranty consequence, and the slope-correction cost reality reframes it as a documented warranty condition.",
      relatedTermKey: 'Positive Drainage',
    },
    {
      topic: 'Documenting tapered-insulation slope on a record drawing',
      poor: 'Tapered insulation provides slope.',
      better: '1/4":12 slope via tapered polyiso, directing water to 4 interior drains at the grid quarter-points.',
      best: "Roof slope built with tapered polyiso insulation: 1/4 in/ft minimum slope from high points to interior drains, designed to evacuate the design rainfall within 48 hours of cessation. Four primary interior drains at column-grid quarter-points sized per the local plumbing code rainfall intensity for 100-year storm. Two emergency overflow scuppers at the parapet at +2 in above primary drain rim. Crickets installed up-slope of all rooftop units and curbs ≥ 12 ft cross-slope. Verify rainfall intensity and ponding-load calculation with structural before final issuance.",
      why: "Drainage design is often documented as 'tapered insulation' with no further detail. Naming the slope rate, drain count and sizing, overflow scuppers, crickets, AND the rainfall basis is what makes the drainage design checkable and code-defensible.",
      relatedTermKey: 'Tapered Insulation',
    },
    {
      topic: 'Explaining to an owner why ponding is a warranty problem AND a design problem',
      poor: 'Ponding voids the warranty.',
      better: 'Ponding voids the warranty in the ponding area, and the standing water itself is a design defect.',
      best: "Ponding water is two separate problems at once. First, manufacturer warranties (NDL included) exclude leaks caused by ponded water — that means even a brand-new membrane will not be warranty-covered in the ponding zone. Second, ponding is a design-defect symptom: the original slope, the drain placement, the deck deflection, or the insulation taper was wrong, and the standing water is its own claim path against whoever was responsible. The two should be documented separately, because they have different remedies, different counter-parties, and different timelines.",
      why: 'Owners and adjusters often collapse ponding into a single failure. Separating the warranty conversation from the design-defect conversation gets each one onto the right track.',
      relatedTermKey: 'Ponding Water',
    },
    {
      topic: 'Field-report language for a ponding-driven leak under an active NDL',
      poor: 'Leak in the ponding area.',
      better: 'Leak in low quadrant; water stands more than 60 hours; warranty likely excludes ponding-driven leaks.',
      best: "Documented leak in the southeast quadrant of the roof, photos attached. Standing water measured 60+ hours post-rain on prior inspection; ponding boundary marked on the as-built. Roof is in year 6 of a 25-year manufacturer NDL. Manufacturer warranty language excludes leaks caused by ponded water; submitting the warranty claim WITH explicit naming of the ponding will document the carve-out rather than invite a quiet denial. Separately recommend a slope study: this ponding is a design defect with its own remedy (tapered fill or supplemental drains) and its own claim path, independent of the membrane warranty.",
      why: "A ponding-driven leak filed as a pure warranty claim is the most common 'silent denial' setup. Naming the ponding up front, the warranty carve-out, and the parallel design-defect path keeps the owner's options open on both fronts.",
      relatedTermKey: 'Positive Drainage',
    },
  ],
};
