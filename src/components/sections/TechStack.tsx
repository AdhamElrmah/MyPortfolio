import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { SkillIcon } from "./SkillIcon";

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden transition-colors duration-300"
    >
      {/* Background watermark */}
      <div
        className="absolute top-0 left-0 text-[25vw] lg:text-[20vw] font-bold opacity-[0.02] select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        STACK
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C3E41D]/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#C3E41D]/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#C3E41D]" />
            <span
              className="text-[10px] font-bold tracking-[0.4em] uppercase"
              style={{
                color: "#C3E41D",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] font-['Fira_Code']">
            Tools I{" "}
            <span className="text-[#C3E41D] relative">
              Master
              <motion.div
                className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#C3E41D]/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            <br className="hidden sm:block" />
            & Technologies I Use.
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400/80 font-['Antic'] max-w-lg mt-5 text-sm md:text-base">
            A curated collection of technologies and frameworks I use to build
            modern, performant web applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(idx)}
              className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === idx
                  ? "text-black dark:text-black bg-[#C3E41D] shadow-[0_0_20px_rgba(195,228,29,0.3)]"
                  : "text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] hover:border-[#C3E41D]/30 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              <SkillIcon
                name={category.iconName}
                size={16}
                className={
                  activeCategory === idx
                    ? "text-black"
                    : ""
                }
              />
              <span className="text-xs tracking-wide">{category.title}</span>
              {activeCategory === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-[#C3E41D] -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skillCategories[activeCategory].skills.map((skill, skillIdx) => {
              const isHovered = hoveredSkill === skill.name;
              const effectColor = skill.color === "inherit" ? "#C3E41D" : skill.color;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: skillIdx * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-[#0d0d0d] overflow-hidden transition-all duration-500 hover:border-transparent"
                  style={{
                    boxShadow: isHovered
                      ? `0 0 0 1px ${effectColor}30, 0 8px 40px ${effectColor}12`
                      : "none",
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${effectColor}08, transparent 70%)`,
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: effectColor }}
                  />

                  <div className="relative p-5 flex flex-col items-center text-center gap-3">
                    {/* Icon container */}
                    <div
                      className="relative shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: isHovered
                          ? `${effectColor}18`
                          : "var(--skill-icon-bg, rgba(195,228,29,0.06))",
                        boxShadow: isHovered
                          ? `0 4px 20px ${effectColor}15`
                          : "none",
                      }}
                    >
                      <SkillIcon
                        name={skill.iconName}
                        size={24}
                        className="transition-all duration-500"
                        style={{ color: skill.color }}
                      />
                      {/* Ping animation on hover */}
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          initial={{ opacity: 0.6, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.5 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          style={{
                            border: `1px solid ${effectColor}`,
                          }}
                        />
                      )}
                    </div>

                    {/* Skill name */}
                    <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-['Fira_Code'] tracking-tight group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Stats bar */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            {
              value: skillCategories.reduce(
                (acc, cat) => acc + cat.skills.length,
                0
              ),
              label: "Technologies",
            },
            {
              value: skillCategories.length,
              label: "Categories",
            },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i > 0 && (
                <div className="hidden md:block w-[1px] h-6 bg-neutral-300 dark:bg-white/10 -ml-3 md:-ml-5" />
              )}
              <div className="text-center">
                <motion.span
                  className="block text-2xl md:text-3xl font-bold font-['Fira_Code'] text-[#C3E41D]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + i * 0.1,
                    type: "spring",
                  }}
                >
                  {stat.value}+
                </motion.span>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CSS variable overrides for light/dark */}
      <style>{`
        :root {
          --skill-icon-bg: rgba(195, 228, 29, 0.06);
        }
        .dark {
          --skill-icon-bg: rgba(195, 228, 29, 0.06);
        }
      `}</style>
    </section>
  );
};
