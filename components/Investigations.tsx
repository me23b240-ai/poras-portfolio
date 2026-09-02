"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { listStagger, listItem, resultReveal } from "@/lib/motion";

const ITEMS = [
  {
    title: "ApplyOS",
    meta: "Live product, 2026",
    status: "live" as const,
    description:
      "A 4-module operating system for the internship application process: resume tailoring, application tracking, and a shared resource collective.",
    result:
      "20+ beta users, 38% retention. Pivoted to a full application OS after 20+ user conversations surfaced the real bottleneck, then built the Internship Collective, 120+ resources across 10+ categories, driving network-effect growth.",
    href: "/work/applyos",
  },
  {
    title: "SellerLens",
    meta: "Live product, 2026",
    status: "live" as const,
    description:
      "A marketplace intelligence platform helping e-commerce sellers optimize listings, pricing, and catalog quality.",
    result:
      "4 product modules and a 100-point deterministic scoring engine, benchmarked against 1000+ marketplace products. 3 LLM-powered workflows across 3 APIs cut listing-optimization time by ~80%.",
    href: "/work/sellerlens",
  },
  {
    title: "Bazaar Intel",
    meta: "Live product, 2026",
    status: "live" as const,
    description:
      "A 0-to-1 AI market intelligence platform replacing static dashboards with real-time competitive, financial, and risk analysis.",
    result:
      "200+ companies tracked across 18 industries, 40+ structured attributes, and a dynamic engine computing 15+ market KPIs across 6+ AI-powered analysis types.",
    href: "/work/bazaar-intel",
  },
  {
    title: "SmartCart",
    meta: "Live product, 2026",
    status: "live" as const,
    description:
      "An AI-powered grocery price comparison tool matching a free-text shopping list against a live catalog across four apps.",
    result:
      "Built on Next.js, TypeScript, and Gemini. Matches lists against 5000+ SKUs across 4 platforms with a structural 100% item-coverage guarantee, no item ever silently dropped.",
    href: "/work/smartcart",
  },
];

export function Investigations() {
  return (
    <section
      id="evidence"
      className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]"
    >
      <Container>
        <JournalSectionHeader
          index="Investigations, 01"
          title="Products built to test a thesis"
          intro="Each one exists to answer a question a memo could not answer alone."
        />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={listStagger}
        >
          {ITEMS.map((item) => (
            <InvestigationRow key={item.title} {...item} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function InvestigationRow({
  title,
  meta,
  status,
  description,
  result,
  href,
}: {
  title: string;
  meta: string;
  status: "live" | "progress";
  description: string;
  result: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.li
      variants={listItem}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="border-b border-[var(--color-border)] py-8 first:border-t"
    >
      <Link
        href={href}
        className="group grid grid-cols-1 gap-3 md:grid-cols-12 md:items-baseline md:gap-6"
      >
        <span
          aria-hidden
          className={`hidden md:col-span-1 md:mt-1.5 md:block md:h-2 md:w-2 ${
            status === "live"
              ? "bg-[var(--color-accent)]"
              : "border border-[var(--color-text-tertiary)] bg-transparent"
          }`}
        />
        <h3 className="text-[length:var(--text-h3)] font-medium tracking-[-0.01em] text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)] md:col-span-4">
          {title}
        </h3>
        <p className="text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-secondary)] md:col-span-5">
          {description}
        </p>
        <span className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] md:col-span-2 md:text-right">
          {meta}
        </span>
      </Link>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={resultReveal}
            className="overflow-hidden md:pl-[calc(8.33%+1.5rem)]"
          >
            <p className="font-mono-meta mt-3 text-[12px] text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-accent)]">RESULT </span>
              {result}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}