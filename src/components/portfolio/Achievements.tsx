import { Section } from "./Section";
import { Trophy, Medal, Code2 } from "lucide-react";
import { GlowCard } from "./GlowCard";

const items = [
  {
    icon: Trophy,
    title: "Winner of Hybrid Hacks 2024",
    sub: "AARUUSH · SRMIST",
    desc: "AI Sustainability Hackathon",
  },
  {
    icon: Medal,
    title: "2nd Runner Up",
    sub: "UNLEASH 2024 · UNLEASH & SRMIST",
    desc: "Renewable Energy and Water Access for Rural Development",
  },
  {
    icon: Medal,
    title: "Silver Medal",
    sub: "SRM Research Day 2026",
    desc: "Recognized for research contribution in applied AI.",
  },
  {
    icon: Trophy,
    title: "Top 10 Finalist",
    sub: "Infosys Techzooka · PALS IITM Hackathon 2025",
    desc: "Finalist among national teams in a flagship AI hackathon.",
  },
  {
    icon: Code2,
    title: "822+ LeetCode Solved",
    sub: "Contest Rating 1553 · Top 31.5%",
    desc: "Consistent competitive programming performance.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Milestones along the <span className="text-gradient">build</span>.</>}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((a) => (
          <GlowCard key={a.title} className="relative overflow-hidden p-6">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon)]/25 to-[var(--violet-glow)]/25 text-[var(--neon)]">
              <a.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{a.title}</h3>
            <div className="mt-1 text-sm text-[var(--neon)]">{a.sub}</div>
            <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
