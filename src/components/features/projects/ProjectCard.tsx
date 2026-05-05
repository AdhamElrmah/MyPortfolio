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
      layoutId={`card-${project.id}`}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group relative cursor-pointer overflow-hidden border border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-neutral-900/50"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-6 left-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[9px] font-mono text-[#C3E41D] tracking-[0.3em] uppercase block mb-2">{project.category}</span>
            <h3 className="text-2xl font-bold font-['Fira_Code'] group-hover:text-[#C3E41D] transition-colors">{project.title}</h3>
          </div>
          <div className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#C3E41D] group-hover:border-[#C3E41D] transition-all duration-500">
            <svg className="w-5 h-5 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 font-['Antic'] text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};
