"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { listStagger, listItem } from "@/lib/motion";

export const ASSIGNMENTS = [
  {
    role: "Founder's Office Intern",
    company: "Gelo",
    url: "https://www.geloapp.com/",
    dates: "Jul 2026 – Present",
    highlights: [
      "Shipped 15+ 0→1 product features, user journeys & revenue model for the Events Page, driving 20+ B2B adoption and retention.",
      "Built an agentic AI outbound pipeline automating lead generation and first-touch outreach, increasing outreach capacity 5x.",
      "Created an ambassador management system for 30+ ambassadors with 10+ KPIs and automated reporting via Apps Script.",
    ],
  },
  {
    role: "Product & GTM Intern",
    company: "Spotnxt",
    url: "https://spotnxt.com/",
    dates: "Jul 2026 – Present",
    highlights: [
      "Defined 8+ PRDs from 15+ customer interviews and 10+ competitor benchmarks, applying RICE prioritization for execution.",
      "Developed US GTM strategy scoring 8+ countries by ad spend and adoption to define ICP, positioning, and launch sequencing.",
      "Formulated a business growth model projecting ARPA, CAC, MRR, and customers to evaluate commercial viability and scalability.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "BlueStock Fintech",
    url: "https://bluestock.in/",
    dates: "May 2026 – Jun 2026",
    highlights: [
      "Flagged a ~0.9% expense-ratio gap between Regular and Direct plans, analyzing 87K+ rows across 40 funds on 5 risk-adjusted metrics.",
      "Uncovered 97% folio growth and 22% SIP inflow CAGR, translating insights on investor behavior, product adoption, and growth.",
      "Replaced static reporting with a 4-page interactive dashboard, enabling faster fund evaluation across risk, returns, and pricing.",
    ],
  },
  {
    role: "Growth Intern",
    company: "Intellicuria",
    url: "https://clinisio.com",
    dates: "Dec 2024 – Feb 2025",
    highlights: [
      "Conducted customer discovery with 100+ clinicians across Tier-2/3 cities, identifying 30+ recurring workflow pain points.",
      "Designed product communication assets showcased at 20+ expos and international conferences, engaging 1,500+ stakeholders.",
    ],
  },
];

export function FieldAssignments() {
  return (
    <section
      id="experience"
      className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]"
    >
      <Container>
        <JournalSectionHeader
          index="Field Assignments, 02"
          title="Where I've worked"
          intro="Internships that taught me how real teams ship, sell, and measure, not just how I'd build it alone."
        />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={listStagger}
        >
          {ASSIGNMENTS.map((item) => (
            <AssignmentRow key={item.company} {...item} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function AssignmentRow({
  role,
  company,
  url,
  dates,
  highlights,
}: {
  role: string;
  company: string;
  url: string;
  dates: string;
  highlights: string[];
}) {
  return (
    <motion.li
      variants={listItem}
      className="border-b border-[var(--color-border)] py-8 first:border-t"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        <span className="font-mono-meta text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)] md:col-span-2">
          {dates}
        </span>

        <div className="md:col-span-3">
          <h3 className="text-[length:var(--text-h3)] font-medium tracking-[-0.01em] text-[var(--color-text-primary)]">
            {role}
          </h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-meta mt-1 inline-block text-[16px] uppercase tracking-[0.06em] text-[var(--color-accent)] transition-colors duration-200 hover:text-[var(--color-accent-hover)] hover:underline"
           >
            {company}
          </a>
        </div>

        <ul className="flex flex-col gap-2 md:col-span-7">
          {highlights.map((point, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-[length:var(--text-small)] leading-relaxed text-[var(--color-text-secondary)]"
            >
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}