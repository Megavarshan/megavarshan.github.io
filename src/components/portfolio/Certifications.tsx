import { useState, useRef, Suspense } from "react";
import { Section } from "./Section";
import { ShieldCheck } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

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
  { name: "Agentic AI Certified Foundations Associate", issuer: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0D85B8FCAADFD6D8431E2DEF4119C5284E5374CE1C3FED5B30351BA4B6338AEF" },
];

function CertNode({ cert, index, total }: { cert: Cert; index: number; total: number }) {
  const radius = 6;
  const angle = (index / total) * Math.PI * 2;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  // Create a slight wave in the Y axis
  const y = Math.sin(angle * 3) * 1.5;

  const [hovered, setHover] = useState(false);

  const cardContent = (
    <div className="flex flex-col h-full overflow-hidden p-6">
      <div className="flex items-start justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--violet-glow)]/20 text-[var(--neon)] p-2">
          {cert.logo ? (
            <img src={cert.logo} alt={cert.issuer} className="h-full w-full object-contain filter brightness-0 invert opacity-80" />
          ) : (
            <ShieldCheck className="h-5 w-5" />
          )}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--neon)] shrink-0">Verified</span>
      </div>
      <div className="mt-4 flex flex-col flex-1 justify-center">
        <h3 className="font-display font-semibold leading-tight text-base text-white/90">{cert.name}</h3>
        <div className="mt-1 text-xs text-muted-foreground">{cert.issuer}</div>
        {cert.credentialId && <div className="mt-1 text-xs text-muted-foreground">Credential ID: {cert.credentialId}</div>}
      </div>
    </div>
  );

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[x, y, z]}>
        {/* Core Node */}
        <mesh 
          onPointerOver={() => setHover(true)} 
          onPointerOut={() => setHover(false)}
        >
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial 
            color={hovered ? "#00ffff" : "#8b5cf6"} 
            emissive={hovered ? "#00ffff" : "#8b5cf6"} 
            emissiveIntensity={hovered ? 2 : 0.5} 
          />
        </mesh>
        
        {/* The HTML Card wrapper */}
        <Html 
          distanceFactor={12} 
          position={[0, 0, 0]} 
          center 
          zIndexRange={[100, 0]}
          className={`transition-all duration-500 ease-out ${hovered ? 'pointer-events-auto z-50' : 'pointer-events-none z-0'}`}
        >
          <div 
            className={`relative w-[320px] transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-30 scale-75'}`}
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => setHover(false)}
            style={{ 
              filter: hovered ? 'none' : 'blur(2px)',
            }}
          >
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noreferrer" className="block w-full">
                <GlowCard className="bg-black/60 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors">
                  {cardContent}
                </GlowCard>
              </a>
            ) : (
              <div className="block w-full">
                <GlowCard className="bg-black/60 backdrop-blur-xl border border-white/10">
                  {cardContent}
                </GlowCard>
              </div>
            )}
          </div>
        </Html>
      </group>
    </Float>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Very slow continuous rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      <group ref={groupRef}>
        {certs.map((cert, i) => (
          <CertNode key={cert.name} cert={cert} index={i} total={certs.length} />
        ))}
      </group>
      
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        autoRotate={false} 
        maxDistance={25}
        minDistance={5}
        maxPolarAngle={Math.PI / 1.5} 
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Verified across <span className="text-gradient">AI, data, and cloud</span>.</>}
    >
      <div className="h-[600px] md:h-[700px] w-full rounded-3xl overflow-hidden border border-white/5 bg-black/40 relative group">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <Canvas camera={{ position: [0, 2, 16], fov: 45 }}>
          <Suspense fallback={
            <Html center>
              <div className="text-white/50 animate-pulse font-mono text-sm tracking-widest">INITIALIZING WEBGL...</div>
            </Html>
          }>
            <Scene />
          </Suspense>
        </Canvas>
        
        <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
          <p className="text-[10px] sm:text-xs text-[var(--neon)]/60 tracking-[0.3em] uppercase font-mono">Drag to rotate • Scroll to zoom • Hover to inspect</p>
        </div>
      </div>
    </Section>
  );
}
