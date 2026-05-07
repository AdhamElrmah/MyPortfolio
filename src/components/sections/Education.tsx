import React from "react";
import { motion } from "framer-motion";
import { education } from "../../data/education";

const CheckIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 overflow-hidden transition-colors duration-300"
    >
      {/* Background watermark */}
      <div
        className="absolute top-0 right-0 text-[25vw] lg:text-[18vw] font-bold opacity-[0.02] select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        EDU
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ─────────────────── */}
        <motion.div
          className="mb-14 md:mb-16"
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
              Education
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] font-['Fira_Code']">
            Academic{" "}
            <span className="text-[#C3E41D]">Foundation</span>
          </h2>
        </motion.div>

        {/* ── Education Card ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl border border-[#C3E41D]/20 bg-neutral-50/50 dark:bg-[#0d0d0d] overflow-hidden hover:border-[#C3E41D]/40 transition-all duration-500 hover:shadow-[0_8px_60px_rgba(195,228,29,0.04)]"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C3E41D]/30 to-transparent" />

          <div className="p-7 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
              {/* ── Left: Main Info ─────────────── */}
              <div className="flex-1 mb-8 lg:mb-0">
                {/* Top row: Icon + Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C3E41D]/10 flex items-center justify-center text-[#C3E41D]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500">
                      University Degree
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono tracking-[0.1em] uppercase bg-[#C3E41D]/10 text-[#C3E41D] border border-[#C3E41D]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C3E41D] animate-pulse" />
                    In Progress
                  </span>
                </div>

                {/* Degree */}
                <h3 className="text-2xl md:text-3xl font-bold font-['Fira_Code'] tracking-tight mb-3">
                  {education.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm md:text-base font-['Antic'] text-neutral-600 dark:text-neutral-300 mb-1">
                  {education.institution}
                  <span className="text-neutral-400 dark:text-neutral-500">
                    {" "}({education.shortName})
                  </span>
                </p>

                {/* Location + Period */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    {education.location}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">•</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
                      {education.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-500 dark:text-neutral-400/80 font-['Antic'] leading-relaxed max-w-xl">
                  {education.description}
                </p>
              </div>

              {/* ── Right: Highlights ──────────── */}
              <div className="lg:w-[380px] xl:w-[420px] shrink-0">
                <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 block mb-4">
                  Highlights
                </span>
                <div className="space-y-3">
                  {education.highlights.map((h, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + j * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-neutral-100/50 dark:bg-white/[0.03] border border-neutral-200/50 dark:border-white/[0.04]"
                    >
                      <span className="mt-0.5 text-[#C3E41D] shrink-0">
                        <CheckIcon />
                      </span>
                      <span className="text-sm font-['Antic'] text-neutral-600 dark:text-neutral-300/80">
                        {h}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
