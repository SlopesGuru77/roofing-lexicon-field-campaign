/**
 * library.ts — typed data port of the v3 "Complete Roofing Lexicon" content.
 *
 * Source: ../../../The Commercial Roofing Lexicon/index.html (sibling repo, do not modify).
 * Data blocks ported here:
 *   1. CATS              — 17 category groups
 *   2. TIER_NAME         — tier number → label
 *   3. TERMS             — 223 lexicon terms
 *   4. SCENARIOS         — 16 field-judgment scenarios
 *   5. COMPAT            — 26 compatibility matrix entries
 *   6. PLAIN_ENGLISH     — 41-entry plain-English dictionary keyed by term name
 *   7. REPORT_PAIRS      — 20 report-language poor/better/best drills
 *   8. HAIL_THRESHOLDS   — 11-row hail damage threshold reference
 *   9. TEST_CUT_STEPS    — 9-step destructive test-cut protocol
 *  10. CURRICULA         — 12 role-based 5-step recommended paths
 *
 * Editorial originality and Lemke / NRCA / ASTM attribution rules from the
 * source repo's CLAUDE.md apply. Don't paraphrase third-party sources here.
 */

/* ===== Types ===== */

export interface Category {
  id: string;
  num: string;
  name: string;
}

export type Tier = 1 | 2 | 3;

export interface Term {
  /** unique term key, also used as display label */
  t: string;
  /** category id (matches Category.id) */
  c: string;
  tier: Tier;
  /** definition */
  d: string;
  /** optional field notes ("Field Notes" insight) */
  n?: string;
  /** "verify current spec" flag — present (1) when set */
  vf?: number;
  /** related-term keys */
  see?: string[];
}

export interface ScenarioChoice {
  /** choice text */
  t: string;
  /** 1 = correct, 0 = incorrect */
  ok: 0 | 1;
  /** why this choice is right/wrong */
  w: string;
}

export interface Scenario {
  /** scenario setup */
  s: string;
  /** question */
  q: string;
  /** choices */
  o: ScenarioChoice[];
  /** lesson / takeaway */
  l: string;
}

export interface CompatEntry {
  /** the assembly / pairing description */
  a: string;
  /** 1 = compatible / correct, 0 = incompatible */
  ok: 0 | 1;
  /** explanation */
  e: string;
}

export interface PlainEnglishEntry {
  /** plain-English translation */
  pe: string;
  /** "don't say this" guidance */
  nts: string;
}

export type PlainEnglishMap = Record<string, PlainEnglishEntry>;

export interface ReportPair {
  topic: string;
  /** related-to bucket: 'inspection' | 'claims' | 'estimate' (open string for forward compatibility) */
  rel: string;
  poor: string;
  better: string;
  best: string;
  why: string;
}

export interface HailThreshold {
  material: string;
  /** human-readable size, e.g. '≈ 1¼"' */
  size: string;
  notes: string;
}

export interface TestCutStep {
  id: string;
  label: string;
  detail: string;
}

export interface CurriculumStep {
  /** label (may contain HTML entities) */
  l: string;
  /** action shorthand: 'lexicon' | 'certify' | 'lex:hailforensics' | 'rep:claims' | 'flash:t:1' etc. */
  a: string;
}

export type CurriculaMap = Record<string, CurriculumStep[]>;

/* ===== 1. CATS ===== */

export const CATS: Category[] = [
  {id:"membrane",num:"01",name:"Membrane Systems"},
  {id:"bitumen",num:"02",name:"Bitumen, BUR & Modified"},
  {id:"insulation",num:"03",name:"Decks, Insulation & Cover Boards"},
  {id:"metal",num:"04",name:"Metal Roofing & Coatings"},
  {id:"flashing",num:"05",name:"Flashing & Roof Detailing"},
  {id:"drainage",num:"06",name:"Drainage & Roof Geometry"},
  {id:"fire",num:"07",name:"Fire, Wind & Code"},
  {id:"performance",num:"08",name:"Performance, Testing & Thermal"},
  {id:"forensics",num:"09",name:"Damage, Loads & Forensics"},
  {id:"claims",num:"10",name:"Claims, Coverage & Estimating"},
  {id:"bodies",num:"11",name:"Industry Bodies & Standards"},
  {id:"makers",num:"12",name:"Manufacturers"},
  {id:"residential",num:"13",name:"Residential & Steep-Slope"},
  {id:"specialty",num:"14",name:"Tile, Slate & Specialty"},
  {id:"ventilation",num:"15",name:"Ventilation & Attic Systems"},
  {id:"hailforensics",num:"16",name:"Hail Forensics & Test Cuts"},
  {id:"restoration",num:"17",name:"Insurance Restoration & Coverage"}
];

/* ===== 2. TIER_NAME ===== */

export const TIER_NAME: Record<Tier, string> = {
  1: "Apprentice",
  2: "Journeyman",
  3: "Forensic"
};

/* ===== 3. TERMS (223 entries) ===== */

