import { useState } from "react";
import { Section } from "./Section";
import { ShieldCheck, X, ExternalLink, Calendar, CheckCircle2, Award } from "lucide-react";
import { GlowCard } from "./GlowCard";
import * as Dialog from "@radix-ui/react-dialog";

type Cert = {
  name: string;
  issuer: string;
  logo?: string;
  link?: string;
  credentialId?: string;
  issueDate?: string;
  expiryDate?: string;
};

const certs: Cert[] = [
  { name: "Oracle Autonomous Database Cloud 2025 Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8CC5915D1B50E14308B53F736FB45B5D09E0198AC513825D9599D6143EBF1970", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "Oracle APEX Cloud Developer Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9EEBB2EB670D8094A6D6855C7F52D883530A0A916942BA9370BCF7FBAABCCFDE", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "OCI 2025 Certified Developer Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=874772C2DEFDA06406A4951142FB8A99F3B5D5561753F2D2DD00F992756D591D", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "Oracle AI Vector Search Certified Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B19DE67FD8255D837EA204F77BB72F588BB0991D90D3B32435402DB0B80A6228", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C4E5A98DC05CF4DD0DB2EBDF2C196E443A54A37529338E3C07387838CF7BD991", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "Agentic AI Certified Foundations Associate", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0D85B8FCAADFD6D8431E2DEF4119C5284E5374CE1C3FED5B30351BA4B6338AEF", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "Microsoft Certified: Azure AI Engineer Associate", issuer: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://learn.microsoft.com/en-in/users/megavarshan/credentials/400d1706402f4a41?ref=https%3A%2F%2Fwww.linkedin.com%2F", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "Advanced Google Analytics", issuer: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", link: "https://www.credly.com/badges/f0e3e651-9a3c-4355-bff9-df63831f139d/public_url", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "SAP Certified - Data Analyst - SAP Analytics Cloud", issuer: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", link: "https://www.credly.com/badges/aee95b54-a4a5-45b3-a0d8-f9d909341ed3", issueDate: "2024", expiryDate: "No Expiration" },
  { name: "Salesforce AgentForce Specialist", issuer: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", credentialId: "7282784", issueDate: "2024", expiryDate: "No Expiration" },
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  // Group certificates by issuer
  const groupedCerts = certs.reduce((acc, cert) => {
    if (!acc[cert.issuer]) {
      acc[cert.issuer] = { logo: cert.logo, certs: [] };
    }
    acc[cert.issuer].certs.push(cert);
    return acc;
  }, {} as Record<string, { logo?: string; certs: Cert[] }>);

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>11 Industry Certifications across <span className="text-gradient">AI, data, and cloud</span>.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedCerts).map(([issuer, data], groupIndex) => {
          // Make Oracle (which has 6 certs) span 2 columns and 2 rows for a nicer layout
          const isLargeGroup = data.certs.length > 3;
          let spanClass = "col-span-1";
          if (isLargeGroup) {
            spanClass = "md:col-span-2 lg:col-span-2 lg:row-span-2";
          }

          return (
            <GlowCard 
              key={issuer} 
              className={`relative overflow-hidden flex flex-col p-6 bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] ${spanClass}`}
            >
              {/* Watermark Logo Background */}
              {data.logo && (
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none grayscale">
                  <img src={data.logo} alt="" className="w-64 h-64 object-contain" />
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 p-2.5 backdrop-blur-md">
                  {data.logo ? (
                    <img src={data.logo} alt={issuer} className="h-full w-full object-contain filter brightness-0 invert opacity-90" />
                  ) : (
                    <ShieldCheck className="h-6 w-6 text-[var(--neon)]" />
                  )}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl tracking-tight">{issuer}</h3>
                  <div className="text-xs text-[var(--neon)] uppercase tracking-wider font-mono mt-0.5">
                    {data.certs.length} Certification{data.certs.length > 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* Certifications List */}
              <div className={`grid gap-3 relative z-10 ${isLargeGroup ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                {data.certs.map((cert) => (
                  <button
                    key={cert.name}
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-start gap-3 text-left p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group"
                  >
                    <Award className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-[var(--neon)] transition-colors shrink-0" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
                      {cert.name}
                    </span>
                  </button>
                ))}
              </div>
            </GlowCard>
          );
        })}
      </div>

      {/* Glassmorphism Popup Modal */}
      <Dialog.Root open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-4 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            
            <div className="relative overflow-hidden rounded-3xl bg-black/80 border border-white/20 p-8 shadow-[0_0_80px_-20px_var(--neon)] backdrop-blur-2xl">
              
              {/* Background ambient glow inside modal */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)] pointer-events-none" />
              
              <Dialog.Close className="absolute right-6 top-6 rounded-full p-2 text-white/50 opacity-70 transition-opacity hover:bg-white/10 hover:opacity-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--neon)]">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Dialog.Close>

              {selectedCert && (
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white/5 border border-white/10 p-4 mb-6 shadow-xl backdrop-blur-md">
                    {selectedCert.logo ? (
                      <img src={selectedCert.logo} alt={selectedCert.issuer} className="h-full w-full object-contain filter brightness-0 invert" />
                    ) : (
                      <ShieldCheck className="h-10 w-10 text-[var(--neon)]" />
                    )}
                  </div>

                  <Dialog.Title className="font-display text-2xl font-bold tracking-tight mb-2 leading-tight">
                    {selectedCert.name}
                  </Dialog.Title>
                  
                  <div className="text-[var(--neon)] font-mono text-xs uppercase tracking-[0.2em] mb-8">
                    {selectedCert.issuer}
                  </div>

                  <div className="w-full grid grid-cols-2 gap-4 mb-8 text-left">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-xs uppercase tracking-wider font-mono">Certified</span>
                      </div>
                      <div className="text-sm font-medium">{selectedCert.issueDate}</div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                        <span className="text-xs uppercase tracking-wider font-mono">Valid Upto</span>
                      </div>
                      <div className="text-sm font-medium">{selectedCert.expiryDate}</div>
                    </div>

                    {selectedCert.credentialId && (
                      <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/5">
                         <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          <span className="text-xs uppercase tracking-wider font-mono">Credential ID</span>
                        </div>
                        <div className="text-sm font-medium font-mono">{selectedCert.credentialId}</div>
                      </div>
                    )}
                  </div>

                  {selectedCert.link ? (
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-4 text-sm font-semibold transition-all hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
                    >
                      Verify Credential
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white/50 px-6 py-4 text-sm font-semibold cursor-not-allowed">
                      Verification Link Unavailable
                    </div>
                  )}
                </div>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Section>
  );
}
