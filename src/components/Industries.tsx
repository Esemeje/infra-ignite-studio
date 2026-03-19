import { motion } from "framer-motion";
import {
  Landmark,
  Home,
  ShieldCheck,
  Scale,
  Heart,
  Briefcase,
  Hammer,
  Megaphone,
} from "lucide-react";

const verticals = [
  { label: "Financial Services", icon: Landmark },
  { label: "Real Estate", icon: Home },
  { label: "Insurance", icon: ShieldCheck },
  { label: "Legal & Accounting", icon: Scale },
  { label: "Health & Wellness", icon: Heart },
  { label: "Consulting Firms", icon: Briefcase },
  { label: "Trades & Contractors", icon: Hammer },
  { label: "Agencies", icon: Megaphone },
];

const Industries = () => (
  <section className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Industries We Serve
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Service Businesses That Run on <span className="text-gradient">Relationships</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          If your revenue depends on referrals, repeat business, and staying top-of-mind — we build the system that makes that happen without burning your hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {verticals.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <v.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-semibold">{v.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
