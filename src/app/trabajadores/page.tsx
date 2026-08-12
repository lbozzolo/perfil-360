import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Trabajadores – Llevá tus certificaciones con vos",
  description:
    "Tus cursos y certificaciones laborales reunidos en un único perfil, gratis. Los centros las registran y vos las mostrás desde CertiRed.",
  openGraph: {
    title: "Trabajadores – Llevá tus certificaciones con vos",
    description:
      "Tus cursos y certificaciones laborales reunidos en un único perfil, gratis. Los centros las registran y vos las mostrás desde CertiRed.",
    url: "https://www.certired.com.ar/trabajadores",
  },
};
import Footer from "../components/Footer";
import HeroPersonas from "./components/HeroPersonas";
import BenefitsPersonas from "./components/BenefitsPersonas";
import HowItWorksPersonas from "./components/HowItWorksPersonas";
import FeaturesPersonas from "./components/FeaturesPersonas";
import ValidityPersonas from "./components/ValidityPersonas";
import AdditionalInfoPersonas from "./components/AdditionalInfoPersonas";
import FAQPersonas from "./components/FAQPersonas";

export default function PersonasPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <HeroPersonas />
        <BenefitsPersonas />
        <HowItWorksPersonas />
        <FeaturesPersonas />
        <ValidityPersonas />
        <AdditionalInfoPersonas />
        <FAQPersonas />
      </main>

      <Footer />
    </div>
  );
}
