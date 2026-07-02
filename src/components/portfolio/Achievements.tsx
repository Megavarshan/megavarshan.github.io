import { Section } from "./Section";
import { Trophy, Medal, Award } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { useEffect, useRef } from "react";

const items = [
  {
    image: "/achievements/research.jpg",
    imagePosition: "object-center",
    fallbackIcon: Medal,
    title: "Silver Medal",
    sub: "SRM Research Day 2026",
    desc: "Recognized for Research contribution to Sustainable and Impactful AI",
    link: "https://www.linkedin.com/posts/megavarshan_achievementunlocked-research-ai-activity-7453794611648565248-DIJr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXMBI8BxGIFJDz8EG5SC5K6kt6grEcQV2o",
  },
  {
    image: "/achievements/techzooka.jpg",
    fallbackIcon: Trophy,
    title: "Top 10 Finalist",
    sub: "Infosys Techzooka · PALS IITM Hackathon 2025",
    desc: "Finalist among national teams in a flagship AI hackathon.",
    link: "https://www.linkedin.com/posts/megavarshan_top10winner-infosystechzooka-techzooka2025-activity-7369370990994206722-5YsR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXMBI8BxGIFJDz8EG5SC5K6kt6grEcQV2o",
  },
  {
    image: "/achievements/seismo.jpg",
    fallbackIcon: Award,
    title: "National Runner Up",
    sub: "SEISMO HACK 1.0 · ISET & SRM IST",
    desc: "National Disaster Management hackathon (Aug 2025).",
    link: "https://www.linkedin.com/posts/megavarshan_nationalwinners-seismohack-achievementunlocked-activity-7362874820130177024-lr-s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXMBI8BxGIFJDz8EG5SC5K6kt6grEcQV2o",
  },
  {
    image: "/achievements/unleash.jpg",
    fallbackIcon: Medal,
    title: "2nd Runner Up",
    sub: "UNLEASH 2024 · UNLEASH & SRMIST",
    desc: "Renewable Energy and Water Access for Rural Development.",
    link: "https://www.linkedin.com/posts/megavarshan_achievementunlocked-reward-unleashhacks-activity-7247190818141155329-oilD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXMBI8BxGIFJDz8EG5SC5K6kt6grEcQV2o",
  },
  {
    image: "/achievements/hybrid.jpg",
    fallbackIcon: Trophy,
    title: "Winner of Hybrid Hacks 2024",
    sub: "AARUUSH · SRMIST",
    desc: "AI Sustainability Hackathon.",
  },
];

export function Achievements() {
  const duplicatedItems = [...items, ...items, ...items];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let isInteracting = false;

    const step = () => {
      if (!isInteracting && !isDown) {
        el.scrollLeft += 0.7; // adjust speed
        // reset to middle set to allow infinite scroll in both directions if dragged
        if (el.scrollLeft >= (el.scrollWidth * 2) / 3) {
          el.scrollLeft -= el.scrollWidth / 3;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += el.scrollWidth / 3;
        }
      }
      animationId = requestAnimationFrame(step);
    };
    
    // Initial start position
    setTimeout(() => {
      if (el) el.scrollLeft = el.scrollWidth / 3;
      animationId = requestAnimationFrame(step);
    }, 100);

    const handleDown = (e: MouseEvent) => {
      isDown = true;
      isInteracting = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    
    const handleLeave = () => {
      isDown = false;
      isInteracting = false;
      el.style.cursor = 'grab';
    };
    
    const handleUp = () => {
      isDown = false;
      isInteracting = false;
      el.style.cursor = 'grab';
    };
    
    const handleMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = () => isInteracting = true;
    const handleTouchEnd = () => isInteracting = false;

    el.addEventListener('mousedown', handleDown);
    el.addEventListener('mouseleave', handleLeave);
    el.addEventListener('mouseup', handleUp);
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd);
    el.addEventListener('mouseenter', () => isInteracting = true);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('mousedown', handleDown);
      el.removeEventListener('mouseleave', handleLeave);
      el.removeEventListener('mouseup', handleUp);
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('mouseenter', () => isInteracting = true);
    };
  }, []);

  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={<>Milestones along the <span className="text-gradient">build</span>.</>}
    >
      <div 
        className="relative overflow-hidden py-8 -mx-4 px-4 flex"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto cursor-grab [&::-webkit-scrollbar]:hidden w-full select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedItems.map((a, i) => (
            <GlowCard 
              key={i} 
              className="relative overflow-hidden w-[280px] md:w-[350px] shrink-0 flex flex-col bg-[#030917]/80 hover:bg-[#0a1526] transition-all duration-500 rounded-2xl hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_var(--neon)] group pointer-events-auto"
            >
              <div className="relative w-full aspect-[4/3] bg-black overflow-hidden border-b border-white/10 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                  <a.fallbackIcon className="h-10 w-10 text-[var(--neon)]/50" />
                </div>
                
                <img 
                  src={a.image} 
                  alt={a.title}
                  className={`absolute inset-0 w-full h-full object-cover ${a.imagePosition || "object-top"} z-10 transition-transform duration-700 group-hover:scale-110`}
                  draggable={false}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                
                {(i % items.length === 0) && (
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-[var(--neon)]/30 z-20 shadow-lg flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse"></span>
                    Most Recent
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 glass relative z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--neon)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="font-display text-lg md:text-xl font-semibold text-white/90 leading-tight mb-2 group-hover:text-white transition-colors flex justify-between items-start pointer-events-auto">
                  <span>{a.title}</span>
                  {a.link && (
                    <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:text-[#004182] transition-transform hover:scale-110 shrink-0 bg-white rounded-sm" title="View on LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </h3>
                <div className="text-[10px] md:text-xs font-mono text-[var(--neon)] uppercase tracking-wider mb-4">
                  {a.sub}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-auto">
                  {a.desc}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
