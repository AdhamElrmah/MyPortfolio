import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../../types/project";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "default";
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = "default",
  index = 0,
}) => {
  const navigate = useNavigate();
  const isFeatured = variant === "featured";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      onClick={() => navigate(`/project/${project.id}`)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
          isFeatured ? "lg:flex lg:items-stretch" : ""
        }`}
        style={{
          borderColor: isHovered
            ? "rgba(195, 228, 29, 0.25)"
            : "var(--card-border)",
          backgroundColor: "var(--card-bg)",
          boxShadow: isHovered
            ? "0 8px 60px rgba(195, 228, 29, 0.06), 0 0 0 1px rgba(195, 228, 29, 0.08)"
            : "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {/* ─── Image Area ─────────────────────────── */}
        <div
          className={`relative overflow-hidden ${
            isFeatured
              ? "aspect-[16/10] lg:aspect-auto lg:w-[55%] lg:min-h-[420px]"
              : "aspect-[16/10]"
          }`}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
            style={{
              filter: isHovered ? "brightness(1.1)" : "brightness(1)",
            }}
          />

          {/* Category badge on image */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1.5 backdrop-blur-md bg-black/40 dark:bg-white/10 text-white text-[9px] font-mono tracking-[0.15em] uppercase border border-white/15 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Project number on image */}
          <div className="absolute bottom-4 right-4 z-20">
            <span
              className="text-white/20 text-5xl lg:text-6xl font-bold transition-all duration-500 group-hover:text-[#C3E41D]/20"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              {String(project.id).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ─── Content Area ───────────────────────── */}
        <div
          className={`relative p-6 md:p-8 ${
            isFeatured
              ? "lg:w-[45%] lg:flex lg:flex-col lg:justify-between lg:p-10"
              : ""
          }`}
        >
          {/* Accent corner decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-[1px] h-10 bg-gradient-to-b from-[#C3E41D]/50 to-transparent" />
            <div className="absolute top-0 right-0 h-[1px] w-10 bg-gradient-to-l from-[#C3E41D]/50 to-transparent" />
          </div>

          <div>
            {/* Industry tag */}
            {project.industry && (
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C3E41D]/70 mb-3 block">
                {project.industry}
              </span>
            )}

            {/* Title */}
            <h3
              className={`font-bold font-['Fira_Code'] tracking-tight leading-tight mb-3 group-hover:text-[#C3E41D] transition-colors duration-300 ${
                isFeatured
                  ? "text-2xl md:text-3xl lg:text-3xl"
                  : "text-xl md:text-2xl"
              }`}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className={`text-neutral-500 dark:text-neutral-300/70 font-['Antic'] leading-relaxed mb-5 ${
                isFeatured
                  ? "text-sm md:text-base max-w-md"
                  : "text-sm line-clamp-2"
              }`}
            >
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.slice(0, isFeatured ? 6 : 4).map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono px-2.5 py-1 rounded-md backdrop-blur-sm bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-white/[0.06] group-hover:border-[#C3E41D]/20 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > (isFeatured ? 6 : 4) && (
                <span className="text-[9px] font-mono px-2 py-1 rounded-md text-neutral-400 dark:text-neutral-500">
                  +{project.tech.length - (isFeatured ? 6 : 4)}
                </span>
              )}
            </div>
          </div>

          {/* Bottom bar: role + action */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C3E41D]" />
              <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                {project.role.length > 28
                  ? project.role.slice(0, 28) + "…"
                  : project.role}
              </span>
            </div>

            <div className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/[0.08] flex items-center justify-center group-hover:bg-[#C3E41D] group-hover:border-[#C3E41D] transition-all duration-400 group-hover:shadow-[0_0_20px_rgba(195,228,29,0.25)]">
              <svg
                className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-black transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CSS variables */}
      <style>{`
        :root {
          --card-bg: rgba(255, 255, 255, 0.8);
          --card-border: rgba(230, 230, 230, 0.8);
        }
        .dark {
          --card-bg: rgba(13, 13, 13, 0.8);
          --card-border: rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </motion.article>
  );
};
