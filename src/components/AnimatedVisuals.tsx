import { motion } from "framer-motion";

/** Floating orbs for hero background */
export const HeroOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large cyan orb */}
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
      style={{ background: "radial-gradient(circle, hsl(190 100% 50%), transparent 70%)", top: "-10%", right: "-5%" }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Purple accent orb */}
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(270 80% 65%), transparent 70%)", bottom: "10%", left: "-5%" }}
      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Small teal orb */}
    <motion.div
      className="absolute w-[200px] h-[200px] rounded-full opacity-[0.08]"
      style={{ background: "radial-gradient(circle, hsl(170 90% 55%), transparent 70%)", top: "40%", left: "30%" }}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

/** Animated network/connection lines SVG for hero */
export const HeroNetwork = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Connection lines */}
      <motion.path
        d="M100 600 Q 300 400 500 500 T 900 300"
        stroke="url(#lineGrad1)"
        strokeWidth="1"
        strokeDasharray="8 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      <motion.path
        d="M200 700 Q 500 300 800 450 T 1100 200"
        stroke="url(#lineGrad2)"
        strokeWidth="1"
        strokeDasharray="6 8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
      />
      {/* Nodes */}
      {[
        { cx: 500, cy: 500, r: 4, delay: 1 },
        { cx: 900, cy: 300, r: 3, delay: 1.5 },
        { cx: 300, cy: 400, r: 3, delay: 0.8 },
        { cx: 800, cy: 450, r: 4, delay: 2 },
        { cx: 1100, cy: 200, r: 3, delay: 2.5 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="hsl(190 100% 50%)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.8, 0.5], scale: [0, 1.5, 1] }}
          transition={{ duration: 1, delay: node.delay, ease: "easeOut" }}
        />
      ))}
      {/* Pulse rings */}
      {[
        { cx: 500, cy: 500, delay: 2 },
        { cx: 900, cy: 300, delay: 3 },
      ].map((ring, i) => (
        <motion.circle
          key={`ring-${i}`}
          cx={ring.cx}
          cy={ring.cy}
          r="4"
          fill="none"
          stroke="hsl(190 100% 50%)"
          strokeWidth="1"
          initial={{ r: 4, opacity: 0.6 }}
          animate={{ r: 30, opacity: 0 }}
          transition={{ duration: 2.5, delay: ring.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <defs>
        <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(190 100% 50%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(190 100% 50%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(270 80% 65%)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(270 80% 65%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(170 90% 55%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(190 100% 50%)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

/** Floating shapes for framework section */
export const FrameworkVisuals = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating geometric shapes */}
    <motion.div
      className="absolute top-20 right-[10%] w-16 h-16 border border-primary/20 rounded-lg"
      animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-32 left-[8%] w-10 h-10 border border-accent/20 rounded-full"
      animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[40%] right-[5%] w-6 h-6 bg-primary/10 rounded-sm"
      animate={{ y: [0, -10, 0], rotate: [0, 90, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[20%] right-[15%] w-3 h-3 bg-accent/15 rounded-full"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[30%] left-[5%] w-8 h-8 border border-primary/10 rounded-full"
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);
