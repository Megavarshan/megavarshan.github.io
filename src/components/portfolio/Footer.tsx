export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 font-display text-sm">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-[var(--neon)] to-[var(--violet-glow)] text-[oklch(0.13_0.02_270)] text-[10px] font-bold">M</span>
          Megavarshan A · AI Engineer
        </div>
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} — Designed & engineered with intent.</p>
      </div>
    </footer>
  );
}
