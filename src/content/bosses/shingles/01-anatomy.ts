import type { BossBank } from '../types';

// Asphalt Shingle Anatomy boss — 3-tab vs architectural/laminated,
// fiberglass mat, sealant strip, starter, hip-and-ridge.

export const shingles01: BossBank = {
  bossId: 'shingles-01',

  round1: [
    {
      prompt: 'A modern asphalt shingle is built around what reinforcing layer?',
      termKey: 'Asphalt Shingle',
      choices: [
        'A fiberglass mat saturated with asphalt',
        'A woven organic felt',
        'A polyester scrim',
        'A polyurethane core',
      ],
    },
    {
      prompt: 'A "three-tab" shingle is distinguished by:',
      termKey: 'Three-Tab Shingle',
      choices: [
        'A single-layer asphalt shingle with three cutouts that read as three tabs across the face',
        'A laminated shingle built up from three layers',
        'Three different colored layers stacked together',
        'Three sealant strips bonding each course',
      ],
    },
    {
      prompt: 'An "architectural" or "laminated" shingle differs from a 3-tab in that it:',
      termKey: 'Architectural Shingle',
      choices: [
        'Is built up from two or more layers for a dimensional look and longer service life',
        'Is thinner than a 3-tab but covers more area',
        'Has no sealant strip',
        'Is made of metal',
      ],
    },
    {
      prompt: 'What is the role of the granules on a shingle face?',
      termKey: 'Granules',
      choices: [
        'Shield the asphalt from UV and add color and fire resistance',
        'Provide the primary waterproofing layer',
        'Act as the impact-resistance layer',
        'Hold the shingle to the deck',
      ],
    },
    {
      prompt: 'A starter shingle is installed where?',
      termKey: 'Starter Shingle',
      choices: [
        'At the eaves and rakes before the first course',
        'At the ridge cap',
        'In the valley',
        'Around penetrations',
      ],
    },
    {
      prompt: "What does the starter shingle's sealant strip do?",
      termKey: 'Starter Shingle',
      choices: [
        'Provides the bond that resists wind uplift at the first course',
        'Caulks the deck before sheathing',
        'Glues underlayment to the deck',
        'Marks the chalk line for the first course',
      ],
    },
    {
      prompt: 'Hip and ridge cap shingles are installed where?',
      termKey: 'Hip and Ridge Cap',
      choices: [
        'Along hips and ridges, covering the joint where two slopes meet',
        'At the eaves only',
        'Across the entire field as a top course',
        'At valleys to direct water',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'An insurance estimator quotes 3-tab shingles on a re-roof of a home that was originally built with architectural shingles. The homeowner asks if it matters.',
      choices: [
        {
          text: "Yes — material 'like kind and quality' matters for both aesthetics and policy compliance. 3-tab has a shorter service life and a less dimensional appearance than architectural, and many policies require like-kind-and-quality replacement. Push back on the estimate and document the original product class.",
          correct: true,
        },
        {
          text: 'A shingle is a shingle; the carrier sets the standard.',
          correct: false,
        },
        {
          text: 'Always quote 3-tab to keep the estimate within deductible.',
          correct: false,
        },
      ],
      relatedTermKey: 'Architectural Shingle',
    },
    {
      prompt:
        'A contractor reinstalls re-roof shingles WITHOUT a starter strip — using cut field shingles at the eave instead. The job passes initial inspection. Six months later, the first row blows off in a moderate wind event.',
      choices: [
        {
          text: 'Failure traceable to the missing purpose-built starter strip. Cut field shingles do not present a sealant strip at the correct vertical position to bond the first course; the missing bond is the failure mode. Document the install, photograph the failure pattern, and route the conversation as a workmanship defect rather than a wind claim.',
          correct: true,
        },
        {
          text: 'Wind is wind — file a storm claim and move on.',
          correct: false,
        },
        {
          text: "Cut field shingles are always equivalent to starter strips; the failure is unrelated.",
          correct: false,
        },
      ],
      relatedTermKey: 'Starter Shingle',
    },
    {
      prompt:
        'A homeowner reports that the asphalt shingles on a 14-year-old roof are noticeably darker in patches. The roofer claims it is "just dirty." The owner asks for a second opinion.',
      choices: [
        {
          text: 'Likely the granules have weathered or washed off in the dark patches, exposing the asphalt mat below. Localized exposure is a functional-aging indicator, not just dirt — confirm by close-up photo and tactile inspection. Distinguish weathering from impact-related granule loss before drawing claim conclusions.',
          correct: true,
        },
        {
          text: 'Pressure-wash the roof and the spots will be gone.',
          correct: false,
        },
        {
          text: 'Dark patches always indicate a roof failure requiring replacement.',
          correct: false,
        },
      ],
      relatedTermKey: 'Granules',
    },
  ],

  round3: [
    {
      topic: 'Explaining the 3-tab vs architectural shingle decision to a homeowner',
      poor: 'Architectural shingles are better.',
      better: 'Architectural shingles are laminated and last longer than 3-tab; they also look dimensional vs flat.',
      best: "Three-tab shingles are a single layer cut into three exposed tabs — the entry-level asphalt shingle, with the shortest service life and a flat appearance. Architectural (laminated) shingles are built up from two or more layers, give a dimensional appearance, carry higher wind and weathering warranties, and are now the dominant product in most U.S. markets. The cost gap is real (15–25% more), but on a 25-year-life decision the architectural shingle usually wins on cost-per-year and on resale appearance.",
      why: "Owners hear the names and don't know what is under them. Naming the structural difference (single layer vs laminated), the appearance, the warranty class, and the cost-per-year reframes a price question as a lifecycle question.",
      relatedTermKey: 'Architectural Shingle',
    },
    {
      topic: 'Documenting a shingle specification on a re-roof contract',
      poor: 'New architectural shingles.',
      better: 'Architectural laminated asphalt shingles, [brand], [color], standard limited lifetime warranty, installed per manufacturer instructions.',
      best: "[Brand] architectural laminated asphalt shingles, fiberglass mat, [series and color, e.g., Timberline HDZ or Duration Premium], rated for [wind rating, e.g., 130 mph with 6-nail installation], installed per current manufacturer instructions, with manufacturer-matched starter strip at eaves and rakes and matched hip-and-ridge cap. Standard manufacturer limited lifetime warranty registered to property owner. Confirm current product line, wind rating, and color availability with supplier before order.",
      why: "Vague shingle specs become substitution disputes mid-job. Naming the brand, the product line, the color, the wind rating, the starter and ridge cap as matched products, and the warranty registration step is what makes the spec verifiable on delivery.",
      relatedTermKey: 'Asphalt Shingle',
    },
    {
      topic: 'Explaining the sealant strip and why it matters on a windy day',
      poor: 'There is a glue strip that holds the shingles down.',
      better: 'Each shingle has a factory sealant strip that bonds it to the course below when the roof warms up.',
      best: "Each architectural shingle has a factory-applied thermal-sensitive sealant strip on its underside that bonds to the course below as the roof warms (typically 70°F+ within the first few days of sun). That bond is what resists wind uplift; without it, the shingles flap and seam-tear. The first course relies on the starter strip's sealant; if the starter was substituted with cut field shingles, the first course never gets a proper bond and lifts in the first moderate wind event.",
      why: "Wind failures on new roofs are routinely written off as 'high wind'  when the actual failure was unsealed tabs. Naming the sealant strip, the temperature it activates at, and the starter-strip dependency makes a wind claim a workmanship-vs-storm conversation rather than a generic wind one.",
      relatedTermKey: 'Starter Shingle',
    },
    {
      topic: 'Field-report language for granule loss on an older roof',
      poor: 'Lots of granule loss.',
      better: 'Generalized granule thinning consistent with weathering on a 16-year-old roof; isolated bare-mat exposure noted at south slope.',
      best: "Documented generalized granule thinning across all slopes, consistent with weathering on a 16-year-old laminated shingle roof. Localized areas of bare mat exposure (roughly silver-dollar size, photographed and counted) concentrated on the south and west slopes, consistent with UV exposure pattern. No circular bruising or fractured-granule clusters indicating hail impact were observed. Granule thinning is age/UV, not storm; cumulative bare-mat exposure is the trigger for the homeowner's reserve-replacement budget conversation.",
      why: 'Granule loss is a claim battleground. Naming the pattern (uniform vs localized vs impact-clustered), the consistent root cause (UV/age vs hail), and the budget consequence keeps the claim discussion factual rather than rhetorical.',
      relatedTermKey: 'Granule Loss',
    },
  ],
};
