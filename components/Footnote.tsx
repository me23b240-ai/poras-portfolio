"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { footnoteReveal } from "@/lib/motion";

/**
 * A superscript reference mark inline with the headline. Hovering
 * reveals a short annotation beneath it, a research journal footnote,
 * not a tooltip decoration. This is the hover interaction ported to
 * typography itself instead of a card.
 */
export function Footnote({
  index,
  note,
}: {
  index: number;
  note: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="font-mono-meta relative inline -top-[0.7em] -mr-[0.15em] cursor-default text-[0.4em] leading-none text-[var(--color-accent)] transition-colors duration-200"
        aria-label={`Note ${index}`}
      >
        {index}
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={footnoteReveal}
            className="font-mono-meta pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[220px] -translate-x-1/2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-[11px] leading-relaxed text-[var(--color-text-secondary)]"
          >
            {index}. {note}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}