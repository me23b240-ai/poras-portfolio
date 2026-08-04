// components/blocks/QuoteBlock.tsx
//
// For stakeholder quotes or external data points, not for self-quoting.

import type { QuoteBlockData } from "@/lib/artifact-types";

export function QuoteBlock({ block }: { block: QuoteBlockData }) {
  return (
    <figure className="max-w-[56ch] py-4">
      <blockquote className="text-[length:var(--text-h3)] font-normal italic leading-snug text-[var(--color-text-primary)]">
        “{block.quote}”
      </blockquote>
      {block.attribution && (
        <figcaption className="mt-3 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
          — {block.attribution}
        </figcaption>
      )}
    </figure>
  );
}
