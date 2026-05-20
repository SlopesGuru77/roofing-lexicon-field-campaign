import type { BossBank } from '../types';

// Hail on Shingles boss — functional damage indicators, granule loss
// patterns, Haag thresholds, the age/condition factor, the adjuster
// vs forensic-inspector conversation.

export const shingles06: BossBank = {
  bossId: 'shingles-06',

  round1: [
    {
      prompt: 'Functional damage on an asphalt shingle is best identified by:',
      termKey: 'Granule Loss',
      choices: [
        'Localized granule loss with mat exposure, often clustered with circular bruising',
        'Uniform granule thinning across the entire field',
        'Discoloration only',
        'Wind-blown debris on the surface',
      ],
    },
    {
      prompt: 'Generalized uniform granule thinning across all slopes is usually:',
      termKey: 'Granule Loss',
      choices: [
        'Weathering / UV aging, not impact-related',
        'Always hail damage',
        'A manufacturing defect',
        'Caused by foot traffic only',
      ],
    },
    {
      prompt: 'Haag Engineering\'s published hail-damage thresholds for asphalt shingles are best treated as:',
      termKey: 'Haag Engineering',
      choices: [
        'Reference data — one informed opinion among several, not policy text',
        'Carrier policy language requiring exact compliance',
        'Federal regulations enforced by FEMA',
        'The single legal definition of damage',
      ],
    },
    {
      prompt: 'A "Class 4" impact-resistant shingle has passed which type of test?',
      termKey: 'Impact-Resistant Shingle',
      choices: [
        'A controlled steel-ball impact test (UL 2218 Class 4)',
        'A wind-only test',
        'A fire-only test',
        'A weatherometer / UV test',
      ],
    },
    {
      prompt: 'Hail bruising on a shingle is most reliably confirmed by:',
      termKey: 'Granule Loss',
      choices: [
        'Tactile feel of a depression with surrounding mat exposure, photographed and measured',
        'Visual color change alone, from the ground',
        'A homeowner statement that "it hit hard"',
        'The presence of any granules in the gutter',
      ],
    },
    {
      prompt: 'Hail damage progression typically begins with:',
      termKey: 'Granule Loss',
      choices: [
        'Cap-sheet granule loss and mat bruising before any visible through-puncture',
        'Through-and-through holes from the first impact',
        'Failure of the underlayment first',
        'Immediate seam separation',
      ],
    },
    {
      prompt: 'The age and condition of the existing shingles affect hail-damage thresholds because:',
      termKey: 'Hail Damage Threshold (by Material)',
      choices: [
        'Older, weathered shingles bruise at smaller stone sizes than fresh ones',
        'Older shingles are inherently impact-resistant from age-hardening',
        'Age does not affect threshold',
        'Shingle color, not age, drives the threshold',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A field adjuster denies a hail claim on a 14-year-old asphalt shingle roof, citing the storm\'s reported maximum stone size of 1.25" and Haag\'s published threshold of ~1.25" for fresh asphalt shingles.',
      choices: [
        {
          text: "Haag's thresholds are for fresh shingles in good condition; a 14-year-old weathered shingle bruises at smaller stones. Document on-roof evidence directly: granule clusters in valleys and at downspouts, mat exposure and circular bruising counts per slope, and the documented condition consistent with age. Threshold is reference, not the dispositive test.",
          correct: true,
        },
        {
          text: 'Accept the denial; Haag thresholds are policy.',
          correct: false,
        },
        {
          text: 'Argue that all stones over 1" damage all shingles.',
          correct: false,
        },
      ],
      relatedTermKey: 'Hail Damage Threshold (by Material)',
    },
    {
      prompt:
        "A roof shows generalized granule thinning across all slopes with no localized impact pattern, and the homeowner is filing a hail claim from a confirmed storm 3 months ago. The contractor wants to file as hail damage anyway.",
      choices: [
        {
          text: 'Push back on filing as hail. The damage pattern (uniform thinning, no localized impact clusters, no circular bruising) is age/weathering, not hail. Filing as hail mis-represents the claim; the carrier denies; both contractor and homeowner lose credibility on the next legitimate claim. Document honestly as weathering and have a separate conversation about the home\'s reserve-replacement budget.',
          correct: true,
        },
        {
          text: 'File as hail — the storm was confirmed, so the granule thinning must be hail.',
          correct: false,
        },
        {
          text: 'File a non-storm claim against the manufacturer.',
          correct: false,
        },
      ],
      relatedTermKey: 'Granule Loss',
    },
    {
      prompt:
        'A roof inspection finds localized impact bruising and granule loss clustered on the north and west slopes (the storm-facing slopes), with the east and south slopes intact. The adjuster argues that "only one side of damage" is suspicious.',
      choices: [
        {
          text: 'Directional damage clustering on storm-facing slopes is the hallmark of authentic hail impact. Hail falls at an angle driven by storm winds, hits the windward slopes, and may completely miss the leeward slopes. Document the storm wind direction from NOAA, photograph each slope, and frame the pattern as evidence FOR the claim, not against it.',
          correct: true,
        },
        {
          text: 'Concede the adjuster\'s point; only all-slope damage counts.',
          correct: false,
        },
        {
          text: 'Climb up and bruise the other slopes to match.',
          correct: false,
        },
      ],
      relatedTermKey: 'Hail Damage Threshold (by Material)',
    },
  ],

  round3: [
    {
      topic: 'Explaining hail-damage functional vs cosmetic to a homeowner',
      poor: 'It is damaged.',
      better: 'Functional damage means granule loss and mat exposure that compromise the shingle\'s waterproofing; cosmetic damage is appearance only.',
      best: "Hail can hit a roof and leave a mark without compromising the waterproofing — that's cosmetic. Or it can fracture the granule layer, expose the asphalt mat to UV, and start a clock on the shingle's service life — that's functional. The line between them is whether the impact has compromised the shingle's ability to shed water and resist further weathering. The way to know is to look closely: a tactile depression, exposed mat, and a circular granule-loss pattern is functional; a visual mark with intact granules is cosmetic. Carriers pay for functional; cosmetic is a different conversation.",
      why: "Owners hear 'hail damage' as a single yes/no. Naming the functional-vs-cosmetic distinction and the field test (tactile, exposed mat, pattern) is what makes claim conversations productive instead of adversarial.",
      relatedTermKey: 'Granule Loss',
    },
    {
      topic: 'Documenting a hail inspection report on an asphalt shingle roof',
      poor: 'Hail damage found.',
      better: 'Hail-impact bruising and granule loss on north and west slopes, ~XX impacts per square; consistent with the confirmed Y/Y/YYYY hail event of [size] hail.',
      best: 'Documented hail-impact bruising and granule loss concentrated on north and west slopes. Methodology: 10\' × 10\' test squares on each slope, with documented impact counts per square (photos attached): North = XX bruises/100 sq ft, West = XX bruises/100 sq ft, South = X bruises/100 sq ft, East = X bruises/100 sq ft. Impacts confirmed by tactile depression, fractured granule pattern with mat exposure, and circular spatter pattern. Damage clustering on the windward slopes is consistent with the documented wind direction during the Y/Y/YYYY hail event of ~[Z]" stone (NOAA storm report attached). Shingle age and condition: ~14 years, weathered but otherwise sound. Damage rises to functional level (granule loss with mat exposure across multiple impact sites); recommend full slope replacement per insurance carrier policy language.',
      why: "Hail reports without methodology, slope counts, storm reference, and shingle-condition documentation are deniable. Naming each of these is what makes the report defensible in a coverage dispute.",
      relatedTermKey: 'Granule Loss',
    },
    {
      topic: 'Explaining to a homeowner why their neighbor got paid and they did not',
      poor: 'The carriers are inconsistent.',
      better: 'Hail clustering is directional, age and condition matter, and each roof is evaluated on its own evidence.',
      best: "Two neighboring homes can see different outcomes on the same storm for several reasons. Hail clusters directionally — wind direction during the storm determines which slopes get hit, so adjacent homes with different orientations show different damage. Age and condition matter — a 6-year-old roof bruises at larger stone sizes than a 16-year-old roof. The carrier and adjuster matter — even on identical evidence, different adjusters interpret the same shingle differently. The right move is to document YOUR roof on YOUR evidence — slope-by-slope impact counts, photos, storm direction — rather than to lean on the neighbor's outcome.",
      why: "Comparison claims poison the conversation. Naming the three reasons outcomes legitimately differ — direction, age, adjuster — keeps the focus on the documentable evidence specific to this roof.",
      relatedTermKey: 'Hail Damage Threshold (by Material)',
    },
    {
      topic: 'Field-report language pushing back on a Haag-threshold denial',
      poor: 'The threshold is wrong.',
      better: 'Haag thresholds are reference data for fresh shingles; this roof is 14 years old and bruises at smaller stones than the published number.',
      best: "Adjuster references the Haag-cited ~1.25\" threshold for asphalt shingle damage and denies the claim on a documented 1.0\" hail event. Pushing back: Haag thresholds are reference data calibrated to fresh shingles in good condition. This roof is approximately 14 years old, with weathering documented before the storm (photo log attached). Aged asphalt shingles bruise at smaller stone sizes than fresh ones; that is well-documented in roofing forensic literature. The dispositive test is the on-roof evidence: documented bruising with mat exposure, clustered on the windward slopes, consistent with the storm direction (NOAA report attached). Recommend re-inspection with a forensic inspector who can evaluate the shingles in their actual condition, not against a fresh-shingle threshold.",
      why: "Haag-threshold denials are common and over-reliant on one published number. Naming the threshold's scope (fresh, in good condition), the age-condition adjustment, and the on-roof evidence as the dispositive test is what reopens a closed claim.",
      relatedTermKey: 'Haag Engineering',
    },
  ],
};
