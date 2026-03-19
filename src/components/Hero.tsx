import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, HeroNetwork } from "@/components/AnimatedVisuals";
import AuditModal from "@/components/AuditModal";
import dgtLogo from "@/assets/dgt-logo-new.png";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-white/70 hover:text-white font-medium transition-all duration-200 ease-out after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/10 shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-[68px] px-6">
          <div className="flex items-center gap-3 pl-2">
            <a href="/">
              <img src={dgtLogo} alt="DGT Partner" className="h-12 w-auto object-contain" />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-10 text-base">
            <NavLink href="#problem">The Problem</NavLink>
            <NavLink href="#system">The System</NavLink>
            <NavLink href="#process">How It Works</NavLink>
            <NavLink href="#why-dgt">Why Us</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>
          <Button 
            size="sm" 
            onClick={() => setIsModalOpen(true)}
            className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 font-bold rounded-full px-6 py-2.5 text-sm shadow-md shadow-accent/20 transition-all duration-200"
          >
            Book an AI Opportunity Audit
          </Button>
        </div>
      </nav>
      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center bg-navy bg-grid pt-24 overflow-hidden">
        <HeroOrbs />
        <HeroNetwork />
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white"
          >
            AI Infrastructure for<br />
            <span className="text-gradient">Growing Companies.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We help companies deploy AI into real operations by connecting automation, data, and intelligent decision systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-6 text-base rounded-full group shadow-lg shadow-accent/20"
            >
              Book an AI Opportunity Audit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="/about">
              <Button size="lg" variant="outline" className="border-accent text-accent bg-accent/10 hover:bg-accent/20 font-medium px-8 py-6 text-base rounded-full">
                Learn More
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export { Navbar, HeroSection };
