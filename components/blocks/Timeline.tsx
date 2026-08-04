// components/blocks/Timeline.tsx
//
// Numbered/dated sequence. Legitimate here specifically because iteration
// order or event order is real information the reader needs, not a
// decorative "01 / 02 / 03" marker system.

import type { TimelineBlockData } from "@/lib/artifact-types";

export function Timeline({ block }: { block: TimelineBlockData }) {
  return (
    <div className="max-w-[64ch]">
      {block.heading && (
        <h3 className="mb-6 text-[length:var(--text-h3)] font-medium text-[var(--color-text-primary)]">
          {block.heading}
        </h3>
      )}
      <ol className="flex flex-col">
        {block.entries.map((entry, i) => (
          <li
            key={`${entry.date}-${i}`}
            className="grid grid-cols-[6rem_1fr] gap-4 border-l border-[var(--color-border)] py-5 pl-6 first:pt-0 last:pb-0"
          >
            <span className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
              {entry.date}
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="text-[length:var(--text-body)] font-medium text-[var(--color-text-primary)]">
                {entry.title}
              </span>
              <span className="text-[length:var(--text-small)] leading-relaxed text-[var(--color-text-secondary)]">
                {entry.description}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
