import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono-meta inline-flex items-center rounded-full border border-[var(--color-accent)]/30 px-2.5 py-1 text-[11px] uppercase tracking-wider text-[var(--color-accent)]">
      {children}
    </span>
  );
}