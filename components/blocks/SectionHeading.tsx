// components/blocks/SectionHeading.tsx
//
// Deliberately quieter than the hero H1 — this is an H2 sized down near
// body scale, with a mono index prefix doing the hierarchy work instead
// of raw font size. There is only one true H1 on the page: ArtifactHero.

import type { SectionHeadingBlock } from "@/lib/artifact-types";

export function SectionHeading({ block }: { block: SectionHeadingBlock }) {
  return (
    <h2 id={block.anchor} className="scroll-mt-24 flex items-baseline gap-3">
      {block.index && (
        <span
          className="font-mono text-[length:var(--text-small)] text-[var(--color-text-tertiary)]"
          aria-hidden="true"
        >
          {block.index}
        </span>
      )}
      <span className="text-[length:var(--text-h3)] font-medium tracking-[-0.005em] text-[var(--color-text-primary)]">
        {block.heading}
      </span>
    </h2>
  );
}