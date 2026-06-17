import { Section } from "./Section";
import { ShieldCheck } from "lucide-react";

const certs = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Oracle Generative AI Professional", issuer: "Oracle" },
  { name: "Oracle AI Vector Search", issuer: "Oracle" },
  { name: "Oracle Developer Certification", issuer: "Oracle" },
  { name: "SAP Analytics Cloud Data Analyst", issuer: "SAP" },
  { name: "Salesforce AgentForce Specialist", issuer: "Salesforce" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Verified across <span className="text-gradient">AI, data, and cloud</span>.</>}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <div key={c.name} className="glass glow-border group relative overflow-hidden rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--violet-glow)]/20 text-[var(--neon)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--neon)]">Verified</span>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold leading-tight">{c.name}</h3>
            <div className="mt-1 text-xs text-muted-foreground">{c.issuer}</div>
            <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-[var(--neon)]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </Section>
  );
}
