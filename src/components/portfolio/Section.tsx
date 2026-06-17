import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: ReactNode; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-[var(--neon)]" />
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
          {intro && <p className="mt-4 text-base text-muted-foreground md:text-lg">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
