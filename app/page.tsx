import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import AchievementsSection from "@/components/achievements-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <AchievementsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