export const TERMS: Term[] = [
{t:"TPO",c:"membrane",tier:1,d:"Thermoplastic Polyolefin. A single-ply membrane blended from polypropylene and ethylene-propylene rubber. Currently the most installed commercial roof membrane in the U.S.; seams are heat-welded.",see:["Heat-Welded Seam","Thermoplastic"]},
{t:"PVC",c:"membrane",tier:1,d:"Polyvinyl Chloride. A thermoplastic single-ply membrane known for grease and chemical resistance, common over restaurants and industrial buildings. Seams are heat-welded."},
{t:"EPDM",c:"membrane",tier:1,d:"Ethylene Propylene Diene Monomer, the classic synthetic-rubber roof. A thermoset, so seams are taped or glued rather than welded. Degrades on contact with oils, grease, and petroleum.",see:["Thermoset"]},
{t:"Built-Up Roof (BUR)",c:"membrane",tier:1,d:"A multi-layer membrane assembled on site from alternating layers of bitumen and reinforcing felt, usually topped with gravel. Best on near-flat slopes and dependent on positive drainage."},
{t:"Modified Bitumen",c:"membrane",tier:1,d:"An asphalt membrane modified with rubber or plastic polymers for flexibility and durability. Installed in multiple plies, giving redundancy if the top layer is damaged."},
{t:"APP Modified Bitumen",c:"membrane",tier:2,d:"Plastic-modified bitumen. The APP polymer plasticizes the asphalt and sheets are typically torch-applied. Performs well in heat but can crack in extreme cold."},
{t:"SBS Modified Bitumen",c:"membrane",tier:2,d:"Rubber-modified bitumen. The SBS polymer makes the membrane elastic; installed with hot asphalt, cold adhesive, or self-adhered. Stays flexible in cold weather."},
{t:"Single-Ply Membrane",c:"membrane",tier:1,d:"Any roof membrane installed in a single layer, such as TPO, PVC, or EPDM. Attached as ballasted, fully adhered, mechanically fastened, partially adhered, or self-adhered."},
{t:"Hypalon (CSPE)",c:"membrane",tier:3,d:"A chlorosulfonated polyethylene single-ply membrane that cures from a thermoplastic into a thermoset over time. Original production was discontinued in 2010."},
{t:"Sprayed Polyurethane Foam (SPF)",c:"membrane",tier:2,d:"A seamless roof formed by spraying two liquids that expand into rigid foam, then sealing it with a protective coating. Very lightweight and conforms to any shape."},
{t:"Cap Sheet",c:"membrane",tier:1,d:"The granule-surfaced top ply of a built-up or modified-bitumen membrane. Also called the cap-ply or top ply."},
{t:"Base Sheet",c:"membrane",tier:2,d:"The first ply laid in a built-up or modified-bitumen assembly. Protects the deck and underlying layers; may be adhered or mechanically fastened."},
{t:"Membrane",c:"membrane",tier:1,d:"The flexible roof-covering layer whose primary job is to keep water out of the building."},
{t:"Hybrid Roof",c:"membrane",tier:2,d:"A roof that combines a modified-bitumen cap sheet with traditional built-up base and ply sheets, blending the strengths of both systems."},
{t:"Recover",c:"membrane",tier:2,d:"Installing a new roof system directly over an existing one, leaving the old roof in place.",n:"Check how many roof layers already exist; most codes cap a structure at two.",see:["Tear-Off"]},
{t:"Tear-Off",c:"membrane",tier:1,d:"Complete removal of the existing roof system down to the deck before a new roof is installed."},
{t:"Heat-Welded Seam",c:"membrane",tier:2,d:"A seam fused with hot air to bond thermoplastic membrane to itself. The strongest single-ply seaming method and installable year-round."},
{t:"Thermoplastic",c:"membrane",tier:2,d:"A material that softens when heated and hardens when cooled, allowing it to be re-welded. TPO and PVC are thermoplastics."},
{t:"Thermoset",c:"membrane",tier:2,d:"A material that cures permanently and cannot be re-melted, so its seams must be taped or glued. EPDM is a thermoset."},
{t:"Self-Adhered Membrane",c:"membrane",tier:2,d:"A membrane with a factory adhesive backing protected by release film, bonded without torch or hot asphalt."},
{t:"Fleece-Back Membrane",c:"membrane",tier:2,d:"A single-ply membrane with a fleece backing laminated to it, used for adhered systems and added puncture resistance."},
{t:"Granules",c:"membrane",tier:1,d:"The mineral surfacing on cap sheets and shingles that shields the asphalt from UV and adds color and fire resistance."},
{t:"Protected Membrane Roof (PMR)",c:"membrane",tier:3,d:"An inverted assembly where the insulation is placed above the membrane, shielding the membrane from temperature swings and UV. Also called an inverted roof."},
{t:"Bitumen",c:"bitumen",tier:1,d:"The oil- or coal-derived material that bonds and waterproofs a built-up roof. The two roofing types are asphalt and coal tar."},
{t:"Asphalt Bitumen",c:"bitumen",tier:2,d:"Petroleum-derived bitumen used in built-up roofing. Must be heated to the right window; too hot degrades it, too cool will not flow or bond."},
{t:"Coal Tar Pitch",c:"bitumen",tier:2,d:"Bitumen produced by heating coal. Self-healing and highly water-resistant, so it tolerates standing water and dead-level slopes better than asphalt.",see:["Dead Level"]},
{t:"Felts",c:"bitumen",tier:1,d:"Reinforcing sheets in a built-up roof whose main job is to hold the layers of bitumen in place. A roof is named by its number of plies."},
{t:"Ply",c:"bitumen",tier:1,d:"A single layer of felt within a built-up roof membrane. A four-ply roof has four layers of felt."},
{t:"Aggregate",c:"bitumen",tier:1,d:"The top layer of gravel or crushed stone on a built-up roof. Shields the bitumen from sunlight and heat and adds wind and fire resistance."},
{t:"Ballast",c:"bitumen",tier:2,d:"Loose stone or precast pavers laid over a membrane to hold it down by sheer weight."},
{t:"Ballasted Roof",c:"bitumen",tier:2,d:"A roof held in place by aggregate rather than fasteners or adhesive. Often the lowest installed cost, but heavy and harder to locate leaks in."},
{t:"Cutbacks",c:"bitumen",tier:3,d:"Bitumen thinned with solvent. Used in cold-process adhesives, flashing cements, and restoration coatings for aging built-up roofs."},
{t:"Cold-Process Roofing",c:"bitumen",tier:2,d:"A built-up-style roof laminated with cold-applied adhesives instead of hot asphalt, eliminating the kettle, flame, and fume hazards."},
{t:"Mopping",c:"bitumen",tier:2,d:"Applying hot bitumen to a roof surface with a mop or mechanical applicator. Patterns include solid, spot, and strip mopping."},
{t:"Equiviscous Temperature (EVT)",c:"bitumen",tier:3,d:"The temperature at which roofing asphalt flows and adheres best, used to time application from the kettle to the roof."},
{t:"Glass Felt",c:"bitumen",tier:2,d:"A reinforcing sheet of bonded fiberglass fibers used in built-up roofs to hold the layers of bitumen in place."},
{t:"Roof Deck",c:"insulation",tier:1,d:"The structural surface that supports the roof system. Common types are steel, concrete, and wood."},
{t:"Steel Deck",c:"insulation",tier:2,d:"The most common commercial roof deck. Its gauge, profile, and grade govern fastener pull-out and overall system performance."},
{t:"Concrete Deck",c:"insulation",tier:2,d:"A poured or precast structural roof deck. Heavy and durable, and able to carry significant load."},
{t:"Wood Deck",c:"insulation",tier:2,d:"A nailable roof deck of plywood, OSB, or plank that supports the roof system."},
{t:"Lightweight Insulating Concrete",c:"insulation",tier:3,d:"A low-density concrete fill poured over a deck to build slope and add modest insulating value."},
{t:"Fastener Pull-Out",c:"insulation",tier:3,d:"The resistance of a deck to a fastener being pulled free. A key factor in a mechanically fastened roof's wind performance."},
{t:"Polyisocyanurate (PolyISO)",c:"insulation",tier:2,d:"The most common rigid roof insulation. Offers the highest R-value per inch of any rigid board, though that value drops in cold temperatures. Combustible."},
{t:"Expanded Polystyrene (EPS)",c:"insulation",tier:2,d:"Bead-board insulation. The cheapest rigid foam per unit of R-value, and it holds its R-value over time. Often used to fill metal roof flutes."},
{t:"Extruded Polystyrene (XPS)",c:"insulation",tier:2,d:"Blue, pink, or green rigid foam that is more moisture- and weather-resistant than EPS. Should not be placed in direct contact with PVC membrane."},
{t:"Cover Board",c:"insulation",tier:2,d:"A thin, hard board installed over insulation to protect the membrane and improve resistance to hail and foot traffic.",n:"Whether a cover board was installed often decides how a roof survives hail; inspect the assembly, not just the membrane."},
{t:"High-Density PolyISO (HD ISO)",c:"insulation",tier:3,d:"A compressed, high-strength polyiso cover board. Lightweight and easy to handle, but generally weaker in hail testing than gypsum boards."},
{t:"DensDeck",c:"insulation",tier:2,d:"A glass-mat gypsum cover board known for strong fire performance and excellent hail and puncture resistance. Must be kept dry before and after installation."},
{t:"Perlite",c:"insulation",tier:3,d:"An older cover board made from expanded volcanic glass. Good fire resistance, but not moisture-resistant and changes dimension when wet."},
{t:"Gypsum Cover Board",c:"insulation",tier:2,d:"A gypsum-core board, glass-mat or fiber-reinforced, that is noncombustible and inherently fire-resistant. Glass-mat types score best on flame and smoke tests."},
{t:"Fiberboard",c:"insulation",tier:2,d:"A cover board of wood or cane fiber bonded with resin, often laid over polyiso. Combustible and prone to absorbing water."},
{t:"Tapered Insulation",c:"insulation",tier:2,d:"Insulation cut on an angle to build slope into an otherwise flat roof and direct water toward drains.",n:"Missing or flattened taper is a common root cause of ponding; inspect the slope design, not just the surface."},
{t:"Substrate",c:"insulation",tier:1,d:"The surface onto which a roof membrane is applied, such as the deck, the insulation, or a cover board."},
{t:"Galvalume",c:"metal",tier:2,d:"Carbon steel coated with an aluminum-zinc alloy. More corrosion-resistant than galvanized steel and sometimes installed unpainted."},
{t:"Galvanized Steel",c:"metal",tier:2,d:"Carbon steel coated with zinc for corrosion protection. G-90 is the grade generally recommended for residential use."},
{t:"Gauge",c:"metal",tier:1,d:"The thickness designation of metal roofing. The higher the gauge number, the thinner the metal."},
{t:"Standing Seam",c:"metal",tier:1,d:"A metal roof system with raised, interlocking seams that keep the joint above the flow of water."},
{t:"Structural Metal Panel",c:"metal",tier:2,d:"A metal roof strong enough to span supports without a deck, usable on both low and steep slopes."},
{t:"Architectural Metal Panel",c:"metal",tier:2,d:"A non-structural metal roof for steep slopes that sheds water rather than sealing it. Also called a non-structural system."},
{t:"Kynar 500 / Hylar 5000",c:"metal",tier:3,d:"Premium PVDF paint finishes for metal roofs, recognized for industry-leading resistance to fading and chalking."},
{t:"Oil Canning",c:"metal",tier:2,d:"Visible waviness in the flat areas of a metal panel. A cosmetic condition only; it does not affect structural or weatherproofing performance."},
{t:"Purlins",c:"metal",tier:2,d:"Z- or C-shaped steel members, usually spaced five feet on center, that support metal roof panels on pre-engineered buildings."},
{t:"Roof Coating",c:"metal",tier:2,d:"A fluid-applied layer that renews and protects an existing roof surface. Common types include acrylic, silicone, and asphaltic."},
{t:"Silicone Coating",c:"metal",tier:3,d:"A fluid-applied roof coating known for strong resistance to ponding water and UV."},
{t:"Underlayment",c:"metal",tier:2,d:"A sheet installed beneath the roof covering as a secondary water barrier, common in steep-slope and metal roofing."},
{t:"Flashing",c:"flashing",tier:1,d:"Metal or membrane material used to waterproof the roof wherever it is interrupted, such as at walls, curbs, edges, drains, and penetrations."},
{t:"Cant Strip",c:"flashing",tier:2,d:"A beveled strip installed where the roof meets a vertical surface, easing the membrane around the sharp angle."},
{t:"Coping",c:"flashing",tier:2,d:"A metal cap fitted over the top of a parapet wall to seal it and shed water, usually toward the roof."},
{t:"Parapet Wall",c:"flashing",tier:1,d:"The portion of an exterior wall that rises above the roof membrane."},
{t:"Termination Bar",c:"flashing",tier:2,d:"An extruded aluminum bar that fastens and seals the top edge of a membrane at walls, curbs, skylights, and penetrations."},
{t:"Reglet",c:"flashing",tier:2,d:"A groove cut into a wall to receive and anchor counterflashing."},
{t:"Counterflashing",c:"flashing",tier:2,d:"Flashing set into or attached to a wall that laps over base flashing to shield its top edge from water."},
{t:"Gravel Stop",c:"flashing",tier:2,d:"A flanged metal edge that finishes a roof and keeps loose aggregate from washing off."},
{t:"Pipe Boot",c:"flashing",tier:1,d:"A prefabricated cover used to seal the membrane around a pipe penetration."},
{t:"Lap Sealant",c:"flashing",tier:2,d:"Sealant applied to exposed seam edges and to the tops of termination bars and pipe-boot clamps."},
{t:"Expansion Joint",c:"flashing",tier:2,d:"A built-in structural separation that lets two parts of a building move independently without tearing the roof or waterproofing."},
{t:"Fish Mouth",c:"flashing",tier:3,d:"A cone-shaped opening that forms when excess membrane is forced into too small an area at a seam.",n:"Never acceptable in a finished seam. Photograph each one; it is a workmanship defect, not weathering."},
{t:"Penetration",c:"flashing",tier:1,d:"Any object passing through the roof membrane, such as a pipe, conduit, or vent, requiring a flashed detail."},
{t:"Roof Curb",c:"flashing",tier:2,d:"A raised frame on the roof that supports and flashes mounted equipment such as HVAC units."},
{t:"Pitch Pocket",c:"flashing",tier:3,d:"A flanged box filled with sealant around an irregular penetration. A known maintenance point that needs regular attention.",n:"Pitch pockets dry out and fail; on any inspection, treat them as a likely leak source."},
{t:"Edge Metal",c:"flashing",tier:2,d:"Metal trim at the roof perimeter. Its wind performance is governed by standards such as ANSI/SPRI ES-1."},
{t:"Walkway Pad",c:"flashing",tier:2,d:"A protective pad placed on a membrane along traffic routes to prevent wear and puncture."},
{t:"Roof Slope (Pitch)",c:"drainage",tier:1,d:"The vertical rise per twelve inches of horizontal run, written like a 4:12 slope. Also called pitch."},
{t:"Low-Slope Roof",c:"drainage",tier:1,d:"A roof at or below a 3:12 slope, generally requiring a membrane system rather than shingles."},
{t:"Positive Drainage",c:"drainage",tier:2,d:"Slope designed so the roof fully drains within forty-eight hours of rainfall.",n:"A roof that will not drain in 48 hours is a design defect worth documenting separately from storm damage.",vf:1},
{t:"Ponding Water",c:"drainage",tier:2,d:"Standing water still present roughly twenty-four hours or more after rain.",n:"Document ponding on every inspection; many manufacturer warranties exclude water that stands beyond 24 to 48 hours.",vf:1},
{t:"Scupper",c:"drainage",tier:2,d:"An opening at a roof edge or through a parapet that drains water. Can serve as a primary drain or an emergency overflow."},
{t:"Cricket (Saddle)",c:"drainage",tier:2,d:"A small raised structure that channels water around an obstruction, such as a chimney, and directs it toward drains."},
{t:"Drain",c:"drainage",tier:1,d:"The primary outlet that carries water off a low-slope roof, typically into the building's interior plumbing."},
{t:"Dead Level",c:"drainage",tier:2,d:"A roof built with effectively no slope. Tolerable only with coal-tar pitch, which resists standing water."},
{t:"Fire Rating",c:"fire",tier:2,d:"The fire-resistance class of a complete roof assembly, not of any single component. Class A is the best rating.",vf:1},
{t:"Class A / B / C",c:"fire",tier:2,d:"Fire-resistance classes from external fire testing. Class A resists severe exposure, Class B moderate, and Class C only light exposure."},
{t:"UL Fire Rating",c:"fire",tier:2,d:"Underwriters Laboratories' fire-resistance classification of roof coverings, tested under UL 790."},
{t:"Factory Mutual (FM)",c:"fire",tier:2,d:"An organization that classifies roof assemblies for fire characteristics and wind-uplift resistance on behalf of insurers."},
{t:"FM Global",c:"fire",tier:2,d:"An insurer whose tested and approved roof assemblies are required on many insured buildings. Approvals are very specific about materials and attachment."},
{t:"Class 1 (FM)",c:"fire",tier:3,d:"An FM rating earned through a comprehensive test series covering fire, wind, hail, corrosion, and leakage. All Class 1 roofs are Class A, but not all Class A roofs are Class 1.",n:"Know which one the spec or policy actually requires; they are not interchangeable."},
{t:"Wind Uplift",c:"fire",tier:2,d:"The upward lifting force wind exerts on a roof, and a primary factor in how a roof system is attached."},
{t:"Wind Uplift Rating",c:"fire",tier:3,d:"A rated measure of how much uplift pressure a roof assembly can resist, such as an FM 1-90 rating."},
{t:"Mechanically Fastened",c:"fire",tier:2,d:"A method of securing a membrane or board to the deck using screws and plates."},
{t:"Fully Adhered",c:"fire",tier:2,d:"A membrane glued continuously to the substrate, providing strong wind-uplift resistance."},
{t:"R-Value",c:"performance",tier:1,d:"A measure of a material's resistance to heat flow; a higher value means better insulation. Standard tests are run at a 75 degree F mean temperature.",vf:1},
{t:"Compressive Strength",c:"performance",tier:2,d:"A material's resistance to a crushing load.",n:"More is not always better; over-stiff boards can crack under impact instead of absorbing it."},
{t:"Cool Roof",c:"performance",tier:2,d:"A roof with high reflectivity, through light color or reflective pigment, that stays close to air temperature and cuts cooling costs."},
{t:"Solar Reflectance (Albedo)",c:"performance",tier:2,d:"The fraction of sunlight a surface reflects rather than absorbs. High reflectance is the key property of a cool roof."},
{t:"Emissivity",c:"performance",tier:3,d:"A surface's ability to release absorbed heat. High emissivity helps a roof stay cool."},
{t:"Solar Reflectance Index (SRI)",c:"performance",tier:3,d:"A coolness score that compares a roof's surface temperature to a black roof, rated 0, and a white roof, rated 100."},
{t:"ASTM",c:"performance",tier:2,d:"A standards organization that writes the test methods and material specifications used throughout the roofing industry.",vf:1},
{t:"Xenon-Arc Test",c:"performance",tier:3,d:"An accelerated weathering test that exposes membrane samples to UV, heat, ozone, and water spray, then inspects them for cracking or crazing."},
{t:"Vapor Retarder",c:"performance",tier:2,d:"A layer that blocks moisture from passing into the roof from the building interior, preventing condensation within the insulation."},
{t:"Mil",c:"performance",tier:1,d:"A unit of thickness equal to one one-thousandth of an inch, used to specify membrane and coating thickness."},
{t:"Square",c:"performance",tier:1,d:"A roofing unit of area equal to 100 square feet."},
{t:"Thermal Shock",c:"performance",tier:3,d:"Stress on a roof from rapid temperature change, such as cold rain on a hot membrane, that can crack aging materials."},
{t:"Hail Damage Threshold",c:"forensics",tier:3,d:"The smallest size of hail at which functional roof damage typically begins to occur.",n:"Tie observed hail size to the storm record; threshold size supports causation, not just condition."},
{t:"Functional Damage",c:"forensics",tier:3,d:"Damage that affects a roof's performance or service life, as opposed to marks that are purely cosmetic.",n:"The cosmetic-versus-functional distinction is the hinge of most hail and wind claims; define it before you argue it.",see:["Cause of Loss"]},
{t:"Dead Loads",c:"forensics",tier:2,d:"Permanent, non-moving loads on a roof, including mechanical equipment, units, and the roof deck itself."},
{t:"Live Loads",c:"forensics",tier:2,d:"Temporary or moving loads on a roof, such as workers, equipment, wind, snow, ice, and rain."},
{t:"Blistering",c:"forensics",tier:2,d:"Bubbles that form in a membrane when moisture or solvent vapor is trapped beneath or between layers."},
{t:"Crazing",c:"forensics",tier:2,d:"Fine surface cracking in a membrane, often a sign of age, weathering, or UV exposure."},
{t:"Spudding",c:"forensics",tier:3,d:"The process of scraping away aggregate and most of the top bitumen coating from an aged built-up roof."},
{t:"Flash Off",c:"forensics",tier:3,d:"Allowing the solvents in an adhesive or primer to evaporate to a tacky state before bonding two surfaces. Skipping it causes blisters."},
{t:"Core Cut",c:"forensics",tier:3,d:"A small sample cut from the roof assembly to verify its layers, thickness, and moisture condition. Also called a test cut."},
{t:"Infrared Moisture Survey",c:"forensics",tier:3,d:"A diagnostic scan that detects trapped moisture in a roof by the heat it retains after sunset."},
{t:"Membrane Shrinkage",c:"forensics",tier:3,d:"The tightening of a membrane over time that can pull at seams, flashings, and corners and open the roof to leaks."},
{t:"Replacement Cost Value (RCV)",c:"claims",tier:3,d:"The cost to replace damaged property with new, like-kind materials, with no deduction for age or wear."},
{t:"Actual Cash Value (ACV)",c:"claims",tier:3,d:"Replacement cost minus depreciation; the value of property in its used, depreciated condition.",see:["Depreciation"]},
{t:"Depreciation",c:"claims",tier:3,d:"The reduction in a roof's value from age, wear, and condition. The dollar gap between RCV and ACV."},
{t:"Recoverable Depreciation",c:"claims",tier:3,d:"Depreciation withheld on an ACV settlement that the policyholder can recover after the work is completed and proof is submitted.",n:"Owners often leave this money unclaimed; make sure they know it has to be released."},
{t:"Scope of Loss",c:"claims",tier:3,d:"The itemized list of damaged components and the work required to repair them. It is the basis of a claim estimate."},
{t:"Supplement",c:"claims",tier:3,d:"A request to add costs to an approved claim for damage or work not in the original scope, supported by documentation."},
{t:"Overhead & Profit (O&P)",c:"claims",tier:3,d:"A markup, often around ten and ten, covering a general contractor's overhead and profit when a job requires coordinated trades."},
{t:"Ordinance or Law Coverage",c:"claims",tier:3,d:"Policy coverage that pays for code-required upgrades triggered by a repair or rebuild beyond the original construction.",vf:1},
{t:"Matching",c:"claims",tier:3,d:"The principle, recognized in many jurisdictions, that repairs should produce a reasonably uniform appearance when undamaged material cannot be matched.",vf:1},
{t:"Cause of Loss",c:"claims",tier:3,d:"The peril or event that produced the damage. Establishing it is central to whether a claim is covered."},
{t:"Adjuster",c:"claims",tier:2,d:"The insurance representative who investigates a claim and determines the carrier's payment. Field adjusters inspect; desk adjusters review remotely."},
{t:"No Dollar Limit (NDL) Warranty",c:"claims",tier:3,d:"A manufacturer warranty that covers repair of covered defects with no cap on the dollar amount, within its terms. It is not insurance and excludes storm damage and abuse."},
{t:"JM Peak Advantage NDL",c:"claims",tier:3,d:"Johns Manville's no-dollar-limit warranty program for low-slope membrane assemblies (TPO and PVC). Covers material and labor to repair leaks from manufacturing defects, with no cap, for the warranty term (commonly 10–30 years depending on system specification, with longer terms typically requiring fully adhered membrane and approved cover board / insulation). Requires a JM-approved installer and JM-approved components throughout the assembly. Ponding, abuse, foot-traffic damage, and storm damage are excluded.",vf:1,see:["Johns Manville","TPO","PVC","No Dollar Limit (NDL) Warranty","Fully Adhered","Mechanically Fastened"]},
{t:"Duro-Last NDL",c:"claims",tier:3,d:"Duro-Last's no-dollar-limit warranty for its PVC roofing systems. Covers material and labor to repair leaks from manufacturing defects, no cap on cost, typically up to 20 years on standard specifications and longer on premium / enhanced specifications. Requires a Duro-Last–authorized contractor and Duro-Last components (prefabricated membrane, fasteners, accessories) throughout the assembly. Ponding, abuse, foot-traffic damage, and storm damage are excluded.",vf:1,see:["Duro-Last","PVC","No Dollar Limit (NDL) Warranty","Fully Adhered","Mechanically Fastened"]},
{t:"Attachment Method (NDL Implications)",c:"claims",tier:3,d:"Within the same NDL program, the chosen attachment method — fully adhered vs mechanically fastened — changes the available wind-uplift warranty rating, the term length the membrane qualifies for, and the required cover-board and insulation thicknesses. On the same membrane and manufacturer, a fully adhered system typically qualifies for a higher wind warranty (e.g., I-90 / I-120) than a mechanically fastened system. The membrane is the same product; the assembly tag is what the warranty actually attaches to.",vf:1,see:["Fully Adhered","Mechanically Fastened","JM Peak Advantage NDL","Duro-Last NDL"]},
{t:"NRCA",c:"bodies",tier:2,d:"The National Roofing Contractors Association, the leading U.S. roofing trade association and a primary authority on roofing standards and practice."},
{t:"BOMA",c:"bodies",tier:2,d:"The Building Owners and Managers Association, which represents the owners and managers of commercial property."},
{t:"RCI / IIBEC",c:"bodies",tier:3,d:"An international association of roofing and building-envelope consultants, architects, and engineers who specialize in design and forensic review."},
{t:"CRRC",c:"bodies",tier:3,d:"The Cool Roof Rating Council, which evaluates and labels the solar reflectance and thermal emittance of roofing products."},
{t:"LEED",c:"bodies",tier:2,d:"Leadership in Energy and Environmental Design, an internationally recognized certification standard for high-performance green buildings."},
{t:"GAF",c:"makers",tier:1,d:"One of the oldest and largest U.S. roofing manufacturers, founded in 1886. Produces shingles, TPO, modified bitumen, PVC, and related products."},
{t:"Carlisle SynTec",c:"makers",tier:2,d:"A long-established single-ply roofing leader, producing EPDM, TPO, PVC, and FleeceBACK membrane systems."},
{t:"Sika Sarnafil",c:"makers",tier:2,d:"A thermoplastic PVC commercial roofing and waterproofing manufacturer that pioneered PVC roofing in 1962."},
{t:"Johns Manville",c:"makers",tier:2,d:"A Berkshire Hathaway company and one of the oldest roofing and insulation manufacturers, offering a full low-slope product line. Its low-slope NDL warranty program is branded Peak Advantage.",see:["JM Peak Advantage NDL"]},
{t:"Duro-Last",c:"makers",tier:2,d:"A PVC single-ply roofing manufacturer known for prefabricated membrane (large sections welded to the building's footprint at the factory, reducing field welds) and a strict authorized-contractor program. Acquired by Holcim in 2023; remains a distinct brand. Its no-dollar-limit warranty is the Duro-Last NDL.",see:["PVC","Duro-Last NDL"]},
{t:"Soprema",c:"makers",tier:2,d:"A global roofing and waterproofing manufacturer recognized for its SBS-modified bitumen membrane systems."},
{t:"Siplast",c:"makers",tier:3,d:"The company that developed SBS-modified bitumen, widely regarded as a leader in SBS-modified roofing."},

/* ===== Residential & Steep-Slope ===== */
{t:"Asphalt Shingle",c:"residential",tier:1,d:"A composition shingle made from a fiberglass mat saturated with asphalt and surfaced with ceramic-coated granules. The dominant residential roof covering in North America."},
{t:"Three-Tab Shingle",c:"residential",tier:1,d:"A single-layer asphalt shingle with three cutouts that read as three tabs across the face. Lower-cost than laminated shingles and now declining in market share."},
{t:"Architectural Shingle",c:"residential",tier:1,d:"A laminated asphalt shingle built up from two or more layers for a dimensional look and longer service life. Also called a laminated or dimensional shingle.",see:["Three-Tab Shingle"]},
{t:"Impact-Resistant Shingle",c:"residential",tier:2,d:"An asphalt shingle that has passed a controlled steel-ball impact test. Class 4 is the highest rating and often qualifies for an insurance premium discount.",vf:1,n:"Verify the carrier honors the discount and that the shingle's UL 2218 Class 4 listing is current."},
{t:"Starter Shingle",c:"residential",tier:2,d:"A purpose-built strip installed at the eaves and rakes before the first course of shingles. Provides the sealant strip the first course relies on to resist wind uplift."},
{t:"Hip and Ridge Cap",c:"residential",tier:1,d:"Pre-cut shingle pieces installed along hips and ridges to cover the joint where two slopes meet."},
{t:"Open Valley",c:"residential",tier:2,d:"A valley flashed with exposed metal that carries water down the center. Strong for high-flow valleys; visible from the ground.",see:["Closed-Cut Valley","Woven Valley"]},
{t:"Closed-Cut Valley",c:"residential",tier:2,d:"A valley where shingles from one slope run through and shingles from the other are trimmed back along the centerline. Common and efficient on architectural shingles."},
{t:"Woven Valley",c:"residential",tier:3,d:"A valley where shingles from both slopes interlace through the valley. Out of favor on laminated shingles, which do not weave cleanly."},
{t:"Step Flashing",c:"residential",tier:1,d:"L-shaped metal pieces installed one per shingle course where a roof meets a vertical wall. Each piece laps the one below, stepping up the wall with the shingles."},
{t:"Kick-Out Flashing",c:"residential",tier:2,d:"A diverter at the bottom of a roof-to-wall intersection that redirects water away from the wall cladding instead of behind it. Its absence is a frequent source of hidden wall-rot claims.",n:"Look for kick-out flashing at every roof-to-wall termination above siding; missing kick-outs drive water behind the cladding."},
{t:"Drip Edge",c:"residential",tier:1,d:"L- or T-shaped metal trim at eaves and rakes that directs water off the deck and into the gutter. Required by most modern residential codes.",vf:1},
{t:"Ice and Water Shield",c:"residential",tier:1,d:"A self-adhered, rubberized-asphalt underlayment installed at eaves, valleys, and penetrations to block water driven uphill by ice dams or wind. Codes typically require it past the interior wall line in cold climates.",vf:1,see:["Ice Dam"]},
{t:"Synthetic Underlayment",c:"residential",tier:2,d:"A woven or non-woven polypropylene or polyethylene underlayment that has largely replaced asphalt felt under steep-slope roofing. Lighter, tear-resistant, and longer-lasting under UV exposure."},
{t:"Asphalt-Saturated Felt",c:"residential",tier:2,d:"Traditional roofing underlayment, sold as #15 or #30 felt. Still used but increasingly displaced by synthetic underlayments."},
{t:"Roof Sheathing",c:"residential",tier:1,d:"The structural panel layer fastened to the rafters or trusses that the underlayment and roof covering attach to. Typically plywood or OSB in modern construction."},
{t:"Ice Dam",c:"residential",tier:2,d:"A ridge of ice that forms at the eaves when heated attic air melts snow upslope and the runoff refreezes at the cold overhang. Backed-up water can push under shingles into the assembly.",see:["Ice and Water Shield"]},
{t:"Granule Loss",c:"forensics",tier:2,d:"Loss of the ceramic-coated mineral granules that protect the asphalt shingle mat from UV. Localized granule loss with mat exposure is a functional damage indicator; uniform thinning is usually weathering."},
{t:"Mat Fracture",c:"forensics",tier:3,d:"A break in the fiberglass reinforcing mat of an asphalt shingle, often visible only on the underside or by flexing the shingle. The signature finding of functional hail damage on shingles."},

/* ===== Tile, Slate & Specialty ===== */
{t:"Clay Tile",c:"specialty",tier:2,d:"A fired-clay roof tile, common in Mediterranean and Spanish-influenced architecture. Long service life, heavy dead load, and brittle under foot traffic."},
{t:"Concrete Tile",c:"specialty",tier:2,d:"A cementitious roof tile, often shaped to mimic clay or slate. Heavier than clay; color fades over time as the surface coating weathers."},
{t:"Slate Roofing",c:"specialty",tier:3,d:"A roof of split natural stone, individually nailed. Among the longest-lived roof coverings when installed correctly and walked properly."},
{t:"Wood Shake",c:"specialty",tier:2,d:"A split wood roof unit, typically cedar, thicker and more textured than a sawn shingle. Subject to fire-rating restrictions in many jurisdictions.",vf:1},
{t:"Wood Shingle",c:"specialty",tier:2,d:"A sawn wood roof unit, smoother and thinner than a shake. Like shake, often restricted or banned in wildfire-prone regions.",vf:1},
{t:"Batten (Roofing)",c:"specialty",tier:2,d:"A wood or composite strip fastened across the rafters or sheathing that other roof units hang from, common under tile and metal."},
{t:"Copper Roofing",c:"specialty",tier:3,d:"A premium standing-seam or flat-lock metal roof formed from copper sheet. Develops a patina over decades and is essentially permanent on a properly built assembly."},

/* ===== Ventilation & Attic Systems ===== */
{t:"Intake Ventilation",c:"ventilation",tier:1,d:"The low side of attic ventilation, typically at the soffits, that lets cool outside air enter the attic. Without intake, the exhaust pulls from the conditioned space instead.",see:["Exhaust Ventilation","Balanced Ventilation"]},
{t:"Exhaust Ventilation",c:"ventilation",tier:1,d:"The high side of attic ventilation that lets warm, moist attic air escape. Ridge, gable, turbine, and power vents are all exhaust devices."},
{t:"Ridge Vent",c:"ventilation",tier:1,d:"A continuous vent installed along the ridge of a steep-slope roof, capped with hip-and-ridge shingles. The most efficient pairing with continuous soffit intake."},
{t:"Soffit Vent",c:"ventilation",tier:1,d:"A continuous or louvered vent installed in the underside of a roof overhang to provide attic intake air."},
{t:"Gable Vent",c:"ventilation",tier:2,d:"A louvered vent in a gable end wall. Functions as exhaust but can short-circuit a ridge-and-soffit system if mixed without planning."},
{t:"Power Vent",c:"ventilation",tier:2,d:"A motorized fan installed on a roof or in a gable that mechanically exhausts attic air. Can backdraft combustion appliances and depressurize the home if intake is inadequate.",n:"If a power vent is paired with inadequate intake, it can pull conditioned air through ceiling penetrations and drive moisture problems."},
{t:"Balanced Ventilation",c:"ventilation",tier:2,d:"An attic ventilation design where intake area at the soffits roughly matches exhaust area at or near the ridge. The intent is steady airflow without short-circuiting."},
{t:"Net Free Area (NFA)",c:"ventilation",tier:3,d:"The unobstructed opening area of a vent product, in square inches. Used to size attic ventilation, not the vent's overall dimension."},
{t:"1:300 Ventilation Ratio",c:"ventilation",tier:3,d:"The conventional code ratio: at least one square foot of net free vent area per 300 square feet of attic floor when intake and exhaust are properly split, or 1:150 when they are not.",vf:1},

/* ===== Hail Forensics & Test Cuts ===== */
{t:"Haag Engineering",c:"hailforensics",tier:3,d:"A forensic-engineering firm whose hail-damage thresholds and inspector-certification program are widely cited in roof claim investigations.",n:"Haag thresholds are reference data, not policy text; treat them as one informed opinion among several.",see:["Haag Certified Inspector"]},
{t:"Hail Damage Threshold (by Material)",c:"hailforensics",tier:3,d:"The smallest hail size at which functional damage to a given roof covering is generally expected to begin, by material. A rule of thumb shaped by stone density, shape, velocity, and the roof's age and condition.",n:"Thresholds are guides, not guarantees. Document the assembly and the storm; do not concede causation just because a stone was below a published threshold.",vf:1,see:["Functional Damage"]},
{t:"AC Coil-Fin Denting",c:"hailforensics",tier:3,d:"Hail dents in the soft aluminum fins of a rooftop or ground HVAC condenser. A reliable indirect indicator of the largest stones that fell at that location."},
{t:"Dent Multiplier",c:"hailforensics",tier:3,d:"A rule-of-thumb factor applied to AC fin dent diameter to estimate the diameter of the impacting hailstone, commonly cited as roughly 1.2.",vf:1},
{t:"Spherical vs. Jagged Hail",c:"hailforensics",tier:3,d:"Laboratory hail-damage tests use smooth, molded ice spheres while real hail is irregular and often jagged. The difference is one reason field damage can occur below lab thresholds.",n:"When a carrier cites a lab threshold, note the geometry difference: real hail is not a sphere."},
{t:"Terminal Velocity (Hail)",c:"hailforensics",tier:3,d:"The maximum speed a hailstone reaches as drag balances gravity, governed by stone size, shape, and density. Velocity, not size alone, drives impact energy."},
{t:"Test Cut Protocol",c:"hailforensics",tier:3,d:"The procedure for taking a destructive core sample to verify roof condition: get owner and carrier permission, photograph before and after, measure and photograph cut depth and width, video the sample if practical, and record date, time, and everyone present.",n:"Skipping a permission or a photo step compromises the sample's value in a claim or in court."},
{t:"Chain of Custody (Forensic)",c:"hailforensics",tier:3,d:"The documented trail of who handled a sample or photo, when, and how it was stored. Without it, evidence can be challenged."},
{t:"Photo Documentation Standard",c:"hailforensics",tier:2,d:"A documentation method that captures a wide context shot, a measured close-up with a scale, and an annotated overview map of every observation. Time-stamped and geotagged where possible."},
{t:"Loupe / Microscope Inspection",c:"hailforensics",tier:3,d:"Magnified inspection of a shingle mat or membrane scrim to look for fractures and bruising not visible to the unaided eye. Often determinative on borderline hail findings."},
{t:"PolyISO Hail Crushing",c:"hailforensics",tier:3,d:"Hidden impact damage to polyisocyanurate insulation beneath an apparently intact membrane. Polyiso tends to lose more thermal value and compressive strength after impact than other rigid foams.",n:"Inspect the assembly, not just the surface; impact damage can live in the insulation layer."},
{t:"Facer Separation",c:"hailforensics",tier:3,d:"Delamination of the facer from the foam core of a rigid insulation board after impact. A hidden hail-damage indicator that requires opening the assembly to find."},

/* ===== Insurance Restoration & Coverage ===== */
{t:"Xactimate",c:"restoration",tier:2,d:"The estimating software platform most widely used by carriers and restoration contractors to scope and price insurance repairs. Carrier and contractor figures most often diverge at the line-item level here."},
{t:"Wear and Tear Exclusion",c:"restoration",tier:3,d:"A policy provision that excludes gradual deterioration from coverage. Frequently cited by carriers to deny storm claims on older roofs.",vf:1,n:"Wear-and-tear language varies by policy; pull the actual form before arguing the exclusion."},
{t:"Mechanical Damage Exclusion",c:"restoration",tier:3,d:"A policy provision that excludes damage caused by foot traffic, equipment, or other human activity. Often invoked to characterize storm damage as installer or service damage.",vf:1},
{t:"Construction Defect Exclusion",c:"restoration",tier:3,d:"A policy provision that excludes losses caused by faulty workmanship or design. The dividing line between defect and covered peril is often the central dispute in a claim.",vf:1},
{t:"Peril",c:"restoration",tier:2,d:"An event or cause that produces a loss, such as hail, windstorm, fire, or hurricane. Coverage depends on whether the peril is named, excluded, or open-perils under the policy form."},
{t:"Appraisal Clause",c:"restoration",tier:3,d:"A dispute-resolution provision in many property policies that lets either side demand binding appraisal of the amount of loss after coverage is agreed. Not all policies include it, and the procedure varies by state.",vf:1},
{t:"Public Adjuster",c:"restoration",tier:2,d:"A licensed adjuster who represents the policyholder, not the carrier, in negotiating a claim. Licensing rules, fees, and permissible activities vary by state.",vf:1},
{t:"Engineer Rebuttal",c:"restoration",tier:3,d:"A written counter-report addressing a carrier-retained engineer's conclusions on causation, scope, or extent of damage. Quality of documentation, not volume, controls weight.",see:["Photo Documentation Standard","Test Cut Protocol"]},

/* ===== Insulation deepening ===== */
{t:"Long-Term Thermal Resistance (LTTR)",c:"insulation",tier:3,d:"A standardized 15-year time-weighted R-value for closed-cell foam insulation, intended to reflect long-term thermal performance rather than fresh-from-the-press values.",vf:1,see:["R-Value","Polyisocyanurate (PolyISO)"]},
{t:"ASTM C1289",c:"insulation",tier:3,d:"The ASTM specification covering rigid cellular polyisocyanurate thermal insulation board, including type, class, and grade classifications used to specify roof insulation.",vf:1},
{t:"NRCA Cold-Climate R-30",c:"insulation",tier:3,d:"NRCA's recommendation, often cited for cold-climate low-slope roofs, to install insulation totaling roughly R-30 or more above the deck. The exact value is updated periodically.",vf:1,n:"NRCA recommendations are updated periodically; confirm the current edition before relying on the figure."},
{t:"20 PSI Compressive Strength",c:"insulation",tier:3,d:"An NRCA recommendation that polyisocyanurate insulation under low-slope roof traffic be at least 20 psi compressive strength. Often the dividing line between standard and high-density polyiso.",vf:1},
{t:"Separator Sheet",c:"insulation",tier:2,d:"A slip sheet installed between two materials that would otherwise react badly in direct contact, such as polystyrene insulation under a PVC membrane.",see:["Extruded Polystyrene (XPS)","PVC"]},
{t:"Vapor Drive",c:"insulation",tier:3,d:"The movement of water vapor through a roof assembly driven by temperature and humidity differences. The direction of drive determines whether and where a vapor retarder belongs.",see:["Vapor Retarder"]},

/* ===== Metal additions ===== */
{t:"R-Panel",c:"metal",tier:2,d:"A through-fastened metal roof and wall panel with trapezoidal ribs, popular on pre-engineered metal buildings. Lower cost than standing seam; exposed fasteners are the long-term maintenance point."},
{t:"Corrugated Metal Panel",c:"metal",tier:2,d:"A rolled metal panel with rounded waves, the original metal roof profile. Through-fastened and frequently used on agricultural and light-industrial roofs."},
{t:"Snap-Lock Seam",c:"metal",tier:3,d:"A standing-seam profile where adjacent panels snap together over a male/female rib. Faster to install than a mechanical lock; lower wind-uplift rating in most cases."},
{t:"Mechanical-Lock Seam",c:"metal",tier:3,d:"A standing-seam profile folded closed in the field with a hand or powered seamer. Higher wind-uplift performance than snap-lock; used on most high-performance metal roofs."},
{t:"Expansion Clip",c:"metal",tier:3,d:"A two-piece clip that lets a metal panel expand and contract with temperature without binding the fasteners. Required on long panel runs to prevent oil-canning, fastener back-out, and seam stress."},

/* ===== Flashing additions ===== */
{t:"Surface-Mounted Counterflashing",c:"flashing",tier:2,d:"Counterflashing screwed and sealed to the face of a wall rather than set into a reglet. Faster but less durable than reglet-set counterflashing.",see:["Reglet","Two-Piece Counterflashing"]},
{t:"Two-Piece Counterflashing",c:"flashing",tier:3,d:"A receiver set into the wall plus a removable cover flashing. Lets the base flashing be replaced without disturbing the wall."},
{t:"Through-Wall Flashing",c:"flashing",tier:3,d:"A flashing that fully penetrates a wall to collect moisture from within the wall cavity and direct it outboard. Often missed on roof-to-wall remediation."},

/* ===== Bitumen additions ===== */
{t:"Torch-Down (SBS / APP)",c:"bitumen",tier:2,d:"A modified-bitumen installation method using an open-flame torch to heat the underside of the membrane and bond it to the substrate. Strict fire-watch and substrate requirements apply.",vf:1},
{t:"Kettle / Tanker",c:"bitumen",tier:2,d:"The on-site equipment used to heat asphalt for built-up roofing. Kettle for smaller jobs; tanker (or tanker-fed luggers) for larger projects. Both require trained operators and EVT discipline.",see:["Equiviscous Temperature (EVT)"]},

/* ===== Industry bodies / codes ===== */
{t:"IBC (International Building Code)",c:"bodies",tier:2,d:"The model commercial building code published by the International Code Council, adopted with amendments by most U.S. jurisdictions. Sets minimum requirements for roof assemblies, fire ratings, and wind design.",vf:1},
{t:"IRC (International Residential Code)",c:"bodies",tier:2,d:"The model residential code for one- and two-family dwellings, also from the International Code Council. Governs underlayment, ice-and-water shield, drip edge, and shingle installation requirements.",vf:1},
{t:"ASCE 7",c:"bodies",tier:3,d:"The American Society of Civil Engineers standard for Minimum Design Loads, the basis for wind, snow, and seismic loading used by U.S. building codes.",vf:1},
{t:"IBHS / FORTIFIED Roof",c:"bodies",tier:3,d:"The Insurance Institute for Business and Home Safety's resilient-construction program. The FORTIFIED Roof designation requires specific underlayment, deck attachment, and edge details and can qualify for insurance discounts.",vf:1},
{t:"Haag Certified Inspector",c:"bodies",tier:3,d:"A professional certification from Haag Engineering identifying inspectors trained in their hail- and wind-damage methodology. Common credential on contested storm files.",see:["Haag Engineering"]},

/* ===== ANSI / Edge ===== */
{t:"ANSI/SPRI ES-1",c:"fire",tier:3,d:"The national wind-uplift standard for low-slope roof edge metal. Most modern commercial codes require ES-1 compliance for perimeter edge details.",vf:1,see:["Edge Metal","Wind Uplift"]}
];

