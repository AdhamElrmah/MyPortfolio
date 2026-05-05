import React from "react";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

export const MenuToggle = React.forwardRef<
  HTMLButtonElement,
  {
    isOpen: boolean;
    onClick: () => void;
    isDark: boolean;
  }
>(({ isOpen, onClick, isDark }, ref) => {
  return (
    <Magnetic>
      <button
        ref={ref}
        onClick={onClick}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full z-50 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="flex h-5 w-8 flex-col items-end justify-between px-1">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            className={`h-[2px] rounded-full transition-colors ${isDark ? "bg-white" : "bg-black"}`}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.span
            animate={
              isOpen
                ? { opacity: 0, x: 20 }
                : { opacity: 1, x: 0, width: "70%" }
            }
            whileHover={!isOpen ? { width: "100%" } : {}}
            className={`h-[2px] rounded-full transition-colors ${isDark ? "bg-white" : "bg-black"}`}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            className={`h-[2px] rounded-full transition-colors ${isDark ? "bg-white" : "bg-black"}`}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        </div>
      </button>
    </Magnetic>
  );
});

MenuToggle.displayName = "MenuToggle";
