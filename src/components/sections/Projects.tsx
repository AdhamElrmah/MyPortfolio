import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectCard } from "../features/projects/ProjectCard";
import { projects } from "../../data/projects";

export const Projects: React.FC = () => {
  const featured = projects[0];
  const rest = projects.slice(1, 4);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden transition-colors duration-300"
    >
      {/* ── Background decoration ────────────── */}
      <div
        className="absolute top-0 right-0 text-[25vw] lg:text-[18vw] font-bold opacity-[0.02] select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        WORKS
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#C3E41D]/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section header ─────────────────── */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#C3E41D]" />
              <span
                className="text-[10px] font-bold tracking-[0.4em] uppercase"
                style={{
                  color: "#C3E41D",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                Selected Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] font-['Fira_Code']">
              Building the{" "}
              <span className="text-[#C3E41D] relative">
                Future
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
              One Pixel at a Time.
            </h2>
          </div>

          <p className="text-neutral-500 dark:text-neutral-400/80 font-['Antic'] max-w-xs text-sm md:text-base lg:text-right">
            Exploring the intersection of high-performance engineering and
            high-fidelity design.
          </p>
        </motion.div>

        {/* ── Featured project (full-width) ──── */}
        <div className="mb-8 lg:mb-12">
          <ProjectCard project={featured} variant="featured" index={0} />
        </div>

        {/* ── Project grid (remaining) ────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((project, i) => (
            <div
              key={project.id}
              className={i >= 2 ? "hidden lg:block" : ""}
            >
              <ProjectCard
                project={project}
                variant="default"
                index={i + 1}
              />
            </div>
          ))}
        </div>

        {/* ── Stats bar ──────────────────────── */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 px-6 md:px-10 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-[#0d0d0d]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "15+", label: "Projects Built" },
            { value: "10+", label: "Tech Stack" },
            { value: "99%", label: "Uptime Record" },
            { value: "4.8", label: "Avg. Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <h4
                className="text-2xl md:text-3xl font-bold text-[#C3E41D] mb-1 group-hover:scale-110 transition-transform duration-300 inline-block"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {stat.value}
              </h4>
              <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── CTA ────────────────────────────── */}
        <motion.div
          className="mt-14 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-neutral-500 dark:text-neutral-500 font-['Antic'] text-sm mb-6">
            Want to see more?
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-4 py-4 px-12 rounded-full border border-[#C3E41D] text-[#C3E41D] font-bold tracking-[0.2em] uppercase text-xs hover:bg-[#C3E41D] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(195,228,29,0.1)] group"
          >
            Explore Full Archive
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
