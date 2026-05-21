import type { BossBank } from '../types';

// Storm-Restoration Compliance Marketing boss — the door-to-door era's
// regulatory architecture. Licensing, registration, contract requirements,
// rescission rights, prohibited "deductible rebate" pitch, lead-generation
// hygiene that survives a state DOI audit.

export const code10: BossBank = {
  bossId: 'code-10',

  round1: [
    {
      prompt: 'Storm-Restoration Solicitation Laws are best described as:',
      termKey: 'Storm-Restoration Solicitation Laws',
      choices: [
        'State and local rules governing door-to-door roofing solicitation after a declared storm: registration, written contracts with rescission rights, prohibition on rebating the deductible, required disclosure language',
        'Federal weather regulations',
        'Trade-association recommendations with no force of law',
        'Marketing best-practice guidelines',
      ],
    },
    {
      prompt: 'A "rebate the deductible" offer from a contractor to a homeowner is, in most storm-prone states:',
      termKey: 'Storm-Restoration Solicitation Laws',
      choices: [
        'A criminal violation (often a felony) — it is insurance fraud against the carrier and a contractor regulatory violation regardless of who proposes it',
        'A legitimate sales incentive',
        'A federally protected discount',
        'Allowed if the homeowner consents in writing',
      ],
    },
    {
      prompt: 'A Roofing Contractor License is, in most U.S. jurisdictions:',
      termKey: 'Roofing Contractor License',
      choices: [
        'A state, county, or city credential required to perform roofing work for compensation — verify the specific requirement for the property\'s jurisdiction',
        'A federal universal credential',
        'A trade-association membership card',
        'Optional in every state',
      ],
    },
    {
      prompt: 'Written contracts with rescission rights for storm-restoration door-knock sales are, in many states:',
      termKey: 'Storm-Restoration Solicitation Laws',
      choices: [
        'A statutory requirement — typically a 3-day right of rescission, must be disclosed conspicuously in the contract, and applies whether or not the carrier has accepted coverage',
        'A homeowner courtesy with no legal force',
        'Reserved for in-store sales only',
        'A federal Consumer Financial Protection Bureau rule',
      ],
    },
    {
      prompt: 'A "post-storm registration" requirement in storm-prone states typically:',
      termKey: 'Storm-Restoration Solicitation Laws',
      choices: [
        'Requires storm-restoration contractors to register with the state insurance department or AG\'s office within a defined window after a declared storm and post a bond — verify the specific state rule',
        'Is the same in every state',
        'Applies only to non-licensed contractors',
        'Has been preempted by federal law',
      ],
    },
    {
      prompt: 'A homeowner who signs a storm-restoration contract on the doorstep then changes their mind within the rescission period:',
      termKey: 'Storm-Restoration Solicitation Laws',
      choices: [
        'Has the right to cancel without penalty in most storm-rule states — the contractor must refund any deposit and cease work',
        'Has no recourse once signed',
        'Owes the contractor liquidated damages',
        'Must continue with the contract for federal-law reasons',
      ],
    },
    {
      prompt: 'A contractor lead-generation pitch promising "free roof inspection if a storm hit your area" is:',
      termKey: 'Storm-Restoration Solicitation Laws',
      choices: [
        'Legal in most states if the contractor is licensed and registered and does not cross into deductible rebates, false insurance promises, or unauthorized public adjusting — the offer itself is not the issue, the conduct that follows is',
        'Always a violation, regardless of conduct',
        'A federal CFPB violation',
        'Permitted only by attorneys',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A storm-restoration contractor in a storm-prone state pitches a homeowner: "We can get your roof replaced for free — we\'ll waive your $3,500 deductible as our promotional discount."',
      choices: [
        {
          text: 'The pitch is the textbook regulatory violation and, in most storm-prone states, a felony or serious civil offense. Rebating, waiving, or absorbing the deductible is insurance fraud against the carrier (the deductible is what aligns the homeowner with the insurance bargain) and is specifically prohibited by storm-restoration statutes in states like Colorado, Texas, Minnesota, Illinois, and many others. The right contractor refuses the offer even when the homeowner asks for it; the right homeowner walks away from any contractor who offers it. The honest financing conversation is loans, payment plans, scope reduction, or absorbing the deductible by reducing margin on the legitimate work — none of which involve telling the carrier the deductible was paid when it was not.',
          correct: true,
        },
        {
          text: 'Take the offer; the contractor will figure it out.',
          correct: false,
        },
        {
          text: 'Take the offer but don\'t mention it to the carrier.',
          correct: false,
        },
      ],
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
    {
      prompt:
        'A storm-restoration team is preparing to door-knock in a neighborhood the day after a declared hail event. The state requires post-storm registration with the AG\'s office and a 3-day rescission notice on every contract.',
      choices: [
        {
          text: 'Complete the post-storm registration BEFORE the team hits the street. Confirm registration filing, posted bond, and the contractor\'s license number with the AG\'s office; print the registration confirmation for crew packets. Update the standard contract to include the conspicuous 3-day rescission notice in the required format (most states specify font size, placement, and language). Brief the crew on the registration status, the rescission notice, the prohibition on deductible rebates, and the no-recorded-statements rule (do not record carrier calls). Door-knocking without completing these procedural steps is a state-AG enforcement target on every declared-storm event.',
          correct: true,
        },
        {
          text: 'Knock first, register later if the team gets sales.',
          correct: false,
        },
        {
          text: 'Skip registration; it\'s a formality.',
          correct: false,
        },
      ],
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
    {
      prompt:
        'A homeowner signs a $28,000 storm-restoration contract on Tuesday evening. Wednesday morning they call the contractor to cancel. The contract carries a 3-day rescission notice per state law.',
      choices: [
        {
          text: 'Honor the rescission immediately. The homeowner is within the statutory rescission window; the right move is to cancel the contract in writing, refund any deposit (most rescission statutes prohibit deposits before the window closes, but if any was taken, return it in full), confirm no work has been performed, and document the cancellation. Trying to talk the homeowner out of rescission, charging cancellation fees not permitted under the rescission statute, or stalling on the refund are all enforcement targets. Honor the rescission, send the homeowner a clean cancellation letter, and move on; the next door-knock has the same odds of success regardless of this one.',
          correct: true,
        },
        {
          text: 'Refuse to cancel — the homeowner signed.',
          correct: false,
        },
        {
          text: 'Charge a cancellation fee equal to 30% of the contract.',
          correct: false,
        },
      ],
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
  ],

  round3: [
    {
      topic: 'Senior compliance briefing to a storm-restoration sales team',
      poor: 'Don\'t break the law.',
      better: 'The team\'s standing orders: licensed and registered before door-knocking, no deductible rebates ever, rescission notice on every contract, no claim negotiation without a PA license — these are the lines that protect the company and you.',
      best: 'Storm-restoration sales team — compliance standing orders (read and acknowledge before any door-knock activity): (1) Licensing and registration. Confirm the company\'s contractor license is current in this state and registered with the AG\'s office under the post-storm solicitation statute (registration documents in the crew packet). Carry your individual ID if the state requires sales rep registration. Door-knocking without registration is the easiest enforcement case the AG will ever build. (2) Deductible rebates. We do not rebate, waive, absorb, or "make disappear" any homeowner deductible. If the homeowner asks (and they will), the script is: "I can\'t do that — it\'s a felony in this state. What we can do is talk through legitimate financing options for your out-of-pocket." If you ever hear another team member offer to rebate, report it to me immediately. (3) Contract and rescission notice. Every signed contract uses the current state-compliant form with the conspicuous rescission notice; we do not take deposits during the rescission window; we honor every rescission request promptly and in writing. (4) Claim negotiation. We do not negotiate the claim. We document damage and discuss the physical scope with the carrier. Claim negotiation belongs to the homeowner or to a separately-retained licensed PA. Anyone asking for "one person handles it all" gets the contractor-vs-PA explanation and a referral list. (5) Statements and recordings. Do not record carrier calls without disclosure where required; do not coach the homeowner on what to say to the carrier; do not write narrative claim-advocacy language into our scopes. (6) When in doubt, walk away from the contract. We do not need the contract more than we need our license, and we do not need any one homeowner more than we need the company.',
      why: 'Storm teams default to whatever the most aggressive teammate is doing unless the compliance standing orders are explicit. Naming the six lines, the deductible-rebate script, the contractor-vs-PA boundary, and the "we don\'t need the contract more than the license" framing is the senior-leader deliverable that produces a team that survives the inevitable DOI audit.',
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
    {
      topic: 'Writing a state-compliant rescission notice on a storm-restoration contract',
      poor: 'You have 3 days to cancel.',
      better: 'NOTICE OF CANCELLATION — you may cancel this contract within 3 business days; we will refund any deposit within 10 business days; cancellation must be in writing per the address below.',
      best: 'NOTICE OF RIGHT TO CANCEL (conspicuous notice, [state-required font size and placement]): You, the buyer, may cancel this transaction at any time prior to midnight of the third business day after the date of this transaction. To cancel this transaction, mail or deliver a signed and dated copy of this cancellation notice or any other written notice, or send a telegram, to [Contractor Name, Address, Email, Fax — exactly as the statute requires]. Notice of cancellation may also be made by [other methods if the state statute permits — e.g., electronic signature, e-mail with read receipt]. If you cancel this transaction, any payments made by you under this contract will be returned within ten business days following receipt by the seller of your cancellation notice, and any negotiable instrument executed by you will be canceled. If you cancel, you must make available to the seller at your residence, in substantially as good condition as when received, any goods delivered to you under this contract; or you may, if you wish, comply with the instructions of the seller regarding the return shipment of the goods at the seller\'s expense and risk. If you make the goods available to the seller and the seller does not pick them up within twenty days of the date of your notice of cancellation, you may retain or dispose of the goods without any further obligation. If you fail to make the goods available to the seller, or if you agree to return the goods to the seller and fail to do so, then you remain liable for performance of all obligations under the contract. I HEREBY CANCEL THIS TRANSACTION. (Buyer\'s signature) ____________________ (Date) ____________________ I HAVE RECEIVED A COMPLETED COPY OF THIS NOTICE OF CANCELLATION ON THE DATE OF THE TRANSACTION. (Buyer\'s signature) ____________________ (Date) ____________________ Note: this is illustrative form-language reflecting the structure required under model home-solicitation statutes; verify the exact required language, font size, and placement against the current statute and AG guidance for the property\'s state before printing on production contracts.',
      why: 'Rescission notices are routinely written informally and fail the statutory specificity test. Naming the conspicuous-placement requirement, the dual-signature structure (right to cancel + acknowledgment of receipt), and the explicit "verify before printing" caveat is what produces a notice that survives both an AG audit and a homeowner-rescission dispute.',
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
    {
      topic: 'Field-language declining a homeowner request to rebate the deductible',
      poor: 'I can\'t do that.',
      better: 'Rebating the deductible is insurance fraud and a felony in this state; here are the legitimate ways we can structure the financing.',
      best: 'Decline-and-redirect language for deductible-rebate requests: "I hear you on the deductible being a real number to come up with, and that\'s legitimate. What I can\'t do — and I want to be transparent about why — is rebate, waive, or pretend you paid the deductible. In [state], that\'s a felony under [statute citation if known], and it is also a contractor licensing offense that would end my license and the company\'s ability to operate. Beyond the legal issue, it would be insurance fraud against your carrier, which puts your future coverage and renewal at risk, not just mine. Here are the legitimate options for the deductible: (1) Financing — we work with [N] roofing-finance lenders who offer 12- to 60-month terms, often at low or zero promotional interest for qualified borrowers; we can pre-qualify you in about 15 minutes. (2) Scope adjustments — we can look at the scope for items that can be deferred or downgraded without compromising the warranty, which may reduce your out-of-pocket exposure if the claim does not cover the full RCV. (3) Payment plan with us directly — we can structure a payment plan on the deductible if financing doesn\'t fit, with terms documented in the contract addendum. (4) Out of pocket — many homeowners pay the deductible from savings or a HELOC; if that works for you, we credit it on the contract balance. None of these involve telling your carrier you paid when you did not. I\'d rather work through these with you than have either of us in a fraud case 18 months from now."',
      why: 'Deductible-rebate offers are the most-likely felony exposure in storm restoration and the most-tempting "shortcut" sales pitch. Naming the specific legal exposure, the homeowner\'s own future-coverage risk, and the four legitimate alternatives turns the decline from a refusal into a sales path that closes legitimately or walks away cleanly.',
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
    {
      topic: 'Senior-PM internal audit on a storm-restoration team\'s compliance posture',
      poor: 'Make sure we\'re compliant.',
      better: 'Audit checklist: licensing current, post-storm registration filed, contract template state-compliant, no deductible-rebate scripts, PA-boundary acknowledged, no AOB on non-compliant forms.',
      best: 'Storm-restoration compliance audit — checklist with evidence requirements for each item: (1) Contractor license — current in every state of operation, verified by registry pull dated within 30 days (attach printouts). (2) Post-storm registration — filed with the AG\'s office or DOI in every storm-rule state where the team is operating within the required window after the declared event (attach confirmation receipts). Required bond posted and currently in force (attach surety certificate). (3) Sales-rep individual registration — required in some states; verify and document each rep\'s individual registration status (attach state-issued credentials per rep). (4) Contract template — current state-compliant version in use, with conspicuous rescission notice in required format, license number disclosure, no AOB language on contracts in AOB-restricted states, no deductible-rebate language under any framing. (5) Scripts and training — written sales scripts on file, deductible-rebate-decline script trained and acknowledged by every rep, contractor-vs-PA boundary trained and acknowledged, recorded-statement protocol documented. (6) Lead-source hygiene — lead-generation partners contractually required to comply with state telemarketing and door-knock rules; documented complaints from leads investigated and resolved. (7) AOB usage — if any AOBs are in use, the form has been reviewed by counsel against current state law within the last 12 months and complies with all required disclosures; if the state has restricted AOBs (FL, TX, others), the form is not used in that state. (8) Complaint history — DOI complaint history reviewed; any open complaints under investigation with documented response plan. (9) Incident reporting — internal whistleblower channel documented; rep-reported violations investigated; documented terminations or remediations on file for confirmed violations. (10) Annual review — compliance posture reviewed by company counsel and updated against statutory and regulatory changes in every state of operation, with documented review date and findings. The deliverable is a quarterly audit memo with each item rated GREEN / YELLOW / RED, with a remediation plan for any RED items, signed by the company president.',
      why: 'Compliance audits without explicit checklists, evidence requirements, and ratings are theater. Naming the ten layers, the evidence to attach for each, the GREEN/YELLOW/RED rating structure, and the signed-by-president deliverable is the senior-PM artifact that converts "we\'re compliant" from an assertion into a defended position.',
      relatedTermKey: 'Storm-Restoration Solicitation Laws',
    },
  ],
};
