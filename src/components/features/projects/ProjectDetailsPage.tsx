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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#C3E41D] hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

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
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-500 hover:text-[#C3E41D] transition-colors mb-12 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="font-mono text-sm tracking-widest uppercase">Back to Portfolio</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden rounded-sm border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-neutral-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#C3E41D]"></div>
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#C3E41D] uppercase">{project.category}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 font-['Fira_Code'] tracking-tighter leading-none">
                {project.title}
              </h1>

              <div className="space-y-6 text-lg text-neutral-500 dark:text-neutral-400 font-['Antic'] leading-relaxed mb-12">
                <p>{project.longDescription}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-12">
                <h3 className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-neutral-100 dark:bg-white/5 text-[11px] font-mono tracking-widest uppercase border border-neutral-200 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-6 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-5 bg-[#C3E41D] text-black font-bold text-sm tracking-widest hover:bg-[#C3E41D]/90 transition-all shadow-[8px_8px_0px_0px_rgba(195,228,29,0.2)]"
                >
                  LIVE DEMO
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-5 border border-neutral-200 dark:border-white/10 font-bold text-sm tracking-widest hover:bg-neutral-100 dark:hover:bg-white/5 transition-all"
                >
                  VIEW CODE
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};
