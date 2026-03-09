import { Navbar, HeroSection } from "@/components/Hero";
import { ResultsSection, CTASection, Footer } from "@/components/Results";
import FrameworkSection from "@/components/Framework";
import ProcessSection from "@/components/Process";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FrameworkSection />
      <ProcessSection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
