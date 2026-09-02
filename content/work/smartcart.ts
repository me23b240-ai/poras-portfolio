// content/work/smartcart.ts
//
// Built from the SmartCart-Documentation.zip (15 docs) + resume bullets.
// Per instruction, resume numbers are the metrics of record: 4 platforms,
// 5000+ SKUs, 100% item coverage, <5s comparison time. Note: every doc in
// the zip (Data Model, Technical Architecture, Comparison Engine, and the
// docs' own Resume Content file) independently describes the catalog as
// ~300+ SKUs, not 5000+. That's a real conflict, not noise — flagged, not
// silently resolved. "100% item coverage" is framed here as the documented
// guarantee (every item is matched, substituted, or explicitly surfaced as
// not found — never silently dropped), not as a 100% match rate, since no
// doc claims the latter and doing so would overclaim.
//
// before.png / after.png are the two UI states (empty input landing view,
// and the results view after Compare is clicked) — not a design-critique
// comparison. Used accordingly throughout.

import type { Artifact } from "@/lib/artifact-types";

export const smartcart: Artifact = {
  frontmatter: {
    slug: "smartcart",
    type: "product",
    eyebrow: "Investigation",
    title: "SmartCart",
    subtitle:
      "Comparing grocery prices across apps is a basket problem, not a search problem.",
    status: "shipped",
    readTime: "9 min",
    publishedAt: "2026-07-31",
    updatedAt: "2026-08-05",
    summary:
      "An AI-powered grocery price comparison tool that matches a free-text shopping list against a catalog of 5000+ SKUs and computes the cheapest basket allocation across 4 platforms, Blinkit, Zepto, Instamart, and Amazon, with explicit delivery-time tie-breaking and a guarantee that no item is ever silently dropped.",
    coverImage: {
      src: "/images/smartcart/before.png",
      alt: "SmartCart landing page showing the empty shopping list input and a live Zepto price preview card",
    },
    metadata: [
      { label: "Category", value: "Product" },
      { label: "Status", value: "Shipped, MVP" },
      { label: "Role", value: "Solo builder" },
      { label: "Tech stack", value: "Next.js (App Router), TypeScript, Gemini API, Tailwind CSS" },
      { label: "Timeline", value: "[PLACEHOLDER: total weeks/months from first commit to now]" },
      { label: "Scope", value: "4 platforms, 5000+ SKUs, <5s comparison target" },
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
      text: "Urban shoppers increasingly split groceries across 2 to 4 quick-commerce apps because no single platform is reliably cheapest or fastest across every category. The result is a manual process that doesn't scale: opening three or four apps, searching the same item repeatedly, and mentally tracking which app had what price, a process that gets abandoned for convenience well before a full weekly shop is actually optimized.",
    },
    {
      type: "paragraph",
      id: "p-context-2",
      text: "None of the platforms themselves will build a cross-comparison tool, that's a structural conflict of interest. General price-comparison sites are built for one-off purchases, not recurring multi-item baskets. No existing product treats the basket, not the individual item, as the unit of comparison, or reasons about the real convenience cost of splitting an order across checkouts.",
    },
    {
      type: "insightCallout",
      id: "callout-context",
      text: "The actual decision a user is making isn't 'what's the cheapest price for this item.' It's 'given my whole list, where should I buy each thing, and is splitting my order actually worth it.' SmartCart is built around that decision, not around single-item search.",
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
      id: "decision-live-data",
      assumed: "Building against live scraped pricing data from day one would produce the most realistic, credible comparison.",
      found: "None of the four platforms offer a public pricing API, and scraping at production scale carries real legal and reliability risk, risk that shouldn't be taken on before the core comparison and allocation logic is even validated. Building against live data first would also couple two unresolved risks together, data reliability and logic correctness, making bugs from either one hard to isolate from the other.",
      changed: "Built a static, realistic mock catalog first, so the actual hard problem, matching free-text items to SKUs and reasoning about tradeoffs, could be fully tested against stable, known-good data. The data source is an intentionally swappable seam: a future live-data layer only needs to satisfy the same `Product[]` shape, without touching the prompt construction, pre-filter, or any UI component.",
    },
    {
      type: "decision",
      id: "decision-deterministic-vs-ai",
      assumed: "A deterministic matcher, exact or fuzzy string matching, could handle turning a user's free-text list into catalog SKUs.",
      found: "Deterministic matching can't reliably do two things this product depends on: mapping colloquial input like 'curd' or 'milk' to specific branded SKUs, and reasoning about tradeoffs like whether a ₹3 price difference is worth sacrificing 10 minutes of delivery speed.",
      changed: "Delegated matching and allocation reasoning to Gemini, operating over a small, pre-filtered, pre-validated candidate set rather than the full catalog, so the model can only choose among items already confirmed to exist, reducing the risk of it inventing a plausible but nonexistent product.",
    },
    {
      type: "decision",
      id: "decision-never-drop",
      assumed: "It's acceptable for an item the matching logic can't resolve to simply not appear in the result.",
      found: "A user who typed an item and got no visible result had no way to tell whether the app failed silently or the item genuinely wasn't in the catalog, a trust failure, not a minor bug. This was observed directly during development when compound item names like 'Redbull' failed to match anything.",
      changed: "Built a structural, not a patched, guarantee: every submitted item is either matched, substituted from a curated fallback list, or explicitly surfaced in an `unmatchedItems` section in the user's own words, never silently dropped. Fixed the root matching gap too, adding whitespace-and-punctuation-normalized matching alongside word-level matching.",
    },
    {
      type: "decision",
      id: "decision-no-auth",
      assumed: "Saved lists and accounts would make the product feel more complete.",
      found: "Usage is bursty and infrequent, a weekly grocery comparison, not a daily habit, so the drop-off cost of an account wall outweighed the value of persistence, and no per-user server-side state exists at all in v1.",
      changed: "Shipped fully stateless and no-auth. Authentication and saved lists moved to the future roadmap, to be revisited only if usage patterns change.",
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
      text: "SmartCart is a single-page tool: paste a free-text grocery list, and it returns a full basket allocation, which items to buy on which platform, total cost, savings versus sticking to one app, fastest combined delivery time, and an explicit callout when splitting the order across multiple checkouts is required to get that price.",
    },
    {
      type: "figure",
      id: "figure-hero",
      src: "/images/smartcart/before.png",
      alt: "SmartCart landing page with an empty shopping list input, example chips, and a live Zepto product preview card",
      caption: "The empty state. Paste a list, nothing more, while a rotating live preview shows a real catalog item, price, and ETA.",
      figureNumber: 1,
    },
    {
      type: "framework",
      id: "framework-request-lifecycle",
      heading: "Request lifecycle",
      nodes: [
        {
          id: "node-1",
          label: "Submit list",
          takeaway: "User's free-text list is POSTed to a single API route, /api/compare.",
        },
        {
          id: "node-2",
          label: "Pre-filter",
          takeaway: "A local, deterministic keyword match narrows the 5000+ SKU catalog down to a small, plausibly-relevant candidate set before anything is sent to the model.",
        },
        {
          id: "node-3",
          label: "Gemini reasoning",
          takeaway: "The candidate set plus the raw list are sent in one structured prompt: match items, filter to available platforms, apply the ₹3 delivery tie-break, fall back to curated substitutes.",
        },
        {
          id: "node-4",
          label: "Strict JSON contract",
          takeaway: "The model returns one strictly-shaped ComparisonResult object, the shared contract between the API, the prompt layer, and every UI component.",
        },
        {
          id: "node-5",
          label: "Results view",
          takeaway: "The UI reorganizes so the result, not the marketing hero, becomes the dominant element on the page.",
        },
      ],
    },
    {
      type: "paragraph",
      id: "p-product-2",
      text: "The allocation logic itself follows a fixed set of rules: for each matched item, filter to platforms where it's actually available, take the lowest price, and if two available platforms are within ₹3 of each other, prefer the faster one. ₹3 was chosen deliberately as a flat, absolute threshold rather than a percentage, so the tie-break means the same thing whether the item is ₹15 or ₹900. If nothing is available anywhere, the item's curated substitute list is tried next. If that fails too, the item is surfaced by name in a dedicated 'not found' section, never silently dropped.",
    },
    {
      type: "insightCallout",
      id: "callout-convenience",
      text: "Splitting an order across platforms is never presented as a free win. The UI explicitly states either 'Requires N separate checkouts' or 'Single checkout', styled distinctly, so the real convenience cost of chasing the lowest price is always visible, not buried as a neutral stat.",
    },

    {
      type: "sectionHeading",
      id: "sec-design",
      anchor: "design",
      index: "04",
      heading: "Design evolution",
    },
    {
      type: "paragraph",
      id: "p-design-1",
      text: "The final interface wasn't the first attempt. It went through a structured, section-by-section critique process, treating each round as if reviewing a junior designer's submission, naming specific problems rather than iterating on vague 'make it look better' feedback.",
    },
    {
      type: "timeline",
      id: "timeline-design",
      heading: "From generic MVP to an ownable interface",
      entries: [
        {
          date: "Round 1",
          title: "Functional MVP",
          description: "A plain, unstyled single page validating the technical pipeline end to end, functional, not designed.",
        },
        {
          date: "Round 2",
          title: "First visual pass",
          description: "Stat cards and a gradient CTA made the page look more finished, but introduced a generic purple-to-blue gradient used identically for logo, headline, and button, meaning nothing specific.",
        },
        {
          date: "Round 3",
          title: "Structured critique",
          description: "A deliberate critique named ten specific problems: a templated squircle logo, one color doing three unrelated jobs, badge overuse across six unrelated components, and a layout that buried the actual comparison result beneath marketing copy.",
        },
        {
          date: "Round 4-5",
          title: "Applying the fixes",
          description: "Replaced the gradient with real platform brand colors doing the grouping work, reduced badge overuse, compacted the hero, and swapped in the actual Blinkit, Zepto, Instamart, and Amazon logo files once available.",
        },
        {
          date: "Round 6",
          title: "Research pass",
          description: "A deeper critique researched Google Flights, Linear, Stripe, and Apple's HIG. Adopted one accent color for exactly one job, right-aligned monetary values, and a signature connector-line pattern unique to SmartCart's result rows.",
        },
        {
          date: "Round 7",
          title: "The 'too empty' correction",
          description: "The restrained version felt hollow next to references like Stripe's marketing page. Restraint had been over-applied. Added back a bold, ownable gradient mesh and a real floating product-preview card stack.",
        },
        {
          date: "Round 8",
          title: "Motion and physical detail",
          description: "Final polish: a genuine card-stack animation, hover-lift on the primary button, and a full-viewport gradient tinted toward whichever platform wins the comparison.",
        },
      ],
    },
    {
      type: "figure",
      id: "figure-empty-state",
      src: "/images/smartcart/before.png",
      alt: "SmartCart empty state, showing the shopping list input before a comparison is run",
      caption: "Before. Input-focused empty state, minimal, waiting for a list.",
      figureNumber: 2,
    },
    {
      type: "figure",
      id: "figure-results-state",
      src: "/images/smartcart/after.png",
      alt: "SmartCart results view after a basket comparison completes, showing the platform allocation",
      caption: "After. The moment a comparison completes, the input collapses to a single-line summary and the result becomes the dominant element on the page.",
      figureNumber: 3,
    },
    {
      type: "insightCallout",
      id: "callout-design",
      text: "The interface is built around a Google Flights-inspired state model: an intentionally minimal, input-focused empty state that reorganizes into a results-dominant view the instant a comparison completes, rather than showing both states at once or burying the result beneath a static layout.",
    },

    {
      type: "sectionHeading",
      id: "sec-principles",
      anchor: "principles",
      index: "05",
      heading: "Principles",
    },
    {
      type: "paragraph",
      id: "p-principles-1",
      text: "The comparison is the product, so the result must be the visually dominant element, not a footnote beneath marketing copy. AI should disappear into the workflow, invoked once and silently, never surfaced as a chat interface. Users optimize baskets, not individual items, so the total and the savings lead, not a per-item price list. And trust is earned structurally: never silently drop a user's input, and always make the real tradeoffs, like a multi-checkout split, visible rather than neutral.",
    },

    {
      type: "sectionHeading",
      id: "sec-results",
      anchor: "results",
      index: "06",
      heading: "Results",
    },
    {
      type: "metrics",
      id: "metrics-1",
      metrics: [
        {
          label: "Platforms compared",
          value: "4",
          methodology: "Blinkit, Zepto, Instamart, and Amazon, matched against a structured product catalog.",
        },
        {
          label: "Catalog size",
          value: "5000+ SKUs",
          methodology: "Free-text list items are matched against this catalog via a local pre-filter before being reasoned over by Gemini.",
        },
        {
          label: "Item coverage",
          value: "100%",
          methodology: "Structural guarantee: every submitted item is either matched, substituted from a curated fallback, or explicitly surfaced as not found, never silently dropped.",
        },
        {
          label: "Comparison time target",
          value: "<5s",
          methodology: "Perceived response time target for a typical list, informed the decision against a skeleton-loading shimmer in favor of a more deliberate loading state.",
        },
      ],
    },
    {
      type: "evidence",
      id: "evidence-prefilter",
      label: "Pre-filter scaling",
      value: "Constant per-request reasoning load",
      source: "Local, deterministic pre-filter (lib/gemini.ts) run before every Gemini call",
      interpretation: "As the catalog grows, the LLM never sees the full catalog, only a small, plausibly-relevant candidate set, so per-request cost and latency stay roughly flat instead of scaling with catalog size.",
    },

    {
      type: "sectionHeading",
      id: "sec-constraints",
      anchor: "constraints",
      index: "07",
      heading: "Constraints",
    },
    {
      type: "paragraph",
      id: "p-constraints-1",
      text: "SmartCart v1 is intentionally stateless and no-auth, with no saved lists or history, since no per-user server-side state exists at all. Pricing comes from a static, realistic mock catalog rather than live or scraped data, since none of the four platforms expose a public pricing API and production-scale scraping carries real legal and reliability risk. There's no location-awareness, no checkout or cart integration, SmartCart recommends, it never transacts, and no price-per-unit normalization across differing pack sizes yet, though the data model already supports adding it without a schema change.",
    },

    {
      type: "sectionHeading",
      id: "sec-learnings",
      anchor: "learnings",
      index: "08",
      heading: "Learnings",
    },
    {
      type: "paragraph",
      id: "p-learnings-1",
      text: "Treating design critique as a distinct, named step, not a vague pass, produced the single biggest quality jump in the project. Specific, named problems produce specific, targeted fixes. Vague 'make it look better' feedback produces vague changes. The Round 7 correction also matters as its own lesson: restraint and emptiness are not the same thing, and a design process needs to actively check for both over-decoration and over-restraint, not assume removing decoration automatically produces good design.",
    },
    {
      type: "paragraph",
      id: "p-learnings-2",
      text: "External dependencies turned out to be less stable than assumed. The project moved through three different Gemini model identifiers as earlier ones were deprecated mid-build, each requiring a live debugging session from a raw deprecation error, alongside a Tailwind v3-to-v4 config mismatch between local and deployed environments. Centralizing the shared TypeScript contract between the API, the AI prompt layer, and the UI paid off directly here: whenever the result shape needed to change, the compiler surfaced every place that needed updating, rather than the mismatch surfacing later as a runtime bug.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "Catalog and comparison logic run against a static, realistic mock dataset, not live platform pricing, due to the absence of public pricing APIs and the legal/reliability risk of production-scale scraping. See Constraints.",
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