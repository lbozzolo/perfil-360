import Header from "./components/Header";
import Hero from "./components/Hero";
import EcosystemSection from "./components/EcosystemSection";
import ActorsSection from "./components/ActorsSection";
import FeaturesSection from "./components/FeaturesSection";
import PlansSection from "./components/PlansSection";
import DirectoryBanner from "./components/DirectoryBanner";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <EcosystemSection />
        <ActorsSection />
        <FeaturesSection />
        <PlansSection />
        <DirectoryBanner />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
