import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import { useTheme } from "../../../hooks/useTheme";
import { Navbar } from "../../layout/Navbar";

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  
  const project = projects.find((p) => p.id === Number(id));
  const otherProjects = projects.filter((p) => p.id !== Number(id)).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <div
      className="min-h-screen transition-colors duration-500 overflow-x-hidden"
      style={{
        backgroundColor: isDark ? "#050505" : "#F9F9F9",
        color: isDark ? "#FFFFFF" : "#1A1A1A",
      }}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection="" />

      {/* Hero Section */}
      <main className="pt-24 pb-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Action */}
          <div className="flex items-center justify-between mb-16">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 rounded-full border border-[#C3E41D] text-[#C3E41D] text-[10px] font-bold uppercase tracking-widest hover:bg-[#C3E41D] hover:text-black transition-all shadow-[0_0_15px_rgba(195,228,29,0.1)] flex items-center gap-2"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              back
            </button>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400">2023/24</span>
          </div>

          {/* Title Section */}
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase mb-4">Project Portfolio</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
              {project.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#C3E41D] drop-shadow-[0_0_15px_rgba(195,228,29,0.3)]">{project.title.split(' ').pop()}</span>
            </h1>
          </div>

          {/* Main Image - Floating Look */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-20 group"
          >
            <div className="absolute inset-0 bg-[#C3E41D] opacity-10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto max-h-[70vh] object-contain relative z-10 mx-auto"
            />
            {/* Decorative Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#C3E41D]/10 rounded-3xl pointer-events-none hidden md:block"></div>
          </motion.div>

          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16 border-t border-neutral-200 dark:border-white/5 pt-12">
            <div>
              <p className="text-sm font-bold mb-3">Case Study Details</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-['Antic']">
                {project.category} <br /> {project.industry}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-3">Key Result</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-['Antic']">
                {project.duration} timeline with <br /> optimized delivery.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-3">Tech Stack</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-['Antic']">
                {project.tech.join(", ")}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-32">
            <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-3 rounded-full border border-[#C3E41D] text-[#C3E41D] text-sm font-bold hover:bg-[#C3E41D] hover:text-black transition-all shadow-[0_0_20px_rgba(195,228,29,0.1)] hover:shadow-[0_0_30px_rgba(195,228,29,0.3)]"
            >
              View Live Project
            </a>
          </div>

          {/* Content Sections */}
          <div className="space-y-32 mb-40">
            {[
              { label: "Project Overview", content: project.overview },
              { label: "The Problem", content: project.problem },
              { label: "Design Decisions", content: project.decisions },
              { label: "Key Challenges", content: project.challenges },
              { label: "Outcomes & Reflection", content: project.outcomes }
            ].map((section, idx) => (
              <div key={idx} className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#C3E41D] shadow-[0_0_10px_#C3E41D]"></div>
                  <h2 className="text-3xl font-bold">{section.label}</h2>
                </div>
                
                {Array.isArray(section.content) ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.content.map((item: any, i: number) => (
                      <div key={i} className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5">
                        <p className="text-sm font-bold mb-3 text-[#C3E41D]">{item.title}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-['Antic']">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-['Antic']">
                    {section.content as string}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <section>
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-bold">Other Projects</h2>
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-[#C3E41D]/20 blur-xl rounded-full"></div>
                <svg className="w-full h-full text-[#C3E41D] opacity-40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {otherProjects.map((p) => (
                <Link to={`/project/${p.id}`} key={p.id} className="group relative">
                  <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-[32px] p-8 border border-neutral-200 dark:border-white/5 group-hover:border-[#C3E41D]/50 transition-all duration-500 flex flex-col sm:flex-row items-center gap-8">
                    <div className="w-full sm:w-2/5 aspect-square rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-['Antic'] mb-6 line-clamp-2">
                        {p.description}
                      </p>
                      <span className="px-4 py-1.5 rounded-full border border-[#C3E41D]/30 text-[#C3E41D] text-[9px] font-bold uppercase tracking-widest group-hover:bg-[#C3E41D] group-hover:text-black transition-all">
                        {p.category.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => navigate("/projects")}
                className="px-10 py-3 rounded-full border border-[#C3E41D] text-[#C3E41D] text-[10px] font-bold uppercase tracking-widest hover:bg-[#C3E41D] hover:text-black transition-all shadow-[0_0_15px_rgba(195,228,29,0.1)]"
              >
                View All Projects
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
