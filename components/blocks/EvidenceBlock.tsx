// components/blocks/EvidenceBlock.tsx

import type { EvidenceBlockData } from "@/lib/artifact-types";

export function EvidenceBlock({ block }: { block: EvidenceBlockData }) {
  return (
    <div className="flex max-w-[60ch] flex-col gap-2 border-t border-[var(--color-border)] py-5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[length:var(--text-body)] text-[var(--color-text-primary)]">
          {block.label}
        </span>
        <span className="font-mono text-[length:var(--text-body-lg)] text-[var(--color-accent)]">
          {block.value}
        </span>
      </div>
      <p className="text-[length:var(--text-small)] leading-relaxed text-[var(--color-text-secondary)]">
        {block.interpretation}
      </p>
      <span className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
        Source: {block.source}
      </span>
    </div>
  );
}
