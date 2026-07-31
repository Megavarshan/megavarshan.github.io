import { Section } from "./Section";
import { Linkedin } from "lucide-react";

const accolades = [
  { logo: "/iitmadras.png", title: "Winter School", desc: "Decentralised Trust and Blockchains at IIT Madras (Sep 2025 - Dec 2025).", link: "https://www.linkedin.com/posts/megavarshan_blockchain-decentralisedsystems-distributedsystems-activity-7408815705850097664-05e_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEXMBI8BxGIFJDz8EG5SC5K6kt6grEcQV2o" },
  { logo: "/amazon.png", title: "Amazon ML Summer School", desc: "Selected for the prestigious Amazon ML Summer School 2026 cohort." },
  { logo: "/samsung.png", title: "Samsung Innovation Campus", desc: "Trainee - Completed intensive Coding and Programming course (Python, DSA, Data Analytics)." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>An AI engineer building <span className="text-gradient">production-grade intelligence</span>.</>}
      intro="Artificial Intelligence undergraduate passionate about scalable ML systems, deep learning, computer vision, and LLM-powered platforms. I focus on end-to-end pipelines, generative AI, and agentic systems applied to real-world problems."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {accolades.map(({ logo, title, desc, link }) => (
          <div key={title} className="glass glow-border group relative overflow-hidden rounded-2xl p-6 transition hover:bg-white/5">
            <div className="flex items-center justify-between relative z-10">
              <div className="h-12 w-auto mb-2 flex items-center">
                <img src={logo} alt={title} className="h-full object-contain" />
              </div>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:text-[#004182] transition-transform hover:scale-110 shrink-0 bg-white rounded-sm mb-auto" title="View on LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
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
