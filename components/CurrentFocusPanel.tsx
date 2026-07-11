const FOCUS_ITEMS = [
    { label: "Currently Building", value: "ApplyOS" },
    { label: "Researching", value: "Indian Marketplaces" },
    { label: "Writing", value: "Meesho Strategy Memo" },
    { label: "Exploring", value: "Consumer AI" },
  ];
  
  export function CurrentFocusPanel() {
    return (
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
          <span className="font-mono-meta text-[12px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
            Current Focus
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="font-mono-meta text-[11px] text-[var(--color-text-tertiary)]">
              live
            </span>
          </span>
        </div>
  
        <ul>
          {FOCUS_ITEMS.map((item, i) => (
            <FocusRow
              key={item.label}
              label={item.label}
              value={item.value}
              isLast={i === FOCUS_ITEMS.length - 1}
            />
          ))}
        </ul>
      </div>
    );
  }
  
  function FocusRow({
    label,
    value,
    isLast,
  }: {
    label: string;
    value: string;
    isLast: boolean;
  }) {
    return (
      <li
        className={`group flex items-center justify-between px-6 py-4 transition-colors duration-200 hover:bg-[var(--color-surface-hover)] ${
          isLast ? "" : "border-b border-[var(--color-border)]"
        }`}
        style={{
          boxShadow: "inset 0 0 0 0 var(--color-accent-glow)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "inset 1px 0 0 0 var(--color-accent), inset 0 0 24px -12px var(--color-accent-glow)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "inset 0 0 0 0 var(--color-accent-glow)";
        }}
      >
        <span className="font-mono-meta text-[13px] text-[var(--color-text-tertiary)] transition-colors duration-200 group-hover:text-[var(--color-text-secondary)]">
          {label}
        </span>
        <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
          {value}
        </span>
      </li>
    );
  }