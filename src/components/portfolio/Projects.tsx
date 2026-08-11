import { Section } from "./Section";
import { Satellite, TrafficCone, Languages, ArrowUpRight, Github, ExternalLink, ShieldAlert, Activity } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "Enterprise CRM Analytics & Automation Platform",
    subtitle: "AI-Native Customer Intelligence",
    color: "from-emerald-600/30 to-emerald-900/10",
    icon: Activity,
    githubLink: "https://github.com/Megavarshan/AI-CRM",
    bullets: [
      "Built AI-powered customer analytics, segmentation, churn detection, and engagement.",
      "Integrated LLMs, RAG, semantic search, and vector embeddings."
    ]
  },
  {
    title: "Decision-Admissibility Disaster Intelligence Platform (DADIP)",
    subtitle: "Real-time Emergency Command",
    color: "from-blue-600/30 to-blue-900/10",
    icon: ShieldAlert,
    githubLink: "https://github.com/Megavarshan/disaster-ai",
    demoLink: "https://dadip-disaster-ai.vercel.app/",
    bullets: [
      "Unified real-time incidents, weather, operational, and geospatial data.",
      "Implemented AI agents, RAG, anomaly detection, and automated reporting."
    ]
  },
  {
    title: "Smart Traffic Optimizer via SARSA",
    subtitle: "Dynamic Flow via SARSA RL",
    color: "from-purple-600/30 to-purple-900/10",
    icon: TrafficCone,
    githubLink: "https://github.com/Megavarshan/Traffic-Application-SARSA",
    demoLink: "https://sarsa-rl.vercel.app/",
    bullets: [
      "Built a SARSA RL agent for adaptive traffic-light control.",
      "Deployed FastAPI + React simulation with live training and Q-value explainability."
    ]
  },
  {
    title: "Culturally-Aware Multilingual NLP Analysis",
    subtitle: "Culturally-Aware NLP Research",
    color: "from-orange-600/30 to-orange-900/10",
    icon: Languages,
    githubLink: "https://github.com/Megavarshan/multilingual-nlp-analysis",
    bullets: [
      "Evaluated NLP models across 13 Indian languages for sentiment and toxicity.",
      "Benchmarked IndicBERT, MuRIL, XLM-RoBERTa, and mBERT for multilingual understanding."
    ]
  }
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={<>Selected <span className="text-gradient">AI systems</span> shipped end-to-end.</>}
      intro="Research-backed projects spanning disaster response AI, intelligent transportation, and multilingual NLP."
    >
      <div className="grid gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8">
        {projects.map((p) => (
          <article 
            key={p.title} 
            className="relative flex flex-col bg-[#0f1115]/90 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-15px_rgba(6,182,212,0.3)] group"
          >
            {/* Top Banner with Grid Pattern */}
            <div className={`h-16 w-full relative bg-gradient-to-br ${p.color}`}>
              {/* CSS Grid Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              />
              {/* Icon in bottom left */}
              <div className="absolute bottom-2.5 left-5 text-white/30 group-hover:text-white/50 transition-colors">
                <p.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content Container */}
            <div className="px-4 lg:px-5 pt-5 pb-6 flex-1 flex flex-col">

              {/* Title, Links & Subtitle */}
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h3 className="font-display text-lg md:text-xl font-bold text-[var(--neon)] leading-tight">
                  {p.title}
                </h3>
                <div className="flex items-center gap-3 mt-1 shrink-0">
                  {p.githubLink && (
                    <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {p.demoLink && (
                    <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className="text-[var(--neon)]/50 hover:text-[var(--neon)] transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-[11px] md:text-xs text-muted-foreground font-mono mb-5">
                {p.subtitle}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 flex-1">
                {p.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-white/80 leading-relaxed">
                    <svg className="w-3.5 h-3.5 text-[var(--neon)] mt-1 shrink-0" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.5 3.5L11.5 8L4.5 12.5V3.5Z" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
