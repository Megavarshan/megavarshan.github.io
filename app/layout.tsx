import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Megavarshan A - AI Research Engineer",
  description:
    "AI Research Engineer focused on applied artificial intelligence for social good and sustainable development. Building intelligent systems for sustainability, resilience, and real-world impact.",
  keywords: [
    "AI Research Engineer",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "Geospatial AI",
    "Sustainability",
    "Disaster Management",
    "Applied AI",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
