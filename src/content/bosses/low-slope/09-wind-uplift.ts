import type { BossBank } from '../types';

// Wind Uplift & Fastening boss — FM ratings (I-90, I-120), ASCE 7
// zones (field/perimeter/corner), fastener density, attachment-method
// trade-offs in high-wind exposure.

export const lowSlope09: BossBank = {
  bossId: 'low-slope-09',

  round1: [
    {
      prompt: 'Wind uplift is best defined as:',
      termKey: 'Wind Uplift',
      choices: [
        'The upward lifting force wind exerts on a roof',
        'The downward pressure of wind blowing across a roof',
        'The lateral drag wind creates at the roof edge',
        'The vacuum created by HVAC equipment',
      ],
    },
    {
      prompt: 'An FM "I-90" wind-uplift rating means the assembly is rated for:',
      termKey: 'Wind Uplift Rating',
      choices: [
        '90 pounds per square foot of uplift pressure',
        '90 mph design wind speed',
        '90 years of service life',
        '90% material recovery in testing',
      ],
    },
    {
      prompt: 'On a typical low-slope roof, where is wind uplift HIGHEST?',
      termKey: 'Wind Zones (Field / Perimeter / Corner)',
      choices: [
        'At the corners',
        'In the field (interior)',
        'At the center of the roof',
        'Uplift is uniform across the roof',
      ],
    },
    {
      prompt: 'ASCE 7 is which kind of document?',
      termKey: 'ASCE 7',
      choices: [
        'The American Society of Civil Engineers minimum-design-loads standard, the basis for wind, snow, and seismic loading in U.S. building codes',
        'A specific FM wind-uplift test method',
        'An OSHA worker-safety standard',
        'A manufacturer warranty form',
      ],
    },
    {
      prompt: 'Fastener density on a mechanically fastened single-ply assembly is typically:',
      termKey: 'Wind Zones (Field / Perimeter / Corner)',
      choices: [
        'Increased at perimeters and corners compared to the field',
        'Uniform across the entire roof',
        'Reduced at perimeters to allow thermal movement',
        'Determined only by manufacturer cost optimization',
      ],
    },
    {
      prompt: 'For the same membrane, which attachment typically achieves the highest published wind-uplift rating?',
      termKey: 'Fully Adhered',
      choices: ['Fully Adhered', 'Mechanically Fastened', 'Ballasted', 'Loose-laid'],
    },
    {
      prompt: 'A roof spec calls for an FM I-120 assembly. What does this NUMBER represent vs an I-90?',
      termKey: 'Wind Uplift Rating',
      choices: [
        '30 psf higher rated uplift resistance (120 vs 90)',
        '30 mph higher design wind speed',
        '30% thicker membrane required',
        '30 years longer warranty',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A coastal Florida warehouse is being re-roofed under a hurricane-prone design wind speed. The contractor proposes a mechanically fastened TPO at an FM I-90 rating with uniform fastener spacing.',
      choices: [
        {
          text: 'Both the rating AND the spacing are problems. FM I-90 may be below the design uplift for this site, and uniform spacing ignores the ASCE 7 wind-zone increases required at perimeters and corners. Recalculate the design wind pressure for the actual site, specify an assembly rated above the calculated value, and apply increased fastener density (or fully adhered) in perimeter and corner zones.',
          correct: true,
        },
        {
          text: 'I-90 is the highest rating available; nothing else can be done.',
          correct: false,
        },
        {
          text: 'Uniform spacing is fine; the corners get the same wind as the field.',
          correct: false,
        },
      ],
      relatedTermKey: 'Wind Zones (Field / Perimeter / Corner)',
    },
    {
      prompt:
        'A 12-year-old fully adhered EPDM roof has membrane lifts and seam separations concentrated along the windward perimeter. Field membrane is intact.',
      choices: [
        {
          text: 'Wind-uplift failure pattern consistent with under-specified perimeter zone — uplift is highest at perimeters and corners, and a uniform-spec assembly fails there first. Document the pattern with photos and field measurements; this is design/spec evidence, not just a warranty defect, and it informs the re-roof spec.',
          correct: true,
        },
        {
          text: 'Just re-glue the perimeter; the original assembly was fine.',
          correct: false,
        },
        {
          text: 'The whole roof must be torn off and replaced field-and-all.',
          correct: false,
        },
      ],
      relatedTermKey: 'Wind Uplift',
    },
    {
      prompt:
        'A specifier is told to "use FM-approved materials" but the project is not in a designated high-wind zone. The owner asks if FM ratings even matter on this project.',
      choices: [
        {
          text: 'FM ratings still matter for the insured-building question — many insurance carriers require FM-rated assemblies regardless of wind zone, and policy language can require it on renewal even outside FM Global insured properties. Confirm the carrier requirement; if not contractually required, follow ASCE 7 design-pressure calculations as the primary driver and use FM ratings as a published assembly basis.',
          correct: true,
        },
        {
          text: 'FM does not matter outside high-wind zones; skip it.',
          correct: false,
        },
        {
          text: 'FM is the only standard; ignore ASCE 7.',
          correct: false,
        },
      ],
      relatedTermKey: 'Factory Mutual (FM)',
    },
  ],

  round3: [
    {
      topic: 'Explaining wind-zone fastener density to an owner reviewing a re-roof bid',
      poor: 'They put more screws at the edges because of wind.',
      better: 'Wind hits the corners and edges harder than the middle, so the fastener spacing tightens there.',
      best: "ASCE 7 divides a low-slope roof into three wind-load zones: field (interior), perimeter (a strip along edges), and corner. Uplift pressure is highest at the corners, second-highest at the perimeter, lowest in the field. The bid should reflect that with tighter fastener spacing (or fully adhered application) in the perimeter and corner zones, not uniform spacing across the roof. A uniform-spec bid is either over-fastening the field or under-fastening the corners — and corner failure is the failure mode that triggers the catastrophic membrane lift.",
      why: "Owners reviewing a bid see fastener count as a generic line item. Naming the three zones, the uplift-pressure pattern, and the failure mode at corners reframes the spec as a calculated design rather than a generic count.",
      relatedTermKey: 'Wind Zones (Field / Perimeter / Corner)',
    },
    {
      topic: 'Documenting a wind-uplift calculation on a record submittal',
      poor: 'Wind-rated assembly.',
      better: 'FM I-120 assembly with increased fastener density at perimeters and corners per ASCE 7.',
      best: "ASCE 7-22 design wind pressure calculated for site (V = 145 mph, Risk Cat II, Exposure C): field zone uplift X psf, perimeter zone Y psf, corner zone Z psf (X<Y<Z). Roof assembly: 60-mil TPO mechanically fastened over polyiso + cover board, FM I-120 rated assembly meeting the corner-zone pressure with manufacturer-published spacing pattern. Perimeter and corner fastener density per manufacturer wind-zone detail. Verify ASCE edition and Risk Category with the design team before final issuance.",
      why: 'The wind-uplift spec is the part of a roof record that is most often boiler-plated. Naming the ASCE edition, the calculated pressures by zone, the FM rating, AND the manufacturer wind-zone detail is what makes the assembly defensible against a future wind claim.',
      relatedTermKey: 'ASCE 7',
    },
    {
      topic: 'Explaining the FA-vs-MF wind trade-off to an owner in a high-wind region',
      poor: 'Fully adhered is better for wind.',
      better: 'Fully adhered typically rates higher for wind uplift than mechanically fastened on the same membrane.',
      best: "On the same membrane and manufacturer, a fully adhered assembly typically achieves a higher published wind-uplift rating than a mechanically fastened assembly because the bond is continuous rather than point-loaded at fasteners. In a high-wind region that often translates to a higher FM I-rating and a higher available NDL warranty wind class. The trade-off is up-front cost: fully adhered material and labor cost more. In a hurricane-exposed coastal building, the wind-claim avoidance usually justifies the cost; for inland low-wind sites, mechanically fastened is often the right value.",
      why: 'Owners weigh up-front cost against future claim cost in the abstract. Naming the failure mode at fasteners, the rating consequence, AND the geographic threshold for the trade-off makes the cost question quantitative.',
      relatedTermKey: 'Fully Adhered',
    },
    {
      topic: 'Field-report language after a high-wind event with corner membrane lift',
      poor: 'Wind blew the corner up.',
      better: 'Membrane lift at the northwest corner after wind event; assembly was a uniform-spec MF TPO.',
      best: "Documented membrane lift and seam separation at the northwest corner of the building following confirmed 80 mph wind gust event (NOAA station X). Lift pattern extends approximately 12 ft into the field from the corner, photos and measurements attached. Original assembly: mechanically fastened TPO, FM I-90 rating, uniform fastener spacing field/perimeter/corner per the project drawings (no zone-increased spacing called out). Failure consistent with under-specified corner zone vs ASCE 7 design pressure for this site. Recommend re-attachment of the lifted area to the current manufacturer corner-zone detail, AND a review of the remaining corners and perimeters for the same under-specification. This is a design/spec issue surfaced by the storm, not a manufacturer warranty defect.",
      why: 'Wind-claim documentation often stops at "wind did it." Naming the gust speed source, the original spec (and what was missing), the failure mode, the corrective scope, and the broader assembly implication makes the report actionable rather than just descriptive.',
      relatedTermKey: 'Wind Zones (Field / Perimeter / Corner)',
    },
  ],
};
