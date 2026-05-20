import type { BossBank } from '../types';

// Insulation Under Low-Slope boss — polyiso, EPS, XPS, LTTR, R-value
// derating in cold, compatibility (XPS/EPS direct contact with PVC),
// tapered insulation for slope.

export const lowSlope06: BossBank = {
  bossId: 'low-slope-06',

  round1: [
    {
      prompt: 'Which rigid roof insulation has the highest R-value per inch at room temperature?',
      termKey: 'Polyisocyanurate (PolyISO)',
      choices: [
        'Polyisocyanurate (PolyISO)',
        'Expanded Polystyrene (EPS)',
        'Extruded Polystyrene (XPS)',
        'Mineral wool',
      ],
    },
    {
      prompt: 'Which insulation is generally the cheapest per unit R-value and holds its R-value over time?',
      termKey: 'Expanded Polystyrene (EPS)',
      choices: [
        'Expanded Polystyrene (EPS)',
        'Polyisocyanurate (PolyISO)',
        'Extruded Polystyrene (XPS)',
        'High-Density PolyISO (HD ISO)',
      ],
    },
    {
      prompt: 'What does LTTR represent?',
      termKey: 'Long-Term Thermal Resistance (LTTR)',
      choices: [
        'A standardized 15-year time-weighted R-value for closed-cell foam insulation',
        'The R-value at the moment of manufacture',
        'The lifetime cumulative R-value summed across years',
        'The R-value tested under thermal-shock conditions',
      ],
    },
    {
      prompt: 'Both EPS and XPS in direct contact with a PVC membrane cause:',
      termKey: 'Extruded Polystyrene (XPS)',
      choices: [
        'Plasticizer migration that embrittles the PVC',
        'A bond stronger than required, voiding the warranty',
        'Color change in the membrane only',
        'No effect — they are fully compatible',
      ],
    },
    {
      prompt: 'When EPS or XPS must be placed under a PVC membrane, what is required?',
      termKey: 'Separator Sheet',
      choices: [
        'A separator sheet between the polystyrene and the PVC',
        'A direct adhesive bond between them',
        'A bituminous primer between them',
        'Nothing — modern PVC has been reformulated',
      ],
    },
    {
      prompt: 'A roof spec calls for R-30 minimum and the insulation is PolyISO. What is the LTTR consideration?',
      termKey: 'Long-Term Thermal Resistance (LTTR)',
      choices: [
        'Specify against the LTTR (15-year time-weighted) value, not the fresh-from-the-press value, so the assembly actually delivers R-30 in service',
        'Use the fresh value; LTTR is a marketing number',
        "LTTR doesn't apply to roof polyiso",
        'LTTR is the same as R-value',
      ],
    },
    {
      prompt: 'Tapered insulation is used to:',
      termKey: 'Tapered Insulation',
      choices: [
        'Build slope into an otherwise flat roof and direct water toward drains',
        'Add thermal mass at corners only',
        'Provide hail-impact resistance',
        'Stiffen the roof for foot traffic',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A Minnesota distribution-center re-roof has been spec\'d at R-30 using PolyISO at fresh-value calculations. A reviewer flags that the building runs at well-below-freezing temperatures for months at a time.',
      choices: [
        {
          text: 'PolyISO R-value derates in cold; the LTTR value will not reflect deep-cold service. Either thicken the polyiso to hit R-30 at the design service temperature, hybridize with EPS or mineral wool below the polyiso (which holds R-value at cold temperatures better), or both. Recalculate to the building\'s design temperature, not the lab 75°F mean.',
          correct: true,
        },
        {
          text: 'Ignore the reviewer — R-value is R-value at any temperature.',
          correct: false,
        },
        {
          text: 'Switch entirely to XPS; XPS has unlimited R-value at cold temperatures.',
          correct: false,
        },
      ],
      relatedTermKey: 'R-Value',
    },
    {
      prompt:
        'Tear-off of a 10-year-old PVC roof reveals XPS insulation in direct contact with the underside of the membrane, and the PVC is stiff and brittle in those areas.',
      choices: [
        {
          text: 'Plasticizer migration: XPS, like EPS, pulls plasticizer out of PVC and embrittles it. The fix on the new install is a separator sheet between the polystyrene and the PVC. Document the assembly failure mode for the project record so it is not repeated.',
          correct: true,
        },
        {
          text: 'The PVC was simply old; brittleness is age-related.',
          correct: false,
        },
        {
          text: 'XPS is required under PVC by code; this is normal.',
          correct: false,
        },
      ],
      relatedTermKey: 'Extruded Polystyrene (XPS)',
    },
    {
      prompt:
        'A spec calls for the lowest-cost assembly that meets an R-30 minimum on a low-slope warehouse with a TPO membrane.',
      choices: [
        {
          text: 'EPS at the required thickness is typically the lowest cost per unit R-value and holds its R-value over time. Confirm compatibility (TPO over EPS is fine; no separator required for TPO), check thickness against tapered-insulation needs, and verify wind-uplift on the chosen attachment.',
          correct: true,
        },
        {
          text: 'XPS is always cheaper than EPS and PolyISO.',
          correct: false,
        },
        {
          text: 'PolyISO is always the cheapest because it needs less thickness.',
          correct: false,
        },
      ],
      relatedTermKey: 'Expanded Polystyrene (EPS)',
    },
  ],

  round3: [
    {
      topic: 'Explaining R-value derating in cold to an owner',
      poor: "R-value drops when it's cold.",
      better: 'PolyISO loses R-value at low temperatures, so a spec calculated at 75°F will under-perform in a cold climate.',
      best: "PolyISO is rated at a 75°F mean test temperature, where it has the highest R-value per inch of any common rigid roof insulation. As temperatures drop below about 25°F mean, its R-value falls measurably — that is why cold-climate specs either thicken the polyiso, use the LTTR value, or hybridize with EPS or mineral wool below the polyiso to backstop the cold-temperature performance.",
      why: "Owners and even some engineers assume R-value is a single static number. Naming the test temperature, the derating curve, and the three mitigation paths reframes the spec as a temperature-dependent calculation.",
      relatedTermKey: 'Polyisocyanurate (PolyISO)',
    },
    {
      topic: 'Documenting an LTTR-based polyiso spec on a record drawing',
      poor: 'R-30 polyiso.',
      better: 'R-30 polyiso, specified against LTTR.',
      best: "PolyISO insulation specified at the manufacturer-published LTTR (15-year time-weighted R-value per ASTM C1289), aggregate LTTR of the assembly ≥ 30. Insulation thickness sized accordingly, not against fresh-from-the-press values. Verify current LTTR figure with the supplied manufacturer at submittal — figures change as formulations evolve.",
      why: 'Specifying \"R-30 polyiso\" without naming LTTR leaves an ambiguity that becomes a code or warranty argument later. Naming LTTR, the test standard, and the verification step closes the loop.',
      relatedTermKey: 'Long-Term Thermal Resistance (LTTR)',
    },
    {
      topic: 'Explaining the EPS/XPS-under-PVC compatibility issue to an owner',
      poor: "You can't put polystyrene under PVC.",
      better: 'EPS and XPS in direct contact with PVC pull plasticizer out of the membrane, which embrittles it.',
      best: "PVC membrane contains plasticizers that keep it flexible. Polystyrene foam (EPS or XPS) in direct contact will pull those plasticizers out of the membrane over time, leaving the PVC stiff and brittle and prone to cracking at folds and seams. The fix is a slip-sheet separator between the polystyrene and the PVC — a documented requirement on PVC assemblies that include polystyrene insulation.",
      why: 'This is one of the most common preventable assembly failures on PVC roofs. Owners hearing about it for the first time need the mechanism (plasticizer migration), the consequence (embrittlement), and the standard fix (separator sheet) in one breath.',
      relatedTermKey: 'PVC',
    },
    {
      topic: 'Field-report language for wet polyiso found after a storm',
      poor: 'Polyiso is wet.',
      better: 'Wet polyiso found under torn TPO at north corner; flagged for replacement before re-cover.',
      best: 'Documented wet PolyISO insulation beneath storm-torn TPO at the north corner, photos attached. Moisture-meter readings show elevated moisture extending approximately 6 ft beyond the visible tear in all directions. Wet polyiso loses R-value irreversibly and degrades the substrate bond for the new membrane; the wet sections must be cut out and replaced (not dried and reused) before re-cover. This is part of the storm claim scope, not a manufacturer warranty.',
      why: 'Wet insulation is the part of a storm tear-off that owners and adjusters most often try to ignore. Naming the moisture-meter extent, the R-value consequence, and the correct claim path (storm scope, not warranty) keeps the conversation honest.',
      relatedTermKey: 'Polyisocyanurate (PolyISO)',
    },
  ],
};
