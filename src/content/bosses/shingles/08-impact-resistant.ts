import type { BossBank } from '../types';

// Impact-Resistant (Class 4) Shingles boss — UL 2218 testing, insurance
// premium discount, the wear question, and the carrier paperwork that
// makes the discount actually happen.

export const shingles08: BossBank = {
  bossId: 'shingles-08',

  round1: [
    {
      prompt: 'An "impact-resistant" asphalt shingle has earned its rating by passing:',
      termKey: 'Impact-Resistant Shingle',
      choices: [
        'A controlled steel-ball impact test (UL 2218)',
        'A controlled wind tunnel test',
        'A standardized hail-stone drop test of natural ice',
        'A flame-spread test',
      ],
    },
    {
      prompt: 'The highest UL 2218 impact rating is:',
      termKey: 'Impact-Resistant Shingle',
      choices: ['Class 4', 'Class 1', 'Class 5', 'Class A'],
    },
    {
      prompt: "An impact-resistant Class 4 shingle's primary owner benefit (beyond the shingle itself) is:",
      termKey: 'Impact-Resistant Shingle',
      choices: [
        'An insurance premium discount on hail-related coverage in qualifying states',
        'A federal tax credit',
        'Exemption from any future hail-claim deductible',
        'Guaranteed lifetime replacement at no cost',
      ],
    },
    {
      prompt: 'A Class 4 shingle\'s impact-resistance comes from:',
      termKey: 'Impact-Resistant Shingle',
      choices: [
        'A reinforced mat and/or modified asphalt formulation; varies by manufacturer',
        'A thicker layer of granules only',
        'A metallic core layer',
        'A factory-applied silicone topcoat',
      ],
    },
    {
      prompt: 'A homeowner asks whether the insurance discount is automatic on Class 4 install. The correct answer:',
      termKey: 'Impact-Resistant Shingle',
      choices: [
        'Discount must be requested with the carrier in writing, with proof of product class and install date',
        'It is automatic on every policy',
        'It only applies after a claim is filed',
        'The carrier discovers it via aerial imagery',
      ],
    },
    {
      prompt: 'A Class 4 shingle can still sustain hail damage when:',
      termKey: 'Impact-Resistant Shingle',
      choices: [
        'Stone size exceeds the test threshold (UL 2218 tests at specific stone sizes; larger stones still bruise)',
        'It cannot be damaged by any size of hail',
        'It is older than 1 year',
        'It is installed in a warm climate',
      ],
    },
    {
      prompt: 'When inspecting a Class 4 shingle roof after a hail event, the inspector should:',
      termKey: 'Granule Loss',
      choices: [
        'Apply the same functional-damage criteria (granule loss with mat exposure, bruising) as on any other shingle — Class 4 reduces but does not eliminate damage',
        'Assume no damage occurred',
        'Replace the shingles regardless of damage',
        'Inspect only from the ground',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A Texas homeowner is choosing between standard 130 mph architectural shingles and Class 4 impact-resistant shingles at a $1,200 cost premium. The carrier offers a 20% hail-coverage discount for Class 4. Annual premium is $2,800.',
      choices: [
        {
          text: 'Calculate the payback. 20% of $2,800 = $560 / year discount; $1,200 / $560 ≈ 2.1 years to break even. After year 2, the homeowner is net ahead by ~$560/year for the life of the shingle, plus reduced claim deductible exposure. Verify the carrier honors the discount in writing before deciding; confirm the UL 2218 Class 4 certification document is on hand.',
          correct: true,
        },
        {
          text: 'The premium discount is too small to matter.',
          correct: false,
        },
        {
          text: 'Insurance discounts never apply; ignore them.',
          correct: false,
        },
      ],
      relatedTermKey: 'Impact-Resistant Shingle',
    },
    {
      prompt:
        'A Class 4 shingle roof is inspected after a 1.75" hail event. The adjuster argues that Class 4 shingles "cannot be damaged" and denies the claim.',
      choices: [
        {
          text: 'Class 4 reduces but does not eliminate damage. UL 2218 tests at specific stone sizes; a 1.75" stone exceeds the test stone, and the shingle CAN be functionally damaged. Document with the same methodology as a standard shingle (granule loss, bruising, mat exposure, photos with measurements). Use the actual on-roof evidence to push back; the "cannot be damaged" framing is a misreading of the standard.',
          correct: true,
        },
        {
          text: 'Concede; Class 4 is hail-proof.',
          correct: false,
        },
        {
          text: 'File against the manufacturer for product defect.',
          correct: false,
        },
      ],
      relatedTermKey: 'Impact-Resistant Shingle',
    },
    {
      prompt:
        'A homeowner installed Class 4 shingles 6 years ago and was promised a 25% insurance premium discount. The carrier never applied the discount. The homeowner asks if they have recourse.',
      choices: [
        {
          text: 'Recourse, but with paperwork. The discount is not automatic — the carrier needs documented proof of Class 4 install on file. Provide the original product certification, install date, and product line; request the discount be applied prospectively AND retroactively to the install date with a refund of overpaid premium. Most carriers will honor it back to the documented install date when properly evidenced.',
          correct: true,
        },
        {
          text: 'Discount has been waived by passage of time; nothing to do.',
          correct: false,
        },
        {
          text: 'Switch carriers; the discount is not real.',
          correct: false,
        },
      ],
      relatedTermKey: 'Impact-Resistant Shingle',
    },
  ],

  round3: [
    {
      topic: "Explaining the Class 4 IR shingle decision to a hail-prone homeowner",
      poor: 'Class 4 shingles are stronger.',
      better: 'Class 4 has passed a UL 2218 steel-ball impact test and typically qualifies for an insurance premium discount; the up-front cost is higher.',
      best: "A Class 4 (UL 2218) impact-resistant shingle is built with a reinforced mat or modified asphalt — the formulation varies by manufacturer — and has passed a controlled steel-ball impact test designed to simulate hail. The practical owner benefit is two-fold: a measurable reduction in damage from typical-size hail (Class 4 doesn't eliminate damage; it raises the threshold), and an insurance-premium discount in many hail-prone states that often pays back the up-front cost within 2-3 years. Two cautions: the discount is NOT automatic — the carrier needs documentation — and the shingle is not hail-proof. Functional damage from large stones is still assessable on the same on-roof evidence as any other shingle.",
      why: 'Class 4 gets sold as marketing — "hail-proof." Naming the test (steel-ball, not natural ice), the actual benefit (raised threshold, not immunity), the payback math (2-3 years typical), and the discount documentation requirement positions the decision as a calculable choice.',
      relatedTermKey: 'Impact-Resistant Shingle',
    },
    {
      topic: 'Documenting Class 4 install for insurance discount eligibility',
      poor: 'Class 4 shingles installed.',
      better: '[Brand] Class 4 IR shingles installed [date]; UL 2218 certification on file; carrier notified.',
      best: "[Brand] [product line, e.g., GAF Timberline AS II or Owens Corning Duration Storm] UL 2218 Class 4 impact-resistant asphalt shingles, installed [date], on [property address]. UL 2218 Class 4 certification document filed with the project record AND submitted to the carrier in writing as a premium-discount request, with photos of product packaging and install. Carrier confirmation of discount application requested in writing; retain confirmation in the homeowner file along with the install warranty.",
      why: 'Class 4 discount paperwork is the part of the install routinely overlooked. Naming the product line, the certification document, the carrier submission AND the requested confirmation creates the paper trail the discount actually depends on.',
      relatedTermKey: 'Impact-Resistant Shingle',
    },
    {
      topic: 'Pushing back on a "Class 4 cannot be damaged" claim denial',
      poor: 'Class 4 still gets damaged.',
      better: 'UL 2218 tests at specific stone sizes; larger stones still cause functional damage on Class 4.',
      best: "UL 2218 Class 4 tests at a specific steel-ball impact corresponding to a defined stone size; passing means the shingle survives at THAT test stone without functional damage. A larger natural stone, or a stone striking at higher velocity (wind-driven), can still cause functional damage on a Class 4 shingle — the standard is a threshold, not an immunity. The dispositive test on the roof is the same as any other shingle: tactile depression, mat exposure, fractured-granule pattern, clustering on storm-facing slopes. Documented evidence using that methodology should be evaluated on its own merits, not against an over-broad reading of the Class 4 marketing language.",
      why: '"Class 4 cannot be damaged" is the most common adjuster denial framing on IR shingle roofs. Naming the test scope, the threshold-vs-immunity distinction, and the same-methodology evidence test is what reopens the conversation.',
      relatedTermKey: 'Impact-Resistant Shingle',
    },
    {
      topic: 'Field-report language for hail damage on a Class 4 roof',
      poor: 'Damage on Class 4 shingles.',
      better: 'Functional hail damage documented on Class 4 IR shingles; storm stone size exceeded UL 2218 test threshold.',
      best: 'Documented functional hail damage on [Brand] UL 2218 Class 4 IR asphalt shingles, slope-by-slope impact counts attached. Methodology: 10\' × 10\' test squares per slope, with bruising confirmed by tactile depression, fractured granule pattern with mat exposure, and circular spatter pattern. Damage clustered on north and west (windward) slopes, consistent with documented storm-wind direction. NOAA storm report attached confirming maximum stone size of approximately [size] — which exceeds the UL 2218 Class 4 steel-ball test stone, reaching the regime where Class 4 shingles are explicitly NOT immune. Damage rises to functional level; recommend full slope replacement per carrier policy language. Note: Class 4 status confirmed via product packaging photos and UL certification document on file; carrier records this as the discounted policy.',
      why: 'A Class 4 hail claim has to defeat both the standard damage-vs-cosmetic argument AND the "Class 4 is hail-proof" misreading. Naming the test scope, the stone size that exceeded it, and the same-methodology evidence in one report addresses both at once.',
      relatedTermKey: 'Impact-Resistant Shingle',
    },
  ],
};