/* ===== 4. SCENARIOS ===== */

export const SCENARIOS: Scenario[] = [
{s:"You inspect a 14-year-old TPO roof three weeks after a confirmed hailstorm. You document circular bruising and reinforcement-scrim fracture at multiple impact points. The field adjuster calls it cosmetic surface marring.",
 q:"What is the strongest, most defensible response?",
 o:[{t:"Agree it looks cosmetic but ask for a courtesy allowance.",ok:0,w:"This concedes the central issue and weakens the file."},
    {t:"Document scrim fracture and embrittlement as functional damage that shortens service life, and tie the impacts to the storm record.",ok:1,w:"Functional damage is about performance and remaining service life; scrim fracture qualifies, and causation is supported by linking impacts to the storm date."},
    {t:"Argue the whole roof must be replaced because it is old.",ok:0,w:"Age alone is not storm damage; leading with it hands the carrier an easy denial."}],
 l:"Cosmetic versus functional is the hinge of a hail claim. Document the mechanism, not just the mark."},
{s:"A 6-year-old modified-bitumen roof shows water still standing more than 60 hours after rain across one low quadrant. The owner wants the leak there covered under the manufacturer warranty.",
 q:"What is the most accurate assessment?",
 o:[{t:"The warranty covers it; just report the leak.",ok:0,w:"Ponding beyond the manufacturer's stated window commonly voids coverage in that area."},
    {t:"Ponding past the stated window often voids coverage there, and the root issue is likely a slope or drainage defect to document separately.",ok:1,w:"Standing water is both a warranty problem and a design-defect question, and the two should be recorded as distinct findings."},
    {t:"Ponding is harmless on modified bitumen.",ok:0,w:"Modified bitumen performs poorly under standing water; this is a real concern."}],
 l:"Standing water is both a warranty issue and a design-defect question. Keep them separate."},
{s:"On a tear-off you find expanded polystyrene insulation in direct contact with the underside of a PVC membrane, and the PVC is noticeably stiff and brittle.",
 q:"What is the most likely cause of the brittleness?",
 o:[{t:"UV degradation from above.",ok:0,w:"UV acts on the exposed top surface, not the concealed underside against the insulation."},
    {t:"Plasticizer migration: EPS in direct contact with PVC pulls plasticizer out and embrittles the membrane. A separator sheet was needed.",ok:1,w:"Polystyrene and PVC are incompatible in direct contact; the membrane loses the plasticizer that keeps it flexible."},
    {t:"Normal aging.",ok:0,w:"This pattern points to a specific compatibility failure, not ordinary age."}],
 l:"Polystyrene and PVC do not belong in direct contact. This is an assembly compatibility failure."},
{s:"A project specification calls for an ASTM D1187 bituminous isolation paint on metal in an assembly that is then covered by a PVC membrane.",
 q:"How should this be handled?",
 o:[{t:"Treat it as standard and proceed.",ok:0,w:"Bituminous products are generally incompatible with PVC and can attack the membrane."},
    {t:"Flag it before installation: bituminous products are generally incompatible with PVC membrane and the paint can degrade it.",ok:1,w:"Catching the conflict at the specification stage, as a written question, prevents a built-in failure."},
    {t:"Proceed unless the paint is still wet at install.",ok:0,w:"The incompatibility is chemical and persists well after the paint has cured."}],
 l:"Catch material incompatibilities at the spec stage, not the failure stage."},
{s:"Two adjacent buildings took the same hailstorm. One has a glass-mat gypsum cover board under the membrane; the other has membrane directly over polyiso. The second roof shows far more puncturing.",
 q:"What best explains the difference?",
 o:[{t:"The second building simply used a thinner membrane.",ok:0,w:"Membrane thickness was not the variable described here."},
    {t:"The cover board absorbs and spreads impact energy; without one, hail drives straight into the membrane and soft insulation.",ok:1,w:"A hard cover board is a key hail-resistance layer, and its absence changes the outcome."},
    {t:"Polyiso is a stronger hail layer than a cover board.",ok:0,w:"Soft foam offers little impact protection compared with a rigid cover board."}],
 l:"The assembly determines the hail outcome. Always inspect what is under the membrane."},
{s:"The cap sheet on a 3-ply modified-bitumen roof is gouged in one area, but the base and interply are intact and the building is dry.",
 q:"How should this be characterized?",
 o:[{t:"The roof has failed and must be fully replaced.",ok:0,w:"The system has not failed; the lower plies are still keeping water out."},
    {t:"The multi-ply redundancy is doing its job. The cap is breached and should be repaired and documented, but the system has not failed.",ok:1,w:"Redundancy means a cap breach is real damage without being a full system failure."},
    {t:"There is no damage worth noting.",ok:0,w:"A breached cap is still damage and should be recorded and repaired."}],
 l:"Redundancy buys time, not immunity. Damage to a ply is still damage."},
{s:"A specification requires a Class 1 roof. The contractor proposes a Class A assembly and says the two are equivalent.",
 q:"Is the contractor correct?",
 o:[{t:"Yes, Class A and Class 1 are interchangeable.",ok:0,w:"They are not. They come from different tests measuring different things."},
    {t:"No. Class A covers external flame spread only; Class 1 is a broader FM series including fire, wind, and hail, so a Class A roof may not meet Class 1.",ok:1,w:"All Class 1 roofs are Class A, but not all Class A roofs are Class 1."},
    {t:"No, because Class A is actually the higher rating.",ok:0,w:"The classes are not ranked against each other that way; they answer different questions."}],
 l:"Know exactly what the specification or policy requires before accepting a substitution."},
{s:"An owner wants to recover an existing roof to save cost. On inspection you find the building already carries two roof systems.",
 q:"What is the right call?",
 o:[{t:"Recover anyway; layers do not matter.",ok:0,w:"Layer count is exactly what governs whether a recover is permitted."},
    {t:"A third recover is generally not allowed; most codes cap a structure at two roof layers, so a tear-off is likely required. Verify local code.",ok:1,w:"The two-layer limit is a common code provision and changes the scope and price of the job."},
    {t:"Add two more layers for extra protection.",ok:0,w:"More layers add dead load and violate the typical code limit."}],
 l:"Count the existing layers before you price a recover."},
{s:"A hail claim is settled on an ACV basis, and the owner is surprised the check is far smaller than the replacement bid.",
 q:"What should the owner understand?",
 o:[{t:"The carrier underpaid and the claim should be disputed immediately.",ok:0,w:"An ACV payment that is lower than RCV is expected, not necessarily an underpayment."},
    {t:"ACV is replacement cost minus depreciation; the recoverable depreciation is typically released after the work is completed and documented.",ok:1,w:"Owners who do not pursue recoverable depreciation leave money they are owed on the table."},
    {t:"ACV and RCV are the same and the bid must be wrong.",ok:0,w:"They are different figures by design; the gap is depreciation."}],
 l:"Understand how depreciation is released, or owners lose money they are owed."},
{s:"After a windstorm, a roof's perimeter edge metal has lifted and the membrane has peeled inward from that edge.",
 q:"Where should the wind investigation begin?",
 o:[{t:"At the center of the roof, working outward.",ok:0,w:"Wind uplift is lowest in the field and highest at edges and corners."},
    {t:"At the perimeter and corners, where uplift is highest and edge-metal failure commonly initiates membrane loss.",ok:1,w:"Edge-metal attachment, often an ES-1 issue, is a frequent starting point for wind damage."},
    {t:"Only at rooftop equipment.",ok:0,w:"Equipment is worth checking, but it is not where edge-initiated peel begins."}],
 l:"Wind damage usually starts at the edges and corners. Inspect there first."},

{s:"A carrier engineer reports no functional damage on an EPDM roof after a documented 2.5-inch hailstorm, citing laboratory testing showing EPDM tolerates simulated hail to roughly 2.75 inches.",
 q:"What is the strongest, most defensible counterpoint?",
 o:[{t:"Lab thresholds are absolute, so concede the finding and inspect for non-storm causes.",ok:0,w:"Lab thresholds are not absolute; geometry, density, velocity, and assembly age all change real-world outcomes."},
    {t:"Lab tests use smooth, molded spheres; real hail is irregular and jagged, and field thresholds reported elsewhere are lower. Open the assembly to check for crushed polyiso and facer separation under intact-looking membrane.",ok:1,w:"The geometry gap and the assembly check are both well-established and shift the argument from surface marks to hidden damage."},
    {t:"Argue the carrier picked the wrong engineer.",ok:0,w:"Attacking the engineer rather than the methodology weakens the file in front of an arbiter."}],
 l:"Don't argue the threshold; argue the assembly and the geometry. Inspect what is under the membrane."},

{s:"A roof is reportedly hailed but you can find no membrane punctures. The owner is furious and the field adjuster will not approve a test cut.",
 q:"What is the right next step?",
 o:[{t:"Cut a sample anyway since the owner consented.",ok:0,w:"Destructive testing without carrier permission damages the file and can shift liability to the contractor."},
    {t:"Request written carrier permission for a documented test cut, set a date and witnesses, and meanwhile document AC fin denting and any granule embedment to estimate stone size.",ok:1,w:"Permission, witnesses, photography, and indirect evidence all build the file in a way that survives later challenge."},
    {t:"Tell the owner there is no damage and close the file.",ok:0,w:"Surface intactness is not the same as no damage, especially under the membrane."}],
 l:"On hail forensics: permission first, indirect evidence second, destructive testing third. Document each."},

{s:"A residential roof one year out of service is leaking at a chimney. The valley below the chimney appears properly flashed, but the upper interior wall is showing rot and staining.",
 q:"What detail is most likely missing or wrong?",
 o:[{t:"Ice and water shield was installed too far up the slope.",ok:0,w:"Excess ice-and-water shield is not typically the source of chimney-area wall rot."},
    {t:"A cricket above the chimney, kick-out flashing where the roof meets siding, or correct step flashing up the chimney sides.",ok:1,w:"Wall rot above a chimney area most often traces to a missing cricket, a missing kick-out, or improperly lapped step flashing."},
    {t:"The shingles are simply nearing end of life.",ok:0,w:"At one year of service, this is a detailing issue, not weathering."}],
 l:"Behind interior wall rot near a chimney, look at cricket, kick-out, and step flashing before anything else."},

{s:"An attic shows summer condensation on the roof sheathing and the homeowner reports high cooling bills. The home has continuous soffit vents, a ridge vent, and two gable vents.",
 q:"What is the most likely cause?",
 o:[{t:"The attic insulation R-value is too high.",ok:0,w:"Excess insulation R-value does not cause sheathing condensation."},
    {t:"The gable vents are short-circuiting the soffit-and-ridge system, pulling air across the upper attic instead of bottom-to-top through it. Add baffles or block the gable vents.",ok:1,w:"Mixing exhaust types is a classic cause of dead zones and uneven airflow in an otherwise correct ventilation design."},
    {t:"The ridge vent is too long.",ok:0,w:"Ridge-vent length is not the issue here; the cause is the mixing of vent types."}],
 l:"Pick one exhaust strategy and balance it with intake. Mixing ridge, gable, and power vents often makes things worse."},

{s:"An insurance settlement letter offers ACV on a roof claim and cites a Wear and Tear exclusion for portions of the damage. The roof is twelve years old.",
 q:"What is the most accurate position to take with the policyholder?",
 o:[{t:"Wear and tear is dispositive; the carrier has the last word.",ok:0,w:"The exclusion's exact wording varies by policy and is not always dispositive."},
    {t:"Pull the actual policy form, separate the storm-caused damage from gradual deterioration in the documentation, and address depreciation and recoverable depreciation separately from the exclusion argument.",ok:1,w:"The exclusion is a contract term, not a slogan; the response is policy-text plus segregated documentation."},
    {t:"Argue that older roofs should be exempt from the exclusion.",ok:0,w:"Age does not nullify the exclusion; documented causation does the work."}],
 l:"Wear-and-tear arguments are won with the policy text and segregated documentation, not with rhetoric."}
];

