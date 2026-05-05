import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about.png";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden transition-colors duration-300 scroll-mt-24">
      {/* Decorative Background Text */}
      <div 
        className="absolute top-0 right-0 text-[20vw] font-bold opacity-[0.03] select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#C3E41D]"></div>
            <span 
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
            >
              WHO I AM
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter font-['Fira_Code']">
            Crafting Digital <br />
            <span style={{ color: "#C3E41D" }}>Excellence</span> through Code.
          </h2>

          <div className="space-y-6 text-lg text-neutral-500 dark:text-neutral-400 font-['Antic']">
            <p>
              I am a Software Engineer based in Egypt, dedicated to building high-performance web applications that provide meaningful user experiences. My journey in tech is driven by a passion for solving complex problems and a commitment to continuous learning.
            </p>
            <p>
              With expertise in modern web technologies, I focus on writing clean, maintainable code and designing interfaces that are both functional and visually stunning. I believe that every line of code should contribute to a better, more human-centric digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <div className="group">
              <h4 className="text-[#C3E41D] font-bold mb-1 group-hover:translate-x-1 transition-transform">02+</h4>
              <p className="text-sm uppercase tracking-wider opacity-60">Years Exp.</p>
            </div>
            <div className="group">
              <h4 className="text-[#C3E41D] font-bold mb-1 group-hover:translate-x-1 transition-transform">15+</h4>
              <p className="text-sm uppercase tracking-wider opacity-60">Projects</p>
            </div>
            <div className="group">
              <h4 className="text-[#C3E41D] font-bold mb-1 group-hover:translate-x-1 transition-transform">10+</h4>
              <p className="text-sm uppercase tracking-wider opacity-60">Tech Stack</p>
            </div>
          </div>

          <motion.div 
            className="mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-10 py-4 bg-[#C3E41D] text-black font-bold rounded-none hover:bg-opacity-90 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(195,228,29,0.2)]">
              MY STORY
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 p-4 border border-neutral-200 dark:border-neutral-800">
             <div className="aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <img 
                src={aboutImage} 
                alt="Adham" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 grayscale hover:grayscale-0"
              />
            </div>
          </div>
          
          {/* Accent Box */}
          <div className="absolute -top-8 -right-8 w-48 h-48 border-2 border-[#C3E41D] opacity-20 z-0"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#C3E41D] opacity-5 z-0"></div>
          
          {/* Floating Text Component */}
          <motion.div 
            className="absolute -bottom-4 -right-4 bg-black dark:bg-white text-white dark:text-black p-6 z-20 hidden md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-['Fira_Code'] font-bold text-sm">
              &lt;SoftwareEngineer /&gt;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
