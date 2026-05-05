import React from "react";
import { ProjectCard } from "../features/projects/ProjectCard";
import { projects } from "../../data/projects";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 -right-20 text-[15vw] font-bold rotate-90 select-none">WORKS</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#C3E41D]"></div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#C3E41D] uppercase">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none font-['Fira_Code']">
              Building the <span className="text-[#C3E41D]">Future</span> <br /> 
              One Pixel at a Time.
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 font-['Antic'] max-w-xs text-sm md:text-base">
            Exploring the intersection of high-performance engineering and high-fidelity design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
