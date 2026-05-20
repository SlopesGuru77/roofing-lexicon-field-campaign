import type { BossBank } from '../types';

// Low-Slope Mastery Exam — broader, harder, samples across bosses 01-10
// covering NDL warranties (brand-specific), BUR, cool roof, insulation,
// cover board, coatings, wind, and drainage. 90% pass threshold (enforced
// by the BossRunner via the card's isMastery flag). 20 questions total.

export const lowSlope11Mastery: BossBank = {
  bossId: 'low-slope-11-mastery',

  round1: [
    {
      prompt: 'A 25-year JM Peak Advantage NDL on TPO and a 20-year Duro-Last NDL on PVC differ in term length primarily because of:',
      termKey: 'JM Peak Advantage NDL',
      choices: [
        'Different program structures and assembly specs — both are NDL warranties with no cost cap within their term',
        'JM membrane is fundamentally better than Duro-Last',
        'Duro-Last excludes labor and JM does not',
        'JM covers storm damage and Duro-Last does not',
      ],
    },
    {
      prompt: "Elevate's NDL warranty for RubberGard EPDM is known as:",
      termKey: 'Red Shield NDL',
      choices: ['Red Shield NDL', 'Gold Seal NDL', 'Peak Advantage NDL', 'Diamond Pledge NDL'],
    },
    {
      prompt: 'Coal-tar pitch BUR is the historical fit for what type of low-slope condition?',
      termKey: 'Coal Tar Pitch',
      choices: [
        'Dead-level slopes and standing water tolerance',
        'High-wind coastal exposure',
        'Cool-roof energy compliance',
        'Hail-prone climates',
      ],
    },
    {
      prompt: 'CRRC publishes BOTH initial and aged values for reflectance because:',
      termKey: 'Solar Reflectance (Albedo)',
      choices: [
        'Reflectance drops over time from dirt, weathering, and pollution',
        'Initial is for the lab, aged is for storage',
        'They are required by the IRS',
        'They are identical and one is redundant',
      ],
    },
    {
      prompt: 'On a PVC roof assembly, EPS or XPS insulation MUST be installed:',
      termKey: 'Separator Sheet',
      choices: [
        'With a separator sheet between the polystyrene and the PVC',
        'In direct adhered contact with the membrane',
        'Only as a top layer',
        'Without any cover board',
      ],
    },
    {
      prompt: 'In hail testing, which cover board generally outperforms HD ISO?',
      termKey: 'DensDeck',
      choices: ['DensDeck (gypsum)', 'Fiberboard', 'Perlite', 'HD ISO outperforms gypsum'],
    },
    {
      prompt: 'A silicone roof coating that needs recoating in 10 years is most readily recoated with:',
      termKey: 'Silicone Coating',
      choices: [
        'Another silicone coat — silicone is typically only recoatable with silicone',
        'Acrylic over silicone',
        'Urethane over silicone',
        'Coal-tar over silicone',
      ],
    },
    {
      prompt: 'Wind uplift on a low-slope roof is HIGHEST at:',
      termKey: 'Wind Zones (Field / Perimeter / Corner)',
      choices: ['Corners', 'The field interior', 'Mid-perimeter', 'The center of the roof'],
    },
    {
      prompt: 'A roof that does not fully drain within 48 hours of rain is, by industry standard:',
      termKey: 'Ponding Water',
      choices: [
        'Considered to have ponding, which most NDL warranties exclude',
        'Within normal operating parameters',
        'Automatically a hail-related condition',
        'A failure of the deck only',
      ],
    },
    {
      prompt: 'A 4-ply asphalt BUR is named for what?',
      termKey: 'Ply',
      choices: [
        'The four layers of felt within the membrane',
        'Four years of warranty',
        'Four coats of bitumen',
        'Four inches of total thickness',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A specifier is choosing between Johns Manville TPO fully adhered (25-year Peak Advantage NDL) and Carlisle Sure-Weld TPO mechanically fastened (20-year Gold Seal NDL) for a coastal Florida warehouse in a high-wind exposure zone.',
      choices: [
        {
          text: 'Recommend the fully adhered JM assembly. In a coastal high-wind zone, fully adhered typically achieves a higher published wind-uplift rating than mechanically fastened on the same membrane class, and the longer NDL term reflects a more capable assembly. Verify the FM I-rating and ASCE 7 design pressure for the actual site before final spec.',
          correct: true,
        },
        {
          text: 'Always take the longer warranty regardless of attachment.',
          correct: false,
        },
        {
          text: 'Take the cheaper mechanically fastened bid because the warranty is the same kind (NDL).',
          correct: false,
        },
      ],
      relatedTermKey: 'Fully Adhered',
    },
    {
      prompt:
        'A 10-year-old fully adhered Carlisle Sure-Seal EPDM under an active Gold Seal NDL shows a leak at a seam. Tear-back reveals the original seam tape is in good condition but a recent field repair used an aftermarket (non-Carlisle) seam tape product.',
      choices: [
        {
          text: 'Document the substitution before submitting the warranty. NDL warranties require approved components throughout; the aftermarket repair likely voids coverage at that location, even though the original assembly is intact. Photograph the repair, identify who performed it, and ask Carlisle how they want it handled before submitting.',
          correct: true,
        },
        {
          text: 'Submit the warranty as-is and hope the substitution is not noticed.',
          correct: false,
        },
        {
          text: 'Cut out the entire field and re-tape with Carlisle product before submitting.',
          correct: false,
        },
      ],
      relatedTermKey: 'Carlisle Gold Seal NDL',
    },
    {
      prompt:
        'A Minnesota cold-storage facility re-roof is spec\'d at R-30 PolyISO using fresh-from-the-press R-value calculations. The reviewer flags below-freezing service temperatures inside the building.',
      choices: [
        {
          text: 'PolyISO R-value derates significantly in cold. Either thicken the polyiso to hit R-30 at design service temperature, hybridize with EPS or mineral wool below the polyiso (which holds R-value better in cold), or both. Calculate against LTTR and the actual design temperature, not the lab 75°F mean.',
          correct: true,
        },
        {
          text: 'PolyISO R-value is constant; no adjustment needed.',
          correct: false,
        },
        {
          text: 'Switch entirely to XPS; XPS has unlimited cold R-value.',
          correct: false,
        },
      ],
      relatedTermKey: 'Polyisocyanurate (PolyISO)',
    },
    {
      prompt:
        'A 14-year-old Siplast 3-ply SBS roof under an active 20-year Siplast NDL has multiple seam leaks concentrated in ponding areas covering ~20% of the field. The owner wants a manufacturer warranty claim.',
      choices: [
        {
          text: 'Document the ponding as a separate finding before submitting. Siplast NDL (like other NDL warranties) excludes leaks caused by ponded water. The ponding is a slope/drainage design defect with its own claim path. Both items need to be documented separately — they have different remedies and different responsible parties.',
          correct: true,
        },
        {
          text: 'Submit the warranty and omit the ponding observation.',
          correct: false,
        },
        {
          text: 'Tell the owner that ponding does not affect coverage.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ponding Water',
    },
    {
      prompt:
        'A property already has two roof layers (original BUR + 12-year-old mod-bit recover). The mod-bit cap is failing. Owner asks for a third recover to save tear-off cost.',
      choices: [
        {
          text: 'A third recover is not allowed by most U.S. building codes (two-layer cap is standard). Full tear-off to the deck and a new assembly is the required path. Verify local code interpretation in writing, then scope the tear-off cost honestly for the owner.',
          correct: true,
        },
        {
          text: 'Recover again — codes do not actually limit roof layers in commercial work.',
          correct: false,
        },
        {
          text: 'Apply a fluid coating to avoid the code layer count.',
          correct: false,
        },
      ],
      relatedTermKey: 'Recover',
    },
  ],

  round3: [
    {
      topic: 'Senior consultant explaining the assembly-vs-warranty relationship to a board of directors',
      poor: 'The warranty is what matters.',
      better: "The NDL warranty is only as good as the assembly it is registered against.",
      best: "An NDL warranty is a manufacturer's promise against material and labor cost for repair, with no dollar cap, for a stated term — but it is registered against a specific published assembly (membrane, attachment, cover board, insulation, installer credential). Any deviation from that assembly — substituting a non-approved insulation, using an aftermarket repair product, letting a non-authorized contractor touch the roof — can void coverage in the affected area without voiding the rest of the warranty. The right question for the board is not 'do we have the warranty' but 'do we have the documented assembly that the warranty was issued against, AND a maintenance practice that preserves it.'",
      why: 'Boards see warranties as binary (covered/not covered). Reframing as registered assembly + preservation practice gets the maintenance budget approved at the same meeting.',
      relatedTermKey: 'No Dollar Limit (NDL) Warranty',
    },
    {
      topic: 'Documenting a complete low-slope assembly for a 30-year service life',
      poor: '30-year roof.',
      better: 'Fully adhered TPO, FM I-120, R-30 polyiso, gypsum cover board, tapered for 1/4":12, 30-year manufacturer NDL.',
      best: "60-mil fully adhered TPO membrane (manufacturer's premium product line), FM I-120 rated assembly, over manufacturer-approved bonding adhesive on ½″ glass-mat gypsum cover board (DensDeck Prime or equivalent), over Type II polyiso insulation aggregating R-30 LTTR. Tapered polyiso provides 1/4 in/ft minimum slope to four interior drains. ASCE 7 design pressure calculated for site; perimeter and corner zone fastener density per manufacturer wind-zone detail. Registered for the manufacturer's 30-year NDL contingent on authorized-applicator submittal and a 24-month roof-washing maintenance practice tied to a CRRC-listed reflectance retention spec. Verify current published manufacturer specification at submittal.",
      why: 'A 30-year NDL assembly that gets specified at one line of text is the configuration most likely to drift during construction. Naming every layer, the wind basis, the slope, the maintenance contingency, and the verification step is what makes the warranty actually issue and stay valid.',
      relatedTermKey: 'JM Peak Advantage NDL',
    },
    {
      topic: 'Forensic-investigator report after a hail event on a TPO over HD ISO assembly under an active NDL',
      poor: 'Hail did damage even though it doesn\'t look like it.',
      better: 'Test cuts show HD ISO cover-board fractures under intact-looking TPO; the assembly was compromised by hail.',
      best: "Site documented after confirmed [size]-inch hail event on [date]. Top-of-membrane TPO field shows minor surface bruising, no through-punctures (photos attached). Six test cuts taken across field, perimeter, and corner zones reveal HD ISO cover-board fracturing and crushing beneath the bruised areas, with measurable depth and pattern consistent with hail energy passing through the membrane to the cover board. Original assembly: 60-mil TPO over HD ISO over polyiso, manufacturer NDL in year 7. Functional damage is concealed beneath the intact-looking membrane and will telegraph to leaks within 6-24 months as thermal cycling and foot traffic exploit the bruise pattern. Recommend the carrier and the manufacturer be brought to the site jointly for the next inspection. This finding is hail/storm damage (carrier path), not a manufacturer warranty defect (which is excluded for storms anyway).",
      why: "Hail claims on TPO over HD ISO are routinely denied on top-of-membrane appearance. Naming the energy-transfer mechanism, the test-cut evidence, the delayed-failure timeline, the warranty exclusion (storm), and the correct carrier path is what makes the forensic report defensible against an adjuster's surface-only inspection.",
      relatedTermKey: 'Cover Board',
    },
    {
      topic: 'Explaining the cool-roof / energy-code interaction to a property owner in California',
      poor: 'California requires a cool roof.',
      better: 'Title 24 requires CRRC-listed cool-roof products on low-slope re-roofs in defined climate zones, with both initial and aged reflectance thresholds.',
      best: "California Title 24 prescriptive requirements apply CRRC-listed cool-roof thresholds to low-slope roofs in defined climate zones, including for re-roofs above a certain scope threshold. The spec must hit BOTH initial AND aged reflectance values (the aged value is what the membrane delivers in service after weathering), and the project closeout must include the CRRC listing number in the building file. The practical owner consequence is twofold: (1) the membrane or coating choice is constrained to CRRC-listed cool products with adequate aged values, and (2) the long-term reflectance — and therefore the energy benefit — depends on a maintained roof, not just the original install. A roof-washing schedule is part of the compliance commitment, not optional housekeeping.",
      why: "Title 24 is regularly explained as a single number or a single product list. Naming both the initial AND aged values, the listing-number documentation requirement, AND the maintenance commitment is what makes the compliance honest and durable.",
      relatedTermKey: 'Cool Roof',
    },
    {
      topic: 'Specifier explaining the FA-vs-MF wind decision to an owner in a non-coastal high-wind region',
      poor: 'Fully adhered is better for wind.',
      better: 'Fully adhered typically rates higher for wind uplift than mechanically fastened on the same membrane, and that matters in a high-wind region.',
      best: "On the same membrane and manufacturer, a fully adhered assembly typically achieves a higher published wind-uplift rating than a mechanically fastened assembly because the bond is continuous rather than point-loaded at fasteners. ASCE 7 design pressure for this site (verify the actual design wind speed and Risk Category) suggests an FM I-rating that mechanically fastened can meet only with substantially tighter fastener spacing in perimeter and corner zones — which is a real cost and a real failure-mode risk if the spacing detail is missed in the field. Fully adhered is more expensive up front but takes the perimeter/corner spacing question off the table. The decision depends on the gap between the calculated design pressure and the available mechanically fastened rating in the perimeter zone specifically — that is the line that decides it, not a generic 'fully adhered is better.'",
      why: 'The FA-vs-MF wind discussion regularly collapses to a generic preference. Naming the failure mode at fasteners, the ASCE 7 zoning, the corner-perimeter spacing detail, and the cost-vs-detail trade-off makes the spec decision auditable.',
      relatedTermKey: 'Attachment Method (NDL Implications)',
    },
  ],
};
