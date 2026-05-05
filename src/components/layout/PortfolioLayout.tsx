import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { useTheme } from "../../hooks/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";

import { useLocation } from "react-router-dom";

const sectionIds = [
  "home",
  "about",
  "projects",
  "experience",
  "education",
  "writing",
  "contact",
];

export const PortfolioLayout: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Clear state to prevent scrolling again on refresh
      window.history.replaceState({}, document.title);
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
        <Projects />
        {/* Other sections will be added here */}
      </div>
    </div>
  );
};
