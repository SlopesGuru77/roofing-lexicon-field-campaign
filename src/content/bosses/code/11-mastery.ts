import type { BossBank } from '../types';

// Code Mastery Exam — final exam across the Code zone. 10 R1 + 5 R2 + 5 R3,
// 90% pass enforced by BossRunner via card.isMastery + LEVELS.PASS. Draws
// across bosses 01-10: claim fundamentals, depreciation, adjusters, engineer
// reports, chain of custody, building codes, statutes, PA vs restoration
// contractor, hail forensics, storm-restoration compliance marketing.

export const code11Mastery: BossBank = {
  bossId: 'code-11-mastery',

  round1: [
    {
      prompt: 'On a $400,000 dwelling-coverage policy with a 2% wind/hail deductible, the homeowner\'s out-of-pocket on any hail claim is:',
      termKey: 'Deductible',
      choices: [
        '$8,000 — wind/hail percentage deductibles are calculated against the dwelling coverage, not the loss amount',
        '$400 — a flat 1% of the standard deductible',
        '$2,000 — same as the all-perils deductible',
        '$0 — wind/hail is fully covered without deductible',
      ],
    },
    {
      prompt: 'An ACV-only roof endorsement on an otherwise RCV policy means that:',
      termKey: 'Non-Recoverable Depreciation',
      choices: [
        'Depreciation on a covered roof loss is paid as ACV and never repaid, regardless of whether the work is completed',
        'The homeowner gets RCV anyway',
        'The carrier waives all depreciation',
        'The roof is uninsured',
      ],
    },
    {
      prompt: 'On a non-catastrophe shingle claim, the actual coverage decision is typically made by:',
      termKey: 'Desk Adjuster',
      choices: [
        'The desk adjuster, working from the field adjuster\'s photos and report',
        'The field adjuster acting alone on the roof',
        'The carrier\'s CEO',
        'A neutral state engineer',
      ],
    },
    {
      prompt: 'A carrier-retained engineer\'s report on a contested claim is properly understood as:',
      termKey: 'Engineer Rebuttal',
      choices: [
        'A retained opinion submitted by the carrier; one input to the coverage decision, subject to rebuttal with proper documentation',
        'A neutral, binding government finding',
        'A final administrative ruling',
        'A document the homeowner is not allowed to see',
      ],
    },
    {
      prompt: 'A test cut taken without prior written carrier permission is:',
      termKey: 'Test Cut Protocol',
      choices: [
        'Vulnerable to procedural challenge — the carrier can argue the destructive sample was unauthorized and exclude or discount the finding',
        'Always admissible regardless',
        'Better evidence than a permitted cut',
        'Required by law',
      ],
    },
    {
      prompt: 'The controlling code edition on a roof repair in a city that has adopted the 2018 IRC is:',
      termKey: 'IRC (International Residential Code)',
      choices: [
        'The 2018 IRC as adopted, plus any local amendments — not the most recent edition published',
        'The most recent edition published regardless',
        'Whichever edition the contractor prefers',
        'The first edition ever published',
      ],
    },
    {
      prompt: 'A Statute of Limitations on a property-insurance claim is typically:',
      termKey: 'Statute of Limitations (Property Claims)',
      choices: [
        'State-specific — commonly 2 to 5 years from date of loss or denial, sometimes shorter for storm claims or by the policy\'s own suit-limitations clause',
        'Always 30 days from date of loss',
        'A federal deadline that is the same in every state',
        'Unlimited; claims never expire',
      ],
    },
    {
      prompt: 'A contractor in a state that licenses public adjusters separately who tells the homeowner "I will handle the entire claim with the carrier" is:',
      termKey: 'Restoration Contractor vs Public Adjuster',
      choices: [
        'Probably committing unauthorized public adjusting — the sentence itself can be cited as evidence of the violation',
        'Acting within standard contractor scope',
        'Providing a federally-protected service',
        'Acting as a free legal advisor',
      ],
    },
    {
      prompt: 'AC condenser fin denting on a roof at the property is, forensically:',
      termKey: 'AC Coil-Fin Denting',
      choices: [
        'Reliable indirect evidence of the largest hailstone diameter that fell at that specific location — often more probative than radar-derived storm-cell maxima',
        'Cosmetic only, with no forensic value',
        'Always caused by debris, not hail',
        'Inadmissible in any claim dispute',
      ],
    },
    {
      prompt: 'A storm-restoration contractor who offers to "rebate" or "waive" the homeowner\'s deductible in most storm-prone states is:',
      termKey: 'Storm-Restoration Solicitation Laws',
      choices: [
        'Proposing insurance fraud against the carrier — typically a felony in storm-prone states and a contractor licensing offense regardless',
        'Making a routine sales offer',
        'Acting on a federally-protected discount',
        'Providing legitimate financing',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner with a $1,000 all-perils deductible and a separate 2% wind/hail deductible on $300,000 dwelling coverage files a $24,000 RCV hail claim. The contractor promised them "minimal out-of-pocket" without checking the policy.',
      choices: [
        {
          text: 'Sit down with the policy and the math before any work starts. The wind/hail deductible applies because the cause of loss is hail: 2% × $300,000 = $6,000 out-of-pocket. The all-perils $1,000 is irrelevant on this claim. The contractor\'s "minimal out-of-pocket" pitch was wrong and needs to be corrected in writing now — not when the settlement check arrives and the homeowner discovers the surprise. Pull the dec page, walk the math through with the homeowner, and adjust the financing conversation. Apologize for the original framing; the recovery is honesty, not doubling down.',
          correct: true,
        },
        {
          text: 'Don\'t mention the wind/hail deductible — the carrier will handle it.',
          correct: false,
        },
        {
          text: 'Quietly rebate the difference to keep the original promise.',
          correct: false,
        },
      ],
      relatedTermKey: 'Deductible',
    },
    {
      prompt:
        'A 6-year-old asphalt shingle roof under a 30-year product warranty receives a carrier estimate depreciating shingles at 65%.',
      choices: [
        {
          text: 'File a supplement: cite the product\'s 30-year rated life, the documented pre-storm condition (listing photos, mortgage roof cert, gutter-cleaning invoices), and the appropriate age-weighted depreciation calculation (roughly 20% on a straight-line basis for a 6-year-old, 30-year product in good documented condition). Attach the math worksheet, the product warranty spec, and the pre-storm condition documentation. Desk adjusters have discretion to adjust depreciation when challenged with structured documentation.',
          correct: true,
        },
        {
          text: 'Accept the 65%; depreciation is non-negotiable once issued.',
          correct: false,
        },
        {
          text: 'Tell the homeowner the carrier committed fraud.',
          correct: false,
        },
      ],
      relatedTermKey: 'Depreciation',
    },
    {
      prompt:
        'A carrier engineer\'s report claims "no functional damage observed" on a roof the contractor inspected with slope-by-slope test squares showing 8-12 impacts per 100 sq ft on the windward slopes. The engineer report contains no test-square methodology, no slope-specific counts, and no NOAA storm overlay.',
      choices: [
        {
          text: 'Build a structured rebuttal that identifies the documented methodology gap in the engineer report (no test squares, no slope counts, no storm overlay, no indirect-impact review) and submits the contractor\'s slope-by-slope inspection report with NOAA correlation, indirect-impact evidence, and loupe-confirmed mat fracture documentation. Request either re-inspection with both reports in hand or a written response on each disputed finding. Engineers are not infallible and methodology-gap rebuttals are routinely accepted.',
          correct: true,
        },
        {
          text: 'Accept the engineer\'s finding; engineers are always final.',
          correct: false,
        },
        {
          text: 'Attack the engineer\'s credentials personally in writing.',
          correct: false,
        },
      ],
      relatedTermKey: 'Engineer Rebuttal',
    },
    {
      prompt:
        'A homeowner in a cold-climate jurisdiction is having their hail-damaged roof replaced. The existing roof has no ice-and-water shield at the eaves; the locally-adopted IRC edition requires it. The carrier estimate omits the ice-and-water shield.',
      choices: [
        {
          text: 'File an Ordinance or Law (O&L) supplement: confirm the adopted IRC edition with the AHJ in writing, cite the specific code section, document the dimensional requirement on this property, and quote the upgrade scope. The original roof predates the current code; the repair triggers the code requirement; O&L coverage on the policy is the mechanism that closes the gap up to the sublimit. Attach the AHJ confirmation, the code section, and the upgrade scope.',
          correct: true,
        },
        {
          text: 'Skip the ice-and-water shield to match existing.',
          correct: false,
        },
        {
          text: 'Tell the homeowner to pay the entire upgrade out of pocket.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ordinance or Law Coverage',
    },
    {
      prompt:
        'A storm-restoration sales team is preparing to door-knock the morning after a declared hail event in a state with post-storm registration requirements, mandatory rescission notices on contracts, and felony exposure for deductible rebates.',
      choices: [
        {
          text: 'Complete post-storm registration with the AG\'s office BEFORE the team hits the street. Verify the contractor license is current; print registration confirmation for crew packets; update the contract template to include the conspicuous statutory rescission notice; brief the crew on the deductible-rebate prohibition, the contractor-vs-PA boundary, and the no-recorded-statements rule. Door-knocking without completing the registration is the easiest enforcement case the AG can build on every declared-storm event.',
          correct: true,
        },
        {
          text: 'Knock first, register later if there are sales.',
          correct: false,
        },
        {
          text: 'Skip the registration; nobody checks.',
          correct: false,
        },
      ],
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
  ],

  round3: [
    {
      topic: 'Explaining the four-clock structure of a property claim to a homeowner at the start of the file',
      poor: 'There are some deadlines.',
      better: 'A property claim has at least three running clocks: notice of loss, Proof of Loss once requested, and the state Statute of Limitations on suit; the carrier and policy enforce each one and missing any is a coverage defense.',
      best: 'A property claim is governed by three running clocks and a fourth procedural trigger, and each can default the claim independently. (1) Notice of loss — most policies require notice "promptly" or within a stated short window. Delays here become a late-notice coverage defense. (2) Proof of Loss — once the carrier requests it in writing, the policy typically gives 60 days. A missed POL is a coverage defense in most states. (3) Statute of Limitations — state-specific, commonly 2-5 years, sometimes shorter for storm claims, sometimes contractually shortened in the policy itself to 1-2 years. The clock can start from date of loss, date of denial, or a hybrid. (4) Reservation of Rights — a letter that shifts the file into heightened-documentation mode and signals the carrier may later deny; a critical procedural trigger even if not a deadline per se. The discipline: diary every dated carrier letter the day it arrives, set internal 30/60/90 reminders, treat every deadline as enforceable, and engage counsel or a licensed PA if the file goes ROR or coverage-disputed. Telling the homeowner they "have plenty of time" without pulling the policy and the state rule is self-sabotage on the homeowner\'s side and malpractice-adjacent on the contractor\'s.',
      why: 'Owners assume claims run on calendar time the way bills do; carriers enforce procedural deadlines aggressively. Naming the three-clock structure, the ROR trigger, the diary discipline, and the "self-sabotage" framing keeps claims from defaulting on procedural mechanics instead of merits.',
      relatedTermKey: 'Statute of Limitations (Property Claims)',
    },
    {
      topic: 'Forensic report narrative on a hail claim with directional clustering and weathered shingles',
      poor: 'Roof is damaged by hail.',
      better: 'Slope-by-slope impact bruising and granule loss on windward slopes consistent with the [Y/Y/YYYY] hail event; age and condition factor explains why threshold-only analysis denies the claim.',
      best: 'Forensic findings, [property address], inspection [Y/Y/YYYY]: documented hail-impact damage on windward slopes (N and W) consistent with the [Y/Y/YYYY] hail event (NOAA SPC peak stone ~[size]", wind direction confirming windward-slope clustering — report attached). Methodology: 10\' × 10\' test squares on each slope with impact counts (N: 11/sq, W: 14/sq, S: 0/sq, E: 1/sq), tactile-confirmed mat exposure at impact sites, loupe-confirmed mat fractures on borderline impacts (photos #34-41), AC condenser coil-fin denting at the rooftop unit averaging 0.9" implying impacting stone of ~1.1" via standard dent-multiplier — consistent with NOAA. Shingle age and condition: approximately 12 years per the city building-permit record (attached), with documented pre-storm condition as sound (listing photos [Y/Y/YYYY] and mortgage roof certification [Y/Y/YYYY] attached, gutter-cleaning invoices [dates] attached). Threshold context: the carrier engineer\'s denial relies on Haag\'s ~1.0-1.25" fresh-shingle threshold and the NOAA peak stone of [size]". Haag\'s threshold is calibrated to fresh shingles in good condition; the 12-year-old assembly bruises at smaller stones via documented aging mechanisms (mat embrittlement, granule wear, sealant-strip degradation). The on-roof evidence (directional clustering, mat fractures, indirect-impact corroboration, NOAA correlation) is the dispositive test of damage causation; the threshold is reference data, not policy. Recommendation to the carrier-side reviewer: evaluate the on-roof and indirect-impact evidence as the primary causation analysis, with the threshold reference paired with the age-and-condition adjustment.',
      why: 'Forensic narratives without methodology, slope counts, indirect-impact evidence, NOAA correlation, age-and-condition framing, and an explicit "threshold is reference, evidence is dispositive" closing get treated as opinion. Naming each layer is the senior-forensic deliverable that converts the file from "we disagree" to "the documented evidence drives the conclusion."',
      relatedTermKey: 'Functional Damage',
    },
    {
      topic: 'Restoration-contractor scope language defining the licensing boundary',
      poor: 'We will handle the claim and the work.',
      better: 'We perform the roofing work and document damage; claim negotiation stays with you or a separately-retained licensed PA / attorney.',
      best: 'Scope — restoration contractor: [Contractor] performs the agreed roofing scope, provides damage documentation to a defensible standard (slope-by-slope photo log, tactile-confirmed bruising counts, indirect-impact evidence, NOAA storm correlation, pre-storm condition documentation), generates the line-item estimate, and discusses the physical scope and any line-item supplements with the carrier\'s field and desk adjuster as the contractor on file. [Contractor] is not, and under [state]\'s public-adjuster licensing rules cannot be, the policyholder\'s claim representative. [Contractor] will not negotiate the claim itself, advise on coverage decisions, advocate for specific settlement amounts, accept claim payment as final settlement on the policyholder\'s behalf, or use AOB forms that are not currently compliant with [state] law. If the claim is contested beyond the line-item supplement stage, [Contractor] will refer the policyholder to either a state-licensed public adjuster (registries linked in the addendum) or to a property-claim attorney (state-bar registries linked). [Contractor] receives no referral fee from any PA or attorney. The scope above is the [state] licensing line; it protects the policyholder and [Contractor] both. Cancellation: this contract is subject to the [state]-required [N]-day rescission notice (attached as Schedule A, in the statutorily-specified format). Deductible: [Contractor] does not rebate, waive, or absorb the policy deductible under any framing; legitimate financing options are listed in Schedule B. Signature confirms the policyholder has read and understood the scope, including the items the contractor will not perform.',
      why: 'Restoration contracts without explicit licensing-line scope, rescission notice, deductible-rebate disclaimer, and referral path are routinely voided after the fact and target the contractor\'s license. Naming each layer is the senior-leadership deliverable that produces a contract that survives both a homeowner dispute and a state regulator audit.',
      relatedTermKey: 'Restoration Contractor vs Public Adjuster',
    },
    {
      topic: 'Senior-PM cover letter on a supplement after a thin-documentation denial',
      poor: 'We disagree with the denial.',
      better: 'Attached is our supplement with photos, scope, code citations, and storm correlation; we request a re-inspection or written response on each line item.',
      best: 'Re: Claim # [XXXX], Insured [Name], Loss Date [Y/Y/YYYY], Property [address]. In response to the [date] coverage decision, [Contractor] (restoration contractor on file; not the policyholder\'s claim representative — see contract scope at Schedule A) submits the following documentation of physical damage scope and code-required upgrades for the desk adjuster\'s review. Attached: (1) slope-by-slope inspection report with test-square impact counts, tactile and loupe confirmations, indirect-impact evidence from AC condenser, soft-metal flashings, and gutter spatter; (2) NOAA SPC storm report for the [Y/Y/YYYY] event with peak stone size and wind direction; (3) pre-storm condition documentation (listing photos [date], mortgage roof certification [date], gutter-cleaning invoices); (4) line-item scope with code-required upgrades broken out under O&L coverage, including AHJ confirmation of adopted IRC edition and the specific code section; (5) age-and-condition basis for depreciation challenge with the worksheet attached. We respectfully request either re-inspection with this documentation in hand or a written response on each disputed line item identifying the specific evidentiary basis for the carrier\'s position. We will copy the homeowner on this correspondence. If the dispute escalates beyond the line-item supplement stage to coverage or settlement questions, we have advised the homeowner of their option to retain a licensed public adjuster or property-claim attorney; that retention is a separate engagement and we receive no referral fee. Sincerely, [PM name], [credentials including any Haag certification], [contractor], [state license # in jurisdiction of property].',
      why: 'A vague disagreement letter goes in a desk pile. A structured supplement letter with named attachments, contractor-not-PA scope acknowledgment, age-and-condition worksheet, O&L code citation, the explicit escalation-referral statement, and credentialed signature is what gets a desk adjuster to actually re-engage with the file rather than re-iterate the denial. Naming each layer is the senior-PM deliverable that closes the claim on the merits instead of letting it stall on procedural deficiencies.',
      relatedTermKey: 'Engineer Rebuttal',
    },
    {
      topic: 'Storm-restoration team standing orders combining the regulatory and forensic disciplines',
      poor: 'Be careful and document everything.',
      better: 'Licensed and registered before knocks; no deductible rebates; rescission notice on every contract; contractor-not-PA scope; forensic documentation discipline; honest depreciation conversations.',
      best: 'Storm-restoration team — combined regulatory + forensic standing orders (read and acknowledge before any storm response): REGULATORY — (1) Contractor license current in this state, registered post-storm with the AG\'s office or DOI per state rule, registration confirmation in your packet. (2) State-compliant contract template with the conspicuous rescission notice; no AOBs on non-compliant forms; no deposits during rescission window. (3) Deductible rebate prohibition: never offer, never accept the offer if a homeowner asks. The script is "I can\'t do that; here are the legitimate financing options." (4) Contractor-not-PA scope: document damage, discuss physical scope, never negotiate the claim itself. Refer to licensed PAs or attorneys with the registry links; never take referral fees. FORENSIC — (5) Inspection methodology: slope-by-slope test squares, tactile-and-visual confirmation, loupe on borderline findings, indirect-impact evidence from AC condenser and soft metals, NOAA storm overlay, pre-storm condition documentation. (6) Chain of custody on any sample: written owner consent, carrier notification before destructive cuts on claims in progress, metadata-intact photos, labeled-and-sealed samples, custody log on every handoff. (7) Depreciation conversations: honest age-and-condition framing; supplements with the math worksheet; never claim a roof is younger than it is. (8) Code supplements: AHJ confirmation in writing, specific code section, dimensional requirement, O&L coverage check against the dec page sublimit. CULTURAL — (9) The contract is not worth more than the license. If a deal would require either regulatory or forensic compromise, walk away. (10) Document everything that could be re-read six months from now in a deposition, an AG audit, or a state-bar complaint; if the documentation would embarrass us in any of those settings, redo it now. Storm season pays well to the teams that survive it; the teams that survive it do these ten things every job, every storm, every state, every year.',
      why: 'Storm-restoration team standing orders combine regulatory compliance and forensic discipline because the two failure modes are linked — regulatory cuts produce litigation exposure, forensic cuts produce claim denials, and both end company-ending. Naming the ten layers (four regulatory, four forensic, two cultural) with the "contract not worth the license" framing is the senior-leadership deliverable that produces the team that actually survives multiple storm seasons.',
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
  ],
};
