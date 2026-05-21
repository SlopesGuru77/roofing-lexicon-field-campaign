import type { BossBank } from '../types';

// Claim Fundamentals boss — Cause of Loss, ACV vs RCV, deductible structure,
// the four-stage carrier workflow (FNOL → field inspect → desk decide → pay).
// First-encounter content for the Code zone; nothing forensic yet.

export const code01: BossBank = {
  bossId: 'code-01',

  round1: [
    {
      prompt: 'Cause of Loss on a property claim is best described as:',
      termKey: 'Cause of Loss',
      choices: [
        'The peril or event that produced the damage — establishing it is central to whether coverage applies',
        'The amount the carrier ultimately pays',
        'The condition of the roof before the storm',
        'The deductible chosen by the homeowner',
      ],
    },
    {
      prompt: 'Replacement Cost Value (RCV) is:',
      termKey: 'Replacement Cost Value (RCV)',
      choices: [
        'The cost to replace damaged property with new, like-kind materials, with no deduction for age or wear',
        'The price the original roof was sold at',
        'Half of the policy limit, by convention',
        'The contractor\'s profit on the job',
      ],
    },
    {
      prompt: 'Actual Cash Value (ACV) on a roof claim is:',
      termKey: 'Actual Cash Value (ACV)',
      choices: [
        'Replacement cost minus depreciation — the depreciated value of the property as it sits',
        'The same as RCV on every policy',
        'A market appraisal of the home',
        'The contractor\'s bid minus 20%',
      ],
    },
    {
      prompt: 'Recoverable Depreciation is:',
      termKey: 'Recoverable Depreciation',
      choices: [
        'Depreciation withheld on an ACV settlement that the policyholder can recover after repairs are completed and proof is submitted',
        'Depreciation that has expired and cannot be claimed',
        'A line item that disappears when the deductible is paid',
        'A discount the contractor offers the homeowner',
      ],
    },
    {
      prompt: 'A 2% wind/hail deductible on a $400,000 dwelling-coverage policy yields an out-of-pocket of:',
      termKey: 'Deductible',
      choices: [
        '$8,000 — wind/hail percentage deductibles can be substantially larger than the all-perils deductible',
        '$2,000 — same as the standard deductible',
        '$200 — fixed regardless of policy size',
        'Nothing if the loss is over $50,000',
      ],
    },
    {
      prompt: 'A "named-perils" homeowners policy covers:',
      termKey: 'Peril',
      choices: [
        'Only the perils specifically listed in the policy (e.g., wind, hail, fire); anything not listed is excluded',
        'Everything, with no exclusions',
        'Whatever the carrier chooses to cover at the time of loss',
        'Only fire, by federal statute',
      ],
    },
    {
      prompt: 'A Scope of Loss is:',
      termKey: 'Scope of Loss',
      choices: [
        'The itemized list of damaged components and the work required to repair them — the basis of the claim estimate',
        'The carrier\'s settlement check',
        'A diagram of the property\'s lot lines',
        'The contractor\'s marketing brochure',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner with a $1,000 all-perils deductible and a separate 2% wind/hail deductible has a hail loss with a $24,000 RCV estimate. The dwelling coverage is $300,000. The homeowner believes their out-of-pocket is $1,000.',
      choices: [
        {
          text: 'Walk the homeowner through the math before quoting. The wind/hail deductible applies because the cause of loss is hail: 2% × $300,000 = $6,000 out-of-pocket, not $1,000. The all-perils $1,000 is irrelevant on this claim. The contractor who lets the homeowner discover the $5,000 surprise on the settlement check has a credibility problem; the one who explains it upfront and adjusts the financing conversation is the one the homeowner refers to neighbors.',
          correct: true,
        },
        {
          text: 'Don\'t mention the wind/hail deductible — the carrier will figure it out.',
          correct: false,
        },
        {
          text: 'Offer to "absorb" the difference by inflating the scope; the carrier will pay regardless.',
          correct: false,
        },
      ],
      relatedTermKey: 'Deductible',
    },
    {
      prompt:
        'A carrier issues an ACV settlement of $18,000 on a $26,000 RCV scope, holding $8,000 in recoverable depreciation. The contractor wants to invoice for the full RCV after completing the work; the homeowner thinks they get to keep the $8,000.',
      choices: [
        {
          text: 'Neither side is right yet. Complete the work, submit the final invoice and lien waiver, and submit proof-of-completion documentation to the carrier per the policy procedure. The carrier then releases the recoverable depreciation to the homeowner, who pays the contractor the balance. The $8,000 is not the homeowner\'s windfall; it is the bridge that closes the RCV scope.',
          correct: true,
        },
        {
          text: 'The homeowner pockets the $8,000 and the contractor writes off the difference.',
          correct: false,
        },
        {
          text: 'The contractor takes the $18,000 ACV and walks away from the rest of the scope.',
          correct: false,
        },
      ],
      relatedTermKey: 'Recoverable Depreciation',
    },
    {
      prompt:
        'A storm-restoration contractor offers to "rebate" or "waive" the homeowner\'s $5,000 wind/hail deductible if they sign the contract today. The homeowner is interested.',
      choices: [
        {
          text: 'Decline immediately and explain why. Rebating or absorbing the deductible is a felony or a serious civil violation in most storm-prone states because it is insurance fraud against the carrier — the deductible is what aligns the homeowner with the insurance bargain. A contractor offering this is signaling either ignorance of the law or willingness to break it, both of which are reasons to walk. Honest contractors discuss financing options (loans, payment plans), not deductible erasure.',
          correct: true,
        },
        {
          text: 'Take the offer — it is between the contractor and the carrier.',
          correct: false,
        },
        {
          text: 'Take the offer but don\'t tell the carrier.',
          correct: false,
        },
      ],
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
  ],

  round3: [
    {
      topic: 'Explaining ACV vs RCV to a homeowner who just received their first settlement check',
      poor: 'They short-paid you.',
      better: 'The carrier paid ACV first and is holding the depreciation back until the work is done; it is not a denial.',
      best: 'A roof claim under an RCV policy typically settles in two checks. The first check is ACV — replacement cost minus depreciation for the age and wear of the existing roof. The second check is the recoverable depreciation, released after the repair is completed, invoiced, and documented to the carrier per the policy procedure. The first check looking small is normal and expected; it is not a denial, it is not a final number, and it does not mean the contractor has to absorb the gap. Diary the proof-of-completion step the day the project closes; the second check does not release itself.',
      why: 'Owners read the ACV check as the final number and either panic or assume the contractor will eat the difference. Naming the two-check structure, the depreciation-release step, and the diary discipline reframes the check as a milestone, not a denial.',
      relatedTermKey: 'Recoverable Depreciation',
    },
    {
      topic: 'Explaining a percentage wind/hail deductible to a homeowner who just discovered theirs',
      poor: 'Your deductible is bigger than you thought.',
      better: 'Storm-prone states allow carriers to apply a separate percentage deductible to wind/hail or named-storm losses, which is calculated against the dwelling coverage, not the loss amount.',
      best: 'Many homeowner policies in storm-prone states carry two deductibles: an all-perils deductible (often $500 to $2,500) and a separate wind/hail or named-storm deductible calculated as a percentage of the dwelling coverage (commonly 1% to 5%). On a $300,000 dwelling coverage, a 2% wind/hail deductible is $6,000 out-of-pocket on any hail or wind claim, regardless of the all-perils figure on the declarations page. The percentage deductible is typically buried in the policy form, not displayed on the simple summary. The right time to discuss it is before the contract is signed, not when the carrier issues the settlement; the conversation is about financing options for the gap, not whether the deductible "should" apply.',
      why: 'Percentage deductibles surprise homeowners on the settlement check and damage the contractor relationship if they were not explained upfront. Naming the two-deductible structure, the dwelling-coverage math, and the financing conversation moves the contractor from "bad news messenger" to "advisor who saw it coming."',
      relatedTermKey: 'Deductible',
    },
    {
      topic: 'Documenting Cause of Loss in a hail claim narrative',
      poor: 'Caused by hail.',
      better: 'Hail event of [date] caused functional damage to the asphalt shingle field; cause of loss is hail per attached NOAA storm report.',
      best: 'Cause of Loss: hail impact event of [Y/Y/YYYY], peak reported stone size approximately [Z]" per NOAA SPC storm report (attached), wind direction during the event [bearing], confirmed by AC fin denting at the rooftop condenser (photos #14–18, dent diameter ~ [W]", consistent with the reported stone size via standard dent-multiplier). Damage pattern on the roof: localized impact bruising and granule loss with mat exposure, clustered on the windward [north and west] slopes, consistent with the storm wind direction. South and east slopes intact, consistent with directional clustering. No pre-event documentation indicates the damage existed before [Y/Y/YYYY]. Cause of Loss is hail; alternative causes (foot traffic, manufacturing defect, age weathering) are excluded by the directional clustering, the mat-exposure pattern, and the temporal correlation with the documented storm event.',
      why: 'A "caused by hail" sentence is deniable. Naming the storm event with NOAA reference, the indirect-impact evidence (AC fin denting), the damage pattern, and the explicit elimination of alternative causes is what makes the Cause of Loss survive the desk adjuster\'s review.',
      relatedTermKey: 'Cause of Loss',
    },
    {
      topic: 'Field-report language for an RCV scope that the carrier has tried to short to ACV-only',
      poor: 'They are short-paying the claim.',
      better: 'Policy is RCV; carrier issued ACV with depreciation held back; recoverable per policy after completion.',
      best: 'Coverage form review: declarations page confirms Coverage A (dwelling) is written on a Replacement Cost basis (not ACV-only). Settlement statement received [date] reflects ACV of $XX,XXX on an RCV scope of $YY,YYY, with $ZZ,ZZZ held in depreciation. Of that, $AA,AAA is identified by the carrier as recoverable upon proof of completion (line items: [list]) and $BB,BBB is identified as non-recoverable (line items: [list, with note on which lines and why]). Action items: (1) complete repairs to the approved scope; (2) submit final invoice, lien waiver, and dated completion photos via the carrier portal within the policy timeframe; (3) escalate the non-recoverable line items only if they are mis-categorized (i.e., the policy treats them as recoverable but the carrier has flagged them otherwise). Do not treat the ACV check as a final number or as a denial; it is the first half of a two-step payment structure.',
      why: 'ACV-vs-RCV confusion is the most common claim-stage breakdown between contractor, homeowner, and carrier. Naming the form on the dec page, the recoverable/non-recoverable split with line-item visibility, the completion-and-proof steps, and the escalation path is the senior-PM deliverable that converts "we got short-paid" into "we have a defensible two-step plan."',
      relatedTermKey: 'Replacement Cost Value (RCV)',
    },
  ],
};
