"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "megavarshan1616@gmail.com",
    href: "mailto:megavarshan1616@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/megavarshan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/Megavarshan",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">Let's Build Together</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-pretty px-4">
            Interested in collaborating on AI research, sustainability projects, or innovative solutions? Let's connect.
          </p>
        </div>

        <Card className="glass border-border/50">
          <CardHeader className="text-center p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">Get In Touch</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              I'm always open to discussing new projects and opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {contactMethods.map((method, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto flex-col gap-2 sm:gap-3 py-4 sm:py-6 glass-hover bg-transparent text-sm sm:text-base"
                  asChild
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <div className="text-center">
                      <div className="font-semibold text-sm">{method.label}</div>
                      <div className="text-xs text-muted-foreground mt-1 break-all">{method.value}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
