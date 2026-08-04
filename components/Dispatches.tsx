"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { listStagger, listItem, EASE } from "@/lib/motion";

const REPORTS = [
  {
    index: "01",
    title: "How Meesho Wins Category Expansion",
    meta: "12 min, Jul 2026",
    description:
      "A demand side read on seller incentives and category sequencing in value commerce.",
    finding:
      "Assumed broad supply helps every category. It only helps categories with existing trust.",
    href: "/writing/meesho-category-expansion",
  },
  {
    index: "02",
    title: "Blinkit Breakdown",
    meta: "9 min, Jun 2026",
    description:
      "A read on how quick commerce economics change once you leave metro cities.",
    finding:
      "Dark store density decides who wins tier two cities, not ad spend.",
    href: "/writing/blinkit-breakdown",
  },
  {
    index: "03",
    title: "Nourish, a VC Memo",
    meta: "14 min, May 2026",
    description:
      "An investment memo on India's D2C nutrition category, written for a seed stage fund.",
    finding:
      "Retention beats acquisition in this category. Most funds underwrite the opposite.",
    href: "/writing/nourish-vc-memo",
  },
];

export function Dispatches() {
  return (
    <section
      id="writing"
      className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]"
    >
      <Container>
        <JournalSectionHeader
          index="Dispatches, 02"
          title="Reports filed from the field"
          intro="Strategy memos written the way I would file them inside a company, not for a blog."
        />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={listStagger}
        >
          {REPORTS.map((item) => (
            <DispatchRow key={item.title} {...item} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function DispatchRow({
  title,
  meta,
  description,
  finding,
  href,
}: {
  index: string;
  title: string;
  meta: string;
  description: string;
  finding: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      variants={listItem}
      className="border-b border-[var(--color-border)] py-8 first:border-t"
    >
      <Link
        href={href}
        className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-baseline md:gap-6"
      >
        <span className="font-mono-meta text-[length:var(--text-micro)] text-[var(--color-text-tertiary)] md:col-span-1">
          {meta.split(",")[0]}
        </span>
        <h3 className="text-[length:var(--text-h3)] font-medium tracking-[-0.01em] text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)] md:col-span-4">
          {title}
          <span className="font-mono-meta ml-1.5 align-top text-[11px] text-[var(--color-accent)]">
            *
          </span>
        </h3>
        <p className="text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-secondary)] md:col-span-5">
          {description}
        </p>
        <span className="font-mono-meta text-[length:var(--text-micro)] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] md:col-span-2 md:text-right">
          {meta}
        </span>
      </Link>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden md:pl-[calc(8.33%+1.5rem)]"
          >
            <div className="font-mono-meta mt-3 max-w-[420px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-accent)]">FINDING </span>
              {finding}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}