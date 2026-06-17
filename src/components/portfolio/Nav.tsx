import { useEffect, useState } from "react";

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
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : "glass"}`}>
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
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--cyan-glow)] px-4 py-1.5 text-sm font-medium text-[oklch(0.13_0.02_270)] shadow-[var(--shadow-glow)] transition hover:shadow-[var(--shadow-glow-strong)]"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
