import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState(0);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null || !project.gallery) return;
    if (e.key === "Escape") setLightboxIndex(null);
    if (e.key === "ArrowRight" && lightboxIndex < project.gallery.length - 1) setLightboxIndex(lightboxIndex + 1);
    if (e.key === "ArrowLeft" && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
  }, [lightboxIndex, project.gallery]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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

        {/* Ambient glows */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C3E41D]/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#C3E41D]/[0.015] rounded-full blur-[100px] pointer-events-none" />

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
              <div className="w-8 h-8 rounded-full border border-neutral-300 dark:border-white/[0.08] flex items-center justify-center group-hover:border-[#C3E41D]/50 group-hover:bg-[#C3E41D]/10 transition-all duration-300">
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

      {/* ── Project Showcase ─────────────────────── */}
      {project.gallery && project.gallery.length > 0 ? (
        <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              {/* Section label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-8 bg-[#C3E41D]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C3E41D] font-mono">
                  Project Showcase
                </span>
                <div className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/[0.06]" />
                <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
                  {String(activeGallery + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
                </span>
              </div>

              {/* Main showcase container */}
              <div className="rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                {/* Large featured image */}
                <div
                  className="relative aspect-[16/9] overflow-hidden cursor-pointer group"
                  onClick={() => setLightboxIndex(activeGallery)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeGallery}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      src={project.gallery[activeGallery]}
                      alt={`${project.title} screenshot ${activeGallery + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Navigation arrows on the image */}
                  {activeGallery > 0 && (
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                      onClick={(e) => { e.stopPropagation(); setActiveGallery(activeGallery - 1); }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  {activeGallery < project.gallery.length - 1 && (
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                      onClick={(e) => { e.stopPropagation(); setActiveGallery(activeGallery + 1); }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Thumbnail strip */}
                <div className="p-3 md:p-4 border-t border-neutral-200 dark:border-white/[0.06]">
                  <div className="flex gap-2 md:gap-3 overflow-x-auto thin-scrollbar">
                    {project.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveGallery(i)}
                        className={`relative shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                          i === activeGallery
                            ? "ring-2 ring-[#C3E41D] ring-offset-2 ring-offset-neutral-50 dark:ring-offset-[#0a0a0a] opacity-100"
                            : "opacity-40 hover:opacity-70 border border-neutral-200 dark:border-white/[0.08]"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      ) : (
        /* Fallback: simple hero image if no gallery */
        <motion.div
          className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/[0.06]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[75vh] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Lightbox ──────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && project.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all cursor-pointer"
              onClick={() => setLightboxIndex(null)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-50">
              <span className="text-xs font-mono text-white/50 tracking-wider">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
              </span>
            </div>

            {/* Navigation arrows */}
            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 md:left-8 z-50 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all cursor-pointer"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {lightboxIndex < project.gallery.length - 1 && (
              <button
                className="absolute right-4 md:right-8 z-50 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all cursor-pointer"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={project.gallery[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
                  className="p-5 md:p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-white/[0.02] backdrop-blur-sm group hover:border-[#C3E41D]/20 transition-all duration-300"
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
            <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-white/[0.02] backdrop-blur-sm">
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
                        className="p-6 rounded-2xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-white/[0.02] backdrop-blur-sm hover:border-[#C3E41D]/20 transition-all duration-300"
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
                  className="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-white/[0.02] backdrop-blur-sm hover:border-[#C3E41D]/30 hover:shadow-[0_0_40px_rgba(195,228,29,0.06)] transition-all duration-500"
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
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C3E41D] text-[#C3E41D] font-bold text-xs tracking-[0.15em] uppercase hover:bg-[#C3E41D] hover:text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(195,228,29,0.2)] cursor-pointer"
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
