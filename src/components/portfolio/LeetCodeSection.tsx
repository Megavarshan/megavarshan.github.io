import { Section } from "./Section";
import { GlowCard } from "./GlowCard";
import { ExternalLink, Trophy, Target, TrendingUp, Cpu } from "lucide-react";
import { motion } from "motion/react";

export function LeetCodeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Section
      id="leetcode"
      eyebrow="Competitive Programming"
      title={<>Problem <span className="text-gradient">Solving</span>.</>}
    >
      <div className="relative py-12 flex flex-col items-center justify-center min-h-[500px]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[var(--neon)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          className="relative z-10 w-full max-w-5xl px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main sleek header card */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <GlowCard className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#030917]/60 backdrop-blur-2xl border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10 w-full md:w-auto">
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-[0_0_30px_-10px_rgba(255,255,255,0.5)] overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-2 md:mb-3">Megavarshan</h3>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <a 
                      href="https://leetcode.com/megavarshan" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-[var(--neon)] hover:bg-[var(--neon)]/10 hover:border-[var(--neon)]/30 transition-all"
                    >
                      @megavarshan <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative animated bars (Upward trend) */}
              <div className="hidden md:flex gap-1.5 absolute right-12 bottom-0 h-24 opacity-30 items-end">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1.5 bg-[var(--neon)] rounded-t-sm"
                    initial={{ height: (i * 4) + 15 }}
                    animate={{ height: (i * 4) + 25 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                  />
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Stats Grid - Minimalist & Sleek */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            
            <motion.div variants={itemVariants}>
              <GlowCard className="p-4 md:p-8 aspect-square md:aspect-auto bg-[#030917]/40 backdrop-blur-xl border border-white/5 hover:border-[var(--neon)]/30 transition-all duration-300 group h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4 md:mb-12">
                  <span className="text-[10px] md:text-sm font-medium text-muted-foreground tracking-widest uppercase">Rating</span>
                  <Trophy className="w-4 h-4 md:w-5 md:h-5 text-[var(--neon)] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold font-mono text-white tracking-tight">1,553</div>
                  <div className="text-[9px] md:text-xs text-[var(--neon)] mt-1 md:mt-2 font-mono flex items-center gap-1.5 md:gap-2">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[var(--neon)] animate-pulse" /> Contest Rating
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard className="p-4 md:p-8 aspect-square md:aspect-auto bg-[#030917]/40 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-300 group h-full flex flex-col justify-between relative overflow-hidden">
                {/* Abstract shape */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 md:w-40 md:h-40 border border-white/5 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="flex items-start justify-between mb-4 md:mb-12 relative z-10">
                  <span className="text-[10px] md:text-sm font-medium text-muted-foreground tracking-widest uppercase">Rank</span>
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <div className="relative z-10">
                  <div className="text-2xl md:text-4xl font-bold font-mono text-white tracking-tight">54,518</div>
                  <div className="text-[9px] md:text-xs text-muted-foreground mt-1 md:mt-2 font-mono">
                    Global Ranking
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard className="p-4 md:p-8 aspect-square md:aspect-auto bg-[#030917]/40 backdrop-blur-xl border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4 md:mb-12">
                  <span className="text-[10px] md:text-sm font-medium text-muted-foreground tracking-widest uppercase">Percentile</span>
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#0ea5e9] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <div className="text-xl md:text-3xl font-bold font-mono text-[#0ea5e9] tracking-tight leading-none">Top 31.65%</div>
                  <div className="text-[9px] md:text-xs text-muted-foreground mt-1 md:mt-2 font-mono">
                    Of Active Users
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard className="p-4 md:p-8 aspect-square md:aspect-auto bg-[#030917]/40 backdrop-blur-xl border border-white/5 hover:border-green-400/30 transition-all duration-300 group h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4 md:mb-12">
                  <span className="text-[10px] md:text-sm font-medium text-muted-foreground tracking-widest uppercase">Solved</span>
                  <Cpu className="w-4 h-4 md:w-5 md:h-5 text-green-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold font-mono text-green-400 tracking-tight">850+</div>
                  <div className="text-[9px] md:text-xs text-muted-foreground mt-1 md:mt-2 font-mono">
                    Problems Conquered
                  </div>
                </div>
              </GlowCard>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </Section>
  );
}
