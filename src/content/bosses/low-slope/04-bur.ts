import type { BossBank } from '../types';

// Built-Up Roofing (BUR) boss — asphalt vs coal tar, plies, hot vs cold
// process, hybrid mod-bit cap, and where BUR still wins vs single-ply.

export const lowSlope04: BossBank = {
  bossId: 'low-slope-04',

  round1: [
    {
      prompt: 'What is the defining characteristic of a Built-Up Roof?',
      termKey: 'Built-Up Roof (BUR)',
      choices: [
        'Multi-ply membrane assembled on site from alternating bitumen and reinforcing felts',
        'A single thermoplastic sheet welded at the seams',
        'A factory-prefabricated rubber membrane',
        'A fluid-applied coating',
      ],
    },
    {
      prompt: 'The two types of bitumen used in BUR are:',
      termKey: 'Bitumen',
      choices: [
        'Asphalt and coal tar',
        'SBS and APP',
        'Latex and acrylic',
        'Urethane and silicone',
      ],
    },
    {
      prompt: 'Which bitumen tolerates dead-level slopes and standing water?',
      termKey: 'Coal Tar Pitch',
      choices: ['Coal tar pitch', 'Asphalt bitumen', 'SBS-modified', 'APP-modified'],
    },
    {
      prompt: 'What does the aggregate (gravel) top layer do on a BUR?',
      termKey: 'Aggregate',
      choices: [
        'Shields the bitumen from UV and heat and adds wind and fire resistance',
        'Provides the primary waterproofing layer',
        'Acts as the structural deck',
        'Reflects solar energy for cool-roof compliance',
      ],
    },
    {
      prompt: "A '4-ply asphalt BUR' is named for what?",
      termKey: 'Ply',
      choices: [
        'The four layers of felt within the membrane',
        'Four coats of bitumen applied to the deck',
        'Four years of warranty on the surface',
        'Four inches of insulation underneath',
      ],
    },
    {
      prompt: 'Cold-process roofing is preferred over hot-mopped BUR when:',
      termKey: 'Cold-Process Roofing',
      choices: [
        'Open flame and hot kettles are restricted (occupied buildings, schools, hospitals)',
        'The roof slope exceeds 6:12',
        'The membrane will be a single-ply',
        'The building is in a high-wind zone',
      ],
    },
    {
      prompt: 'A hybrid roof combines what?',
      termKey: 'Hybrid Roof',
      choices: [
        'A modified-bitumen cap sheet over a built-up base and ply sheets',
        'A single-ply membrane over a hot-mopped base',
        'A spray-applied foam under a BUR cap',
        'EPDM with a TPO cap weld',
      ],
    },
  ],

  round2: [
    {
      prompt:
        "A hospital re-roof spec calls for a 4-ply asphalt BUR. The hospital is occupied 24/7 and open flame and bitumen kettles are prohibited on the roof during patient hours.",
      choices: [
        {
          text: 'Switch the spec to a cold-process BUR (cold-applied adhesive between plies) or to a comparable cold-process / self-adhered mod-bit assembly. Hot kettles are incompatible with the occupancy constraint.',
          correct: true,
        },
        {
          text: 'Keep the hot-mopped BUR and schedule installation on nights and weekends only.',
          correct: false,
        },
        {
          text: 'Switch to a torch-applied APP system to avoid the kettle.',
          correct: false,
        },
      ],
      relatedTermKey: 'Cold-Process Roofing',
    },
    {
      prompt:
        'A dead-level commercial roof (effectively no slope) is being re-spec\'d after a long-running ponding problem. The owner cannot raise the deck.',
      choices: [
        {
          text: 'Coal-tar pitch BUR is the historical fit for dead-level — it tolerates standing water in a way asphalt and most single-ply membranes do not. Verify coal-tar availability with a current manufacturer and confirm slope still meets code; if not, tapered insulation may also be needed.',
          correct: true,
        },
        {
          text: 'Install asphalt BUR — it is the same product with different bitumen.',
          correct: false,
        },
        {
          text: 'A standard TPO will be fine; manufacturers no longer exclude ponding.',
          correct: false,
        },
      ],
      relatedTermKey: 'Coal Tar Pitch',
    },
    {
      prompt:
        'On a tear-off of a 22-year-old 4-ply asphalt BUR, the bottom two plies are intact but the top two are crazed and brittle. The owner wonders why the bottom plies survived.',
      choices: [
        {
          text: 'Multi-ply redundancy. The upper plies took the UV, heat, and weather load; the lower plies, shielded from UV, are still in serviceable condition. This is the design intent of BUR — the cap is sacrificial to the layers below.',
          correct: true,
        },
        {
          text: 'The bottom plies are a different material and are inherently stronger.',
          correct: false,
        },
        {
          text: 'The roof was secretly two roofs stacked.',
          correct: false,
        },
      ],
      relatedTermKey: 'Built-Up Roof (BUR)',
    },
  ],

  round3: [
    {
      topic: 'Explaining BUR redundancy to an owner who has only seen single-ply roofs',
      poor: 'BUR has more layers, so it is stronger.',
      better: 'BUR is multi-ply — if the top layer is damaged, the layers below are still water-shedding.',
      best: "A built-up roof is multiple layers of bitumen and reinforcing felt laminated together — typically three to five plies plus an aggregate or cap-sheet surfacing. The top ply takes the weather load; if it is bruised, cracked, or punctured, the plies underneath are still water-resistant. The trade-off is weight, more labor, and the bitumen-application question (hot, cold, or hybrid) for each ply.",
      why: "Owners who only know single-ply hear 'more plies = more cost.' Naming redundancy as a defined performance characteristic — and then naming the application-method trade-off — reframes the conversation away from price-per-square.",
      relatedTermKey: 'Built-Up Roof (BUR)',
    },
    {
      topic: 'Documenting a 4-ply asphalt BUR assembly for record',
      poor: '4-ply BUR.',
      better: '4-ply asphalt BUR, glass-felt reinforcement, gravel surfacing, over polyiso insulation.',
      best: '4-ply Type IV asphalt BUR with glass-felt reinforcement, hot-mopped at the manufacturer-specified equiviscous-temperature window, surfaced with #6 ballast aggregate. Installed over Type II polyiso insulation (R-30 nominal) on a 1.5″ Type B steel deck. Tapered fill provides positive drainage to interior drains. Verify current bitumen-temperature window with manufacturer before next maintenance.',
      why: 'A BUR record that names the ply count, felt type, bitumen heating window, surfacing, insulation, deck, and drainage path is what lets the next inspector or specifier work intelligently against it.',
      relatedTermKey: 'Built-Up Roof (BUR)',
    },
    {
      topic: 'Explaining why coal-tar pitch tolerates dead-level slope',
      poor: 'Coal tar likes water.',
      better: 'Coal tar is self-healing under standing water; asphalt is not.',
      best: 'Coal tar pitch is partially self-healing at typical roof temperatures — under standing water it slowly flows back together at micro-fractures, where asphalt embrittles and cracks. That is why coal-tar BURs are the historical fit for dead-level industrial roofs that cannot be re-sloped, and why an asphalt BUR in the same condition will fail much sooner. Coal-tar fumes are an occupied-building constraint to plan around.',
      why: 'Owners often ask why one bitumen is fine on a flat roof and the other is not. The accurate explanation names the property (self-healing) and the trade-off (fumes during install) in one sentence.',
      relatedTermKey: 'Coal Tar Pitch',
    },
    {
      topic: 'Field-report language after a wind event that displaced BUR aggregate',
      poor: 'Some gravel blew off.',
      better: 'Aggregate displacement on the north-side BUR, exposing bitumen in roughly a 20×40 ft area. Owner advised.',
      best: 'Documented aggregate displacement on the north-side BUR field, exposing the top-ply bitumen across approximately 800 sq ft (photos attached). Roof is a 4-ply asphalt BUR, ~14 years in service. Exposed bitumen is at risk of accelerated UV degradation; recommend ballast replacement to a depth of one stone diameter, or transition to a cap-sheet surfacing. Note: aggregate displacement is typically treated as wind/storm damage, not a manufacturer-warranty defect.',
      why: 'BUR aggregate-loss reports are commonly under-documented. Naming the exposed area, the UV-exposure consequence, and the correct claim path (storm vs warranty) saves a second site visit and clarifies who pays for the fix.',
      relatedTermKey: 'Aggregate',
    },
  ],
};
