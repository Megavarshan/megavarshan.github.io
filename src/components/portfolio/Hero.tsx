import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles, GraduationCap, FlaskConical, BrainCircuit } from "lucide-react";
const photo = "/megavarshan.jpeg";
const resume = "/resume.pdf";
const stats = [
  { label: "AI Projects", value: "12+" },
  { label: "Internships", value: "6" },
  { label: "Industry Certifications", value: "11" },
  { label: "LeetCode Solved", value: "850+" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
      >
        <span className="relative grid h-2 w-2 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[var(--neon)] opacity-75" />
          <span className="h-2 w-2 rounded-full bg-[var(--neon)]" />
        </span>
        Available for SDE, AI/ML, Cloud and Data Engineering roles - 2026 & 2027
      </motion.div>

      {/* Split layout: Left text | Right portrait */}
      <div className="mt-10 grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — Name + credentials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-start text-left"
        >


          {/* Glass moving name */}
          <div className="glass-name relative mt-3 inline-block overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 backdrop-blur-xl sm:px-8 sm:py-5">
            {/* Moving gradient border effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <div className="name-shimmer absolute inset-0" />
            </div>
            <h1 className="relative font-display font-bold leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,5.5rem)] whitespace-nowrap text-gradient">
              Mega Varshan
            </h1>
          </div>

          {/* Small tagline */}
          <p className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Building intelligent systems that transform data into decisions
          </p>

          {/* Credentials */}
          <div className="mt-6 space-y-2.5">
            <Credential icon={GraduationCap}>
              Final Year AI Undergrad at SRM University, Chennai 🎓
            </Credential>
            <Credential icon={FlaskConical}>
              Co-Founder at Foresight X Research Labs
            </Credential>
            <Credential icon={BrainCircuit}>
              AI Research Engineer and Data Scientist
            </Credential>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--cyan-glow)] px-5 py-3 text-sm font-medium text-[oklch(0.13_0.02_270)] shadow-[var(--shadow-glow)] transition hover:shadow-[var(--shadow-glow-strong)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={resume}
              download
              target="_blank"
              rel="noreferrer"
              className="glass-strong inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Sparkles className="h-4 w-4" />
              Explore Experience
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <Portrait src={photo} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="glass glow-border rounded-2xl p-4 text-center">
            <div className="font-display text-3xl font-semibold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .name-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            oklch(0.78 0.18 200 / 0.15) 25%,
            oklch(0.7 0.22 295 / 0.12) 50%,
            oklch(0.82 0.19 195 / 0.15) 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: name-shimmer-move 3s ease-in-out infinite;
        }
        @keyframes name-shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}

function Credential({ children, icon: Icon }: { children: React.ReactNode; icon: any }) {
  return (
    <div className="flex items-center gap-3 font-sans text-[13px] font-medium tracking-wide text-foreground/80">
      <Icon className="h-3.5 w-3.5 text-[var(--neon)]" />
      <span>{children}</span>
    </div>
  );
}

function Portrait({ src }: { src: string }) {
  return (
    <div className="relative h-72 w-72 md:h-96 md:w-96">
      {/* Orbit rings */}
      {[1, 1.15, 1.35].map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-white/10"
          style={{
            transform: `scale(${s})`,
            animation: `spin ${24 + i * 12}s linear infinite`,
            animationDirection: i % 2 ? "reverse" : "normal",
          }}
        />
      ))}
      {/* Glow halo */}
      <div className="absolute -inset-6 rounded-full bg-[radial-gradient(closest-side,_var(--neon-soft),_transparent_70%)] blur-2xl" />

      {/* Photo */}
      <div className="absolute inset-3 overflow-hidden rounded-full glow-border">
        <img
          src={src}
          alt="Mega Varshan"
          className="h-full w-full object-cover [object-position:50%_25%] grayscale-[15%] contrast-[1.05]"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.02_270)]/60 via-transparent to-transparent" />
      </div>

      {/* Floating tags */}
      <FloatingTag className="left-[-12%] top-[18%]" delay={0}>Data</FloatingTag>
      <FloatingTag className="right-[-10%] top-[25%]" delay={1.2}>AI ML</FloatingTag>
      <FloatingTag className="left-[-6%] bottom-[20%]" delay={2.4}>Gen AI LLM</FloatingTag>
      <FloatingTag className="right-[5%] bottom-[10%]" delay={3.6}>Cloud</FloatingTag>

      {/* Orbiting nodes */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const r = 52;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return (
            <circle key={i} cx={x} cy={y} r="0.9" fill="oklch(0.82 0.19 195)">
              <animate attributeName="r" values="0.9;1.8;0.9" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </svg>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function FloatingTag({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div
      className={`glass-strong absolute rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/90 shadow-[var(--shadow-glow)] ${className}`}
      style={{ animation: `float-slow 8s ease-in-out ${delay}s infinite` }}
    >
      <span className="mr-1.5 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[var(--neon)] align-middle" />
      {children}
    </div>
  );
}
