// components/artifact/Footnotes.tsx
//
// Full reference list at the bottom of the artifact. Inline markers (the
// existing Footnote.tsx hover component) link down to these by id.

import type { FootnoteEntry } from "@/lib/artifact-types";

interface FootnotesProps {
  footnotes: FootnoteEntry[];
}

export function Footnotes({ footnotes }: FootnotesProps) {
  if (footnotes.length === 0) return null;

  return (
    <section
      aria-label="Footnotes"
      className="border-t border-[var(--color-border)] py-12"
    >
      <h2 className="mb-6 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
        Notes
      </h2>
      <ol className="flex flex-col gap-4">
        {footnotes.map((note) => (
          <li
            key={note.marker}
            id={`footnote-${note.marker}`}
            className="flex gap-3 text-[length:var(--text-small)] leading-relaxed text-[var(--color-text-secondary)]"
          >
            <span
              className="font-mono text-[var(--color-text-tertiary)]"
              aria-hidden="true"
            >
              {note.marker}.
            </span>
            <span>
              {note.text}
              {note.source && (
                <span className="ml-2 font-mono text-[length:var(--text-micro)] text-[var(--color-text-tertiary)]">
                  — {note.source}
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
