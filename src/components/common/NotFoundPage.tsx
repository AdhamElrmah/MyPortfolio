import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Navbar } from "../layout/Navbar";

export const NotFoundPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500"
      style={{
        backgroundColor: isDark ? "#050505" : "#F9F9F9",
        color: isDark ? "#FFFFFF" : "#1A1A1A",
      }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection="" />

      <div className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Background 404 */}
        <div
          className="absolute text-[40vw] md:text-[30vw] font-bold opacity-[0.02] select-none pointer-events-none leading-none"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          404
        </div>

        {/* Ambient glow */}
        <div className="absolute w-[400px] h-[400px] bg-[#C3E41D]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        {/* Content */}
        <motion.div
          className="text-center relative z-10 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Error code */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-[#C3E41D]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C3E41D] font-mono">
              Page Not Found
            </span>
            <div className="h-[2px] w-8 bg-[#C3E41D]" />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold font-['Fira_Code'] tracking-tighter mb-4">
            4<span className="text-[#C3E41D]">0</span>4
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 font-['Antic'] text-base md:text-lg mb-4 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the void.
          </p>

          <p className="text-neutral-400 dark:text-neutral-500 font-mono text-xs mb-10">
            <span className="text-[#C3E41D]">$</span> error: ENOENT — no such file or directory
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C3E41D] text-black font-bold text-xs tracking-[0.15em] uppercase hover:shadow-[0_0_40px_rgba(195,228,29,0.3)] transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Go Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-neutral-300 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 font-bold text-xs tracking-[0.15em] uppercase hover:border-[#C3E41D]/50 hover:text-[#C3E41D] transition-all duration-300"
            >
              View Projects
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
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-[9px] font-mono text-neutral-500 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C3E41D]/50" />
            <span>Lost? Don't worry, every developer has been here.</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
