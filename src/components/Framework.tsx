import { motion } from "framer-motion";
import { Globe, Workflow, Database, Brain } from "lucide-react";
import { FrameworkVisuals } from "@/components/AnimatedVisuals";

const layers = [
  {
    icon: Globe,
    title: "Presence Layer",
    subtitle: "DIGITAL PRESENCE",
    description: "Optimizing customer acquisition funnels and brand clarity. Web, SEO, and high-conversion landing pages.",
  },
  {
    icon: Workflow,
    title: "Automation Layer",
    subtitle: "WORKFLOW AUTOMATION",
    description: "Streamlining repetitive processes and connecting platforms. Eliminating bottlenecks at every stage.",
  },
  {
    icon: Database,
    title: "Data Layer",
    subtitle: "DATA INFRASTRUCTURE",
    description: "Centralizing metrics and providing unified insights. Ensuring data quality, integrity, and accessibility.",
  },
  {
    icon: Brain,
    title: "AI Operations",
    subtitle: "AI-ENABLED OPS",
    description: "Implementing intelligent workflows and decision engines. Scaling human output with AI that learns and adapts.",
  },
];

const FrameworkSection = () => (
  <section id="framework" className="py-32 relative">
    <FrameworkVisuals />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          DGT Core Infrastructure
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our 4-Layer Methodology
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl bg-card border border-border p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {layer.subtitle}
            </p>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-secondary p-3 shrink-0 group-hover:bg-primary/10 transition-colors">
                <layer.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{layer.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {layer.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connector visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mt-12"
      >
        <div className="border-glow rounded-2xl bg-card px-8 py-5 text-center">
          <p className="text-gradient text-xs font-bold tracking-[0.15em] uppercase mb-1">The Connector</p>
          <p className="text-muted-foreground text-sm">Seamless data flow between all systems.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FrameworkSection;
