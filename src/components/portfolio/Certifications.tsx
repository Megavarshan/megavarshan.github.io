import { Section } from "./Section";
import { ShieldCheck } from "lucide-react";
import { GlowCard } from "./GlowCard";

type Cert = {
  name: string;
  issuer: string;
  logo?: string;
  link?: string;
  credentialId?: string;
};

const certs: Cert[] = [
  { name: "Microsoft Certified: Azure AI Engineer Associate", issuer: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://learn.microsoft.com/en-in/users/megavarshan/credentials/400d1706402f4a41?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
  { name: "Oracle Autonomous Database Cloud 2025 Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8CC5915D1B50E14308B53F736FB45B5D09E0198AC513825D9599D6143EBF1970" },
  { name: "Oracle APEX Cloud Developer Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9EEBB2EB670D8094A6D6855C7F52D883530A0A916942BA9370BCF7FBAABCCFDE" },
  { name: "OCI 2025 Certified Developer Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=874772C2DEFDA06406A4951142FB8A99F3B5D5561753F2D2DD00F992756D591D" },
  { name: "Oracle AI Vector Search Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B19DE67FD8255D837EA204F77BB72F588BB0991D90D3B32435402DB0B80A6228" },
  { name: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C4E5A98DC05CF4DD0DB2EBDF2C196E443A54A37529338E3C07387838CF7BD991" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", link: "https://www.credly.com/badges/f0e3e651-9a3c-4355-bff9-df63831f139d/public_url" },
  { name: "SAP Certified - Data Analyst - SAP Analytics Cloud", issuer: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", link: "https://www.credly.com/badges/aee95b54-a4a5-45b3-a0d8-f9d909341ed3" },
  { name: "Salesforce AgentForce Specialist", issuer: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", credentialId: "7282784" },
  { name: "Advanced Google Analytics", issuer: "Google Analytics Academy" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Verified across <span className="text-gradient">AI, data, and cloud</span>.</>}
    >
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)]">
        {certs.map((c, i) => {
          // Bento layout logic for 10 items in a 3-column grid
          // Row 1: span-2, span-1
          // Row 2: span-1, span-1, span-1
          // Row 3: span-1, span-2 (reversed)
          // Row 4: span-1, span-1, span-1
          let spanClass = "col-span-1";
          if (i === 0) spanClass = "md:col-span-2 lg:col-span-2";
          if (i === 6) spanClass = "md:col-span-2 lg:col-span-2";
          
          // Add a special glow or gradient for the prominent cards
          const isProminent = i === 0 || i === 6;
          const content = (
            <>
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--violet-glow)]/20 text-[var(--neon)] p-2">
                  {c.logo ? (
                    <img src={c.logo} alt={c.issuer} className="h-full w-full object-contain filter brightness-0 invert opacity-80" />
                  ) : (
                    <ShieldCheck className="h-5 w-5" />
                  )}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--neon)] shrink-0">Verified</span>
              </div>
              <div className="mt-4 flex flex-col flex-1 justify-center">
                <h3 className={`font-display font-semibold leading-tight ${isProminent ? 'text-lg md:text-xl' : 'text-base'}`}>{c.name}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{c.issuer}</div>
                {c.credentialId && <div className="mt-1 text-xs text-muted-foreground">Credential ID: {c.credentialId}</div>}
              </div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-[var(--neon)]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </>
          );

          const baseCardClass = "flex flex-col h-full overflow-hidden p-6 transition-all duration-300 hover:bg-white/5 hover:-translate-y-1";
          const prominentClass = isProminent ? "bg-gradient-to-br from-white/[0.03] to-white/[0.01]" : "";
          const className = `${baseCardClass} ${prominentClass}`;

          if (c.link) {
            return (
              <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className={`block h-full group ${spanClass}`}>
                <GlowCard className={className}>
                  {content}
                </GlowCard>
              </a>
            );
          }

          return (
            <div key={c.name} className={`block h-full group ${spanClass}`}>
              <GlowCard className={className}>
                {content}
              </GlowCard>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
