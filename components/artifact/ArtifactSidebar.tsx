// components/artifact/ArtifactSidebar.tsx
//
// Sticky left rail: reading progress + section index. On mobile this is not
// rendered here — ArtifactLayout swaps in a horizontal scroll-spy strip
// instead, stuck under the header.

import { ReadingProgress } from "./ReadingProgress";
import { SectionNavigator, type SectionNavItem } from "./SectionNavigator";

interface ArtifactSidebarProps {
  sections: SectionNavItem[];
  contentRef: React.RefObject<HTMLElement> | null;
}

export function ArtifactSidebar({ sections, contentRef }: ArtifactSidebarProps) {
  return (
    <aside
      className="sticky top-24 hidden h-fit w-[220px] shrink-0 flex-col gap-8 md:flex"
      aria-label="Artifact navigation"
    >
      <SectionNavigator sections={sections} />
      <ReadingProgress targetRef={contentRef} />
    </aside>
  );
}
