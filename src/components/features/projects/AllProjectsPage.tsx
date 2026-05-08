import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Navbar } from "../../layout/Navbar";
import { useTheme } from "../../../hooks/useTheme";

/* ── Extract unique categories ─────────────────────── */
const allCategories = ["All", ...new Set(projects.map((p) => p.category))];

const ITEMS_PER_PAGE = 6;

export const AllProjectsPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const grid = document.getElementById("projects-grid");
    if (grid) {
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen text-foreground transition-colors overflow-x-hidden"
      style={{
        backgroundColor: isDark ? "#050505" : "#F9F9F9",
        color: isDark ? "#FFFFFF" : "#1A1A1A",
      }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection="" />

      {/* ── Hero Header ────────────────────────── */}
      <header className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background watermark */}
        <div
          className="absolute top-0 right-0 text-[30vw] lg:text-[22vw] font-bold opacity-[0.02] select-none pointer-events-none leading-none"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          ALL
        </div>

        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#C3E41D]/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#C3E41D]/[0.015] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-neutral-400 hover:text-[#C3E41D] transition-colors duration-300 group"
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
                Back to Home
              </span>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
                The Archive
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] font-['Fira_Code'] mb-8">
              {"All ".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="text-[#C3E41D] relative">
                {"Projects".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.04 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#C3E41D]/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <p className="text-neutral-500 dark:text-neutral-400/80 font-['Antic'] text-base md:text-lg max-w-xl">
                A curated selection of my work across web development, systems
                engineering, and design.
              </p>

              {/* Project count */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#C3E41D] animate-pulse" />
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
                  {projects.length} PROJECTS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── Filter tabs ────────────────────────── */}
      <motion.div
        className="sticky top-0 z-30 border-b border-neutral-200 dark:border-white/[0.06] backdrop-blur-xl"
        style={{
          backgroundColor: isDark
            ? "rgba(5, 5, 5, 0.85)"
            : "rgba(249, 249, 249, 0.85)",
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center gap-1.5 overflow-x-auto py-4 pb-5 thin-scrollbar -mx-2 px-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative shrink-0 px-5 py-2 rounded-full text-[10px] font-mono tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "text-black dark:text-black"
                    : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-full bg-[#C3E41D] shadow-[0_0_20px_rgba(195,228,29,0.2)]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className="relative z-10">
                  {cat === "All" ? "All Projects" : cat}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Project Grid ───────────────────────── */}
      <main
        id="projects-grid"
        className="px-6 md:px-12 lg:px-24 py-12 md:py-20 relative scroll-mt-20"
      >
        {/* Ambient glow */}
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#C3E41D]/[0.01] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Results count + page info */}
          <motion.div
            className="flex items-center justify-between mb-8"
            key={`${activeFilter}-${currentPage}-info`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
              Showing{" "}
              {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
              {Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of{" "}
              {filtered.length}
            </p>
            {totalPages > 1 && (
              <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wider hidden sm:block">
                Page{" "}
                <span className="text-[#C3E41D]">
                  {String(currentPage).padStart(2, "0")}
                </span>{" "}
                / {String(totalPages).padStart(2, "0")}
              </p>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
              {paginatedProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  variant="compact"
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-neutral-400 dark:text-neutral-500 font-['Antic'] text-lg">
                No projects in this category yet.
              </p>
            </motion.div>
          )}

          {/* ── Pagination ──────────────────────────── */}
          {totalPages > 1 && (
            <motion.nav
              aria-label="Pagination"
              className="flex items-center justify-center gap-2 mt-12 md:mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Previous */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className={`group/btn w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  currentPage === 1
                    ? "border-neutral-200 dark:border-white/[0.04] text-neutral-300 dark:text-neutral-700 cursor-not-allowed"
                    : "border-neutral-300 dark:border-white/[0.08] text-neutral-500 dark:text-neutral-400 hover:border-[#C3E41D]/50 hover:text-[#C3E41D] hover:bg-[#C3E41D]/5 cursor-pointer"
                }`}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1 mx-1 md:mx-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      aria-label={`Page ${page}`}
                      aria-current={
                        page === currentPage ? "page" : undefined
                      }
                      className="relative w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                    >
                      {page === currentPage && (
                        <motion.div
                          layoutId="activePage"
                          className="absolute inset-0 rounded-full bg-[#C3E41D] shadow-[0_0_24px_rgba(195,228,29,0.25)]"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 text-xs font-mono font-bold tracking-wider transition-colors duration-300 ${
                          page === currentPage
                            ? "text-black"
                            : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                        }`}
                      >
                        {String(page).padStart(2, "0")}
                      </span>
                    </button>
                  )
                )}
              </div>

              {/* Next */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className={`group/btn w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  currentPage === totalPages
                    ? "border-neutral-200 dark:border-white/[0.04] text-neutral-300 dark:text-neutral-700 cursor-not-allowed"
                    : "border-neutral-300 dark:border-white/[0.08] text-neutral-500 dark:text-neutral-400 hover:border-[#C3E41D]/50 hover:text-[#C3E41D] hover:bg-[#C3E41D]/5 cursor-pointer"
                }`}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </motion.nav>
          )}
        </div>
      </main>

      {/* ── Bottom CTA ─────────────────────────── */}
      <footer className="px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/[0.06] bg-neutral-50 dark:bg-[#0d0d0d] p-10 md:p-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#C3E41D]/40 to-transparent" />

            {/* Floating orbs */}
            <div className="absolute top-8 left-8 w-24 h-24 bg-[#C3E41D]/[0.04] rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#C3E41D]/[0.03] rounded-full blur-[50px] pointer-events-none" />

            {/* Geometric accent */}
            <div className="absolute top-6 right-6 w-8 h-8 border border-[#C3E41D]/10 rounded-lg rotate-12 pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border border-[#C3E41D]/10 rounded-full pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-['Fira_Code'] tracking-tight relative z-10">
              Have a project in <span className="text-[#C3E41D]">mind</span>?
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400/80 font-['Antic'] text-sm md:text-base mb-8 max-w-md mx-auto relative z-10">
              I'm always open to new opportunities and exciting collaborations.
              Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                to="/"
                state={{ scrollTo: "contact" }}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C3E41D] text-black font-bold text-xs tracking-[0.15em] uppercase hover:shadow-[0_0_30px_rgba(195,228,29,0.3)] transition-all duration-300"
              >
                Get in Touch
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
              </Link>
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-neutral-300 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 font-bold text-xs tracking-[0.15em] uppercase hover:border-[#C3E41D]/50 hover:text-[#C3E41D] transition-all duration-300"
              >
                Back to Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};
