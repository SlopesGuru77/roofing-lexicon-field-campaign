import type { BossBank } from '../types';

// Cover Boards & Hail Performance boss — DensDeck, HD ISO, perlite,
// fiberboard, gypsum cover board choices; the assembly drives hail
// survival, not the membrane alone.

export const lowSlope07: BossBank = {
  bossId: 'low-slope-07',

  round1: [
    {
      prompt: 'A cover board is installed where in the assembly?',
      termKey: 'Cover Board',
      choices: [
        'Between the insulation and the membrane',
        'Beneath the deck',
        'On top of the membrane as a sacrificial layer',
        'Inside the building, on the underside of the deck',
      ],
    },
    {
      prompt: 'Which cover board is a glass-mat gypsum product known for strong fire performance and excellent hail and puncture resistance?',
      termKey: 'DensDeck',
      choices: [
        'DensDeck',
        'High-Density PolyISO (HD ISO)',
        'Perlite',
        'Fiberboard',
      ],
    },
    {
      prompt: 'HD ISO cover board\'s main trade-off vs gypsum is:',
      termKey: 'High-Density PolyISO (HD ISO)',
      choices: [
        'Lightweight and easy to handle, but generally weaker in hail testing than gypsum',
        'Heavier and stiffer than gypsum',
        'Inherently noncombustible',
        'Moisture-resistant by default',
      ],
    },
    {
      prompt: 'Perlite cover boards have which significant weakness?',
      termKey: 'Perlite',
      choices: [
        'Not moisture-resistant and changes dimension when wet',
        'Combustible at low temperatures',
        'Reacts chemically with polyiso',
        'Cannot be cut on site',
      ],
    },
    {
      prompt: 'Fiberboard is which kind of cover board?',
      termKey: 'Fiberboard',
      choices: [
        'Wood or cane fiber bonded with resin; combustible and prone to absorbing water',
        'Gypsum with a fiberglass mat facing',
        'A polyiso variant',
        'A coal-tar-impregnated felt',
      ],
    },
    {
      prompt: 'Why does the cover board often decide whether a roof survives a hailstorm?',
      termKey: 'Cover Board',
      choices: [
        'It backs up the membrane with a rigid, impact-resistant layer; without it, the membrane bruises into the soft insulation below',
        'It reflects hail away from the membrane',
        'It absorbs water from hailstones',
        'It thickens the membrane after impact',
      ],
    },
    {
      prompt: 'On a hail-prone retrofit, a specifier compares HD ISO and DensDeck at equal cost. Which choice typically scores better in standardized hail testing?',
      termKey: 'DensDeck',
      choices: [
        'DensDeck (gypsum)',
        'HD ISO (polyiso)',
        'Both score identically',
        'Hail testing does not apply to cover boards',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A Denver-area distribution-center owner has had two hail-storm losses in 6 years. The next re-roof is being scoped. The contractor proposes HD ISO cover board to keep weight down on a marginal-capacity deck; the owner asks if that is the right call.',
      choices: [
        {
          text: 'Push back on cover-board-by-weight alone in a hail-prone climate. DensDeck or similar gypsum cover board generally outperforms HD ISO in standardized hail testing; weight savings from HD ISO are real but the trade-off in hail performance is also real. If deck capacity is genuinely marginal, get a structural engineer\'s sign-off before downgrading the cover board.',
          correct: true,
        },
        {
          text: 'HD ISO is fine — modern membranes do not need a hail-rated cover board.',
          correct: false,
        },
        {
          text: 'Skip the cover board entirely to save weight.',
          correct: false,
        },
      ],
      relatedTermKey: 'DensDeck',
    },
    {
      prompt:
        'On a tear-off, perlite cover board is found wet and dimensionally unstable across roughly 30% of the field, on a 12-year-old roof. The owner suggests drying it and reusing it under the new membrane.',
      choices: [
        {
          text: 'Cut it out and replace. Perlite is not moisture-resistant and changes dimension when wet; even when dried, it does not return to its original shape, and the dimensional change telegraphs through the new membrane. Document the wet area and budget for replacement.',
          correct: true,
        },
        {
          text: 'Dry it in place and reuse — perlite is dimensionally stable once dry.',
          correct: false,
        },
        {
          text: 'Flip the boards over so the wet side faces up to dry.',
          correct: false,
        },
      ],
      relatedTermKey: 'Perlite',
    },
    {
      prompt:
        'A field adjuster denies a hail-damage claim on a fully adhered TPO roof, citing only the visible top-of-membrane bruising. The roof assembly includes HD ISO cover board over polyiso.',
      choices: [
        {
          text: 'Inspect the assembly, not just the membrane. Open a test cut to examine the cover board and insulation directly under the bruised areas — hail commonly fractures HD ISO cover boards beneath an intact-looking membrane, which is the actual functional damage. Document fractures with measurements and photos.',
          correct: true,
        },
        {
          text: 'Accept the adjuster\'s denial — surface bruising is the only relevant evidence.',
          correct: false,
        },
        {
          text: 'Argue that all TPO over HD ISO is automatically a total loss after hail.',
          correct: false,
        },
      ],
      relatedTermKey: 'Cover Board',
    },
  ],

  round3: [
    {
      topic: 'Explaining cover-board choice to an owner during pre-construction',
      poor: 'A cover board is required.',
      better: "A cover board protects the membrane from foot traffic and hail; the type of board matters.",
      best: "A cover board sits between the insulation and the membrane and gives the membrane a rigid, impact-resistant backing. Without it, hail and foot traffic bruise the membrane down into the soft insulation, which is how 'undamaged-looking' roofs fail at the next storm. Gypsum cover boards (e.g., DensDeck) generally score highest in hail testing; HD ISO is lighter and easier to handle; perlite and fiberboard are older choices with moisture and fire trade-offs. The right call is climate- and budget-driven, but skipping the cover board is rarely the right answer in a hail-prone region.",
      why: "Owners often see cover board as 'extra' line-item cost. Naming the failure mode without it, the climate-trade-off question, and the standard product categories reframes it as the line item that decides whether a hail claim is fightable.",
      relatedTermKey: 'Cover Board',
    },
    {
      topic: 'Documenting cover-board choice on a re-roof submittal',
      poor: 'DensDeck cover board.',
      better: 'DensDeck Prime ½″ glass-mat gypsum cover board over polyiso, beneath the fully adhered TPO membrane.',
      best: "DensDeck Prime ½″ glass-mat gypsum cover board, mechanically fastened or adhered per manufacturer assembly, between Type II polyiso insulation (R-30 LTTR) and 60-mil fully adhered TPO. Cover-board choice selected for hail-prone climate (verify current FM-rated hail-resistance class for the assembly with both manufacturers). Substitutions to HD ISO or fiberboard require written approval from the owner due to hail-class trade-off.",
      why: 'Cover-board substitutions during construction are how hail performance quietly gets downgraded. Naming the specific product, the assembly basis, and the substitution-approval gate prevents that.',
      relatedTermKey: 'DensDeck',
    },
    {
      topic: 'Explaining to an owner why an "undamaged-looking" roof failed after a hailstorm',
      poor: 'The hail did damage even though you can\'t see it.',
      better: 'Hail bruised the cover board under the membrane; the membrane will fail at those spots over time.',
      best: "Hail energy passes through the membrane to whatever is underneath. If the cover board (or insulation, if no cover board) is bruised, fractured, or crushed by the impact, the membrane no longer has a continuous rigid backing in those spots — and those become slow leak points over the next 6-24 months as foot traffic and thermal cycling work the bruise. That is why a forensic inspection takes test cuts; the visible top-of-membrane condition is not the whole story.",
      why: 'Owners and adjusters denying a hail claim often anchor on the membrane surface. Naming the energy-transfer mechanism, the delayed-failure timeline, and the test-cut method shifts the conversation from \"how does it look\" to \"what is the assembly condition.\"',
      relatedTermKey: 'Cover Board',
    },
    {
      topic: 'Field-report language for cover board crushed by HVAC service traffic',
      poor: 'Crushed insulation near the rooftop unit.',
      better: 'Cover board crushed in a foot-traffic path between the access door and the south HVAC unit; recommend repair and a traffic mat.',
      best: "Documented localized cover-board crushing along the foot-traffic path between the south access door and the air-handler unit, approximately 14 linear ft × 3 ft wide. Membrane visually intact but un-supported in the crushed area, photos and probe-depth measurements attached. Owner records show no traffic pads or walkways installed at handover. Recommend cut-out and replacement of crushed cover board, restoration of the membrane to manufacturer specification, and installation of a manufacturer-approved walkway pad system along the service path. This is foot-traffic abuse, generally excluded from manufacturer warranty.",
      why: 'Crushed cover board from service traffic is a recurring write-off owners try to claim against the warranty. Naming the cause (no walkways at handover), the abuse-exclusion, and the corrective scope keeps the documentation aligned with what an NDL warranty actually covers.',
      relatedTermKey: 'Cover Board',
    },
  ],
};
