import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCentros from "./components/HeroCentros";
import ProblemPromiseCentros from "./components/ProblemPromiseCentros";
import BenefitsCentros from "./components/BenefitsCentros";
import TrainingTypesCentros from "./components/TrainingTypesCentros";
import DirectoryVisibilityCentros from "./components/DirectoryVisibilityCentros";
import FeaturesCentros from "./components/FeaturesCentros";
import HowItWorksCentros from "./components/HowItWorksCentros";
import ExpiredCertificationsCentros from "./components/ExpiredCertificationsCentros";
import PlansCentros from "./components/PlansCentros";
import ManualSupportCentros from "./components/ManualSupportCentros";
import IntegrationCentros from "./components/IntegrationCentros";

export default function CentrosPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <HeroCentros />
        <ProblemPromiseCentros />
        <BenefitsCentros />
        <TrainingTypesCentros />
        <DirectoryVisibilityCentros />
        <FeaturesCentros />
        <HowItWorksCentros />
        <ExpiredCertificationsCentros />
        <PlansCentros />
        {/* <ManualSupportCentros /> */}
        <IntegrationCentros />
      </main>

      <Footer />
    </div>
  );
}
