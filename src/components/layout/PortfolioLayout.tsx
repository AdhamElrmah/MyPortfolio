import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Education } from "../sections/Education";
import { Contact } from "../sections/Contact";
import { TechStack } from "../sections/TechStack";
import { useTheme } from "../../hooks/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";

import { useLocation } from "react-router-dom";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

export const PortfolioLayout: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo;
      // Clear state immediately
      window.history.replaceState({}, document.title);
      // First jump to top instantly so user doesn't see an intermediate position
      window.scrollTo(0, 0);
      // Then scroll to the target section after DOM is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div
      className="min-h-screen text-foreground transition-colors"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <div className="w-full">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
};
