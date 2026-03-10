import { motion } from "framer-motion";
import { ArrowRight, Globe, Workflow, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Hero";
import { Footer } from "@/components/Results";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero / Intro */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              About DGT Partner
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Modern businesses do not fail because of lack of ambition. They struggle when their systems cannot support growth. DGT Partner exists to design and implement the digital infrastructure that helps growing companies operate with clarity, automation, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why DGT Partner Exists */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Why DGT Partner Exists
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Most growing companies reach a point where their operations start to break. Tools are disconnected. Critical processes run manually. Data lives in silos. Leadership lacks visibility into what is actually happening across the business.
              </p>
              <p>
                Growth at this stage typically depends on people working harder instead of systems working better. This is not sustainable.
              </p>
              <p>
                DGT Partner was built to solve this problem — to help companies design and implement infrastructure that allows them to scale without adding unnecessary complexity or overhead.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Infrastructure as a Connected System
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              DGT Partner does not treat websites, automation, data, and AI as separate services. They are connected parts of a single system — the infrastructure behind modern business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            {[
              { icon: Globe, title: "Digital Presence", desc: "Customer acquisition and brand clarity" },
              { icon: Workflow, title: "Automation", desc: "Connected workflows and process efficiency" },
              { icon: Database, title: "Data Intelligence", desc: "Unified metrics and operational visibility" },
              { icon: Brain, title: "AI Operations", desc: "Intelligent systems that scale human output" },
            ].map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="rounded-xl bg-secondary p-3 w-fit mb-4">
                  <layer.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{layer.title}</h3>
                <p className="text-muted-foreground text-sm">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Company Perspective */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Company Background
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Built on Real Experience
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                DGT Partner was founded by practitioners with direct experience building data systems, operational infrastructure, and scalable automation for growing businesses.
              </p>
              <p>
                The approach comes from years of seeing companies struggle with disconnected tools, manual processes, and systems that could not scale. DGT Partner exists to bring that expertise to companies ready to build infrastructure that supports the next stage of growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes DGT Partner Different */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              What Makes DGT Partner Different
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Many agencies build websites. Others automate workflows. Some experiment with AI. Most treat these as separate services with separate deliverables.
              </p>
              <p>
                DGT Partner focuses on the infrastructure connecting all of them — the underlying system that allows presence, automation, data, and AI to work together as a unified operational layer.
              </p>
              <p>
                This is the difference between hiring a service provider and partnering with someone who understands how modern businesses actually operate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work Best With */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Best Fit
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Who We Work Best With
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              DGT Partner works best with companies that are growing and starting to feel operational friction — businesses where the current systems are no longer keeping pace with the ambition.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Rely on multiple disconnected tools across the business",
                "Still run key workflows manually or with workarounds",
                "Lack clear visibility into operational and revenue metrics",
                "Want systems that scale with the business, not against it",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Growth at this stage requires better infrastructure, not more effort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              DGT Partner works closely with leadership teams to understand how the business actually operates — where the friction is, where the opportunities are, and what infrastructure is needed to support the next stage of growth. From there, we design and implement connected systems across acquisition, operations, data, and automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center mx-auto"
          >
            <p className="text-muted-foreground text-xl leading-relaxed mb-10">
              If your company is growing but your systems are struggling to keep up, DGT Partner can help design the infrastructure behind the next stage of growth.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 font-bold px-10 py-6 text-base rounded-full group shadow-md shadow-accent/20 transition-all duration-200">
              Start Your Infrastructure Audit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
