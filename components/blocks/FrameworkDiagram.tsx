// components/blocks/FrameworkDiagram.tsx
//
// Reuses the GridField aesthetic rather than inventing a new diagram
// style. Hovering a node reveals its takeaway (spotlight-style focus),
// it does not light up the whole diagram at once.

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { popoverReveal } from "@/lib/motion";
import type { FrameworkDiagramData } from "@/lib/artifact-types";

export function FrameworkDiagram({ block }: { block: FrameworkDiagramData }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="max-w-[64ch]">
      {block.heading && (
        <h3 className="mb-6 text-[length:var(--text-h3)] font-medium text-[var(--color-text-primary)]">
          {block.heading}
        </h3>
      )}
      <div
        className="flex flex-wrap gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] p-6"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "center",
        }}
      >
        {block.nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <div
              key={node.id}
              className="relative"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onFocus={() => setActiveNode(node.id)}
              onBlur={() => setActiveNode(null)}
            >
              <button
                type="button"
                className={[
                  "rounded-[var(--radius-sm)] border px-4 py-2 font-mono text-[length:var(--text-small)] transition-colors",
                  isActive
                    ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "border-[var(--color-border-hover)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                ].join(" ")}
                aria-describedby={`${node.id}-takeaway`}
              >
                {node.label}
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    id={`${node.id}-takeaway`}
                    role="tooltip"
                    variants={popoverReveal}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-full z-10 mt-2 w-52 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[length:var(--text-micro)] leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    {node.takeaway}
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
