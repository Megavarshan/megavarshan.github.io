import { Section } from "./Section";

const items = [
  {
    role: "AI Research Intern",
    org: "National Institute of Technology (NIT), Trichy",
    period: "2025",
    points: [
      "Built ConvNeXt-based deep learning pipelines for dermoscopic image classification.",
      "Designed multi-scale feature fusion combining image features with patient metadata.",
      "Achieved 91% accuracy with optimized real-time inference and improved prediction reliability.",
    ],
  },
  {
    role: "Computer Vision AI Developer Intern",
    org: "InfiniTraq AI · Griffin AI",
    period: "2025",
    points: [
      "Engineered real-time video analytics with intelligent frame sampling.",
      "Implemented multi-object tracking and event abstraction systems for live streams.",
      "Optimized inference latency for scalable AI deployment at the edge.",
    ],
  },
  {
    role: "Developer Intern",
    org: "ATRIBS Software Systems",
    period: "2024",
    points: [
      "Built AI-driven automation workflows for enterprise-scale processing.",
      "Developed analytical pipelines that improved business optimization metrics.",
      "Gained exposure to enterprise technology stacks and delivery practices.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>From <span className="text-gradient">research labs</span> to <span className="text-gradient">production AI</span>.</>}
    >
      <ol className="relative space-y-6 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--neon)]/60 before:via-[var(--violet-glow)]/40 before:to-transparent md:before:left-6">
        {items.map((it) => (
          <li key={it.role} className="relative pl-12 md:pl-16">
            <span className="absolute left-2 top-6 grid h-5 w-5 place-items-center rounded-full bg-[oklch(0.13_0.02_270)] ring-2 ring-[var(--neon)] md:left-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" />
            </span>
            <div className="glass glow-border rounded-2xl p-6 transition hover:bg-white/5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold">{it.role}</h3>
                  <div className="mt-0.5 text-sm text-[var(--neon)]">{it.org}</div>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{it.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--neon)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
