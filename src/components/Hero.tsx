import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight">
          <span className="text-gradient">DGT</span> PARTNER
        </span>
        <span className="text-muted-foreground text-sm hidden sm:inline">| Digital Infrastructure</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#framework" className="hover:text-foreground transition-colors">The Stack</a>
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        <a href="#results" className="hover:text-foreground transition-colors">Results</a>
      </div>
      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
        Schedule a Deep Dive
      </Button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-grid bg-radial-hero pt-20">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6"
      >
        Digital Architecture for Scaling. Guaranteed.
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
      >
        The Digital Backbone for{" "}
        <span className="text-gradient">Growth-Stage</span> Success.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Building the infrastructure that powers presence, automation, data, and AI.
        From foundation to AI operations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-base group">
          Map Your Future State
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export { Navbar, HeroSection };
