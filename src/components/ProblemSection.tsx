import { motion } from "framer-motion";
import { PhoneOff, Brain, UserX, Lock, DollarSign, Clock } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Leads fall through the cracks",
    desc: "Someone reaches out while you're busy. You mean to follow up. You forget. That's a deal gone.",
  },
  {
    icon: Brain,
    title: "Your referral network lives in your head",
    desc: "You know who sends you business — but there's no system tracking it, rewarding it, or keeping those relationships warm.",
  },
  {
    icon: UserX,
    title: "Past clients disappear after the job is done",
    desc: "You delivered great work. Now they need help again — and they went to someone who stayed in touch.",
  },
  {
    icon: Lock,
    title: "Your data is locked in someone else's system",
    desc: "Your platform controls your client list. If you leave, you start from scratch. That's not a business — that's a dependency.",
  },
  {
    icon: DollarSign,
    title: "You're paying for tools that don't work together",
    desc: "Five different apps that don't talk to each other. Spreadsheets you update when you remember. Subscriptions you forgot you had.",
  },
  {
    icon: Clock,
    title: "You're too busy working IN the business",
    desc: "You're chasing new deals when your existing contacts are full of opportunity. But who has time to follow up with hundreds of past clients?",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          The Problem We Solve
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          You Know the Feeling
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          You built a great business. But the backend — the follow-ups, the tracking, the systems — can't keep up.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-card border border-border p-6 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
          >
            <div className="rounded-lg bg-orange-500/10 border border-orange-500/20 p-2.5 w-fit mb-4 group-hover:bg-orange-500/20 transition-colors">
              <problem.icon className="h-5 w-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{problem.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
