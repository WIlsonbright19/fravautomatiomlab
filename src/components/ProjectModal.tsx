import React, { useEffect, useRef } from 'react';
import { X, Code2, Server, Gauge, Database, Cloud, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-neutral-900 text-white rounded-2xl shadow-2xl border border-neutral-800 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="text-sm font-sans text-neutral-400">{project.number}</span>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              {project.category}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close project modal (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Asset */}
          <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 aspect-16/10 sm:aspect-16/9">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Project Header Info */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3
                id="modal-project-title"
                className="text-2xl sm:text-4xl font-extrabold tracking-tight font-['Syne',sans-serif]"
              >
                {project.title}
              </h3>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans text-xs font-semibold">
                  {typeof project.metrics === 'string' ? project.metrics : (project.metrics as any)[0]?.value || ''}
                </span>
              )}
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technical Architecture Specs Matrix */}
          <div className="p-5 rounded-xl bg-neutral-950/60 border border-neutral-800">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-sans font-semibold tracking-wider uppercase text-neutral-300">
                System Engineering Specifications
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800/80">
                <span className="text-neutral-500 flex items-center gap-1.5 mb-1 font-sans">
                  <Code2 className="w-3.5 h-3.5" /> Core Tech Stack
                </span>
                <span className="font-sans text-neutral-200 font-semibold block">
                  {project.techSpecs.stack}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800/80">
                <span className="text-neutral-500 flex items-center gap-1.5 mb-1 font-sans">
                  <Server className="w-3.5 h-3.5" /> Architecture
                </span>
                <span className="font-sans text-neutral-200 font-semibold block">
                  {project.techSpecs.architecture}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800/80">
                <span className="text-neutral-500 flex items-center gap-1.5 mb-1 font-sans">
                  <Gauge className="w-3.5 h-3.5" /> Performance SLA
                </span>
                <span className="font-sans text-neutral-200 font-semibold block">
                  {project.techSpecs.performance}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800/80">
                <span className="text-neutral-500 flex items-center gap-1.5 mb-1 font-sans">
                  <Database className="w-3.5 h-3.5" /> Data Persistence
                </span>
                <span className="font-sans text-neutral-200 font-semibold block">
                  {project.techSpecs.database}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800/80 col-span-1 sm:col-span-2">
                <span className="text-neutral-500 flex items-center gap-1.5 mb-1 font-sans">
                  <Cloud className="w-3.5 h-3.5" /> Cloud & Deployment
                </span>
                <span className="font-sans text-neutral-200 font-semibold block">
                  {project.techSpecs.deployment}
                </span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 flex items-center justify-between border-t border-neutral-800">
            <span className="text-xs text-neutral-400 font-sans">
              Client: {project.client} · {project.year}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
