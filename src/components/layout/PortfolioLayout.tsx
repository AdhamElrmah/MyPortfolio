import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Education } from "../sections/Education";
import { Contact } from "../sections/Contact";
import { TechStack } from "../sections/TechStack";
import { SocialSidebar } from "./SocialSidebar";
import { BackToTop } from "../common/BackToTop";
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
      <SocialSidebar />
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
      <BackToTop />
    </div>
  );
};
