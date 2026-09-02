// content/registry.ts
//
// Central index of every artifact. Individual content files (e.g.
// content/work/applyos.ts) export one Artifact each; this file just
// aggregates them so dynamic routes, sitemaps, and "next" lookups have
// one place to read from. Adding artifact #31 means adding one import
// and one entry here, not touching any component or page.

import type { Artifact } from "@/lib/artifact-types";
import { applyos } from "./work/applyos";
import { sellerlens } from "./work/sellerlens";
import { smartcart } from "./work/smartcart";
import { bazaarIntel } from "./work/baazar-intel";
import { eternalLimitedSellInitiation } from "./writing/eternal-limited-sell-initiation";
import { luxuryCommerceProductLabBluestone } from "./writing/luxury-commerce-product-lab-bluestone";
import { meeshoBusinessStrategyMemo } from "./writing/meesho-business-strategy-memo";
import { nourishSnacksSeriesAIcMemo } from "./writing/nourish-snacks-series-a-ic-memo";
import { productTeardownBlinkit } from "./writing/product-teardown-blinkit";
import { productTeardownSwiggy } from "./writing/product-teardown-swiggy";

export const artifacts: Artifact[] = [
  applyos,
  sellerlens,
  smartcart,
  bazaarIntel,
  eternalLimitedSellInitiation,
  luxuryCommerceProductLabBluestone,
  meeshoBusinessStrategyMemo,
  nourishSnacksSeriesAIcMemo,
  productTeardownBlinkit,
  productTeardownSwiggy,
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

export function getNextReading(artifact: Artifact) {
  const first = artifact.related[0];
  if (!first) return undefined;
  const target = getArtifact(first.type, first.slug);
  if (!target) return undefined;
  return { slug: first.slug, title: target.frontmatter.title };
}