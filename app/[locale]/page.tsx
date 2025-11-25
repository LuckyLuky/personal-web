import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Talks from "@/components/sections/Talks";
import ExpertiseHighlights from "@/components/sections/ExpertiseHighlights";
import Career from "@/components/sections/Career";
import Interests from "@/components/sections/Interests";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Talks />
        <ExpertiseHighlights />
        <Career />
        <Interests />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
