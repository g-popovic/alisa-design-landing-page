import IntroOverlay from "@/components/intro-overlay";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MarqueeBar from "@/components/marquee-bar";
import Philosophy from "@/components/philosophy";
import ScrollSection from "@/components/scroll-section";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import ProcessSection from "@/components/process-section";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <Philosophy />
        <ScrollSection />
        <Services />
        <Portfolio />
        <ProcessSection />
        <Contact />
      </main>
    </>
  );
}
