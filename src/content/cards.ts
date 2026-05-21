import type { CardDef, Zone } from '../types';

// 33 cards = 10 standard + 1 mastery per zone × 3 zones.
// Card IDs use the pattern: <zone-slug>-<NN>[-mastery]
// term_key references must match a TERMS[].t value in library.ts
// Owner to finalize specific term selections; placeholders shown for shape.

export const CARDS: CardDef[] = [
  // ---------- Shingles ----------
  { id: 'shingles-01', zone: 'shingles', name: 'Shingle Anatomy', termKey: 'Asphalt Shingle', illustrationPath: '/illustrations/shingles-01.png', isMastery: false, blurb: '3-tab vs architectural/laminated, fiberglass mat, sealant strip, starter, hip-and-ridge.' },
  { id: 'shingles-02', zone: 'shingles', name: 'Underlayment', termKey: 'Ice and Water Shield', illustrationPath: '/illustrations/shingles-02.png', isMastery: false, blurb: 'Synthetic vs felt underlayment, Ice & Water Shield at eaves/valleys, deck condition.' },
  { id: 'shingles-03', zone: 'shingles', name: 'Flashing', termKey: 'Step Flashing', illustrationPath: '/illustrations/shingles-03.png', isMastery: false, blurb: 'Drip edge, step flashing, kick-out flashing, valley styles (open/closed-cut/woven).' },
  { id: 'shingles-04', zone: 'shingles', name: 'Ventilation', termKey: 'Balanced Ventilation', illustrationPath: '/illustrations/shingles-04.png', isMastery: false, blurb: 'Intake/exhaust balance, 1:300 ratio, NFA, ridge/soffit/gable/power vents, depressurization.' },
  { id: 'shingles-05', zone: 'shingles', name: 'Ice Dams', termKey: 'Ice Dam', illustrationPath: '/illustrations/shingles-05.png', isMastery: false, blurb: 'Ice-dam formation, attic-insulation root cause, Ice & Water Shield placement, heat-cable as stopgap.' },
  { id: 'shingles-06', zone: 'shingles', name: 'Hail on Shingles', termKey: 'Granule Loss', illustrationPath: '/illustrations/shingles-06.png', isMastery: false, blurb: 'Functional vs cosmetic, granule-loss patterns, Haag thresholds, age/condition, directional clustering.' },
  { id: 'shingles-07', zone: 'shingles', name: 'Wind on Shingles', termKey: 'Starter Shingle', illustrationPath: '/illustrations/shingles-07.png', isMastery: false, blurb: 'Sealant strip bonding, 4-nail vs 6-nail, ASTM D7158 wind ratings, workmanship vs storm patterns.' },
  { id: 'shingles-08', zone: 'shingles', name: 'Class 4 IR', termKey: 'Impact-Resistant Shingle', illustrationPath: '/illustrations/shingles-08.png', isMastery: false, blurb: 'UL 2218 Class 4 testing, insurance premium discount paperwork, raised-threshold-not-immunity.' },
  { id: 'shingles-09', zone: 'shingles', name: 'Roof Geometry', termKey: 'Roof Slope (Pitch)', illustrationPath: '/illustrations/shingles-09.png', isMastery: false, blurb: 'Slope notation, hip vs gable, valleys as flow concentrators, dormers, low-slope minimums.' },
  { id: 'shingles-10', zone: 'shingles', name: 'Shingle Brand Warranties', termKey: 'GAF Golden Pledge', illustrationPath: '/illustrations/shingles-10.png', isMastery: false, blurb: 'GAF Golden Pledge / OC Platinum / CertainTeed SureStart Plus / IKO ShieldPro Plus and their certified-contractor programs.' },
  { id: 'shingles-11-mastery', zone: 'shingles', name: 'Shingles Mastery', termKey: '__mastery__', illustrationPath: '/illustrations/shingles-mastery.png', isMastery: true, blurb: 'Final exam across the Shingles zone.' },

  // ---------- Low-Slope ----------
  { id: 'low-slope-01', zone: 'low-slope', name: 'NDL Warranty', termKey: 'No Dollar Limit (NDL) Warranty', illustrationPath: '/illustrations/low-slope-01.png', isMastery: false, blurb: 'Brand-specific NDL warranty: JM TPO vs Duro-Last PVC, fully adhered vs mechanically fastened.' },
  { id: 'low-slope-02', zone: 'low-slope', name: 'EPDM NDL', termKey: 'EPDM', illustrationPath: '/illustrations/low-slope-02.png', isMastery: false, blurb: 'EPDM brand warranties: Carlisle Gold Seal vs Elevate Red Shield, ballasted vs adhered vs mechanically fastened.' },
  { id: 'low-slope-03', zone: 'low-slope', name: 'Mod-Bit NDL', termKey: 'Modified Bitumen', illustrationPath: '/illustrations/low-slope-03.png', isMastery: false, blurb: 'Modified bitumen brand warranties: Siplast, Soprema, JM Peak Advantage; hot vs cold vs torch vs self-adhered.' },
  { id: 'low-slope-04', zone: 'low-slope', name: 'Built-Up Roofing', termKey: 'Built-Up Roof (BUR)', illustrationPath: '/illustrations/low-slope-04.png', isMastery: false, blurb: 'BUR fundamentals: asphalt vs coal-tar, plies, hot vs cold process, hybrid mod-bit cap.' },
  { id: 'low-slope-05', zone: 'low-slope', name: 'Cool Roof', termKey: 'Cool Roof', illustrationPath: '/illustrations/low-slope-05.png', isMastery: false, blurb: 'Solar reflectance, emissivity, SRI, CRRC labeling, Title 24 cool-roof compliance.' },
  { id: 'low-slope-06', zone: 'low-slope', name: 'Insulation', termKey: 'Polyisocyanurate (PolyISO)', illustrationPath: '/illustrations/low-slope-06.png', isMastery: false, blurb: 'PolyISO, EPS, XPS, LTTR, R-value derating in cold, EPS/XPS-under-PVC compatibility.' },
  { id: 'low-slope-07', zone: 'low-slope', name: 'Cover Board', termKey: 'Cover Board', illustrationPath: '/illustrations/low-slope-07.png', isMastery: false, blurb: 'DensDeck vs HD ISO vs perlite vs fiberboard; cover board often decides hail survival.' },
  { id: 'low-slope-08', zone: 'low-slope', name: 'Coatings & Restoration', termKey: 'Roof Coating', illustrationPath: '/illustrations/low-slope-08.png', isMastery: false, blurb: 'Acrylic vs silicone vs urethane; coat vs recover vs replace; recoatability lock-in.' },
  { id: 'low-slope-09', zone: 'low-slope', name: 'Wind Uplift', termKey: 'Wind Uplift', illustrationPath: '/illustrations/low-slope-09.png', isMastery: false, blurb: 'FM I-ratings (I-90, I-120), ASCE 7 wind zones (field/perimeter/corner), fastener density, FA vs MF.' },
  { id: 'low-slope-10', zone: 'low-slope', name: 'Drainage', termKey: 'Positive Drainage', illustrationPath: '/illustrations/low-slope-10.png', isMastery: false, blurb: 'Positive drainage 48-hour rule, ponding as warranty + design defect, tapered insulation, scuppers, crickets.' },
  { id: 'low-slope-11-mastery', zone: 'low-slope', name: 'Low-Slope Mastery', termKey: '__mastery__', illustrationPath: '/illustrations/low-slope-mastery.png', isMastery: true, blurb: 'Final exam across the Low-Slope zone.' },

  // ---------- Code ----------
  { id: 'code-01', zone: 'code', name: 'Claim Fundamentals', termKey: 'Cause of Loss', illustrationPath: '/illustrations/code-01.png', isMastery: false, blurb: 'Cause of Loss, ACV vs RCV, percentage wind/hail deductibles, the two-check structure.' },
  { id: 'code-02', zone: 'code', name: 'Depreciation', termKey: 'Recoverable Depreciation', illustrationPath: '/illustrations/code-02.png', isMastery: false, blurb: 'Recoverable vs non-recoverable, ACV-only endorsements on older roofs, age-weighted depreciation supplements.' },
  { id: 'code-03', zone: 'code', name: 'Adjusters', termKey: 'Adjuster', illustrationPath: '/illustrations/code-03.png', isMastery: false, blurb: 'Field / Desk / Independent / Public — who decides what, and the contractor-vs-PA licensing boundary.' },
  { id: 'code-04', zone: 'code', name: 'Engineer Reports', termKey: 'Engineer Rebuttal', illustrationPath: '/illustrations/code-04.png', isMastery: false, blurb: 'Carrier engineer reports as retained opinions; methodology-gap rebuttals; when to hire independent engineering.' },
  { id: 'code-05', zone: 'code', name: 'Chain of Custody & Evidence', termKey: 'Chain of Custody (Forensic)', illustrationPath: '/illustrations/code-05.png', isMastery: false, blurb: 'Test-cut protocol, photo documentation standard, sample storage, metadata integrity — protocol as evidence defense.' },
  { id: 'code-06', zone: 'code', name: 'Building Codes', termKey: 'IRC (International Residential Code)', illustrationPath: '/illustrations/code-06.png', isMastery: false, blurb: 'IBC vs IRC, adopted-edition-with-amendments, AHJ confirmation, Ordinance-or-Law (O&L) supplements.' },
  { id: 'code-07', zone: 'code', name: 'Statutes & Limitations', termKey: 'Statute of Limitations (Property Claims)', illustrationPath: '/illustrations/code-07.png', isMastery: false, blurb: 'Three running clocks: notice of loss, Proof of Loss, state SoL; ROR; EUO; appraisal vs litigation.' },
  { id: 'code-08', zone: 'code', name: 'PA vs Restoration Contractor', termKey: 'Restoration Contractor vs Public Adjuster', illustrationPath: '/illustrations/code-08.png', isMastery: false, blurb: 'The licensing line: contractor does work + damage docs, public adjuster negotiates claim; AOB regulation; defensible contract scope.' },
  { id: 'code-09', zone: 'code', name: 'Hail Forensics', termKey: 'Haag Engineering', illustrationPath: '/illustrations/code-09.png', isMastery: false, blurb: 'Haag scope-and-limits, indirect-impact evidence on soft metals, age/condition adjustment, PolyISO crushing, facer separation.' },
  { id: 'code-10', zone: 'code', name: 'Storm-Restoration Compliance Marketing', termKey: 'Storm-Restoration Solicitation Laws', illustrationPath: '/illustrations/code-10.png', isMastery: false, blurb: 'Post-storm registration, statutory rescission notices, deductible-rebate prohibition, contract template hygiene, team standing orders.' },
  { id: 'code-11-mastery', zone: 'code', name: 'Code Mastery', termKey: '__mastery__', illustrationPath: '/illustrations/code-mastery.png', isMastery: true, blurb: 'Final exam across the Code zone.' },
];

export const ZONES: Zone[] = ['shingles', 'low-slope', 'code'];

export const ZONE_LABEL: Record<Zone, string> = {
  shingles: 'Shingles',
  'low-slope': 'Low-Slope',
  code: 'Code',
};

export function cardsByZone(zone: Zone): CardDef[] {
  return CARDS.filter(c => c.zone === zone);
}

export function cardById(id: string): CardDef | undefined {
  return CARDS.find(c => c.id === id);
}

export function masteryCard(zone: Zone): CardDef | undefined {
  return CARDS.find(c => c.zone === zone && c.isMastery);
}
