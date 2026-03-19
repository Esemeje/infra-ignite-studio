import { motion } from "framer-motion";

const ROISection = () => (
  <section className="py-32 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          The Math
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          One Recovered Client <span className="text-gradient">Pays for the Entire System</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 rounded-2xl bg-card border border-border shadow-sm"
        >
          <p className="text-3xl md:text-4xl font-bold text-gradient mb-3">$38K–$185K</p>
          <p className="text-muted-foreground text-sm">
            Conservative annual upside from captured renewals, recovered leads, and reactivated clients
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center p-8 rounded-2xl bg-card border border-border shadow-sm"
        >
          <p className="text-3xl md:text-4xl font-bold text-gradient mb-3">$150–$200/mo</p>
          <p className="text-muted-foreground text-sm">
            Total software cost after eliminating redundant tools
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground text-lg text-center max-w-2xl mx-auto leading-relaxed"
      >
        If the system recovers just one client who would have gone to a competitor, or captures one lead that would have been missed — it has already paid for itself.
      </motion.p>
    </div>
  </section>
);

export default ROISection;
