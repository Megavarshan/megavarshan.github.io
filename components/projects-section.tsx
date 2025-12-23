"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Zap } from "lucide-react"

const projects = [
  {
    title: "Biomass Smart Cultivation System",
    description:
      "An AI-powered cultivation management platform that optimizes biomass yield, resource utilization, and long-term soil sustainability using predictive modeling and data-driven decision systems.",
    tags: ["Machine Learning", "Agriculture", "Sustainability", "IoT"],
    icon: Lightbulb,
  },
  {
    title: "Hybrid Renewable Energy Platform",
    description:
      "A hybrid solar–biomass–battery energy system designed for high-altitude and remote regions, focusing on seasonal adaptability, reliability, and off-grid deployment.",
    tags: ["Energy Systems", "IoT", "System Design", "Sustainability"],
    icon: Zap,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
        </div>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl text-pretty">
          Building intelligent systems that address sustainability and energy challenges with real-world impact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass glass-hover border-border/50 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <project.icon className="w-10 h-10 text-primary mb-4" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-xs font-mono text-primary">0{index + 1}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
