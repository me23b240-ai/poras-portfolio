// content/work/applyos.ts
//
// Updated with real screenshots, real beta feedback data (30 respondents),
// and real numbers. Remaining [PLACEHOLDER]s are genuine gaps, exact
// dates and total build timeline, that were never stated in our
// conversation. Replace those before shipping. The 30-user figure is
// the beta feedback respondent count specifically, confirm this matches
// your actual total user count before using "30" outside that context.

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
    readTime: "9 min",
    publishedAt: "2026-03-01",
    updatedAt: "[PLACEHOLDER: last real update date]",
    summary:
      "An operating system for the internship application process. Started as an AI resume tailoring tool, became a workspace for tracking applications, scoring resumes against real job descriptions, and sharing resources across a community of students, validated by structured beta feedback from 30 users.",
    coverImage: {
      src: "/images/applyos/cover.jpg",
      alt: "ApplyOS landing page, showing the ATS score panel and the operating system positioning",
    },
    metadata: [
      { label: "Category", value: "Product" },
      { label: "Status", value: "Shipped, actively evolving" },
      { label: "Role", value: "Solo builder" },
      { label: "Tech stack", value: "Next.js, Groq API, pdf-lib, Supabase, Vercel" },
      { label: "Timeline", value: "[PLACEHOLDER: total weeks/months from first commit to now]" },
      { label: "Beta cohort", value: "30 users" },
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
      found: "AI-generated resumes were only one step in a longer workflow. The bigger pain was not having anywhere to track what had been sent, to whom, and what needed follow-up.",
      changed: "Repositioned ApplyOS as an operating system for the internship process. AI became one accelerating capability inside a larger workflow, not the product itself.",
    },
    {
      type: "decision",
      id: "decision-2",
      assumed: "React state was enough for an early version. Persistence could wait until the workflow was proven.",
      found: "Beta feedback confirmed this directly. Three users lost tailored resumes, tracker state, or full portfolio setups to a refresh or cache clear. That was not an edge case, it was a trust problem, users stopped relying on the tool for anything they could not afford to lose.",
      changed: "Adopted Supabase for persistent storage and planned authentication as the next release, treating reliability as a prerequisite for the product to mean anything, not a later polish step.",
    },
    {
      type: "decision",
      id: "decision-3",
      assumed: "The product was a resume and tracking tool. Anything else was scope creep.",
      found: "No single beta user asked for a Collective by name. But across 30 responses, 13 independently described the same missing category from different angles, interview experiences, recruiter contacts, company-specific tips, resume benchmarks, a general sense of everything scattered. Five different complaint labels, one real gap.",
      changed: "Built the Internship Collective as a dedicated section rather than folding requested content into the dashboard, treating the pooled signal as one roadmap item instead of five small feature requests.",
    },
    {
      type: "decision",
      id: "decision-4",
      assumed: "Every shared resource could live as a card on the homepage, the same way the first few did.",
      found: "That pattern does not scale. A homepage cannot hold a growing, searchable knowledge base without becoming unusable, and dashboard clutter was already the single most cited complaint in the same beta round.",
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
      text: "ApplyOS has three connected parts. A resume studio that scores a resume against a real job description and returns an ATS score with a section-level breakdown. An application tracker that replaces the spreadsheet the whole project started from. And the Internship Collective, a searchable, filterable base of resources contributed by students, not owned by one person.",
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
      id: "sec-principles",
      anchor: "principles",
      index: "04",
      heading: "Principles",
    },
    {
      type: "paragraph",
      id: "p-principles-1",
      text: "A few rules held across every stage of building this. AI accelerates, it does not replace judgment, the tailored resume and the ATS score are a starting point a person still reviews. The surrounding workflow usually creates more value than the AI feature itself. Start simple and postpone what is not load bearing yet, authentication waited until persistence was proven necessary, not the other way around. Every feature traces back to an actual pain point, ideally one confirmed by more than one user in more than one way.",
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
          label: "Beta users surveyed",
          value: "30",
          methodology: "Structured feedback collected across a beta cohort spanning IIT SWE aspirants, Tier-2 and Tier-3 college students, and PM aspirants.",
        },
        {
          label: "Resources in the Collective",
          value: "58",
          methodology: "Live count at time of writing, will grow as more students contribute. Update this figure when it materially changes.",
        },
        {
          label: "4-star or higher",
          value: "70%",
          methodology: "15 four-star and 6 five-star ratings out of 30 total beta reviews.",
        },
      ],
    },

    {
      type: "sectionHeading",
      id: "sec-validation",
      anchor: "validation",
      index: "06",
      heading: "Validation",
    },
    {
      type: "paragraph",
      id: "p-validation-1",
      text: "Sentiment from the beta round was net positive but not uncritical, 20% rated the product 5 stars, 50% rated it 4 stars, and the remaining 30% split between 3 and 2 stars. The product clearly delivered on its core promise, resume tailoring and basic tracking, while leaving structural gaps that surfaced repeatedly across otherwise unrelated user segments.",
    },
    {
      type: "insightCallout",
      id: "callout-validation",
      text: "The strongest signal in the beta data was not any single low rating. It was that unrelated user segments, IIT SWE aspirants, Tier-3 college designers, PM aspirants, kept independently describing the same two structural gaps, fragmented resources and no persistence, in completely different language. That convergence across dissimilar users is what justified treating both as roadmap items rather than one-off bug fixes.",
    },
    {
      type: "paragraph",
      id: "p-validation-2",
      text: "Grouped from all 30 entries, the largest single theme was resource discovery, interview tips, company information, recruiter data, and a general sense that everything was scattered, cited by 5 users directly. Dashboard clutter and navigation each came up 4 times. Persistence, authentication, and search each came up 3 times. Pooled together, resource discovery, community sharing, interview experiences, resume benchmarking, and recruiter data, five distinct complaint labels, all pointed at the same missing category: 13 of 30 users, 43%.",
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
      text: "Deployment deserved as much attention as development. Builds that succeeded locally failed in production over missing environment variables, and a PDF generation bug only surfaced on Vercel because the response needed to be returned as a proper Buffer, not the format that worked fine on localhost.",
    },
    {
      type: "paragraph",
      id: "p-learnings-2",
      text: "The bigger lesson came from reading 30 pieces of feedback side by side instead of reacting to each one individually. No user asked for a Collective. No user asked for persistent storage by name. But when five different complaints keep tracing back to one structural gap, and three unrelated users independently lose trust in the product over the same technical shortcut, that pattern is more reliable than any single request, and it is the difference between shipping a feature list and shipping a roadmap.",
    },
  ],

  footnotes: [
    {
      marker: 1,
      text: "Beta feedback collected from 30 users across three tabs of raw responses, an issue tally, and a rating distribution. Full dataset available on request.",
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