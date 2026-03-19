import { Navbar, HeroSection } from "@/components/Hero";
import { CTASection, Footer } from "@/components/Results";
import ProblemSection from "@/components/ProblemSection";
import WhatWeDo from "@/components/WhatWeDo";
import SystemCapabilities from "@/components/SystemCapabilities";
import ProcessSection from "@/components/Process";
import ROISection from "@/components/ROISection";
import Industries from "@/components/Industries";
import TechnologyStack from "@/components/TechnologyStack";
import WhyDGT from "@/components/WhyDGT";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WhatWeDo />
      <SystemCapabilities />
      <ProcessSection />
      <ROISection />
      <Industries />
      <TechnologyStack />
      <WhyDGT />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
