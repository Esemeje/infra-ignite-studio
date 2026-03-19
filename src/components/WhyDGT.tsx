import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const differentiators = [
  "We verify every integration before we propose it — no guesswork.",
  "Every platform we recommend is used by top performers in your industry.",
  "You own everything — the system is designed to run without us.",
  "We bring enterprise-level rigour to businesses that actually need it.",
];

const WhyDGT = () => (
  <section id="why-dgt" className="py-32 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Why DGT Partner
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Enterprise Experience. <span className="text-gradient">Built for You.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          DGT Partner is founded by a data product manager with close to a decade of experience building enterprise data systems — identity resolution, customer data platforms, fraud detection, and data quality frameworks for some of Canada's largest companies. We bring that rigour to small and mid-size service businesses.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {differentiators.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 mb-5 last:mb-0"
          >
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-base leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDGT;