/* ===== 5. COMPAT ===== */

export const COMPAT: CompatEntry[] = [
{a:"Expanded polystyrene (EPS) insulation placed in direct contact with a PVC membrane.",ok:0,e:"Plasticizer migration: EPS pulls plasticizer out of PVC and embrittles it. A separator sheet is required."},
{a:"Extruded polystyrene (XPS) insulation placed in direct contact with a PVC membrane.",ok:0,e:"Same plasticizer-migration problem as EPS. Polystyrene needs a separator sheet between it and PVC."},
{a:"Hot-air welding the seams of an EPDM membrane.",ok:0,e:"EPDM is a thermoset and cannot be re-melted. Its seams are taped or glued, not heat-welded."},
{a:"Hot-air welding the seams of a TPO membrane.",ok:1,e:"TPO is a thermoplastic; heat-welding is the standard and strongest seaming method for it."},
{a:"A bituminous, asphalt-based coating applied directly against a PVC membrane.",ok:0,e:"Bitumen is generally incompatible with PVC and can attack and degrade the membrane."},
{a:"Cold adhesive used to install an APP modified-bitumen membrane.",ok:0,e:"Cold adhesive is not recommended for APP or film-backed membranes; APP is typically torch-applied."},
{a:"An EPDM membrane on a roof that regularly sees kitchen grease discharge.",ok:0,e:"Petroleum products and animal fats degrade EPDM. PVC is the better choice for grease exposure."},
{a:"A glass-mat gypsum cover board under a fully-adhered single-ply membrane.",ok:1,e:"A common and sound assembly that provides good adhesion and strong hail resistance."},
{a:"A ballasted single-ply system on a roof sloped at 3:12.",ok:0,e:"Ballast holds a roof by gravity and is generally not appropriate above roughly a 2:12 slope."},
{a:"Modified bitumen installed over a roof with chronic ponding water.",ok:0,e:"Modified bitumen performs poorly under standing water; slope and drainage must be corrected first."},
{a:"Coal-tar pitch built-up roofing on a dead-level roof that holds water.",ok:1,e:"Coal tar is self-healing and tolerates standing water, which suits it to dead-level roofs."},
{a:"A torch-applied APP membrane installed during steady rain on a damp deck.",ok:0,e:"Trapped moisture causes blistering and damage; membranes are never installed over wet surfaces."},
{a:"A third roof recover installed over a building that already carries two roof systems.",ok:0,e:"Most codes cap a structure at two roof layers; a tear-off is generally required instead."},
{a:"PolyISO cover board stored close to a heat source or open flame on the job site.",ok:0,e:"PolyISO is combustible and must be kept away from heat and flame."},
{a:"Aggregate-surfaced built-up roofing installed near an airport flight line.",ok:0,e:"Loose aggregate can be blown into jet engines and is not allowed near flight lines."},
{a:"An EPDM membrane mechanically fastened, ballasted, or fully adhered as the project requires.",ok:1,e:"EPDM supports all of those attachment methods; the choice depends on the project."},
{a:"A power attic vent installed on a home with no soffit intake and a tight ceiling plane.",ok:0,e:"With no intake, the fan pulls air from the conditioned space and can backdraft combustion appliances. Add soffit intake before running a power vent."},
{a:"Continuous soffit vents plus a continuous ridge vent on the same attic, with no gable vents.",ok:1,e:"This is the balanced-ventilation design intended to give consistent bottom-to-top airflow."},
{a:"A ridge vent and a continuous soffit intake, paired with two open gable vents.",ok:0,e:"Gable vents short-circuit a ridge-and-soffit system; block or screen the gable vents to restore intended airflow."},
{a:"Asphalt shingles installed without a starter course at the eave.",ok:0,e:"The starter strip provides the sealant the first shingle course bonds to; without it, the eave row is prone to wind uplift."},
{a:"A Class 4 impact-rated shingle quoted for an insurance discount, with no written confirmation from the carrier that the discount applies on this policy.",ok:0,e:"Class 4 ratings can qualify for a discount in many markets but the carrier and form control. Confirm in writing before pricing the discount into the proposal."},
{a:"Test cut taken on a hail claim with owner consent only, without notifying the carrier.",ok:0,e:"A destructive sample taken without carrier permission can be excluded later and shifts risk to the contractor. Document permission from both before cutting."},
{a:"A standing-seam metal roof installed with snap-lock seams in a high-wind coastal zone.",ok:0,e:"Snap-lock seams generally carry lower wind-uplift ratings than mechanically-locked seams; verify the seam choice against the wind-design loads."},
{a:"A kick-out flashing installed at every roof-to-wall termination above siding.",ok:1,e:"This is the correct detail; kick-out flashings redirect water out of the wall cavity and prevent the slow-rot pattern that follows their absence."},
{a:"Ice and water shield installed only at the eave, with valleys and penetrations underlain by standard felt in a cold-climate region.",ok:0,e:"Codes in cold climates typically require ice and water shield in valleys and around penetrations, not just at the eave. Verify the local code edition."}
];

