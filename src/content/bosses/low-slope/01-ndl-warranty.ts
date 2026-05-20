import type { BossBank } from '../types';

// First-draft boss bank — NDL warranty comparison (JM TPO vs Duro-Last PVC).
// All warranty term lengths and exclusion lists are general-shape; verify against
// current published JM Peak Advantage and Duro-Last NDL specs before launch.

export const lowSlope01: BossBank = {
  bossId: 'low-slope-01',

  round1: [
    {
      prompt: "Which manufacturer's NDL warranty program is branded 'Peak Advantage'?",
      termKey: 'JM Peak Advantage NDL',
      choices: ['JM Peak Advantage NDL', 'Duro-Last NDL', 'GAF Diamond Pledge', 'Carlisle Gold Seal'],
    },
    {
      prompt: 'Duro-Last NDL warranty applies primarily to which membrane type?',
      termKey: 'PVC',
      choices: ['PVC', 'TPO', 'EPDM', 'Modified Bitumen'],
    },
    {
      prompt: "What does 'NDL' literally mean in a manufacturer roofing warranty?",
      termKey: 'No Dollar Limit (NDL) Warranty',
      choices: [
        'No Dollar Limit (NDL) Warranty',
        'Repair cost capped at original install price',
        'Storm and hail damage included',
        'Owner indemnified against any leak from any cause',
      ],
    },
    {
      prompt: 'On the same membrane and manufacturer, which attachment method typically qualifies for a higher published wind warranty?',
      termKey: 'Fully Adhered',
      choices: ['Fully Adhered', 'Mechanically Fastened', 'Ballasted', 'Loose-laid'],
    },
    {
      prompt: 'Both JM Peak Advantage NDL and Duro-Last NDL warranties REQUIRE which condition to remain valid?',
      termKey: 'JM Peak Advantage NDL',
      choices: [
        'Manufacturer-approved installer and approved system components throughout',
        'Annual roof washing logged with the manufacturer',
        'A separate insurance policy on the building',
        'Use of any qualified contractor with any compatible component',
      ],
    },
    {
      prompt: 'Which is consistently EXCLUDED from a typical NDL warranty (both JM and Duro-Last)?',
      termKey: 'Duro-Last NDL',
      choices: [
        'Storm damage and abuse',
        'Leaks at heat-welded laps from a manufacturing defect',
        'Leaks at penetration boots from a manufacturing defect',
        'Material delamination from a manufacturing flaw',
      ],
    },
    {
      prompt: 'A 60-mil JM TPO roof is bid two ways: fully adhered for a 25-year Peak Advantage NDL, or mechanically fastened for a 20-year Peak Advantage NDL. The membrane is identical. What changes the available warranty term?',
      termKey: 'Attachment Method (NDL Implications)',
      choices: [
        'The assembly spec (attachment, cover board, wind rating)',
        'The color of the membrane',
        'The installer’s years in business',
        'The geographic region only',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'An owner is comparing two bids on a 30,000 sq ft warehouse. Bid A: Johns Manville TPO, fully adhered, 25-year JM Peak Advantage NDL. Bid B: Duro-Last 60-mil PVC, mechanically fastened, 20-year Duro-Last NDL. The owner asks why the JM bid carries a longer warranty term and what real-world difference it makes.',
      choices: [
        {
          text: "Both are NDL warranties — repair cost has no cap within the term. JM's longer term reflects its program structure and (usually) a fully adhered assembly; it's not a verdict on which membrane is better. Compare what each warranty actually requires and excludes, not just the year count.",
          correct: true,
        },
        {
          text: "The JM warranty is automatically better and the Duro-Last roof will fail at year 20.",
          correct: false,
        },
        {
          text: 'The Duro-Last warranty includes hail coverage that the JM does not.',
          correct: false,
        },
      ],
      relatedTermKey: 'JM Peak Advantage NDL',
    },
    {
      prompt:
        'A contractor installs Johns Manville TPO mechanically fastened. To cover a supply delay, one pallet of polyiso insulation is substituted with a non-JM product. The owner later requests the Peak Advantage NDL.',
      choices: [
        {
          text: "Document the substitution before submitting. NDL warranties typically require approved components throughout the assembly; mixed-source insulation can void or limit the warranty. Confirm with JM whether the alternate insulation is on their approved list for this spec.",
          correct: true,
        },
        {
          text: "Submit the warranty as-is; manufacturers don't actually check insulation source.",
          correct: false,
        },
        {
          text: "Tear off the substituted polyiso section after the membrane is welded down.",
          correct: false,
        },
      ],
      relatedTermKey: 'JM Peak Advantage NDL',
    },
    {
      prompt:
        'Two Duro-Last bids land on the same job. Both are 60-mil PVC, both call out the Duro-Last NDL. Bid 1 is fully adhered; Bid 2 is mechanically fastened. The owner asks if there is a meaningful difference in what the warranty covers.',
      choices: [
        {
          text: "Compare the published wind warranty rating on each spec, not just the term length. On the same Duro-Last membrane, the fully adhered spec typically carries a higher wind-uplift warranty than the mechanically fastened spec — and that is often the practical difference an owner feels in a storm.",
          correct: true,
        },
        {
          text: 'They are identical because the NDL is the same.',
          correct: false,
        },
        {
          text: 'Mechanically fastened is automatically the better wind spec.',
          correct: false,
        },
      ],
      relatedTermKey: 'Attachment Method (NDL Implications)',
    },
  ],

  round3: [
    {
      topic: 'Explaining an NDL warranty to an owner in a sales meeting',
      poor: "Don't worry — the manufacturer covers everything for 25 years.",
      better:
        "It's a no-dollar-limit warranty. If a covered defect causes a leak, the manufacturer pays for the repair, with no cap, for the term.",
      best:
        "It's a no-dollar-limit warranty: if a manufacturing defect in the membrane causes a leak during the term, the manufacturer covers repair labor and material with no cap on cost. It does not cover storm damage, foot-traffic abuse, ponding water, or work performed outside the manufacturer's approved installer network.",
      why: "Owners hear 'covers everything' and stop reading. The accurate sentence names the program type, what triggers a claim, and the major exclusions in one breath — so the owner cannot later say they were misled.",
      relatedTermKey: 'No Dollar Limit (NDL) Warranty',
    },
    {
      topic: 'Documenting why a JM TPO assembly qualifies for the 25-year Peak Advantage NDL',
      poor: 'JM 25-year warranty.',
      better:
        'Johns Manville TPO 60-mil fully adhered, with JM polyiso and JM cover board, 25-year Peak Advantage NDL.',
      best:
        "Johns Manville 60-mil TPO membrane, fully adhered with JM-approved bonding adhesive, over JM polyiso (R-30 nominal) and JM ½″ cover board, per JM's published assembly. Assembly registered for the 25-year Peak Advantage NDL contingent on JM-approved installer of record and submitted as-builts. Verify the current published JM specification before quoting.",
      why: 'An NDL warranty is conditional on the entire assembly matching a published spec sheet. Naming the membrane, attachment, cover board, insulation R-value, installer-of-record, and the source of the spec is what makes the warranty actually issue.',
      relatedTermKey: 'JM Peak Advantage NDL',
    },
    {
      topic: "Owner asks: 'is Duro-Last's 20-year NDL worse than a 25-year competitor?'",
      poor: 'Yes, longer is better.',
      better:
        'Term length is one factor; warranty type (NDL vs system) and the required assembly both matter.',
      best:
        "Term alone doesn't tell the story. Both are NDL warranties, so repair cost has no cap within the term. Duro-Last's 20-year is paired with a custom-prefabricated PVC system installed by a Duro-Last–trained contractor; the competitor's 25-year requires its own approved assembly and approved installer. Compare what each warranty actually covers, what assembly it requires, and what's excluded — not the year count.",
      why: 'Sales conversations collapse to single numbers. The pro answer pulls the comparison back to what matters: warranty type, required assembly, exclusions.',
      relatedTermKey: 'Duro-Last NDL',
    },
    {
      topic:
        'Field-report language for a 14-year-old TPO roof under an active JM Peak Advantage NDL, owner reports a leak at an HVAC curb',
      poor: 'Leak at the curb. Call the warranty.',
      better:
        'Leak at HVAC curb on south side. Roof is 14 years old, under 25-year JM Peak Advantage NDL. Submitting warranty claim.',
      best:
        'Leak documented at south HVAC curb (photos attached). Curb flashing shows separation at the seam — appears to be a flashing manufacturing or installation defect, not foot-traffic abuse or ponding. Roof is in year 14 of a 25-year JM Peak Advantage NDL on a fully adhered assembly. Recommending claim submission with original installer-of-record and as-built spec referenced. Owner advised that storm damage and abuse are excluded; this finding does not appear to fall within either exclusion.',
      why: 'NDL claims succeed or fail on documented language. Naming the defect type, ruling out the common exclusions in the report, confirming the assembly matches the registered warranty, and identifying the installer of record is what makes the claim hold.',
      relatedTermKey: 'JM Peak Advantage NDL',
    },
  ],
};
