// components/artifact/RelatedArtifacts.tsx
//
// Manual by design. Every entry comes from the artifact's own `related`
// data array, curated per artifact, not derived from shared tags. This is
// the mechanism for deliberately steering a reader's path through the
// archive rather than leaving it to a similarity algorithm.

import Link from "next/link";
import type { RelatedLink } from "@/lib/artifact-types";

const TYPE_HREF: Record<RelatedLink["type"], string> = {
  product: "/work",
  research: "/writing",
};

interface RelatedArtifactsProps {
  items: RelatedLink[];
}

export function RelatedArtifacts({ items }: RelatedArtifactsProps) {
  if (items.length === 0) return null;

  return (
    <section
      aria-label="Related artifacts"
      className="border-t border-[var(--color-border)] py-12"
    >
      <h2 className="mb-6 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
        Related
      </h2>
      <ul className="flex flex-col divide-y divide-[var(--color-border)]">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`${TYPE_HREF[item.type]}/${item.slug}`}
              className="group flex items-baseline justify-between gap-6 py-4"
            >
              <span className="text-[length:var(--text-body-lg)] text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                {item.title}
              </span>
              <span className="shrink-0 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
                {item.reason}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
