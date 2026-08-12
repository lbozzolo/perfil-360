import type { Metadata } from "next";
import Header from "./components/Header";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: "CertiRed – Certificaciones laborales registradas",
  description: BRAND.claimLargo,
  openGraph: {
    title: "CertiRed – Certificaciones laborales registradas",
    description: BRAND.claimLargo,
    url: "https://www.certired.com.ar",
  },
};

import Hero from "./components/Hero";
import DirectorioSection from "./components/DirectorioSection";
import ComoFunciona from "./components/ComoFunciona";
import BloqueTrabajadores from "./components/BloqueTrabajadores";
import BloqueCentros from "./components/BloqueCentros";
import QueSignificaRegistrada from "./components/QueSignificaRegistrada";
import VideoIntro from "./components/VideoIntro";
import Footer from "./components/Footer";

// Ocultos en esta etapa de adquisición (los componentes se conservan):
// ActorsSection    -> ART y empresas como perfil operativo.
// FeaturesSection  -> supervisores, licitaciones, indicadores y reportes.
// PlansSection     -> planes Free / Plus.
// EcosystemSection -> reemplazado por ComoFunciona.
// DirectoryBanner  -> reemplazado por DirectorioSection.

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <Hero />
        {/* Montado a caballo entre las dos secciones. */}
        <VideoIntro />
        <DirectorioSection />
        <ComoFunciona />
        <BloqueTrabajadores />
        <BloqueCentros />
        <QueSignificaRegistrada />
      </main>

      <Footer />
    </div>
  );
}
