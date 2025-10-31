import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience"; // 1. Importe o novo
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <div id="about">
        <About />
      </div>

      {/* 2. Adicione a nova seção aqui */}
      <div id="experience">
        <Experience />
      </div>

      <div id="technologies">
        <Technologies />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}