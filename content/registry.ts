// content/registry.ts
//
// Central index of every artifact. Individual content files (e.g.
// content/work/applyos.ts) export one Artifact each; this file just
// aggregates them so dynamic routes, sitemaps, and "next" lookups have
// one place to read from. Adding artifact #31 means adding one import
// and one entry here, not touching any component or page.

import type { Artifact } from "@/lib/artifact-types";
import { applyos } from "./work/applyos";
// import { marketos } from "./work/marketos";
// import { bazaarIntel } from "./work/bazaar-intel";
// import { meesho } from "./writing/meesho";
// import { blinkit } from "./writing/blinkit";
// import { nourishVC } from "./writing/nourish-vc";

export const artifacts: Artifact[] = [
  applyos,
  // marketos,
  // bazaarIntel,
  // meesho,
  // blinkit,
  // nourishVC,
];

export function getArtifact(type: Artifact["frontmatter"]["type"], slug: string) {
  return artifacts.find(
    (a) => a.frontmatter.type === type && a.frontmatter.slug === slug
  );
}

export function getArtifactsByType(type: Artifact["frontmatter"]["type"]) {
  return artifacts
    .filter((a) => a.frontmatter.type === type)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    );
}

// "Next" is resolved from the artifact's own manually curated `related`
// list (first entry), not auto-computed — consistent with the decision
// that RelatedArtifacts stays editorial, not tag-based.
export function getNextReading(artifact: Artifact) {
  const first = artifact.related[0];
  if (!first) return undefined;
  const target = getArtifact(first.type, first.slug);
  if (!target) return undefined;
  return { slug: first.slug, title: target.frontmatter.title };
}