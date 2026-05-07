import React, { useState } from "react";
import { motion } from "framer-motion";
import { allSkillRows } from "../../data/skills";
import type { Skill } from "../../data/skills";
import { SkillIcon } from "./SkillIcon";

const rowLabels = ["Frontend & UI", "Backend & Data", "Tools & DevOps"];

interface MarqueeRowProps {
  skills: Skill[];
  direction: "left" | "right";
  duration?: number;
  pauseOnHover?: boolean;
  label: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  skills,
  direction,
  duration = 30,
  pauseOnHover = true,
  label,
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Triple the items for seamless infinite scroll
  const items = [...skills, ...skills, ...skills];

  return (
    <div className="relative">
      {/* Row label */}
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <div className="h-[1px] w-4 bg-[#C3E41D]/40" />
        <span
          className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          {label}
        </span>
        <div className="flex-1 h-[1px] bg-neutral-200/50 dark:bg-white/[0.04]" />
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => {
          pauseOnHover && setIsPaused(false);
          setHoveredSkill(null);
        }}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <div
          className="flex gap-3 md:gap-5"
          style={{
            animation: `marquee-${direction} ${duration}s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
            width: "fit-content",
          }}
        >
          {items.map((skill, idx) => {
            const effectColor =
              skill.color === "inherit" ? "#C3E41D" : skill.color;
            const isHovered = hoveredSkill === `${skill.name}-${idx}`;

            return (
              <div
                key={`${skill.name}-${idx}`}
                onMouseEnter={() => setHoveredSkill(`${skill.name}-${idx}`)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative shrink-0 flex flex-col items-center gap-1.5 md:gap-2 cursor-pointer"
                style={{ width: "80px" }}
              >
                {/* Card */}
                <div
                  className="relative w-[62px] h-[62px] md:w-[80px] md:h-[80px] rounded-xl md:rounded-2xl border backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                  style={{
                    borderColor: isHovered
                      ? `${effectColor}50`
                      : "var(--skill-border)",
                    backgroundColor: isHovered
                      ? `${effectColor}10`
                      : "var(--skill-card-bg)",
                    boxShadow: isHovered
                      ? `0 4px 20px ${effectColor}20, inset 0 0 20px ${effectColor}05`
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <SkillIcon
                    name={skill.iconName}
                    size={28}
                    className="transition-all duration-300 md:!w-[36px] md:!h-[36px]"
                    style={{
                      color: skill.color,
                      filter: isHovered ? `drop-shadow(0 0 8px ${effectColor}40)` : "none",
                    }}
                  />
                </div>

                {/* Label */}
                <span
                  className="text-[11px] font-medium tracking-wide transition-colors duration-300 whitespace-nowrap"
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    color: isHovered ? effectColor : "var(--skill-label-color)",
                  }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const TechStack: React.FC = () => {
  const rowDurations = [35, 40, 32];
  const directions: ("left" | "right")[] = ["left", "right", "left"];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 overflow-hidden transition-colors duration-300"
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

      {/* Floating orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#C3E41D]/30 pointer-events-none"
        animate={{
          x: [0, 100, -50, 80, 0],
          y: [0, -60, 40, -80, 0],
          scale: [1, 1.5, 0.8, 1.2, 1],
          opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 px-6 md:px-12 lg:px-16 xl:px-24">
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
            <br className="hidden sm:block" />& Technologies I Use.
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400/80 font-['Antic'] max-w-lg mt-5 text-sm md:text-base">
            A curated collection of technologies and frameworks I use to build
            modern, performant web applications.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="max-w-6xl mx-auto relative z-10 px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-6 md:gap-8">
          {allSkillRows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <MarqueeRow
                skills={row}
                direction={directions[idx]}
                duration={rowDurations[idx]}
                label={rowLabels[idx]}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee animations + CSS variables */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        :root {
          --skill-card-bg: rgba(250, 250, 250, 0.7);
          --skill-border: rgba(230, 230, 230, 0.6);
          --skill-label-color: rgba(100, 100, 100, 1);
        }
        .dark {
          --skill-card-bg: rgba(255, 255, 255, 0.035);
          --skill-border: rgba(255, 255, 255, 0.06);
          --skill-label-color: rgba(160, 160, 160, 1);
        }
      `}</style>
    </section>
  );
};
