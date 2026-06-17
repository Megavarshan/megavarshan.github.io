import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Megavarshan A — AI Engineer & ML Developer" },
      { name: "description", content: "AI Engineer specializing in Machine Learning, Deep Learning, Computer Vision, Generative AI, and scalable AI systems. Selected projects, research, and certifications." },
      { property: "og:title", content: "Megavarshan A — AI Engineer" },
      { property: "og:description", content: "Building intelligent systems that transform data into decisions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
