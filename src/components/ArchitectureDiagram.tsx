import { motion } from "framer-motion";
import architectureImg from "@/assets/architecture-diagram.jpg";

const ArchitectureDiagram = () => (
  <section className="bg-navy py-16">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <img 
          src={architectureImg} 
          alt="DGT Partner Infrastructure: Digital Presence → Workflow Automation → Data Intelligence → AI Operations" 
          className="w-full h-auto rounded-xl"
        />
      </motion.div>
    </div>
  </section>
);

export default ArchitectureDiagram;
