import type { BossBank } from '../types';

// Hail Forensics boss — the deeper forensic methodology layer beyond the
// shingles-06 / "hail on shingles" surface treatment. Haag's scope-and-limits,
// indirect-impact evidence, age/condition adjustments, the test-cut decision.

export const code09: BossBank = {
  bossId: 'code-09',

  round1: [
    {
      prompt: 'Haag Engineering\'s published hail-damage thresholds are most accurately treated as:',
      termKey: 'Haag Engineering',
      choices: [
        'Reference data calibrated to fresh roofing materials in good condition — one informed opinion among several, not policy text',
        'Federal regulations enforced by FEMA',
        'Carrier policy language requiring exact compliance',
        'The single legal definition of damage in all U.S. jurisdictions',
      ],
    },
    {
      prompt: 'AC Coil-Fin Denting is forensically valuable because it:',
      termKey: 'AC Coil-Fin Denting',
      choices: [
        'Provides reliable indirect evidence of the largest hailstone diameter that fell at that location',
        'Is required for insurance coverage',
        'Replaces the need to look at the roof',
        'Is a federal weather measurement standard',
      ],
    },
    {
      prompt: 'The Dent Multiplier (commonly cited as approximately 1.2) is applied as:',
      termKey: 'Dent Multiplier',
      choices: [
        'A rule-of-thumb factor applied to soft-metal dent diameter to estimate the impacting hailstone diameter',
        'A discount on the contractor estimate',
        'The depreciation rate on AC units',
        'The carrier\'s overhead percentage',
      ],
    },
    {
      prompt: 'Spherical vs. Jagged Hail matters in forensic analysis because:',
      termKey: 'Spherical vs. Jagged Hail',
      choices: [
        'Lab tests use smooth molded ice spheres; real hail is irregular and often jagged, which is one reason field damage can occur below lab thresholds',
        'Hail is always perfectly spherical',
        'Spherical hail damages more than jagged hail',
        'The distinction is irrelevant',
      ],
    },
    {
      prompt: 'Terminal Velocity of a hailstone is governed primarily by:',
      termKey: 'Terminal Velocity (Hail)',
      choices: [
        'Stone size, shape, and density — drag balanced against gravity; velocity, not size alone, drives impact energy',
        'Wind direction only',
        'Roof slope and material',
        'Carrier policy limits',
      ],
    },
    {
      prompt: 'PolyISO Hail Crushing is a forensic finding because it:',
      termKey: 'PolyISO Hail Crushing',
      choices: [
        'Documents hidden impact damage to polyisocyanurate insulation beneath an apparently intact membrane — polyiso loses thermal value and compressive strength after impact',
        'Is visible from the ground only',
        'Cannot be measured without lab equipment',
        'Is always cosmetic, never functional',
      ],
    },
    {
      prompt: 'Facer Separation on a rigid insulation board is:',
      termKey: 'Facer Separation',
      choices: [
        'Delamination of the facer from the foam core after impact — a hidden hail-damage indicator that requires opening the assembly to find',
        'A manufacturing defect, never weather',
        'Visible from above without disturbing the membrane',
        'A non-issue for claim purposes',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A carrier engineer denies a hail claim on a commercial TPO roof citing "no visible damage on the membrane." The contractor suspects PolyISO hail crushing beneath an intact-looking membrane.',
      choices: [
        {
          text: 'Surface-only inspection on a low-slope hail claim is insufficient. The assembly can show no visible damage on the membrane while polyiso below has been crushed, losing thermal value and compressive strength. The right move is to escalate to test-cut inspection of the assembly: with carrier permission and full chain-of-custody protocol, take 1–3 cuts at impact-likely locations, document the polyiso condition (compression, facer separation, R-value loss), and submit findings as a supplement. PolyISO crushing is a recognized hail-damage finding; the engineer\'s "no visible damage" framing did not look where the damage lives on this assembly.',
          correct: true,
        },
        {
          text: 'Accept the engineer\'s finding; membrane is the whole assembly.',
          correct: false,
        },
        {
          text: 'Take an unauthorized test cut and submit as evidence.',
          correct: false,
        },
      ],
      relatedTermKey: 'PolyISO Hail Crushing',
    },
    {
      prompt:
        'A carrier engineer\'s report claims the largest stone size at the property was 0.75" based on NOAA storm radar, below the 1.0" threshold for asphalt shingle damage. AC condenser fins at the property show denting averaging 0.85".',
      choices: [
        {
          text: 'The AC fin denting is direct indirect evidence that contradicts the radar-only stone-size estimate. Applying the standard dent-multiplier (~1.2) to 0.85" yields ~1.02" stone, above the threshold. Radar estimates the maximum stone in a storm cell; the actual largest stone at the specific property can differ. Document the AC fin denting with measured photos, calculate the implied stone size, and submit as forensic evidence that the property-specific stone size exceeded the radar-derived figure. Indirect-impact evidence on soft metals at the property is generally more probative than radar-derived storm-cell estimates for that specific address.',
          correct: true,
        },
        {
          text: 'Concede; NOAA radar is the controlling number.',
          correct: false,
        },
        {
          text: 'Dent the AC fins manually to reach the threshold.',
          correct: false,
        },
      ],
      relatedTermKey: 'AC Coil-Fin Denting',
    },
    {
      prompt:
        'A roof has localized impact bruising on the windward slopes (north, west) at counts consistent with hail. The same slopes also show some foot-traffic patterns from a prior contractor walk. The carrier engineer attributes the bruising to foot traffic.',
      choices: [
        {
          text: 'Foot-traffic patterns differ from hail-impact patterns in identifiable ways. Foot traffic produces aligned compression along walking paths, often with granule wear consistent with a sole pattern, and tends to track from access points (ladder location, hatches) along predictable routes. Hail produces randomly-distributed impacts with circular fractured-granule patterns and tactile mat depression, clustered directionally per storm wind. Document the two patterns separately on the same slope: walking-path traces along the access route vs random-distribution impacts in the field. The engineer\'s framing collapses two distinguishable patterns into one — separating them rebuts the foot-traffic-only conclusion without denying that some traffic occurred.',
          correct: true,
        },
        {
          text: 'Concede the foot-traffic finding; the patterns are indistinguishable.',
          correct: false,
        },
        {
          text: 'Argue that foot traffic does not exist as a damage type.',
          correct: false,
        },
      ],
      relatedTermKey: 'Functional Damage',
    },
  ],

  round3: [
    {
      topic: 'Senior forensic narrative on the limits of published hail thresholds',
      poor: 'The threshold is wrong.',
      better: 'Haag\'s published thresholds are calibrated to fresh shingles in good condition with spherical lab hail; field conditions routinely deviate from each assumption, and the deviations matter.',
      best: 'Published hail-damage thresholds (Haag\'s being the most-cited example for asphalt shingles at roughly 1.0-1.25") are reference data, not policy text. Their scope is calibrated: (1) Material condition — fresh shingles in good condition; aged or weathered shingles bruise at smaller stones, and the difference at 12-15 years can be significant. (2) Hail geometry — laboratory tests use smooth molded ice spheres; real hail is irregular, often jagged, sometimes with embedded crystalline rough surfaces that concentrate impact energy. (3) Velocity — stone size correlates with terminal velocity but does not determine it; wind-driven storms can deliver smaller stones at higher effective impact energy. (4) Material specifics — different shingle products at the same nominal weight class can have different impact thresholds based on mat composition, granule grade, and asphalt formulation. The right use of published thresholds is as a reference point in a forensic narrative, paired with the on-roof evidence (tactile-confirmed bruising, granule loss with mat exposure, directional clustering, indirect-impact evidence on soft metals, storm correlation). The wrong use — common in carrier denials — is as a dispositive bar that ends the analysis if the maximum reported stone falls below the published number. Pushback on threshold-only denials is most credible when it engages Haag\'s scope honestly rather than attacking Haag wholesale.',
      why: 'Threshold denials are routine, and they win when contractors attack Haag generically rather than the misuse specifically. Naming the four scope dimensions (material condition, geometry, velocity, material specifics) and pairing them with the on-roof evidence is the senior-forensic deliverable that reopens threshold-denied claims.',
      relatedTermKey: 'Hail Damage Threshold (by Material)',
    },
    {
      topic: 'Documenting indirect-impact evidence on soft metals in a forensic report',
      poor: 'AC unit also has damage.',
      better: 'AC condenser fins, soft-metal flashings, and gutter spatter all document indirect hail impact at the property and are consistent with the storm event.',
      best: 'Indirect-impact evidence at the property (forensic section): (1) AC condenser coil-fin denting: rooftop unit at [location] shows fin denting averaging [diameter] inches, measured at [N] sample locations with caliper, photos #14-22 attached. Applying the standard dent-multiplier of ~1.2 yields an implied impacting-stone diameter of approximately [diameter × 1.2] inches at the rooftop level. This is consistent with the NOAA SPC peak-stone report of ~[NOAA size]" for the [Y/Y/YYYY] event. (2) Soft-metal flashing impacts: [location — e.g., ridge cap, drip edge, vent collar] show measurable impact dents on [count] locations, photos #23-28 attached. The metal gauge is documented; the dents are consistent with hail impact and inconsistent with debris-strike geometry. (3) Gutter spatter: aluminum gutters at [locations] show spatter marks at [pattern density]; the spatter directionality is consistent with the documented storm wind direction (NOAA wind data attached). (4) Window screen impacts: [location] show torn or punctured screens consistent with hail strike at the documented stone size. Each evidence layer independently corroborates the storm event\'s presence and stone size at the property; collectively they document that the property received hail at a size and density that exceeds the published functional-damage threshold for asphalt shingles even before evaluating the on-roof impacts directly. Recommend the carrier-side reviewer evaluate the indirect-impact evidence as part of any threshold analysis.',
      why: 'Indirect-impact evidence is the most underused forensic layer in storm claims. Naming each layer (fin denting with dent-multiplier math, soft-metal impacts, gutter spatter, screen impacts) with measured specifics is what makes the storm presence and stone size defensible independent of any on-roof finding.',
      relatedTermKey: 'AC Coil-Fin Denting',
    },
    {
      topic: 'Field-report language on a test-cut decision in a contested low-slope hail claim',
      poor: 'Took a test cut.',
      better: 'Test cut taken with full protocol; assembly inspection revealed [findings]; cut documented in chain-of-custody log.',
      best: 'Test-cut decision rationale and findings (low-slope hail forensic section): Surface-level inspection of the [membrane type] roof showed no visible membrane damage. The carrier engineer\'s report concluded "no damage" on this basis. However, on a low-slope hail assembly, surface-only inspection is insufficient because hail can crush insulation and delaminate facer beneath an intact membrane — both functional findings that require opening the assembly. Test-cut protocol followed: (1) written carrier notification on [date], confirmation attached; (2) written owner consent on [date], form attached; (3) cut location selected at the highest-impact-likelihood point per the storm wind direction and prior damage indicators, marked on the overview map; (4) cut dimensions, photos before/during/after attached, measurement scale visible; (5) sample labeled, sealed, and stored per chain-of-custody log. Findings: [describe assembly layers as found, with focus on polyiso compression measurement and facer separation observations]. Compression measured: [value] inches reduction at impact site vs adjacent unimpacted location, photos #44-48 attached. Facer separation: visible at [N] sites in the cut, photos attached. R-value loss: estimated [percent] based on documented compression per ASTM C1289 derating curves (attached). Conclusion: the assembly shows functional hail damage to the polyiso layer that surface-only inspection did not capture. The "no damage" finding in the original carrier engineer report did not address the assembly\'s hidden damage; this test-cut documentation closes that evidence gap.',
      why: 'Test-cut reports without the decision rationale, the protocol-step documentation, the measured findings, and the explicit framing against the surface-only original finding get treated as opportunistic. Naming each layer is the senior-forensic deliverable that converts a destructive sample into a defensible piece of evidence.',
      relatedTermKey: 'Test Cut Protocol',
    },
    {
      topic: 'Senior-PM analysis on the age-and-condition adjustment for an aged shingle roof',
      poor: 'The roof is old, so it bruises easier.',
      better: 'Aged shingles bruise at smaller stones than fresh shingles; the appropriate threshold-adjustment for a 14-year-old roof is a fraction of the fresh-shingle published number.',
      best: 'Age-and-condition threshold adjustment (forensic section): Published functional-damage thresholds for asphalt shingles (Haag at ~1.0-1.25" for fresh shingles in good condition) are calibrated to a specific material state. The roof at issue is approximately [N] years old, with documented [condition findings — e.g., moderate granule loss consistent with normal aging, no curling, no missing shingles, no exposed deck]. Age-related changes that reduce hail-impact resistance on asphalt shingles include: (1) asphalt-mat embrittlement from UV exposure, reducing impact-absorption capacity; (2) granule wear, exposing more of the mat surface to direct impact; (3) sealant-strip degradation, reducing the assembly\'s coordinated response to impact; (4) mat-fiber loosening, lowering the energy threshold for mat fracture. The directional combination produces a measurable downward adjustment to the impact-damage threshold relative to fresh material. The literature does not produce a single age-correction coefficient because the adjustment depends on the specific aging mechanisms present, but a 12-15 year aged roof in moderate condition is widely understood in the forensic community to bruise at stone sizes well below the fresh-shingle threshold. The right framing in a contested claim: the published threshold is a starting reference, the on-roof evidence is the dispositive test, and the age-and-condition adjustment is the bridge that explains why on-roof evidence at a documented stone size below the fresh-shingle threshold is still consistent with the published methodology.',
      why: 'Age-and-condition adjustments are routinely either ignored (by carriers) or asserted vaguely (by contractors). Naming the four specific aging mechanisms, the "no single coefficient" honest framing, and the three-part argument (threshold reference + on-roof dispositive + age-bridge) is the senior-forensic deliverable that makes the age adjustment defensible without overreaching.',
      relatedTermKey: 'Hail Damage Threshold (by Material)',
    },
  ],
};
