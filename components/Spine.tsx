"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spineDraw, blurReveal } from "@/lib/motion";

type SpineMark = {
  index: string;
  label: string;
};

const MARKS: SpineMark[] = [
  { index: "01", label: "Investigations" },
  { index: "02", label: "Dispatches" },
  { index: "03", label: "Dossier" },
];

export function Spine() {
  return (
    <div className="relative hidden h-full md:block">
      <motion.div
        variants={spineDraw}
        initial="hidden"
        animate="visible"
        className="absolute left-0 top-0 h-full w-px origin-top bg-[var(--color-border)]"
      />

      <span className="font-mono-meta absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
        Index
      </span>

      <div className="absolute left-0 top-[38%] flex h-[46%] flex-col justify-between">
        {MARKS.map((mark) => (
          <SpineMarkRow key={mark.index} {...mark} />
        ))}
      </div>
    </div>
  );
}

function SpineMarkRow({ index, label }: SpineMark) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative flex items-center"
    >
      <span className="h-px w-2.5 -translate-x-full bg-[var(--color-text-tertiary)]" />
      <span className="font-mono-meta absolute left-2 whitespace-nowrap text-[10px] text-[var(--color-text-tertiary)]">
        {index}
      </span>
      <AnimatePresence>
        {open && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={blurReveal}
            className="font-mono-meta pointer-events-none absolute left-2 top-5 z-30 whitespace-nowrap rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-accent)]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}