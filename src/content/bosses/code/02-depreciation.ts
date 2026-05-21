import type { BossBank } from '../types';

// Depreciation boss — recoverable vs non-recoverable, the depreciation
// schedule, why a 14-year-old roof depreciates differently from a 4-year-old
// one, and the supplement conversation when carrier depreciation is excessive.

export const code02: BossBank = {
  bossId: 'code-02',

  round1: [
    {
      prompt: 'Depreciation on a roof claim represents:',
      termKey: 'Depreciation',
      choices: [
        'The reduction in the roof\'s value from age, wear, and condition — the dollar gap between RCV and ACV',
        'A penalty for filing a claim',
        'The carrier\'s administrative fee',
        'A line-item discount the contractor offers',
      ],
    },
    {
      prompt: 'Recoverable Depreciation, in plain terms, is:',
      termKey: 'Recoverable Depreciation',
      choices: [
        'The depreciation portion the policyholder gets back after repairs are completed and properly documented',
        'Depreciation the carrier keeps regardless of completion',
        'A separate insurance policy',
        'The same as the deductible',
      ],
    },
    {
      prompt: 'Non-Recoverable Depreciation is depreciation that:',
      termKey: 'Non-Recoverable Depreciation',
      choices: [
        'The policyholder will never recover — either because the policy is ACV-only or specific line items are coded as non-recoverable',
        'Has been recovered already by a prior claim',
        'Is paid by the contractor at close-out',
        'Always equals 10% of the loss',
      ],
    },
    {
      prompt: 'An ACV-only homeowners policy (no RCV endorsement) handles depreciation by:',
      termKey: 'Actual Cash Value (ACV)',
      choices: [
        'Paying only ACV; the depreciation is never repaid, regardless of whether repairs are completed',
        'Paying RCV up front and depreciating it later',
        'Holding all depreciation in escrow until age 99',
        'Treating depreciation the same as a deductible',
      ],
    },
    {
      prompt: 'A 14-year-old asphalt shingle roof typically depreciates at a higher percentage than a 4-year-old one because:',
      termKey: 'Depreciation',
      choices: [
        'Depreciation is age-weighted on a remaining-useful-life basis; an older roof has consumed more of its service life',
        'Carriers depreciate all roofs equally',
        'Depreciation only applies to roofs over 20 years',
        'Newer roofs depreciate faster than older ones',
      ],
    },
    {
      prompt: 'A line item the carrier categorizes as non-recoverable on an otherwise-recoverable claim:',
      termKey: 'Non-Recoverable Depreciation',
      choices: [
        'Should be reviewed against the policy form — if the policy treats it as recoverable, the categorization is challengeable via supplement',
        'Cannot be challenged once issued',
        'Is always correctly categorized',
        'Means the entire claim is non-recoverable',
      ],
    },
    {
      prompt: 'A Supplement on a claim is:',
      termKey: 'Supplement',
      choices: [
        'A request to add costs to an approved claim for damage or work not in the original scope, supported by documentation',
        'A second claim on the same loss',
        'A duplicate of the original estimate',
        'A bonus payment from the carrier',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner has an ACV-only roof endorsement on an otherwise RCV policy. The carrier issues an $11,000 settlement on a $26,000 RCV roof. The contractor expects to bill the recoverable depreciation after completion.',
      choices: [
        {
          text: 'Stop and read the endorsement before proceeding. If the roof is endorsed to ACV-only (a common move on roofs over 10-15 years in some markets), there is no recoverable depreciation by definition — the $11,000 is the final number, not the first check. The conversation with the homeowner is about the $15,000 gap and how they will fund it (out-of-pocket, financing, scope reduction), not about waiting for a second check that will never come.',
          correct: true,
        },
        {
          text: 'Bill the depreciation anyway — the carrier will release it.',
          correct: false,
        },
        {
          text: 'Tell the homeowner the carrier short-paid them.',
          correct: false,
        },
      ],
      relatedTermKey: 'Non-Recoverable Depreciation',
    },
    {
      prompt:
        'The carrier\'s estimate depreciates the shingles at 65% on a 6-year-old roof in good pre-storm condition. The shingle product carries a 30-year limited warranty.',
      choices: [
        {
          text: '65% depreciation on a 6-year-old roof is inconsistent with a 30-year product life. Push back with a supplement: cite the product\'s rated life, the documented pre-storm condition (photos, recent appraisal, listing photos), and the appropriate age-weighted depreciation calculation (~20% on a straight-line basis, less under accelerated-front-loaded models for premium products). Attach the math and the supporting evidence; the desk adjuster has discretion to adjust depreciation when challenged with documentation.',
          correct: true,
        },
        {
          text: 'Accept the carrier\'s number — depreciation is non-negotiable.',
          correct: false,
        },
        {
          text: 'Tell the homeowner the carrier is committing fraud.',
          correct: false,
        },
      ],
      relatedTermKey: 'Depreciation',
    },
    {
      prompt:
        'On a completed re-roof, the carrier releases recoverable depreciation but withholds payment on three line items it has re-categorized as non-recoverable after the original estimate.',
      choices: [
        {
          text: 'Compare the original estimate and the final settlement line-by-line. If the line items moved from recoverable to non-recoverable without justification, file a supplement with the original estimate, the policy form definition of recoverable depreciation, and a request to restore the line items to their original categorization. Carriers occasionally reclassify silently; the policy form is the controlling document, not the second-pass estimate.',
          correct: true,
        },
        {
          text: 'Write off the difference and move on.',
          correct: false,
        },
        {
          text: 'Demand cash from the homeowner for the gap.',
          correct: false,
        },
      ],
      relatedTermKey: 'Supplement',
    },
  ],

  round3: [
    {
      topic: 'Explaining the ACV-only endorsement to a homeowner on an older roof',
      poor: 'They put a special clause on your roof.',
      better: 'Some carriers add an ACV-only endorsement to roofs over 10–15 years; depreciation on a covered loss does not come back as a second check.',
      best: 'On older roofs (commonly 10 years and up, depending on the carrier and the market), many carriers add an ACV-only roof endorsement to the policy at renewal. The effect is that on any future roof claim, the carrier pays Actual Cash Value — replacement cost minus depreciation — and that depreciation never gets repaid, regardless of whether you complete the work. The endorsement is usually buried in the declarations or a separate roof-specific schedule; it is rarely highlighted at renewal. The right time to find it is now, not after a hailstorm. If it is on the policy, the planning question shifts from "what will my deductible be" to "how do I close the depreciation gap on the inevitable claim" — savings reserve, financing pre-qualification, or a roof replacement before the carrier-imposed age threshold.',
      why: 'The ACV-only endorsement is the single largest hidden surprise in storm claims on older roofs. Naming the trigger (age threshold), the structural effect (depreciation never repaid), the where-it-lives-on-the-dec-page, and the planning shift from deductible to depreciation reserve elevates the conversation from "the carrier short-paid us" to "we planned for this."',
      relatedTermKey: 'Non-Recoverable Depreciation',
    },
    {
      topic: 'Documenting a supplement on excessive depreciation',
      poor: 'They depreciated too much.',
      better: 'Carrier depreciated the shingles at 65% on a 6-year-old, 30-year-product roof; we are requesting depreciation be re-set to age-weighted.',
      best: 'Supplement request: Carrier estimate depreciates the shingle and accessory line items at 65% (cell range [X]). Roof age is 6 years per the deed transfer and the original install paperwork (attached). Shingle product is [brand/line], a 30-year limited warranty product (manufacturer spec attached). Pre-storm condition: documented in the [date] listing photos (attached) and the [date] roof certification (attached) as sound, no granule loss, no curling. On a straight-line age-weighted basis ($X / 30 yrs × 6 yrs = 20%), depreciation should not exceed 20% on this assembly. Even under an accelerated-front-load depreciation curve for premium products, 25% would be a defensible ceiling. Request: reduce depreciation on lines [list] from 65% to 20%, restoring approximately $XX,XXX to the recoverable portion of the settlement. Attached: product warranty spec, deed transfer, original install paperwork, listing photos, roof cert, and the depreciation math worksheet.',
      why: 'Depreciation supplements without product spec, age documentation, pre-storm condition evidence, and the math worksheet get ignored. Naming each of these and requesting a specific number with the worksheet visible is what produces a desk-adjuster adjustment instead of a rejection.',
      relatedTermKey: 'Supplement',
    },
    {
      topic: 'Explaining recoverable vs non-recoverable line items to a homeowner reading their settlement',
      poor: 'Some lines you get back, some you do not.',
      better: 'Recoverable lines release after completion; non-recoverable lines do not — your policy and the line type determine which is which.',
      best: 'The carrier\'s estimate marks each line item as either recoverable or non-recoverable. Recoverable means the depreciation on that line is held back now and released to you after the work is completed and documented; non-recoverable means the depreciation on that line is gone regardless. The split is driven by two things: the policy form (an RCV policy makes most lines recoverable; an ACV-only endorsement makes everything non-recoverable) and the carrier\'s categorization rules (consumables like detach-and-reset items are often coded non-recoverable even on RCV policies). The right move is to look at the column on the estimate marked "Non-Recoverable Depreciation" line-by-line, identify the items you expected to be recoverable that are not, and ask the carrier to either justify the categorization or adjust it — usually via supplement with the policy language attached.',
      why: 'Homeowners read the settlement as one number and miss the line-level split that determines how much depreciation they will actually see again. Naming the two columns, the policy driver, the categorization driver, and the supplement path turns the settlement from opaque math into a reviewable, contestable document.',
      relatedTermKey: 'Recoverable Depreciation',
    },
    {
      topic: 'Field-report language documenting age and pre-storm condition for a depreciation defense',
      poor: 'The roof was in good shape before the storm.',
      better: 'Roof age 6 years; pre-storm condition documented as sound; depreciation should reflect remaining useful life.',
      best: 'Roof age and pre-storm condition (basis for depreciation challenge): Install date confirmed via city building-permit record [permit #], dated [Y/Y/YYYY] — 6 years before date of loss. Original product: [brand, line, warranty period]. Pre-storm condition: documented in the [Y/Y/YYYY] real-estate listing photos (attached) and the [Y/Y/YYYY] mortgage-required roof certification (attached) as sound, no curling, no granule loss, no missing or damaged shingles, no exposed deck. Maintenance: gutter cleanings on [dates] (invoices attached); no prior roof claims on file with this carrier (declarations history attached). On a 30-year shingle product with 6 years consumed and pre-storm condition documented as sound, the appropriate depreciation cap is roughly 20% on a straight-line basis. The carrier\'s estimate depreciates at 65%, which would only be appropriate on a roof at or near the end of its service life or in documented deteriorated pre-storm condition — neither of which applies here.',
      why: 'Depreciation defenses without permit-record install date, manufacturer spec, photographic pre-storm evidence, and maintenance history are dismissable. Naming each evidence layer and tying it to a specific depreciation number is what gives the desk adjuster the cover to adjust their estimate.',
      relatedTermKey: 'Depreciation',
    },
  ],
};
