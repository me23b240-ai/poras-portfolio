"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { listStagger, listItem, resultReveal } from "@/lib/motion";

const ITEMS = [
  {
    index: "01",
    title: "ApplyOS",
    meta: "Live product, 2026",
    status: "live" as const,
    description:
      "A tool built to test whether sellers actually respond to sequenced category prompts.",
    result:
      "Built in six weeks. Validated the seller side of the Meesho memo's thesis.",
    href: "/work/applyos",
  },
  {
    index: "02",
    title: "AI Seller Assistant",
    meta: "In progress",
    status: "progress" as const,
    description:
      "An assistant that helps new sellers price and list their first ten products correctly.",
    result:
      "Targets the ten decisions that cause most first time sellers to churn.",
    href: "/work/ai-seller-assistant",
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
  index: string;
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
        className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-baseline md:gap-6"
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