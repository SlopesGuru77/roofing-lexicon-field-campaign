import type { BossBank } from '../types';

// Shingles Mastery Exam — broader, harder, samples across bosses 01-10
// covering anatomy, underlayment, flashing, ventilation, ice dams, hail,
// wind, Class 4 IR, roof geometry, and brand warranties. 20 questions;
// 90% pass enforced by the BossRunner via card.isMastery.

export const shingles11Mastery: BossBank = {
  bossId: 'shingles-11-mastery',

  round1: [
    {
      prompt: 'An architectural shingle differs from a 3-tab in that it:',
      termKey: 'Architectural Shingle',
      choices: [
        'Is built up from two or more layers for a dimensional look and longer service life',
        'Has no sealant strip',
        'Is thinner but covers a larger area',
        'Is installed without a starter strip',
      ],
    },
    {
      prompt: 'Code-required Ice and Water Shield coverage at the eave typically extends:',
      termKey: 'Ice and Water Shield',
      choices: [
        'At least 24 inches past the interior wall plane in cold climates',
        'Across the entire field on every climate',
        'Only the first 6 inches at the eave',
        'Only at penetrations',
      ],
    },
    {
      prompt: 'Missing kick-out flashing at a roof-to-wall termination above siding drives:',
      termKey: 'Kick-Out Flashing',
      choices: [
        'Water behind the cladding, causing hidden wall rot',
        'Ice dams at the eave',
        'Ridge vent failure',
        'Granule loss on the field',
      ],
    },
    {
      prompt: 'A power vent paired with inadequate intake can:',
      termKey: 'Power Vent',
      choices: [
        'Pull conditioned air through ceiling penetrations and drive attic moisture problems',
        'Improve intake by suction',
        'Reduce heating bills in winter',
        'Replace the need for soffit vents',
      ],
    },
    {
      prompt: 'The primary root cause of recurring ice dams in most cold-climate homes is:',
      termKey: 'Ice Dam',
      choices: [
        'Inadequate attic insulation and air sealing, letting heat escape into the attic',
        'Shingles being cold',
        'Snow buildup beyond gutter capacity',
        'Lack of heat cables at the eave',
      ],
    },
    {
      prompt: 'Functional hail damage on a shingle is most reliably confirmed by:',
      termKey: 'Granule Loss',
      choices: [
        'Tactile depression, exposed mat, circular fractured-granule pattern',
        'Visual color change from the ground',
        "A homeowner's statement that 'it hit hard'",
        'The presence of any granules in the gutter',
      ],
    },
    {
      prompt: 'Uniform creased-tab pattern across all slopes (not directional) usually indicates:',
      termKey: 'Starter Shingle',
      choices: [
        'Workmanship-pattern unsealed tabs from cold-weather install or substituted starter — not a storm event',
        'A single severe wind gust',
        'Hail impact',
        'Manufacturer defect in every shingle',
      ],
    },
    {
      prompt: 'A UL 2218 Class 4 impact-resistant shingle\'s primary owner benefit beyond the shingle itself is:',
      termKey: 'Impact-Resistant Shingle',
      choices: [
        'An insurance premium discount in qualifying states (requires documented carrier registration)',
        'A federal tax credit',
        'Immunity from any hail damage',
        'Automatic warranty payout on any storm',
      ],
    },
    {
      prompt: 'A roof slope of 2.5:12 is:',
      termKey: 'Low-Slope Roof',
      choices: [
        'Below the standard asphalt-shingle minimum (4:12); requires enhanced underlayment or a low-slope membrane system',
        'Standard for architectural shingles',
        'Ideal for any shingle product',
        'Above the maximum residential slope',
      ],
    },
    {
      prompt: "GAF's highest-tier residential warranty is called:",
      termKey: 'GAF Golden Pledge',
      choices: ['Golden Pledge', 'Silver Pledge', 'System Plus', 'Diamond Pledge'],
    },
  ],

  round2: [
    {
      prompt:
        "A 4-year-old re-roof in Minnesota was installed with synthetic underlayment field-only and no Ice and Water Shield at the eaves. The homeowner has filed an interior water-damage claim every winter for 3 years running. The contractor argues each year is a separate weather event.",
      choices: [
        {
          text: "Document the missing code-required Ice and Water Shield at the eaves at install date. Repeat winter back-up under ice-dam conditions is the predictable failure mode of that omission, not three independent weather events. Route as a single workmanship/code-compliance claim against the original installer, NOT three separate weather claims against the carrier.",
          correct: true,
        },
        {
          text: 'File each year as a separate weather claim.',
          correct: false,
        },
        {
          text: 'Install heat cables and consider it solved.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ice and Water Shield',
    },
    {
      prompt:
        'A field adjuster denies a hail claim on a 14-year-old asphalt shingle roof, citing the storm\'s maximum stone size of 1.25" and Haag\'s published threshold of ~1.25" for fresh asphalt shingles.',
      choices: [
        {
          text: "Haag's thresholds are calibrated to fresh shingles in good condition; a 14-year-old weathered shingle bruises at smaller stones. Document on-roof evidence directly: granule clusters in valleys and downspouts, mat exposure and circular bruising per slope, weather-condition baseline of the shingles. Threshold is reference, not the dispositive test.",
          correct: true,
        },
        {
          text: 'Accept the denial; Haag thresholds are policy text.',
          correct: false,
        },
        {
          text: 'Argue that any stone over 1 inch damages all shingles.',
          correct: false,
        },
      ],
      relatedTermKey: 'Hail Damage Threshold (by Material)',
    },
    {
      prompt:
        'A re-roof contract specifies an architectural shingle rated 130 mph but the contractor installs with a 4-nail pattern.',
      choices: [
        {
          text: "Verify against the manufacturer's published spec. Many architectural shingles require a 6-nail enhanced pattern to achieve their 130 mph rating; the 4-nail install on the same product typically drops the rating to ~110 mph. Document the nailing pattern in writing with photos, confirm with the manufacturer, and address before close-out — the difference affects both warranty registration and any future wind claim.",
          correct: true,
        },
        {
          text: '4-nail is universally adequate; nailing pattern is preference.',
          correct: false,
        },
        {
          text: 'Add caulk to compensate for fewer nails.',
          correct: false,
        },
      ],
      relatedTermKey: 'Architectural Shingle',
    },
    {
      prompt:
        "A homeowner installed Class 4 IR shingles 6 years ago. The carrier never applied the promised 20% hail-coverage premium discount.",
      choices: [
        {
          text: 'The discount is not automatic — it requires documented proof of Class 4 install on file. Provide the UL 2218 Class 4 certification document, install date, and product line; request the discount be applied prospectively AND retroactively to install date with refund of overpaid premium. Most carriers honor it when properly evidenced.',
          correct: true,
        },
        {
          text: 'Discount has expired by passage of time.',
          correct: false,
        },
        {
          text: 'Switch carriers immediately.',
          correct: false,
        },
      ],
      relatedTermKey: 'Impact-Resistant Shingle',
    },
    {
      prompt:
        "A homeowner registered for GAF Golden Pledge 5 years ago. Their contractor has since let Master Elite certification lapse. The roof now has a workmanship leak the homeowner wants to claim.",
      choices: [
        {
          text: "The Master Elite credential at install date is what registered the Golden Pledge. The contractor's current lapsed status affects new work, not registered claims. Submit the claim through GAF directly with the registration paperwork from install date, photos of the matched-system install, and the contractor's then-current credential documentation.",
          correct: true,
        },
        {
          text: 'The warranty is void; the contractor is no longer Master Elite.',
          correct: false,
        },
        {
          text: 'Find another Master Elite contractor to take over the claim.',
          correct: false,
        },
      ],
      relatedTermKey: 'GAF Golden Pledge',
    },
  ],

  round3: [
    {
      topic: 'Senior consultant explaining residential roof system thinking to a property-management board',
      poor: 'Shingles are the most important thing.',
      better: "A residential roof is a system: shingles, underlayment, flashing, ventilation, and decking each have their own failure modes.",
      best: "A residential roof is not a product; it is a system. The shingle is the visible surface, but the long-term performance and the warranty outcomes depend on five other layers working together: the deck (plywood/OSB integrity), the underlayment (Ice and Water Shield at eaves and valleys + synthetic across the field), the flashings (drip edge, step, kick-out, valleys), the ventilation (balanced intake/exhaust per the 1:300 rule), and the matched-system components (starter, hip-and-ridge, fasteners at the manufacturer's specified pattern). The board's right question is not 'which shingle' but 'is the contractor on the manufacturer's certified list, are matched components specified, is the warranty going to register correctly, and are the cold-climate / wind / hail details right for this site' — those are what predict the actual outcome over 25 years.",
      why: "Boards approve roofs as 'shingles' and inherit five layers of decisions they did not see. Naming the system layers and the predictive levers (certified contractor, matched components, climate detailing) elevates the conversation to where the dollars actually settle.",
      relatedTermKey: 'GAF Golden Pledge',
    },
    {
      topic: 'Documenting a residential re-roof scope for warranty registration AND future claim defensibility',
      poor: 'New roof with extended warranty.',
      better: '[Brand] architectural shingles + matched components, installed by certified contractor, registered for extended warranty, documented nailing pattern.',
      best: "[Brand] [highest-tier certified contractor — e.g., GAF Master Elite, OC Platinum Preferred] installing a complete manufacturer-matched system: [Shingle product/color, wind rating] with 6-nail enhanced pattern; manufacturer-matched starter and hip-and-ridge cap; synthetic underlayment across field plus self-adhered Ice and Water Shield at all eaves (24\" past interior wall plane), valleys, and penetrations; new drip edge at eaves and rakes; new step + counter + kick-out flashing at all roof-to-wall terminations; balanced ridge-and-soffit ventilation calculated to 1:300 NFA (no competing gable or power vents); deck inspection with rotted/delaminated sheathing replacement as found. UL 2218 Class 4 IR product (if applicable) with carrier discount documentation submitted. Registered for [extended warranty program] with manufacturer; registration confirmation on file.",
      why: 'A residential re-roof scope that does not name every layer becomes a substitution dispute or a denied warranty registration. Naming the contractor credential, every matched component, the flashing detail at each termination type, the ventilation calc, and the registration step is what makes the system register correctly AND survive a claim defense five years later.',
      relatedTermKey: 'GAF Golden Pledge',
    },
    {
      topic: 'Forensic-investigator narrative after a mixed-cause shingle failure (hail + workmanship)',
      poor: 'Both workmanship and storm damage on this roof.',
      better: 'Storm-event damage on windward slopes plus pre-existing workmanship pattern across all slopes; two separate claim paths.',
      best: 'Site inspected after [date] documented hail event. Two distinct damage patterns present and they need to be separated. (1) Storm-event hail damage: clustered functional bruising and granule loss on north and west (windward) slopes, consistent with the storm wind direction (NOAA storm report attached), with intact south and east slopes. Slope-by-slope impact counts documented. This is the carrier claim path. (2) Pre-existing workmanship pattern: uniform raised/creased tabs visible across all four slopes including the unhit south and east slopes, sealant-strip non-activation pattern consistent with a cold-weather install of the original re-roof (NOAA temperature record for original install date attached). This is the installer/warranty claim path. The two findings have different counter-parties (carrier vs original installer), different evidence sets (directional cluster vs uniform pattern), and different remedies; documenting them separately is what prevents conflation and the resulting denial of both.',
      why: "Mixed-cause shingle failures are routine and routinely mis-claimed as a single event. Naming the two patterns, the two counter-parties, the two evidence sets, and the two remedies in one report is the senior-inspector deliverable that gets each one paid by the right party.",
      relatedTermKey: 'Wind Uplift',
    },
    {
      topic: 'Explaining the certified-contractor warranty premium decision to a hail-prone homeowner picking between brands',
      poor: 'The certified contractors all charge more.',
      better: 'Each brand has a certified-contractor program; the premium typically pays back through workmanship coverage on a 25-year horizon.',
      best: "GAF (Master Elite → Golden Pledge), Owens Corning (Platinum Preferred → Platinum Protection), CertainTeed (SELECT ShingleMaster → SureStart Plus / Integrity Roof System), and IKO (ROOFPRO → ShieldPro Plus) all run structurally similar certified-contractor programs that unlock extended warranties adding workmanship coverage and longer non-prorated periods. The brand-vs-brand decision matters less than the local certified-contractor density and the claim-handling track record in your market — talk to two or three certified contractors per brand AND ask each one about claims they have personally filed with the manufacturer. The certified-contractor premium typically pays back within a few years through the workmanship coverage if anything goes wrong; on a 25-year horizon, it is almost always the right call in a hail-prone region. The wrong call is non-certified install of a premium shingle — same product, no system warranty, no workmanship coverage if the install goes sideways.",
      why: "Hail-prone homeowners default to brand comparison; the better lens is contractor credential and local claims experience. Naming the four parallel programs, the contractor-experience question, and the worst-case (non-certified install of premium shingle) reframes the decision around what actually drives claim outcomes.",
      relatedTermKey: 'Impact-Resistant Shingle',
    },
    {
      topic: 'Field-report language for a shingle leak that turns out to be a flashing-not-shingle issue',
      poor: 'Leak fixed.',
      better: 'Leak traced to flashing detail, not shingle defect; flashing rebuild scope documented.',
      best: 'Investigated reported ceiling leak in [room]. Removed shingles in the suspected leak area. Field shingles in the area are intact: no functional damage, no granule loss, no bruising, no tearing. Underlayment in the field is intact. Removed counter-flashing at the [chimney / dormer / wall]; found [specific defect — kerfed reglet not sealed, step flashing pieces under-lapped, counter-flashing not installed beneath cladding, etc.]. Leak path traced from the defective flashing detail down the [wall cavity / interior surface] to the reported staining location. This is a flashing-detail workmanship defect at the original install or most recent re-roof, NOT a shingle product defect and NOT a storm event. Scope: rebuild the affected flashing detail to current standard, document for warranty claim against [original installer] if within warranty period; otherwise document as a deferred-detail repair to be performed by the homeowner\'s chosen contractor. The shingle warranty (manufacturer) is not implicated by this finding.',
      why: 'Roof leak claims are routinely (and incorrectly) routed against the shingle manufacturer when the actual defect is in the flashing. Naming the shingle as intact, the specific flashing element that failed, the leak-path tracing, and the correct claim path (installer, not manufacturer, not carrier) is what gets the claim onto the right party AND off the wrong one.',
      relatedTermKey: 'Flashing',
    },
  ],
};
