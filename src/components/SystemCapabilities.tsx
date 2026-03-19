import { motion } from "framer-motion";
import { Zap, Users, RefreshCcw, Database, Wrench, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Captures every lead",
    desc: "Phone calls, social media messages, emails, referrals — every inquiry gets an instant response, a qualification step, and a booking link. Even at 11pm on a Saturday.",
  },
  {
    icon: Users,
    title: "Tracks every relationship",
    desc: "Your referral partners are organized by tier. Every referral is counted. Every thank-you is sent. Every quarter, they hear from you — without you lifting a finger.",
  },
  {
    icon: RefreshCcw,
    title: "Protects your repeat revenue",
    desc: "Contract renewals, service anniversaries, key dates — the system alerts you months in advance. Email, text, and a task on your morning list. You get there before the competition.",
  },
  {
    icon: Database,
    title: "Reactivates your database",
    desc: "Past clients who haven't heard from you in months get a personalized check-in. Automated but human-feeling. The ones who respond are flagged as warm leads on your dashboard.",
  },
  {
    icon: Wrench,
    title: "Replaces your broken tools",
    desc: "Birthday emails that actually send. Campaigns that run for years. SMS follow-ups. Reporting dashboards. All in one system — not five apps held together with hope.",
  },
  {
    icon: Shield,
    title: "Gives you data independence",
    desc: "You own your CRM. Your client list, your referral network, your deal history — it all belongs to you. If you switch platforms tomorrow, your business moves with you.",
  },
];

const SystemCapabilities = () => (
  <section id="system" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          What The System Does
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          End-to-End. <span className="text-gradient">Nothing Falls Through.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A connected operations system that handles what you don't have time for.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-card border border-border p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="rounded-lg bg-primary/10 border border-primary/20 p-2.5 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <cap.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemCapabilities;
