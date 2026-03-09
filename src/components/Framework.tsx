import { motion } from "framer-motion";
import { Globe, Workflow, Database, Brain } from "lucide-react";
import { FrameworkVisuals } from "@/components/AnimatedVisuals";

const layers = [
  {
    icon: Globe,
    title: "Digital Presence",
    subtitle: "PRESENCE LAYER",
    description: "Web, SEO, and high-conversion funnels. Optimizing customer acquisition and brand clarity at every touchpoint.",
    color: "190 100% 50%",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    subtitle: "AUTOMATION LAYER",
    description: "Streamlining operations to eliminate bottlenecks. Connecting platforms and automating repetitive processes.",
    color: "170 90% 55%",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    subtitle: "DATA LAYER",
    description: "Ensuring data quality, integrity, and accessibility. Centralizing metrics and providing unified insights.",
    color: "270 80% 65%",
  },
  {
    icon: Brain,
    title: "AI-Enabled Operations",
    subtitle: "AI OPERATIONS",
    description: "Implementing AI to scale human output. Intelligent workflows and decision engines that learn and adapt.",
    color: "190 100% 50%",
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
            className="group relative rounded-2xl card-shine border border-border p-8 hover:border-glow transition-all duration-500 overflow-hidden"
          >
            {/* Subtle gradient accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06] blur-2xl group-hover:opacity-[0.12] transition-opacity"
              style={{ background: `radial-gradient(circle, hsl(${layer.color}), transparent)` }}
            />
            <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-4 relative z-10">
              {layer.subtitle}
            </p>
            <div className="flex items-start gap-4 relative z-10">
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
