import { motion } from "framer-motion";
import { Search, Map, Wrench, GraduationCap, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    phase: "Step 1",
    title: "Discovery Call",
    desc: "We sit down and map out your current tools, pain points, and what's driving revenue. We find exactly where money and clients are slipping through the cracks.",
  },
  {
    icon: Map,
    phase: "Step 2",
    title: "Your Custom Roadmap",
    desc: "You get a clear plan showing every tool, every connection, and every automation we'll build — with honest pricing and a straightforward case for why it's worth it.",
  },
  {
    icon: Wrench,
    phase: "Step 3",
    title: "Build & Connect",
    desc: "We set up your CRM, connect it to your existing tools, bring in your data, and wire up the automations. Your day-to-day workflow stays the same — everything new works around it.",
  },
  {
    icon: GraduationCap,
    phase: "Step 4",
    title: "Training & Go-Live",
    desc: "We walk you through the whole system until it feels second nature. Then we go live and monitor everything for 30 days to catch anything we missed and fine-tune.",
  },
  {
    icon: HeartHandshake,
    phase: "Step 5",
    title: "Ongoing Support",
    desc: "Optional monthly support for ongoing tweaks, new automations, and priority help when you need it. Or run it yourself — the system is built to work without us.",
    optional: true,
  },
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
          How We Work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Simple. Phased. <span className="text-gradient">No Disruption.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We handle the complexity so you don't have to. Here's what working with us looks like.
        </p>
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
                <span className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">
                  {step.phase}
                  {step.optional && (
                    <span className="ml-2 text-muted-foreground text-[10px] font-medium tracking-normal normal-case">(optional)</span>
                  )}
                </span>
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