/* ===== 6. PLAIN_ENGLISH ===== */

export const PLAIN_ENGLISH: PlainEnglishMap = {
"TPO":{pe:"A white, plastic-like roof skin that gets heat-welded together at every seam. Most modern flat commercial roofs in the U.S. are this material.",nts:"Don't call it 'rubber' — that's a different material (EPDM) and it changes the conversation."},
"PVC":{pe:"A heat-welded plastic roof skin that handles grease and chemicals well — so it's common over restaurants and industrial buildings.",nts:"Don't say it's 'the same as TPO' — they're cousins, not the same product, and warranties differ."},
"EPDM":{pe:"The classic black rubber roof. Seams are taped or glued, not welded. Tough but it doesn't get along with kitchen grease or petroleum.",nts:"Don't promise heat-welding works on EPDM — it doesn't, and saying so creates an installation expectation you can't meet."},
"Built-Up Roof (BUR)":{pe:"An old-school, multi-layer 'tar and gravel' roof. Built up from alternating asphalt and felt layers, usually topped with stone.",nts:"Don't call every flat roof a BUR — most new ones aren't."},
"Modified Bitumen":{pe:"An asphalt roof reinforced with rubber or plastic so it bends without cracking. Installed in two or more layers, which gives it backup if one layer is breached.",nts:"Don't say 'modified bitumen is the same as BUR' — it's a different system with different failure modes and different inspection focus."},
"Sprayed Polyurethane Foam (SPF)":{pe:"A spray-on roof that expands into a seamless rigid foam, then gets sealed with a protective coating. Light, conforms to any shape, and forms its own insulation.",nts:"Don't oversell as 'leak-proof forever' — the coating is the wear layer and has to be maintained."},
"Cover Board":{pe:"A hard board placed under the roof skin to protect it from foot traffic and hail. Often the difference between a hailed roof surviving and a hailed roof leaking.",nts:"Don't tell the owner 'cover boards are optional' — your warranty and hail performance often depend on having one."},
"Polyisocyanurate (PolyISO)":{pe:"The most common rigid insulation board on commercial roofs. Highest insulation value per inch, but its value drops in cold weather, and it can crush when hit by hail.",nts:"Don't promise the box-stamped R-value forever — it's the new value, not the long-term one."},
"Tapered Insulation":{pe:"Insulation cut on an angle so a roof that looks flat actually slopes toward the drains. The reason water leaves the roof at all.",nts:"Don't say 'we'll just add taper later' — designing slope after the fact rarely works without significant rebuild."},
"Standing Seam":{pe:"A metal roof with raised seams that lock together — water flows past the seam, not through it. The premium metal-roof style.",nts:"Don't promise standing seam as the cheapest option — it isn't."},
"Oil Canning":{pe:"The wavy look you sometimes see on metal panels. It's cosmetic only — the roof works fine, it just isn't perfectly flat.",nts:"Don't promise 'no oil canning' on a flat metal panel — it's a property of the metal, not a defect of the install."},
"Flashing":{pe:"The metal or membrane that seals the roof wherever it gets interrupted — walls, drains, vents, skylights. Most leaks happen at flashings, not in the field of the roof.",nts:"Don't downplay flashing repairs as 'just cosmetic' — they're usually the primary leak point."},
"Coping":{pe:"The cap that sits on top of a low wall around the edge of a flat roof. Sheds water off the wall, usually back onto the roof.",nts:"Don't promise a 'leak-proof' wall cap — every joint is a maintenance point."},
"Parapet Wall":{pe:"The low wall that rises above the roof edge on commercial buildings. The thing you can't see over from the ground.",nts:"Don't ignore parapets in an inspection — they're a top-three leak source on commercial roofs."},
"Pipe Boot":{pe:"The rubber or metal cover that seals the membrane around a pipe sticking through the roof. Common failure point as it ages and cracks.",nts:"Don't say a cracked pipe boot is 'fine for a few more years' — it's an active leak source."},
"Pitch Pocket":{pe:"A metal box filled with sealant around an oddly-shaped roof penetration. A known maintenance point that has to be refilled over time.",nts:"Don't tell an owner pitch pockets are 'install and forget' — they aren't."},
"Drip Edge":{pe:"The L-shaped metal strip along the edge of a steep-slope roof that pushes water off the deck into the gutter. Required by most modern codes.",nts:"Don't assume drip edge is always present on older homes — it often isn't."},
"Ice and Water Shield":{pe:"A self-stick rubber underlayment installed under shingles at eaves and valleys to block water driven backwards under shingles by ice dams or wind.",nts:"Don't tell an owner 'ice and water shield prevents ice dams' — it doesn't prevent them, it just keeps the water from getting into the house when they form."},
"Ice Dam":{pe:"A ridge of ice that forms at the cold eaves when warm attic air melts snow up higher on the roof. The melt runs down, hits the cold edge, and freezes.",nts:"Don't blame ice dams entirely on the roof — they're usually driven by attic insulation and ventilation issues too."},
"Step Flashing":{pe:"Small L-shaped pieces of metal woven into the shingles where the roof meets a wall. Each piece overlaps the one below it, like shingles on a wall.",nts:"Don't say step flashing is optional — without it, every roof-to-wall joint leaks eventually."},
"Kick-Out Flashing":{pe:"The little metal diverter at the bottom of a roof-to-wall joint that throws water away from the siding. When it's missing, water runs behind the siding and rots the wall.",nts:"Don't dismiss missing kick-out flashings as 'no big deal' — they often cause hidden wall rot that costs more to fix than the roof."},
"Ridge Vent":{pe:"A continuous vent along the peak of a steep roof, hidden under cap shingles. The main way hot, moist attic air escapes.",nts:"Don't combine a ridge vent with open gable vents — the gable vents short-circuit the system."},
"Drain":{pe:"The hole in a flat roof where water leaves the building through interior plumbing. The number-one priority on any commercial roof inspection.",nts:"Don't tell an owner clogged drains are 'a minor issue' — they cause ponding, structural overload, and sometimes collapse."},
"Ponding Water":{pe:"Water still standing on a flat roof more than about a day after it rained. Almost every manufacturer warranty has language excluding leaks from ponded water.",nts:"Don't promise ponding 'isn't a real problem' — it's a written warranty exclusion in most cases."},
"Positive Drainage":{pe:"A roof designed so all the water drains off within about two days of rainfall. Without it, ponding and warranty problems follow.",nts:"Don't promise to 'add positive drainage' as a simple add-on — fixing slope is rarely cheap."},
"Scupper":{pe:"An opening through a flat roof's wall edge that lets water out. Sometimes the main drain, sometimes a backup overflow.",nts:"Don't ignore scupper sizing — undersized scuppers cause overflow problems no matter how good the primary drain is."},
"Cricket (Saddle)":{pe:"A small raised hump installed behind a wide obstacle (like a chimney) on the roof to push water around it instead of letting it pool behind.",nts:"Don't say a chimney 'doesn't need a cricket' on a wide chimney — code generally requires one above a certain width."},
"Fire Rating":{pe:"The fire-resistance class of the whole roof assembly — not of any one piece. Class A is the best.",nts:"Don't claim a 'fire-rated shingle' makes a fire-rated roof — the deck, underlayment, and shingle are tested as a system."},
"Class 1 (FM)":{pe:"An insurance industry rating that goes way beyond fire — it also covers wind, hail, corrosion, and leaks. All Class 1 roofs are Class A, but not all Class A roofs are Class 1.",nts:"Don't tell an owner Class A and Class 1 are the same — they're not, and your spec or insurance policy may require one specifically."},
"Wind Uplift":{pe:"The lifting force wind puts on a roof. Roofs are designed and attached to resist a specific amount of it; the perimeter and corners feel the most.",nts:"Don't promise 'hurricane-proof' — promise 'tested to a specific rating' instead."},
"Hail Damage Threshold (by Material)":{pe:"The smallest hailstone size that's likely to actually damage a given roof material. It's a rule of thumb, not a guarantee — real outcomes depend on the stone shape, the roof's age, and the underlying assembly.",nts:"Don't tell an owner 'below the threshold, there's no damage' — thresholds are guides, not absolutes, and assemblies matter."},
"Functional Damage":{pe:"Damage that shortens a roof's life or hurts how it performs — as opposed to marks that are only cosmetic. The dividing line between a covered claim and a denial.",nts:"Don't promise an owner 'all hail damage is covered' — the cosmetic vs. functional fight is the actual claim."},
"Replacement Cost Value (RCV)":{pe:"What it costs to put a new roof on with similar materials, with no deduction for the old roof's age.",nts:"Don't tell an owner the RCV check arrives all at once — most carriers pay actual cash value first and release the rest after the work is done."},
"Actual Cash Value (ACV)":{pe:"Replacement cost minus depreciation — the value of the old, used roof. The first check in most claims, smaller than the total.",nts:"Don't let an owner assume ACV is the final number — the recoverable depreciation is the rest, paid after completion."},
"Depreciation":{pe:"The dollar gap between a brand-new roof and the used roof you currently have. Carriers subtract this on the first check, then often pay it back when the work is done.",nts:"Don't say depreciation 'shouldn't apply' to a fully covered claim — it's how most ACV-then-RCV settlements work."},
"Recoverable Depreciation":{pe:"The portion of the claim the carrier holds back until you finish the work and prove it. Owners leave this money on the table all the time by not following through.",nts:"Don't let an owner walk away after the ACV check — there is usually more money owed once the work is documented."},
"Supplement":{pe:"A request to add money to an approved claim for damage or work that wasn't in the original scope. Backed by photos and documentation, not by argument.",nts:"Don't promise a supplement will be paid — promise to document it thoroughly and submit it."},
"Overhead & Profit (O&P)":{pe:"The general contractor's markup — usually ten and ten — for coordinating multiple trades on a complex job. Owed when the work justifies it, not automatic.",nts:"Don't tell an owner O&P is guaranteed on every claim — it isn't."},
"Ordinance or Law Coverage":{pe:"Insurance coverage that pays for code-required upgrades that get triggered when you repair or rebuild. The money to bring an old roof up to current code on the carrier's dime.",nts:"Don't tell an owner ordinance-or-law is automatic — many policies require it as a separate add-on or have low default limits."},
"Matching":{pe:"The idea that a repair should match the rest of the roof reasonably well — and if it can't, the rest may need to be replaced for uniformity. Recognized in many states.",nts:"Don't promise an owner matching is guaranteed — it varies by state, policy, and even by carrier interpretation."}
};

