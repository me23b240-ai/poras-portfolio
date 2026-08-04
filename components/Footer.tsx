export function Footer() {
    return (
      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 text-[13px] text-[var(--color-text-tertiary)] md:px-10">
          <span>Copyright {new Date().getFullYear()} Poras Wadhai</span>
          <span className="font-mono-meta">Built in Next.js</span>
        </div>
      </footer>
    );
  }