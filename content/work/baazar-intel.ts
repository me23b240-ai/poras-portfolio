// content/work/bazaar-intel.ts
//
// Built from the MarketOS product docs + resume bullets, and cross-checked
// against live UI screenshots (hero, companies, industries, compare,
// dashboard, reports, AI workspace). The shipped product is branded
// "Bazaar Intel" in the actual UI (nav, hero headline, page titles), not
// "MarketOS" as in the working docs — the artifact uses the live brand
// name and notes the internal codename once.
//
// One figure conflict worth flagging: the source docs state 18 industries
// covered, but the live dashboard screenshot reads "Industries Covered: 15"
// and the Industries page itself shows 11+ category pills. Rather than
// silently pick one, Results states the docs' 18 as the stated scope and
// notes the dashboard's live 15 as the current computed count — those are
// plausibly different moments in time, not a single fixed number.
//
// Resume-bullet figures treated as the numbers of record: 120+ companies,
// 40-50 fields per company, 15+ computed dashboard metrics, 6+ AI analysis
// types, 7+ pages, 30+ reusable components, Gemini 2.5 Flash as the sole
// model. Anything framed as "planned" in the source docs is left out of
// Results.

import type { Artifact } from "@/lib/artifact-types";

export const bazaarIntel: Artifact = {
  frontmatter: {
    slug: "bazaar-intel",
    type: "product",
    eyebrow: "Investigation",
    title: "Bazaar Intel",
    subtitle:
      "A company profile is a database record. A research platform has to reason over it — Bazaar Intel is built as the second thing, not the first.",
    status: "shipped",
    readTime: "11 min",
    publishedAt: "2026-08-15",
    summary:
      "An AI-powered market intelligence platform for Indian consumer internet, inspired by Bloomberg, PitchBook, and CB Insights, covering 120+ companies across 18 industries with 40-50 structured fields per company. Built a dynamic analytics engine that replaces hardcoded dashboard metrics with real-time computed KPIs, and an AI Workspace where Gemini 2.5 Flash generates structured company overviews, competitive comparisons, financial snapshots, and risk assessments on demand, from live data rather than pre-written reports.",
    coverImage: {
      src: "/images/bazaar-intel/hero.png",
      alt: "Bazaar Intel landing page — 'The Operating System for Indian Consumer Internet'",
    },
    metadata: [
      { label: "Category", value: "Product" },
      { label: "Status", value: "Shipped, 0→1 build" },
      { label: "Role", value: "Product Manager · Founder · Full Stack Builder" },
      { label: "Tech stack", value: "Next.js 16, TypeScript, TailwindCSS, shadcn/base-ui, Gemini 2.5 Flash" },
      { label: "Scope", value: "120+ companies, 18 industries, 40-50 fields/company" },
      { label: "Internal codename", value: "MarketOS (working name during build)" },
      { label: "Read time", value: "11 min" },
    ],
  },

  blocks: [
    {
      type: "sectionHeading",
      id: "sec-context",
      anchor: "context",
      index: "01",
      heading: "Context",
    },
    {
      type: "paragraph",
      id: "p-context-1",
      text: "Bloomberg, PitchBook, and CB Insights don't exist for Indian consumer internet specifically — the closest equivalents are scattered across paywalled reports, individual company blog posts, and analyst decks that go stale the moment they're published. Anyone trying to build a real picture of a company — its funding history, its competitors, its actual unit economics versus its stated ones — ends up doing that synthesis by hand, every time, from scratch.",
    },
    {
      type: "paragraph",
      id: "p-context-2",
      text: "The target users were investors, VC analysts, strategy teams, product managers, founder's-office operators, consultants, and startup operators — people who don't need one more company wiki page, they need a research assistant that already knows the landscape and can reason over it on request.",
    },
    {
      type: "insightCallout",
      id: "callout-context",
      text: "The first instinct was to build better company profile pages. The actual product is a platform that can produce a structured analysis, comparison, or report from that data on demand — the profile page is the substrate, not the product.",
    },

    {
      type: "sectionHeading",
      id: "sec-decisions",
      anchor: "decisions",
      index: "02",
      heading: "Decisions",
    },
    {
      type: "decision",
      id: "decision-dashboard",
      assumed:
        "A market intelligence dashboard's headline numbers — tracked valuation, industry count, public company count, sector leaders — could be set once and updated manually as the dataset grows.",
      found:
        "A hardcoded dashboard drifts from reality the moment a single company is added or a funding round updates, and manual upkeep doesn't scale with a dataset meant to keep growing.",
      changed:
        "Built a dynamic analytics engine that computes every dashboard number directly from the underlying dataset: company counts, industry distribution, funding statistics, average valuation, unicorn count, growth leaders. Adding one company updates the entire dashboard automatically, with no manual dashboard maintenance step at all.",
    },
    {
      type: "decision",
      id: "decision-reports",
      assumed:
        "Reports (SWOT, risk analysis, growth strategy, competitive positioning) should be pre-written once per company and displayed as static content, the way most research platforms structure their content library.",
      found:
        "Static reports go stale the moment underlying data changes, and pre-writing seven report types across 120+ companies doesn't scale as a one-person build — and more importantly, it caps the platform at whatever reports were anticipated in advance.",
      changed:
        "Reports are generated on demand by Gemini 2.5 Flash from the live dataset, formatted as structured markdown and rendered in an executive-report style. The report catalog isn't fixed at build time — a user can ask for a custom analysis type through free-text prompts as well as the six-plus predefined ones.",
    },
    {
      type: "decision",
      id: "decision-chatbox",
      assumed:
        "A single open chat box — 'ask anything about any company' — is the most flexible way to expose an LLM research assistant.",
      found:
        "An unstructured chat box produces inconsistent output shape and makes it hard for a user to know what kinds of questions the tool is actually good at answering, especially for people who want a specific deliverable (a financial snapshot, a risk assessment) rather than a conversation.",
      changed:
        "The AI Workspace pairs a structured Company + Analysis Type selector (Company Overview, Competitive Positioning, Financial Snapshot, Strategic Outlook, Risk Assessment, Growth Analysis) with an optional free-text instructions field — giving predictable, professionally formatted output by default, while still allowing an open-ended prompt like 'Analyze Blinkit's profitability compared with Zepto, focusing on unit economics' when a user needs something the presets don't cover.",
    },

    {
      type: "sectionHeading",
      id: "sec-product",
      anchor: "product",
      index: "03",
      heading: "The product",
    },
    {
      type: "paragraph",
      id: "p-product-1",
      text: "Bazaar Intel is a seven-page platform: a landing page, a Companies directory, an Industries layer, a side-by-side Compare tool, an AI-generated Reports library, a computed Dashboard, and the AI Workspace — all built around a single structured dataset of Indian consumer internet companies rather than seven disconnected features.",
    },
    {
      type: "figure",
      id: "figure-hero",
      src: "/images/bazaar-intel/hero.png",
      alt: "Bazaar Intel landing page hero: 'The Operating System for Indian Consumer Internet'",
      caption: "Landing page. Positioned explicitly against Bloomberg/PitchBook-style intelligence tools, scoped to a market none of them cover.",
      figureNumber: 1,
    },
    {
      type: "figure",
      id: "figure-companies",
      src: "/images/bazaar-intel/companies.png",
      alt: "Bazaar Intel Companies directory showing category filters and company cards with YoY growth",
      caption: "Companies. Category-filterable cards — Flipkart, Amazon India, Meesho, AJIO — each showing YoY growth, funding stage, and headquarters at a glance.",
      figureNumber: 2,
    },
    {
      type: "figure",
      id: "figure-industries",
      src: "/images/bazaar-intel/industries.png",
      alt: "Bazaar Intel Industries page showing market size, CAGR, and company count per sector",
      caption: "Industries. Each sector carries its own market size, CAGR, and tracked-company count — Marketplace ($85B, 17.2% CAGR, 8 companies) sits alongside Quick Commerce ($6.5B, 45.8% CAGR, 5 companies).",
      figureNumber: 3,
    },
    {
      type: "figure",
      id: "figure-compare",
      src: "/images/bazaar-intel/compare.png",
      alt: "Bazaar Intel Compare Companies page showing AJIO vs Snapdeal attribute table",
      caption: "Compare. Any two companies, side by side — industry, founding year, headquarters, employees, valuation, and funding stage, generated from the same structured dataset.",
      figureNumber: 4,
    },
    {
      type: "framework",
      id: "framework-ai-flow",
      heading: "AI Workspace request flow",
      nodes: [
        { id: "node-1", label: "Select company + analysis type", takeaway: "Structured dropdowns keep output shape predictable — Company Overview, Financial Snapshot, Risk Assessment, and four others." },
        { id: "node-2", label: "Optional custom instructions", takeaway: "Free-text field for anything the presets don't cover, e.g. 'focus on unit economics and recent funding activity'." },
        { id: "node-3", label: "Next.js API route", takeaway: "Assembles company + industry context from the structured dataset before calling the model." },
        { id: "node-4", label: "Gemini 2.5 Flash", takeaway: "Generates a structured, professionally formatted analysis — executive summary, strategic recommendations, investment insights." },
        { id: "node-5", label: "Rendered markdown", takeaway: "Streamed with staged loading states (loading profile, reading industry data, evaluating competitors, analyzing business model) rather than a blank spinner." },
      ],
    },
    {
      type: "figure",
      id: "figure-aiworkspace",
      src: "/images/bazaar-intel/aiworkspace.png",
      alt: "Bazaar Intel AI Workspace mid-generation, showing staged loading states for a Company Overview report on IndiaMART",
      caption: "AI Workspace. Staged progress states — loading profile, reading industry data, evaluating competitors, analyzing business model — instead of a single blank loading spinner during a multi-second generation.",
      figureNumber: 5,
    },
    {
      type: "figure",
      id: "figure-dashboard",
      src: "/images/bazaar-intel/dashboard.png",
      alt: "Bazaar Intel Market Intelligence Dashboard showing tracked valuation, Market Pulse chart, and AI Insight of the Day",
      caption: "Dashboard. Every number here — tracked valuation, industries covered, public company count, the Market Pulse growth curve, the daily AI insight — is computed from the dataset, not hardcoded.",
      figureNumber: 6,
    },
    {
      type: "evidence",
      id: "ev-daily-insight",
      label: "AI Insight of the Day (live example)",
      value: "\"While Flipkart holds the highest valuation at $37B among 120 tracked companies, Quick Commerce signals significant market shifts as the top industry by average growth at 73% across 5 companies, including the fastest-growing Zepto at +150% YoY.\"",
      source: "Dashboard, AI Insight of the Day panel",
      interpretation:
        "Generated fresh by Gemini from the current dataset state rather than written once and left static — the insight text itself changes as the underlying company and industry numbers change.",
    },
    {
      type: "figure",
      id: "figure-reports",
      src: "/images/bazaar-intel/reports.png",
      alt: "Bazaar Intel Reports library showing AI-generated research across e-commerce, quick commerce, AI, and fintech",
      caption: "Reports. AI-generated research library — Marketplace Landscape 2026, Quick Commerce Report, Consumer AI in India, Fintech Ecosystem — each with a read time and publish date, generated rather than pre-written.",
      figureNumber: 7,
    },
    {
      type: "paragraph",
      id: "p-product-2",
      text: "Every company page carries the same 40-50 structured fields: overview, business model, founding year, headquarters, industry, funding, valuation, revenue, employees, market share, growth metrics, profitability, investors, competitors, a SWOT analysis, key products, leadership, strategic initiatives, future outlook, and an AI summary — the same underlying record that powers the Compare tool, the Reports library, and the AI Workspace, so nothing has to be re-entered or re-derived per feature.",
    },

    {
      type: "sectionHeading",
      id: "sec-principles",
      anchor: "principles",
      index: "04",
      heading: "Principles",
    },
    {
      type: "paragraph",
      id: "p-principles-1",
      text: "AI gets used where it adds decision-making value — research synthesis, comparisons, risk framing — not layered on as a novelty chat feature. Numbers that can be computed from structured data get computed, never hand-maintained; a dashboard that requires manual updates is a dashboard that will eventually be wrong. And the product is built around workflows a user actually runs — 'what are AJIO's biggest risks', 'compare Zepto vs Blinkit', 'generate a financial snapshot' — rather than around screens that just display information and leave the synthesis to the reader.",
    },

    {
      type: "sectionHeading",
      id: "sec-results",
      anchor: "results",
      index: "05",
      heading: "Results",
    },
    {
      type: "metrics",
      id: "metrics-1",
      metrics: [
        {
          label: "Companies tracked",
          value: "120+",
          methodology: "Spanning multiple startup stages — unicorns, public companies, and growth startups — across Indian consumer internet.",
        },
        {
          label: "Industries covered",
          value: "18 (per scope docs)",
          methodology: "The live dashboard's computed 'Industries Covered' stat reads 15 at time of writing — plausibly a different snapshot of the same growing dataset rather than a discrepancy in the underlying scope.",
        },
        {
          label: "Structured fields per company",
          value: "40-50",
          methodology: "Overview, business model, funding, valuation, revenue, competitors, SWOT, leadership, strategic initiatives, AI summary, and more, per company.",
        },
        {
          label: "Computed dashboard metrics",
          value: "15+",
          methodology: "All generated directly from the dataset — company counts, funding totals, sector leaders, top valuation, growth leaders — with no hardcoded dashboard values.",
        },
        {
          label: "AI analysis types",
          value: "6+",
          methodology: "Company Overview, Competitive Positioning, Financial Snapshot, Strategic Outlook, Risk Assessment, Growth Analysis, plus open-ended custom prompts.",
        },
        {
          label: "Pages",
          value: "7+",
          methodology: "Landing, Dashboard, Companies, Industries, Compare, Reports, AI Workspace.",
        },
        {
          label: "Reusable React components",
          value: "30+",
          methodology: "Metric widgets, comparison tables, market charts, executive-report renderers, skeleton loaders, and company/industry cards.",
        },
      ],
    },
    {
      type: "evidence",
      id: "ev-tracked-valuation",
      label: "Tracked valuation (live dashboard)",
      value: "$358.0B across tracked companies · 20 public companies",
      source: "Dashboard, Tracked Valuation and Public Companies metric cards",
      interpretation:
        "Computed live from the dataset, not a fixed headline number — recalculates as company records are added or updated.",
    },

    {
      type: "sectionHeading",
      id: "sec-learnings",
      anchor: "learnings",
      index: "06",
      heading: "Learnings",
    },
    {
      type: "paragraph",
      id: "p-learnings-1",
      text: "Separating the dataset layer from the AI layer, the same discipline behind SellerLens's deterministic scoring engine, mattered here too, just for a different reason: it meant every generated report, comparison, and dashboard number could trace back to a specific field in a specific company record, rather than being an opaque model output nobody could audit or explain.",
    },
    {
      type: "paragraph",
      id: "p-learnings-2",
      text: "The AI Workspace's staged loading states (loading profile → reading industry data → evaluating competitors → analyzing business model) came from a simple realization: a multi-second Gemini generation with a blank spinner reads as broken, while the same wait time with visible progress reads as thorough. That's a UX decision, not a performance one, and it changed how the feature felt more than any latency optimization would have.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "Built as a 0→1 solo product build. Company and industry figures shown throughout (valuations, growth rates, funding stages) reflect the platform's structured dataset at time of writing and are illustrative of Indian consumer internet companies, not live real-time financial data.",
    },
  ],

  related: [
    {
      slug: "sellerlens",
      type: "product",
      title: "SellerLens",
      reason: "Related build",
    },
    {
      slug: "applyos",
      type: "product",
      title: "ApplyOS",
      reason: "Related build",
    },
  ],
};