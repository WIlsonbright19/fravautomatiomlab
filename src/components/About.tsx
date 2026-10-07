import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <div
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 w-full"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Syne',sans-serif] mb-4"
          >
            {ABOUT_DATA.title}
          </h2>

          <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-6">
            {ABOUT_DATA.subtitle}
          </h3>

          <div className="space-y-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            <p>{ABOUT_DATA.p1}</p>
            <p>{ABOUT_DATA.p2}</p>
          </div>

          {/* Stats Row */}
          <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-3 gap-6 sm:gap-12 max-w-xl">
            {ABOUT_DATA.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="flex flex-col"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-['Syne',sans-serif] tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Tilted Rounded Photo Card matching video with hover lift */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 border border-neutral-200 transform -rotate-1 cursor-pointer"
            >
              <img
                src="./images/about_photographer_1791230766900.jpg"
                alt="Arthur Jones focusing through camera viewfinder"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
