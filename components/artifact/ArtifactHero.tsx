// components/artifact/ArtifactHero.tsx
//
// The "what, why, how long" moment. Title and metadata resolve immediately,
// no entrance delay. Subtitle is deliberately a full step down from the
// title so there is exactly one dominant line on the page.

import type { ArtifactFrontmatter } from "@/lib/artifact-types";
import { ArtifactMetadata } from "./ArtifactMetadata";

interface ArtifactHeroProps {
  frontmatter: ArtifactFrontmatter;
}

export function ArtifactHero({ frontmatter }: ArtifactHeroProps) {
  return (
    <header className="flex flex-col gap-10 pb-10 pt-14 md:pt-20">
      <span className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.14em] text-[var(--color-accent)]">
        {frontmatter.eyebrow}
      </span>

      <div className="flex flex-col gap-4">
        <h1 className="max-w-[16ch] text-[length:var(--text-h1)] font-medium leading-[1.04] tracking-[-0.01em] text-[var(--color-text-primary)]">
          {frontmatter.title}
        </h1>
        <p className="max-w-[46ch] text-[length:var(--text-body-lg)] font-normal italic leading-snug text-[var(--color-text-secondary)]">
          {frontmatter.subtitle}
        </p>
      </div>

      <ArtifactMetadata fields={frontmatter.metadata} />
    </header>
  );
}