import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Navbar } from "../../layout/Navbar";
import { useTheme } from "../../../hooks/useTheme";

export const AllProjectsPage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen text-foreground transition-colors"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection="" />

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#C3E41D]"></div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#C3E41D] uppercase">
                The Archive
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none font-['Fira_Code']">
              All <span className="text-[#C3E41D]">Projects</span>
            </h1>
            <p className="mt-8 text-neutral-500 dark:text-neutral-400 font-['Antic'] text-xl max-w-xl">
              A curated selection of my work across web development, systems
              engineering, and design.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
