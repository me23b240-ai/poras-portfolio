// content/work/sellerlens.ts
//
// Built from the SellerLens product docs + resume bullets. Resume bullets
// are treated as the numbers of record: 4 modules, 100-point scoring
// engine, 1000+ marketplace products benchmarked, 3 LLM workflows across
// 3 APIs, ~80% cut in listing-optimization time. Anything framed as
// "planned" or "to track" in the source docs (acceptance rate, seller
// retention, confidence scoring, etc.) is intentionally left out of
// Results — those are roadmap items, not measured outcomes, and this is
// a pre-launch MVP with no real seller traffic yet (see Constraints).
// Screenshots referenced from public/images/sellerlens/.

import type { Artifact } from "@/lib/artifact-types";

export const sellerlens: Artifact = {
  frontmatter: {
    slug: "sellerlens",
    type: "product",
    eyebrow: "Investigation",
    title: "SellerLens",
    subtitle:
      "A marketplace listing is a scoring problem before it is a writing problem.",
    status: "shipped",
    readTime: "9 min",
    publishedAt: "2026-07-23",
    updatedAt: "2026-08-08",
    summary:
      "A marketplace intelligence platform that helps e-commerce sellers optimize listings, pricing, and catalog quality across 4 product modules and a 100-point deterministic scoring engine, benchmarking 1000+ marketplace products and cutting listing-optimization time by ~80%.",
    coverImage: {
      src: "/images/sellerlens/dashboard.png",
      alt: "SellerLens dashboard showing listing quality score, sales, and product overview",
    },
    metadata: [
      { label: "Category", value: "Product" },
      { label: "Status", value: "Shipped, MVP" },
      { label: "Role", value: "Solo builder" },
      { label: "Tech stack", value: "Next.js, TypeScript, Gemini API, Supabase (Postgres), Recharts" },
      { label: "Timeline", value: " ~2 weeks" },
      { label: "Scope", value: "4 modules, 100-point scoring engine, 1000+ products benchmarked" },
      { label: "Read time", value: "9 min" },
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
      text: "Most AI tools built for e-commerce sellers work the same way: type a product into a box, get back a rewritten title and description. That solves a writing problem. It doesn't tell a seller why their listing is underperforming, whether their price is actually competitive, or what to fix first.",
    },
    {
      type: "paragraph",
      id: "p-context-2",
      text: "SellerLens was built around a different question: what would an internal marketplace optimization tool look like if a team at Meesho, Amazon, Flipkart, or Shopify built it for their sellers? That meant treating AI as a reasoning layer on top of structured marketplace intelligence, not as the product itself.",
    },
    {
      type: "insightCallout",
      id: "callout-context",
      text: "AI never invents a score. Listing quality, pricing competitiveness, and diagnostics are all computed deterministically first. Gemini's job is to explain and rewrite, not to decide.",
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
      id: "decision-scoring",
      assumed: "Let the LLM generate a quality or competitiveness score directly, since it can reason over the listing text.",
      found: "LLM-generated scores aren't consistent, repeatable, or explainable across runs. A seller can't act on a number that might change if you ask again.",
      changed: "Built a rule-based, 100-point deterministic listing quality engine, evaluating title quality, keyword presence, category relevance, description completeness, and attribute coverage in code. Gemini explains the score after it's computed, it never produces it.",
    },
    {
      type: "decision",
      id: "decision-data",
      assumed: "Live scraping of Meesho, Flipkart, or Amazon would give the most realistic competitive benchmarking.",
      found: "Live scraping ran into API unavailability, legal exposure, and rate limits, none of which are solvable at MVP speed, and none of which are necessary to prove the recommendation logic works.",
      changed: "Seeded a simulated marketplace dataset of 1000+ products across categories like Women's Fashion, Men's Fashion, Beauty, Home, Kitchen, Electronics, and Footwear, giving deterministic, reproducible benchmarking instead of a live feed that could change out from under a demo.",
    },
    {
      type: "decision",
      id: "decision-approval",
      assumed: "Once Gemini generates an optimized title and description, apply it automatically, that's the fastest path to value.",
      found: "Auto-overwriting a seller's live listing removes their ability to catch a bad rewrite before it goes live, and erodes trust the moment one recommendation is wrong.",
      changed: "Every recommendation requires explicit seller approval, an 'Accept' step, before it's persisted to the database. Nothing is auto-published. Every generation is logged to `ai_recommendations` for a full audit trail.",
    },
    {
      type: "decision",
      id: "decision-workflow",
      assumed: "A Chrome extension for one-click optimization inside Seller Central would be the strongest differentiator to build first.",
      found: "Shipping an extension before the underlying recommendation quality was proven would mean optimizing for workflow convenience on top of a system nobody had validated yet.",
      changed: "Built a standalone SaaS product first, dashboard, optimizer, pricing, diagnostics, deferring the extension to a later phase once recommendation quality itself is the proven part.",
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
      text: "SellerLens ships 4 product modules: a Dashboard summarizing listing quality and sales at a glance, an AI Listing Optimizer that rewrites titles and descriptions against a before/after score, a Pricing Intelligence tool that benchmarks a seller's price against the category, and Product Diagnostics that explains why a listing is underperforming and what to fix first.",
    },
    {
      type: "figure",
      id: "figure-dashboard",
      src: "/images/sellerlens/dashboard.png",
      alt: "SellerLens dashboard showing product count, listing quality score, sales, and a seasonal opportunity banner",
      caption: "Dashboard. Listing quality, live sales lift, and a seasonal demand nudge, in one view.",
      figureNumber: 1,
    },
    {
      type: "framework",
      id: "framework-architecture",
      heading: "System architecture",
      nodes: [
        {
          id: "node-1",
          label: "Frontend (Next.js)",
          takeaway: "Dashboard, Optimizer, Pricing, and Diagnostics, all built on the App Router with TypeScript and Tailwind.",
        },
        {
          id: "node-2",
          label: "API layer",
          takeaway: "3 dedicated routes, /api/optimize, /api/pricing, /api/diagnostics, each returning structured JSON.",
        },
        {
          id: "node-3",
          label: "Business logic layer",
          takeaway: "Deterministic scoring, pricing comparisons, and trend evaluation computed in code before any AI call.",
        },
        {
          id: "node-4",
          label: "Marketplace intelligence engine",
          takeaway: "Reasons over 1000+ seeded competitor products, benchmarking price, rating, reviews, and keywords.",
        },
        {
          id: "node-5",
          label: "Gemini",
          takeaway: "Generates the optimized title, description, and keywords, and explains the diagnosis, never the score itself.",
        },
        {
          id: "node-6",
          label: "Supabase (Postgres)",
          takeaway: "Persists products, recommendations, and an audit trail of every AI generation.",
        },
      ],
    },
    {
      type: "figure",
      id: "figure-optimizer",
      src: "/images/sellerlens/optimizer.png",
      alt: "SellerLens AI Listing Optimizer showing a before/after listing score jump from 12 to 76",
      caption: "Optimizer. A generic 'Mens Kurta' listing rewritten with a specific title, description, and keyword set, scoring jumps from 12 to 76.",
      figureNumber: 2,
    },
    {
      type: "figure",
      id: "figure-pricing",
      src: "/images/sellerlens/pricing.png",
      alt: "SellerLens Pricing Intelligence comparing a seller's price against category average and best price",
      caption: "Pricing Intelligence. A seller's ₹699 price checked against a ₹865 category average and a ₹767 recommended price.",
      figureNumber: 3,
    },
    {
      type: "figure",
      id: "figure-diagnostics",
      src: "/images/sellerlens/diagnostics.png",
      alt: "SellerLens Diagnostics explaining what's wrong with a listing and prioritized fixes",
      caption: "Diagnostics. Root-cause analysis with prioritized, ranked fixes, not just a list of problems.",
      figureNumber: 4,
    },
    {
      type: "paragraph",
      id: "p-product-2",
      text: "Under the hood, the platform runs on a normalized schema built around marketplace workflows rather than simple CRUD: users, products, marketplace_data, ai_recommendations, category_trends, and analytics_events, 6 tables in total, with every AI generation logged for auditability.",
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
      text: "AI is a capability layered on top of the product, not the product itself. Recommendations should be evidence-backed and explainable, a seller should be able to ask why a recommendation exists, based on what, and what impact to expect, not just accept a black box. Every action stays reversible, nothing auto-publishes. And the product optimizes workflows end to end rather than isolated screens, discoverability, pricing, and diagnostics all read from the same underlying listing data.",
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
          label: "Product modules",
          value: "4",
          methodology: "Dashboard, Listing Optimizer, Pricing Intelligence, Product Diagnostics.",
        },
        {
          label: "Listing quality engine",
          value: "100-point",
          methodology: "Deterministic, rule-based score computed in code from title quality, keyword presence, category relevance, description completeness, and attribute coverage.",
        },
        {
          label: "Marketplace products benchmarked",
          value: "1000+",
          methodology: "Simulated competitor dataset seeded across 7 categories, used for pricing and diagnostics benchmarking.",
        },
        {
          label: "LLM-powered workflows",
          value: "3 across 3 APIs",
          methodology: "/api/optimize, /api/pricing, /api/diagnostics, each combining deterministic business logic with a structured Gemini call.",
        },
      ],
    },
    {
      type: "evidence",
      id: "evidence-time-cut",
      label: "Listing-optimization time",
      value: "~80% reduction",
      source: "Rule-based scoring + one-click AI rewrite vs. manual title/description editing",
      interpretation: "Combining deterministic scoring with a single Gemini-generated rewrite collapses what would otherwise be manual, trial-and-error title and description editing into one review-and-accept step.",
    },

    {
      type: "sectionHeading",
      id: "sec-constraints",
      anchor: "constraints",
      index: "06",
      heading: "Constraints",
    },
    {
      type: "paragraph",
      id: "p-constraints-1",
      text: "As an MVP, SellerLens intentionally operates without several things a production version would need: no Meesho, Flipkart, or Amazon Seller API access, no real seller behavioral or historical conversion data, no inventory system, no image embeddings, and no real-time search trend data. These are stated constraints, not oversights, marketplace data is simulated by design so the recommendation and scoring logic could be validated independently of API access, legality, and rate limits.",
    },

    {
      type: "sectionHeading",
      id: "sec-learnings",
      anchor: "learnings",
      index: "07",
      heading: "Learnings",
    },
    {
      type: "paragraph",
      id: "p-learnings-1",
      text: "Separating the deterministic layer from the AI layer early paid off repeatedly. Because listing scores, pricing comparisons, and trend evaluation all live in business logic rather than in a prompt, every number on screen is reproducible and explainable, which matters more for a product about seller trust than for almost any other kind of AI feature.",
    },
    {
      type: "paragraph",
      id: "p-learnings-2",
      text: "The approval-before-publish decision came from the same place as ApplyOS's persistence lesson: reliability and control aren't polish steps you add later, they're what make a user willing to depend on the tool for something real. A seller who has one listing silently overwritten by AI won't come back to try it again.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "Marketplace benchmarking data is simulated and seeded, not scraped live, due to API unavailability, legal considerations, and rate limits at MVP stage. See Constraints.",
    },
  ],

  related: [
    {
      slug: "smartcart",
      type: "product",
      title: "SmartCart",
      reason: "Related build",
    },
    {
      slug: "meesho-business-strategy-memo",
      type: "research",
      title: "Meesho: Marketplace Growth, Seller Quality & Monetization",
      reason: "Related dispatch",
    },
  ],
};