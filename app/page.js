import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Goal from "@/components/Goal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Specialties />
      <Skills />
      <Experience />
      <Goal />
      <Contact />
      <Footer />
    </main>
  );
}
