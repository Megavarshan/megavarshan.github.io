"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  const renderBioWithLinks = (text: string) => {
    // Replace link placeholders with actual JSX links
    const processedText = text
      .replace(
        /\[Eluter\]/g,
        '<a href="https://www.eluter.com/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Eluter</a>',
      )
      .replace(
        /\[DESAFIA\]/g,
        '<a href="https://desafia.tech/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">DESAFIA</a>',
      )
      .replace(
        /\[Polkadot Blockchain Academy\]/g,
        '<a href="https://pbax.polkadot.academy/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Polkadot Blockchain Academy</a>',
      )
      .replace(
        /\[Devconnect\]/g,
        '<a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Devconnect</a>',
      )

    // Process bold text
    const parts = processedText.split(/(\*.*?\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const boldContent = part.slice(1, -1)
        return (
          <strong key={index} className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: boldContent }} />
        )
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <Image
                    src="/images/profile-photo.jpeg"
                    alt="AI Research Engineer professional headshot"
                    fill
                    className="object-cover scale-125"
                    style={{ objectPosition: "center 30%" }}
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Me</h2>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm an <strong className="text-white">AI Research Engineer</strong> passionate about building
                  intelligent systems that address real-world challenges in{" "}
                  <strong className="text-white">sustainability, disaster management, and resilience</strong>.
                </p>
                <p>
                  My work spans{" "}
                  <strong className="text-white">
                    machine learning, deep learning, geospatial AI, and cloud computing
                  </strong>
                  —combining research rigor with practical engineering to create solutions that matter.
                </p>
                <p>
                  Currently, I'm focused on leveraging{" "}
                  <strong className="text-white">satellite imagery, computer vision, and predictive analytics</strong>{" "}
                  to help communities prepare for and respond to natural disasters more effectively.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 mt-8 group transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
