import { Section } from "./Section";
import { Activity, Brain, Cpu, Layers } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Healthcare AI", desc: "Dermoscopic image classification with ConvNeXt & multimodal fusion." },
  { icon: Layers, title: "Geospatial Intelligence", desc: "Satellite imagery analytics for disaster response & risk." },
  { icon: Cpu, title: "Intelligent Transportation", desc: "Traffic forecasting & route intelligence at city scale." },
  { icon: Activity, title: "Enterprise Automation", desc: "Production AI pipelines and analytical workflows." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>An AI engineer building <span className="text-gradient">production-grade intelligence</span>.</>}
      intro="Artificial Intelligence undergraduate passionate about scalable ML systems, deep learning, computer vision, and LLM-powered platforms. I focus on end-to-end pipelines, generative AI, and agentic systems applied to real-world problems."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass glow-border group relative overflow-hidden rounded-2xl p-6 transition hover:bg-white/5">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--violet-glow)]/20 text-[var(--neon)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </Section>
  );
}
