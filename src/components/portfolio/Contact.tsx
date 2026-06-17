import { Section } from "./Section";
import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react";
const resume = "/resume.pdf";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/megavarshan", value: "linkedin.com/in/megavarshan" },
  { icon: Github, label: "GitHub", href: "https://github.com/megavarshan", value: "github.com/megavarshan" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/megavarshan", value: "leetcode.com/megavarshan" },
  { icon: Mail, label: "Email", href: "mailto:megavarshan1616@gmail.com", value: "megavarshan1616@gmail.com" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build the <span className="text-gradient">next intelligent system</span>.</>}
      intro="Open to AI Engineer, ML Engineer, Computer Vision, and Generative AI roles. Reach out — I respond within 24 hours."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="glass glow-border rounded-3xl p-7 lg:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">// channels</div>
          <ul className="mt-5 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-[var(--neon)]/40 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--violet-glow)]/20 text-[var(--neon)]">
                      <l.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <div className="text-sm font-medium">{l.label}</div>
                      <div className="text-xs text-muted-foreground">{l.value}</div>
                    </span>
                  </span>
                  <span className="text-muted-foreground transition group-hover:text-[var(--neon)]">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resume}
            download
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon)] to-[var(--cyan-glow)] px-5 py-3 text-sm font-medium text-[oklch(0.13_0.02_270)] shadow-[var(--shadow-glow)] transition hover:shadow-[var(--shadow-glow-strong)]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="glass glow-border rounded-3xl p-7 lg:col-span-3"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">// transmit message</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@company.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" placeholder="What's this about?" />
          </div>
          <div className="mt-4">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about the role or project..."
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-[var(--neon)]/60 focus:bg-white/[0.05]"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon)] to-[var(--cyan-glow)] px-5 py-3 text-sm font-medium text-[oklch(0.13_0.02_270)] shadow-[var(--shadow-glow)] transition hover:shadow-[var(--shadow-glow-strong)]"
          >
            Send message →
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-[var(--neon)]/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}
