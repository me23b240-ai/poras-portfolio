// components/blocks/FigureCaption.tsx

interface FigureCaptionProps {
    figureNumber: number;
    caption: string;
  }
  
  export function FigureCaption({ figureNumber, caption }: FigureCaptionProps) {
    const paddedNumber = String(figureNumber).padStart(2, "0");
  
    return (
      <figcaption className="mt-3 flex gap-2 font-mono text-[length:var(--text-micro)] text-[var(--color-text-tertiary)]">
        <span aria-hidden="true">Fig. {paddedNumber}</span>
        <span className="text-[var(--color-text-secondary)]">{caption}</span>
      </figcaption>
    );
  }
  