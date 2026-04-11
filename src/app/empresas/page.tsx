import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Empresas – Gestioná las competencias de tu equipo",
  description:
    "Digitalizá las competencias de tus trabajadores, gestioná capacitaciones con evidencia operativa y verificá certificaciones y vigencias en tiempo real. Empezá gratis en Certired.",
  openGraph: {
    title: "Empresas – Gestioná las competencias de tu equipo",
    description:
      "Digitalizá las competencias de tus trabajadores, gestioná capacitaciones con evidencia operativa y verificá certificaciones en tiempo real.",
    url: "https://www.certired.com.ar/empresas",
  },
};
import Footer from "../components/Footer";
import HeroEmpresas from "./components/HeroEmpresas";
import TargetAudienceEmpresas from "./components/TargetAudienceEmpresas";
import BenefitsEmpresas from "./components/BenefitsEmpresas";
import HowItWorksEmpresas from "./components/HowItWorksEmpresas";
import RolesEmpresas from "./components/RolesEmpresas";
import BusquedaLaboralEmpresas from "./components/BusquedaLaboralEmpresas";
import PlansEmpresas from "./components/PlansEmpresas";
import ProfessionalFormationEmpresas from "./components/ProfessionalFormationEmpresas";
import FAQEmpresas from "./components/FAQEmpresas";

export default function EmpresasPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <HeroEmpresas />
        <TargetAudienceEmpresas />
        <BenefitsEmpresas />
        <HowItWorksEmpresas />
        <RolesEmpresas />
        <BusquedaLaboralEmpresas />
        <ProfessionalFormationEmpresas />
        <PlansEmpresas />
        <FAQEmpresas />
      </main>

      <Footer />
    </div>
  );
}
