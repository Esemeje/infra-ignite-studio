import { motion } from "framer-motion";

const stacks = [
  {
    layer: "CRM & Operations",
    subtitle: "Client Management",
    tools: ["Zoho CRM", "Zoho One", "HubSpot", "GoHighLevel", "Pipedrive"],
  },
  {
    layer: "Automation",
    subtitle: "Workflow & Integration",
    tools: ["Zapier", "Make (Integromat)", "Twilio", "ManyChat", "Calendly"],
  },
  {
    layer: "Data & Analytics",
    subtitle: "Intelligence",
    tools: ["BigQuery", "Python", "Industry-Specific Platforms"],
  },
  {
    layer: "AI",
    subtitle: "Intelligent Operations",
    tools: ["Zoho Zia (AI)", "AI Call Handling", "AI Document Scanning"],
  },
];

const TechnologyStack = () => (
  <section id="tech-stack" className="py-32 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Technology We Work With
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Tools That <span className="text-gradient">Actually Work Together</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Every platform in our stack is used by top performers in your industry. We verify every connection before we propose it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.layer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-2">
              {stack.subtitle}
            </p>
            <h3 className="text-xl font-bold mb-4">{stack.layer}</h3>
            <div className="flex flex-wrap gap-2">
              {stack.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-block px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologyStack;
