import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, HeroNetwork } from "@/components/AnimatedVisuals";
import dgtLogo from "@/assets/dgt-logo-new.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/10 shadow-lg">
    <div className="container mx-auto flex items-center justify-between h-20 px-6">
      <div className="flex items-center gap-3 pl-2">
        <img src={dgtLogo} alt="DGT Partner" className="h-14 w-auto object-contain" />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#process" className="hover:text-white transition-colors">How It Works</a>
        <a href="#framework" className="hover:text-white transition-colors">The Stack</a>
        <a href="#results" className="hover:text-white transition-colors">Results</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>
      <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-5 text-xs shadow-lg shadow-accent/20">
        Claim Your Free 30-Minute Strategy Session
      </Button>
    </div>
  </nav>
);

const HeroSection = () => (
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
        The Digital Architecture<br />
        for Scaling. <span className="text-gradient">Guaranteed.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        We design the systems that power modern companies — from lead generation to automation, data, and AI operations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-6 text-base rounded-full group shadow-lg shadow-accent/20">
          Map Your Future State
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <a href="#framework">
          <Button size="lg" variant="outline" className="border-accent text-accent bg-accent/10 hover:bg-accent/20 font-medium px-8 py-6 text-base rounded-full">
            Learn More
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export { Navbar, HeroSection };
