import { Section } from "./Section";
import { ShieldCheck } from "lucide-react";

const certs = [
  { name: "Oracle Autonomous Database Cloud 2025 Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Oracle APEX Cloud Developer Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "OCI 2025 Certified Developer Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Oracle AI Vector Search Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "SAP Analytics Cloud Data Analyst", issuer: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Salesforce AgentForce Specialist", issuer: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
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
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--violet-glow)]/20 text-[var(--neon)] p-2">
                {c.logo ? (
                  <img src={c.logo} alt={c.issuer} className="h-full w-full object-contain filter brightness-0 invert opacity-80" />
                ) : (
                  <ShieldCheck className="h-5 w-5" />
                )}
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
