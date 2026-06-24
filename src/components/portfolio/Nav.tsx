import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
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
          <div className="absolute top-[120%] left-0 right-0 glass-strong rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-[var(--shadow-elevated)] border border-white/10 animate-in fade-in slide-in-from-top-2">
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
    </header>
  );
}
