// components/artifact/NextReading.tsx
//
// A single deliberate next step, not a grid of "more like this." Framed
// with the site's editorial vocabulary so it reads as a filed
// recommendation, not a generic content-suggestion widget.

import Link from "next/link";
import { MagneticLink } from "@/components/system/MagneticLink";
import type { ArtifactType } from "@/lib/artifact-types";

interface NextReadingProps {
  slug: string;
  type: ArtifactType;
  title: string;
  label?: string; // defaults per type below
}

const DEFAULT_LABEL: Record<ArtifactType, string> = {
  product: "Next investigation",
  research: "Next dispatch",
};

const TYPE_HREF: Record<ArtifactType, string> = {
  product: "/work",
  research: "/writing",
};

export function NextReading({ slug, type, title, label }: NextReadingProps) {
  return (
    <nav
      aria-label="Continue reading"
      className="border-t border-[var(--color-border)] py-16"
    >
      <MagneticLink
        href={`${TYPE_HREF[type]}/${slug}`}
        className="group flex flex-col gap-3"
      >
        <span className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
          {label ?? DEFAULT_LABEL[type]}
        </span>
        <span className="text-[length:var(--text-h2)] text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
          {title} →
        </span>
      </MagneticLink>
    </nav>
  );
}
