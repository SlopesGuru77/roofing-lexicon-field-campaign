import type { BossBank } from '../types';

// Cool Roof & Energy Compliance boss — solar reflectance, thermal
// emittance (Emissivity), SRI, CRRC labeling, and code applicability.

export const lowSlope05: BossBank = {
  bossId: 'low-slope-05',

  round1: [
    {
      prompt: 'Solar reflectance measures what?',
      termKey: 'Solar Reflectance (Albedo)',
      choices: [
        'The fraction of sunlight a surface reflects rather than absorbs',
        'The total heat a roof radiates back to the sky',
        'The R-value of the insulation underneath',
        'The amount of UV the membrane has aged through',
      ],
    },
    {
      prompt: 'Emissivity (thermal emittance) measures what?',
      termKey: 'Emissivity',
      choices: [
        'A surface\'s ability to release absorbed heat',
        'How much sunlight the surface reflects',
        'The R-value drop in cold weather',
        'The percentage of cracks that have healed',
      ],
    },
    {
      prompt: 'On the SRI scale, a perfectly white roof is at what value?',
      termKey: 'Solar Reflectance Index (SRI)',
      choices: ['100', '0', '50', '1.0'],
    },
    {
      prompt: 'CRRC is which kind of organization?',
      termKey: 'CRRC',
      choices: [
        'A council that evaluates and labels the solar reflectance and thermal emittance of roofing products',
        'A federal regulatory agency',
        'A manufacturer trade group',
        'A trade union for roofing contractors',
      ],
    },
    {
      prompt: 'A white TPO and a black EPDM on identical buildings will most differ in:',
      termKey: 'Cool Roof',
      choices: [
        'Rooftop surface temperature and building cooling load',
        'Membrane thickness',
        'Number of plies',
        'Required ASTM thickness',
      ],
    },
    {
      prompt: "Why do CRRC labels publish BOTH 'initial' and 'aged' values?",
      termKey: 'Solar Reflectance (Albedo)',
      choices: [
        'Reflectance drops over time from dirt, weathering, and pollution; the aged number reflects real service condition',
        'Initial is for the lab, aged is for the warehouse storage period',
        'Initial is for white, aged is for grey',
        'They publish them only to confuse owners',
      ],
    },
    {
      prompt: 'California Title 24 cool-roof requirements primarily apply to:',
      termKey: 'Cool Roof',
      choices: [
        'Low-slope roofs in defined climate zones',
        'All shingle roofs statewide',
        'Industrial-zoned BUR only',
        'Buildings under 5,000 sq ft',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A Phoenix-area distribution-center owner is choosing between a black EPDM and a white TPO of equivalent cost. He is skeptical that membrane color materially affects energy cost.',
      choices: [
        {
          text: 'In a hot, sunny climate, a high-reflectance white TPO will lower the rooftop surface temperature by 50–80°F vs a black EPDM on a sunny afternoon, with a corresponding reduction in HVAC cooling load. The energy delta is real and measurable; the EPDM is the wrong choice for this climate unless coated.',
          correct: true,
        },
        {
          text: "Color doesn't matter — only R-value does.",
          correct: false,
        },
        {
          text: 'EPDM is always cheaper to operate because it lasts longer.',
          correct: false,
        },
      ],
      relatedTermKey: 'Cool Roof',
    },
    {
      prompt:
        'A coatings vendor markets a product as "the most reflective roof coating on the market" but the product is not CRRC-listed. The owner asks if the marketing claim is reliable.',
      choices: [
        {
          text: 'Treat unlisted reflectance claims with skepticism. CRRC listing means the value was measured by an accredited lab on a standardized sample; an unlisted claim is the vendor\'s assertion. For code compliance, only CRRC- or comparable-program-listed values are accepted.',
          correct: true,
        },
        {
          text: 'The marketing claim is fine because the vendor is liable for accuracy.',
          correct: false,
        },
        {
          text: 'Ignore CRRC — it does not apply to coatings.',
          correct: false,
        },
      ],
      relatedTermKey: 'CRRC',
    },
    {
      prompt:
        'An existing modified-bitumen roof in California climate zone 12 is being restored with a reflective acrylic coating. The contractor proposes the coating to bring the roof into Title 24 cool-roof compliance for the restoration scope.',
      choices: [
        {
          text: 'Verify the proposed coating has a CRRC-listed initial and aged reflectance that meets the Title 24 threshold for that climate zone, and confirm restoration scope triggers cool-roof compliance under current code interpretation. Document both values in the project record.',
          correct: true,
        },
        {
          text: 'Restorations are exempt from Title 24, so no listing is needed.',
          correct: false,
        },
        {
          text: 'Any white coating will pass; the inspector does not check.',
          correct: false,
        },
      ],
      relatedTermKey: 'Cool Roof',
    },
  ],

  round3: [
    {
      topic: 'Explaining cool-roof economics to an owner in a hot climate',
      poor: 'A white roof is cooler.',
      better: 'A reflective roof surface reduces cooling load and rooftop temperatures.',
      best: "A high-reflectance, high-emittance roof surface (a 'cool roof') reflects most of the sun's energy and re-radiates what it absorbs. In a hot, sunny climate that lowers the rooftop surface temperature by 50–80°F on a peak afternoon, which translates to measurable HVAC savings and a longer membrane service life. The two key numbers to compare are CRRC-listed initial AND aged solar reflectance, because reflectance drops with weathering.",
      why: "Owners hear 'cool roof' as a marketing concept. Naming the two physical properties, the temperature delta, and the aged-vs-initial distinction makes the conversation about engineering rather than color preference.",
      relatedTermKey: 'Cool Roof',
    },
    {
      topic: 'Documenting why a roof specification meets cool-roof code',
      poor: 'White TPO, meets code.',
      better: 'White TPO, CRRC-listed at 0.78 initial / 0.65 aged, meets Title 24 climate zone 12 low-slope cool-roof requirement.',
      best: "60-mil white reflective TPO membrane, CRRC product listing #XXXX, with initial solar reflectance 0.78 / aged 0.65, initial thermal emittance 0.86 / aged 0.85. Meets California Title 24 climate zone 12 low-slope nonresidential cool-roof prescriptive thresholds (verify against current Title 24 edition). Document the CRRC listing number in the project closeout binder.",
      why: 'Cool-roof compliance is a documentation question, not a color question. Naming the CRRC listing number and both pairs of values is what survives a code-official challenge.',
      relatedTermKey: 'CRRC',
    },
    {
      topic: 'Owner asks why a coating job two years old is no longer reflective',
      poor: 'It got dirty.',
      better: 'Reflectance dropped because the coating accumulated dirt and weathered.',
      best: "Reflectance has dropped because surface dirt, biological growth, and weathering have reduced the surface's ability to reflect sunlight — this is exactly why CRRC publishes a 3-year 'aged' value alongside the initial. The roof has not failed; it has reached its aged steady state. Scheduled roof washing or recoating restores reflectance, and that maintenance is part of the cool-roof commitment, not a defect.",
      why: "Owners hearing 'aged reflectance is lower' assume the product failed. Tying the drop to dirt accumulation and naming the maintenance path makes it a service question rather than a warranty conversation.",
      relatedTermKey: 'Solar Reflectance (Albedo)',
    },
    {
      topic: 'Field-report language tying reflectance loss to maintenance lapse',
      poor: 'Roof is dirty, less reflective now.',
      better: 'Reflective TPO membrane shows heavy surface soiling, reducing reflectance. Recommend roof washing.',
      best: 'Reflective TPO membrane shows heavy surface soiling and biological staining across the south and west fields, photos attached. Initial CRRC reflectance was 0.78; current visual estimate is materially below that. Manufacturer maintenance schedule calls for roof washing every 24 months; per owner records, no washing has been performed since installation 5 years ago. Recommend manufacturer-approved roof wash to restore aged reflectance values, then resume the 24-month schedule. Not a manufacturer warranty defect; this is deferred maintenance with energy-cost consequences.',
      why: 'Connecting visible soiling to the manufacturer maintenance schedule and naming the energy-cost consequence positions the finding as a measurable owner-cost issue, not just a cosmetic note.',
      relatedTermKey: 'Cool Roof',
    },
  ],
};
