import type { BossBank } from '../types';

// Statutes & Limitations boss — state-specific SoL, proof-of-loss deadlines,
// appraisal clause, EUO, and the "the clock is running" awareness that turns
// a good claim into a procedurally-defaulted one.

export const code07: BossBank = {
  bossId: 'code-07',

  round1: [
    {
      prompt: 'A Statute of Limitations on a property-insurance claim is, broadly:',
      termKey: 'Statute of Limitations (Property Claims)',
      choices: [
        'The state-specific deadline for filing suit on the claim — typically 2 to 5 years from date of loss or denial, sometimes shorter for storm claims',
        'A federal deadline that is the same in every state',
        'A carrier-imposed deadline with no legal force',
        'A 30-day deadline in every jurisdiction',
      ],
    },
    {
      prompt: 'The clock on a Statute of Limitations for a property claim can start running from:',
      termKey: 'Statute of Limitations (Property Claims)',
      choices: [
        'Date of loss, date of denial, or a separate contractual suit-limitations clause — depending on the state and the policy form',
        'Only date of denial',
        'Only date of loss',
        'When the contractor finishes the work',
      ],
    },
    {
      prompt: 'A Proof of Loss is:',
      termKey: 'Proof of Loss',
      choices: [
        'A sworn, written statement of the loss the policyholder submits under most property policies, often required within 60 days of carrier request',
        'An invoice from the contractor',
        'A homeowner\'s photo album',
        'A separate insurance product',
      ],
    },
    {
      prompt: 'A Proof of Loss deadline typically runs from:',
      termKey: 'Proof of Loss',
      choices: [
        'The date the carrier requests it in writing — not the date of the loss itself',
        'The date of loss, automatically',
        'A federal deadline of 90 days for all claims',
        'Whenever the homeowner feels ready',
      ],
    },
    {
      prompt: 'An Appraisal Clause in a property policy is:',
      termKey: 'Appraisal Clause',
      choices: [
        'A dispute-resolution provision that lets either side demand binding appraisal of the amount of loss after coverage is agreed',
        'A clause that lets the carrier appraise the home value',
        'A clause that requires court litigation',
        'A clause about the appraisal of the homeowner\'s creditworthiness',
      ],
    },
    {
      prompt: 'A Reservation of Rights letter from the carrier is best read as:',
      termKey: 'Reservation of Rights',
      choices: [
        'A carrier letter stating it will investigate or pay under a claim while preserving its right to later deny coverage — triggers heightened documentation discipline',
        'A formal apology from the carrier',
        'A guarantee of payment',
        'A regulatory filing with the state',
      ],
    },
    {
      prompt: 'An Examination Under Oath (EUO) is:',
      termKey: 'Examination Under Oath (EUO)',
      choices: [
        'A formal sworn examination of the policyholder the carrier may demand under most policies, with a court reporter and the carrier\'s counsel present',
        'A homeowner\'s deposition in court',
        'An informal phone call with the adjuster',
        'A regulatory step required on every claim',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner had a hail event 4 years ago. They never filed a claim. They are now considering filing because a contractor told them they "have plenty of time."',
      choices: [
        {
          text: 'Pull the state SoL for property claims AND the policy\'s separate suit-limitations clause before encouraging the filing. Many states have a 2- to 5-year SoL; many policies have shorter contractual deadlines (sometimes 1 to 2 years from date of loss or denial); some states have storm-specific shorter windows. At 4 years out, the claim is probably barred in most states and most policy forms, and the contractor who told the homeowner "plenty of time" is either uninformed or chasing a contract that may not survive a coverage review. The honest read: file immediately if any deadline window is still open, but lower the homeowner\'s expectations on the likely outcome and explain why time matters.',
          correct: true,
        },
        {
          text: 'File immediately without checking the deadlines.',
          correct: false,
        },
        {
          text: 'Tell the homeowner it is too late, without checking.',
          correct: false,
        },
      ],
      relatedTermKey: 'Statute of Limitations (Property Claims)',
    },
    {
      prompt:
        'The carrier requests a Proof of Loss in writing. The homeowner sets the letter aside and does not respond. 75 days later, the carrier denies the claim citing failure to submit the POL.',
      choices: [
        {
          text: 'Read the policy\'s POL requirement carefully — most policies allow 60 days from written request, after which the carrier can use the missed POL as a coverage defense. At 75 days, the homeowner is in default but may still have a path: submit a complete POL immediately, request reconsideration on the basis that the POL is now provided and the claim should be evaluated on the merits, and acknowledge the delay candidly. Some carriers will reopen on a properly-submitted POL; others will hold the line. The lesson going forward: diary every dated carrier request the day it arrives.',
          correct: true,
        },
        {
          text: 'Argue the deadline does not apply.',
          correct: false,
        },
        {
          text: 'Sue immediately without submitting a POL.',
          correct: false,
        },
      ],
      relatedTermKey: 'Proof of Loss',
    },
    {
      prompt:
        'The carrier and the contractor agree the loss is covered, but they cannot agree on the amount — carrier says $18,000, contractor scope says $34,000. The policy carries an appraisal clause.',
      choices: [
        {
          text: 'Demand appraisal in writing per the policy procedure. Each side names an appraiser; the two appraisers select an umpire; they jointly determine the amount of loss in a binding process that bypasses litigation. Appraisal is for the AMOUNT of loss only — it does not re-decide coverage. The right candidate appraiser is a credentialed roofing professional who has appraised before, not the contractor on the job (which is a conflict). On a $16K gap, appraisal costs are typically $2-5K split between the parties; the math usually works.',
          correct: true,
        },
        {
          text: 'File a lawsuit immediately.',
          correct: false,
        },
        {
          text: 'Take the carrier\'s $18,000 and write off the rest.',
          correct: false,
        },
      ],
      relatedTermKey: 'Appraisal Clause',
    },
  ],

  round3: [
    {
      topic: 'Explaining the multi-deadline structure of a property claim to a homeowner',
      poor: 'There are deadlines.',
      better: 'A property claim has at least three running clocks: the policy\'s notice-of-loss requirement, any Proof of Loss deadline once requested, and the state Statute of Limitations on suit — each is a different mechanism and each can default the claim.',
      best: 'A property claim is governed by at least three running clocks, sometimes more. (1) Notice of loss — most policies require notice of loss "promptly" or within a stated short window (often 30 days). Delays here become a "late notice" coverage defense in some states. (2) Proof of Loss — once the carrier requests it in writing, most policies give the policyholder 60 days to submit a sworn, complete POL. Missing this deadline is a coverage defense in most states. (3) Statute of Limitations on suit — state-specific, typically 2 to 5 years, sometimes shorter for storm-specific claims, sometimes contractually shortened in the policy itself to 1 to 2 years. The clock can start from date of loss, date of denial, or a hybrid depending on the state. The right discipline: diary each dated carrier letter the day it arrives, set internal reminders at 30/60/90 days, and treat every deadline as enforceable until you have specifically confirmed otherwise. Telling a homeowner they "have plenty of time" without pulling the policy and the state rule is malpractice-adjacent on a contractor\'s side and self-sabotage on the homeowner\'s side.',
      why: 'Owners assume claims run on calendar time the way bills do; carriers and policies enforce procedural deadlines aggressively. Naming the three-clock structure, the procedural defenses each missed deadline creates, and the diary discipline is what keeps claims from defaulting on calendar mechanics instead of merits.',
      relatedTermKey: 'Statute of Limitations (Property Claims)',
    },
    {
      topic: 'Documenting a sworn Proof of Loss correctly',
      poor: 'Proof of Loss attached.',
      better: 'POL submitted on the carrier\'s form, signed and notarized, with the scope and cause-of-loss documentation incorporated by reference.',
      best: 'Submission of Sworn Proof of Loss — Claim # [XXXX], Insured [Name], Loss Date [Y/Y/YYYY]. Per the carrier\'s [date] written request, this Sworn Proof of Loss is submitted within the [policy-defined window, typically 60 days] from the request date. Form: the carrier\'s standard POL form, completed in full and signed before a notary on [date]. Attachments incorporated by reference into the POL: (1) statement of loss with itemized scope (RCV and ACV with line-item depreciation breakdown); (2) cause of loss narrative with NOAA storm report; (3) inspection report with slope-by-slope evidence; (4) photo documentation log (44 metadata-intact images, separately delivered); (5) declarations page and policy form for coverage cross-reference; (6) list of all damaged personal property if covered (separate inventory). Statements made on the POL are sworn; we have made no statements we do not believe to be true. We acknowledge that material misstatements on a POL are grounds for denial and may constitute insurance fraud; we have reviewed the POL line-by-line with the insured before signature. Request: carrier acknowledge receipt within 10 business days and proceed with coverage evaluation on the merits.',
      why: 'POLs without notarization, complete attachments, sworn-statement acknowledgment, and a procedural acknowledgment request are routinely treated as incomplete and rejected. Naming each layer is what makes the POL stick as a satisfied condition precedent.',
      relatedTermKey: 'Proof of Loss',
    },
    {
      topic: 'Explaining a Reservation of Rights letter to a homeowner',
      poor: 'The carrier is reserving rights.',
      better: 'A Reservation of Rights letter means the carrier will pay or investigate while preserving the right to deny later; treat it as a yellow flag, not a green light.',
      best: 'A Reservation of Rights (ROR) letter is a carrier communication that says, in effect: "We are investigating or paying under this claim, but we are not waiving any of our coverage defenses by doing so. We reserve the right to later deny based on policy provisions we are still evaluating." It is not a denial; it is also not an approval. It is the carrier flagging the file as one where coverage is in question and signaling that anything we say or do may be used in a later denial. Practical consequences: (1) Documentation discipline goes up — anything submitted needs to be defensible on a re-read months later. (2) Recorded statements and EUOs are higher-stakes — confer with counsel before sitting for one if the ROR is broad. (3) Settlement payments received under ROR are not waivers of the right to deny; they can be subject to repayment if coverage is later denied. (4) Cash flow and decision pace need to account for the contingency. The right reaction: treat the ROR as a heightened-discipline trigger, not a panic event, and consider engaging counsel or a public adjuster if the ROR cites multiple coverage issues.',
      why: 'ROR letters are widely misread as either denials (causing premature panic) or as approvals (causing dangerous casualness). Naming what an ROR actually is, the practical consequences, and the appropriate disciplined response converts a confusing letter into an actionable signal.',
      relatedTermKey: 'Reservation of Rights',
    },
    {
      topic: 'Senior-PM language on demanding appraisal vs filing suit',
      poor: 'Sue them.',
      better: 'On a coverage-agreed amount-disputed claim, appraisal is faster, cheaper, and binding on amount; on a coverage-disputed claim, appraisal does not apply and suit may be the only path.',
      best: 'Dispute-pathway framework on a contested property claim. (1) If the dispute is on the AMOUNT of loss only (coverage is agreed, but the dollar number is in dispute): appraisal is almost always the right path if the policy carries the appraisal clause. Each side names an appraiser, the two appraisers select an umpire, they jointly determine the amount, and the award is binding. Costs typically run $2K to $8K per side; the process takes 60 to 180 days; outcomes are usually closer to the contractor\'s number than the carrier\'s. (2) If the dispute is on COVERAGE (cause of loss, exclusion, late notice, missed POL): appraisal does not apply — appraisers cannot decide coverage. The dispute paths are written supplements, complaints to the state Department of Insurance, mediation if available, and ultimately litigation under the state SoL. (3) If the policy does not carry an appraisal clause (some commercial forms do not), the amount-only dispute also defaults to litigation or settlement. (4) Demand letters: in any of these paths, a written demand for appraisal, mediation, or DOI review is a precondition for the next step in most states; do not skip the formal step. The decision tree from here: read the policy form, identify which type of dispute this actually is, and pick the path that matches.',
      why: 'Contractors and homeowners default to "sue" as the dispute response and either over-spend on litigation or skip cheaper enforcement paths. Naming the amount-vs-coverage diagnostic, the appraisal-vs-litigation map, and the procedural preconditions is the senior-PM deliverable that picks the right path for the actual dispute type.',
      relatedTermKey: 'Appraisal Clause',
    },
  ],
};
