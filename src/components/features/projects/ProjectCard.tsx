import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../../types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/project/${project.id}`)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/5 mb-6">
        {/* Subtle Overlay */}
        <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        
        {/* Project Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 backdrop-blur-md bg-white/10 text-white text-[9px] font-mono tracking-widest uppercase border border-white/20 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold font-['Fira_Code'] mb-2 group-hover:text-[#C3E41D] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 font-['Antic'] text-sm max-w-[280px]">
            {project.description}
          </p>
        </div>
        
        <div className="w-12 h-12 rounded-full border border-[#C3E41D]/30 flex items-center justify-center group-hover:bg-[#C3E41D] group-hover:border-[#C3E41D] transition-all duration-500 shadow-[0_0_15px_rgba(195,228,29,0)] group-hover:shadow-[0_0_15px_rgba(195,228,29,0.3)]">
          <svg 
            className="w-5 h-5 text-[#C3E41D] group-hover:text-black transition-colors" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
