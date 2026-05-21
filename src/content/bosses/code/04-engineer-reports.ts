import type { BossBank } from '../types';

// Engineer Reports boss — what carrier-retained engineers actually do, what
// a defensible report looks like, and how a roofing contractor's documentation
// stacks up against (or rebuts) the engineer report.

export const code04: BossBank = {
  bossId: 'code-04',

  round1: [
    {
      prompt: 'A carrier-retained engineer\'s report on a contested storm claim is best understood as:',
      termKey: 'Engineer Rebuttal',
      choices: [
        'A retained opinion submitted by the carrier; one input to the coverage decision, not the final word, and subject to rebuttal with proper documentation',
        'A neutral, binding government finding',
        'A document the homeowner is not allowed to see',
        'A purely formal step with no impact on coverage',
      ],
    },
    {
      prompt: 'An Engineer Rebuttal is:',
      termKey: 'Engineer Rebuttal',
      choices: [
        'A written counter-report addressing a carrier-retained engineer\'s conclusions on causation, scope, or extent of damage',
        'A homeowner letter complaining about the engineer',
        'A separate insurance policy',
        'A regulatory filing with the state',
      ],
    },
    {
      prompt: 'The weight of an engineer rebuttal in a contested claim is most controlled by:',
      termKey: 'Engineer Rebuttal',
      choices: [
        'The quality and discipline of documentation — slope-by-slope evidence, methodology, storm correlation, and credentialed opinion',
        'The total number of pages',
        'The size of the contractor\'s logo',
        'How much it costs to produce',
      ],
    },
    {
      prompt: 'A Haag Certified Inspector is:',
      termKey: 'Haag Certified Inspector',
      choices: [
        'An inspector trained in Haag Engineering\'s hail- and wind-damage methodology — a common credential on contested storm files',
        'A government employee',
        'A roofing contractor with a high-school diploma',
        'A neutral state regulator',
      ],
    },
    {
      prompt: 'A carrier engineer\'s report that concludes "no functional damage observed" without slope-by-slope impact counts, test-square methodology, or pre-storm condition discussion is:',
      termKey: 'Photo Documentation Standard',
      choices: [
        'Vulnerable to rebuttal — the conclusion is not supported by the documented methodology, regardless of the engineer\'s credentials',
        'Final and binding',
        'Above contractor review by definition',
        'Protected from disclosure',
      ],
    },
    {
      prompt: 'A Loupe / Microscope Inspection on a borderline shingle hail finding can be determinative because it:',
      termKey: 'Loupe / Microscope Inspection',
      choices: [
        'Reveals mat fractures and granule-loss patterns not visible to the unaided eye',
        'Is required by federal law',
        'Always sides with the contractor',
        'Is faster than a visual inspection',
      ],
    },
    {
      prompt: 'A roofing contractor\'s slope-by-slope inspection report with NOAA storm correlation and tactile-confirmed bruising counts, written by a credentialed inspector, is:',
      termKey: 'Engineer Rebuttal',
      choices: [
        'Treated as substantive evidence in the file and routinely cited in rebuttals — though not equivalent to a licensed engineer\'s sealed report',
        'Ignored unless an attorney submits it',
        'Of equal legal weight to a court order',
        'Only persuasive to other contractors',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A carrier-retained engineer concludes "no functional hail damage" on a roof the contractor inspected and found 8-12 impacts per 100 sq ft on the windward slopes with mat exposure. The engineer report has no test-square counts and no slope-by-slope photos.',
      choices: [
        {
          text: 'Build a structured rebuttal. Identify what the engineer report does and does not contain: no test-square methodology, no slope-by-slope counts, no tactile confirmation discussion, no storm-direction correlation, no indirect-impact evidence review. Submit the contractor\'s own inspection report (slope-by-slope counts, photos, NOAA storm overlay, AC fin denting documentation, loupe-confirmed mat fractures) with a cover letter that names the methodology gap in the engineer report and the evidence layers in the contractor report. Request either a re-inspection with both reports in hand or a written response on each disputed finding.',
          correct: true,
        },
        {
          text: 'Accept the engineer report; engineers are always final.',
          correct: false,
        },
        {
          text: 'Attack the engineer\'s credentials in writing.',
          correct: false,
        },
      ],
      relatedTermKey: 'Engineer Rebuttal',
    },
    {
      prompt:
        'A homeowner asks if they can hire their own engineer to rebut the carrier\'s engineer. Costs are roughly $2,500-$5,000.',
      choices: [
        {
          text: 'Yes, with judgment. On a contested mid-five-figure claim, a credentialed independent engineer\'s report can be the difference; on a sub-$20K claim, the cost-benefit gets thin. The independent engineer should be Haag Certified or similarly credentialed, have a documented methodology (slope-by-slope, test squares, tactile-and-visual, indirect-impact review, storm correlation), and be independent of the contractor. If the dispute escalates to appraisal or litigation, the independent engineer\'s report is the centerpiece document. Brief the homeowner on the math: $5K spend on a $40K disputed scope is reasonable; $5K spend on a $12K disputed scope is not.',
          correct: true,
        },
        {
          text: 'No, the carrier\'s engineer is final.',
          correct: false,
        },
        {
          text: 'Yes, and the contractor should handle the engineering work themselves to save cost.',
          correct: false,
        },
      ],
      relatedTermKey: 'Engineer Rebuttal',
    },
    {
      prompt:
        'A carrier engineer\'s report references "Haag thresholds" to deny a claim on a 12-year-old asphalt shingle roof after a documented 1.0-1.25" hail event.',
      choices: [
        {
          text: 'Engage Haag\'s own published guidance against the engineer\'s misuse of it. Haag thresholds are calibrated to fresh shingles in good condition; aged shingles bruise at smaller stones, a point Haag itself discusses. Cite the threshold scope, the age-condition adjustment, and the on-roof evidence as the dispositive test. Frame the engineer\'s use of the threshold as outside its calibrated scope, not as a defect in Haag\'s underlying methodology — that distinction matters because attacking Haag wholesale is weaker than attacking the misapplication.',
          correct: true,
        },
        {
          text: 'Argue that Haag is illegitimate as an authority.',
          correct: false,
        },
        {
          text: 'Concede; Haag is policy.',
          correct: false,
        },
      ],
      relatedTermKey: 'Haag Engineering',
    },
  ],

  round3: [
    {
      topic: 'Explaining to a homeowner what a carrier engineer report is and is not',
      poor: 'The engineer denied your claim.',
      better: 'The carrier retained an engineer who wrote a report; the report is one input to the carrier\'s coverage decision, not a final ruling.',
      best: 'A "carrier engineer report" is a retained opinion: the carrier pays an engineer (often through a third-party engineering firm) to inspect the roof and write an opinion on causation and damage. It is one input to the desk adjuster\'s coverage decision, not a final ruling. Two things follow. (1) The engineer is paid by the carrier and that financial relationship is a legitimate point of context — not an automatic disqualifier, but context. (2) The engineer\'s report can be rebutted with documentation that meets or exceeds its methodology: slope-by-slope test-square counts, tactile confirmation, indirect-impact evidence, storm correlation, pre-storm condition. The right move when a claim turns on a carrier engineer report is to read the report (methodology section, not just the conclusion), identify the documentation gaps, and either close them with the contractor\'s own inspection report or, on larger contested claims, hire an independent credentialed engineer to write a rebuttal.',
      why: 'Owners read "the engineer said no damage" as the end. Naming the engineer\'s role as a retained opinion, the desk-adjuster decision structure, the financial relationship as context, and the rebuttal path with the methodology layer is what reopens claims that look closed.',
      relatedTermKey: 'Engineer Rebuttal',
    },
    {
      topic: 'Documenting an engineer rebuttal cover letter',
      poor: 'We disagree with the engineer.',
      better: 'Engineer report dated [date] omits test-square methodology and slope-by-slope counts; our inspection findings are attached and we request reconsideration.',
      best: 'Re: Claim # [XXXX], Loss Date [Y/Y/YYYY], Property [address]. We have reviewed the [date] engineering report submitted to the carrier under cover of [firm]. The report\'s methodology section documents [what is actually there — typically: limited time on roof, no test-square counts, no slope-specific photo log, no storm overlay, no indirect-impact review]. The report\'s conclusion ("no functional damage observed") is not supported by the documented methodology. Attached is our inspection report covering: (1) slope-by-slope test squares with impact counts per 100 sq ft (north 14, west 11, south 0, east 1); (2) tactile confirmation of mat exposure on impact sites, photographed with measurement scale; (3) loupe-confirmed mat-fracture findings on borderline impacts (photos #34-41); (4) AC condenser fin denting at the rooftop unit, dent diameter ~0.9" consistent with the reported 1.1" stone via standard dent-multiplier; (5) NOAA SPC storm overlay for the [Y/Y/YYYY] event, peak stone size [Z]", wind direction confirming windward-slope clustering; (6) pre-storm condition documented in [date] listing photos and [date] mortgage roof certification. We respectfully request the carrier reconsider the coverage decision with both reports in hand, or alternatively grant a re-inspection with the disputed evidence on-site. Submitted by [name], [credentials — e.g., Haag Certified Inspector #XXXX], [contractor], [license #].',
      why: 'A rebuttal letter without a methodology critique, named evidence layers, credentialed signature, and a specific procedural ask is just a complaint. Naming what the engineer report does not contain, what the contractor report does contain, and the specific request (reconsideration or re-inspection) is the senior-PM deliverable that produces a procedural response from the carrier rather than a re-iteration of the denial.',
      relatedTermKey: 'Engineer Rebuttal',
    },
    {
      topic: 'Field-report language documenting why a borderline finding required loupe inspection',
      poor: 'We looked closer and found damage.',
      better: 'Borderline impacts on the field were examined with magnification; mat fractures and granule-loss patterns invisible to the unaided eye were documented and photographed.',
      best: 'Methodology note: On slopes [list], visual inspection identified depressed-and-discolored impact sites that did not show clear mat exposure to the unaided eye. Standard practice on borderline findings is loupe or stereo-microscope inspection (per Haag and NCIE methodology summaries) to evaluate the underlying granule and mat condition that is not visible from arm\'s length. We inspected [N] borderline impact sites with a 10× loupe and documented the findings: [M] sites showed fractured-granule patterns radiating from a central impact with mat-fiber separation visible only under magnification (photos #34-41 attached). These would not appear on a wide-angle photo log and would not be captured by a tactile-only inspection. The mat-fracture pattern is the signature finding of functional hail damage on asphalt shingles; its presence on these slopes confirms functional-level damage that a no-magnification field walk would have missed. Recommend the carrier-side reviewer evaluate the magnification photos before issuing or sustaining a denial.',
      why: 'Carrier engineers often decline to inspect under magnification, and the absence of magnification findings in the engineer report is itself a documentation gap. Naming the borderline-finding protocol, the loupe methodology, the specific findings, and the senior-inspector recommendation is what converts "we looked harder" into a citable methodological argument.',
      relatedTermKey: 'Loupe / Microscope Inspection',
    },
    {
      topic: 'Senior-PM analysis on whether to hire an independent engineer',
      poor: 'Get an engineer.',
      better: 'On a contested mid-five-figure claim with documentation gaps in the carrier engineer report, an independent credentialed engineer\'s rebuttal often pays for itself; on smaller claims, the math is closer.',
      best: 'Decision frame for independent engineer engagement: (1) Disputed dollar exposure: a $40K contested scope justifies $3-5K engineer cost; a $12K contested scope rarely does. (2) Document gap in the carrier report: if the carrier engineer\'s report has documented methodology gaps (no test squares, no slope counts, no storm correlation, no tactile-or-loupe protocol), the contractor\'s own inspection report often closes them sufficiently without a sealed engineer report. (3) Escalation horizon: if the file is heading to appraisal, ROR-then-denial, or litigation, the sealed engineer report becomes the centerpiece document and is worth funding early. (4) Engineer selection: must be credentialed (Haag Certified or P.E. in the relevant state), documented methodology, independent of the contractor (no fee-share, no exclusive referral relationship), and available to sit for the appraisal panel or deposition if it gets there. The wrong engineer is one without the credentials, the methodology, or the willingness to defend the report under cross-examination; that engineer report is worse than no engineer report.',
      why: 'The independent-engineer decision is the most common money-blower in storm restoration. Naming the four decision dimensions (dollar exposure, carrier-report gap, escalation horizon, engineer selection) and the failure mode (the wrong engineer at any cost) is what turns "should we get one" from a guess into a defensible call.',
      relatedTermKey: 'Engineer Rebuttal',
    },
  ],
};