/* ===== 7. REPORT_PAIRS ===== */

export const REPORT_PAIRS: ReportPair[] = [
{topic:"Ponding water",rel:"inspection",poor:"There's some water sitting on the roof.",better:"Standing water observed in three areas, approximately 24 hours after the last rainfall.",best:"Standing water measured in three distinct low areas (NE quadrant ~12 sq ft, SW ~6 sq ft, central ~4 sq ft) 28 hours after a documented 0.6\" rainfall on [date]. Photos 12–17.",why:"Best version quantifies the issue, ties it to a documented rainfall, and indexes photos — moves the finding from observation to evidence."},
{topic:"Wet insulation",rel:"inspection",poor:"Insulation feels wet in places.",better:"Moisture detected in the insulation layer via infrared survey across the southern quadrant.",best:"Infrared moisture survey (date, ambient conditions, device) shows elevated moisture signatures across approximately 1,800 sq ft of the southern quadrant, confirmed by core sample at grid C-7 (saturated polyiso to facer). Map attached.",why:"Best version names the method, the conditions, the area, and the confirmation — survives an engineer challenge."},
{topic:"Hail impact bruising",rel:"claims",poor:"Lots of hail hits on the roof.",better:"Impact bruising consistent with hail observed across all slopes.",best:"Random impact bruising observed across all four slopes with mat fracture confirmed by hand-flex at sample locations on each slope (photos 04–22). Pattern, distribution, and circular characteristic consistent with hail. Storm record for [date] confirms 1.5\" hail at this address.",why:"Best version describes the diagnostic mechanism (mat fracture by hand-flex), distribution across all slopes, and ties to a specific storm record — addresses both extent and causation."},
{topic:"Functional damage",rel:"claims",poor:"The hail damage is functional, not cosmetic.",better:"Observed damage affects the roof's ability to shed water and shortens remaining service life.",best:"Mat fracture documented at multiple sample locations exposes the underlying asphalt and accelerates granule loss and UV degradation, reducing remaining service life. Granule beds at gutters and downspouts confirm ongoing granule displacement (photos 31–34). This is functional, not cosmetic, damage.",why:"Best version explains the failure mechanism (mat fracture → UV exposure → degradation) and supports it with secondary evidence (granule beds). Doesn't just assert; demonstrates."},
{topic:"Scrim fracture",rel:"claims",poor:"The TPO scrim is broken at hail hits.",better:"Reinforcement-scrim fracture confirmed at impact points under hand-flex inspection.",best:"Reinforcement scrim fracture confirmed at 9 of 14 sampled hail impacts under hand-flex inspection (photos 41–49). Scrim fracture compromises the membrane's tensile reinforcement and is industry-recognized functional damage on reinforced single-ply membranes.",why:"Best version quantifies the sample, indexes photos, and connects the finding to the recognized industry interpretation of functional damage."},
{topic:"Facer separation",rel:"inspection",poor:"The insulation seems delaminated.",better:"Facer separation observed in core sample after suspected hail event.",best:"Core sample (grid B-4, photos 51–55) shows facer separation from polyiso core, characteristic of post-impact hidden damage. Adjacent surface membrane appears intact, supporting that the damage is below the visible surface and would not be detected by surface-only inspection.",why:"Best version locates the sample, indexes photos, and explains why the finding matters (hidden damage not visible from above)."},
{topic:"Membrane puncture",rel:"claims",poor:"There's a hole in the membrane.",better:"Membrane puncture observed at coordinates [X,Y]; water-tight integrity compromised.",best:"Membrane puncture at grid D-3 (photo 61), approximately 0.4\" diameter, fully through to the cover board. Adjacent staining indicates water has entered the assembly. Repair will require membrane patch and verification that the underlying insulation is dry; if saturated, the affected area of insulation should be removed and replaced.",why:"Best version dimensions the breach, describes secondary damage (staining), and specifies what an adequate repair looks like — anchors the scope decision."},
{topic:"Positive drainage",rel:"inspection",poor:"The roof doesn't drain well.",better:"Positive drainage not achieved within the manufacturer's stated window in several areas.",best:"Ponding observed in 4 areas more than 48 hours after rainfall on [date] (photos and locations attached). This exceeds the manufacturer's 48-hour positive drainage requirement [cite spec/warranty section]. Root cause appears to be inadequate slope at original construction rather than blocked drains; drainage assessment and tapered remediation recommended.",why:"Best version cites the manufacturer requirement, distinguishes design defect from maintenance issue, and points at the remedy."},
{topic:"Cover board",rel:"estimate",poor:"There's no cover board.",better:"No cover board present between insulation and membrane.",best:"Tear-back at sample location shows membrane installed directly over polyiso with no cover board. Industry guidance and most manufacturer hail warranties require a cover board (typically glass-mat gypsum or HD polyiso) for impact protection. Absence of a cover board materially affects impact resistance and may affect coverage; cover board recommended in any replacement scope.",why:"Best version states the standard, explains the consequence to the owner, and ties it to the replacement scope."},
{topic:"Polyiso (hidden hail damage)",rel:"claims",poor:"The polyiso looks fine.",better:"Polyiso shows no surface damage on visual inspection.",best:"Cores at grids B-4, C-7, and E-2 show crushed polyiso cells and facer separation under apparently intact membrane (photos 71–79). Polyiso loses thermal performance and compressive strength after impact; visible surface condition does not rule out underlying damage and the assembly should be inspected, not the surface only.",why:"Best version names the locations, indexes the evidence, and shifts the conversation from surface inspection to assembly inspection."},
{topic:"Flashing failure",rel:"inspection",poor:"The flashings need work.",better:"Flashing deficiencies observed at multiple locations.",best:"Counterflashing at chimney (south face) has separated from the reglet (photo 82); base flashing at HVAC curb #3 shows fish-mouth opening (photo 84). Both are active leak paths; immediate temporary repair and permanent rework recommended.",why:"Best version locates each finding, indexes photos, characterizes severity (active leak path), and recommends both immediate and permanent action."},
{topic:"Wind uplift / edge metal",rel:"claims",poor:"The wind blew the roof loose.",better:"Wind damage initiated at the perimeter edge metal during the [date] storm.",best:"Perimeter edge metal lifted at the north and east sides; membrane peel pattern progresses inward from these edges (photos 91–97), consistent with wind uplift initiated at edge-metal failure. ANSI/SPRI ES-1 attachment compliance to be verified during repair documentation. Storm record for [date] reports peak gusts of XX mph.",why:"Best version names the failure mechanism, references the controlling standard, and ties to recorded wind data — all defensible in a coverage dispute."},
{topic:"Improper installation",rel:"claims",poor:"The roof was installed wrong.",better:"Several installation defects observed.",best:"Observed deviations from manufacturer installation requirements: [1] fasteners spaced at [X] inches vs. specified [Y] inches in field, [2] seam weld widths below specified minimum at sampled probe tests, [3] no walkway pad along documented service route. Each is a manufacturer requirement and may affect warranty status; manufacturer technical services should be consulted.",why:"Best version cites the spec, quantifies each deviation, and points the owner to the next responsible step instead of just labeling work as 'wrong.'"},
{topic:"Lack of moisture survey",rel:"estimate",poor:"They didn't do a moisture survey.",better:"No moisture survey was performed prior to the recover system.",best:"No documentation of an infrared, capacitance, or nuclear moisture survey was provided for the recover system installed on [date]. Industry practice requires moisture verification before adhering a new membrane over an existing roof; saturated substrate that was not identified and removed is the most likely source of the blistering observed (photos 101–106).",why:"Best version names the missing standard practice, ties the omission to the present symptom, and supports the causation argument with evidence."},
{topic:"Adhesive failure",rel:"inspection",poor:"The glue let go.",better:"Adhesive failure observed in fully-adhered membrane.",best:"Adhesive bond failure observed across approximately 600 sq ft of the field, with the membrane peeling cleanly from the cover board (photos 111–116). Adhesive failure on this scale typically indicates either application during conditions outside the manufacturer's window (temperature, dewpoint, substrate moisture) or product application below specified rate. Adhesive can verifications and manufacturer technical review recommended.",why:"Best version quantifies extent, describes the failure mode in evidentiary terms, and lists the actual root causes worth investigating."},
{topic:"Code-required slope",rel:"claims",poor:"The roof slope is too flat for code.",better:"The roof slope is below the minimum required by the governing code.",best:"Measured slope at sampled locations averages approximately ¼:12, which is below the minimum slope required by the governing edition of the IBC for the installed roof covering. Bringing slope to code in a repair triggers ordinance-or-law evaluation under the policy; owner should review O&L limits with the carrier.",why:"Best version measures, cites the controlling code, and identifies the coverage implication."},
{topic:"Ordinance or law coverage",rel:"claims",poor:"You should have ordinance or law.",better:"Repairing this loss appears to trigger code-required upgrades that ordinance-or-law coverage could pay for.",best:"The repair scope as written would re-create the existing non-conforming assembly. Local code adopted [edition] requires [specific upgrade]; performing this upgrade is required to legally complete the work. This is the situation ordinance-or-law coverage is intended to address; we recommend the policyholder confirm O&L limits and request inclusion of the required upgrade in the claim.",why:"Best version explains the legal trigger, names the upgrade, and tells the owner exactly what to ask for."},
{topic:"Matching",rel:"claims",poor:"You can't match the roof so all of it should be replaced.",better:"Matching the damaged roof slope to the undamaged slopes is not practical with current product offerings.",best:"The originally specified [shingle/membrane/color] is no longer manufactured; available substitutes do not produce a reasonably uniform appearance when installed adjacent to the undamaged slopes (sample photos 121–124). [State]'s matching guidance has been interpreted to require uniform appearance where partial repairs cannot reasonably match; we ask the carrier to address matching under that framework.",why:"Best version documents the matching problem with samples, cites the legal/regulatory framework, and asks the carrier for a specific decision."},
{topic:"Supplement request",rel:"estimate",poor:"We need a supplement for things we forgot.",better:"Submitting a supplement for items discovered after the original estimate.",best:"Supplement request for [item] (line item attached): discovered during tear-off on [date] when [condition] was uncovered. Documentation: photos 131–135, dimensions, and material spec. This was not visible at the original inspection and represents added scope, not added markup.",why:"Best version frames the supplement as discovery (not oversight), documents the trigger and the date, and addresses the most common carrier objection upfront."},
{topic:"Inadequate cover board / hail context",rel:"claims",poor:"They cheaped out on the cover board.",better:"The original assembly used no cover board, which affects hail performance.",best:"The existing assembly has no cover board between the polyiso insulation and the single-ply membrane (verified via tear-back, photo 141). Cover boards are widely recognized as the primary hail-protection layer in low-slope assemblies; their absence is consistent with the membrane puncture pattern observed after the [date] storm. A cover board should be included in the replacement scope to restore hail performance to current industry practice.",why:"Best version verifies the finding, ties it to the storm-pattern evidence, and translates into a scope decision the owner can act on."}
];

