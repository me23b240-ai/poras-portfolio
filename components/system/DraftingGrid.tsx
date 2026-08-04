/**
 * Ambient background grid, fixed to the viewport, sits behind all page
 * content. Extremely low opacity by design, it should read as texture,
 * never as a visible UI element. This is the site's dominant editorial
 * device: implies measurement and precision, the way a technical
 * drawing carries a grid even in its empty space.
 */
export function DraftingGrid() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-text-tertiary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-tertiary) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
    );
  }