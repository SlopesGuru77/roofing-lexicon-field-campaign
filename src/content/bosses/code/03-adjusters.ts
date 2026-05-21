import type { BossBank } from '../types';

// Adjusters boss — Field vs Desk vs Independent vs Public, who reports to
// whom, and the documentation discipline that turns a "good inspection" into
// a coverage outcome.

export const code03: BossBank = {
  bossId: 'code-03',

  round1: [
    {
      prompt: 'A Field Adjuster is the adjuster who:',
      termKey: 'Field Adjuster',
      choices: [
        'Physically inspects the roof and writes the initial damage scope',
        'Sits at a desk and never sees the roof',
        'Represents the homeowner against the carrier',
        'Issues the final settlement check',
      ],
    },
    {
      prompt: 'A Desk Adjuster\'s primary role is:',
      termKey: 'Desk Adjuster',
      choices: [
        'Handling the file remotely from photos, estimate, and notes — making the coverage and payment decisions on most non-catastrophe claims',
        'Climbing roofs for borderline claims',
        'Representing the policyholder',
        'Acting as the carrier\'s legal counsel',
      ],
    },
    {
      prompt: 'An Independent Adjuster (IA) is best described as:',
      termKey: 'Independent Adjuster',
      choices: [
        'An adjuster contracted by the carrier (not a direct employee) to handle claims, often during catastrophe surges, with the carrier\'s authority on the inspection',
        'An adjuster employed by the homeowner',
        'A neutral third party with no allegiance',
        'A regulator who oversees both sides',
      ],
    },
    {
      prompt: 'A Public Adjuster represents:',
      termKey: 'Public Adjuster',
      choices: [
        'The policyholder — they negotiate the claim on the homeowner\'s behalf, are state-licensed, and earn a fee based on settlement',
        'The carrier',
        'The state insurance department',
        'The contractor performing the repair',
      ],
    },
    {
      prompt: 'On a non-catastrophe shingle claim, the typical decision-maker on coverage is:',
      termKey: 'Desk Adjuster',
      choices: [
        'The desk adjuster, working from the field adjuster\'s photos and report',
        'The field adjuster acting alone',
        'The carrier\'s CEO',
        'A neutral state engineer',
      ],
    },
    {
      prompt: 'A field adjuster\'s photos and report are best understood as:',
      termKey: 'Photo Documentation Standard',
      choices: [
        'The evidence base on which the desk adjuster makes the coverage call — quality and completeness drive the outcome',
        'A formality with no impact on the claim',
        'Owned by the homeowner, not the carrier',
        'Confidential and unavailable for review',
      ],
    },
    {
      prompt: 'A roofing contractor who negotiates claim coverage with the carrier on behalf of the homeowner without holding a public-adjuster license is, in most states:',
      termKey: 'Restoration Contractor vs Public Adjuster',
      choices: [
        'Engaging in unauthorized public adjusting — a regulatory violation that can void contracts and trigger licensing actions',
        'Performing standard contractor work',
        'Acting as a free legal advisor',
        'Allowed nationwide without restriction',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A field adjuster spends 12 minutes on the roof, takes 8 photos, and writes a one-paragraph scope. The desk adjuster denies the claim based on "insufficient evidence of functional damage."',
      choices: [
        {
          text: 'The denial is on the documentation, not the damage. Request a re-inspection on the basis that the original field inspection did not meet a documented inspection standard (slope-by-slope test squares, impact counts per square, tactile-and-visual confirmation, indirect-impact evidence from soft metals). Submit the contractor\'s own slope-by-slope inspection report with the request. Most desk adjusters will grant a re-inspection when the original field documentation is visibly thin; the denial was on an evidence gap, and the right move is to close the gap.',
          correct: true,
        },
        {
          text: 'Accept the denial; field adjusters are final.',
          correct: false,
        },
        {
          text: 'File a complaint with the state insurance department first thing.',
          correct: false,
        },
      ],
      relatedTermKey: 'Field Adjuster',
    },
    {
      prompt:
        'A homeowner is offered "free" representation by a public adjuster on a $40,000 claim. The PA\'s fee is 25% of the settlement. The homeowner asks whether to sign.',
      choices: [
        {
          text: 'Walk through the math and the state context before they sign. A 25% fee on a $40,000 settlement is $10,000 — the PA must add at least $10,000 of settlement value beyond what the homeowner could negotiate alone to be a net positive. PA fees are capped in some states (often 10-20%, sometimes lower in catastrophe declarations), so verify the proposed fee is even legal in this state. The honest analysis: PAs add value on complex contested claims with poor carrier behavior; they may be net negative on a straightforward, well-documented claim the homeowner could handle alone or with a skilled contractor.',
          correct: true,
        },
        {
          text: 'Sign immediately — the representation is "free."',
          correct: false,
        },
        {
          text: 'Refuse all PAs; they are uniformly bad.',
          correct: false,
        },
      ],
      relatedTermKey: 'Public Adjuster',
    },
    {
      prompt:
        'A roofing contractor in a state that licenses public adjusters tells the homeowner they will "handle the entire claim with the carrier" as part of their service.',
      choices: [
        {
          text: 'The contractor is offering to perform public adjusting without the license. In states that license PAs separately, this is unauthorized practice, can void the contract under state regulations, and exposes the contractor to fines and license revocation. The right scope for a restoration contractor is: discuss the physical scope of damage with the carrier, document and supplement the line items of work, and refer the homeowner to a licensed PA or an attorney for actual claim negotiation. Crossing the line is the most-cited storm-market violation; train estimators on the boundary.',
          correct: true,
        },
        {
          text: 'It is fine; contractors deal with carriers all the time.',
          correct: false,
        },
        {
          text: 'Charge the homeowner a separate fee for the claim handling.',
          correct: false,
        },
      ],
      relatedTermKey: 'Restoration Contractor vs Public Adjuster',
    },
  ],

  round3: [
    {
      topic: 'Explaining the four-adjuster workflow to a homeowner filing their first claim',
      poor: 'There are different kinds of adjusters.',
      better: 'A field adjuster inspects, a desk adjuster decides, an independent adjuster may stand in for the carrier during surges, and a public adjuster represents you for a fee.',
      best: 'A property claim typically passes through up to four adjuster roles. (1) Field Adjuster — the person who climbs the roof, takes photos, and writes the initial damage scope. May be the carrier\'s direct employee or an Independent contracted by the carrier. (2) Desk Adjuster — the person who decides coverage from the field adjuster\'s photos and report. The actual decision-maker on most non-catastrophe claims. You will probably never meet them. (3) Independent Adjuster — a contracted adjuster the carrier brings in during catastrophe surges; functionally a field adjuster with the carrier\'s authority. (4) Public Adjuster — separate from the carrier\'s side entirely; you hire them, they negotiate on your behalf, they earn a fee from the settlement. The first three work for the carrier; only the public adjuster works for you. Knowing who is who on the file is the first move on any contested claim.',
      why: 'Owners default to "the adjuster" as a single role and miss that the person they spoke with on the roof is not the one deciding coverage. Naming the four roles, the chain of decision-making, and the side each works for is what lets the homeowner address the right person at the right time.',
      relatedTermKey: 'Adjuster',
    },
    {
      topic: 'Documenting the contractor-vs-adjuster boundary in a state that licenses public adjusters',
      poor: 'We will help you with the claim.',
      better: 'We will document the damage and discuss the physical scope with the carrier; for claim negotiation, you may want a licensed public adjuster or attorney.',
      best: 'Our role on this project — restoration contractor scope: We will perform a thorough damage inspection, document the findings to a defensible standard (slope-by-slope photo log, tactile confirmations, indirect-impact evidence, NOAA storm correlation), generate the estimate and scope of loss, and discuss the physical scope and any line-item supplements with the carrier\'s field and desk adjuster. We will not — and under [state]\'s public-adjuster licensing rules cannot — negotiate the claim itself, advise you on coverage decisions, advocate for specific settlement amounts, or represent you in any dispute with the carrier. If the claim becomes contested at the coverage or settlement level (denial, depreciation dispute, scope of loss dispute that cannot be resolved at the line-item level), the right next call is a licensed public adjuster or a property-claim attorney, both of whom are separately retained. We will refer; we will not refer-to-and-also-charge-for that work. This boundary is the licensing line in [state]; it protects you and us both.',
      why: 'The contractor-vs-PA boundary is the most-cited storm-market regulatory violation and the most common reason restoration contracts are voided after the fact. Naming what the contractor will do, what the contractor will not do, the licensing-rule basis for the line, and the referral path is what makes the engagement defensible to both the homeowner and the state regulator.',
      relatedTermKey: 'Restoration Contractor vs Public Adjuster',
    },
    {
      topic: 'Explaining why a re-inspection is the right next move after a thin-documentation denial',
      poor: 'The adjuster missed it.',
      better: 'The original field inspection did not meet a documented standard; a re-inspection with proper methodology is the proper response.',
      best: 'The denial cites "insufficient evidence of functional damage." The right read of that is that the desk adjuster decided on the field adjuster\'s documentation, and the field adjuster\'s documentation did not include the evidence that would have changed the call: slope-by-slope test squares, impact counts per 100 square feet on each slope, tactile-and-visual confirmation of mat exposure, indirect-impact evidence from soft metals (AC fin denting, soft-metal flashings, gutters), NOAA storm correlation, and pre-storm condition documentation. None of that is in the file. The right next move is a re-inspection request to the desk adjuster, citing the original inspection\'s gaps and offering the contractor\'s slope-by-slope inspection report as the evidence base. Re-inspections on visibly thin original documentation are routinely granted; the denial was on an evidence gap, and the cure is to close the gap.',
      why: 'Owners read "denied" as a final answer and either give up or escalate to litigation. Naming the diagnostic (the denial is on the documentation), the standard the original inspection missed, and the procedural cure (re-inspection request with the gap-closing report) keeps the claim on the rails and out of court.',
      relatedTermKey: 'Photo Documentation Standard',
    },
    {
      topic: 'Senior-PM cover letter accompanying a contractor\'s supplement on a desk-adjuster denial',
      poor: 'We disagree with the denial.',
      better: 'Attached is our supplement with photos, scope, and storm correlation; we request a re-inspection or written response on each line item.',
      best: 'Re: Claim # [XXXX], Insured [Name], Loss Date [Y/Y/YYYY], Property [address]. We are writing in response to the [date] coverage decision on this claim. As the restoration contractor on file (not as a public adjuster — that role is separately retained if needed), we are submitting documentation of the physical damage scope for the desk adjuster\'s review. Attached: (1) slope-by-slope inspection report with test-square impact counts, tactile-and-visual confirmation, and photo log (44 photos, geotagged and time-stamped); (2) NOAA SPC storm report for the [Y/Y/YYYY] event with peak stone size and wind direction; (3) indirect-impact documentation (AC condenser fin denting, soft-metal flashing impacts, gutter spatter); (4) pre-storm condition evidence (listing photos from [Y/Y/YYYY], mortgage roof certification from [Y/Y/YYYY]); (5) line-item scope with code-required upgrades broken out. We respectfully request either re-inspection with this documentation in hand or a written response on each disputed line item identifying the specific evidentiary basis for the carrier\'s position. We will copy the homeowner on this correspondence and remain available for an on-site re-inspection at the desk adjuster\'s convenience. Sincerely, [PM name], [credentials], [contractor], [license #].',
      why: 'A vague disagreement letter goes in a desk pile. A structured supplement with named attachments, a re-inspection request, and a respectful written-response demand goes on the active queue. Naming the contractor-not-PA scope, the evidence layers, and the specific procedural ask is what gets a desk adjuster to actually re-engage with the file.',
      relatedTermKey: 'Engineer Rebuttal',
    },
  ],
};
