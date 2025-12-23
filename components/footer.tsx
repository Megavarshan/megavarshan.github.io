"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Navigation</h3>
            <div className="space-y-3">
              {["home", "about", "skills", "projects", "experience"].map((section) => (
                <div
                  key={section}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer capitalize"
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {["achievements", "certifications", "contact"].map((section) => (
                <div
                  key={section}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer capitalize"
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-slate-400 mb-4">
              Interested in collaborating on AI research or building impactful solutions?
            </p>
            <p className="text-slate-300 mb-6 font-semibold">megavarshan@example.com</p>

            <div className="flex space-x-4">
              <Button
                size="icon"
                className="bg-slate-800 hover:bg-slate-700 rounded-full"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="bg-slate-800 hover:bg-slate-700 rounded-full"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="bg-slate-800 hover:bg-slate-700 rounded-full"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="bg-slate-800 hover:bg-slate-700 rounded-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-slate-800">
          <div className="text-slate-400 text-sm">
            © 2025 <span className="font-bold text-white">Megavarshan A</span> - AI Research Engineer
          </div>
        </div>
      </div>
    </footer>
  )
}
