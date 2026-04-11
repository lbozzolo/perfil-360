import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Trabajadores – Tu perfil laboral digital, gratis",
  description:
    "Digitalizá tus capacitaciones y certificaciones en un perfil laboral verificable. Gratis para trabajadores. Tus cursos y competencias en un solo lugar, validados por empresas y centros de capacitación.",
  openGraph: {
    title: "Trabajadores – Tu perfil laboral digital, gratis",
    description:
      "Digitalizá tus capacitaciones y certificaciones en un perfil laboral verificable. Gratis para trabajadores.",
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
