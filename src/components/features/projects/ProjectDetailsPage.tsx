import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import { useTheme } from "../../../hooks/useTheme";
import { Navbar } from "../../layout/Navbar";

/* ─── Fade-up animation wrapper ───────────────────── */
const FadeUp: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const project = projects.find((p) => p.id === Number(id));
  const currentIndex = projects.findIndex((p) => p.id === Number(id));
  const otherProjects = projects
    .filter((p) => p.id !== Number(id))
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <div
      className="min-h-screen transition-colors duration-500 overflow-x-hidden"
      style={{
        backgroundColor: isDark ? "#050505" : "#F9F9F9",
        color: isDark ? "#FFFFFF" : "#1A1A1A",
      }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection="" />

      {/* ── Hero Section ───────────────────────── */}
      <header className="relative pt-28 md:pt-36 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background number */}
        <div
          className="absolute top-8 right-0 text-[35vw] lg:text-[25vw] font-bold opacity-[0.015] select-none pointer-events-none leading-none"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          {String(project.id).padStart(2, "0")}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Navigation row */}
          <motion.div
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-3 text-neutral-400 hover:text-[#C3E41D] transition-colors duration-300 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-neutral-300 dark:border-white/[0.08] flex items-center justify-center group-hover:border-[#C3E41D]/50 transition-colors">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-xs font-mono tracking-wider uppercase">
                Back
              </span>
            </button>

            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">
                Project {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* Category + Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#C3E41D]" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C3E41D] font-mono">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] font-['Fira_Code'] mb-6">
              {project.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[#C3E41D]">
                {project.title.split(" ").pop()}
              </span>
            </h1>

            <p className="text-neutral-500 dark:text-neutral-400/80 font-['Antic'] text-base md:text-lg max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── Hero Image ─────────────────────────── */}
      <motion.div
        className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/[0.06] group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[75vh] object-cover"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>

      {/* ── Info Grid ──────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  label: "Role",
                  value: project.role,
                  icon: (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                },
                {
                  label: "Duration",
                  value: project.duration,
                  icon: (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
                {
                  label: "Industry",
                  value: project.industry || "—",
                  icon: (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 20h20M4 20V10l8-6 8 6v10" />
                      <path d="M9 20v-4h6v4" />
                    </svg>
                  ),
                },
                {
                  label: "Category",
                  value: project.category,
                  icon: (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 md:p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-[#0d0d0d] group hover:border-[#C3E41D]/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C3E41D]">{item.icon}</span>
                    <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm font-['Antic'] text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Tech Stack Strip ───────────────────── */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-[#0d0d0d]">
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 block mb-4">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/[0.06] hover:border-[#C3E41D]/30 hover:text-[#C3E41D] transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Action Buttons ─────────────────────── */}
      <div className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C3E41D] text-black font-bold text-xs tracking-[0.15em] uppercase hover:shadow-[0_0_30px_rgba(195,228,29,0.3)] transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  View Live Project
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-neutral-300 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 font-bold text-xs tracking-[0.15em] uppercase hover:border-[#C3E41D]/50 hover:text-[#C3E41D] transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Content Sections ───────────────────── */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28 mb-20 md:mb-32">
          {[
            {
              label: "Project Overview",
              num: "01",
              content: project.overview,
            },
            { label: "The Problem", num: "02", content: project.problem },
            {
              label: "Research & Insights",
              num: "03",
              content: project.research,
            },
            {
              label: "Design Decisions",
              num: "04",
              content: project.decisions,
            },
            {
              label: "Key Challenges",
              num: "05",
              content: project.challenges,
            },
            {
              label: "Outcomes & Reflection",
              num: "06",
              content: project.outcomes,
            },
          ].filter((s) => s.content && (!Array.isArray(s.content) || s.content.length > 0)).map((section, idx) => (
            <FadeUp key={idx} delay={0.05}>
              <div className="relative">
                {/* Section number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-mono text-[#C3E41D]/50 tracking-wider">
                    {section.num}
                  </span>
                  <div className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/[0.06]" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-['Fira_Code'] tracking-tight mb-6">
                  {section.label}
                </h2>

                {Array.isArray(section.content) ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.content.map((item: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-[#0d0d0d] hover:border-[#C3E41D]/20 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C3E41D]" />
                          <p className="text-sm font-bold font-['Fira_Code'] text-[#C3E41D]">
                            {item.title}
                          </p>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300/80 leading-relaxed font-['Antic'] pl-3.5">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300/80 leading-[1.8] font-['Antic']">
                    {section.content as string}
                  </p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── Other Projects ─────────────────────── */}
      <div className="px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Divider */}
          <div className="h-[1px] w-full bg-neutral-200 dark:bg-white/[0.06] mb-16 md:mb-20" />

          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-12 bg-[#C3E41D]" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C3E41D] font-mono">
                More Projects
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-['Fira_Code'] tracking-tight mb-10">
              Explore Other Work
            </h3>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {otherProjects.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.1}>
                <Link
                  to={`/project/${p.id}`}
                  className="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-[#0d0d0d] hover:border-[#C3E41D]/30 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 z-20">
                      <span className="text-white/20 text-3xl font-bold font-['Fira_Code']">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-[#C3E41D]/60 block mb-2">
                      {p.industry || p.category}
                    </span>
                    <h4 className="text-lg font-bold font-['Fira_Code'] tracking-tight group-hover:text-[#C3E41D] transition-colors duration-300 mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400/70 font-['Antic'] line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          {/* Bottom navigation */}
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C3E41D] text-[#C3E41D] font-bold text-xs tracking-[0.15em] uppercase hover:bg-[#C3E41D] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(195,228,29,0.08)] cursor-pointer"
              >
                View All Projects
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};
