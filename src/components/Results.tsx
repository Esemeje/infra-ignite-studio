import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const ResultsSection = () => (
  <section id="results" className="py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Operational Results
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Our infrastructure delivers measurable outcomes for growth-stage businesses.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
        {[
          { value: "2–5×", label: "Increase in qualified inbound leads" },
          { value: "10–20hrs", label: "Manual work eliminated per week" },
          { value: "100%", label: "Visibility into pipeline and revenue metrics" },
          { value: "2–4×", label: "Increase in operational output per employee" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-8 rounded-2xl bg-card border border-border shadow-sm"
          >
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-3">{stat.value}</p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-navy p-12 md:p-20 text-center max-w-4xl mx-auto overflow-hidden"
      >
        <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Ready to Build Your <span className="text-gradient">Digital Backbone?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Get a comprehensive audit of your current infrastructure. We'll identify the gaps holding you back and map your path to scale.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 py-6 text-base rounded-full group shadow-lg shadow-accent/25">
            Start Your Infrastructure Audit
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="about" className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">
        © 2026 DGT Partner. Digital Infrastructure for Growth.
      </span>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="mailto:support@dgtpartner.com" className="hover:text-foreground transition-colors">support@dgtpartner.com</a>
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

export { ResultsSection, CTASection, Footer };