/* ===== 8. HAIL_THRESHOLDS ===== */

export const HAIL_THRESHOLDS: HailThreshold[] = [
{material:"Lightweight asphalt shingles",size:"≈ 1\"",notes:"Three-tab and thinner laminates begin showing functional damage at the smaller sizes."},
{material:"PVC single-ply",size:"≈ 1\"",notes:"Thinner plastic single-ply membranes show the earliest threshold among low-slope systems."},
{material:"Heavyweight asphalt shingles",size:"≈ 1¼\"",notes:"Architectural / heavy laminated shingles tolerate slightly larger stones before functional damage."},
{material:"Cedar shake",size:"≈ 1¼\"",notes:"Splits and through-board fractures appear at the smaller end; quality of the wood matters."},
{material:"Concrete tile",size:"≈ 1¾\"",notes:"Cracking and breakage threshold; condition and walk damage affect outcome."},
{material:"Plastic single-ply (general)",size:"≈ 1–2\"",notes:"Range reflects manufacturer, thickness, and reinforcement; verify by sampling."},
{material:"Modified bitumen",size:"≈ 1½–2\"",notes:"Cap-sheet granule loss and membrane bruising precede full puncture; thicker modified systems tolerate more."},
{material:"Smooth built-up roof (BUR)",size:"≈ 2\"",notes:"Gravel-surfaced BUR generally tolerates larger stones because the aggregate absorbs impact."},
{material:"EPDM",size:"≈ 2\"",notes:"Haag-cited threshold; the 2009 Koontz/Hutchinson study reported onset around 2¾–3\" using molded spherical ice."},
{material:"Gravel-ballasted membrane",size:"≈ 2½\"",notes:"Ballast acts as energy dissipation; assembly construction matters more than the surface."},
{material:"Galvanized steel panels",size:"≈ 2½\"",notes:"Functional vs. cosmetic dent argument is most contested here; gauge and substrate matter."}
];

