import type { BossBank } from '../types';

// EPDM brand-warranty boss — Carlisle Gold Seal vs Elevate Red Shield,
// ballasted vs fully adhered vs mechanically fastened. All warranty term
// lengths described in general shape; verify current Carlisle and Elevate
// published specs before launch.

export const lowSlope02: BossBank = {
  bossId: 'low-slope-02',

  round1: [
    {
      prompt: 'EPDM seams are joined by which method?',
      termKey: 'EPDM',
      choices: ['Taped or glued', 'Hot-air welded', 'Solvent-melted', 'Mechanically crimped'],
    },
    {
      prompt: "Carlisle's no-dollar-limit warranty for its single-ply systems is called what?",
      termKey: 'Carlisle Gold Seal NDL',
      choices: ['Carlisle Gold Seal NDL', 'Peak Advantage NDL', 'Red Shield NDL', 'Diamond Pledge NDL'],
    },
    {
      prompt: "Elevate's commercial NDL warranty (the former Firestone program) is called what?",
      termKey: 'Red Shield NDL',
      choices: ['Red Shield NDL', 'Sure-Seal NDL', 'Gold Seal NDL', 'Peak Advantage NDL'],
    },
    {
      prompt: 'Which attachment method is UNIQUELY supported by EPDM among the common low-slope membranes?',
      termKey: 'Ballasted Roof',
      choices: ['Ballasted', 'Fully Adhered', 'Mechanically Fastened', 'Heat-welded'],
    },
    {
      prompt: 'A ballasted EPDM system is generally constrained to what slope range?',
      termKey: 'Ballasted Roof',
      choices: ['≤ 2:12', '≤ 4:12', '≤ 6:12', 'Any slope'],
    },
    {
      prompt: 'On the same EPDM membrane, which attachment typically qualifies for the highest published wind-uplift warranty?',
      termKey: 'EPDM Attachment Methods (NDL Implications)',
      choices: ['Fully Adhered', 'Ballasted', 'Mechanically Fastened', 'Loose-laid with edge stops'],
    },
    {
      prompt: 'A restaurant kitchen exhausts grease-laden vapor onto an EPDM roof. What is the brand-warranty problem?',
      termKey: 'EPDM',
      choices: [
        'Petroleum and grease degrade EPDM; the membrane material is wrong for the exposure regardless of brand',
        'Carlisle covers grease; Elevate does not',
        'Elevate covers grease; Carlisle does not',
        'Grease exposure is covered by all EPDM NDL warranties',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A specifier issues bids for a 50,000 sq ft warehouse in coastal Florida. Two single-ply bids land: Carlisle Sure-Seal EPDM ballasted under a Carlisle Gold Seal NDL, and Carlisle Sure-Seal EPDM fully adhered under the same warranty program. Roof slope is ¼:12. The owner asks which to take.',
      choices: [
        {
          text: 'Coastal high-wind zone is the issue. Ballasted EPDM is typically restricted or excluded in high-wind regions; fully adhered will carry a higher published wind-uplift warranty on the same membrane. Recommend fully adhered and verify the Gold Seal wind rating for this site against the design wind speed.',
          correct: true,
        },
        {
          text: 'Take the ballasted bid — it is cheaper and the Gold Seal NDL covers wind anyway.',
          correct: false,
        },
        {
          text: 'Take whichever bid is cheaper; the warranty is the same name on both bids.',
          correct: false,
        },
      ],
      relatedTermKey: 'EPDM Attachment Methods (NDL Implications)',
    },
    {
      prompt:
        'A 12-year-old fully adhered RubberGard EPDM roof under an active 25-year Red Shield NDL shows a leak at a field seam. Investigation finds the seam was originally taped, but a section was field-repaired three years ago using an aftermarket non-Elevate seam tape.',
      choices: [
        {
          text: 'Flag the substitution before submitting. Red Shield, like other NDL warranties, requires Elevate components throughout; an aftermarket seam-tape repair in that location can void coverage for that area. Photograph the repair, document who performed it, and ask Elevate how they want it handled.',
          correct: true,
        },
        {
          text: 'Submit the claim and hope the substitution is not noticed.',
          correct: false,
        },
        {
          text: 'Cut out the entire field and re-tape with Elevate product before submitting.',
          correct: false,
        },
      ],
      relatedTermKey: 'Red Shield NDL',
    },
    {
      prompt:
        'A property manager has two existing EPDM roofs on adjacent buildings: one Carlisle Sure-Seal mechanically fastened under a 20-year Gold Seal NDL, one Elevate RubberGard fully adhered under a 25-year Red Shield NDL. Both are now in year 10. The owner asks if it is worth pursuing the same membrane brand for an upcoming third-building project to consolidate warranty management.',
      choices: [
        {
          text: 'There is no warranty-management benefit to forcing same-brand membrane across separate buildings — each warranty is registered to its own assembly with its own installer of record. Pick the third roof on its design merits (slope, drainage, exposure, occupancy) and let the warranty fall out from the selected assembly.',
          correct: true,
        },
        {
          text: 'Force the third building to Carlisle so all three have the Gold Seal program.',
          correct: false,
        },
        {
          text: 'Force the third building to Elevate so all three have the Red Shield program.',
          correct: false,
        },
      ],
      relatedTermKey: 'Carlisle Gold Seal NDL',
    },
  ],

  round3: [
    {
      topic: 'Explaining to an owner why EPDM seams matter for warranty claims',
      poor: 'The seams are taped, just like any roof.',
      better: "EPDM is a thermoset — its seams are taped or glued, not heat-welded. Seam integrity is the most common warranty trigger point.",
      best: "EPDM is a thermoset rubber: its seams are joined with seam tape or seam adhesive, not heat-welded. That means the seam itself is a separate product within the assembly, and seam failures are the most common warranty claim. Any field repair to a seam has to use the manufacturer's approved seam product to keep the NDL warranty intact.",
      why: 'Owners hearing "rubber roof" assume it is one continuous sheet. Making the seam a named, separate, warranty-critical element prevents the surprise of a seam-failure dispute later.',
      relatedTermKey: 'EPDM',
    },
    {
      topic: 'Documenting why a Carlisle Sure-Seal EPDM assembly qualifies for the 30-year Gold Seal NDL',
      poor: 'Carlisle 30-year warranty.',
      better: 'Carlisle Sure-Seal EPDM 60-mil fully adhered, with Carlisle insulation and cover board, 30-year Gold Seal NDL.',
      best: "Carlisle Sure-Seal 60-mil EPDM, fully adhered with Carlisle-approved bonding adhesive over Carlisle polyiso (R-30 nominal) and Carlisle ½″ HD cover board, per Carlisle's published assembly. Registered for the 30-year Gold Seal NDL contingent on Carlisle-authorized applicator of record and submitted as-built. Verify current published Carlisle specification for this assembly before quoting.",
      why: 'A Gold Seal NDL issues only against a complete published assembly. Naming the membrane mil, attachment method, cover-board, insulation R-value, applicator, and source of the spec is what makes the warranty actually register.',
      relatedTermKey: 'Carlisle Gold Seal NDL',
    },
    {
      topic: 'Field-report language for a leak on a ballasted EPDM roof',
      poor: 'Leak on the ballasted roof.',
      better: 'Leak on ballasted EPDM, west side. Roof is 9 years old. Ballast was disturbed during recent solar install.',
      best: 'Leak documented on west elevation of ballasted Carlisle Sure-Seal EPDM. Photos show ballast displaced and seam exposed in the leak area, consistent with the recent solar-panel installation noted by the owner. Roof is in year 9 of a 20-year Carlisle Gold Seal NDL. Recommend Carlisle review of the ballast disturbance: post-install penetrations, anchor blocks, and weight redistribution can fall outside the registered assembly and may shift responsibility for the affected area from the manufacturer to the solar installer.',
      why: 'Ballasted EPDM under an active NDL is a brittle warranty configuration once anyone touches the ballast. A field report that names the displacement, the third-party work, and the year-in-warranty positions the claim correctly from the first sentence.',
      relatedTermKey: 'Carlisle Gold Seal NDL',
    },
    {
      topic: 'Comparing a 20-year Gold Seal NDL on EPDM vs a 25-year Red Shield NDL on EPDM',
      poor: 'The Red Shield is better because it is longer.',
      better: 'Both are NDL warranties on EPDM. The term length difference reflects different assembly specs and installer programs.',
      best: "Both are no-dollar-limit warranties on EPDM membrane, so neither caps the repair cost within its term. The Gold Seal 20-year and Red Shield 25-year are issued against different manufacturer-published assemblies (different approved insulations, cover boards, fasteners, adhesives, and authorized-installer programs). The right comparison is what each assembly actually requires, what the published wind-uplift rating is on the chosen attachment method, and which authorized-installer program your contractor is on — not the year on the cover sheet.",
      why: 'The year number is the cover-sheet headline. The pro answer pulls the comparison back to assembly spec, wind rating, and installer program — the three things that actually drive whether a claim issues.',
      relatedTermKey: 'EPDM Attachment Methods (NDL Implications)',
    },
  ],
};
