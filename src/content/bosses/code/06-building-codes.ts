import type { BossBank } from '../types';

// Building Codes boss — IBC, IRC, NRCA standards, ordinance-or-law coverage,
// the "code requires upgrade" supplement, the edition-controls problem.

export const code06: BossBank = {
  bossId: 'code-06',

  round1: [
    {
      prompt: 'The IBC (International Building Code) is:',
      termKey: 'IBC (International Building Code)',
      choices: [
        'The model commercial building code published by the International Code Council, adopted with amendments by most U.S. jurisdictions',
        'A federal statute that overrides state codes',
        'A trade-association recommendation with no force of law',
        'A homeowner association rule',
      ],
    },
    {
      prompt: 'The IRC (International Residential Code) governs:',
      termKey: 'IRC (International Residential Code)',
      choices: [
        'One- and two-family dwellings — underlayment, ice-and-water shield, drip edge, and shingle installation requirements',
        'Commercial high-rises',
        'All buildings without exception',
        'Only mobile homes',
      ],
    },
    {
      prompt: 'When a city has adopted the 2018 IRC and the 2021 IRC is the most recent published edition, the controlling edition for a roof repair in that city is:',
      termKey: 'IRC (International Residential Code)',
      choices: [
        'The 2018 IRC as adopted with local amendments — the published edition is not the controlling edition; the adopted edition is',
        'The most recent published edition always',
        'Whichever edition the contractor prefers',
        'Both editions simultaneously',
      ],
    },
    {
      prompt: 'Ordinance or Law (O&L) coverage in a property policy is:',
      termKey: 'Ordinance or Law Coverage',
      choices: [
        'Policy coverage that pays for code-required upgrades triggered by a repair or rebuild beyond the original construction',
        'A separate roof warranty',
        'A federal subsidy',
        'A discount for code-compliant homes',
      ],
    },
    {
      prompt: 'On a re-roof that triggers a code-required deck-sheathing nailing pattern upgrade not present on the existing roof, the upgrade cost is generally:',
      termKey: 'Ordinance or Law Coverage',
      choices: [
        'Recoverable under O&L coverage if the policy carries that endorsement, up to the O&L sublimit',
        'Always the homeowner\'s out-of-pocket',
        'Always the contractor\'s overhead',
        'Always paid by the city',
      ],
    },
    {
      prompt: 'NRCA recommendations on cold-climate roof insulation (e.g., R-30 above the deck) are:',
      termKey: 'NRCA Cold-Climate R-30',
      choices: [
        'Trade-association guidance — influential and updated periodically, not the same as adopted code',
        'Federally enforced minimums',
        'Cosmetic preferences',
        'Replaced by the IBC verbatim',
      ],
    },
    {
      prompt: 'ASCE 7 is the standard most directly referenced for:',
      termKey: 'ASCE 7',
      choices: [
        'Minimum design loads — wind, snow, and seismic — used as the basis for U.S. building codes',
        'Shingle color selection',
        'Roofing contractor licensing',
        'Insurance policy language',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner in a cold-climate jurisdiction has a hail-replacement scope. The existing roof has no ice-and-water shield at the eaves; the current IRC requires it past the interior wall line. The carrier estimate omits the ice-and-water shield.',
      choices: [
        {
          text: 'File a supplement under O&L coverage. Cite the adopted IRC edition for the jurisdiction (verify by phone or website with the AHJ), the specific code section requiring ice-and-water shield placement, and the line-item cost of the upgrade. The original roof predates the current code; the repair triggers the code requirement; O&L is the coverage that closes the gap. Attach the AHJ\'s code-edition confirmation, the code section, and the upgrade scope; request review under the policy\'s O&L sublimit.',
          correct: true,
        },
        {
          text: 'Install without the shield to match the existing assembly and skip code.',
          correct: false,
        },
        {
          text: 'Tell the homeowner to pay for the upgrade out of pocket.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ordinance or Law Coverage',
    },
    {
      prompt:
        'A carrier estimator argues that "the IRC does not apply because this is a repair, not a new build." The contractor knows the local jurisdiction has adopted threshold-based code triggers (repairs over X% of the roof area trigger code compliance on the affected area).',
      choices: [
        {
          text: 'Confirm the local code-trigger rule with the AHJ (Authority Having Jurisdiction) and document the response in writing. Many jurisdictions adopt the IRC with local amendments that trigger code requirements at specific repair thresholds — commonly 25%, 33%, or 50% of the roof area. If the scope crosses the local threshold, the IRC requirements apply to the affected work and the carrier estimator\'s general "this is a repair" framing is wrong on this specific jurisdiction. Attach the AHJ\'s written confirmation to the supplement.',
          correct: true,
        },
        {
          text: 'Accept the estimator\'s framing.',
          correct: false,
        },
        {
          text: 'Argue from federal law.',
          correct: false,
        },
      ],
      relatedTermKey: 'IRC (International Residential Code)',
    },
    {
      prompt:
        'A policy carries an Ordinance or Law sublimit of $10,000. The code-required upgrade scope on a full re-roof is $24,000.',
      choices: [
        {
          text: 'The carrier pays up to the $10,000 sublimit on the O&L coverage; the remaining $14,000 is either owner out-of-pocket, scope reduction, or — if the policy carries no O&L at all — a renewal-cycle conversation about increasing the O&L limit. Brief the homeowner on the math at the supplement stage so they understand the gap and the source. Do not promise full coverage and explain later; explain the sublimit at the supplement stage and present a financing or scope-reduction plan.',
          correct: true,
        },
        {
          text: 'Carrier pays the full $24,000 regardless.',
          correct: false,
        },
        {
          text: 'Contractor absorbs the $14,000 gap to keep the job.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ordinance or Law Coverage',
    },
  ],

  round3: [
    {
      topic: 'Explaining code-edition-and-amendments to a homeowner whose carrier denies a code upgrade',
      poor: 'The code requires it.',
      better: 'The local jurisdiction has adopted a specific edition of the IRC with local amendments; that edition is what governs your repair, not the most recent edition published or the carrier\'s opinion.',
      best: 'Building codes do not work like federal law where the most recent published edition automatically applies. They are model codes (IRC for residences, IBC for commercial) published by the International Code Council, and each city, county, or state then chooses an edition to adopt and may add local amendments. The controlling code on your repair is the edition your jurisdiction (the AHJ — Authority Having Jurisdiction) has actually adopted, plus its amendments. So a city sitting on the 2018 IRC with a local amendment that triggers code compliance at 25% roof-area replacement is the controlling rule for your repair, not the most recent IRC or the carrier estimator\'s general claim that "code does not apply to repairs." The first move on any code-required-upgrade supplement is a phone call or email to the AHJ to confirm the adopted edition, the threshold trigger, and the specific code section — get it in writing if you can, even a brief email. That AHJ confirmation is what wins the supplement.',
      why: 'Code-vs-carrier disputes are routinely lost when contractors cite "the code" generally rather than the adopted-edition-with-amendments specifically. Naming the model-vs-adopted distinction, the AHJ as the authority, and the written-confirmation procedural step is what converts a vague code argument into a defensible one.',
      relatedTermKey: 'IRC (International Residential Code)',
    },
    {
      topic: 'Documenting an ordinance-or-law supplement on a deck-sheathing upgrade',
      poor: 'Code requires new deck.',
      better: 'The 2021 IRC adopted by [jurisdiction] requires re-nailing or sheathing replacement on the existing deck during a re-roof; existing condition is non-compliant; cost is $X under O&L coverage.',
      best: 'Re: Supplement under Ordinance or Law (O&L) coverage. Code citation: [Jurisdiction] has adopted the [Year] IRC with the [list any amendments] amendments, confirmed by [AHJ contact name and title] on [date] via [email/phone] (confirmation attached). The controlling code section is [Section X.Y.Z], which requires [specific requirement — e.g., re-nailing of the existing deck per Table R905.X.X, or full sheathing replacement where deck condition does not meet the spec]. Existing condition: documented deck inspection (photos attached) shows [findings — original 6d nail spacing of 12" o.c. on field; current code requires 6" o.c. on field and 4" o.c. on edges]. Triggered scope: re-nailing of [X square feet] of existing deck per current spec, OR sheathing replacement of [Y square feet] where deck is unsalvageable; cost per the attached line-item estimate is $[Z]. O&L sublimit per the declarations page is $[A]; current request is within (or up to) the sublimit. Request: approval of the O&L line items at $[Z] (or up to the $[A] sublimit, whichever is lower) under the policy\'s Ordinance or Law endorsement.',
      why: 'O&L supplements without AHJ confirmation, specific section citation, before-and-after spec comparison, and the sublimit math get rejected as "we don\'t require that." Naming each layer is what produces a desk adjuster approval rather than a re-iteration of the denial.',
      relatedTermKey: 'Ordinance or Law Coverage',
    },
    {
      topic: 'Field-report language on a code-required ice-and-water shield placement',
      poor: 'Ice and water shield required by code.',
      better: '[Year] IRC adopted by [jurisdiction] requires ice-and-water shield to extend at least 24" past the interior wall plane at the eave in this climate zone.',
      best: 'Code-required underlayment scope per [Year] IRC as adopted by [jurisdiction] (AHJ confirmation attached). Climate zone for the property: [Zone, per the IRC climate-zone map]. Controlling section: IRC R905.1.2 (Ice Barriers), as amended locally by [if any]. Requirement: an ice barrier (commonly self-adhered rubberized-asphalt or equivalent meeting the IRC\'s test standards) installed from the eave edge to a point at least 24 inches inside the exterior wall line of the building. On a roof with [overhang dimension], the required up-slope coverage from the eave edge is [calculated value] inches. Existing condition: ice-and-water shield is either absent (verified by tear-off observation, photos attached) or is shorter than the current code requirement at the eaves. Scope: install code-compliant ice barrier from eave to the calculated up-slope line, with end-laps and overlaps per the manufacturer\'s spec; valleys and penetrations also covered per the same section. This is a code-required upgrade beyond the existing assembly and should be quoted under O&L coverage on this policy, not against the standard like-kind-and-quality scope.',
      why: 'Code-trigger reports without IRC section, climate zone, the specific dimensional requirement, and the existing-condition basis for the upgrade get treated as "preference" rather than "required." Naming each layer with the calculated value is what makes the supplement non-negotiable at the carrier\'s desk.',
      relatedTermKey: 'IRC (International Residential Code)',
    },
    {
      topic: 'Senior-PM analysis on whether to argue code on a contested claim',
      poor: 'Argue code.',
      better: 'Code arguments succeed when the adopted edition, the specific section, the AHJ confirmation, and the dimensional/quantitative spec are all documented; they fail when "the code says so" stands alone.',
      best: 'Code-supplement decision framework: (1) Adopted edition: confirmed in writing with the AHJ — without this, the code argument is "current IRC" vs the carrier\'s "earlier edition," and the carrier wins on edition disputes more often than the contractor. (2) Specific section and dimensional spec: the supplement cites the section number, the requirement, and the calculated dimensional output for this specific property — not a general "code requires X." (3) Existing condition gap: documented with photos and measurements showing the existing assembly does not meet the current adopted code. (4) O&L coverage on the policy: confirmed on the declarations page, sublimit identified, and the request scoped within the sublimit. (5) Local trigger: if the repair is partial, the local repair-threshold amendment is documented and the scope exceeds the threshold. Missing any of these turns a winnable supplement into a losing one; including all of them turns a "we don\'t require that" into a desk-adjuster approval. The cost of doing the work: about 90 minutes of phone calls, photos, and writing. The cost of skipping it: the homeowner pays out of pocket or absorbs the gap, and the contractor either eats the difference or has an uncomfortable conversation.',
      why: 'Code supplements are won or lost on the procedural completeness, not on the merits of the code itself. Naming the five-layer framework and the time-cost framing is the senior-PM deliverable that turns "we should argue code" from a vague aspiration into a checklist that closes claims.',
      relatedTermKey: 'Ordinance or Law Coverage',
    },
  ],
};
