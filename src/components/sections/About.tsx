import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about.png";
import { useCountUp } from "../../hooks/useCountUp";

const AnimatedStat: React.FC<{ end: number; suffix: string; label: string }> = ({ end, suffix, label }) => {
  const [ref, count] = useCountUp(end, 2000);
  return (
    <div className="group">
      <h4
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className="text-[#C3E41D] text-2xl lg:text-xl xl:text-3xl font-bold mb-1 group-hover:translate-x-1 transition-transform"
      >
        {count}{suffix}
      </h4>
      <p className="text-xs lg:text-[10px] xl:text-sm uppercase tracking-wider opacity-60">
        {label}
      </p>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 bg-background overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Background Text */}
      <div
        className="absolute top-0 right-0 lg:right-0 text-[25vw] lg:text-[20vw] font-bold opacity-[0.03] select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        ABOUT
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#C3E41D]/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-[#C3E41D]/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-full md:max-w-[500px] lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto] items-center lg:items-start text-center lg:text-left gap-x-8 xl:gap-x-16 gap-y-12 lg:gap-y-2 relative z-10">
        {/* 1. Image Block - Top on mobile, Right on desktop */}
        <motion.div
          className="order-1 lg:order-2 lg:col-start-2 lg:row-span-2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative z-10 p-3 border border-neutral-200 dark:border-neutral-800 rounded-2xl max-w-[280px] sm:max-w-sm lg:max-w-none mx-auto bg-neutral-50/50 dark:bg-white/[0.02] backdrop-blur-sm">
            <div className="aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-xl">
              <img
                src={aboutImage}
                alt="Adham"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Accent Box */}
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 border-2 border-[#C3E41D] opacity-10 rounded-2xl z-0"></div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-32 h-32 md:w-48 md:h-48 bg-[#C3E41D] opacity-[0.03] rounded-2xl z-0"></div>

          {/* Floating Text Component */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-black dark:bg-white text-white dark:text-black p-4 md:p-5 z-20 hidden sm:block rounded-xl shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-['Fira_Code'] font-bold text-xs md:text-sm">
              &lt;SoftwareEngineer /&gt;
            </p>
          </motion.div>
        </motion.div>

        {/* 2. Header Block - Second on mobile, Top-Left on desktop */}
        <motion.div
          className="order-2 lg:order-1 lg:col-start-1 lg:row-start-1 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#C3E41D]"></div>
            <span
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
            >
              WHO I AM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold mb-4 lg:mb-4 leading-tight tracking-tighter font-['Fira_Code']">
            Crafting Digital <br className="hidden sm:block" />
            <span style={{ color: "#C3E41D" }}>Excellence</span> through Code.
          </h2>
        </motion.div>

        {/* 3. Content Block - Third on mobile, Bottom-Left on desktop */}
        <motion.div
          className="order-3 lg:order-1 lg:col-start-1 lg:row-start-2 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="space-y-4 lg:space-y-3 text-base xl:text-lg text-neutral-500 dark:text-neutral-400 font-['Antic'] max-w-xl mx-auto lg:mx-0">
            <p>
              I am a Software Engineer based in Egypt, dedicated to building
              high-performance web applications that provide meaningful user
              experiences. My journey in tech is driven by a passion for solving
              complex problems and a commitment to continuous learning.
            </p>
            <p>
              With expertise in modern web technologies, I focus on writing
              clean, maintainable code and designing interfaces that are both
              functional and visually stunning. I believe that every line of
              code should contribute to a better, more human-centric digital
              world.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:justify-center lg:flex lg:justify-start gap-8 sm:gap-12 mt-8 lg:mt-6">
            <AnimatedStat end={2} suffix="+" label="Years Exp." />
            <AnimatedStat end={15} suffix="+" label="Projects" />
            <AnimatedStat end={10} suffix="+" label="Tech Stack" />
          </div>

          <motion.div className="mt-8 lg:mt-6 flex justify-center lg:justify-start">
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-full border border-[#C3E41D] cursor-pointer text-[#C3E41D] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#C3E41D] hover:text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(195,228,29,0.2)]"
            >
              Discover My Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
