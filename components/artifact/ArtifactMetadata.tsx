// components/artifact/ArtifactMetadata.tsx
//
// Reads as a stamped document properties panel: one horizontal rule at
// top, a single line of label:value pairs separated by hairline dividers,
// mono throughout. Not a grid of boxes.

import type { ArtifactMetadataField } from "@/lib/artifact-types";

interface ArtifactMetadataProps {
  fields: ArtifactMetadataField[];
}

export function ArtifactMetadata({ fields }: ArtifactMetadataProps) {
  return (
    <dl
      aria-label="Artifact metadata"
      className="flex flex-wrap gap-x-0 gap-y-4 border-t border-[var(--color-border)] pt-5"
    >
      {fields.map((field, i) => (
        <div
          key={field.label}
          className={[
            "flex flex-col gap-1 pr-6",
            i !== fields.length - 1 ? "border-r border-[var(--color-border)]" : "",
          ].join(" ")}
          style={{ paddingLeft: i === 0 ? 0 : "1.5rem" }}
        >
          <dt className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
            {field.label}
          </dt>
          <dd className="font-mono text-[length:var(--text-small)] text-[var(--color-text-primary)]">
            {field.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}