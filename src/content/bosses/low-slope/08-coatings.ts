import type { BossBank } from '../types';

// Coatings & Restoration boss — acrylic, silicone, urethane, when to
// coat vs recover vs full replace, ponding tolerance, recoatability.

export const lowSlope08: BossBank = {
  bossId: 'low-slope-08',

  round1: [
    {
      prompt: 'A roof coating is best described as:',
      termKey: 'Roof Coating',
      choices: [
        'A fluid-applied layer that renews and protects an existing roof surface',
        'A factory-prefabricated membrane shipped in rolls',
        'A polymer-modified bitumen sheet',
        'A self-adhered underlayment',
      ],
    },
    {
      prompt: 'Which coating is known for the strongest resistance to ponding water and UV?',
      termKey: 'Silicone Coating',
      choices: ['Silicone', 'Acrylic', 'Urethane', 'Asphaltic'],
    },
    {
      prompt: 'Which coating is the most affordable of the common chemistries but degrades under chronic ponding?',
      termKey: 'Acrylic Coating',
      choices: ['Acrylic', 'Silicone', 'Urethane', 'Coal-tar'],
    },
    {
      prompt: 'Urethane coatings are commonly used as:',
      termKey: 'Urethane Coating',
      choices: [
        'A base coat under silicone, or a stand-alone where heavy foot traffic is expected',
        'A standalone cap over BUR only',
        'A primer before painting metal panels',
        'A separator between EPS and PVC',
      ],
    },
    {
      prompt: 'A "recover" in roofing means:',
      termKey: 'Recover',
      choices: [
        'Installing a new roof system directly over the existing one',
        'Cleaning and re-sealing the original membrane',
        'Filing an insurance recovery claim',
        'Replacing the deck only',
      ],
    },
    {
      prompt: 'Most U.S. building codes cap how many roof layers a structure can carry?',
      termKey: 'Recover',
      choices: ['Two', 'One', 'Three', 'Unlimited'],
    },
    {
      prompt: 'A silicone-coated roof later requires recoating. Which option is generally compatible?',
      termKey: 'Silicone Coating',
      choices: [
        'Another silicone coat — silicone is typically only recoatable with silicone',
        'Acrylic over silicone',
        'Asphaltic over silicone',
        'Urethane over silicone with no primer',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A 15-year-old TPO roof in Texas has minor surface chalking, no leaks, drains well, and the owner has a tight capex budget. The maintenance contractor proposes a coating restoration rather than a full re-roof.',
      choices: [
        {
          text: 'Coating restoration can be the right call here: positive drainage, no leaks, modest aging. Specify a CRRC-listed reflective acrylic or silicone over a manufacturer-approved primer, document the chosen system\'s expected service-life extension, and confirm that the existing TPO will accept the chosen coating chemistry. Discuss recoatability constraints with the owner before locking in silicone.',
          correct: true,
        },
        {
          text: 'Skip the coating; if there are no leaks, do nothing until the roof actually fails.',
          correct: false,
        },
        {
          text: 'Always full re-roof at 15 years regardless of condition.',
          correct: false,
        },
      ],
      relatedTermKey: 'Roof Coating',
    },
    {
      prompt:
        'A property already has two roof layers in place: an original BUR with a mod-bit recover from 12 years ago. Current mod-bit cap is failing at multiple seams. Owner asks for a third recover to save tear-off cost.',
      choices: [
        {
          text: 'A third recover is typically not allowed by code (two-layer cap is standard in most jurisdictions). The path is full tear-off to the deck and a new assembly. Verify the local code interpretation in writing, then scope the tear-off cost honestly so the owner can plan capex.',
          correct: true,
        },
        {
          text: 'Recover again — codes do not actually limit roof layers.',
          correct: false,
        },
        {
          text: 'Cover with a fluid-applied coating to avoid the code layer count.',
          correct: false,
        },
      ],
      relatedTermKey: 'Recover',
    },
    {
      prompt:
        'A coating manufacturer\'s rep recommends an acrylic restoration on a low-slope EPDM roof with chronic ponding water across roughly 25% of the field.',
      choices: [
        {
          text: 'Push back on acrylic over ponding. Acrylics degrade under chronic standing water; silicone is the chemistry written for ponding tolerance, OR (better) correct the slope first via tapered insulation or supplemental drainage, then coat with the right chemistry over a roof that drains.',
          correct: true,
        },
        {
          text: 'Acrylic is fine; the rep would not recommend it if it would fail.',
          correct: false,
        },
        {
          text: 'Use any coating; the ponding will dry up after coating.',
          correct: false,
        },
      ],
      relatedTermKey: 'Acrylic Coating',
    },
  ],

  round3: [
    {
      topic: 'Explaining the coating-vs-recover-vs-replace decision to an owner',
      poor: 'Just coat it — it is cheaper.',
      better: 'Coating extends life if the roof is mostly sound; recover or replace if the assembly is wet or wrong.',
      best: "Three paths: (1) Restorative coating — extends life 8–15 years if the existing roof is mostly sound, drains, and accepts the chosen chemistry. Cheapest. (2) Recover — install a new roof over the existing, allowed once in most codes. Middle cost. (3) Full tear-off and replace — required if the existing roof is wet, the deck is questionable, or two layers already exist. Most expensive but resets the warranty clock. The right path depends on assembly condition, code, and how long the owner needs the roof to last — not on cost alone.",
      why: 'Owners default to the cheapest option without seeing the constraints. Naming all three paths, their cost order, AND the conditions that disqualify each makes the decision honest.',
      relatedTermKey: 'Roof Coating',
    },
    {
      topic: 'Documenting a coating restoration spec',
      poor: 'Acrylic coating over the existing TPO.',
      better: 'Two-coat reflective acrylic restoration over the existing 60-mil TPO, manufacturer-approved primer, total dry mil thickness per manufacturer spec.',
      best: "Manufacturer-approved two-coat reflective acrylic restoration system over existing 60-mil TPO. Surface preparation: pressure-wash to remove chalk and biological growth, repair seams and penetrations per manufacturer detail, prime per manufacturer specification. Apply base coat at X gallons per square, then top coat at Y gallons per square, achieving a total dry mil thickness per manufacturer published spec. CRRC-listed reflectance values documented in project record. Coating system carries the manufacturer's restoration warranty (not the original TPO NDL); confirm warranty terms before quoting.",
      why: 'Coating warranties are separate documents from the original membrane warranty. Naming the prep, the mil thickness, the CRRC listing, and the new (separate) warranty source prevents the misunderstanding that a coating extends the original NDL.',
      relatedTermKey: 'Roof Coating',
    },
    {
      topic: 'Explaining why silicone might NOT be the right choice for a roof the owner plans to recoat',
      poor: 'Silicone is the best coating.',
      better: 'Silicone is hard to recoat with anything other than more silicone, which locks you in.',
      best: "Silicone is the strongest coating for ponding and UV tolerance, but it has a recoatability quirk: silicone is typically only recoatable with silicone — acrylic, urethane, and asphaltic systems will not adhere reliably to a weathered silicone surface. If the owner anticipates multiple recoat cycles over 20+ years, that ties the future to a single chemistry and a single vendor relationship. For roofs that drain well, acrylic gives more future flexibility at lower up-front cost.",
      why: "Silicone gets specified for its strengths and then the owner is surprised 8 years later that they can't switch chemistries. Naming the recoat constraint up front makes the trade-off visible at the decision point.",
      relatedTermKey: 'Silicone Coating',
    },
    {
      topic: 'Field-report language for a failed acrylic restoration over a ponding-prone roof',
      poor: 'Acrylic peeling off where water sits.',
      better: 'Acrylic coating has degraded and lifted in the ponding areas; recommend a silicone overcoat or slope correction.',
      best: "Documented acrylic restoration coating delamination and chalking concentrated in the ponding zones (photos and moisture-meter readings attached). The acrylic is performing as expected outside the ponding areas. Root cause is the standing water itself — acrylic chemistry is not specified for chronic ponding tolerance — not a manufacturer defect. Two paths: (1) correct the slope via tapered insulation or supplemental drains, then recoat in the appropriate chemistry once the roof drains; (2) accept the ponding and switch to silicone, which tolerates it but commits the assembly to silicone for future recoats.",
      why: 'A failed acrylic over ponding is commonly mis-claimed as a coating-warranty defect. Naming the root cause (water, not chemistry failure) and the two forward-looking paths sets the owner up to spend money on the right fix.',
      relatedTermKey: 'Acrylic Coating',
    },
  ],
};
