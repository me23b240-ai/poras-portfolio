// components/blocks/InsightCallout.tsx
//
// One boxed claim per major section, at most. Uses the same footnote /
// finding annotation visual language as the homepage, not a generic
// "tip box." If this appears more than once per section, that's a content
// problem, not a component problem.

import type { InsightCalloutBlock } from "@/lib/artifact-types";

export function InsightCallout({ block }: { block: InsightCalloutBlock }) {
  return (
    <div className="max-w-[60ch] border-l-2 border-[var(--color-accent)] bg-[var(--color-accent-muted)] py-4 pl-6 pr-4">
      <p className="text-[length:var(--text-body-lg)] font-medium leading-relaxed text-[var(--color-text-primary)]">
        {block.text}
      </p>
    </div>
  );
}
