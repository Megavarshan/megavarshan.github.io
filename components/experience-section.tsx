"use client"

import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Co-founder & AI Research Member",
    company: "Foresight-X Lab",
    period: "Jan 2025 - Present",
    description:
      "Leading AI-driven projects in disaster management and resilience in collaboration with national agencies (DRDO, ARIES). Designing ML-based decision support systems and sustainable deep learning models for seismic risk, climate resilience, and geospatial intelligence.",
  },
  {
    role: "AI Research Intern",
    company: "NIT Trichy",
    period: "May 2025 - Nov 2025",
    description:
      "Developing an AI-powered skin cancer detection model using ConvNeXt and advanced medical signal features (MSFs) for robust classification.",
  },
  {
    role: "AI Developer Intern",
    company: "ATRIBS Software Systems (SHIELD Group Intl)",
    period: "Jun 2025 - Aug 2025",
    description:
      "Engineered data-driven AI models for business optimization and automation use cases. Delivered analytical insights and performance evaluations supporting strategic client operations.",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Experience</h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl text-pretty">
          Building and deploying AI systems that create real-world impact across research and industry
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-16 md:pl-20">
                {/* Timeline dot with pulse animation for current role */}
                <div
                  className={`absolute left-2.5 sm:left-3.5 md:left-5 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-4 border-background ${
                    index === 0 ? "animate-pulse" : ""
                  }`}
                />

                <div className="glass glass-hover border border-border/50 rounded-lg p-4 sm:p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-pretty">{exp.role}</h3>
                        <p className="text-base sm:text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit text-xs sm:text-sm px-3 py-1 glass">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
