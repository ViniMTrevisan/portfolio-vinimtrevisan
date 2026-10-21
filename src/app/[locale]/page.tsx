import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const marqueeItems = [
  "Java 21",
  "Spring Boot",
  "NestJS",
  "TypeScript",
  "Python",
  "FastAPI",
  "React",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "AWS",
  "Terraform",
  "Docker",
  "BigQuery",
  "OpenAI",
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee items={marqueeItems} />
      <Projects />
      <Experience />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
