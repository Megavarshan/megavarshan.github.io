import { useState } from "react";
import { toast } from "sonner";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            const formData = new FormData(e.currentTarget);
            formData.append("access_key", "c40b7236-35a9-4547-8827-bd5a77caac76");

            try {
              const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
              }).then((res) => res.json());

              if (res.success) {
                toast.success("Message sent successfully!");
                (e.target as HTMLFormElement).reset();
              } else {
                toast.error(res.message || "Failed to send message.");
              }
            } catch (error) {
              toast.error("An error occurred. Please try again later.");
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="glass glow-border rounded-3xl p-7 lg:col-span-3"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">// transmit message</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" placeholder="What's this about?" required />
          </div>
          <div className="mt-4">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about the role or project..."
              required
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-[var(--neon)]/60 focus:bg-white/[0.05]"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon)] to-[var(--cyan-glow)] px-5 py-3 text-sm font-medium text-[oklch(0.13_0.02_270)] shadow-[var(--shadow-glow)] transition hover:shadow-[var(--shadow-glow-strong)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message →"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-[var(--neon)]/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}
