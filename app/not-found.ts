// app/not-found.tsx
//
// Styled as a misfiled record, not a generic 404. Same visual language
// as the rest of the archive: mono eyebrow, hairline rule, one accent
// mark. No illustration, no giant "404" numerals — those would break
// the site's restraint.

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <div className="mx-auto max-w-[560px]">
          <span className="font-mono-meta block text-[12px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Filing error, 404
          </span>

          <h1 className="mt-5 text-[length:var(--text-h1)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-text-primary)]">
            This record was never filed, or it walked off somewhere.
          </h1>

          <p className="mt-5 max-w-[46ch] text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
            Every other page in this archive traces back to a decision I can
            point to. This one doesn&apos;t exist yet, or the link that sent
            you here is out of date. Either way, not a great sign for
            whoever filed it.
          </p>

          <div className="mt-10 border-t border-[var(--color-border)] pt-6">
            <div className="flex items-baseline justify-between border-b border-[var(--color-border)] py-3">
              <span className="font-mono-meta text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
                Status
              </span>
              <span className="text-[13px] text-[var(--color-text-primary)]">
                Not found
              </span>
            </div>
            <div className="flex items-baseline justify-between py-3">
              <span className="font-mono-meta text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
                Recommended action
              </span>
              <span className="text-[13px] text-[var(--color-text-primary)]">
                Return to the archive
              </span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Button href="/" variant="primary" showArrow>
              Back to the archive
            </Button>
            <Button href="/#contact" variant="link" showArrow={false}>
              Report a broken link
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}