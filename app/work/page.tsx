import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { getArtifactsByType } from "@/content/registry";

export const metadata: Metadata = {
  title: "Work — Poras Wadhai",
  description: "Products built to test a thesis.",
};

export default function WorkIndexPage() {
  const items = getArtifactsByType("product");

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 md:pt-40">
        <Container>
          <span className="font-mono-meta block text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
            Archive / Work
          </span>
          <h1 className="mt-4 text-[length:var(--text-h1)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-text-primary)]">
            Products built to test a thesis
          </h1>
          <ul className="mt-16 flex flex-col divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {items.map((item) => (
              <li key={item.frontmatter.slug}>
                <Link
                  href={`/work/${item.frontmatter.slug}`}
                  className="group flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between md:gap-6"
                >
                  <div className="max-w-[640px]">
                    <h2 className="text-[length:var(--text-h3)] font-medium text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
                      {item.frontmatter.title}
                    </h2>
                    <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-secondary)]">
                      {item.frontmatter.summary}
                    </p>
                  </div>
                  <span className="font-mono-meta shrink-0 text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
                    {item.frontmatter.readTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
}