import type { BossBank } from '../types';

// Shingle Brand Warranties boss — GAF Golden Pledge vs OC Platinum vs
// CertainTeed SureStart Plus vs IKO ShieldPro Plus. Certified-contractor
// programs, full-system requirements, workmanship coverage.

export const shingles10: BossBank = {
  bossId: 'shingles-10',

  round1: [
    {
      prompt: "GAF's highest-tier residential shingle warranty is called what?",
      termKey: 'GAF Golden Pledge',
      choices: ['Golden Pledge', 'Silver Pledge', 'System Plus', 'Diamond Pledge'],
    },
    {
      prompt: "Owens Corning's highest-tier residential warranty is:",
      termKey: 'OC Platinum Protection',
      choices: ['Platinum Protection', 'Preferred', 'Standard', 'Master'],
    },
    {
      prompt: "CertainTeed's extended residential warranty (workmanship + longer non-prorated) is called:",
      termKey: 'CertainTeed SureStart Plus',
      choices: ['SureStart Plus', 'Integrity Plus', 'Master Pledge', 'CertainPro'],
    },
    {
      prompt: "IKO's extended residential warranty for full-system installs is:",
      termKey: 'IKO ShieldPro Plus',
      choices: ['ShieldPro Plus', 'Cambridge Pledge', 'IKO Gold', 'ROOFPRO Premier'],
    },
    {
      prompt: 'Each manufacturer\'s highest-tier residential warranty requires:',
      termKey: 'GAF Golden Pledge',
      choices: [
        'A manufacturer-certified contractor (e.g., GAF Master Elite, OC Platinum Preferred, CertainTeed SELECT ShingleMaster, IKO ROOFPRO) AND a full-system install',
        'Just the shingle product, regardless of installer',
        'A homeowner-paid registration fee only',
        'Installation by a specific union contractor',
      ],
    },
    {
      prompt: 'A "full-system install" required by these warranty tiers typically means:',
      termKey: 'GAF Golden Pledge',
      choices: [
        'Manufacturer-matched starter, ridge cap, underlayment, ventilation, and (where required) IR Class 4 components',
        'Only the shingles must match; everything else is generic',
        'The whole house must be sided by the same manufacturer',
        'A manufacturer-supplied installer must do the work',
      ],
    },
    {
      prompt: 'A primary practical difference between an extended manufacturer warranty and a standard limited lifetime is:',
      termKey: 'GAF Golden Pledge',
      choices: [
        'The extended warranty adds workmanship coverage (the labor cost to repair) and a longer non-prorated period',
        'The extended warranty covers hail and wind without limits',
        'The extended warranty is automatic on every install',
        'The extended warranty covers the entire home',
      ],
    },
  ],

  round2: [
    {
      prompt:
        "A homeowner is choosing between two re-roof bids: Bid A is a non-certified contractor installing OC shingles (Standard limited lifetime warranty only); Bid B is an OC Platinum Preferred Contractor installing the same OC shingles plus matched OC components (Platinum Protection warranty). Bid B costs ~12% more.",
      choices: [
        {
          text: "The 12% premium typically buys workmanship coverage, an extended non-prorated period, and the requirement that a certified contractor stand behind the work. On a 25-year time horizon, that workmanship coverage is usually worth more than the bid delta if there is any installation defect later. Verify both warranties' actual published terms in writing, confirm the Bid B contractor is currently on OC's Platinum list, and decide on warranty value rather than sticker price.",
          correct: true,
        },
        {
          text: 'Bid A is the better value because the shingles are identical.',
          correct: false,
        },
        {
          text: 'Bid B is always better regardless of price.',
          correct: false,
        },
      ],
      relatedTermKey: 'OC Platinum Protection',
    },
    {
      prompt:
        "A homeowner registered for GAF Golden Pledge 5 years ago. The contractor has since lost their Master Elite status (didn't renew). The roof now has a leak the homeowner wants to claim under the warranty.",
      choices: [
        {
          text: "The warranty was registered when the contractor was Master Elite, and the install date credentials matter. Submit the claim with documentation of the contractor's Master Elite status AT INSTALL DATE; GAF generally honors the warranty as registered. The contractor's current (lapsed) status affects new work, not registered claims. Document the registration paperwork from install, the photos showing the matched-system install, and submit through GAF directly.",
          correct: true,
        },
        {
          text: "The warranty is void because the contractor is no longer Master Elite.",
          correct: false,
        },
        {
          text: 'Find another Master Elite contractor to take over the warranty.',
          correct: false,
        },
      ],
      relatedTermKey: 'GAF Golden Pledge',
    },
    {
      prompt:
        "A re-roof contract claims to be 'an Integrity Roof System install' but the underlayment and ridge cap on the truck are not CertainTeed-branded.",
      choices: [
        {
          text: "Stop the install before the wrong components go on. The Integrity Roof System (and the corresponding SureStart Plus enhanced warranty) requires CertainTeed-matched components throughout: shingle, starter, ridge cap, underlayment, ventilation. Mismatched components do not qualify for the system warranty. Verify the components against CertainTeed's published list, swap the non-matching ones before install, and document.",
          correct: true,
        },
        {
          text: 'The system designation does not actually require matched components.',
          correct: false,
        },
        {
          text: 'Install the mismatched components and register the warranty anyway.',
          correct: false,
        },
      ],
      relatedTermKey: 'CertainTeed SureStart Plus',
    },
  ],

  round3: [
    {
      topic: 'Explaining the certified-contractor warranty premium to a homeowner',
      poor: 'Certified contractors are more expensive but the warranty is better.',
      better: 'Certified contractors install full-system roofs that qualify for the manufacturer\'s extended warranty, which adds workmanship coverage and a longer non-prorated term.',
      best: "Each major shingle manufacturer (GAF, Owens Corning, CertainTeed, IKO) runs a certified-contractor program (Master Elite, Platinum Preferred, SELECT ShingleMaster, ROOFPRO). Contractors in those programs can register the install for the manufacturer's highest-tier warranty (Golden Pledge, Platinum Protection, SureStart Plus, ShieldPro Plus). That higher warranty typically does two things the standard limited lifetime does not: it covers workmanship — meaning the labor cost to repair an installation defect — and it extends the non-prorated portion. The premium for a certified contractor usually covers the warranty differential within a few years, AND the certified-contractor list itself is a filter for contractors who've been audited and trained by the manufacturer. The decision is whether the warranty's workmanship coverage and the contractor audit are worth the price delta — on a 25-year roof, usually yes.",
      why: "Owners default to lowest-bidder. Naming the four certified programs, the workmanship-coverage gap they unlock, AND the contractor-audit filter reframes the premium as functional rather than marketing.",
      relatedTermKey: 'GAF Golden Pledge',
    },
    {
      topic: 'Documenting a full-system shingle install for the highest-tier warranty registration',
      poor: 'GAF Golden Pledge.',
      better: 'GAF Timberline HDZ architectural shingles, full GAF-matched system, installed by Master Elite contractor, registered for Golden Pledge.',
      best: "[Brand] [highest-tier program — e.g., GAF Master Elite / OC Platinum Preferred / CertainTeed SELECT ShingleMaster / IKO ROOFPRO] contractor [contractor name and certification number] installing a complete manufacturer-matched system: [shingle product line and color], manufacturer-matched starter strip, manufacturer-matched hip-and-ridge cap, manufacturer-matched underlayment (synthetic or felt per spec), manufacturer-matched ventilation (ridge vent product), and IR Class 4 components where applicable. Install registered for [highest-tier warranty — e.g., GAF Golden Pledge] with manufacturer; registration confirmation retained in homeowner file. Verify current published terms and term length with manufacturer at registration.",
      why: "Highest-tier warranty registrations fall through when one of the matched components gets substituted in the field. Naming every matched element AND the certified-contractor credential is what makes the warranty actually register.",
      relatedTermKey: 'GAF Golden Pledge',
    },
    {
      topic: 'Comparing two manufacturer warranties to an owner deciding between brands',
      poor: 'They are all about the same.',
      better: 'They have similar structures but different term lengths and program names; the differences matter mostly when you actually file a claim.',
      best: "The four major manufacturers run structurally similar warranty programs — a base limited-lifetime warranty on the shingle, plus an extended program through their certified-contractor channel that adds workmanship coverage and a longer non-prorated period. Where they differ is in the specifics: the certified-contractor density in your local market, the speed and disposition of claims handling (talk to contractors who've actually filed warranty claims with each manufacturer), the matched-system component requirements, and the manufacturer's track record on honoring warranties at the install date when contractor credentials have since changed. The right brand for any individual install is the one with strong local certified-contractor presence and a claim record your contractor can vouch for — not the one with the longest cover-sheet number.",
      why: 'Brand-warranty comparisons get framed as a year-count race. Naming the structural similarities and the four practical differences (local contractor density, claims handling, system requirements, registration durability) reorients the decision around what actually predicts an honored claim.',
      relatedTermKey: 'GAF Golden Pledge',
    },
    {
      topic: 'Field-report language for a workmanship-defect claim under an active extended warranty',
      poor: 'Bad install; file the warranty.',
      better: 'Workmanship defect documented; install was under [warranty program] with [certified contractor]; submitting claim.',
      best: 'Documented workmanship defect on [date], type and location of defect described [e.g., raised tabs on east slope with no sealant strip activation; nailing pattern inspection shows fasteners outside the manufacturer nail zone on representative courses]. Original install dated [date] by [contractor name, certified credential at install date, registration number]. Warranty: [extended program — e.g., GAF Golden Pledge], registered [date], registration confirmation on file. Defect type falls within the warranty\'s workmanship coverage as published at registration. Recommend submission directly to manufacturer with: (1) original registration paperwork; (2) photos of defect with measurements; (3) photos of representative non-defective sections for comparison; (4) statement of attempted resolution with the original contractor. Claim path: manufacturer warranty (not carrier), since this is workmanship not weather.',
      why: "Workmanship claims under an extended warranty are routinely filed wrong (sent to the carrier, or to the contractor without manufacturer registration in the loop). Naming the defect type, the registration paperwork, the workmanship-coverage scope, AND the correct counter-party path is what gets the claim onto the right desk.",
      relatedTermKey: 'GAF Golden Pledge',
    },
  ],
};
