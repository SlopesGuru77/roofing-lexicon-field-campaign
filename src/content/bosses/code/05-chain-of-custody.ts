import type { BossBank } from '../types';

// Chain of Custody & Evidence boss — what makes a sample, photo, or
// statement defensible vs dismissible; the test-cut and storage protocols;
// the photo-documentation standard.

export const code05: BossBank = {
  bossId: 'code-05',

  round1: [
    {
      prompt: 'Chain of Custody on a roof sample or photo is:',
      termKey: 'Chain of Custody (Forensic)',
      choices: [
        'The documented trail of who handled the evidence, when, and how it was stored — without it, evidence can be challenged',
        'A separate insurance product',
        'A warranty clause',
        'The carrier\'s billing system',
      ],
    },
    {
      prompt: 'A Test Cut Protocol step that is most often skipped to the contractor\'s later regret is:',
      termKey: 'Test Cut Protocol',
      choices: [
        'Obtaining and documenting owner and carrier permission before the destructive cut',
        'Pouring the asphalt cement',
        'Driving to the property',
        'Calling for inspection scheduling',
      ],
    },
    {
      prompt: 'A defensible Photo Documentation Standard typically includes:',
      termKey: 'Photo Documentation Standard',
      choices: [
        'A wide context shot, a measured close-up with a scale, and an annotated overview map of every observation — time-stamped and geotagged where possible',
        'One distant photo per claim',
        'Only photos of damage, not context',
        'Photos taken from the ground only',
      ],
    },
    {
      prompt: 'A test cut taken without prior written carrier permission is, in most claim disputes:',
      termKey: 'Test Cut Protocol',
      choices: [
        'Vulnerable to challenge — the carrier can argue the destructive sample was unauthorized and exclude or discount the finding',
        'Always admissible regardless',
        'Required by law',
        'Better evidence than a permitted cut',
      ],
    },
    {
      prompt: 'Storing a physical roof sample (shingle, membrane plug, fastener) for a contested claim should:',
      termKey: 'Chain of Custody (Forensic)',
      choices: [
        'Be in a labeled, sealed container with date, location, and handler recorded; logged into a custody record at each handoff',
        'Be left in the back of a truck until needed',
        'Be discarded after photographing',
        'Be combined with other claims\' samples',
      ],
    },
    {
      prompt: 'Photo metadata (timestamp, GPS, device) on a contested claim photo is:',
      termKey: 'Photo Documentation Standard',
      choices: [
        'A meaningful part of the evidentiary value — strips and edits that remove or alter metadata are challengeable',
        'Irrelevant to coverage decisions',
        'Best removed before submission for privacy',
        'Never reviewed by adjusters',
      ],
    },
    {
      prompt: 'A Loupe / Microscope Inspection finding is most defensible when it is documented with:',
      termKey: 'Loupe / Microscope Inspection',
      choices: [
        'A through-the-loupe photograph with scale and a wider context photo showing the same site',
        'A verbal description only',
        'A diagram drawn from memory',
        'Hearsay from a homeowner',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A contractor takes a test cut on a low-slope roof to confirm assembly composition for an insurance claim. They take photos, but they did not call the carrier first or document owner consent in writing.',
      choices: [
        {
          text: 'The cut may still be useful, but it is now vulnerable. Document the cut after the fact: written owner consent obtained at next contact, photos with metadata intact, sample stored sealed and labeled with date/location/handler, and a candid note that prior carrier permission was not obtained. On any future contested claim, lead with the limitations of this sample and supplement with permitted cuts if possible. Don\'t hide the procedural gap; carriers and forensic engineers spot it immediately and the cover-up damages credibility worse than the gap.',
          correct: true,
        },
        {
          text: 'Submit the cut as if all procedures were followed.',
          correct: false,
        },
        {
          text: 'Destroy the sample so no one can question it.',
          correct: false,
        },
      ],
      relatedTermKey: 'Test Cut Protocol',
    },
    {
      prompt:
        'A homeowner asks the contractor to "clean up" old photos of the roof from the property listing 18 months ago because they show some wear that the carrier might use against the claim.',
      choices: [
        {
          text: 'Refuse and explain why. Altering, deleting, or hiding pre-storm photos to influence a claim is insurance fraud — by the homeowner, and by the contractor if they help. The listing photos exist on Zillow/MLS/internet archives regardless of what is on the homeowner\'s device; the carrier or PA can find them. The honest move is to look at the listing photos together, identify what they actually show (often less than the homeowner thinks), and prepare an honest narrative about the pre-storm condition rather than try to make the evidence go away.',
          correct: true,
        },
        {
          text: 'Help the homeowner remove the photos quietly.',
          correct: false,
        },
        {
          text: 'Ignore the request and proceed with the claim.',
          correct: false,
        },
      ],
      relatedTermKey: 'Photo Documentation Standard',
    },
    {
      prompt:
        'A contractor inspects a roof on day 3 after a hail event and takes 4 wide-angle photos of one slope. The carrier later denies the claim citing "insufficient documentation."',
      choices: [
        {
          text: 'The denial is technically right; 4 wide-angle photos of one slope is not a documented inspection. Return to the property with a proper photo protocol: every slope photographed wide, measured close-ups with a scale at impact sites, an annotated overview map, indirect-impact evidence from soft metals, and metadata-intact images. Submit the proper documentation with a supplement; the denial was on documentation gaps, not on damage, so closing the gaps reopens the claim.',
          correct: true,
        },
        {
          text: 'Argue the original photos were enough.',
          correct: false,
        },
        {
          text: 'Drop the claim entirely.',
          correct: false,
        },
      ],
      relatedTermKey: 'Photo Documentation Standard',
    },
  ],

  round3: [
    {
      topic: 'Explaining to a homeowner why test-cut permission and chain of custody matter',
      poor: 'We have to follow procedure.',
      better: 'A test cut without prior carrier permission, or a sample without documented chain of custody, can be challenged and excluded — protocol protects the evidence.',
      best: 'A roof sample or test cut is destructive: once cut, you cannot un-cut. Carriers and forensic engineers know this, and they can challenge a sample on procedural grounds — no prior carrier permission, no documented owner consent, no chain of custody, no metadata-intact photos — to argue the sample is unreliable or unauthorized. The protocol is not bureaucracy; it is what keeps the evidence on the table when the dispute escalates. The protocol: (1) written owner consent at the date of the cut; (2) carrier notification before the cut on any claim already in progress; (3) photographs before, during, and after with measurement scale; (4) labeled sealed container with date/location/handler; (5) custody log on each subsequent handoff. Skipping any of these is a future cross-examination question that we can answer correctly or not — the cost of doing it right is fifteen minutes; the cost of a thrown-out sample is the claim.',
      why: 'Homeowners (and rushed contractors) treat procedure as overhead. Naming the destructive nature of the sample, the procedural attack surface, and the five-step protocol with the cost-of-skip framing converts "the protocol" from optional friction into a defended deliverable.',
      relatedTermKey: 'Test Cut Protocol',
    },
    {
      topic: 'Documenting a test cut after the fact when the protocol was partially missed',
      poor: 'Test cut taken.',
      better: 'Test cut taken on [date]; owner consent documented after the fact; carrier was not notified before the cut.',
      best: 'Test cut taken [Y/Y/YYYY] at approximately [time] on [slope/location, with grid reference to the overview map]. Cut dimensions: [width × length × depth]. Assembly observed (top to bottom): [list layers with photos]. Sample stored: labeled sealed plastic container, sample ID [XXX], stored in [location]. Custody log attached. Procedural notes (candid): (1) Owner consent — verbal consent at the time of inspection, written consent obtained [date] (signed form attached). (2) Carrier notification — claim had not yet been filed at the time of the cut; carrier notification was therefore not feasible. Cut was taken as part of a contractor pre-claim investigation, not a contested-claim sample. (3) Photo metadata — intact, attached separately as raw image files. We acknowledge that, on any future contested claim, this cut\'s pre-claim timing and the lack of contemporaneous carrier notification are points the carrier may raise. We recommend supplementing this cut with a fresh test cut taken under full protocol if the claim escalates to a contested coverage decision.',
      why: 'Hiding the procedural gap fails on cross-examination and damages credibility worse than the gap itself. Naming exactly what was followed, what was not, and the recommended supplemental step is the senior-inspector deliverable that lets the sample be useful without overstating its weight.',
      relatedTermKey: 'Chain of Custody (Forensic)',
    },
    {
      topic: 'Field-report language for a slope-by-slope photo log on a contested hail claim',
      poor: 'Photos attached.',
      better: '44 photos across all 6 slopes, with wide context and measured close-ups; metadata intact; annotated overview map attached.',
      best: 'Photo documentation: 44 metadata-intact JPEG images, captured [Y/Y/YYYY] during the [time]–[time] window, on a [device] mobile device with EXIF GPS enabled. File naming and organization: each filename includes slope code (N/S/E/W/HIP-1/HIP-2), photo type (W = wide, CU = measured close-up, MAP = overview), and sequence number. Per slope: 1 wide context shot from the same reference point on each slope (8 photos total — north and south of each cardinal slope); 5 measured close-ups per slope at sampled impact sites, with [brand] scale gauge in frame and the impact center marked; 1 annotated overview map per slope showing the impact locations relative to a roof outline. Additional documentation: 4 photos of AC condenser fin denting (indirect-impact evidence); 2 photos of the rooftop unit hood metal (soft-metal impact); 2 photos of gutter spatter (run-off pattern). All images delivered with original EXIF; if the carrier needs lower-resolution copies for portal upload, full-resolution originals remain available on request. We have not altered, cropped, or stripped metadata on any image submitted.',
      why: 'Photo logs without naming conventions, per-slope counts, scale-in-frame discipline, and an explicit "metadata not altered" statement are dismissable. Naming each layer of the photo protocol and the integrity statement is what gives the desk adjuster the structured evidence base they need to write a covered finding.',
      relatedTermKey: 'Photo Documentation Standard',
    },
    {
      topic: 'Senior-PM cover letter on a sample being submitted for forensic review',
      poor: 'Sample attached.',
      better: 'Sample ID [XXX] taken [date] with owner consent and carrier notification; chain of custody log attached.',
      best: 'Submission of physical sample for forensic review — Sample ID [XXX]. Sample type: full-depth shingle plug (3.5" diameter), removed from the windward (N) slope at grid reference [X,Y] on the overview map. Date and time of cut: [Y/Y/YYYY] at [HH:MM]. Inspector and assistant present: [names, credentials]. Authorizations: (1) written owner consent dated [date], signed form attached; (2) carrier notification submitted to [adjuster name, claim #] on [date], confirmation email attached. Pre-cut, during-cut, and post-cut photographs attached, metadata intact. Sample storage: labeled sealed evidence bag, stored at [location, temperature-controlled, restricted access], custody log attached (handoff entries: 1 — inspector to storage, 2 — storage to forensic laboratory). Sample is being submitted to [lab name, address] for [requested analysis — mat-fracture review, granule-loss quantification, age-condition assessment]. Lab will return findings via written report and will retain the sample under their own chain-of-custody protocol until the claim is resolved. We request the carrier and any retained engineer be given parallel notice and the opportunity to observe a split sample if they elect.',
      why: 'Sample submission letters without inspector names, dual authorization documentation, custody log, lab destination, and split-sample offer get challenged in appraisal or court. Naming each layer is the senior-PM deliverable that makes the sample bulletproof through escalation.',
      relatedTermKey: 'Chain of Custody (Forensic)',
    },
  ],
};
