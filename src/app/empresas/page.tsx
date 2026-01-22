import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroEmpresas from "./components/HeroEmpresas";
import TargetAudienceEmpresas from "./components/TargetAudienceEmpresas";
import BenefitsEmpresas from "./components/BenefitsEmpresas";
import HowItWorksEmpresas from "./components/HowItWorksEmpresas";
import RolesEmpresas from "./components/RolesEmpresas";
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
        <PlansEmpresas />
        <ProfessionalFormationEmpresas />
        <FAQEmpresas />
      </main>

      <Footer />
    </div>
  );
}
