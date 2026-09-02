// content/writing/nourish-snacks-series-a-ic-memo.ts
//
// Converted from Kairon Capital's "Investment Committee Memo: Nourish
// Snacks Pvt. Ltd. — Series A Investment Evaluation" (Poras Vilas Wadhai,
// IIT Madras, dated June 2026). Cover page notes financial data is per a
// case document and explicitly "fictional... for educational purposes
// only" — carried through here as-is, not represented as a real deal.
// All figures below are pulled directly from the memo and its four
// appendices. Two internal inconsistencies in the source are flagged
// inline rather than silently resolved: (1) the "Expected MOIC by
// Scenario" bar chart shows Base 4x / Bull 9x, while the underlying VC
// Method table shows Base 3.95x-4x / Bull 9.0x at the 22.9% pre-dilution
// stake — these are close but not identical, both are shown; (2) the
// donut chart on the cover page labels one segment "Market 30%" where
// the Section 3 channel table instead itemizes Amazon/Flipkart 22% +
// Modern Trade 8% — the more granular Section 3 breakdown is used
// throughout for consistency.

import type { Artifact } from "@/lib/artifact-types";

export const nourishSnacksSeriesAIcMemo: Artifact = {
  frontmatter: {
    slug: "nourish-snacks-series-a-ic-memo",
    type: "research",
    eyebrow: "Dispatch",
    title: "Nourish Snacks Pvt. Ltd. — Series A Investment Evaluation",
    subtitle:
      "A conditional buy at Rs 135 Cr, not the founder's Rs 160 Cr ask — because the entire margin thesis rests on an unproven 7-percentage-point own-label bridge.",
    status: "shipped",
    readTime: "16 min",
    publishedAt: "2026-06-01",
    summary:
      "Investment Committee memo recommending a CONDITIONAL BUY into Nourish Snacks' Series A: Rs 40 Cr at Rs 135 Cr pre-money (22.9% stake), structured across three milestone-gated tranches, against a founder ask of Rs 160 Cr. The memo's central finding is a 7-percentage-point gap between management's claimed FY28 blended gross margin (61%) and what the channel mix actually supports without own-label sourcing (54%) — a gap the entire profitability timeline depends on closing. Expected return: ~4x base case, 8-9x bull case, by FY30 exit.",
    metadata: [
      { label: "Category", value: "Venture Capital — Investment Committee Memo" },
      { label: "Recommendation", value: "Conditional Buy" },
      { label: "Deal Terms", value: "Rs 40 Cr at Rs 135 Cr pre-money (22.9%)" },
      { label: "Sector", value: "D2C / Functional Snacking (FMCG)" },
      { label: "Prepared by", value: "Poras Vilas Wadhai, IIT Madras" },
      { label: "Coverage date", value: "June 2026" },
      { label: "Read time", value: "16 min" },
    ],
  },

  blocks: [
    {
      type: "sectionHeading",
      id: "sec-summary",
      anchor: "executive-summary",
      index: "01",
      heading: "Executive Summary and Investment Verdict",
    },
    {
      type: "paragraph",
      id: "p-summary-1",
      text: "Nourish is a premium functional snacking brand founded in 2021, built around clean-label, traditional Indian snacks reformulated for modern consumers — no refined sugar, clean-label ingredients, traditional Indian formats, science-backed formulations. The founding team pairs a brand builder (Unilever background) with a food scientist (IIT-B). The memo's headline verdict is CONDITIONAL BUY: Rs 40 Cr at Rs 135 Cr pre-money for a 22.9% stake, released across a three-tranche structure rather than as a single close.",
    },
    {
      type: "evidence",
      id: "ev-verdict",
      label: "Deal structure",
      value: "Rs 40 Cr @ Rs 135 Cr pre-money · 22.9% dilution · 3-tranche release",
      source: "Section 1, Executive Summary and Investment Verdict",
      interpretation:
        "Rs 25 Cr releases at close; the remaining Rs 15 Cr is gated behind specific operating milestones rather than time.",
    },
    {
      type: "metrics",
      id: "metrics-tranches",
      heading: "Tranche structure",
      metrics: [
        {
          label: "Tranche 1 — Rs 25 Cr at close",
          value: "Condition: Gross margin ≥58%",
        },
        {
          label: "Tranche 2 — Rs 10 Cr at Month 12",
          value: "Conditions: M12 retention ≥25% · QComm ≤45% of total GMV · VP Marketing hired",
        },
        {
          label: "Tranche 3 — Rs 5 Cr at Month 18",
          value: "Conditions: EBITDA margin ≥0% · own-label pilot commenced · Regulatory Head hired",
        },
      ],
    },
    {
      type: "insightCallout",
      id: "callout-thesis",
      text: "With a 5.8-month payback period, Rs 40 Cr is ample capital. The real challenge isn't funding the business — it's winning category share before ITC (via Yoga Bar) scales its distribution muscle into the same shelf space.",
    },
    {
      type: "paragraph",
      id: "p-summary-conditions",
      text: "The recommendation is conditional on five terms: entry at Rs 140 Cr rather than the founder's Rs 160 Cr ask (the memo's own final recommendation later tightens this further, to Rs 135 Cr); the milestone-gated Rs 25/10/5 Cr tranche structure; hiring a VP Marketing and a Regulatory Head within 60 days; a QComm GMV covenant that channel mix never exceed 45% of total GMV; and reporting subscription revenue as a standalone KPI from Day 1.",
    },
    {
      type: "paragraph",
      id: "p-summary-pass",
      text: "Four conditions would flip this recommendation to PASS: QComm Month-12 retention falling below 12% or LTV/CAC dropping below 3x (unit economics break); no own-label partner identified within 90 days (margin thesis weakens, FY27 breakeven slips); marketing spend exceeding 34% of revenue (the bear case becomes the base case and a bridge round is required); or a VP Marketing hire delayed beyond 60 days (growth efficiency deteriorates, scaling capability is called into question).",
    },

    {
      type: "sectionHeading",
      id: "sec-snapshot",
      anchor: "company-snapshot",
      index: "02",
      heading: "Company Snapshot",
    },
    {
      type: "paragraph",
      id: "p-snapshot-1",
      text: "Nourish sells across four channels: D2C website, quick commerce, Amazon/Flipkart, and corporate gifting, targeting urban Indian health-conscious consumers aged 24-38. As of FY25E it runs 18 active SKUs across 25+ cities with 68 employees.",
    },
    {
      type: "metrics",
      id: "metrics-fy25",
      heading: "Key metrics, FY25E",
      metrics: [
        { label: "GMV", value: "Rs 11.8 Cr" },
        { label: "Gross Margin", value: "58%" },
        { label: "Contribution Margin", value: "38% (post-fulfilment blended)" },
        { label: "LTV / CAC", value: "3.6x" },
        { label: "Payback Period", value: "5.8 months" },
        { label: "Month-12 Retention", value: "22% (industry standard: 15-30%)" },
        { label: "Average Order Value", value: "Rs 485 (benchmark: Rs 350-600)" },
        { label: "Active SKUs / Cities", value: "18 SKUs / 25+ cities" },
      ],
    },
    {
      type: "evidence",
      id: "ev-channel-mix",
      label: "FY25 channel mix",
      value: "D2C 38% · QComm 29% · Amazon/Flipkart 22% · Modern Trade 8% · Corporate Gifting 3%",
      source: "Section 3, Financial Historical Performance",
      interpretation:
        "D2C is both the largest channel and the highest-margin one (72% gross margin), which is what makes the QComm mix shift a margin story, not just a growth story.",
    },
    {
      type: "paragraph",
      id: "p-snapshot-growth",
      text: "Growth highlights cited: +340% YoY growth in quick commerce, the fastest-scaling channel; 72% gross margin on D2C; and 41% Month-3 retention, with the subscription business described as scaling rapidly and protein snacks as the top-performing SKU category.",
    },

    {
      type: "sectionHeading",
      id: "sec-market",
      anchor: "market-analysis",
      index: "03",
      heading: "Market Analysis",
    },
    {
      type: "paragraph",
      id: "p-market-1",
      text: "The memo builds TAM two ways and reconciles them. Bottoms-up: 97M urban households with income >Rs 50K/month, filtered to 63M health-aware households, spending an estimated Rs 1,895/household/year on health snacks, yields a TAM of Rs 11,939 Cr. Top-down: a Rs 5,500 Cr FY24 functional snacks market compounding at 32% CAGR reaches Rs 12,650 Cr by FY27, with D2C+QComm's addressable share of that category rising from 30% to 45%.",
    },
    {
      type: "evidence",
      id: "ev-tam-reconciliation",
      label: "Reconciled TAM for Nourish's addressable channel model",
      value: "Rs 14,000-16,000 Cr by FY29",
      source: "Section 2, TAM Reconciliation panel",
      interpretation:
        "Bottoms-up (Rs 11,939 Cr) captures direct household wallet spend among digitally reachable consumers; top-down (Rs 22,000 Cr) includes general trade and institutional channels outside Nourish's actual distribution reach. The reconciled figure supports Rs 1,000 Cr+ category scale — breaking the current Rs 500 Cr D2C ceiling is described as the real challenge.",
    },
    {
      type: "metrics",
      id: "metrics-tam-sam-som",
      heading: "TAM / SAM / SOM funnel, FY30",
      metrics: [
        { label: "TAM", value: "Rs 22,000 Cr", methodology: "All packaged health foods, top-down basis." },
        { label: "SAM", value: "Rs 10,560 Cr", methodology: "D2C and QComm reach, at 45% category share by FY29." },
        { label: "SOM", value: "Rs 475 Cr", methodology: "Nourish's targeted share, 4.5% of FY29 SAM." },
      ],
    },
    {
      type: "evidence",
      id: "ev-sensitivity-tam",
      label: "TAM/SAM sensitivity",
      value: "TAM Rs 9,200-16,100 Cr; SAM Rs 7,000-14,400 Cr across low/base/high wellness-share and D2C-penetration assumptions",
      source: "Section 2, Sensitivity Analysis table",
      interpretation:
        "Base case assumes 9% wellness share and 30% D2C penetration; the range brackets these against 8%/25% (low) and 11%/40% (high) scenarios.",
    },
    {
      type: "paragraph",
      id: "p-market-definitional",
      text: "The category is bounded by a three-part definitional test — snack occasion, health claim present, and food format — used to include protein chikki and laddoo, clean-label makhana, trail mixes and seeds, protein bars and puffs, no-added-sugar snacks, and kids functional snacks, while excluding regular chips and namkeen, protein powders, energy drinks, traditional mithai, breakfast cereals, and supplements.",
    },
    {
      type: "insightCallout",
      id: "callout-market",
      text: "Growth drivers: health-conscious snack share of the packaged food category rising from 8-10% to 14-18%; quick-commerce city coverage expanding from 100 to 200+ cities; urban household income growth adding roughly 4% to TAM; and rising label literacy as consumers read ingredients more closely.",
    },

    {
      type: "sectionHeading",
      id: "sec-financials",
      anchor: "financial-performance",
      index: "04",
      heading: "Financial Performance and the Margin Bridge",
    },
    {
      type: "paragraph",
      id: "p-financials-1",
      text: "GMV grew from Rs 28L (FY22) to Rs 1,180L / Rs 11.8 Cr (FY25E), alongside a 62-percentage-point EBITDA margin improvement, from -75% in FY22 to -13% in FY25E. Gross margin has expanded steadily since FY22 to a 58% blend. Against Rs 4.5 Cr raised to date, the company has burned Rs 3 Cr — read by the memo as evidence of reasonable capital efficiency. Marketing spend sits at 39% of revenue, flagged as the key lever that must drop to 28-30% for the margin thesis to hold.",
    },
    {
      type: "evidence",
      id: "ev-channel-margin",
      label: "Channel-weighted blended gross margin, FY25E",
      value: "57.1% (analyst reconstruction) vs. 58% (management's stated figure)",
      source: "Appendix B1, Channel-Weighted Gross Margin — Full Workings",
      interpretation:
        "Built bottom-up from channel share × channel margin (D2C 38%/72%, QComm 29%/44%, Amazon 22%/51%, Modern Trade 8%/48%, Gifting 3%/65%). The reconstruction validates management's stated 58% figure to within rounding — the FY25 model is internally consistent.",
    },
    {
      type: "decision",
      id: "decision-margin-bridge",
      assumed:
        "Management projects a 61% blended gross margin by FY28, even as the QComm mix (the lowest-margin channel at 44%) grows from 29% to 45% of revenue.",
      found:
        "Reconstructing the FY28 channel mix mechanically, without any own-label sourcing improvement, produces a blended margin of only ~54% — a 7-percentage-point gap versus management's claim. Closing that gap requires own-label sourcing to deliver roughly +6-10pp of margin uplift across channels, an assumption the memo's own confidence registry rates as its single lowest-confidence, most load-bearing input: 'the entire margin expansion thesis' depends on it.",
      changed:
        "Own-label sourcing progress is written directly into the deal structure rather than taken on faith: Tranche 1 requires gross margin ≥58% at close, and Tranche 3 (Month 18) requires an own-label pilot to have commenced. The memo flags this explicitly as the single most important number in the entire investment thesis — failure pushes profitability to FY29 and necessitates a bridge round.",
    },
    {
      type: "evidence",
      id: "ev-management-mix",
      label: "Projected FY28 channel mix (management assumption)",
      value: "QComm 45% · D2C 28% · Amazon 17% · Modern Trade 7% · Gifting 3%",
      source: "Section 3, Mix FY28 panel",
      interpretation:
        "This is the mix shift that drives the margin-bridge question above — QComm becomes the largest single channel, at less than two-thirds of D2C's gross margin.",
    },

    {
      type: "sectionHeading",
      id: "sec-scenarios",
      anchor: "scenario-model",
      index: "05",
      heading: "Three-Scenario Financial Model and Stress Test",
    },
    {
      type: "metrics",
      id: "metrics-scenarios",
      heading: "Bear / Base / Bull assumptions, FY29",
      metrics: [
        { label: "FY29 GMV", value: "Bear Rs 53.5 Cr · Base Rs 122 Cr · Bull Rs 174 Cr" },
        { label: "GMV CAGR FY25-29", value: "Bear ~35% · Base ~60% · Bull ~75%" },
        { label: "Month-12 Retention", value: "Bear 15% · Base 22% · Bull 30%" },
        { label: "Marketing / Revenue", value: "Bear 38% · Base 30% · Bull 25%" },
        { label: "Own-label achieved?", value: "Bear No · Base Partial (6pp) · Bull Full (10pp)" },
        { label: "EBITDA Breakeven Year", value: "Bear FY29 · Base FY27 · Bull FY26" },
        { label: "Bridge Round Risk", value: "Bear Medium · Base Low · Bull None" },
      ],
    },
    {
      type: "evidence",
      id: "ev-moic",
      label: "Expected return by scenario, FY29-30 exit",
      value: "Bear ~1.5x · Base ~4x (3.95-4x at 22.9% pre-dilution stake) · Bull ~9x (9.0x pre-dilution)",
      source: "Section 4, Expected MOIC by Scenario chart and VC Method table",
      interpretation:
        "Base case assumes a 5x revenue exit multiple (conservative, trade-sale range); bull case assumes 8x (growth-stage D2C range). At a 10x industry-standard Series A target, the memo concludes Nourish would need FY30 net revenue of Rs 218-349 Cr — the bull case (Rs 197 Cr) falls slightly short even of the lower bound, so this is framed explicitly as a 4-9x MOIC investment, not a 10x+ one.",
    },
    {
      type: "decision",
      id: "decision-runway",
      assumed:
        "A downside scenario — revenue tracking meaningfully below plan — could threaten Nourish's runway and force an early, dilutive bridge round.",
      found:
        "Modeling a 40%-below-plan stress case across FY26-FY29, cumulative burn to EBITDA breakeven totals only Rs 3.0 Cr (vs. Rs 1.8 Cr in the base case and Rs 2.4 Cr in the bear case). Breakeven merely shifts one year later, from FY27 to FY28. Even in this stress scenario, Rs 40 Cr leaves roughly Rs 37 Cr of capital remaining at breakeven.",
      changed:
        "The memo reframes the real risk: solvency is not the constraint in any modeled scenario. The open question is a governance one — whether that ~Rs 37 Cr gets allocated to winning category share, rather than wasted on inefficient CAC — not a capital-adequacy or modeling question.",
    },

    {
      type: "sectionHeading",
      id: "sec-competitive",
      anchor: "competitive-landscape",
      index: "06",
      heading: "Competitive Landscape and Brand Moat",
    },
    {
      type: "paragraph",
      id: "p-competitive-1",
      text: "Nourish's FY24 GMV of Rs 11.8 Cr sits well behind The Whole Truth (~Rs 200 Cr), Happilo (~Rs 283 Cr), Oziva (~Rs 150 Cr), and Yoga Bar (~Rs 68 Cr, now ITC-owned). The competitive set bifurcates into two valuation tiers: FMCG/general-trade-heavy players (Happilo, RiteBite) trading at 2.4-6.5x revenue on acquisition, versus digital-first D2C players (The Whole Truth, Nourish) commanding growth-stage multiples of 13-17x. Which bucket Nourish exits in — a trade sale at FMCG multiples versus a Series C secondary at growth-stage multiples — is described as the most important strategic variable for exit planning, and depends on keeping D2C + subscription GMV share above 50% of total revenue.",
    },
    {
      type: "metrics",
      id: "metrics-moat",
      heading: "Brand moat scorecard (out of 10)",
      metrics: [
        { label: "Indian Heritage", value: "8.5", methodology: "Traditional Indian formats + founder story; hard to replicate authentically." },
        { label: "Data / Cohort", value: "8", methodology: "38% D2C mix, 41% Month-3 retention, subscription base; strong if D2C stays above 35%." },
        { label: "Scientific Formulation", value: "8", methodology: "IIT Bombay PhD-led R&D, clean-label formulations; replicable in 6-12 months." },
        { label: "Brand / Narrative", value: "7", methodology: "72% D2C gross margin shows real pricing power; weakens with scale." },
        { label: "Community", value: "6", methodology: "Instagram-led early following; low switching costs." },
        { label: "Distribution", value: "3", methodology: "QComm and marketplaces are rented shelves; platform dependency risk." },
        { label: "Supply Chain", value: "2", methodology: "Contract manufacturing today; a potential future moat, not a current one." },
      ],
    },
    {
      type: "evidence",
      id: "ev-replication-cost",
      label: "Cost for a competitor to replicate Nourish credibly",
      value: "Rs 55-85 Cr, 3-4 years minimum",
      source: "Section 6, Cost to Replicate table",
      interpretation:
        "Breaks down as: product R&D Rs 3-5 Cr (6-12mo), consumer trust-building/advertising Rs 40-60 Cr over 3 years (the dominant cost), D2C infrastructure Rs 5-8 Cr (6-9mo), QComm listing/placement Rs 3-5 Cr/year ongoing, and regulatory certifications Rs 0.5-1 Cr (12-18mo).",
    },
    {
      type: "paragraph",
      id: "p-competitive-threats",
      text: "Three threats are ranked over the next 24 months: ITC/Yoga Bar expansion into Indian snacks (High probability, Rs 8-12 Cr potential EV downside from margin erosion and pricing pressure); digital ad cost inflation, with CPMs already up 40-60% over three years and CAC risk of rising a further 20-50% (High); and QComm dependency / private-label compression from Blinkit or Zepto launching their own competing SKUs within 18-24 months, a potential Rs 300-500L GMV impact and 2-3% margin erosion by FY28 (Medium).",
    },
    {
      type: "insightCallout",
      id: "callout-kids",
      text: "Nourish Junior, a proposed kids-nutrition line, is framed as the strongest adjacent opportunity: it requires no new customer, no new supply chain, and no new brand equity, since parents already buying Nourish for themselves are the buyer. The Rs 2-3K Cr category has no dominant D2C player yet, but that window is estimated at 18-24 months before The Whole Truth or an ITC-backed brand enters it.",
    },

    {
      type: "sectionHeading",
      id: "sec-diligence-gaps",
      anchor: "diligence-gaps",
      index: "07",
      heading: "Key Assumptions and Diligence Gaps",
    },
    {
      type: "paragraph",
      id: "p-diligence-1",
      text: "The memo's appendix maintains a 40-item assumptions and confidence registry, flagging every input by source and confidence level. Four are singled out as the ones most likely to change the recommendation.",
    },
    {
      type: "evidence",
      id: "ev-gap-cohort",
      label: "QComm-acquired vs. D2C-acquired Month-12 retention",
      value: "Not available",
      source: "Appendix A, item 39",
      interpretation:
        "Flagged as a CRITICAL GAP: the IC is told to request actual channel-level cohort retention data before investing, since the memo's entire retention-based tranche conditions assume this split behaves reasonably, without direct evidence.",
    },
    {
      type: "evidence",
      id: "ev-gap-ownlabel",
      label: "Own-label sourcing margin uplift assumption",
      value: "+6-10pp to COGS",
      source: "Appendix A, item 21",
      interpretation:
        "Rated Low confidence and described as 'the most critical low-confidence assumption' in the entire memo — the whole FY28 margin-bridge thesis rests on this single, industry-benchmarked (not company-verified) figure.",
    },
    {
      type: "evidence",
      id: "ev-gap-tam-filter",
      label: "'Health-aware' household filter in the bottoms-up TAM",
      value: "65% of 97M urban households assumed health-aware",
      source: "Appendix A, item 7",
      interpretation:
        "Rated Low confidence — the memo flags this as a key vulnerability in the bottoms-up TAM calculation requiring sensitivity analysis, since it is an estimated proxy rather than a directly sourced figure.",
    },
    {
      type: "evidence",
      id: "ev-gap-marketing",
      label: "Marketing/revenue improvement trajectory",
      value: "39% today → 30% by FY27 (management projection)",
      source: "Appendix A, item 22",
      interpretation:
        "Rated Low confidence and noted as contradicted by the CPM inflation assumption elsewhere in the same model — achieving it requires subscription growth to materialize as assumed, which is itself unverified.",
    },

    {
      type: "sectionHeading",
      id: "sec-risk-plan",
      anchor: "risk-and-100-day-plan",
      index: "08",
      heading: "Risk Analysis and 100-Day Plan",
    },
    {
      type: "metrics",
      id: "metrics-risk-heatmap",
      heading: "Top risks by probability and financial impact",
      metrics: [
        { label: "CAC inflation & retention deterioration", value: "High probability (>70% in 24mo) · Rs 12-15 Cr EV impact" },
        { label: "QComm margin compression", value: "High probability (>65% in 24mo) · Rs 5-8 Cr EV impact" },
        { label: "FMCG entry & regulatory pressure", value: "Medium probability (40-55% in 24mo) · Rs 8-12 Cr EV impact" },
      ],
    },
    {
      type: "paragraph",
      id: "p-risk-extended",
      text: "The extended risk registry (Appendix F) ranks QComm private-label entry from Blinkit/Zepto and own-label sourcing failure as more underappreciated in the main deck than they should be — QComm private labeling could materialize within 18 months and directly threatens Nourish's fastest-growing channel, while own-label failure means the FY28 margin-bridge thesis collapses outright and the base case becomes structurally unachievable.",
    },
    {
      type: "timeline",
      id: "timeline-100day",
      heading: "100-day post-close plan",
      entries: [
        {
          date: "Days 0-30",
          title: "Install Governance",
          description:
            "Stand up a channel-wise margin dashboard, cohort analysis by acquisition channel, a weekly KPI reporting cadence, and finance systems / data hygiene.",
        },
        {
          date: "Days 31-60",
          title: "Activate De-Risking",
          description:
            "Launch a WhatsApp CRM program with a preferred vendor introduced from Kairon's network, audit CAC and reallocate spend to high-ROI channels, and optimize the QComm-to-D2C conversion funnel.",
        },
        {
          date: "Days 61-100",
          title: "Validate Series B Readiness",
          description:
            "Begin the own-label manufacturing and sourcing pilot, start R&D and concept testing for Nourish Junior, scale corporate gifting partnerships, and file IP on hero formulations and brand assets.",
        },
      ],
    },
    {
      type: "metrics",
      id: "metrics-weekly-kpis",
      heading: "5 weekly KPIs (board observer)",
      metrics: [
        { label: "Gross margin by channel", value: ">58% (sustain)" },
        { label: "Month-12 retention", value: ">25% (improve to)" },
        { label: "CAC by channel", value: "<Rs 800 blended" },
        { label: "QComm share of GMV", value: "<40% (reduce to)" },
        { label: "Runway", value: ">18 months (maintain)" },
      ],
    },
    {
      type: "paragraph",
      id: "p-day100-success",
      text: "Success by Day 100 is defined as: margin ≥57%, retention improving, an own-label partner identified, subscription share increasing, and Tranche 2 on track. Kairon also commits three strategic introductions in this window — a CRM/retention agency, an own-label sourcing partner, and a VP Marketing candidate.",
    },

    {
      type: "sectionHeading",
      id: "sec-term-sheet",
      anchor: "proposed-term-sheet",
      index: "09",
      heading: "Proposed Term Sheet",
    },
    {
      type: "metrics",
      id: "metrics-termsheet",
      heading: "Key terms",
      metrics: [
        { label: "Pre-Money Valuation", value: "Rs 135 Cr" },
        { label: "Investment Amount", value: "Rs 40 Cr" },
        { label: "Post-Money Valuation", value: "Rs 175 Cr" },
        { label: "Equity Stake", value: "22.90%" },
        { label: "Liquidation Preference", value: "1x Non-Participating" },
        { label: "Anti-Dilution", value: "Broad-Based Weighted Average" },
        { label: "Board Seat", value: "1 of 5 (Kairon nominee)" },
        { label: "Pro-Rata Rights", value: "Yes, while stake ≥10%" },
        { label: "Reserved Matters", value: "Fundraise, M&A >Rs 5 Cr, new equity issuance >2%" },
        { label: "Information Rights", value: "Monthly MIS + Quarterly FS + Annual Audit" },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-valuation",
      anchor: "valuation-and-verdict",
      index: "10",
      heading: "Valuation and Final Verdict",
    },
    {
      type: "paragraph",
      id: "p-valuation-1",
      text: "The founder's ask of Rs 160 Cr pre-money implies a 16.3x multiple on FY25 net revenue of Rs 9.79 Cr — above the memo's 8-15x Series A comparable range for Indian D2C peers. Four independent valuation methodologies are run to check this.",
    },
    {
      type: "metrics",
      id: "metrics-valuation-methods",
      heading: "Valuation range by methodology (pre-money)",
      metrics: [
        { label: "LTM Revenue Multiples (8-15x)", value: "Rs 78-147 Cr, midpoint Rs 112 Cr", methodology: "Based on FY25 net revenue of Rs 9.79 Cr." },
        { label: "NTM Revenue Multiples (7-8x FY26)", value: "Rs 133-163 Cr, midpoint Rs 148 Cr", methodology: "Based on FY26 projected net revenue of Rs 20.4 Cr." },
        { label: "DCF (22% WACC)", value: "Rs 90-110 Cr, midpoint Rs 100 Cr", methodology: "Conservative terminal assumptions; terminal value drives 80%+ of the output, so this is used as a floor, not the primary method." },
        { label: "VC Method (5x Exit Multiple)", value: "Rs 120-145 Cr, midpoint Rs 133 Cr", methodology: "FY30 revenue exit-multiple approach." },
      ],
    },
    {
      type: "evidence",
      id: "ev-comp-multiples",
      label: "Selected comparable multiples (NTM)",
      value: "The Whole Truth ~12x · Yoga Bar (ITC-backed) ~10-12x · Honasa Consumer ~8-9x · Bikaji Foods ~5-6x",
      source: "Section 8, Comparable Multiples panel",
      interpretation:
        "Nourish commands a premium for growth rate and gross-margin profile relative to public FMCG comps, but the founder's ask still sits above even the private growth-stage comparable range.",
    },
    {
      type: "quote",
      id: "quote-verdict",
      quote:
        "Rs 135 Cr pays for what exists, not what management hopes will exist.",
      attribution: "Section 8, Valuation and Final Verdict",
    },
    {
      type: "paragraph",
      id: "p-valuation-close",
      text: "Multiple methodologies converge in the Rs 125-145 Cr range, and the memo recommends entry at Rs 135 Cr pre-money — Rs 40 Cr invested for a 22.9% stake at a Rs 175 Cr post-money valuation. The Rs 160 Cr ask is rejected specifically because it implies a 16.3x LTM multiple above the peer range despite unproven own-label sourcing, mid-range retention, and margin pressure already visible from the QComm mix shift.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "This memo is marked Confidential | For Educational Purposes Only. Financial data throughout is stated as being 'per case document (fictional)'; market-sizing inputs are sourced to MOSPI HCES 2022-23 and RedSeer estimates as cited in the case document. This should be read as an illustrative investment-committee exercise, not a real transaction.",
      source: "Cover page and Section 1 source note",
    },
  ],

  related: [],
};