import React from "react";
import { motion } from "framer-motion";

export const WIPBanner: React.FC = () => {
  return (
    <motion.div 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] bg-[#C3E41D] text-black py-2 px-4 flex items-center justify-center gap-2 md:gap-4 overflow-hidden shadow-[0_4px_20px_rgba(195,228,29,0.3)]"
    >
      <div className="hidden sm:flex items-center gap-2 animate-pulse shrink-0">
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
          🚧 Work In Progress
        </span>
      </div>
      <div className="hidden sm:block h-3 w-[1px] bg-black/20 shrink-0"></div>
      <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.1em] font-mono text-center">
        Portfolio is currently under development • More case studies arriving soon
      </p>
      <div className="hidden md:block h-3 w-[1px] bg-black/20 shrink-0"></div>
      <div className="hidden md:flex items-center gap-2 animate-pulse shrink-0">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
          V1.0.4 BETA
        </span>
      </div>
    </motion.div>
  );
};
