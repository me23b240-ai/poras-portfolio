// content/work/applyos.ts
//
// Rewritten against confirmed resume-bullet figures: 20+ beta users,
// 38% retention, 120+ Collective resources across 10+ categories,
// 4-module platform, 20+ user conversations driving the pivot, 4 UI
// redesigns. Removed the old file's percentage breakdown that was
// calculated against a 30-user denominator — that math no longer holds
// against 20+, and no verified breakdown exists for the new number, so
// the Validation section now states only what's confirmed. Genuine gaps
// remain [PLACEHOLDER]; replace before shipping.

import type { Artifact } from "@/lib/artifact-types";

export const applyos: Artifact = {
  frontmatter: {
    slug: "applyos",
    type: "product",
    eyebrow: "Investigation",
    title: "ApplyOS",
    subtitle:
      "Applying to internships is a tracking problem before it is a writing problem.",
    status: "shipped",
    readTime: "10 min",
    publishedAt: "2026-06-27",
    updatedAt: "2026-08-07",
    summary:
      "A 4-module operating system for the internship application process. Started as an AI resume tailoring tool, became a workspace for tracking applications, scoring resumes against real job descriptions, and sharing resources across a community of students, validated by 20+ beta users with 38% retention.",
    coverImage: {
      src: "/images/applyos/cover.jpg",
      alt: "ApplyOS landing page, showing the ATS score panel and the operating system positioning",
    },
    metadata: [
      { label: "Category", value: "Product" },
      { label: "Status", value: "Shipped, actively evolving" },
      { label: "Role", value: "Solo builder" },
      { label: "Tech stack", value: "Next.js, Groq API, pdf-lib, Supabase, Vercel" },
      { label: "Timeline", value: "~2 months from first commit to now" },
      { label: "Beta cohort", value: "20+ users, 38% retention" },
      { label: "Read time", value: "10 min" },
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
      text: "Internship applications were fragmented across LinkedIn, Wellfound, company career pages, and spreadsheets. Every application meant editing a resume by hand, saving another PDF with a slightly different filename, applying, then losing track of whether it had actually been sent or followed up on.",
    },
    {
      type: "paragraph",
      id: "p-context-2",
      text: "There was no single place to see the whole process. Resume tailoring was repetitive. Tracking lived in notes or spreadsheets, if it existed at all.",
    },
    {
      type: "insightCallout",
      id: "callout-context",
      text: "The first version of the idea was an AI resume builder. That was the wrong frame. The real problem was that the process itself had no home.",
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
      id: "decision-1",
      assumed: "An AI resume builder was the product. Faster tailoring would solve the core problem.",
      found: "20+ user conversations surfaced that AI-generated resumes were only one step in a longer workflow. The bigger pain was not having anywhere to track what had been sent, to whom, and what needed follow-up.",
      changed: "Repositioned ApplyOS as a 4-module operating system for the internship process: Resume Studio, Application Tracker, Dashboard, and Internship Collective. AI became one accelerating capability inside a larger workflow, not the product itself.",
    },
    {
      type: "decision",
      id: "decision-2",
      assumed: "React state was enough for an early version. Persistence could wait until the workflow was proven.",
      found: "Beta feedback confirmed this directly, users lost tailored resumes, tracker state, or full portfolio setups to a refresh or cache clear. That was not an edge case, it was a trust problem, users stopped relying on the tool for anything they could not afford to lose.",
      changed: "Adopted Supabase for persistent storage and planned authentication as the next release, treating reliability as a prerequisite for the product to mean anything, not a later polish step.",
    },
    {
      type: "decision",
      id: "decision-3",
      assumed: "The product was a resume and tracking tool. Anything else was scope creep.",
      found: "No single beta user asked for a Collective by name. But across the beta conversations, the same missing category kept surfacing from different angles, interview experiences, recruiter contacts, company-specific tips, resume benchmarks, a general sense of everything scattered. Several different complaint labels, one real gap.",
      changed: "Built the Internship Collective as a dedicated section rather than folding requested content into the dashboard, treating the pooled signal as one roadmap item instead of several small feature requests. It has since grown to 120+ resources across 10+ categories, driving network-effect growth as more students contribute.",
    },
    {
      type: "decision",
      id: "decision-4",
      assumed: "Every shared resource could live as a card on the homepage, the same way the first few did.",
      found: "That pattern does not scale. A homepage cannot hold a growing, searchable knowledge base without becoming unusable, and dashboard clutter was already one of the most cited complaints in the same beta round.",
      changed: "Split the Internship Collective into a homepage preview, featured content and search, and a dedicated page with full filtering, sorting, and a table view for the complete database.",
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
      text: "ApplyOS has four connected modules. A resume studio that scores a resume against a real job description and returns an ATS score with a section-level breakdown. An application tracker that replaces the spreadsheet the whole project started from. A dashboard that summarizes the pipeline, applications, interviews, offers, response rate, at a glance. And the Internship Collective, a searchable, filterable base of resources contributed by students, not owned by one person.",
    },
    {
      type: "figure",
      id: "figure-cover",
      src: "/images/applyos/cover.jpg",
      alt: "ApplyOS landing page showing the live ATS score example and core positioning",
      caption: "The current landing screen. The ATS score panel on the right is a live example, not a mockup.",
      figureNumber: 1,
    },
    {
      type: "framework",
      id: "framework-resume-pipeline",
      heading: "The resume tailoring workflow",
      nodes: [
        {
          id: "node-1",
          label: "Upload",
          takeaway: "Resume PDF uploaded, parsed on the backend into plain text.",
        },
        {
          id: "node-2",
          label: "Job description",
          takeaway: "Pasted alongside the parsed resume text.",
        },
        {
          id: "node-3",
          label: "Score",
          takeaway: "Groq API returns an ATS score with a skills and experience breakdown, not just one number.",
        },
        {
          id: "node-4",
          label: "Generate",
          takeaway: "Formatted into a clean PDF with pdf-lib, consistent spacing regardless of input length.",
        },
        {
          id: "node-5",
          label: "Track",
          takeaway: "Logged into the tracker with company, role, and status, so nothing depends on memory afterward.",
        },
      ],
    },
    {
      type: "figure",
      id: "figure-tracker",
      src: "/images/applyos/tracker.jpg",
      alt: "ApplyOS Job Tracker showing application stats and the add application form",
      caption: "The tracker this whole project was actually built to replace: a spreadsheet.",
      figureNumber: 2,
    },
    {
      type: "figure",
      id: "figure-resumestudio",
      src: "/images/applyos/resumestudio.jpg",
      alt: "ApplyOS AI Resume Studio showing keyword suggestions against a job description",
      caption: "Resume Studio. Reads a resume against a real job description and suggests specific keyword gaps, not generic advice.",
      figureNumber: 3,
    },
    {
      type: "paragraph",
      id: "p-product-2",
      text: "The Internship Collective grew out of a pattern in the beta data, not a single request. Students keep finding useful resources, resume templates, recruiter contacts, interview notes, that disappear into private notes, WhatsApp groups, or a single LinkedIn post nobody can find again later. ApplyOS turned that into a shared, searchable base instead of private knowledge.",
    },
    {
      type: "figure",
      id: "figure-collective",
      src: "/images/applyos/collective.jpg",
      alt: "Internship Collective page showing filterable, searchable community resources",
      caption: "The Collective, built by students for students, filterable by category instead of a flat card list.",
      figureNumber: 4,
    },

    {
      type: "sectionHeading",
      id: "sec-hypotheses",
      anchor: "hypotheses",
      index: "04",
      heading: "Hypotheses",
    },
    {
      type: "paragraph",
      id: "p-hyp-1",
      text: "Students don't need another resume builder, they need a better application workflow. Most already have Google Docs, Overleaf, Canva, and existing templates, so the real friction isn't creating resumes, it's managing everything around applying. 20+ conversations consistently pointed toward tracking applications, remembering deadlines, and repeated tailoring as bigger pain points than resume design. Validated: ApplyOS became a workflow platform rather than a document editor.",
    },
    {
      type: "paragraph",
      id: "p-hyp-2",
      text: "AI should reduce repetitive work, not replace decisions. Instead of generating a resume from scratch, AI identifies missing keywords, tailors existing experience, and speeds up editing, while the user still owns the final resume. Validated: AI became one feature inside the workflow rather than the product itself.",
    },
    {
      type: "paragraph",
      id: "p-hyp-3",
      text: "Community knowledge is more valuable than static guides. Students rarely trust generic blog posts, they ask seniors, friends, Discord, Reddit, WhatsApp groups. The best information already exists, it's just fragmented. This directly led to the Internship Collective, now at 120+ resources across 10+ categories.",
    },
    {
      type: "insightCallout",
      id: "callout-hypotheses",
      text: "Students prefer one workspace. Instead of moving between Docs, LinkedIn, a spreadsheet, ChatGPT, Reddit, GitHub, a resume PDF, and email, they should stay inside one application. That became the long-term vision.",
    },

    {
      type: "sectionHeading",
      id: "sec-tradeoffs",
      anchor: "tradeoffs",
      index: "05",
      heading: "Tradeoffs",
    },
    {
      type: "decision",
      id: "tradeoff-auth",
      assumed: "Authentication (Google login) should ship early to make the product feel complete.",
      found: "Before validating the core workflow, authentication only adds friction. A single-user, local-first workflow was enough for early versions.",
      changed: "Postponed authentication until the Internship Collective required persistent, per-user contributions, at which point it became necessary rather than optional polish.",
    },
    {
      type: "decision",
      id: "tradeoff-extension",
      assumed: "A Chrome extension to save internships directly from LinkedIn would be a strong differentiator.",
      found: "It would dramatically increase engineering complexity before the core workflow itself was validated.",
      changed: "Deferred to a later automation phase of the roadmap.",
    },
    {
      type: "decision",
      id: "tradeoff-scraping",
      assumed: "Automatic internship aggregation via job scraping would make the product more valuable on day one.",
      found: "Scraping requires ongoing API maintenance and carries legal considerations disproportionate to early validation needs.",
      changed: "Focused instead on organizing opportunities users already found, rather than sourcing new ones automatically.",
    },
    {
      type: "decision",
      id: "tradeoff-oneclick",
      assumed: "One-click apply would be a flashy, demo-friendly feature.",
      found: "Every company runs a different hiring system, making this heavily dependent on third-party ATS behavior for comparatively little validated demand.",
      changed: "Rejected for now. Kept engineering effort on the core tracked-and-tailored workflow instead.",
    },
    {
      type: "paragraph",
      id: "p-tradeoffs-more",
      text: "Other ideas intentionally postponed for the same reason, keeping the core workflow focused before adding surface area: browser autofill (different ATS systems behave differently, high maintenance burden), collaboration and shared trackers (most users work independently, doesn't solve the primary pain point), notifications for deadlines and interviews (core workflow needed validation first), and a native mobile app (research showed students primarily apply from laptops, so desktop-first made more sense).",
    },

    {
      type: "sectionHeading",
      id: "sec-principles",
      anchor: "principles",
      index: "06",
      heading: "Principles",
    },
    {
      type: "paragraph",
      id: "p-principles-1",
      text: "A few rules held across every stage of building this. AI accelerates, it does not replace judgment, the tailored resume and the ATS score are a starting point a person still reviews. The surrounding workflow usually creates more value than the AI feature itself. Start simple and postpone what is not load bearing yet, authentication waited until persistence was proven necessary, not the other way around. Every feature traces back to an actual pain point, ideally one confirmed across more than one user conversation and in more than one way.",
    },

    {
      type: "sectionHeading",
      id: "sec-results",
      anchor: "results",
      index: "07",
      heading: "Results",
    },
    {
      type: "metrics",
      id: "metrics-1",
      metrics: [
        {
          label: "Beta users",
          value: "20+",
          methodology: "Structured feedback and conversations collected across a beta cohort spanning IIT SWE aspirants, Tier-2 and Tier-3 college students, and PM aspirants.",
        },
        {
          label: "Retention",
          value: "38%",
          methodology: "[PLACEHOLDER: confirm exact definition, e.g. users returning to the tracker within N days of first use]",
        },
        {
          label: "Resources in the Collective",
          value: "120+",
          methodology: "Live count at time of writing across 10+ categories, will grow as more students contribute. Update this figure when it materially changes.",
        },
        {
          label: "UI redesigns",
          value: "4",
          methodology: "From a utility-focused first dashboard through a premium, Linear/Vercel/Raycast/Notion-inspired interactive landing experience.",
        },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-validation",
      anchor: "validation",
      index: "08",
      heading: "Validation",
    },
    {
      type: "paragraph",
      id: "p-validation-1",
      text: "Across 20+ user conversations, the same bottleneck kept surfacing independent of who was asked, students weren't struggling to write resumes, they were struggling to manage the process around applying. That signal is what drove the pivot from a single-purpose resume tool to a 4-module operating system, and it's reflected in the product's 38% retention among beta users.",
    },
    {
      type: "insightCallout",
      id: "callout-validation",
      text: "The strongest signal wasn't any single request. It was that unrelated user segments, IIT SWE aspirants, Tier-3 college designers, PM aspirants, kept independently describing the same structural gaps, fragmented resources and no persistence, in completely different language. That convergence across dissimilar users is what justified treating both as roadmap items rather than one-off fixes.",
    },
    {
      type: "paragraph",
      id: "p-validation-2",
      text: "The largest recurring theme was resource discovery, interview tips, company information, recruiter data, and a general sense that everything was scattered. Dashboard clutter and navigation came up repeatedly as well. Pooled together, resource discovery, community sharing, interview experiences, resume benchmarking, and recruiter data, several distinct complaint labels all pointed at the same missing category, which became the Internship Collective.",
    },

    {
      type: "sectionHeading",
      id: "sec-learnings",
      anchor: "learnings",
      index: "09",
      heading: "Learnings",
    },
    {
      type: "paragraph",
      id: "p-learnings-1",
      text: "Deployment deserved as much attention as development. Builds that succeeded locally failed in production over missing environment variables, and a PDF generation bug only surfaced on Vercel because the response needed to be returned as a proper Buffer, not the format that worked fine on localhost.",
    },
    {
      type: "paragraph",
      id: "p-learnings-2",
      text: "The bigger lesson came from reading the feedback side by side instead of reacting to each conversation individually. No user asked for a Collective. No user asked for persistent storage by name. But when several different complaints kept tracing back to one structural gap, and multiple unrelated users independently lost trust in the product over the same technical shortcut, that pattern was more reliable than any single request, and it's the difference between shipping a feature list and shipping a roadmap.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "Beta feedback collected from 20+ users across structured conversations and a rating distribution. Full dataset available on request.",
    },
  ],

  related: [
    {
      slug: "ai-seller-assistant",
      type: "product",
      title: "AI Seller Assistant",
      reason: "Next investigation",
    },
    {
      slug: "meesho-category-expansion",
      type: "research",
      title: "Meesho: category expansion is a sequencing problem",
      reason: "Related dispatch",
    },
  ],
};