import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <div
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 w-full relative"
    >
      {/* Title with scroll entrance */}
      <motion.h2
        id="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Syne',sans-serif] mb-16"
      >
        Selected Projects
      </motion.h2>

      {/* Projects List matching frame 00:30 in the video with rich hover transformations */}
      <div className="space-y-12 sm:space-y-16">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer pb-8 border-b border-neutral-200 transition-colors duration-300 relative"
            onClick={() => setSelectedProject(project)}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-4xl">
                {/* Title & Index with horizontal text transformation on hover */}
                <motion.div
                  className="flex items-baseline gap-4 mb-3"
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span className="font-sans text-xl sm:text-2xl text-neutral-400 group-hover:text-neutral-950 transition-colors">
                    {project.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-neutral-900 font-['Syne',sans-serif] group-hover:text-neutral-600 transition-colors inline">
                    {project.title}
                  </h3>
                </motion.div>

                {/* Description */}
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed pl-9 sm:pl-12 max-w-3xl transition-colors group-hover:text-neutral-700">
                  {project.longDescription}
                </p>
              </div>

              {/* Inset Uniform Image Thumbnail with hover reveal */}
              <div className="flex items-center gap-4 pl-9 lg:pl-0">
                <div className="w-44 h-28 sm:w-56 sm:h-36 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-xs shrink-0 group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 group-hover:rotate-45 transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
