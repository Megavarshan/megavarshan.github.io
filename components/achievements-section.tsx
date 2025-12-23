"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, ExternalLink } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    title: "First Prize at Hybrid Hacks",
    description: "AI Sustainability Hackathon",
    image: "/images/ideas.png",
    link: "#", // Will be updated when user provides the link
    isFirstPrize: true,
  },
  {
    title: "Top 10 Finalist at Infosys Techzooka",
    description: "IITM PALS Hackathon 2025",
    image: "/images/growth.png",
    link: "https://www.linkedin.com/posts/megavarshan_top10winner-infosystechzooka-techzooka2025-activity-7369370990994206722-5YsR?utm_source=social_share_send&utm_medium=member_desktop_web",
    isFirstPrize: false,
  },
  {
    title: "National Runner Up of SEISMO HACK 1.0",
    description: "National Level Disaster Management Hackathon",
    image: "/images/figma.png",
    link: "https://www.linkedin.com/posts/megavarshan_nationalwinners-seismohack-achievementunlocked-activity-7362874820130177024-lr-s?utm_source=social_share_send&utm_medium=member_desktop_web",
    isFirstPrize: false,
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Achievements</h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl text-pretty">
          Recognition for building impactful solutions at the intersection of AI and real-world challenges
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <a key={index} href={achievement.link} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="glass glass-hover border-border/50 overflow-hidden group-hover:border-primary/50 transition-all duration-300 h-full relative">
                {achievement.isFirstPrize && (
                  <div className="absolute top-4 right-4 z-20 bg-yellow-500 text-yellow-950 rounded-full p-3 shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <Trophy className="w-6 h-6" />
                  </div>
                )}

                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-start justify-between gap-2">
                    <span className="text-pretty">{achievement.title}</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
