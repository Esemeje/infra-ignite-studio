import { motion } from "framer-motion";

const WhatWeDo = () => (
  <section className="py-32 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          What DGT Partner Does
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          We Build the System. <span className="text-gradient">You Run the Business.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          We don't sell software. We design and set up a complete operations system — built around how you actually work — where every tool is connected, every lead is captured, every follow-up is automatic, and every piece of client data you've built over the years belongs to you.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Your day-to-day doesn't change. Your client-facing tools, your industry platforms, your processes — they all stay exactly as they are. We wrap them in an automation layer that handles everything you don't have time for.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhatWeDo;
