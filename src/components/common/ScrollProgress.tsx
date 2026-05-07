import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-[40px] left-0 right-0 h-[2px] z-[101] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #C3E41D 0%, #a8c918 50%, #C3E41D 100%)",
      }}
    />
  );
};
