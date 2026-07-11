export function SectionTitle({
    eyebrow,
    title,
    subtitle,
  }: {
    eyebrow: string;
    title: string;
    subtitle?: string;
  }) {
    return (
      <div className="mb-12 md:mb-16">
        <span className="font-mono-meta block text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
          {eyebrow}
        </span>
        <h2 className="mt-3 text-[var(--text-h2)] font-medium leading-[1.15] tracking-[-0.02em] text-[var(--color-text-primary)]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-[560px] text-[var(--text-body)] leading-relaxed text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        )}
      </div>
    );
  }