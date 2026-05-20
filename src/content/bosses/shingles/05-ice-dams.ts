import type { BossBank } from '../types';

// Ice Dams & Cold-Climate Roofing boss — formation mechanism,
// Ice & Water Shield placement, attic-insulation root cause, heat-tape
// stopgap, soffit-vent thermal break.

export const shingles05: BossBank = {
  bossId: 'shingles-05',

  round1: [
    {
      prompt: 'An ice dam forms when:',
      termKey: 'Ice Dam',
      choices: [
        'Heated attic air melts snow on the upper roof, runoff refreezes at the cold eave overhang',
        'Wind freezes water against the soffit',
        'Frost accumulates on the inside of the soffit vent',
        'A roof leak releases warm water onto the eave',
      ],
    },
    {
      prompt: 'Ice and Water Shield blocks ice-dam back-up by:',
      termKey: 'Ice and Water Shield',
      choices: [
        'Providing a self-adhered membrane that water cannot penetrate, even driven uphill against gravity',
        'Heating the eave to prevent refreeze',
        'Diverting water sideways into the gutter',
        'Vapor-blocking from the attic side',
      ],
    },
    {
      prompt: 'The PRIMARY root cause of ice dams in most cold-climate homes is:',
      termKey: 'Ice Dam',
      choices: [
        'Inadequate attic insulation and air sealing, letting heat escape into the attic',
        'Asphalt shingles being inherently cold',
        'Lack of gutter heating elements',
        'Snow itself; no homeowner control',
      ],
    },
    {
      prompt: 'A "warm roof / cold roof" line in residential roofing refers to:',
      termKey: 'Ice Dam',
      choices: [
        'The thermal boundary between the heated portion of the roof (over the insulated attic) and the unheated overhang at the eave',
        'A code-required boundary between heating zones in the home',
        'A type of shingle product',
        'A flashing detail at the chimney',
      ],
    },
    {
      prompt: 'Most modern residential codes require Ice and Water Shield to extend from the eave:',
      termKey: 'Ice and Water Shield',
      choices: [
        'At least 24 inches past the interior wall plane (or further per local amendment)',
        'Only across the first 6 inches at the eave',
        'Across the entire field',
        'Only at penetrations',
      ],
    },
    {
      prompt: 'Heat cable (heat tape) installed at the eave is best understood as:',
      termKey: 'Ice Dam',
      choices: [
        'A maintenance stopgap, not a substitute for fixing attic insulation and air sealing',
        'A code-required system in cold climates',
        'A permanent solution that eliminates ice dams',
        'A power-vent component',
      ],
    },
    {
      prompt: "A balanced attic ventilation system helps prevent ice dams by:",
      termKey: 'Balanced Ventilation',
      choices: [
        'Keeping the attic close to outside temperature, so heated attic air does not melt the upper roof snow',
        'Heating the eave overhang',
        'Diverting water laterally into the gutter',
        'Removing snow from the field directly',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A Minnesota homeowner files an interior-ceiling water-damage claim every winter. The roof was re-shingled 4 years ago with synthetic underlayment field-only, no Ice and Water Shield. The contractor argues the roof is "new" and the leaks are not their problem.',
      choices: [
        {
          text: 'The original install missed code-required Ice and Water Shield at the eaves. Repeat winter back-up under ice-dam conditions is the predictable failure mode. Document the missing underlayment, the code requirement at install date, and frame the conversation as a workmanship/code-compliance defect with the original installer, not as repeated weather events.',
          correct: true,
        },
        {
          text: 'New roofs do not leak; the homeowner must be imagining it.',
          correct: false,
        },
        {
          text: 'Install heat cable and call it solved.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ice and Water Shield',
    },
    {
      prompt:
        'A homeowner with chronic ice dams asks whether the right fix is heavy heat cables along the eaves or insulating the attic better.',
      choices: [
        {
          text: 'Insulation and air-sealing the attic floor is the root-cause fix. Heat cables are a maintenance stopgap that mask the underlying problem (heated attic melting upper-roof snow). Recommend an energy audit, then air-seal ceiling penetrations and add insulation to current code R-value before considering heat cables as a backup.',
          correct: true,
        },
        {
          text: 'Heat cables are the standard fix; insulation is unrelated.',
          correct: false,
        },
        {
          text: 'Replace the shingles with a snow-shedding metal roof; that fixes it.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ice Dam',
    },
    {
      prompt:
        'A 12-year-old home has Ice and Water Shield installed only across the first 6 inches at the eaves — well short of the 24-inch-past-interior-wall code standard. The owner reports ceiling staining behind the exterior wall on the first floor.',
      choices: [
        {
          text: 'Insufficient Ice and Water Shield coverage is the assembly defect. Ice-dam back-up commonly extends well past the eave into the field; if the membrane stops short of the interior wall plane, water that breaches the shingles past the membrane runs into the wall cavity and stains behind the exterior wall, exactly as described. Document the as-built coverage, the code-required coverage at install date, and route as an installer defect.',
          correct: true,
        },
        {
          text: 'Ice and Water Shield depth is a personal-preference choice; code does not specify it.',
          correct: false,
        },
        {
          text: 'The interior staining is unrelated to the roof.',
          correct: false,
        },
      ],
      relatedTermKey: 'Ice and Water Shield',
    },
  ],

  round3: [
    {
      topic: 'Explaining ice-dam formation to a homeowner experiencing them for the first time',
      poor: 'The eave is freezing the water.',
      better: 'Heat from the attic melts snow on the upper roof; the runoff hits the cold overhang and refreezes there.',
      best: "Ice dams form because of a temperature difference along the roof surface. Above the heated interior, the roof is warmed by escaping attic heat, which melts the snow sitting on it. The runoff flows down the slope to the overhang — which is above unheated outside air and stays at outside temperature — and refreezes there. The ice ridge that builds at the eave dams up the next round of meltwater, which then backs UP under the shingles. The shingles are designed to shed water going down, not up; that is why ice-dam water gets into the assembly. The fix is to even out the temperature: insulate and air-seal the attic floor so less heat escapes, balance the attic ventilation so what does escape is carried out, and use Ice and Water Shield at the eave as the secondary defense for the moments when ice still forms.",
      why: 'Owners misunderstand ice dams as a snow problem. Naming the thermal mechanism, the up-the-slope water path, and the layered fix (insulation, ventilation, underlayment) reframes it as a building-envelope problem with a triage.',
      relatedTermKey: 'Ice Dam',
    },
    {
      topic: 'Documenting an ice-dam-prevention scope on a cold-climate re-roof',
      poor: 'Ice and water at the eaves.',
      better: 'Self-adhered Ice and Water Shield at all eaves and valleys, 24" past interior wall plane.',
      best: "Cold-climate ice-dam prevention scope: (1) Self-adhered Ice and Water Shield at all eaves extending a minimum of 24 inches past the interior wall plane (more per any local amendment), at all valleys (full-length, full-width), and at penetrations. (2) Attic-floor inspection — air-seal all ceiling penetrations (top plates, vent stacks, light fixtures), top up insulation to current local code R-value (typically R-49 to R-60 in cold climates). (3) Verify balanced soffit-and-ridge ventilation per 1:300 NFA. Ice and Water Shield is the secondary defense; the primary prevention is the air-seal and insulation work.",
      why: "Ice-dam re-roof scopes commonly stop at 'ice and water at the eaves' without addressing the root cause. Naming the underlayment, the air-seal, the insulation, and the ventilation as a single coordinated scope is what actually stops the recurring claim cycle.",
      relatedTermKey: 'Ice and Water Shield',
    },
    {
      topic: 'Explaining why heat cables are NOT a real solution',
      poor: 'Heat cables do not work.',
      better: 'Heat cables melt a channel through the ice but do not stop the dam from forming in the first place; they treat the symptom.',
      best: "A heat cable is an electric resistance wire that runs along the eave and through the gutter, melting a narrow channel through the ice so meltwater has a path off the roof. It works — water does flow through — but it does not stop the upper-roof snow from melting and refreezing at the eave; it just gives the resulting water somewhere to go. It runs on electricity (a real operating cost), it doesn't address the underlying heat loss into the attic, and if it breaks the system reverts to a full ice dam. As a permanent solution it is a treadmill; as a band-aid on a home that genuinely cannot be insulated (e.g., a finished cathedral ceiling with no access), it can be the right call. The question is which one applies.",
      why: 'Heat cables get sold as a fix. Naming what they do (treat the symptom), what they cost (operating cost + future failure), and the narrow case where they are the right call frames the decision honestly.',
      relatedTermKey: 'Ice Dam',
    },
    {
      topic: 'Field-report language for repeated winter leaks traced to inadequate Ice and Water Shield',
      poor: 'Ice dam leaks again this winter.',
      better: 'Recurring winter leak at the eave on the [N] elevation; Ice and Water Shield coverage is short of the interior wall plane.',
      best: "Documented recurring winter leak at the [north] elevation eave, ceiling staining in the [room] aligned with the [feature]. Removed shingles at the leak location to expose underlayment. Ice and Water Shield installed only across the first [6] inches at the eave, terminating well short of the 24-inch-past-interior-wall-plane standard. Photos attached. Pattern is consistent with chronic ice-dam back-up exceeding the membrane coverage and entering the wall cavity at the top plate. Roof was last re-shingled [4] years ago; coverage was below current code at install date. Recommend: scope to expose the eave course, install code-compliant Ice and Water Shield depth, route remediation as a workmanship/code-compliance claim against the [original installer / current owner of the prior roofing company].",
      why: 'Recurring winter leak claims often get bundled as "weather damage" and rejected. Naming the underlayment coverage gap, the code requirement at install date, the documented attribution to the installer, and the recurring pattern is what gets the claim onto the right party.',
      relatedTermKey: 'Ice and Water Shield',
    },
  ],
};
