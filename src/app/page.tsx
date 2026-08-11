import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Certired – Capacitación, trabajo y empresas en un mismo lugar",
  description:
    "Certired reúne a centros de capacitación, empresas y trabajadores en un sistema donde la información laboral se carga, se comparte y se verifica de forma clara y segura.",
  openGraph: {
    title: "Certired – Capacitación, trabajo y empresas en un mismo lugar",
    description:
      "Certired reúne a centros de capacitación, empresas y trabajadores en un sistema donde la información laboral se carga, se comparte y se verifica de forma clara y segura.",
    url: "https://www.certired.com.ar",
  },
};
import Hero from "./components/Hero";
import DirectorioSection from "./components/DirectorioSection";
import ComoFunciona from "./components/ComoFunciona";
import VideoIntro from "./components/VideoIntro";
import ActorsSection from "./components/ActorsSection";
import FeaturesSection from "./components/FeaturesSection";
import PlansSection from "./components/PlansSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <DirectorioSection />
        <ComoFunciona />
        <VideoIntro />
        {/* Fase 4: ActorsSection, FeaturesSection y PlansSection se ocultan. */}
        <ActorsSection />
        <FeaturesSection />
        <PlansSection />
      </main>

      <Footer />
    </div>
  );
}
