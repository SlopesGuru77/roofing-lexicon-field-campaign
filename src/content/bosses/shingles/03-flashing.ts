import type { BossBank } from '../types';

// Flashing boss — drip edge, step flashing, kick-out, valley styles
// (open/closed-cut/woven), the assembly defects that drive hidden leaks.

export const shingles03: BossBank = {
  bossId: 'shingles-03',

  round1: [
    {
      prompt: 'Drip edge is best described as:',
      termKey: 'Drip Edge',
      choices: [
        'L- or T-shaped metal trim at eaves and rakes that directs water off the deck and into the gutter',
        'A type of underlayment installed at the edge',
        'A shingle product with a sealant strip on the edge',
        'A drainage mat under the gutters',
      ],
    },
    {
      prompt: 'Step flashing is installed:',
      termKey: 'Step Flashing',
      choices: [
        'One L-shaped piece per shingle course where a roof meets a vertical wall, lapping up the wall with the shingles',
        'As a single long strip along the entire roof-to-wall intersection',
        'Inside the wall cavity',
        'At the ridge only',
      ],
    },
    {
      prompt: 'Kick-out flashing\'s purpose is to:',
      termKey: 'Kick-Out Flashing',
      choices: [
        'Redirect water away from the wall cladding at the bottom of a roof-to-wall intersection',
        'Block ice from forming at the eave',
        'Vent the attic at the gable',
        'Reinforce the corner where two walls meet',
      ],
    },
    {
      prompt: 'An open valley is characterized by:',
      termKey: 'Open Valley',
      choices: [
        'Exposed metal flashing down the centerline of the valley, carrying water',
        'Shingles from both slopes interlaced through the valley',
        'A closed seam where one slope\'s shingles run through and the other is trimmed',
        'No flashing of any kind',
      ],
    },
    {
      prompt: 'A closed-cut valley is built by:',
      termKey: 'Closed-Cut Valley',
      choices: [
        'Running one slope\'s shingles through the valley and trimming the other slope\'s shingles back along the centerline',
        'Interlacing shingles from both slopes through the valley',
        'Leaving the metal flashing exposed down the center',
        'Using only sealant in the valley',
      ],
    },
    {
      prompt: "A woven valley is generally NOT recommended on which type of shingle?",
      termKey: 'Woven Valley',
      choices: [
        'Architectural / laminated shingles (they do not weave cleanly)',
        '3-tab shingles',
        'Composite slate alternatives',
        'Metal shingles (any type)',
      ],
    },
    {
      prompt: 'Missing kick-out flashing at a roof-to-wall termination above siding drives:',
      termKey: 'Kick-Out Flashing',
      choices: [
        'Water behind the cladding, causing hidden wall rot',
        'Ice dams at the eave',
        'Ridge vent failure',
        'Shingle granule loss',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner reports a damp interior wall below a roof-to-wall termination on a 4-year-old house. The roofer says the shingles are fine and refuses to investigate further.',
      choices: [
        {
          text: 'Inspect for a missing or improperly installed kick-out flashing at the bottom of the roof-to-wall intersection. This is the textbook fingerprint: damp wall on a young roof, intact shingles, drip line behind siding. Open the wall cavity if needed; missing kick-outs are a workmanship-defect claim against the original installer, not weather.',
          correct: true,
        },
        {
          text: "Shingles are intact, so the problem must be the home's plumbing.",
          correct: false,
        },
        {
          text: 'Wait for the wall to fail visibly before investigating.',
          correct: false,
        },
      ],
      relatedTermKey: 'Kick-Out Flashing',
    },
    {
      prompt:
        'A contractor installs a closed-cut valley on a high-flow valley collecting runoff from two large laminated-shingle slopes. Two seasons in, the homeowner reports a leak near the bottom of the valley.',
      choices: [
        {
          text: "Open valley is the correct detail for high-flow conditions; closed-cut valleys can be overwhelmed when both slopes are large and laminated, and the seam is the failure point. Recommend re-detailing the valley as open with exposed metal flashing, and document the original detail choice as the root cause.",
          correct: true,
        },
        {
          text: 'A leak at any valley always indicates underlayment failure regardless of valley style.',
          correct: false,
        },
        {
          text: 'Switch to a woven valley — woven works on laminated shingles.',
          correct: false,
        },
      ],
      relatedTermKey: 'Open Valley',
    },
    {
      prompt:
        "On a re-roof tear-off, the contractor finds no drip edge installed at the eaves, but the homeowner's original re-roof was done within the last 8 years. The local code adopted drip-edge requirements 12 years ago.",
      choices: [
        {
          text: "Document the missing drip edge as a code-non-compliant install. Most modern residential codes require drip edge at eaves; absence means the prior re-roof did not meet code at the time. Photograph the eave detail, note the code adoption date, and route the conversation as a code-compliance and workmanship issue, separate from any current claim scope.",
          correct: true,
        },
        {
          text: 'Drip edge is optional; the prior installer made a reasonable choice.',
          correct: false,
        },
        {
          text: 'Install the new shingles without drip edge to match the existing detail.',
          correct: false,
        },
      ],
      relatedTermKey: 'Drip Edge',
    },
  ],

  round3: [
    {
      topic: 'Explaining why kick-out flashing matters to a homeowner who has never heard of it',
      poor: 'You need this little piece of metal at the wall.',
      better: 'Kick-out flashing diverts water away from the wall cladding at the bottom of a roof-to-wall intersection; without it water runs behind the siding.',
      best: "Where a roof slope meets a wall and ends above siding, the water running down the roof needs to be redirected outward into the gutter — not allowed to continue running down the wall behind the siding. Kick-out flashing is the small metal diverter that does this. When it's missing, the water finds the wall cavity and rots the sheathing, the framing, and eventually the interior drywall, all behind intact-looking siding. The damage is hidden for years before anyone notices, which is why missing kick-outs are one of the most expensive workmanship-defect findings in residential roofing.",
      why: "Owners hear 'flashing' as generic. Naming the specific failure path (behind the siding), the time horizon (hidden for years), and the cost class (most expensive workmanship defects) makes the small metal piece feel proportionate to the stakes.",
      relatedTermKey: 'Kick-Out Flashing',
    },
    {
      topic: 'Documenting a flashing spec on a re-roof contract',
      poor: 'All flashings new.',
      better: 'All flashings replaced: new drip edge at eaves and rakes, new step flashing at roof-to-wall, new kick-out flashings, valleys re-flashed.',
      best: "All roof flashings replaced new with the re-roof scope: galvanized or pre-finished aluminum drip edge at all eaves and rakes; new step flashing (one piece per shingle course) at every roof-to-wall intersection; new kick-out flashing at every roof-to-wall termination above siding; new pre-formed valley metal (open valley detail for high-flow valleys, closed-cut acceptable for short / lower-flow valleys); new pipe boots and roof curb counter-flashings. Existing flashings are not to be reused unless documented in writing and approved by the homeowner.",
      why: 'Re-roof contracts that say "all flashings new" without enumeration are routinely shortcut in the field. Naming each flashing type AND a no-reuse-without-approval clause closes the door on substitution.',
      relatedTermKey: 'Flashing',
    },
    {
      topic: 'Explaining the open vs closed-cut vs woven valley decision to a homeowner',
      poor: 'Open valleys are the best.',
      better: 'Open valleys handle high water flow best; closed-cut is common on architectural shingles; woven is mostly obsolete.',
      best: "Three valley styles. Open valley exposes a metal flashing down the centerline — best for high-flow valleys (two large slopes draining together) and easiest to inspect. Closed-cut runs one slope's shingles through and trims the other along the centerline — common on architectural shingles, clean appearance, works on moderate flow. Woven interlaces shingles from both slopes — mostly obsolete because architectural shingles do not weave cleanly. For most architectural-shingle homes, the choice is between open (for high-flow or where you want the metal as a visible secondary defense) and closed-cut (for moderate-flow, cleaner look).",
      why: 'Owners default to whatever the contractor proposes without understanding the trade-off. Naming the three styles, the flow logic, and the architectural-shingle constraint puts the choice in the owner\'s hands.',
      relatedTermKey: 'Open Valley',
    },
    {
      topic: 'Field-report language for hidden wall rot traced to missing kick-out flashing',
      poor: 'Wall rot from missing kick-out.',
      better: 'Wall sheathing rot below roof-to-wall intersection consistent with chronic water running behind cladding due to missing kick-out flashing.',
      best: "Investigated reported interior wall dampness below the master-bedroom soffit. Removed siding at the wall termination below the roof slope. Found no kick-out flashing installed; existing step flashing terminates at the eave without a diverter. Wall sheathing shows chronic moisture staining and rot extending approximately 36 inches down the wall from the termination point and 18 inches laterally (photos attached). The damage pattern (chronic, contained to the area directly below the missing kick-out, well-defined moisture line) is consistent with multiple years of water shedding off the roof and behind the siding. This is a workmanship defect originating with the original or most recent re-roof installer, not a weather event. Recommend scope: re-side affected wall section, replace rotted sheathing, install kick-out flashing per current standard, document for claim against the responsible installer.",
      why: "Hidden-wall-rot claims often get mis-routed as storm damage or general home maintenance. Naming the absent flashing, the rot pattern as consistent with chronic-and-contained rather than event-driven, and the responsible-installer claim path sets the homeowner up for the right recovery.",
      relatedTermKey: 'Kick-Out Flashing',
    },
  ],
};
