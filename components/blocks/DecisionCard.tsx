// components/blocks/DecisionCard.tsx
//
// Reads as a sentence unfolding in real time, not a spec table. "We
// assumed → we found → therefore we changed." Reuses the wrong-assumption
// /correction rhetorical pattern from the homepage Dispatches FINDING
// annotations, now staged as a narrative sequence.

import type { DecisionCardData } from "@/lib/artifact-types";

const STEPS: {
  key: keyof Pick<DecisionCardData, "assumed" | "found" | "changed">;
  label: string;
}[] = [
  { key: "assumed", label: "We assumed" },
  { key: "found", label: "We found" },
  { key: "changed", label: "Therefore, we changed" },
];

export function DecisionCard({ block }: { block: DecisionCardData }) {
  return (
    <div className="max-w-[60ch] border-l border-[var(--color-border)] pl-6">
      <ol className="flex flex-col gap-5">
        {STEPS.map((step, i) => (
          <li key={step.key} className="flex flex-col gap-1.5">
            <span className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.08em] text-[var(--color-accent)]">
              {step.label}
            </span>
            <p className="text-[length:var(--text-body-lg)] leading-relaxed text-[var(--color-text-primary)]">
              {block[step.key]}
              {i < STEPS.length - 1 && (
                <span
                  className="ml-2 text-[var(--color-text-tertiary)]"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}