"use client";

import { motion } from "framer-motion";
import { ruleDraw } from "@/lib/motion";

export function JournalSectionHeader({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={ruleDraw}
          className="h-[1.5px] w-full origin-left bg-[var(--color-border)]"
        />
        <span className="font-mono-meta absolute -top-2.5 left-0 bg-[var(--color-bg)] pr-3 text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
          {index}
        </span>
      </div>
      <h2 className="mt-6 text-[length:var(--text-h1)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-text-primary)]">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 max-w-[560px] text-[var(--text-body)] leading-relaxed text-[var(--color-text-secondary)]">
          {intro}
        </p>
      )}
    </div>
  );
}