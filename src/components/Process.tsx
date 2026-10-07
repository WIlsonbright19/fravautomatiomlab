import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_DATA } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <div
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 w-full"
    >
      {/* Top Header Row matching video frame 00:45 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20"
      >
        <div>
          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Syne',sans-serif]"
          >
            Work Process
          </h2>
        </div>
        <p className="text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed">
          From initial vision to final execution, we follow a structured path to ensure every project is handled with precision and artistic integrity.
        </p>
      </motion.div>

      {/* 4 Cards Grid - Strictly Uniform Height and Width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
        {PROCESS_DATA.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, boxShadow: '0 20px 30px -10px rgba(0,0,0,0.1)' }}
            className="p-8 sm:p-10 rounded-2xl border border-neutral-200 bg-white shadow-xs transition-colors hover:border-neutral-950 flex flex-col justify-between h-full min-h-[360px] sm:min-h-[400px] cursor-default group"
          >
            <div>
              <span className="block font-sans text-sm sm:text-base text-neutral-400 group-hover:text-neutral-950 transition-colors mb-6 font-medium">
                {step.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 font-['Syne',sans-serif] mb-4">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="pt-8 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 group-hover:text-neutral-900 transition-colors">
              <span>Phase {step.number}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
