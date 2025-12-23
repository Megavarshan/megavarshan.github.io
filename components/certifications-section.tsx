"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"

const certificationProviders = [
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    certifications: [
      "OCI Certified Generative AI Professional",
      "Oracle Autonomous Database Cloud Certified",
      "Oracle AI Vector Search Certified",
      "Oracle APEX Cloud Developer Certified",
      "Oracle Cloud Infrastructure 2025 Certified Developer",
    ],
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    certifications: ["AWS Certified Cloud Practitioner"],
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Certifications</h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl text-pretty">
          Continuous learning and professional development in AI and cloud technologies
        </p>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {certificationProviders.map((provider, providerIndex) => (
            <Card key={providerIndex} className="glass border-border/50 overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={provider.logo || "/placeholder.svg"}
                      alt={`${provider.name} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{provider.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {provider.certifications.map((cert, certIndex) => (
                    <div
                      key={certIndex}
                      className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base leading-relaxed">{cert}</p>
                    </div>
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
