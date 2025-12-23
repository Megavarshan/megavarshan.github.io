"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code2, Brain, Cloud, Database } from "lucide-react"

const skillCategories = {
  "AI & ML": {
    icon: Brain,
    color: "text-purple-400",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "Transformers",
      "GANs",
      "ConvNeXt",
      "Image Processing",
      "Computer Vision",
      "Natural Language Processing",
      "TensorFlow",
      "Langchain",
    ],
  },
  "Programming & Tools": {
    icon: Code2,
    color: "text-blue-400",
    skills: ["Python", "C++", "Java", "SQL", "OOP"],
  },
  "Data Engineering": {
    icon: Database,
    color: "text-green-400",
    skills: ["Power BI", "Docker", "PostgreSQL"],
  },
  Cloud: {
    icon: Cloud,
    color: "text-cyan-400",
    skills: ["AWS Lambda", "AWS IAM", "AWS Bedrock", "AWS SageMaker"],
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Skills & Expertise</h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl text-pretty">
          A comprehensive toolkit for building intelligent systems from research to production
        </p>

        <Tabs defaultValue="AI & ML" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 gap-1">
            {Object.entries(skillCategories).map(([category, data]) => {
              const Icon = data.icon
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs sm:text-sm flex items-center gap-2 py-3"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category}</span>
                  <span className="sm:hidden">{category.split(" ")[0]}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {Object.entries(skillCategories).map(([category, data]) => {
            const Icon = data.icon
            return (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="glass glass-hover border border-border/50 rounded-xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-primary/10 ${data.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {data.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 glass glass-hover hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
