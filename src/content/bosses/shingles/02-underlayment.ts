import type { BossBank } from '../types';

// Underlayment & Ice & Water Shield boss — synthetic vs felt, code
// requirements for ice & water at eaves and valleys, role of decking.

export const shingles02: BossBank = {
  bossId: 'shingles-02',

  round1: [
    {
      prompt: 'Ice and Water Shield is best described as:',
      termKey: 'Ice and Water Shield',
      choices: [
        'A self-adhered rubberized-asphalt underlayment that blocks water driven uphill by ice dams or wind',
        'A galvanized metal flashing installed at the eave',
        'A drainage mat installed under shingles',
        'A vapor barrier on the interior side of the roof',
      ],
    },
    {
      prompt: 'Synthetic underlayment is typically made from:',
      termKey: 'Synthetic Underlayment',
      choices: [
        'Woven or non-woven polypropylene or polyethylene',
        'Coal-tar-impregnated felt',
        'Asphalt-saturated organic fiber',
        'Aluminum-faced bitumen',
      ],
    },
    {
      prompt: 'Asphalt-saturated felt is sold in which two common weights?',
      termKey: 'Asphalt-Saturated Felt',
      choices: ['#15 and #30', '#5 and #10', '#1 and #2', '#90 and #120'],
    },
    {
      prompt: 'Roof sheathing in modern residential construction is typically:',
      termKey: 'Roof Sheathing',
      choices: ['Plywood or OSB', 'Particle board', 'Coal-tar-impregnated felt', 'Sheet steel'],
    },
    {
      prompt: 'Most modern residential codes require Ice and Water Shield to be installed:',
      termKey: 'Ice and Water Shield',
      choices: [
        'At least past the interior wall line in cold climates',
        'Across the entire field on every climate',
        'Only at penetrations',
        'Only in coastal climates',
      ],
    },
    {
      prompt: 'A primary advantage of synthetic underlayment over felt is:',
      termKey: 'Synthetic Underlayment',
      choices: [
        'Lighter, tear-resistant, and longer-lasting under UV exposure',
        'Heavier and stiffer than felt for better wind resistance',
        'Inherently fire-rated as a Class A surface',
        'Self-adhered to the deck without nailing',
      ],
    },
    {
      prompt: 'Ice and Water Shield is also typically installed at which locations beyond the eave?',
      termKey: 'Ice and Water Shield',
      choices: [
        'Valleys and penetrations',
        'The ridge only',
        'Field-only, never at terminations',
        'On the underside of the deck',
      ],
    },
  ],

  round2: [
    {
      prompt:
        "A re-roof contract calls for synthetic underlayment across the field but no Ice and Water Shield at the eaves on a home in Minnesota. The homeowner asks if that meets code.",
      choices: [
        {
          text: 'Push back — Minnesota and most cold-climate jurisdictions require Ice and Water Shield from the eave past the interior wall line (typically 24 inches inside the warm wall plane). A field-only synthetic underlayment is not the code-compliant detail at the eave in this climate. Verify the specific jurisdiction\'s adoption of IRC R905 (or local amendment) and document.',
          correct: true,
        },
        {
          text: 'Synthetic underlayment is always sufficient; Ice and Water Shield is optional.',
          correct: false,
        },
        {
          text: "Ice and Water Shield is only for cathedral ceilings; this home doesn't need it.",
          correct: false,
        },
      ],
      relatedTermKey: 'Ice and Water Shield',
    },
    {
      prompt:
        'During a tear-off, the contractor finds delaminated OSB sheathing in roughly 30% of the deck. The homeowner wants the new shingles installed over the existing deck to keep cost down.',
      choices: [
        {
          text: 'Replace the delaminated decking before installing the new roof. Asphalt shingles bond to the underlayment and through it to the deck; delaminated OSB cannot reliably hold fasteners and will telegraph through the shingles. Photograph the bad sections, scope replacement cost, and route the conversation as a deck-condition finding distinct from the shingle work.',
          correct: true,
        },
        {
          text: 'Install the new roof over the bad decking; nails will hold somehow.',
          correct: false,
        },
        {
          text: 'Wait for the decking to fail visibly before replacing it.',
          correct: false,
        },
      ],
      relatedTermKey: 'Roof Sheathing',
    },
    {
      prompt:
        'A previous re-roof used #15 asphalt-saturated felt across the field, and the install was left exposed to the weather for 6 weeks before shingling. Now the homeowner is filing a leak claim against the original roofer.',
      choices: [
        {
          text: '#15 felt exposed for 6 weeks is past its UV exposure tolerance — it will have wrinkled, dried, and cracked, compromising its role as a secondary water barrier under the eventual shingles. Document the exposure timeline (work orders, weather records), photograph any wrinkle pattern visible from inside the attic, and frame the claim as installation-sequence workmanship rather than shingle defect.',
          correct: true,
        },
        {
          text: 'Felt is felt — exposure time is irrelevant.',
          correct: false,
        },
        {
          text: 'Synthetic underlayment was used; ignore the felt discussion entirely.',
          correct: false,
        },
      ],
      relatedTermKey: 'Asphalt-Saturated Felt',
    },
  ],

  round3: [
    {
      topic: 'Explaining the role of Ice and Water Shield to a cold-climate homeowner',
      poor: 'It stops ice dams.',
      better: 'It is a self-adhered membrane at the eave that blocks water that gets driven back up under shingles by ice dams.',
      best: "Ice and Water Shield is a self-adhered, rubberized-asphalt underlayment installed at eaves, valleys, and penetrations. Its job is the moment when something forces water UP the roof against gravity — an ice dam at the eave, a wind-driven rain at a valley, a slow leak at a vent stack. The shingles above it shed water in normal conditions; Ice and Water Shield is the secondary defense for the cases where the shingles are temporarily overwhelmed. In cold climates the eave coverage is code-required past the interior wall line; in warmer climates it is best-practice at valleys and penetrations.",
      why: "Owners hear 'Ice and Water Shield' as a marketing add-on. Naming the three specific scenarios it defends against — ice dam, wind-driven rain, slow leak — and the code requirement reframes it from upsell to baseline protection.",
      relatedTermKey: 'Ice and Water Shield',
    },
    {
      topic: 'Documenting an underlayment specification on a residential re-roof',
      poor: 'Synthetic underlayment and ice and water at the eaves.',
      better: 'Manufacturer-matched synthetic underlayment across field, self-adhered Ice and Water Shield at eaves (24" past interior wall line), valleys, and penetrations.',
      best: "Manufacturer-matched synthetic underlayment across the field, double-overlapped per manufacturer spec. Self-adhered Ice and Water Shield at all eaves extending a minimum of 24 inches past the interior wall plane, in all valleys (full-length, full-width), and at all penetrations (vents, pipes, chimneys, skylights). Decking inspected and any delaminated or rotted sheathing replaced before underlayment installation. Verify current local code amendments for ice-and-water coverage depth at the eave.",
      why: 'Underlayment is the layer most often value-engineered down on a residential re-roof. Naming the brand-match, the specific termination locations, the deck-inspection step, and the code-verification step prevents the substitution.',
      relatedTermKey: 'Synthetic Underlayment',
    },
    {
      topic: 'Explaining to an owner why decking condition matters before the new shingles',
      poor: 'We need to look at your decking first.',
      better: 'Bad decking does not hold fasteners; the shingles will telegraph the failure pattern through to the surface.',
      best: "The shingles do not float — they nail through underlayment into the roof sheathing (plywood or OSB). If the sheathing is delaminated, rotted, or moisture-saturated, the nails do not hold, the shingles loosen at the fastener line, and the roof telegraphs the deck failure through to the surface within a few seasons. Tear-off is the only time the deck is inspectable; finding bad sheathing then is a manageable line item, finding it after the new roof is on is a re-roof.",
      why: "Owners decline deck replacement on cost. Naming the failure path — nails don't hold, shingles loosen, telegraph through, full re-roof later — quantifies the deferred cost.",
      relatedTermKey: 'Roof Sheathing',
    },
    {
      topic: 'Field-report language for missing Ice and Water Shield at the eave on an older leak claim',
      poor: 'No ice & water at the eave.',
      better: 'No Ice and Water Shield installed at the eave; water staining and rot found in the soffit cavity.',
      best: "On the leak investigation, removed two courses of shingles at the eave above the reported ceiling stain. No Ice and Water Shield present at the eave; only #15 asphalt felt, which is degraded and torn at the nail line. Photos show water staining on the underside of the deck and rot in the soffit cavity below, consistent with multiple seasons of ice-dam back-up driving water up the deck and into the wall. Original roof predates current code adoption of mandatory Ice and Water Shield at eaves; this is a pre-existing assembly defect surfaced by ice-dam conditions, not a recent storm-related event.",
      why: "Ice-dam leak claims often default to 'storm damage' framing. Naming the underlayment absence, the assembly defect history, and the cumulative-vs-event distinction sets the claim on the correct path (maintenance or pre-existing rather than weather event).",
      relatedTermKey: 'Ice and Water Shield',
    },
  ],
};
