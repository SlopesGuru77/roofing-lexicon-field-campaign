import type { BossBank } from '../types';

// Attic Ventilation boss — intake/exhaust balance, 1:300 ratio, NFA,
// ridge/soffit/gable/power vents, power-vent depressurization risk.

export const shingles04: BossBank = {
  bossId: 'shingles-04',

  round1: [
    {
      prompt: 'Intake ventilation in a residential attic is typically located:',
      termKey: 'Intake Ventilation',
      choices: [
        'At the soffits',
        'At the ridge',
        'On the gable walls',
        'On the roof surface above the field',
      ],
    },
    {
      prompt: 'Exhaust ventilation devices include:',
      termKey: 'Exhaust Ventilation',
      choices: [
        'Ridge vents, gable vents, turbines, and power vents',
        'Soffit vents and starter strips',
        'Drip edge and step flashing',
        'Underlayment and ice & water shield',
      ],
    },
    {
      prompt: 'A ridge vent is most efficiently paired with what intake source?',
      termKey: 'Ridge Vent',
      choices: [
        'Continuous soffit vents along the eaves',
        'Gable vents on both ends',
        'No intake — ridge vents stand alone',
        'A single power vent on the opposite slope',
      ],
    },
    {
      prompt: 'A gable vent on a home that already has ridge and soffit vents typically causes:',
      termKey: 'Gable Vent',
      choices: [
        'Short-circuiting of the ridge-and-soffit airflow path',
        'Improved airflow because more vents are always better',
        'A code violation in all jurisdictions',
        'No effect on airflow',
      ],
    },
    {
      prompt: 'A power vent paired with inadequate intake can:',
      termKey: 'Power Vent',
      choices: [
        'Pull conditioned air through ceiling penetrations and drive moisture problems',
        'Increase intake airflow automatically',
        'Improve heating efficiency in winter',
        'Replace the need for soffit vents',
      ],
    },
    {
      prompt: 'The conventional 1:300 attic ventilation ratio means:',
      termKey: '1:300 Ventilation Ratio',
      choices: [
        '1 sq ft of net free vent area per 300 sq ft of attic floor, when intake and exhaust are properly split',
        '1 sq ft of vent per 300 sq ft of roof surface',
        '1 ridge vent per 300 sq ft of attic',
        '1 soffit vent per 300 sq ft of soffit length',
      ],
    },
    {
      prompt: 'Net Free Area (NFA) is:',
      termKey: 'Net Free Area (NFA)',
      choices: [
        'The unobstructed opening area of a vent product, in square inches',
        'The total exterior dimension of the vent',
        'The free area of the attic itself',
        'The vent\'s published airflow rate',
      ],
    },
  ],

  round2: [
    {
      prompt:
        "A homeowner reports peeling paint on the gable end ceiling and a musty attic smell. The attic has a power vent in the gable and no soffit vents. The power vent runs constantly in summer.",
      choices: [
        {
          text: 'Classic depressurization-from-inadequate-intake. The power vent has no soffit intake to pull from, so it pulls makeup air from the conditioned space below — pulling moist interior air into the attic where it condenses and rots/molds. Add intake (continuous soffit vents) to balance the system, OR remove the power vent and switch to balanced ridge-and-soffit. Without balance, the appliance is creating the problem.',
          correct: true,
        },
        {
          text: 'The power vent is sized correctly; the homeowner is imagining the moisture.',
          correct: false,
        },
        {
          text: 'Add a second power vent to exhaust harder.',
          correct: false,
        },
      ],
      relatedTermKey: 'Power Vent',
    },
    {
      prompt:
        'A re-roof contractor installs a continuous ridge vent over the existing gable vents without removing or sealing the gable vents. Six months later, the homeowner reports premature shingle weathering near the ridge.',
      choices: [
        {
          text: 'The gable vents and ridge vent are competing — gable air is taking the short path out the ridge instead of pulling fresh air across the entire attic. Block or remove the gable vents so the ridge-and-soffit path is the only one; this is the documented fix for mixed-exhaust systems. Re-evaluate intake NFA at the same time.',
          correct: true,
        },
        {
          text: 'More venting is always better; ignore the gable vents.',
          correct: false,
        },
        {
          text: 'The shingle weathering is unrelated to ventilation.',
          correct: false,
        },
      ],
      relatedTermKey: 'Gable Vent',
    },
    {
      prompt:
        'A 2,400 sq ft attic has soffit vents totaling 800 sq in of NFA and a ridge vent totaling 600 sq in of NFA. The homeowner asks if this meets the 1:300 standard.',
      choices: [
        {
          text: 'At 1:300, the requirement is 2,400 / 300 = 8 sq ft = 1,152 sq in TOTAL NFA, split roughly evenly between intake and exhaust. Total available is 1,400 sq in (800 intake + 600 exhaust) — over the minimum. The split is acceptable (intake slightly higher than exhaust is preferred). Document the calculation in the project record.',
          correct: true,
        },
        {
          text: 'The roof fails the standard.',
          correct: false,
        },
        {
          text: 'The split is wrong — exhaust must be higher than intake.',
          correct: false,
        },
      ],
      relatedTermKey: '1:300 Ventilation Ratio',
    },
  ],

  round3: [
    {
      topic: 'Explaining intake-exhaust balance to a homeowner whose attic is hot and humid',
      poor: 'You need more vents.',
      better: 'You need balanced intake at the soffits AND exhaust at the ridge; one without the other does not work.',
      best: "Attic ventilation works by air movement, not by hole count. Cool outside air enters at the soffit (low side, intake), warms and rises through the attic, and exits at the ridge (high side, exhaust). If one side is missing — no soffit intake, or no ridge exhaust — there is no continuous airflow path, and the existing vents either short-circuit each other or pull makeup air from the conditioned space below. The fix is balance: roughly matched NFA at the soffits and at the ridge, with no competing gable or power vents fighting the path.",
      why: "Owners default to 'add more vents.' Naming the airflow path, the intake-exhaust dependency, and the short-circuit risk reframes the problem from quantity to design.",
      relatedTermKey: 'Balanced Ventilation',
    },
    {
      topic: 'Documenting an attic ventilation calculation on a re-roof submittal',
      poor: 'Adequate attic ventilation provided.',
      better: 'Attic ventilation: 1,200 sq in continuous soffit intake, 900 sq in continuous ridge exhaust, meets 1:300 ratio for 2,500 sq ft attic.',
      best: "Attic ventilation per code 1:300 ratio: attic floor area 2,500 sq ft requires minimum 1,200 sq in of net free vent area total. Provided: 1,200 sq in continuous soffit intake (perforated aluminum, [product]), 900 sq in continuous ridge exhaust ([product]). Intake/exhaust split satisfies the 50/50 rule of thumb. No competing gable, power, or turbine vents in the attic — any existing such devices to be blocked or removed during re-roof. Verify the local jurisdiction has not adopted a stricter 1:150 ratio.",
      why: 'Ventilation calcs are commonly hand-waved on residential submittals. Naming the area, the rule, the actual NFA values, the product source, AND the no-competing-vents clause closes the loop.',
      relatedTermKey: 'Net Free Area (NFA)',
    },
    {
      topic: 'Explaining why a power vent can be the wrong choice',
      poor: 'Power vents are usually bad.',
      better: 'Power vents need adequate intake; without it they pull air from the house and cause moisture problems.',
      best: "A power vent is a mechanical fan that pulls air out of the attic. If the attic has plenty of soffit intake, the fan pulls from outside and the system works. If intake is inadequate — partially blocked soffits, original construction with no soffit vents, insulation packed against the soffit — the fan pulls its makeup air from the conditioned house below, through ceiling penetrations, light fixtures, attic-access hatches. That can depressurize the home, backdraft combustion appliances, and pull humid interior air into the attic where it condenses on the underside of the deck and grows mold. The fix is either adequate intake matched to the fan, or removing the power vent in favor of balanced passive ventilation.",
      why: "Power vents get sold as 'turbocharged attic cooling.' Naming the makeup-air dependency, the combustion-appliance backdraft risk, and the alternative (passive balanced ventilation) puts the decision in informed-consent territory.",
      relatedTermKey: 'Power Vent',
    },
    {
      topic: 'Field-report language for inadequate intake on an existing roof',
      poor: 'Not enough soffit vents.',
      better: 'Soffit intake is below the 1:300 ratio for this attic; recommend adding continuous soffit vents to balance with the existing ridge exhaust.',
      best: "Inspected attic ventilation per current 1:300 standard. Attic floor area approximately 1,800 sq ft (requires 864 sq in NFA total). Existing soffit intake: localized vents only, total measured NFA approximately 200 sq in (well below the ~432 sq in intake side of the requirement). Existing ridge exhaust: continuous ridge vent, NFA approximately 500 sq in (over the exhaust side). System is imbalanced — exhaust over-vented, intake under-vented. Photos of soffit conditions attached; insulation packing visible in approximately 30% of the soffit cavity, further reducing usable intake. Recommend (1) clearing soffit baffles or installing rafter baffles where insulation blocks airflow, (2) adding continuous soffit-edge vents to bring intake NFA above 432 sq in, (3) verifying no power-vent or gable-vent short-circuits remain in the attic.",
      why: 'Ventilation problems get reported as "needs more vents" without diagnosis. Naming the calculated requirement, the measured shortfall, the insulation-packing component, AND the corrective scope makes the report usable as a work order.',
      relatedTermKey: 'Intake Ventilation',
    },
  ],
};
