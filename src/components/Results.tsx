import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuditModal from "@/components/AuditModal";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 py-6 text-base rounded-full group shadow-lg shadow-accent/25"
              >
                Start Your Infrastructure Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-12">
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

export { CTASection, Footer };
