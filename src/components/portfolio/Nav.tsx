import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements", label: "Achievements" },
  { href: "#leetcode", label: "LeetCode" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center">
      {/* High-Contrast Cyberpunk Ribbon */}
      <div className="w-full bg-[#FF003C] text-white flex items-center shadow-[0_0_25px_rgba(255,0,60,0.5)] relative overflow-hidden font-display">
        {/* Left static label */}
        <div className="z-10 flex items-center gap-1.5 bg-black px-3 sm:px-5 py-2 text-[10px] sm:text-xs uppercase border-r-2 border-[#FF003C] text-[#FF003C] font-black tracking-widest shadow-[8px_0_20px_rgba(0,0,0,0.9)]">
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inset-0 rounded-full bg-[#FF003C] opacity-100"></span>
            <span className="relative rounded-full h-2 w-2 bg-[#FF003C]"></span>
          </span>
          NEW UPDATE
        </div>
        
        {/* Marquee Center */}
        <div className="flex-1 overflow-hidden relative flex font-bold">
          <style>{`
            @keyframes cyber-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="flex w-max animate-[cyber-marquee_20s_linear_infinite] hover:[animation-play-state:paused] py-2">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 tracking-[0.15em] uppercase text-[11px] sm:text-xs whitespace-nowrap drop-shadow-md">
                🔥 Selected into AMAZON ML SUMMER SCHOOL 2026 🔥
              </span>
            ))}
          </div>
        </div>

        {/* Right static label */}
        <div className="z-10 hidden sm:flex items-center gap-1.5 bg-black px-4 sm:px-5 py-2 text-[10px] sm:text-xs uppercase border-l-2 border-[#FF003C] text-[#FF003C] font-black tracking-widest shadow-[-8px_0_20px_rgba(0,0,0,0.9)]">
          NEW UPDATE
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inset-0 rounded-full bg-[#FF003C] opacity-100"></span>
            <span className="relative rounded-full h-2 w-2 bg-[#FF003C]"></span>
          </span>
        </div>
      </div>

      <div className="w-full flex justify-center px-4 pt-4">
        <nav className={`relative flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : "glass"}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[var(--neon)] to-[var(--violet-glow)] text-[oklch(0.13_0.02_270)] text-xs font-bold">M</span>
          <span className="hidden sm:inline">Megavarshan<span className="text-muted-foreground">.ai</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--cyan-glow)] px-4 py-1.5 text-sm font-medium text-[oklch(0.13_0.02_270)] shadow-[var(--shadow-glow)] transition hover:shadow-[var(--shadow-glow-strong)]"
          >
            Let's talk
          </a>
          
          {/* Hamburger Button for Mobile */}
          <button 
            className="md:hidden p-1.5 text-muted-foreground hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-[120%] left-0 right-0 bg-black/95 backdrop-blur-3xl rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-2xl border border-white/10 animate-in fade-in slide-in-from-top-2">
            {links.map((l) => (
              <a 
                key={l.href}
                href={l.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
      </div>
    </header>
  );
}
