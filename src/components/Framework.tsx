import { motion } from "framer-motion";
import { Globe, Workflow, Database, Brain } from "lucide-react";

const layers = [
  {
    icon: Globe,
    title: "Digital Presence",
    subtitle: "PRESENCE LAYER",
    description: "Web, SEO, and high-conversion funnels. Optimizing customer acquisition and brand clarity at every touchpoint.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    subtitle: "AUTOMATION LAYER",
    description: "Streamlining operations to eliminate bottlenecks. Connecting platforms and automating repetitive processes.",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    subtitle: "DATA LAYER",
    description: "Ensuring data quality, integrity, and accessibility. Centralizing metrics and providing unified insights.",
  },
  {
    icon: Brain,
    title: "AI-Enabled Operations",
    subtitle: "AI OPERATIONS",
    description: "Implementing AI to scale human output. Intelligent workflows and decision engines that learn and adapt.",
  },
];

const FrameworkSection = () => (
  <section id="framework" className="py-32 relative">
    <div className="container mx-auto px-6">
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
            className="group relative rounded-xl bg-card border border-border p-8 hover:border-glow transition-all duration-500"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {layer.subtitle}
            </p>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-secondary p-3 shrink-0 group-hover:bg-primary/10 transition-colors">
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
        <div className="border-glow rounded-xl bg-card px-8 py-5 text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-1">The Connector</p>
          <p className="text-muted-foreground text-sm">Seamless data flow between all systems.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FrameworkSection;
