import type { BossBank } from '../types';

// Wind on Shingles boss — sealant strip bonding, wind ratings
// (110/130 mph with nailing pattern), unsealed tabs, raised tabs,
// the workmanship-vs-storm distinction.

export const shingles07: BossBank = {
  bossId: 'shingles-07',

  round1: [
    {
      prompt: 'A shingle resists wind uplift primarily through:',
      termKey: 'Starter Shingle',
      choices: [
        'The factory sealant strip bonding to the course below as the roof warms',
        'The nail-only attachment to the deck',
        'Friction from the granular surface',
        'The shingle\'s own weight',
      ],
    },
    {
      prompt: 'A common manufacturer wind rating for an architectural shingle is:',
      termKey: 'Architectural Shingle',
      choices: [
        '110 to 130 mph (sometimes 150 mph with enhanced nailing pattern)',
        '40 to 60 mph',
        '300+ mph',
        'Shingles do not carry wind ratings',
      ],
    },
    {
      prompt: 'A higher wind rating on the same shingle product usually requires:',
      termKey: 'Architectural Shingle',
      choices: [
        'A 6-nail (enhanced) nailing pattern instead of 4-nail',
        'A thicker underlayment',
        'A separate primer coat',
        'Additional sealant beads in the field',
      ],
    },
    {
      prompt: 'A new shingle roof installed in October may not survive its first November windstorm because:',
      termKey: 'Starter Shingle',
      choices: [
        'The sealant strip is thermal-sensitive and may not have warmed enough to bond before the wind event',
        'Asphalt is cold-brittle in November',
        'Underlayment freezes in winter',
        'Code requires summer-only installation',
      ],
    },
    {
      prompt: 'A "raised tab" or "creased tab" pattern across an entire slope, with no localized blow-off, usually indicates:',
      termKey: 'Starter Shingle',
      choices: [
        'Unsealed tabs from installation or cold-weather install — workmanship pattern, not a single wind event',
        'A single severe wind gust',
        'Manufacturer defect in every shingle',
        'Hail impact',
      ],
    },
    {
      prompt: 'Wind blow-off pattern that is concentrated on one slope and at the perimeter usually indicates:',
      termKey: 'Wind Uplift',
      choices: [
        'A storm-event wind hitting that slope from the prevailing direction',
        'A workmanship defect',
        'An ice-dam-related failure',
        'A manufacturing defect',
      ],
    },
    {
      prompt: 'The standard shingle wind-rating test methods are:',
      termKey: 'Asphalt Shingle',
      choices: [
        'ASTM D3161 (older) and ASTM D7158 (current)',
        'UL 2218 (which is the hail test)',
        'ASTM E84 (which is the flame-spread test)',
        'ANSI/SPRI ES-1 (which is metal edge)',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner reports the first course of shingles blew off in a 45 mph wind gust, 4 months after a re-roof. The contractor argues the wind exceeded the shingle\'s rating.',
      choices: [
        {
          text: '45 mph is well below standard shingle ratings (110+ mph for architectural). The likely cause is the first course not bonding — either no starter strip used, cut field shingles substituted for starter, or installation in cold weather where the sealant never activated. Document the install method (interview, deck inspection) and route as a workmanship claim rather than weather event.',
          correct: true,
        },
        {
          text: 'Accept the contractor\'s wind-exceeded-rating argument.',
          correct: false,
        },
        {
          text: 'File a manufacturer warranty claim for shingle defect.',
          correct: false,
        },
      ],
      relatedTermKey: 'Starter Shingle',
    },
    {
      prompt:
        'An adjuster denies a wind claim because the shingles are "creased" but not blown off. The crease pattern is visible on the entire windward slope.',
      choices: [
        {
          text: 'Creased shingles are functional damage — the crease breaks the mat and creates a future water-entry point even though the shingle is still on the roof. Document each creased tab with photos, count per square, and the directional clustering on the windward slope. Functional crease damage on a windward slope after a storm IS a wind claim, not a cosmetic finding.',
          correct: true,
        },
        {
          text: 'Concede the cosmetic argument and accept the denial.',
          correct: false,
        },
        {
          text: 'Argue creases are unrelated to wind.',
          correct: false,
        },
      ],
      relatedTermKey: 'Wind Uplift',
    },
    {
      prompt:
        'A re-roof contract specifies a 130 mph wind-rated shingle. The contractor installs with a 4-nail pattern across the field.',
      choices: [
        {
          text: "Check the manufacturer's specific spec. Many architectural shingles require a 6-nail (enhanced) pattern to achieve their highest published wind rating; a 4-nail install on the same product may drop the rating to ~110 mph. Document the nailing pattern in writing, photograph nail placement, and confirm with the manufacturer before close-out — this affects the warranty AND any future wind claim.",
          correct: true,
        },
        {
          text: '4-nail is fine; nailing pattern is a personal-preference choice.',
          correct: false,
        },
        {
          text: 'Add caulk to compensate for fewer nails.',
          correct: false,
        },
      ],
      relatedTermKey: 'Architectural Shingle',
    },
  ],

  round3: [
    {
      topic: 'Explaining the sealant strip dependence to a homeowner whose new shingles blew off',
      poor: 'The wind blew them off.',
      better: 'Shingles resist wind via a factory sealant strip that bonds the course above; if it never sealed, they lift in moderate wind.',
      best: "Each architectural shingle has a factory-applied sealant strip on its underside that bonds to the course below as the roof warms (typically 70°F+ for several days of sun). That bond is what gives the shingle its 110+ mph wind rating; without it, the shingle is just nailed to the deck and lifts at 30-40 mph. If the install happened in cold weather, OR if the starter strip was substituted with cut field shingles (which don't present a sealant strip at the right vertical position), OR if rain hit the roof before the sealant activated, the bond never forms. The shingles blowing off at a routine wind gust is the failure mode of that missed bond, not the failure mode of the product.",
      why: "Wind blow-off on a new roof is the most common 'no-fault storm' framing. Naming the sealant-strip mechanism, the activation temperature, and the three install-time failure modes shifts the conversation toward documentable workmanship.",
      relatedTermKey: 'Starter Shingle',
    },
    {
      topic: 'Documenting the nailing pattern on a re-roof for future wind-claim defensibility',
      poor: 'Shingles nailed per manufacturer spec.',
      better: 'Architectural shingles installed with 6-nail enhanced pattern per manufacturer 130 mph wind warranty requirement.',
      best: "[Brand] architectural shingles installed with the manufacturer's 6-nail enhanced nailing pattern, fasteners placed in the manufacturer-designated nail zone, to achieve the published 130 mph (ASTM D7158 Class H) wind warranty for this product. Photos taken during install documenting nail placement on representative courses across the roof (project file). Starter shingles at all eaves and rakes are the manufacturer-matched product, not cut field shingles. Hip-and-ridge cap is manufacturer-matched. Verify warranty registration includes the enhanced nailing pattern.",
      why: 'Nailing pattern is the line most often subject to "as inspected, looks fine" hand-waving. Naming the specific pattern, the rating it unlocks, and the documented photo evidence is what survives a wind-claim dispute later.',
      relatedTermKey: 'Architectural Shingle',
    },
    {
      topic: 'Distinguishing workmanship-pattern blow-off from storm-event blow-off',
      poor: 'It was either workmanship or wind.',
      better: 'Workmanship blow-off is uniform and unsealed; storm blow-off is directional and clustered on the windward slope.',
      best: "Two distinct fingerprints. Workmanship blow-off looks like creased or raised tabs across multiple slopes, often the entire roof, with no directional preference — caused by the sealant strip never activating (cold install, substituted starter, rain before bond). Storm blow-off looks like clean tear-away or missing shingles clustered on the slope that faced the storm wind, with intact shingles on the leeward slopes and a documentable date of damage. The same homeowner can have both — but they have different counter-parties (installer vs carrier), and conflating them gets both claims denied. Photograph each pattern, name what you see, and route to the right paths.",
      why: "Mixed-cause shingle failures are routine. Naming the two distinct fingerprints and the two distinct claim paths is what gets each one paid by the right counter-party.",
      relatedTermKey: 'Wind Uplift',
    },
    {
      topic: 'Field-report language for unsealed tabs traced to a cold-weather install',
      poor: 'Shingles never sealed.',
      better: 'Unsealed-tab pattern across all slopes consistent with installation in below-bond-activation temperatures; not a storm event.',
      best: "Documented creased and raised-tab pattern across all four slopes, count per square attached for each slope (north XX, south XX, east XX, west XX — roughly uniform distribution, not directional). No localized blow-off cluster on a windward slope. Roof was re-shingled [date] during an extended cold-weather period (NOAA temperature record for the install dates attached, showing daytime highs well below the manufacturer's sealant-strip activation range of ~70°F). Pattern is consistent with the sealant strip never activating, leaving the field with nail-only attachment, which fails at routine winter wind gusts. Damage is a workmanship/installation-condition defect, not a storm-event wind claim. Route to the original installer for warranty remediation or replacement; the manufacturer warranty typically excludes installation in conditions outside their published temperature window.",
      why: "Cold-install unsealed-tab claims are routinely filed as wind claims and denied. Naming the uniform-vs-directional pattern, the install-date temperature record, the sealant-activation range, and the correct claim path (installer, not carrier) is what gets the homeowner paid.",
      relatedTermKey: 'Starter Shingle',
    },
  ],
};
