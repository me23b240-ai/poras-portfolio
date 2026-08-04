"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ruleDraw, listStagger, listItem, EASE } from "@/lib/motion";
import { AnimatedCounter } from "@/components/system/AnimatedCounter";
import { useState } from "react";

const RECORD = [
  { label: "Reports", value: 3, detail: "Meesho, Blinkit, Nourish VC" },
  { label: "Products", value: 2, detail: "ApplyOS, AI Seller Assistant" },
  { label: "Markets studied", value: 4, detail: "End to end, not surface level" },
];

export function FieldNotes() {
  return (
    <div className="pt-1">
      <Rule label="Track Record" />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={listStagger}
        className="mt-2"
      >
        {RECORD.map((item) => (
          <RecordRow key={item.label} {...item} />
        ))}
      </motion.ul>
    </div>
  );
}

function Rule({ label }: { label: string }) {
  return (
    <div className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={ruleDraw}
        className="h-[1.5px] w-full origin-left bg-[var(--color-border)]"
      />
      <span className="font-mono-meta absolute -top-2.5 left-0 bg-[var(--color-bg)] pr-3 text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
        {label}
      </span>
    </div>
  );
}

function RecordRow({
  label,
  value,
  detail,
}: {
  label: string;
  value: number;
  detail: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.li
      variants={listItem}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="border-b border-[var(--color-border)] py-4 first:pt-3 last:border-none"
    >
      <div className="flex items-baseline justify-between">
        <span className="text-[14px] text-[var(--color-text-secondary)]">{label}</span>
        <span className="font-mono-meta text-[16px] font-medium text-[var(--color-text-primary)]">
          <AnimatedCounter value={value} />
        </span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="overflow-hidden font-mono-meta text-[11px] text-[var(--color-text-tertiary)]"
          >
            <span className="block pt-1.5">{detail}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  );
}