// components/artifact/BreadcrumbRail.tsx
//
// Thin, mono, always shows which archive section you're in. Not a decorative
// breadcrumb, it's the fastest way to tell "Work" from "Writing" before
// reading anything else.

import Link from "next/link";
import type { ArtifactType } from "@/lib/artifact-types";

interface BreadcrumbRailProps {
  type: ArtifactType;
  title: string;
}

const SECTION_LABEL: Record<ArtifactType, string> = {
  product: "Work",
  research: "Writing",
};

const SECTION_HREF: Record<ArtifactType, string> = {
  product: "/work",
  research: "/writing",
};

export function BreadcrumbRail({ type, title }: BreadcrumbRailProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[var(--color-border)] py-4"
    >
      <ol className="mx-auto flex max-w-[1200px] items-center gap-2 px-6 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)] md:px-10">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-[var(--color-text-primary)]"
          >
            Archive
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link
            href={SECTION_HREF[type]}
            className="transition-colors hover:text-[var(--color-text-primary)]"
          >
            {SECTION_LABEL[type]}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="truncate text-[var(--color-text-secondary)]" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}
