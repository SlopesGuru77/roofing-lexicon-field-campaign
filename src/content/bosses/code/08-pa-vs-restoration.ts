import type { BossBank } from '../types';

// PA vs Restoration Contractor boss — the licensing boundary, AOB regulation,
// the "we'll handle the whole claim" trap, and how to write a defensible
// restoration contract that does not stray into public adjusting.

export const code08: BossBank = {
  bossId: 'code-08',

  round1: [
    {
      prompt: 'A Public Adjuster (PA) is best described as:',
      termKey: 'Public Adjuster',
      choices: [
        'A state-licensed insurance-claim representative who negotiates the claim on the policyholder\'s behalf, distinct from the contractor performing the work',
        'A roofing contractor with a marketing budget',
        'A carrier employee assigned to the homeowner',
        'A general contractor on a roof job',
      ],
    },
    {
      prompt: 'A Restoration Contractor\'s appropriate scope on an insurance claim is, in most states:',
      termKey: 'Restoration Contractor vs Public Adjuster',
      choices: [
        'Document damage, write and discuss the physical scope of work, supplement line items with the carrier — but not negotiate the claim itself',
        'Negotiate the entire claim end-to-end including coverage decisions',
        'Act as the homeowner\'s legal representative',
        'Charge a percentage of the settlement',
      ],
    },
    {
      prompt: 'An Assignment of Benefits (AOB) is:',
      termKey: 'Assignment of Benefits (AOB)',
      choices: [
        'A contract assigning the policyholder\'s claim rights to a contractor or vendor, letting them invoice and litigate the carrier directly',
        'A homeowner agreeing to pay the deductible',
        'A carrier endorsement',
        'A federal tax form',
      ],
    },
    {
      prompt: 'AOB use is, depending on the state:',
      termKey: 'Assignment of Benefits (AOB)',
      choices: [
        'Heavily regulated and, in some states, restricted or banned outright after documented abuse — verify the state law before drafting one',
        'A federal right available in every state',
        'Always void as a matter of law',
        'Required on every claim',
      ],
    },
    {
      prompt: 'A roofing contractor who, without a PA license, negotiates the coverage decision with the carrier on behalf of the homeowner in a state that licenses PAs separately is:',
      termKey: 'Restoration Contractor vs Public Adjuster',
      choices: [
        'Engaging in unauthorized public adjusting — a regulatory violation that can void contracts and trigger fines or license actions',
        'Acting within standard contractor scope',
        'Performing a federally-protected service',
        'Acting as a free legal advisor',
      ],
    },
    {
      prompt: 'A Public Adjuster\'s fee, in most states that license them, is:',
      termKey: 'Public Adjuster',
      choices: [
        'A percentage of the settlement, often capped by state statute (commonly 10–20%, sometimes lower in catastrophe declarations)',
        'A flat federal fee',
        'Free to the homeowner',
        'Paid directly by the contractor',
      ],
    },
    {
      prompt: 'A contractor who tells the homeowner "I\'ll handle the whole claim for you" in a state that licenses PAs separately is, regardless of intent:',
      termKey: 'Restoration Contractor vs Public Adjuster',
      choices: [
        'Probably committing the textbook regulatory violation — the sentence itself can be used as evidence of unauthorized public adjusting',
        'Making a routine sales statement',
        'Acting as a federal advocate',
        'Protected by free-speech rights',
      ],
    },
  ],

  round2: [
    {
      prompt:
        'A homeowner in Florida is presented with an AOB form by a roofing contractor pitching a "no out-of-pocket" storm restoration. The homeowner has heard mixed things about AOBs.',
      choices: [
        {
          text: 'Florida has substantially restricted AOB usage for property-insurance claims since 2019, with multiple legislative tightenings. Before signing anything, verify the contractor\'s AOB form against current Florida law (the legislature has narrowed AOB validity, added required disclosures, and altered fee-shifting). A form that complies with pre-2019 Florida law is likely invalid today; a contractor still using a non-compliant form is signaling either ignorance or willful violation. Decline until the form\'s compliance with current law is independently verified — preferably by an attorney, not the contractor offering it.',
          correct: true,
        },
        {
          text: 'Sign immediately — AOBs are routine.',
          correct: false,
        },
        {
          text: 'Refuse all storm work in Florida.',
          correct: false,
        },
      ],
      relatedTermKey: 'Assignment of Benefits (AOB)',
    },
    {
      prompt:
        'A restoration contractor and a homeowner have signed a contract that says the contractor will "handle all communications and negotiations with the carrier and accept the claim payment as settlement." The state in question licenses PAs separately.',
      choices: [
        {
          text: 'The contract language is performing public-adjusting work without a PA license, in a state that licenses PAs separately. The contract may be void or voidable under state law, the contractor may face fines and license action, and the homeowner has standing to walk. The right path is to rewrite the contract: contractor performs the physical work and may discuss the physical scope with the carrier; claim negotiation, coverage advocacy, and settlement acceptance remain with the homeowner (or their separately-retained licensed PA / attorney). Acknowledge the original language was an overreach and provide the corrected scope in writing.',
          correct: true,
        },
        {
          text: 'Keep the contract as-is; it\'s standard language.',
          correct: false,
        },
        {
          text: 'Have the homeowner sign an AOB to make it legal.',
          correct: false,
        },
      ],
      relatedTermKey: 'Restoration Contractor vs Public Adjuster',
    },
    {
      prompt:
        'A homeowner has hired a public adjuster on a complex claim. The contractor is asked to coordinate with the PA. The PA wants the contractor to write specific advocacy language into the scope to support the PA\'s negotiation.',
      choices: [
        {
          text: 'Coordinate respectfully but stay in scope. The contractor\'s deliverable is the physical scope of damage and the line-item estimate, written to a defensible documentation standard. Advocacy language ("the carrier is wrong," "this is bad faith") belongs in the PA\'s correspondence, not the contractor\'s scope. Provide thorough physical documentation; let the PA do the negotiation. Crossing the line here — even at the PA\'s request — exposes the contractor to the same regulatory issue as crossing it without a PA on the file.',
          correct: true,
        },
        {
          text: 'Write whatever the PA asks; they\'re the licensed professional.',
          correct: false,
        },
        {
          text: 'Refuse to coordinate with the PA at all.',
          correct: false,
        },
      ],
      relatedTermKey: 'Public Adjuster',
    },
  ],

  round3: [
    {
      topic: 'Explaining to a homeowner the difference between a restoration contractor and a public adjuster',
      poor: 'They do different things.',
      better: 'A restoration contractor does the physical work and documents damage; a public adjuster represents you on the claim itself. Some states license PAs separately, and the line matters legally.',
      best: 'These are two separately-licensed roles in most states. (1) Restoration Contractor — performs the physical roofing work, documents the damage, writes the scope and estimate, and discusses the physical scope with the carrier\'s adjuster. Compensated by the homeowner on contract for the work performed. (2) Public Adjuster — represents the homeowner on the insurance claim itself, negotiating coverage and settlement with the carrier. Separately licensed, paid a percentage of the settlement (typically 10-20%, state-capped), and bound by professional standards. In states that license PAs separately (most states do), a restoration contractor who acts as a PA without the license is in regulatory violation — the contract may be void, fines may apply, and the contractor\'s license may be at risk. The honest division: contractor for the work and the damage documentation; homeowner (or separately-retained PA or attorney) for the claim negotiation. Anyone telling you they\'ll "do both" without showing you their PA license number in your state is offering you a problem dressed up as a service.',
      why: 'Owners are sold "we handle everything" pitches that conceal a licensing problem. Naming the two roles, the licensing structure, the compensation models, and the "PA license number" diagnostic gives the homeowner a five-second test to spot the overreach before signing.',
      relatedTermKey: 'Restoration Contractor vs Public Adjuster',
    },
    {
      topic: 'Writing a defensible contract scope for a restoration contractor',
      poor: 'We will handle the claim and the work.',
      better: 'We will perform the roofing work and document damage; claim negotiation remains with you or a separately-retained licensed PA or attorney.',
      best: 'Scope of services — restoration contractor: [Contractor] will perform the agreed roofing scope, provide damage documentation to a defensible standard (slope-by-slope photo log, tactile-confirmed bruising counts, indirect-impact evidence, NOAA storm correlation, pre-storm condition documentation), generate the line-item estimate, and discuss the physical scope and any line-item supplements with the carrier\'s field and desk adjuster as the contractor on file. [Contractor] is not, and under [state]\'s public-adjuster licensing rules cannot be, the policyholder\'s claim representative. [Contractor] will not negotiate the claim itself, advise on coverage decisions, advocate for specific settlement amounts, or accept claim payment as final settlement on the policyholder\'s behalf. If the claim is contested at the coverage or settlement level beyond the line-item supplement stage, [Contractor] will refer the policyholder to either a licensed public adjuster (Florida, Texas, and most states maintain searchable PA license registries) or to a property-claim attorney. [Contractor] does not receive any referral fee or rebate from any PA or attorney. This scope is the licensing-line in [state]; it protects the policyholder and [Contractor] both. Signature confirms the policyholder has read and understood this scope, including the items the contractor will not perform.',
      why: 'Restoration contracts without an explicit licensing-line scope are routinely voided after the fact when the homeowner learns the contractor was acting outside their license. Naming the contractor\'s role, the carve-out, the referral path, and the no-referral-fee statement is what makes the contract enforceable through a state regulator audit.',
      relatedTermKey: 'Restoration Contractor vs Public Adjuster',
    },
    {
      topic: 'Senior-PM cover letter on a coordinated claim where a PA is engaged',
      poor: 'PA is on the claim.',
      better: 'The policyholder has retained [PA name, license #]; we are coordinating on physical scope documentation while the PA handles negotiation.',
      best: 'Re: Claim # [XXXX], Insured [Name], Property [address]. Per the [date] retainer agreement (attached, with sensitive financial terms redacted at the homeowner\'s discretion), the policyholder has retained [PA name, license # XXX, state of issuance] as their licensed public adjuster on this claim. [Contractor] is the restoration contractor on file and is responsible for: physical scope documentation, the line-item estimate, slope-by-slope inspection report, supplement requests on physical scope or quantity, and coordination with the PA on technical questions. [PA] is responsible for: claim negotiation, coverage advocacy, settlement discussion, and any communications with the carrier on the coverage decision itself. We have aligned that all formal carrier communications on claim valuation or coverage will be channeled through the PA; all physical-scope and supplement-detail communications will be channeled through [Contractor]. No referral relationship exists between [Contractor] and [PA]; the homeowner retained the PA independently of any [Contractor] recommendation. We request the carrier acknowledge these roles and route correspondence accordingly to avoid duplicate or contradictory communications.',
      why: 'PA-and-contractor coordinated claims often go off the rails when communications mix between the two roles. Naming each side\'s scope, the routing protocol, and the no-referral-relationship statement is what produces a clean three-party file the carrier can actually process without confusion.',
      relatedTermKey: 'Public Adjuster',
    },
    {
      topic: 'Field-report language declining to perform PA-style work that has been requested',
      poor: 'I can\'t do that.',
      better: 'That work would cross into public adjusting under [state] licensing rules; the right person for that is a licensed PA or an attorney, both of which we can refer.',
      best: 'Decline-and-refer language for PA-style requests: "We hear you that you\'d like one person handling everything on this claim, and we understand the appeal of that. Under [state] public-adjuster licensing law, claim negotiation, coverage advocacy, and acceptance of settlement on the policyholder\'s behalf are licensed activities — separate from contractor work — and we don\'t carry the PA license. The reason that line matters: a contract where a contractor performs PA-licensed activities without the license can be void under [state] law, which leaves the policyholder without enforceable rights against the contractor and exposes the contractor to fines and license action. Both of those are worse than the friction of having two professionals on the file. Our role is the work and the documentation, and we will be thorough on both. For the claim-negotiation side, here are three licensed public adjusters in [state] (license numbers and registry links attached) and two property-claim attorneys (state-bar links attached) you can vet independently. We do not receive referral fees from any of them. If you decide not to retain a PA or attorney, the alternative is for you, the policyholder, to negotiate the claim yourself — which is also valid and the historical norm — with our documentation supporting your case."',
      why: 'Declines that are abrupt damage the relationship and risk the homeowner finding someone willing to cross the line. Naming why the line exists, what the alternative is, the specific referral options, the no-referral-fee statement, and the "or do it yourself" path is the senior-CSR deliverable that keeps the relationship intact and the contractor on the right side of the licensing line.',
      relatedTermKey: 'Restoration Contractor vs Public Adjuster',
    },
  ],
};
