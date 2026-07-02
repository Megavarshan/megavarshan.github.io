import { Section } from "./Section";
import { GlowCard } from "./GlowCard";

const items = [
  {
    role: "AI Research Intern",
    org: "Ganpat University",
    period: "Jan 2026 - Apr 2026",
    color: "var(--neon)", // Cyan
    glow: "var(--neon-soft)",
    points: [
      "Developed an AI-powered single-image 2D/3D avatar generation pipeline using deep learning and computer vision techniques to create stylised avatars, 3D facial reconstructions, and animated outputs.",
      "Optimised the system for efficient execution on low-resource hardware and enhanced facial realism through model fine-tuning and real-time customisation of facial parameters for digital avatar applications.",
    ],
  },
  {
    role: "Computer Vision AI Developer Intern",
    org: "InfiniTraq AI · Griffin AI",
    period: "Dec 2025 - Jan 2026",
    color: "oklch(0.7 0.22 295)", // Violet
    glow: "oklch(0.7 0.22 295 / 0.35)",
    points: [
      "Worked on real-time CCTV video analytics pipelines for enterprise use cases, including age & gender classification and theft detection using deep learning–based computer vision models.",
      "Built and integrated face and demographic analysis using MiVOLO and DeepFace, and optimized inference using a lightweight MobileNet-based model for edge-friendly deployment.",
      "Gained hands-on experience in end-to-end video analytics workflows (stream ingestion, detection, tracking, inference, and alerting) for large-scale surveillance systems.",
    ],
  },
  {
    role: "AI Research Intern",
    org: "National Institute of Technology (NIT), Trichy",
    period: "June 2025 - Dec 2025",
    color: "oklch(0.85 0.2 90)", // Amber
    glow: "oklch(0.85 0.2 90 / 0.35)",
    points: [
      "Built ConvNeXt-based deep learning pipelines for dermoscopic image classification.",
      "Designed multi-scale feature fusion combining image features with patient metadata.",
      "Achieved 91% accuracy with optimized real-time inference and improved prediction reliability.",
    ],
  },
  {
    role: "Developer Intern",
    org: "ATRIBS Software Systems",
    period: "June 2025 - July 2025",
    color: "oklch(0.75 0.2 150)", // Neon Green
    glow: "oklch(0.75 0.2 150 / 0.35)",
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
      {/* 3D Cyberpunk Curvy Map Timeline */}
      <ol className="relative space-y-12 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[var(--neon)] before:via-[var(--violet-glow)] before:to-[var(--neon)] md:before:hidden">
        {items.map((it, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <li 
              key={it.role} 
              className={`relative group pl-12 md:pl-0 md:w-[75%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
              style={{ '--item-color': it.color, '--item-glow': it.glow } as React.CSSProperties}
            >
              {/* Responsive SVG Curvy Connector (Desktop Only) */}
              {idx < items.length - 1 && (
                <svg 
                  className="absolute top-8 left-0 w-full h-[calc(100%+3rem)] pointer-events-none hidden md:block z-0" 
                  preserveAspectRatio="none" 
                  viewBox="0 0 100 100"
                  style={{ width: isLeft ? '133.33%' : '133.33%', left: isLeft ? '0' : '-33.33%' }}
                >
                  <path 
                    d={isLeft 
                      ? "M 75 0 C 75 50, 25 50, 25 100" 
                      : "M 25 0 C 25 50, 75 50, 75 100"} 
                    stroke={`url(#grad-${idx})`}
                    strokeWidth="3" 
                    fill="none" 
                    vectorEffect="non-scaling-stroke"
                    className="drop-shadow-[0_0_8px_var(--item-color)] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <defs>
                    <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--item-color)" />
                      <stop offset="100%" stopColor={items[idx + 1].color} />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {/* Glowing Map Waypoint Node */}
              <span className={`absolute top-8 grid h-6 w-6 rounded-full place-items-center bg-black/80 backdrop-blur-md border-[3px] border-[var(--item-color)] shadow-[0_0_15px_var(--item-glow)] transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--item-color)] z-10 left-[16px] -translate-x-1/2 ${isLeft ? 'md:left-[100%]' : 'md:left-[0%]'}`}>
                <span className="h-2 w-2 rounded-full bg-[var(--item-color)] group-hover:bg-white transition-colors shadow-[0_0_8px_var(--item-color)] animate-[pulse_2s_infinite]" />
              </span>
              
              {/* 3D Glass Card Container */}
              <div className={`relative perspective-[1200px] z-10 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <GlowCard className={`p-6 md:p-8 transition-all duration-700 ease-out transform group-hover:-translate-y-2 group-hover:rotate-x-2 ${isLeft ? 'group-hover:-rotate-y-3' : 'group-hover:rotate-y-3'} shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_var(--item-glow)] group-hover:border-[var(--item-color)]/60 bg-black/50 backdrop-blur-3xl border-[var(--item-color)]/20`}>
                  <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
                    <div className="flex-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[var(--item-color)] drop-shadow-md">
                        {it.role}
                      </h3>
                      <div className={`mt-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--item-color)] flex items-center gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        {!isLeft && <span className="h-px w-6 bg-[var(--item-color)] opacity-70"></span>}
                        {it.org}
                        {isLeft && <span className="hidden md:block h-px w-6 bg-[var(--item-color)] opacity-70"></span>}
                      </div>
                    </div>
                    
                    {/* Terminal Badge for Date */}
                    <div className="inline-flex shrink-0 items-center gap-2 rounded bg-[var(--item-color)]/10 px-3 py-1.5 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--item-color)] border border-[var(--item-color)]/40 shadow-[0_0_15px_var(--item-glow)]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inset-0 rounded-full bg-[var(--item-color)] opacity-100"></span>
                        <span className="relative rounded-full h-1.5 w-1.5 bg-[var(--item-color)]"></span>
                      </span>
                      {it.period}
                    </div>
                  </div>
                  
                  <ul className={`mt-6 space-y-3 text-sm sm:text-[15px] text-muted-foreground ${isLeft ? 'md:text-right' : ''}`}>
                    {it.points.map((p) => (
                      <li key={p} className={`flex gap-3 items-start group/point ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <span className="font-mono text-[var(--item-color)] opacity-50 shrink-0 mt-0.5 transition-all duration-300 group-hover/point:opacity-100 group-hover/point:scale-125 group-hover/point:drop-shadow-[0_0_5px_var(--item-color)]">
                          {isLeft ? `<` : `>`}
                        </span>
                        <span className="leading-relaxed text-gray-300 group-hover/point:text-white transition-colors">{p}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
