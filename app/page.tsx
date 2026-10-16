import About from "@/components/About";
import Contact from "@/components/Contact";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Learning from "@/components/Learning";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Learning />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
