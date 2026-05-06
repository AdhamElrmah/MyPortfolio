import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, type Experience as ExperienceType } from "../../data/experience";

/* ─── Icon Components ──────────────────────────────── */
const icons: Record<ExperienceType["icon"], React.ReactNode> = {
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  briefcase: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  graduation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  rocket: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  terminal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  ),
};

/* ─── Type Badge Color ─────────────────────────────── */
const typeColors: Record<ExperienceType["type"], string> = {
  "Full-time": "bg-emerald-500/15 text-emerald-300 border-emerald-400/30 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-400/40",
  "Part-time": "bg-blue-500/15 text-blue-300 border-blue-400/30 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-400/40",
  Freelance: "bg-amber-500/15 text-amber-300 border-amber-400/30 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-400/40",
  Internship: "bg-purple-500/15 text-purple-300 border-purple-400/30 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-400/40",
  Training: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-400/40",
};

/* ─── Experience Card ──────────────────────────────── */
const ExperienceCard: React.FC<{
  exp: ExperienceType;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ exp, index, isExpanded, onToggle }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 lg:gap-8 group">
      {/* ── Timeline connector (desktop) ───────────── */}
      <div className="hidden lg:flex flex-col items-center order-2 relative z-10">
        {/* Glowing dot */}
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-[#0a0a0a] border-2 border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-[#C3E41D] group-hover:border-[#C3E41D]/50 group-hover:shadow-[0_0_30px_rgba(195,228,29,0.2)] transition-all duration-500">
            {icons[exp.icon]}
          </div>
          {/* Pulse ring on hover */}
          <div className="absolute inset-0 rounded-2xl border border-[#C3E41D]/0 group-hover:border-[#C3E41D]/20 group-hover:scale-[1.4] transition-all duration-700 pointer-events-none" />
        </motion.div>
        {/* Vertical line */}
        {index < experiences.length - 1 && (
          <div className="w-[1px] flex-1 bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent mt-2" />
        )}
      </div>

      {/* ── Card (positioned left or right on desktop) ─ */}
      <motion.div
        className={`${isEven ? "lg:order-1" : "lg:order-3 lg:col-start-3"}`}
        initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          onClick={onToggle}
          className="relative cursor-pointer rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white/80 dark:bg-[#0d0d0d] p-6 md:p-8 hover:border-[#C3E41D]/40 hover:shadow-[0_0_40px_rgba(195,228,29,0.08)] transition-all duration-500 group/card"
        >
          {/* Accent corner */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
            <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-[#C3E41D]/40 to-transparent" />
            <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-[#C3E41D]/40 to-transparent" />
          </div>

          {/* Mobile icon */}
          <div className="flex lg:hidden items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-[#C3E41D]">
              {icons[exp.icon]}
            </div>
            <span className="text-neutral-400 dark:text-neutral-400 text-xs font-mono">{exp.period}</span>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border ${typeColors[exp.type]}`}>
                  {exp.type}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 dark:text-neutral-400 uppercase hidden lg:inline">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-['Fira_Code'] tracking-tight leading-tight group-hover/card:text-[#C3E41D] transition-colors duration-300">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-sm text-neutral-500 dark:text-neutral-300 font-['Antic']">
                  {exp.company}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                <span className="text-sm text-neutral-400 dark:text-neutral-400 font-['Antic']">
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Expand indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-500 group-hover/card:text-[#C3E41D] transition-colors shrink-0 mt-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-500 dark:text-neutral-300/80 font-['Antic'] leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Tech tags (always visible) */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/[0.08] hover:border-[#C3E41D]/40 hover:text-[#C3E41D] transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Expandable highlights */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-white/[0.08]">
                  <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#C3E41D] mb-4">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 text-sm text-neutral-500 dark:text-neutral-300/80 font-['Antic']"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C3E41D] mt-1.5 shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Empty spacer for opposite side (desktop) ── */}
      <div className={`hidden lg:block ${isEven ? "lg:order-3" : "lg:order-1"}`} />
    </div>
  );
};

/* ─── Main Experience Section ──────────────────────── */
export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 bg-background overflow-hidden transition-colors duration-300"
    >
      {/* Background watermark */}
      <div
        className="absolute top-0 left-0 text-[25vw] lg:text-[20vw] font-bold opacity-[0.03] select-none pointer-events-none whitespace-nowrap leading-none"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        EXP
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C3E41D]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#C3E41D]" />
            <span
              className="text-[10px] font-bold tracking-[0.4em] uppercase"
              style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
            >
              Career Journey
            </span>
            <div className="h-[2px] w-12 bg-[#C3E41D]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none font-['Fira_Code']">
            Where I've{" "}
            <span className="text-[#C3E41D] relative">
              Grown
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#C3E41D]/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            &<br className="hidden sm:block" /> What I've{" "}
            <span className="text-[#C3E41D]">Built</span>.
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400/90 font-['Antic'] max-w-lg mx-auto mt-6 text-sm md:text-base">
            A timeline of the experiences, training, and challenges that shaped
            me as a software engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px]">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
          </div>


          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                isExpanded={expandedId === exp.id}
                onToggle={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
              />
            ))}
          </div>

          {/* Timeline end dot */}
          <motion.div
            className="hidden lg:flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-3 h-3 rounded-full bg-[#C3E41D]/50 ring-4 ring-[#C3E41D]/10" />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-neutral-500 font-['Antic'] text-sm mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#C3E41D] text-[#C3E41D] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#C3E41D] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(195,228,29,0.1)] group"
          >
            Let's Connect
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};
