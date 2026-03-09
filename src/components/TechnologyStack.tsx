import { motion } from "framer-motion";

const stacks = [
  {
    layer: "Presence",
    subtitle: "Digital Presence",
    tools: ["Next.js", "Webflow", "Shopify", "WordPress", "Framer", "Vercel"],
  },
  {
    layer: "Automation",
    subtitle: "Workflow Automation",
    tools: ["Zapier", "Make", "Airtable", "n8n", "Notion", "Slack"],
  },
  {
    layer: "Data",
    subtitle: "Data Intelligence",
    tools: ["BigQuery", "PostgreSQL", "Looker", "Metabase", "Snowflake", "dbt"],
  },
  {
    layer: "AI",
    subtitle: "AI Operations",
    tools: ["OpenAI", "LangChain", "Pinecone", "Claude", "Hugging Face", "Weaviate"],
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
          Technology Stack
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Built With Industry-Leading Tools
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We use best-in-class platforms across every layer to build infrastructure that scales.
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
