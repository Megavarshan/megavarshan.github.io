"use client"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-8 md:space-y-12">
          {/* Text Content */}
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                AI Research Engineer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Megavarshan A
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Building intelligent systems for sustainability, resilience, and real-world impact.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
              <div className="space-y-2">
                <div className="text-3xl">🌪️</div>
                <p className="text-sm text-slate-300 font-medium">Disaster Intelligence & Spatial AI</p>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
              <div className="space-y-2">
                <div className="text-3xl">☁️</div>
                <p className="text-sm text-slate-300 font-medium">Cloud-Native ML Systems</p>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
              <div className="space-y-2">
                <div className="text-3xl">🧬</div>
                <p className="text-sm text-slate-300 font-medium">Healthcare AI & Medical Intelligence</p>
              </div>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105">
              <div className="space-y-2">
                <div className="text-3xl">🧠</div>
                <p className="text-sm text-slate-300 font-medium">Deep Learning & Multimodal AI</p>
              </div>
            </Card>
          </div>

          {/* Scroll Button */}
          <div className="flex justify-center pt-8">
            <button
              onClick={scrollToAbout}
              className="animate-bounce hover:scale-110 transition-transform duration-300"
              aria-label="Scroll to about section"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full p-4 hover:bg-slate-900/70 transition-colors">
                <ChevronDown className="w-6 h-6 text-slate-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
