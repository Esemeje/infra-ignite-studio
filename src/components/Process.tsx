import { motion } from "framer-motion";
import { Search, Settings, Layers, Rocket } from "lucide-react";

const steps = [
  { icon: Search, phase: "Phase 1", title: "Infrastructure Audit", desc: "Map your current systems, bottlenecks, and growth blockers." },
  { icon: Settings, phase: "Phase 2", title: "Architecture Design", desc: "Blueprint a scalable infrastructure tailored to your growth plan." },
  { icon: Layers, phase: "Phase 3", title: "Build & Integrate", desc: "Implement each layer, connecting presence, automation, data, and AI." },
  { icon: Rocket, phase: "Phase 4", title: "Scale & Optimize", desc: "Monitor, iterate, and scale—from manual chaos to automated growth." },
];

const ProcessSection = () => (
  <section id="process" className="py-32 relative bg-secondary/50 bg-grid">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Our Process
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          From Chaos to Scale
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary animate-pulse-glow z-10" />

            <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
              <div className={`inline-flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="rounded-lg bg-card border border-border p-2.5 shadow-sm">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">{step.phase}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
