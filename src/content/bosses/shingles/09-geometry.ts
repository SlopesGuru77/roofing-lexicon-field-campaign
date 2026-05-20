import type { BossBank } from '../types';

// Roof Geometry boss — slope/pitch terminology, hip vs gable, valleys
// as drainage paths, dormers, complex-geometry failure points.

export const shingles09: BossBank = {
  bossId: 'shingles-09',

  round1: [
    {
      prompt: 'Roof slope is conventionally written as:',
      termKey: 'Roof Slope (Pitch)',
      choices: [
        'Vertical rise per twelve inches of horizontal run (e.g., 4:12)',
        'Vertical rise per linear foot of ridge',
        'Total roof area divided by footprint area',
        'A degrees-from-horizontal measurement',
      ],
    },
    {
      prompt: 'A roof at or below 3:12 slope is classified as:',
      termKey: 'Low-Slope Roof',
      choices: [
        'Low-slope, generally requiring a membrane system rather than shingles',
        'A "steep-slope" roof',
        'A "dead-level" roof',
        'A residential metal-only roof',
      ],
    },
    {
      prompt: 'A hip roof differs from a gable roof primarily in that:',
      termKey: 'Asphalt Shingle',
      choices: [
        'All sides of the roof slope down toward the walls (no flat gable ends)',
        'It has only one ridge',
        'It cannot have valleys',
        'It is always installed without underlayment',
      ],
    },
    {
      prompt: 'A valley collects drainage from how many slopes?',
      termKey: 'Open Valley',
      choices: ['Two intersecting slopes', 'One slope only', 'Three intersecting slopes', 'Four intersecting slopes'],
    },
    {
      prompt: 'Asphalt shingles are generally limited to roofs with what minimum slope?',
      termKey: 'Roof Slope (Pitch)',
      choices: [
        'Approximately 2:12 (with enhanced underlayment) or 4:12 standard',
        'Any slope including dead-level',
        '6:12 minimum',
        '12:12 minimum',
      ],
    },
    {
      prompt: 'A dormer adds which complications to a roof system?',
      termKey: 'Flashing',
      choices: [
        'Additional roof-to-wall flashings, additional valleys, and additional penetration details',
        'No complications — dormers are flashing-neutral',
        'Only an aesthetic change with no waterproofing impact',
        'A simpler drainage path',
      ],
    },
    {
      prompt: 'A "complex roof" (multiple hips, valleys, dormers) costs more to roof primarily because:',
      termKey: 'Flashing',
      choices: [
        'More cuts, more flashings, and more details — labor scales with the number of intersections, not just the area',
        'Shingles cost more on complex geometry',
        'Codes require higher-grade materials on complex roofs',
        'Insurance premiums are higher',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner is comparing two re-roof bids on a complex hip-and-valley roof with three dormers. Bid A is significantly cheaper than Bid B. The cheap bid is from a contractor whose portfolio is mostly simple gable roofs.',
      choices: [
        {
          text: 'Investigate the cheap bid. Complex geometry roofs charge correctly for the cuts, flashings, and detail work; an outlier-cheap bid on this geometry usually means the contractor priced the field area without scoping the intersection details, OR plans to substitute simpler valley/flashing details. Get itemized scopes from both, compare flashing-line counts (drip edge LF, step flashing pieces, kick-out count, valley LF), and decide on comparable scopes — not on the bottom line.',
          correct: true,
        },
        {
          text: 'Take the cheap bid; lowest price always wins.',
          correct: false,
        },
        {
          text: 'Reject both and self-perform the work.',
          correct: false,
        },
      ],
      relatedTermKey: 'Flashing',
    },
    {
      prompt:
        'A 2.5:12 slope roof shows recurring leaks under the existing 3-tab shingles. The homeowner asks if re-shingling with architectural product will solve the problem.',
      choices: [
        {
          text: '2.5:12 is below the standard shingle minimum (typically 4:12 without special detailing, 2:12 absolute minimum with enhanced double-underlayment). The recurring leaks are a slope-vs-material mismatch, not a shingle-product issue. The right conversations are (1) switching to a low-slope membrane system, or (2) re-shingling with enhanced underlayment per the manufacturer\'s low-slope detail and accepting the shorter service life.',
          correct: true,
        },
        {
          text: 'Re-shingling with architectural product fixes any slope problem.',
          correct: false,
        },
        {
          text: 'The leaks are unrelated to slope.',
          correct: false,
        },
      ],
      relatedTermKey: 'Low-Slope Roof',
    },
    {
      prompt:
        'A homeowner with a dormer reports leaks above the dormer-roof-to-main-roof intersection. The contractor proposes "adding more sealant" along the seam.',
      choices: [
        {
          text: 'Push back. The likely root cause is missing or improperly installed flashings at the intersection — typically step flashing on the dormer cheek wall, counterflashing/sidewall detail, and a saddle/cricket if the main roof slope is significant. Sealant on the surface is masking the underlying detail problem. Open the area, document the flashing condition, and route as a proper flashing rebuild.',
          correct: true,
        },
        {
          text: 'Add the sealant; surface sealant is the standard fix.',
          correct: false,
        },
        {
          text: 'Remove the dormer entirely.',
          correct: false,
        },
      ],
      relatedTermKey: 'Step Flashing',
    },
  ],

  round3: [
    {
      topic: 'Explaining slope terminology to a homeowner reading their first re-roof bid',
      poor: 'It is a 4:12 roof.',
      better: 'Roof slope is rise over run — a 4:12 means 4 inches of vertical rise for every 12 inches of horizontal run.',
      best: "Roof slope is written as rise:run — the number of inches of vertical rise per 12 inches of horizontal distance. A 4:12 slope is moderate (typical for tract housing); 6:12 is a steeper visible pitch (typical for two-story homes and some architectural styles); 12:12 is a 45-degree roof. Below 3:12 the roof is classified as low-slope and typically requires a membrane system, not shingles. The slope on your specific roof affects which products are eligible, what underlayment is required, and (sometimes) what the manufacturer warranty terms look like — so the bid should always name the slope.",
      why: "Owners look at a re-roof bid and see numbers without anchoring. Naming the slope notation, the regime breakpoints (3:12, 4:12, 6:12), and the consequence (eligible products, underlayment, warranty) lets them read the bid.",
      relatedTermKey: 'Roof Slope (Pitch)',
    },
    {
      topic: 'Documenting roof geometry on a re-roof submittal',
      poor: 'Complex roof, 25 squares.',
      better: 'Roof: 25 squares total, mix of hip and gable, two valleys, three dormers, 6:12 main slope.',
      best: "Roof geometry: total field area approximately 25 squares (2,500 sq ft). Main slope 6:12 architectural laminated shingle eligible (manufacturer standard detail). Geometry breakdown: hip-and-valley primary roof with one 28' continuous ridge, two open valleys (one high-flow at the front gable intersection, one moderate at the rear), three dormers (front-elevation gable dormers requiring step + counter flashing detail on cheek walls), one chimney requiring saddle/cricket on the up-slope side. Flashing counts itemized in attached estimate (drip edge LF, valley LF, step flashing pieces, kick-out count, pipe boots).",
      why: 'Roof-area-only quotes invite scope disputes in the field. Naming the slope, the geometry breakdown, AND the flashing line-item counts makes the scope verifiable.',
      relatedTermKey: 'Asphalt Shingle',
    },
    {
      topic: 'Explaining why valleys are the highest-stakes detail on a steep-slope roof',
      poor: 'Valleys can leak.',
      better: 'Valleys carry the runoff from two slopes; if the flashing or shingle detail is wrong, the concentrated flow finds its way through.',
      best: "A valley is where two roof slopes meet, and it is the only place on a steep-slope roof where the water from two slopes converges into one flow path. That concentrated flow makes valleys the highest-stakes flashing detail — they carry more water than any other point on the roof, often during the highest-intensity moments of a storm. Three valley styles each handle this differently: open valley exposes a metal centerline that takes the flow directly; closed-cut runs one slope's shingles through and seams the other along the centerline; woven interlaces shingles from both slopes (mostly obsolete on architectural products). Choose the style by flow volume — high-flow valleys go open, moderate-flow can go closed-cut — and document the choice with the bid.",
      why: "Valley failures are common and often surprise homeowners. Naming the flow-concentration mechanism, the three style trade-offs, and the flow-volume decision rule makes the valley-style line on the bid mean something.",
      relatedTermKey: 'Open Valley',
    },
    {
      topic: 'Field-report language for dormer-intersection leak',
      poor: 'Dormer is leaking.',
      better: 'Leak at front-elevation dormer-to-main-roof intersection; flashing detail at the cheek wall is failing.',
      best: 'Documented leak at the front-elevation dormer intersection, ceiling staining in the [room] below the dormer (photos attached). Removed two shingle courses on the dormer cheek wall. Found step flashing pieces undersized for the shingle course exposure, with no counter-flashing installed at the wall cladding interface — the original detail is missing the up-the-wall lap that prevents water entry at the seam. Pattern is workmanship-defect-driven, not a storm event. Recommend full flashing rebuild on both cheek walls: new step flashing (one piece per course), new counter-flashing under the cladding or kerfed into the cheek-wall siding, new kick-out flashing at the lower corner if absent. Route as workmanship claim against the [original installer] if within their warranty period; otherwise document as a deferred-detail repair.',
      why: 'Dormer leaks are often attributed to "the dormer" generically. Naming the specific flashing element that failed, the missing counter-flashing detail, and the workmanship-vs-storm attribution makes the report actionable as a work order AND as a warranty claim.',
      relatedTermKey: 'Step Flashing',
    },
  ],
};
