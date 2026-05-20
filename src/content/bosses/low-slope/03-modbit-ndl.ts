import type { BossBank } from '../types';

// Modified-bitumen brand-warranty boss — Siplast NDL, Soprema NDL, JM Peak
// Advantage NDL on mod-bit, plus application-method tradeoffs (hot vs cold
// vs torch vs self-adhered). Warranty term lengths described in general
// shape; verify current Siplast, Soprema, and JM published specs before
// launch.

export const lowSlope03: BossBank = {
  bossId: 'low-slope-03',

  round1: [
    {
      prompt: 'Which company developed the SBS-modified bitumen membrane?',
      termKey: 'Siplast',
      choices: ['Siplast', 'Soprema', 'Johns Manville', 'GAF'],
    },
    {
      prompt: 'APP-modified bitumen is most commonly installed by which method?',
      termKey: 'APP Modified Bitumen',
      choices: ['Torch-applied', 'Cold adhesive', 'Self-adhered factory backing', 'Hot-air welding'],
    },
    {
      prompt: "Which is NOT a recognized installation method for SBS-modified bitumen?",
      termKey: 'SBS Modified Bitumen',
      choices: ['Hot-air welding', 'Hot-applied asphalt', 'Cold-process adhesive', 'Self-adhered'],
    },
    {
      prompt: 'A school occupied during a re-roof restricts open flame on the roof. Which mod-bit application method is the typical fit?',
      termKey: 'Cold-Process Roofing',
      choices: ['Cold-process adhesive', 'Torch-applied APP', 'Hot mopped asphalt', 'Self-adhered for the cap only'],
    },
    {
      prompt: "Soprema's no-dollar-limit warranty for its SBS systems is generically called what?",
      termKey: 'Soprema NDL',
      choices: ['Soprema NDL', 'Sopra Gold', 'Red Shield NDL', 'Diamond Pledge NDL'],
    },
    {
      prompt: "Which brand's NDL warranty also covers modified bitumen, in addition to its TPO and PVC programs?",
      termKey: 'JM Peak Advantage NDL',
      choices: ['JM Peak Advantage NDL', 'Duro-Last NDL', 'Carlisle Gold Seal NDL', 'Red Shield NDL'],
    },
    {
      prompt: 'A 3-ply mod-bit system with redundancy if the cap is breached is most accurately described as which?',
      termKey: 'Modified Bitumen',
      choices: [
        'Multi-ply membrane assembly with built-in redundancy',
        'Single-ply membrane',
        'Coating system',
        'Built-up roof without polymer modification',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A specifier is choosing between a Siplast 3-ply SBS system under a 20-year Siplast NDL and a Soprema 3-ply SBS system under a 20-year Soprema NDL for a hospital re-roof. The hospital prohibits open flame on the roof during occupied hours.',
      choices: [
        {
          text: 'Both brands offer SBS systems compatible with cold-process or self-adhered application that avoid open flame. Specify cold-process or self-adhered for both bids, then compare assembly specs, wind ratings, and authorized-contractor presence on the bid list — not the brand alone.',
          correct: true,
        },
        {
          text: 'Force torch-applied APP because it is the strongest mod-bit option.',
          correct: false,
        },
        {
          text: 'Reject both — mod-bit cannot be installed on occupied buildings.',
          correct: false,
        },
      ],
      relatedTermKey: 'Mod-Bit Application Methods (NDL Implications)',
    },
    {
      prompt:
        'A 14-year-old Siplast Paradiene 3-ply roof under an active 20-year Siplast NDL shows widespread ponding water across roughly 20% of the field, with multiple seam leaks in the ponding area. The owner wants a manufacturer claim.',
      choices: [
        {
          text: 'Document the ponding as a separate finding before submitting. NDL warranties (Siplast included) typically exclude leaks caused by ponding water. The ponding indicates a drainage or slope defect that is its own conversation; the membrane warranty likely will not pay for the leaks in those areas, but the design defect is its own claim path against whoever was responsible for slope.',
          correct: true,
        },
        {
          text: "Submit the warranty claim and don't mention the ponding.",
          correct: false,
        },
        {
          text: 'Tell the owner the warranty covers everything for 20 years.',
          correct: false,
        },
      ],
      relatedTermKey: 'Siplast NDL',
    },
    {
      prompt:
        'A contractor torches an APP cap sheet over a JM SBS base, both products meeting the JM Peak Advantage NDL approved-assembly list. During installation the torch operator is a subcontractor not on the JM-approved contractor list. The owner later requests the Peak Advantage NDL.',
      choices: [
        {
          text: 'The components may be on the approved list, but Peak Advantage (like other NDL programs) requires a JM-approved contractor of record. A non-approved torch operator can void coverage. Document who actually performed the work before submitting, and discuss the contractor-of-record question with JM directly.',
          correct: true,
        },
        {
          text: 'Submit the warranty with the general contractor as the installer of record regardless of who held the torch.',
          correct: false,
        },
        {
          text: 'JM only checks materials, not installers.',
          correct: false,
        },
      ],
      relatedTermKey: 'JM Peak Advantage NDL',
    },
  ],

  round3: [
    {
      topic: 'Explaining mod-bit redundancy to an owner who has only ever owned single-ply roofs',
      poor: 'Mod-bit has multiple layers, so it is just stronger.',
      better: 'Modified bitumen is installed in two or more plies, so a breach in the cap sheet does not immediately mean an active leak — the layer below buys you time.',
      best: "Modified bitumen is installed as a multi-ply assembly — typically a base sheet and one or two cap sheets, each adhered or torched to the layer below. That gives the system built-in redundancy: if the cap is bruised or punctured, the underlying ply is still water-shedding, which is the practical difference from a single-ply membrane in a hail-prone or foot-traffic-heavy environment. The trade-off is more labor, heavier weight, and the application-method question (hot, cold, torch, or self-adhered) for each ply.",
      why: 'Owners who only know single-ply hear "more layers = more cost." The accurate explanation reframes redundancy as a defined performance characteristic and surfaces the application-method trade-off they will have to choose between.',
      relatedTermKey: 'Modified Bitumen',
    },
    {
      topic: 'Documenting why a Soprema SBS assembly qualifies for the Soprema NDL on an occupied office building',
      poor: 'Soprema 20-year NDL.',
      better: 'Soprema Sopralast SBS, cold-process applied (no torch), 20-year Soprema NDL.',
      best: 'Soprema Sopralast SBS-modified bitumen, 3-ply system, cold-process applied per Soprema specification (no open flame on the roof during occupied hours), over Soprema-approved polyiso (R-30 nominal) and Soprema-compatible cover board. Soprema-approved contractor of record. Registered for the Soprema NDL term contingent on as-built submittal. Verify current published Soprema specification for occupied-building cold-process before quoting.',
      why: "Occupied-building re-roofs add open-flame restrictions on top of the normal NDL conditions. Naming the application method (cold-process, no torch) and the contractor program in the same paragraph as the assembly is what makes the warranty actually issue without an exception page.",
      relatedTermKey: 'Soprema NDL',
    },
    {
      topic: 'Comparing Siplast NDL on a 3-ply SBS vs JM Peak Advantage NDL on a 2-ply mod-bit',
      poor: 'Siplast has more plies, so it is the better warranty.',
      better: 'Both are NDL warranties. The ply count is one factor; the brand-published assembly and approved-contractor program are others.',
      best: "Both are no-dollar-limit warranties, so neither caps the repair cost within its term. Siplast is the originator of SBS-modified bitumen and its NDL is written against Siplast multi-ply assemblies installed by Siplast-approved contractors; JM Peak Advantage spans single-ply and mod-bit and writes its NDL against the JM assembly with a JM-approved contractor. The right comparison is which assembly meets the project's slope, exposure, occupancy, and wind requirements, and which brand's approved contractor list actually has crews available in this market — not which brand sounds more authoritative on paper.",
      why: 'Sales conversations collapse to brand reputation. The pro answer pulls the comparison back to assembly fit, project constraints, and local approved-contractor availability — which is the actual driver of whether the warranty ever gets registered.',
      relatedTermKey: 'Siplast NDL',
    },
    {
      topic: 'Field-report language for a leak on a torch-applied APP cap sheet',
      poor: 'Leak at the APP cap.',
      better: 'Leak documented at APP cap-sheet seam, north side. Roof is 8 years old, under a 20-year Soprema NDL.',
      best: 'Leak documented at north-side APP cap-sheet seam, photos attached. Seam shows a clean lift along approximately 18 inches with no visible bitumen flow at the lift line, consistent with under-torching at original installation rather than impact damage or chemical exposure. Roof is in year 8 of a 20-year Soprema NDL. Recommend Soprema review with original torch-applicator certification on file, since under-torching is an installation-defect category typically covered by the NDL when it is a manufacturer-trained installer. Owner advised that storm damage and abuse are excluded; this finding does not appear to fall in either exclusion.',
      why: 'NDL claims on mod-bit succeed or fail on what the seam evidence says. Naming the failure mode (under-torching vs impact vs chemical), confirming the installer credential, and ruling out the standard exclusions in the same sentence is what holds the claim together.',
      relatedTermKey: 'Soprema NDL',
    },
  ],
};
