/**
 * Static film grain overlay. Not animated, not decorative in a
 * "vintage paper" sense, just enough texture to keep large flat
 * dark areas from feeling like a plain digital gradient.
 */
export function Noise() {
    return (
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.025]"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    );
  }