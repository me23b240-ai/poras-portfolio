// components/blocks/Paragraph.tsx
//
// Reading-measure tightened toward a print column width for a slower,
// more considered read.

import type { ParagraphBlock } from "@/lib/artifact-types";

export function Paragraph({ block }: { block: ParagraphBlock }) {
  return (
    <p className="max-w-[60ch] text-[length:var(--text-body-lg)] leading-[1.75] text-[var(--color-text-secondary)]">
      {block.text}
    </p>
  );
}