// components/blocks/MetricsPanel.tsx
//
// Hovering a metric reveals its methodology. State-driven AnimatePresence,
// not a CSS max-height hover trick. AnimatedCounter is reused for real,
// meaningful numbers only.

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { popoverReveal } from "@/lib/motion";
import { AnimatedCounter } from "@/components/system/AnimatedCounter";
import type { MetricsPanelData } from "@/lib/artifact-types";

export function MetricsPanel({ block }: { block: MetricsPanelData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[64ch]">
      {block.heading && (
        <h3 className="mb-6 text-[length:var(--text-h3)] font-medium text-[var(--color-text-primary)]">
          {block.heading}
        </h3>
      )}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {block.metrics.map((metric, i) => {
          const numeric = Number(metric.value.replace(/[^0-9.-]/g, ""));
          const isNumeric = !Number.isNaN(numeric) && metric.value.trim() !== "";

          return (
            <div
              key={metric.label}
              className="relative flex flex-col gap-1 border-t border-[var(--color-border)] pt-4"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
              tabIndex={metric.methodology ? 0 : -1}
            >
              <span className="font-mono text-[length:var(--text-h2)] text-[var(--color-text-primary)]">
                {isNumeric ? <AnimatedCounter value={numeric} /> : metric.value}
                {isNumeric &&
                  metric.value.replace(/[0-9.,\s-]/g, "")}
              </span>
              <span className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
                {metric.label}
              </span>

              <AnimatePresence>
                {activeIndex === i && metric.methodology && (
                  <motion.div
                    variants={popoverReveal}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-full z-10 mt-2 w-56 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[length:var(--text-micro)] leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    {metric.methodology}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
