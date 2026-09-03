// content/writing/luxury-commerce-product-lab-bluestone.ts
//
// Converted from "Luxury Commercanchor
// given, so publishedAt uses that month. This is explicitly a case stue Product Lab: BlueStone Case Study —
// Product Management Portfolio" (Poras Vilas Wadhai, 2026). The source
// document notes its product teardown is "grounded in the live site
// structure (fetched Aug 2026)" — that's the most specific date dy
// / portfolio exercise benchmarked against a real company (BlueStone),
// not a claim of having worked there — carried through as-is. All ten
// primary interviews (INT-001 to INT-010) and 28 secondary sources
// (SEC-001 to SEC-028) are condensed rather than reproduced in full;
// nothing below states a figure the source doesn't.

import type { Artifact } from "@/lib/artifact-types";

export const luxuryCommerceProductLabBluestone: Artifact = {
  frontmatter: {
    slug: "luxury-commerce-product-lab-bluestone",
    type: "research",
    eyebrow: "Investigation",
    title: "Luxury Commerce Product Lab",
    subtitle:
      "BlueStone doesn't need six new features — it needs to promote three it already built, and fix the one real gap: buyback deduction terms live in the FAQ, not on the page where the decision actually happens.",
    status: "shipped",
    readTime: "20 min",
    publishedAt: "2026-08-01",
    summary:
      "A full product management case study on BlueStone's online jewellery commerce experience: a six-stage customer journey map synthesized from ten primary interviews, a competitive scorecard against CaratLane and Tanishq, a screen-by-screen teardown of the live purchase funnel, three fully-scoped PRDs (buyback transparency, a true cost calculator, and a proactive consultation trigger), and a KPI/experiment/AI-opportunity backlog grounded entirely in the research rather than generic growth-hacking ideas.",
    coverImage: {
      src: "/images/bluestone/cover.jpg",
      alt: "Luxury Commerce Product Lab cover, BlueStone case study",
    },
    metadata: [
      { label: "Category", value: "Product Management Case Study" },
      { label: "Company benchmarked", value: "BlueStone (vs. CaratLane, Tanishq)" },
      { label: "Method", value: "10 primary interviews · 28 secondary sources · live site teardown" },
      { label: "Deliverables", value: "Journey map · Scorecard · Roadmap · Teardown · 3 PRDs · KPIs" },
      { label: "Research window", value: "2026" },
      { label: "Read time", value: "20 min" },
    ],
  },

  blocks: [
    {
      type: "sectionHeading",
      id: "sec-journey",
      anchor: "customer-journey-map",
      index: "01",
      heading: "Customer Journey Map",
    },
    {
      type: "paragraph",
      id: "p-journey-1",
      text: "A six-stage journey synthesized across all ten primary interviews, capturing not just the stages themselves but the emotional posture at each one: Discovery (curious, skeptical) → Research (reading reviews, FAQs) → Comparison (overwhelmed by pricing) → Decision (reassured by trust signal) → Purchase (relief, mild excitement) → Post-purchase (satisfied, wants recognition).",
    },
    {
      type: "framework",
      id: "framework-journey",
      heading: "Six-stage journey, with dominant emotional state at each stage",
      nodes: [
        { id: "j-1", label: "1. Discovery", takeaway: "Curious, skeptical." },
        { id: "j-2", label: "2. Research", takeaway: "Reading reviews, FAQs." },
        { id: "j-3", label: "3. Comparison", takeaway: "Overwhelmed by pricing." },
        { id: "j-4", label: "4. Decision", takeaway: "Reassured by a trust signal." },
        { id: "j-5", label: "5. Purchase", takeaway: "Relief, mild excitement." },
        { id: "j-6", label: "6. Post-purchase", takeaway: "Satisfied, wants recognition." },
      ],
    },
    {
      type: "insightCallout",
      id: "callout-friction",
      text: "Four friction points recurred most often across the ten interviews: trust deficit, price opacity, delivery risk, and the buyback gap. Every PRD in this portfolio traces back to one of these four.",
    },

    {
      type: "sectionHeading",
      id: "sec-scorecard",
      anchor: "competitive-scorecard",
      index: "02",
      heading: "Competitive Scorecard",
    },
    {
      type: "paragraph",
      id: "p-scorecard-1",
      text: "Directional scoring of BlueStone against CaratLane and Tanishq across eight purchase-decision dimensions, based on the secondary research and interview evidence. BlueStone totals 21/40, behind CaratLane (27/40) and Tanishq (26/40).",
    },
    {
      type: "metrics",
      id: "metrics-scorecard",
      heading: "Scorecard by dimension (out of 5)",
      metrics: [
        { label: "Price transparency", value: "BlueStone 3 · CaratLane 3 · Tanishq 2" },
        { label: "Buyback and exchange clarity", value: "BlueStone 3 · CaratLane 2 · Tanishq 2", methodology: "BlueStone's relative strength here is directional, not a solved problem — no competitor scores above 3/5 on this dimension." },
        { label: "Delivery reliability", value: "BlueStone 2 · CaratLane 2 · Tanishq 3" },
        { label: "Trust and certification signal", value: "BlueStone 3 · CaratLane 4 · Tanishq 4" },
        { label: "Design relevance", value: "BlueStone 3 · CaratLane 4 · Tanishq 3" },
        { label: "Staff and customer service", value: "BlueStone 2 · CaratLane 4 · Tanishq 4", methodology: "BlueStone's weakest relative dimension — and the one the teardown finds is a promotion gap, not a build gap." },
        { label: "Return process ease", value: "BlueStone 2 · CaratLane 4 · Tanishq 2" },
        { label: "Online-to-offline integration", value: "BlueStone 3 · CaratLane 4 · Tanishq 4" },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-roadmap",
      anchor: "quarterly-roadmap",
      index: "03",
      heading: "Quarterly Roadmap",
    },
    {
      type: "paragraph",
      id: "p-roadmap-1",
      text: "Sequenced from the RICE, ICE, and Kano prioritization work behind this portfolio: trust hygiene ships first, expansion bets ship last.",
    },
    {
      type: "timeline",
      id: "timeline-roadmap",
      heading: "Quarterly sequencing",
      entries: [
        { date: "Q1", title: "Trust", description: "True cost calculator; buyback deduction table." },
        { date: "Q2", title: "Quick wins", description: "Delivery date guarantee; engraving preview." },
        { date: "Q3", title: "Retention", description: "Repeat buyer rewards; VIP consultation trigger." },
        { date: "Q4", title: "Expansion", description: "Gen-Z sub-brand; NRI ordering flow." },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-teardown",
      anchor: "product-teardown",
      index: "04",
      heading: "Product Teardown: BlueStone.com",
    },
    {
      type: "paragraph",
      id: "p-teardown-1",
      text: "Grounded in the live site structure (fetched August 2026) and app store listings, cross-referenced against the research findings above — a screen-by-screen walk of the actual purchase funnel, not a hypothetical one. Homepage navigation uses a mega-menu crossed by category, metal type, and audience, with persistent nav icons for Wishlist, Cart, Video Call Cart, Find a Store, and login. Product listing pages surface a prominent making-charge discount badge on every tile. The product detail page carries certification badges, a 30-day money-back guarantee, and free shipping.",
    },
    {
      type: "decision",
      id: "decision-teardown-videocart",
      assumed:
        "Opportunity #3 (a proactive white-glove consultation for high-value buyers) would require building new infrastructure from scratch.",
      found:
        "A dedicated 'Video Call Cart' already exists in primary navigation, with equal billing to the regular cart, alongside a customer care line and a 200+ store locator for in-person handoff. INT-010's ask — 'nobody offered to walk me through the diamond certification before I spent that much' — is a triggering problem, not a feature-existence problem.",
      changed:
        "Scoped the PRD around detecting buying-session signals (repeat views, time-on-page, cart abandonment above a price threshold) and proactively surfacing the existing video-call path, rather than designing a new consultation feature. This reframes the fix as a promotion/timing problem, a materially cheaper build than new infrastructure.",
    },
    {
      type: "decision",
      id: "decision-teardown-buyback",
      assumed:
        "Buyback and exchange deduction terms are reasonably disclosed, since BlueStone's own FAQ states returns are refunded at 90% of order value with deductions attributed to making charges and discounts.",
      found:
        "That 90%-refund logic lives only in the FAQ. A buyer deciding whether to purchase a specific ring has no way, on that ring's own page, to see what they'd get back if they later exchanged or returned that exact item — SEC-021 confirms this exact disclosure gap has reached formal consumer dispute forums at least once in the category.",
      changed:
        "This is the one finding in the teardown scoped as genuine new-build work rather than a promotion fix — it became the lead PRD (Itemized Buyback & Exchange Deduction Disclosure), moving the deduction breakdown from the FAQ onto the product page itself.",
    },
    {
      type: "decision",
      id: "decision-teardown-goldrate",
      assumed:
        "The 'Big Gold Upgrade' program's headline message — an instant 1% benefit over market gold rate on exchange — should reassure buyers about old-gold exchange value.",
      found:
        "'1% above market rate' answers a pricing question, but SEC-016, SEC-019, and SEC-021 show what buyers actually distrust is purity re-assessment risk — a different anxiety entirely. The messaging leads with the wrong number for the fear it's trying to resolve.",
      changed:
        "Flagged as a cheap content/positioning test rather than a product build: reposition the exchange program's messaging around purity-assessment trust, not just the rate percentage, and A/B test the two framings directly (Growth Experiment #5).",
    },
    {
      type: "evidence",
      id: "ev-teardown-plp",
      label: "PLP making-charge badge",
      value: "e.g. '50% off on Making Charges', '20% off on Making Charges', shown on every product tile",
      source: "Product Teardown, Section 2 (Category / Product Listing Pages)",
      interpretation:
        "A genuinely strong pattern — discount is surfaced before a user even opens a product — but it tells you the discount, not the resulting all-in cost, which is exactly the gap the True Cost Calculator PRD targets.",
    },
    {
      type: "insightCallout",
      id: "callout-teardown-summary",
      text: "Summary read: several opportunities in this portfolio — white-glove consultation, in-store handoff, loyalty savings — aren't green-field builds, they're already-built features that are under-promoted or mistimed. Only the buyback/exchange transparency gap is a genuine build gap. That's a sharper, more defensible pitch than 'build these six things': it's 'here's what's already there but hidden, and here's the one real gap.'",
    },

    {
      type: "sectionHeading",
      id: "sec-prd1",
      anchor: "prd-buyback-transparency",
      index: "05",
      heading: "PRD 1: Buyback and Exchange Transparency",
    },
    {
      type: "paragraph",
      id: "p-prd1-1",
      text: "Buyers who purchase gold and diamond jewellery online have no way to know, before they buy, what they'll actually receive if they later exchange or sell the piece back. Deduction terms are disclosed in general policy language, not itemized per product — producing two failure modes: pre-purchase hesitation among high-value and investment-motivated buyers who can't model downside risk, and post-purchase trust rupture when buyers who do purchase discover the actual deduction is worse than assumed. The competitive scorecard found no competitor scores above 3/5 on this dimension — a category-wide white space, not a catch-up feature.",
    },
    {
      type: "evidence",
      id: "ev-prd1-recovery",
      label: "Category-wide resale recovery rate",
      value: "~60-75% of notional value, with no advance warning",
      source: "SEC-019 (Business Standard), SEC-020 (Angel One)",
      interpretation:
        "Independent financial press confirms buyers typically recover only this share of value after making-charge loss, purity deductions, and GST — direct third-party validation of INT-005's top pain point at a market level, not just one brand's.",
    },
    {
      type: "evidence",
      id: "ev-prd1-dispute",
      label: "Formal consumer dispute precedent",
      value: "Consumer disputes commission ruled against a major jeweller (PNG Jewellers) for undisclosed buyback terms",
      source: "SEC-021 (Moneylife)",
      interpretation:
        "Signals the cost of getting this wrong is not merely reputational — the issue has reached formal legal resolution at least once in the category.",
    },
    {
      type: "quote",
      id: "quote-prd1-int005",
      quote:
        "I wanted a platform more trustworthy than some random online seller for this kind of money.",
      attribution: "INT-005, Investment Banker, Mumbai",
    },
    {
      type: "metrics",
      id: "metrics-prd1-success",
      heading: "Success metrics",
      metrics: [
        { label: "Disclosure module view rate (>Rs. 40,000 PDPs)", value: "Before add-to-cart", methodology: "Leading indicator of whether the feature reaches the buyers who need it." },
        { label: "Post-purchase 'exchange value dispute' complaints", value: "Tagged in support tickets, tracked QoQ", methodology: "Direct measure of whether disclosure reduces the SEC-011/SEC-016 complaint pattern." },
        { label: "Repeat purchase rate", value: "Viewed disclosure vs. did not", methodology: "Tests whether transparency itself drives loyalty (INT-009's core complaint)." },
        { label: "NPS/CSAT delta", value: "On 'trust' and 'transparency' sub-questions", methodology: "Ties back to the journey map's trust-deficit theme." },
      ],
    },
    {
      type: "paragraph",
      id: "p-prd1-scope",
      text: "MVP scope is a product-page module disclosing an estimated buyback percentage range (not a false-precision single number) with a plain-language breakdown of deduction components, plus the same disclosure retrofitted into order history for already-purchased items. Explicitly out of scope for v1: any change to the actual deduction economics, and diamond/gemstone categories (recommended as a fast-follow once gold jewellery's simpler deduction logic is proven). Recommended rollout: gold jewellery first, diamond/gemstone in Phase 2, then feeding hesitant viewers into the consultation trigger (PRD 3) in Phase 3.",
    },

    {
      type: "sectionHeading",
      id: "sec-prd2",
      anchor: "prd-true-cost-calculator",
      index: "06",
      heading: "PRD 2: True Cost Calculator",
    },
    {
      type: "paragraph",
      id: "p-prd2-1",
      text: "Product listing pages already surface a making-charge discount badge, but the badge communicates a discount, not a final price — buyers see momentum toward a deal without ever seeing the number that determines whether it's actually a good one. This is the single most-cited complaint pattern across the research, and the highest-reach opportunity in the RICE analysis.",
    },
    {
      type: "evidence",
      id: "ev-prd2-tanishq",
      label: "Making-charge complaint, competitor evidence",
      value: "Reviewers explicitly call making charges 'excessively high' relative to discounts offered",
      source: "SEC-013 (Google Play, Tanishq)",
      interpretation:
        "Confirms this is a category-wide pattern, not BlueStone-specific — echoed independently by INT-001 and INT-008.",
    },
    {
      type: "quote",
      id: "quote-prd2-int008",
      quote:
        "I didn't even know what karat or making charges meant when I started.",
      attribution: "INT-008, first-time buyer, Kolkata",
    },
    {
      type: "paragraph",
      id: "p-prd2-scope",
      text: "MVP scope: an expandable price-breakdown module on the PDP (metal value at live gold rate + making charge, Rs. and % pre/post-discount + stone/diamond charge + GST = total), and on the PLP, retaining the existing making-charge badge but adding total price as the dominant number rather than base price. A two-item wishlist comparison view is scoped as should-have. Out of scope: a real-time animated gold-rate ticker — a static 'as of [date/time]' reference is sufficient and materially cheaper to build.",
    },
    {
      type: "metrics",
      id: "metrics-prd2-success",
      heading: "Success metrics",
      metrics: [
        { label: "PDP price-breakdown expansion rate", value: "Direct engagement signal" },
        { label: "Cart abandonment at comparison stage", value: "Before vs. after launch", methodology: "Tests whether transparency reduces the journey map's 'Comparison' stage friction." },
        { label: "'Pricing confusion' support tickets", value: "Should decrease if the tool is working" },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-prd3",
      anchor: "prd-consultation-trigger",
      index: "07",
      heading: "PRD 3: Proactive High-Value Consultation Trigger",
    },
    {
      type: "paragraph",
      id: "p-prd3-1",
      text: "BlueStone already has the infrastructure for human-assisted, high-touch buying — a dedicated Video Call Cart in primary navigation, a customer care line, and 200+ physical stores. What's missing is a trigger: nothing in the current experience proactively offers this path to a buyer showing signals of needing it. This is a discovery and timing problem, not a feature-existence problem, and therefore a lower-cost path to impact than building new consultation infrastructure.",
    },
    {
      type: "evidence",
      id: "ev-prd3-scorecard",
      label: "Staff/customer service scorecard gap",
      value: "BlueStone 2/5 vs. CaratLane and Tanishq both at 4/5",
      source: "Competitive Scorecard, Section 2",
      interpretation:
        "The strongest positive sentiment in the entire secondary research set (SEC-008, SEC-015) is staff-driven service recovery — the exact thing BlueStone already has the tooling for but isn't surfacing proactively.",
    },
    {
      type: "quote",
      id: "quote-prd3-int010",
      quote:
        "Is the certification IGI or GIA equivalent, or some lesser in-house standard? That mattered a lot to me.",
      attribution: "INT-010, Management Consultant, Pune",
    },
    {
      type: "paragraph",
      id: "p-prd3-scope",
      text: "MVP scope: trigger on product view count ≥2 sessions OR time-on-page ≥90 seconds on items above Rs. 50,000 (aligned to where interviews show hesitation concentrates); a single, dismissible, low-pressure prompt (not a blocking modal) linking directly into the existing video-call cart flow; capped at one prompt per session to avoid the hard-sell pattern buyers explicitly want to avoid. Cart-abandonment follow-up is scoped should-have. Out of scope: any change to in-store staff workflow — this is purely a digital trigger into an existing path.",
    },
    {
      type: "metrics",
      id: "metrics-prd3-success",
      heading: "Success metrics",
      metrics: [
        { label: "Video-call cart initiation rate", value: "Triggered vs. non-triggered high-value sessions" },
        { label: "Consultation-assisted conversion rate", value: "Vs. non-assisted, on high-value items" },
        { label: "Prompt dismissal rate", value: "High dismissal signals trigger threshold or tone needs adjustment" },
      ],
    },
    {
      type: "insightCallout",
      id: "callout-prd3-risk",
      text: "Poorly tuned triggers risk feeling surveillance-like — 'why is this popping up, were they watching me shop?' Copy and timing need to feel helpful, not tracked, and the PRD recommends qualitative testing of exact wording before wide rollout.",
    },

    {
      type: "sectionHeading",
      id: "sec-kpis",
      anchor: "kpis-experiments-ai",
      index: "08",
      heading: "KPIs, Growth Experiments and AI Opportunities",
    },
    {
      type: "paragraph",
      id: "p-kpis-1",
      text: "Kept to one solid version of each rather than padded to a longer plan — quality over count, consistent with how the rest of this portfolio was built.",
    },
    {
      type: "metrics",
      id: "metrics-kpis",
      heading: "Selected marketplace KPIs",
      metrics: [
        { label: "Conversion rate (visit → purchase)", value: "Overall funnel health" },
        { label: "Cart abandonment rate, by price tier", value: "Whether high-value carts abandon differently", methodology: "Ties to the Consultation Trigger PRD." },
        { label: "Price-breakdown expansion rate on PDP", value: "Direct adoption signal", methodology: "Ties to the True Cost Calculator PRD." },
        { label: "Post-exchange complaint rate ('value dispute')", value: "Direct measure of buyback transparency success", methodology: "Ties to the Buyback PRD." },
        { label: "Store-visit rate after online browsing", value: "Omnichannel health", methodology: "Given BlueStone's 200+ store network." },
      ],
    },
    {
      type: "paragraph",
      id: "p-experiments",
      text: "Eight growth experiments were scoped, each tied to a specific opportunity and research finding rather than a generic growth-hacking idea — for example, A/B testing the full price-breakdown module against the current badge-only PLP experience on high-value items (primary metric: checkout-start rate), or piloting a simple repeat-buyer recognition mechanic against a control cohort to test lift in 12-month repeat purchase rate.",
    },
    {
      type: "insightCallout",
      id: "callout-ai",
      text: "AI opportunities were grounded in what the research actually surfaced, not added for its own sake — each solves a specific, evidenced problem. Examples: an AI-assisted purity/value estimator for old-gold exchange, targeting the buyback trust gap directly; conversational pre-consultation triage that surfaces what a buyer actually needs help with before routing them to a human consultant. Deliberately excluded: a generic 'AI stylist' or broad recommendation engine — neither maps to a specific pain point in the interviews or secondary research, which the portfolio names explicitly as the trap of building AI without an evidenced problem.",
    },

    {
      type: "sectionHeading",
      id: "sec-appendix-a",
      anchor: "appendix-a-interviews",
      index: "09",
      heading: "Appendix A: Primary Interview Summaries",
    },
    {
      type: "paragraph",
      id: "p-appendix-a-1",
      text: "Ten primary interviews, each capturing a job-to-be-done, primary motivation, top pain point (with severity rated out of 5), top need, and decision-driver ranking. Personas span self-purchase, gifting, wedding shopping, trend/fashion buying, investment-motivated gold buying, NRI gifting, men's jewellery, first-time budget-conscious buying, repeat/festive buying, and high-value luxury buying.",
    },
    {
      type: "metrics",
      id: "metrics-interviews",
      heading: "Interview roster and top pain point",
      metrics: [
        { label: "INT-001 · Marketing Manager, 29, Chennai", value: "Making charges not comparable across sites (severity 4/5)" },
        { label: "INT-002 · Software Engineer, 34, Bengaluru", value: "No discreet way to determine partner's ring/bangle size (severity 4/5)" },
        { label: "INT-003 · Homemaker, 52, Coimbatore", value: "Deep distrust of online purchase for high-value wedding jewelry (severity 5/5)" },
        { label: "INT-004 · HR Executive, 26, Hyderabad", value: "Brand perceived as formal/bridal, not everyday trendy (severity 3/5)" },
        { label: "INT-005 · Investment Banker, 31, Mumbai", value: "Buyback deduction terms not clearly quantified upfront (severity 4/5)" },
        { label: "INT-006 · Finance Manager, 45, Dubai (orig. Kochi)", value: "Uncertainty about NRI/cross-border shipping eligibility (severity 4/5)" },
        { label: "INT-007 · Business Owner, 38, Delhi", value: "Uncertainty whether men's jewelry is taken seriously (severity 3/5)" },
        { label: "INT-008 · Junior Analyst, 24, Kolkata", value: "Jewelry terminology unfamiliar and intimidating (severity 4/5)" },
        { label: "INT-009 · Doctor, 47, Hyderabad", value: "No loyalty recognition despite 3rd repeat purchase (severity 3/5)" },
        { label: "INT-010 · Management Consultant, 33, Pune", value: "Uncertainty over whether certification matches international standards (severity 4/5)" },
      ],
    },
    {
      type: "quote",
      id: "quote-appendix-int003",
      quote:
        "Is this a real company or some online scam? For this much money I need to see it with my own eyes.",
      attribution: "INT-003, Homemaker, Coimbatore",
    },
    {
      type: "quote",
      id: "quote-appendix-int006",
      quote:
        "I wasn't even sure if I could order from Dubai and have it shipped to my mother.",
      attribution: "INT-006, Finance Manager, Dubai (originally Kochi)",
    },
    {
      type: "quote",
      id: "quote-appendix-int009",
      quote:
        "I didn't need to discover anything new, I just opened the app out of habit.",
      attribution: "INT-009, Doctor, Hyderabad",
    },

    {
      type: "sectionHeading",
      id: "sec-appendix-b",
      anchor: "appendix-b-secondary-research",
      index: "10",
      heading: "Appendix B: Secondary Research Summary",
    },
    {
      type: "paragraph",
      id: "p-appendix-b-1",
      text: "28 independently sourced data points across MouthShut, Trustpilot, Quora, Sitejabber, ConsumerComplaints.in, Google Play, and financial press, cross-referenced against the primary interview findings. BlueStone holds a 3.31/5 aggregate across 4,500+ MouthShut votes, with recurring commentary clustering around making-charge transparency, delivery timing, and customer service responsiveness rather than product quality itself.",
    },
    {
      type: "evidence",
      id: "ev-sec-refund-credit",
      label: "Refund method disclosure gap",
      value: "A buyer discovered 10 months after a return that their refund had been issued as non-cash store credit, not money back",
      source: "SEC-005 (Sitejabber, BlueStone)",
      interpretation: "A disclosure gap at the point of refund itself, not a broken promise — support reportedly did not respond when raised.",
    },
    {
      type: "evidence",
      id: "ev-sec-caratlane-exchange",
      label: "Exchange value vs. promise at sale",
      value: "A buyer was promised exchange 'at prevailing market rates' at time of sale, then offered a materially lower valuation at actual exchange",
      source: "SEC-011 (Trustpilot, CaratLane)",
      interpretation: "The same buyback-clarity gap flagged in INT-005, observed independently on a direct competitor.",
    },
    {
      type: "evidence",
      id: "ev-sec-tanishq-savings",
      label: "Monthly gold savings scheme as trust anchor",
      value: "Reviews specifically praise Tanishq's scheme as a low-friction way to build trust and habitual purchasing",
      source: "SEC-027 (Trustpilot, Tanishq)",
      interpretation: "A concrete existing loyalty mechanic worth benchmarking against INT-009's request for loyalty recognition — and against BlueStone's own comparable 'Gold Mine' 10+1 scheme found in the teardown.",
    },
    {
      type: "evidence",
      id: "ev-sec-worldgold",
      label: "Trust as a category-wide barrier to purchase at all",
      value: "Lack of trust is among the most commonly cited reasons Indians give for not buying gold jewellery; only ~35% of India's gold retail was 'organized' as of 2021",
      source: "SEC-023 (Statista / World Gold Council)",
      interpretation: "The macro version of INT-003's individual distrust story — this is bigger than any one brand's reputation.",
    },
    {
      type: "paragraph",
      id: "p-appendix-b-themes",
      text: "The appendix closes by mapping six recurring themes back to both the secondary source IDs and the matching primary interviews: making-charge/true-cost transparency (SEC-001, SEC-006, SEC-013 ↔ INT-001, INT-008); buyback/exchange deduction opacity (SEC-007, SEC-011, SEC-016, SEC-019–021 ↔ INT-005, INT-009); delivery reliability for occasion-based purchases (SEC-003, SEC-010 ↔ INT-002, INT-006); product durability and trust in what's delivered (SEC-002, SEC-005, SEC-006, SEC-009, SEC-018, SEC-025 ↔ INT-001, INT-003, INT-007); high-touch staff service as a loyalty driver (SEC-008, SEC-015, SEC-027 ↔ INT-003, INT-009, INT-010); and category-wide distrust of online gold purchase (SEC-022, SEC-023, SEC-028 ↔ INT-003). Each PRD in this portfolio sits on top of at least one of these triangulated theme clusters, not a single interview's opinion.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "This document is a product management portfolio case study benchmarked against BlueStone's live site and public reviews as of 2026. It is an independent research and design exercise, not an internal BlueStone artifact. Full source URLs and methodology notes for the secondary research are referenced as being available in the original research spreadsheet, not reproduced here.",
    },
  ],

  related: [
    {
      slug: "meesho-business-strategy-memo",
      type: "research",
      title: "Meesho: Marketplace Growth, Seller Quality & Monetization",
      reason: "Next dispatch",
    },
    {
      slug: "product-teardown-swiggy",
      type: "research",
      title: "Product Teardown: Swiggy",
      reason: "Related dispatch",
    },
  ],
};