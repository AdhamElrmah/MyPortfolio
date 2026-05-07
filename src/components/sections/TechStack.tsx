import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

const levelColors: Record<string, string> = {
  Expert:
    "bg-[#C3E41D]/20 text-[#C3E41D] border-[#C3E41D]/30",
  Advanced:
    "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Intermediate:
    "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Learning:
    "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

const levelBars: Record<string, number> = {
  Expert: 4,
  Advanced: 3,
  Intermediate: 2,
  Learning: 1,
};

export const TechStack: React.FC = () => {
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: catIdx * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-white dark:bg-[#0d0d0d] p-6 md:p-8 hover:border-[#C3E41D]/30 hover:shadow-[0_8px_60px_rgba(195,228,29,0.06)] transition-all duration-500 ${
                catIdx === 3 ? "md:col-span-2" : ""
              }`}
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-[#C3E41D]/40 to-transparent" />
                <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-[#C3E41D]/40 to-transparent" />
              </div>

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C3E41D]/10 flex items-center justify-center text-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-['Fira_Code'] tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
                    {category.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div
                className={`grid gap-3 ${
                  catIdx === 3
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + skillIdx * 0.05,
                    }}
                    className="group/skill flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.05] hover:border-[#C3E41D]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-sm font-['Antic'] text-neutral-700 dark:text-neutral-300 group-hover/skill:text-[#C3E41D] transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>

                    {/* Level indicator bars */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((bar) => (
                        <div
                          key={bar}
                          className={`w-1.5 h-3 rounded-sm transition-colors duration-300 ${
                            bar <= levelBars[skill.level]
                              ? "bg-[#C3E41D]"
                              : "bg-neutral-200 dark:bg-neutral-800"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {Object.entries(levelColors).map(([level, cls]) => (
            <div
              key={level}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-mono tracking-[0.1em] uppercase border ${cls}`}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`w-1 h-2 rounded-sm ${
                      bar <= levelBars[level]
                        ? "bg-current"
                        : "bg-current opacity-20"
                    }`}
                  />
                ))}
              </div>
              {level}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
