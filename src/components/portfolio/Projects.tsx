import { Section } from "./Section";
import { Satellite, TrafficCone, Languages, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Satellite,
    tag: "ARIES & DRDO",
    title: "AI-Based Spatial Information System for Disaster Management",
    desc: "Geospatial intelligence platform fusing satellite imagery, multimodal data, and ML models for disaster prediction and risk assessment.",
    stack: ["Python", "GeoPandas", "GIS", "Pandas", "ML"],
    metric: "Multi-source geospatial analytics",
  },
  {
    icon: TrafficCone,
    tag: "IIT Guwahati",
    title: "Reducing Road Congestion in Greater Mumbai",
    desc: "Traffic forecasting and signal optimization using ITS data — congestion prediction and intelligent route guidance for urban mobility.",
    stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "ITS Data"],
    metric: "70% simulated traffic flow improvement",
  },
  {
    icon: Languages,
    tag: "NLP Research",
    title: "Multilingual NLP Analysis",
    desc: "Fine-tuned transformer models for toxicity classification and sentiment analysis across multiple languages, with robustness evaluation.",
    stack: ["PyTorch", "Transformers", "HuggingFace"],
    metric: "Robust across low-resource languages",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={<>Selected <span className="text-gradient">AI systems</span> shipped end-to-end.</>}
      intro="Research-backed projects spanning geospatial AI, intelligent transportation, and multilingual NLP."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`glass glow-border group relative flex flex-col overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-white/5 ${i === 0 ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon)]/25 to-[var(--violet-glow)]/25 text-[var(--neon)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--neon)]" />
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight md:text-[1.65rem]">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{p.desc}</p>

            <div className="mt-5 flex items-center gap-2 text-xs">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--neon)]/15 text-[var(--neon)]">↗</span>
              <span className="text-foreground">{p.metric}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--neon)]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </Section>
  );
}