/* ===== 9. TEST_CUT_STEPS ===== */

export const TEST_CUT_STEPS: TestCutStep[] = [
{id:"perm-owner",label:"Get the building owner's written permission",detail:"Photograph the signed authorization or send a confirming email and save the reply. Verbal permission is not enough."},
{id:"perm-carrier",label:"Get the insurer's written permission",detail:"Without carrier consent, a destructive sample can be challenged later or excluded. Email confirmation is acceptable; save the chain."},
{id:"pre-photo",label:"Photograph the area before any cut",detail:"Wide context shot, mid-range, and close-up with a scale (ruler, coin, or hail gauge) of any visible surface findings."},
{id:"cut",label:"Make the cut and photograph immediately",detail:"Take stills before anything is moved or peeled back. Capture all layers in cross-section."},
{id:"measure",label:"Measure and photograph depth and width",detail:"A scale in every measurement photo. Note layer-by-layer thickness if relevant to the finding."},
{id:"video",label:"Video the full sample if practical",detail:"A short video walking from wide context into the cut and the cross-section is hard to challenge later."},
{id:"magnify",label:"Examine under magnification if needed",detail:"A loupe or USB microscope can reveal mat fracture, scrim fracture, and facer separation invisible to the naked eye."},
{id:"repair-photo",label:"Photograph the repair after",detail:"Closes the documentation loop and demonstrates restoration of weather-tightness."},
{id:"log",label:"Record date, time, and everyone present",detail:"Names, roles, contact info. Chain of custody starts here."}
];

/* ===== 10. CURRICULA ===== */

export const CURRICULA: CurriculaMap = {
  "Sales":[
    {l:"Plain-English drills &mdash; build the owner-conversation vocabulary",a:"owner"},
    {l:"Lexicon &mdash; Membrane Systems group",a:"lex:membrane"},
    {l:"Plain English &mdash; deeper coverage",a:"owner"},
    {l:"L1 Apprentice certification",a:"certify"},
    {l:"L2 Field Roofing Professional certification",a:"certify"}
  ],
  "Business Development":[
    {l:"Plain-English drills",a:"owner"},
    {l:"Lexicon &mdash; Insurance Restoration & Coverage",a:"lex:restoration"},
    {l:"Report Language &mdash; estimate &amp; claim wording",a:"rep:claims"},
    {l:"L1 Apprentice certification",a:"certify"},
    {l:"L2 Field Roofing Professional certification",a:"certify"}
  ],
  "Inspector":[
    {l:"Lexicon &mdash; Hail Forensics & Test Cuts",a:"lex:hailforensics"},
    {l:"Compatibility drills",a:"compat"},
    {l:"Hail Forensics module &mdash; threshold table + protocol",a:"hail"},
    {l:"Report Language &mdash; inspection wording",a:"rep:inspection"},
    {l:"L2 Field Roofing Professional certification",a:"certify"}
  ],
  "Estimator":[
    {l:"Lexicon &mdash; Insurance Restoration & Coverage",a:"lex:restoration"},
    {l:"Report Language &mdash; estimate wording",a:"rep:estimate"},
    {l:"Plain English &mdash; for owner conversations on scope",a:"owner"},
    {l:"Compatibility drills",a:"compat"},
    {l:"L2 Field Roofing Professional certification",a:"certify"}
  ],
  "Supplement Writer":[
    {l:"Report Language &mdash; claim documentation drills",a:"rep:claims"},
    {l:"Hail Forensics module &mdash; threshold table + protocol",a:"hail"},
    {l:"Lexicon &mdash; Insurance Restoration & Coverage",a:"lex:restoration"},
    {l:"Scenarios &mdash; carrier-engineer rebuttals",a:"scenarios"},
    {l:"L3 Claims &amp; Forensics Specialist certification",a:"certify"}
  ],
  "Litigation Support":[
    {l:"Report Language &mdash; defensible wording drills",a:"rep:claims"},
    {l:"Hail Forensics module &mdash; threshold table + protocol",a:"hail"},
    {l:"Lexicon &mdash; Insurance Restoration & Coverage",a:"lex:restoration"},
    {l:"Scenarios &mdash; engineer rebuttal cases",a:"scenarios"},
    {l:"L3 Claims &amp; Forensics Specialist certification",a:"certify"}
  ],
  "Project Manager":[
    {l:"Lexicon &mdash; Membrane Systems",a:"lex:membrane"},
    {l:"Lexicon &mdash; Decks, Insulation & Cover Boards",a:"lex:insulation"},
    {l:"Compatibility drills",a:"compat"},
    {l:"Scenarios",a:"scenarios"},
    {l:"L2 Field Roofing Professional certification",a:"certify"}
  ],
  "Production":[
    {l:"Lexicon &mdash; Membrane Systems",a:"lex:membrane"},
    {l:"Lexicon &mdash; Flashing & Roof Detailing",a:"lex:flashing"},
    {l:"Compatibility drills",a:"compat"},
    {l:"Plain English &mdash; for client interactions on site",a:"owner"},
    {l:"L1 Apprentice certification",a:"certify"}
  ],
  "Claims Support":[
    {l:"Lexicon &mdash; Insurance Restoration & Coverage",a:"lex:restoration"},
    {l:"Plain English",a:"owner"},
    {l:"Report Language &mdash; claim wording",a:"rep:claims"},
    {l:"Scenarios",a:"scenarios"},
    {l:"L2 Field Roofing Professional certification",a:"certify"}
  ],
  "Manager":[
    {l:"Lexicon &mdash; full sweep of all 17 groups",a:"lexicon"},
    {l:"Hail Forensics module",a:"hail"},
    {l:"Plain English &mdash; sample staff-facing translations",a:"owner"},
    {l:"Manager dashboard",a:"manager"},
    {l:"L3 Claims &amp; Forensics Specialist certification",a:"certify"}
  ],
  "New Hire":[
    {l:"Lexicon &mdash; browse all groups",a:"lexicon"},
    {l:"Flashcards &mdash; Apprentice level",a:"flash:t:1"},
    {l:"Plain English &mdash; build owner-facing vocabulary",a:"owner"},
    {l:"Scenarios &mdash; field judgment",a:"scenarios"},
    {l:"L1 Apprentice certification",a:"certify"}
  ],
  "Other":[
    {l:"Lexicon",a:"lexicon"},
    {l:"Flashcards",a:"flash"},
    {l:"Scenarios",a:"scenarios"},
    {l:"Compatibility drills",a:"compat"},
    {l:"L1 Apprentice certification",a:"certify"}
  ]
};
