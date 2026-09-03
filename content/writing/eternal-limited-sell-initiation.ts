// content/writing/eternal-limited-sell-initiation.ts
//
// Converted from "Eternal Limited (formerly Zomato Limited) — Equity
// Research | Initiation of Coverage" (prepared by Poras Vilas Wadhai,
// ME23B240; cover dated July 2026, sourcing notes reference "as of early
// August 2026"). All figures below are pulled directly from the report.
// publishedAt/updatedAt/readTime are site metadata estimates, not claims
// from the source document. Fields the report doesn't state precisely
// are marked [PLACEHOLDER].

import type { Artifact } from "@/lib/artifact-types";

export const eternalLimitedSellInitiation: Artifact = {
  frontmatter: {
    slug: "eternal-limited-sell-initiation",
    type: "research",
    eyebrow: "Dispatch",
    title: "Eternal Limited (formerly Zomato Limited)",
    subtitle:
      "Blinkit's first profitable quarter is real — but at ~700x trailing earnings, the stock is already pricing in a margin story it hasn't delivered yet.",
    status: "shipped",
    readTime: "14 min",
    publishedAt: "2026-07-01",
    updatedAt: "2026-08-01",
    summary:
      "Initiation of coverage on Eternal Limited (NSE: ETERNAL) with a SELL rating and a base-case DCF fair value of Rs. 125/share, implying -58.2% downside from a CMP of Rs. 300. Blinkit has become ~70% of consolidated revenue and turned segment Adjusted EBITDA-positive for the first time in Q1 FY27, but FY26 net profit actually declined YoY despite revenue nearly tripling — a jump driven largely by an accounting change in how Blinkit recognizes revenue, not underlying business acceleration.",
    metadata: [
      { label: "Category", value: "Equity Research — Initiation of Coverage" },
      { label: "Rating", value: "SELL" },
      { label: "Sector", value: "Consumer Internet / Quick Commerce" },
      { label: "Target Price", value: "Rs. 125 (CMP Rs. 300, -58.2%)" },
      { label: "Prepared by", value: "Poras Vilas Wadhai (ME23B240)" },
      { label: "Coverage date", value: "July 2026" },
      { label: "Read time", value: "14 min" },
    ],
  },

  blocks: [
    {
      type: "sectionHeading",
      id: "sec-summary",
      anchor: "executive-summary",
      index: "01",
      heading: "Executive Summary",
    },
    {
      type: "paragraph",
      id: "p-summary-1",
      text: "Eternal is India's largest listed consumer internet platform, spanning food delivery (Zomato), quick commerce (Blinkit), B2B restaurant supply (Hyperpure), and out-of-home entertainment (District). The investment case has fundamentally shifted from a food-delivery story to a quick-commerce story: Blinkit now generates roughly three-quarters of consolidated revenue and turned segment-level Adjusted EBITDA-positive for the first time in Q1 FY27, a structural inflection point for a business that was deeply loss-making as recently as two years ago. Food delivery remains a resilient, high-margin cash generator growing in the mid-to-high-30s percent range.",
    },
    {
      type: "evidence",
      id: "ev-rating",
      label: "Rating & fair value",
      value: "SELL — Rs. 125 target vs. Rs. 300 CMP (-58.2%)",
      source: "Section 6, DCF Valuation Bridge",
      interpretation:
        "The base-case DCF-derived fair value implies material downside from the current market price.",
    },
    {
      type: "evidence",
      id: "ev-marketcap",
      label: "Market capitalization",
      value: "Rs. 299,933 Cr (~US$34bn)",
      source: "Cover summary table",
      interpretation:
        "Scale context for the valuation gap between market pricing and the analyst's DCF output.",
    },
    {
      type: "metrics",
      id: "metrics-summary",
      heading: "Key figures at initiation",
      metrics: [
        {
          label: "FY26A Revenue / YoY Growth",
          value: "Rs. 54,364 Cr / +169% YoY",
          methodology:
            "Flagged in the report as accounting-change inflated — see Financial Analysis section.",
        },
        {
          label: "FY26A Net Profit (PAT)",
          value: "Rs. 366 Cr",
          methodology: "Down from Rs. 527 Cr in FY25, despite revenue nearly tripling.",
        },
        {
          label: "Q1 FY27 Revenue / YoY Growth",
          value: "Rs. 20,211 Cr / +182% YoY",
        },
        {
          label: "Q1 FY27 Adjusted EBITDA",
          value: "Rs. 555 Cr",
          methodology: "Vs. Rs. 172 Cr in Q1 FY26.",
        },
      ],
    },
    {
      type: "paragraph",
      id: "p-summary-opportunities",
      text: "Top opportunities cited: Blinkit inflecting to profitability while still compounding NOV at 90%+ YoY, with dark-store density, SKU depth, and tier-2/3 penetration still in early innings; a India quick-commerce TAM the report estimates could roughly double by 2031 on top of a food-delivery TAM expected to compound at 25%+ annually into the mid-2030s; category adjacencies (District, Hyperpure, the Orbgen/Wasteland acquisitions) extending the monetizable surface area of the core user base; and a net-cash balance sheet with negligible leverage (D/E ~0.15) funding dark-store capex without dilutive raises.",
    },
    {
      type: "paragraph",
      id: "p-summary-risks",
      text: "Top risks cited: intensifying quick-commerce competition from Swiggy Instamart, Zepto, and new entrants (Swiggy's Toing, Rapido's Ownly) pressuring contribution margins; a demanding valuation on trailing earnings (P/E in the several-hundred-times range) against a still-small absolute profit base; live GST litigation and gig-worker classification overhangs; and FY26 revenue comparability distorted by Blinkit's shift to inventory-led (gross) revenue recognition, meaning investors need to underwrite margin trajectory rather than headline growth.",
    },

    {
      type: "sectionHeading",
      id: "sec-thesis",
      anchor: "investment-thesis",
      index: "02",
      heading: "Investment Thesis",
    },
    {
      type: "paragraph",
      id: "p-thesis-1",
      text: "The thesis rests on three pillars: Blinkit's transition from a cash-burning growth experiment to a structurally profitable, scaled quick-commerce platform; Zomato's food-delivery business continuing to compound at healthy double-digit growth while sustaining ~5%+ EBITDA margins with further platform-fee-led upside; and optionality from adjacent categories (District, Hyperpure, movies/events) leveraging the same logistics and demand infrastructure at low incremental cost.",
    },
    {
      type: "insightCallout",
      id: "callout-why-now",
      text: "Q1 FY27 marked Blinkit's first quarter of positive segment Adjusted EBITDA (Rs. 102 Cr) — a milestone the market has been waiting for since the qcom pivot began in FY23. Consolidated Adjusted EBITDA grew from Rs. 172 Cr to Rs. 555 Cr in four quarters, even as the company kept expanding its dark-store footprint.",
    },
    {
      type: "decision",
      id: "decision-headline-growth",
      assumed:
        "FY26's near-tripling of reported revenue signals genuine business acceleration, and the market's ~4x EV/Sales multiple already prices in a durable margin recovery.",
      found:
        "The revenue jump is largely a presentation effect — Blinkit's shift from a marketplace (net/commission) revenue model to an inventory-led (gross) model — not a 3x increase in underlying economic activity. FY26 net profit actually declined YoY (Rs. 366 Cr vs. Rs. 527 Cr) despite the reported top-line growth.",
      changed:
        "The analysis is built around margin trajectory and segment-level profitability (Adjusted EBITDA, contribution margin) rather than headline revenue growth, and flags that any stumble in Blinkit's unit economics — e.g., renewed discounting from Instamart or Zepto — could compress the already-demanding multiple sharply.",
    },

    {
      type: "sectionHeading",
      id: "sec-industry",
      anchor: "industry-overview",
      index: "03",
      heading: "Industry Overview",
    },
    {
      type: "paragraph",
      id: "p-industry-1",
      text: "Eternal operates at the intersection of online food delivery and quick commerce (10-30 minute grocery/essentials delivery). Market-sizing estimates vary meaningfully by methodology and scope, so the report presents a range rather than a single point estimate.",
    },
    {
      type: "metrics",
      id: "metrics-market-sizing",
      heading: "Market sizing (varies by source methodology)",
      metrics: [
        {
          label: "India Online Food Delivery",
          value: "~US$61.2bn (2025/26E) → ~US$684bn by 2035",
          methodology: "~27.3% CAGR, Expert Market Research.",
        },
        {
          label: "India Quick Commerce (conservative)",
          value: "~US$3.5-3.7bn → ~US$4.4-6.6bn (2030/31E)",
          methodology: "~4.5-12.7% CAGR, Mordor Intelligence.",
        },
        {
          label: "India Quick Commerce (higher estimate)",
          value: "~US$5.6bn → ~US$10.2bn (2030/31E)",
          methodology: "~12.8% CAGR, Statista Market Forecast.",
        },
        {
          label: "Global Quick Commerce",
          value: "~US$78.9bn (2025) → ~US$582.6bn by 2032",
          methodology: "~34.3% CAGR, DemandSage / industry compilations.",
        },
      ],
    },
    {
      type: "paragraph",
      id: "p-industry-2",
      text: "Growth drivers cited: rising smartphone and UPI/digital-payments penetration lowering transaction friction, especially in tier-2/3 cities; expanding SKU assortment in quick commerce (Delhi-NCR now ~80,000 SKUs vs. ~20,000 in emerging cities); urbanization and rising discretionary incomes; and platforms extending into adjacent instant-delivery categories (electronics, beauty, pharma, event tickets) to raise wallet share per user. On Porter's Five Forces, the report rates competitive rivalry and buyer bargaining power as High (low switching costs, heavy multi-homing across apps), and threat of new entrants as Moderate given the capital intensity of dark-store networks, tempered by well-funded entrants like Zepto proving scale is achievable within a few years.",
    },

    {
      type: "sectionHeading",
      id: "sec-competitive",
      anchor: "competitive-landscape",
      index: "04",
      heading: "Competitive Landscape",
    },
    {
      type: "paragraph",
      id: "p-competitive-1",
      text: "Eternal (via Blinkit) is the scale leader in Indian quick commerce, estimated to hold roughly 45% category share, ahead of Swiggy Instamart and privately-held Zepto. In food delivery, Eternal and Swiggy operate an effective duopoly.",
    },
    {
      type: "evidence",
      id: "ev-competitive-revenue",
      label: "Q1 FY27 revenue, Eternal vs. Swiggy",
      value: "Rs. 20,211 Cr (+182% YoY) vs. Rs. 6,812 Cr (+37% YoY)",
      source: "Competitive Landscape table, Section 4",
      interpretation:
        "Eternal's growth rate is not like-for-like — it's significantly inflated by Blinkit's shift to gross revenue recognition, unlike Swiggy's marketplace-model growth.",
    },
    {
      type: "evidence",
      id: "ev-competitive-profit",
      label: "Q1 FY27 profitability, Eternal vs. Swiggy",
      value: "Eternal PAT +Rs. 92 Cr vs. Swiggy net loss (Rs. 791 Cr)",
      source: "Competitive Landscape table, Section 4",
      interpretation:
        "Eternal is profitable at the consolidated level while Swiggy is not, though Instamart (Swiggy's quick-commerce arm) is still near contribution breakeven rather than EBITDA-positive.",
    },
    {
      type: "metrics",
      id: "metrics-global-comps",
      heading: "Global comparable business models (FY26/CY)",
      metrics: [
        { label: "Eternal (Zomato/Blinkit)", value: "EV/Sales 4.1x · P/E ~700x (n.m.) · Rev. growth 182%*" },
        { label: "Swiggy", value: "EV/Sales 2.0x · P/E n.m. (loss-making) · Rev. growth 37%" },
        { label: "DoorDash (USA)", value: "EV/Sales 5.1x · EV/EBITDA ~25-54x · P/E ~78x · Rev. growth ~33%" },
        { label: "Meituan (China)", value: "EV/Sales 1.9x · EV/EBITDA ~14-23x · P/E ~20x · Rev. growth ~15-20%" },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-financials",
      anchor: "financial-analysis",
      index: "05",
      heading: "Financial Analysis",
    },
    {
      type: "paragraph",
      id: "p-financials-1",
      text: "Eternal's reported financials require careful interpretation. FY26 revenue nearly tripled YoY largely because Blinkit moved from a marketplace (net/commission) revenue model to an inventory-led (gross) model — a presentation change, not a 3x increase in underlying economic activity. The report therefore focuses on margin trajectory and segment-level profitability rather than headline top-line growth alone.",
    },
    {
      type: "metrics",
      id: "metrics-financials",
      heading: "Revenue, PAT, and Adjusted EBITDA, FY24A–Q1 FY27",
      metrics: [
        { label: "FY24A", value: "Revenue Rs. 12,114 Cr · PAT (Rs. 37 Cr)" },
        {
          label: "FY25A",
          value: "Revenue Rs. 20,243 Cr (+67%) · PAT Rs. 527 Cr",
          methodology: "Adjusted EBITDA ~Rs. 2,500 Cr (est.), margin ~12.3%* — not strictly comparable pre/post the Blinkit accounting change.",
        },
        {
          label: "FY26A",
          value: "Revenue Rs. 54,364 Cr (+169%) · PAT Rs. 366 Cr",
          methodology: "Adjusted EBITDA ~Rs. 4,290 Cr, margin ~7.9%* — same comparability caveat.",
        },
        {
          label: "Q1 FY27",
          value: "Revenue Rs. 20,211 Cr (+182%) · PAT Rs. 92 Cr",
          methodology: "Adjusted EBITDA Rs. 555 Cr, margin 2.7% — the cleanest current run-rate reference.",
        },
      ],
    },
    {
      type: "metrics",
      id: "metrics-key-ratios",
      heading: "Key financial ratios",
      metrics: [
        { label: "Trailing P/E", value: "~700x", methodology: "Extremely elevated due to a still-small earnings base relative to market cap — not a meaningful standalone valuation signal today." },
        { label: "Forward P/E (FY27E, illustrative)", value: "~140x", methodology: "Normalizes materially as EBITDA margin ramps, but still reflects a long-duration growth story priced well ahead of current earnings." },
        { label: "P/B Ratio", value: "~9.7x" },
        { label: "EV/Sales (FY26)", value: "~4.1x", methodology: "Roughly in line with / at a premium to global peers (DoorDash ~5x, Meituan ~1.9x). [Note: the cover page lists a separate figure, EV/Sales FY27E 2.3x — the two are not directly comparable as they use different fiscal-year bases.]" },
        { label: "Net Debt / Net Cash", value: "Net cash ~Rs. 2,022 Cr" },
        { label: "Debt / Equity", value: "~0.15x" },
      ],
    },
    {
      type: "evidence",
      id: "ev-segment-mix",
      label: "FY26 segment revenue mix",
      value: "Blinkit 69% (Rs. 37,779 Cr) · Zomato 19% (Rs. 10,159 Cr) · Hyperpure 10% (Rs. 5,366 Cr) · District & Other 2% (Rs. 1,060 Cr)",
      source: "Section 5, FY26 Segment Revenue Mix chart",
      interpretation: "Blinkit is now roughly three-quarters of consolidated revenue, up from a much smaller share as recently as two years ago.",
    },

    {
      type: "sectionHeading",
      id: "sec-unit-economics",
      anchor: "unit-economics",
      index: "06",
      heading: "Unit Economics Snapshot",
    },
    {
      type: "paragraph",
      id: "p-unit-1",
      text: "Both Eternal and Swiggy are converging on a similar playbook: widen SKU assortment and basket size to dilute fixed dark-store costs, while easing off blanket discounting in favor of targeted promotions. Eternal's earlier scale — more dark stores, denser city coverage — is the primary driver of its lead in reaching segment profitability first.",
    },
    {
      type: "metrics",
      id: "metrics-unit-economics",
      heading: "Eternal (Blinkit) vs. Swiggy (Instamart)",
      metrics: [
        { label: "Contribution margin trend", value: "Turned Adj. EBITDA positive in Q1 FY27 (Eternal) vs. near contribution breakeven, -0.2% of GOV, May 2026 (Swiggy)" },
        { label: "Net average order value", value: "Rising via assortment depth (Eternal) vs. Rs. 508, +12.1% YoY (Swiggy)" },
        { label: "Dark store network", value: "~2,243+ stores, expanding toward 3,000 (Eternal) vs. 1,171 stores across 131 cities (Swiggy)" },
        { label: "Advertising spend (% of Q1 FY27 revenue)", value: "~4.7% / Rs. 945 Cr of Rs. 20,211 Cr (Eternal)" },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-dcf",
      anchor: "dcf-valuation",
      index: "07",
      heading: "DCF Valuation",
    },
    {
      type: "paragraph",
      id: "p-dcf-1",
      text: "Eternal is valued using a 5-year unlevered free-cash-flow-to-firm (FCFF) DCF, discounted at a WACC of 13.39% and terminating with a Gordon Growth perpetuity at 5.0%.",
    },
    {
      type: "metrics",
      id: "metrics-wacc",
      heading: "WACC build",
      metrics: [
        { label: "Risk-free rate (India 10Y G-Sec)", value: "6.8%" },
        { label: "Equity risk premium", value: "6.5%" },
        { label: "Beta (normalized, sector-consistent)", value: "1.10" },
        { label: "Cost of equity (CAPM)", value: "13.95%" },
        { label: "Post-tax cost of debt", value: "5.99%" },
        { label: "Equity / Debt weight", value: "93% / 7%" },
        { label: "WACC", value: "13.39%" },
      ],
    },
    {
      type: "evidence",
      id: "ev-fcff-forecast",
      label: "FCFF forecast, FY27E–FY31E",
      value: "Revenue Rs. 84,264 Cr → Rs. 207,980 Cr; Adjusted EBITDA margin ramps 4.5% → 12.0%",
      source: "Section 7, FCFF Build table",
      interpretation:
        "The DCF assumes a multi-year margin expansion story, not just continued top-line growth — this is the core assumption an investor is underwriting.",
    },
    {
      type: "evidence",
      id: "ev-valuation-bridge",
      label: "Valuation bridge",
      value: "Enterprise Value Rs. 119,690 Cr → Equity Value Rs. 121,712 Cr → Rs. 125/share (970 Cr shares)",
      source: "Section 7, Valuation Bridge table",
      interpretation: "Against a CMP of Rs. 300, this implies -58.2% downside.",
    },

    {
      type: "sectionHeading",
      id: "sec-sensitivity",
      anchor: "sensitivity-analysis",
      index: "08",
      heading: "Sensitivity Analysis",
    },
    {
      type: "paragraph",
      id: "p-sensitivity-1",
      text: "The DCF output is highly sensitive to WACC and terminal growth assumptions, as is typical for a long-duration, early-profitability growth story. Across a WACC range of 11.9%-14.9% and terminal growth of 4.0%-6.0%, implied per-share value ranges from Rs. 95 to Rs. 182 — every scenario in the sensitivity table sits below the Rs. 300 current market price.",
    },
    {
      type: "evidence",
      id: "ev-sensitivity-range",
      label: "Sensitivity range (implied share price)",
      value: "Rs. 95 (WACC 14.9%, terminal growth 4.0%) to Rs. 182 (WACC 11.9%, terminal growth 6.0%)",
      source: "Section 9, DCF Sensitivity heatmap",
      interpretation: "Base case (WACC 13.4%, terminal growth 5.0%) lands at Rs. 125.",
    },

    {
      type: "sectionHeading",
      id: "sec-risks",
      anchor: "key-risks",
      index: "09",
      heading: "Key Risks",
    },
    {
      type: "paragraph",
      id: "p-risks-1",
      text: "Seven risks are flagged: competitive intensity in quick commerce from Zepto, Swiggy Instamart, and new entrants (margin compression, delayed group-level profitability); GST litigation and indirect-tax exposure (potential cash outflow, sentiment overhang); gig-worker labour code changes (higher cost-to-serve); valuation risk from elevated multiples on a small earnings base (high sensitivity to any growth or margin disappointment); execution risk in geographic/category expansion into tier-2/3 cities and new verticals; accounting comparability from the Blinkit revenue model change (headline growth metrics can mislead investors relying on YoY revenue alone); and restaurant-partner relations risk, including commission disputes or potential boycotts.",
    },

    {
      type: "sectionHeading",
      id: "sec-management",
      anchor: "management-assessment",
      index: "10",
      heading: "Management Assessment",
    },
    {
      type: "paragraph",
      id: "p-management-1",
      text: "Eternal underwent a notable leadership transition in FY26. This reflects a maturing governance structure and a deliberate move to institutionalize leadership beyond the founder, while retaining Goyal's strategic involvement at the board level. Capital allocation has included opportunistic, adjacent M&A (Orbgen Technologies, Wasteland Entertainment) funded from the balance sheet rather than dilutive equity raises, and segment-level transparency (Blinkit, Zomato, Hyperpure, District reported separately) supports investor ability to underwrite sum-of-the-parts value.",
    },
    {
      type: "timeline",
      id: "timeline-management",
      heading: "Key structural milestones",
      entries: [
        {
          date: "FY23",
          title: "Quick-commerce pivot begins",
          description: "Blinkit's push toward scaled quick commerce starts, from a position of deep segment losses.",
        },
        {
          date: "1 Feb 2026",
          title: "Leadership transition",
          description: "Founder Deepinder Goyal steps down as CEO and Managing Director to become Vice Chairman and Non-Executive Director; Albinder Singh Dhindsa (previously CEO of Blinkit) is elevated to Group CEO.",
        },
        {
          date: "Q1 FY27",
          title: "Blinkit turns Adjusted EBITDA-positive",
          description: "Blinkit posts its first quarter of positive segment Adjusted EBITDA (Rs. 102 Cr), a milestone the market had been waiting for since the FY23 qcom pivot began.",
        },
        {
          date: "Early August 2026",
          title: "Data cutoff for this report",
          description: "Company filings, exchange disclosures, and financial media coverage referenced in this report are as of early August 2026.",
        },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-recommendation",
      anchor: "investment-recommendation",
      index: "11",
      heading: "Investment Recommendation",
    },
    {
      type: "metrics",
      id: "metrics-scenarios",
      heading: "Scenario analysis",
      metrics: [
        {
          label: "Bear Case",
          value: "~Rs. 95/share",
          methodology: "WACC +150bps, terminal growth -100bps, slower EBITDA margin ramp.",
        },
        {
          label: "Base Case",
          value: "~Rs. 125/share",
          methodology: "As modeled in the DCF Valuation section.",
        },
        {
          label: "Bull Case",
          value: "~Rs. 182/share",
          methodology: "WACC -150bps, terminal growth +100bps, faster margin ramp / share gains.",
        },
      ],
    },
    {
      type: "paragraph",
      id: "p-recommendation-1",
      text: "Upgrade trigger: two consecutive quarters of consolidated (not just segment) EBITDA margin expansion above 4% of revenue, alongside continued 25%+ organic NOV growth in Blinkit, would support upgrading toward a higher-conviction BUY. Downgrade trigger: renewed heavy discounting in quick commerce that reverses the Q1 FY27 contribution-margin gains, or an adverse GST litigation outcome, would push the rating further toward SELL. A sustained downward re-rating of global consumer-internet multiples (e.g., rising risk-free rates) would compress fair value independent of company-specific execution.",
    },
    {
      type: "insightCallout",
      id: "callout-final",
      text: "The rating is SELL against a base-case DCF fair value of Rs. 125/share versus a Rs. 300 CMP. The thesis is underpinned by Blinkit's genuine inflection to segment profitability and a resilient, cash-generative food-delivery core — balanced against a valuation that already prices in a multi-year margin expansion story the company has only just begun to demonstrate.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "This report is an illustrative, AI-assisted equity research template prepared for educational and portfolio-demonstration purposes only. It is not produced by a SEBI-registered research analyst and does not constitute investment advice. Historical financial data is sourced from public company filings and financial media as of early August 2026 and may contain inaccuracies or omissions; forecasts, the DCF model, WACC, and comparable-company multiples are analyst assumptions, not official company guidance or sell-side consensus.",
      source: "Report Disclaimer, final page",
    },
  ],

  related: [
    {
      slug: "product-teardown-blinkit",
      type: "research",
      title: "Product Teardown: Blinkit",
      reason: "Next dispatch",
    },
    {
      slug: "nourish-snacks-series-a-ic-memo",
      type: "research",
      title: "Nourish Snacks Pvt. Ltd. — Series A Investment Evaluation",
      reason: "Related dispatch",
    },
  ],
};