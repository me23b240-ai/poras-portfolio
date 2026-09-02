"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { listStagger, listItem, EASE } from "@/lib/motion";
import { getArtifactsByType } from "@/content/registry";

function formatMeta(readTime: string, publishedAt: string) {
  const date = new Date(publishedAt);
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${readTime}, ${month} ${date.getFullYear()}`;
}

export function Dispatches() {
  const reports = getArtifactsByType("research").map((artifact, i) => ({
    index: String(i + 1).padStart(2, "0"),
    title: artifact.frontmatter.title,
    meta: formatMeta(artifact.frontmatter.readTime, artifact.frontmatter.publishedAt),
    description: artifact.frontmatter.summary,
    finding: artifact.frontmatter.subtitle,
    href: `/writing/${artifact.frontmatter.slug}`,
  }));

  return (
    <section
      id="writing"
      className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]"
    >
      <Container>
        <JournalSectionHeader
          index="Dispatches, 02"
          title="Reports filed from the field"
          intro="Strategy memos and teardowns written the way I would file them inside a company, not for a blog."
        />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={listStagger}
        >
          {reports.map((item) => (
            <DispatchRow key={item.href} {...item} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

// DispatchRow function stays exactly the same as before, EXCEPT
// add "group" to the Link's className so the title's hover color works:

function DispatchRow({ title, meta, description, finding, href }: {
  index: string; title: string; meta: string; description: string; finding: string; href: string;
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
        className="group grid grid-cols-1 gap-3 md:grid-cols-12 md:items-baseline md:gap-6"
      >
        <span className="font-mono-meta text-[length:var(--text-micro)] text-[var(--color-text-tertiary)] md:col-span-1">
          {meta.split(",")[0]}
        </span>
        <h3 className="text-[length:var(--text-h3)] font-medium tracking-[-0.01em] text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)] md:col-span-4">
          {title}
          <span className="font-mono-meta ml-1.5 align-top text-[11px] text-[var(--color-accent)]">*</span>
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