import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const Reviews: React.FC = () => {
  // Split into 3 columns matching frame 00:59 - 01:01 in the video
  const col1 = [TESTIMONIALS_DATA[0], TESTIMONIALS_DATA[3]]; // Sarah Jenkins, Soham
  const col2 = [TESTIMONIALS_DATA[1], TESTIMONIALS_DATA[4]]; // Mia & Drake, Aubrey
  const col3 = [TESTIMONIALS_DATA[2], TESTIMONIALS_DATA[5]]; // Shane, Lisa

  const renderCard = (item: typeof TESTIMONIALS_DATA[0], index: number) => (
    <motion.article
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col space-y-4 group cursor-default"
    >
      {/* Photo on Top with EXACT uniform height and width across all 6 cards */}
      <div className="w-full h-72 sm:h-84 lg:h-96 rounded-2xl overflow-hidden bg-neutral-100 shadow-xs border border-neutral-200/80">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Name and Role with smooth text transition */}
      <div className="pt-2">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 font-['Syne',sans-serif] group-hover:text-neutral-700 transition-colors">
          {item.name}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-0.5">
          {item.role}
        </p>
      </div>

      {/* Quote */}
      <blockquote className="text-neutral-600 text-sm sm:text-base leading-relaxed">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
    </motion.article>
  );

  return (
    <div
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 w-full"
    >
      <motion.h2
        id="reviews-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Syne',sans-serif] mb-16"
      >
        Client Reviews
      </motion.h2>

      {/* 3-Column Grid matching frame 00:59 in the video */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 w-full items-start">
        {/* Column 1 */}
        <div className="space-y-14 sm:space-y-20">
          {col1.map((item, idx) => renderCard(item, idx))}
        </div>

        {/* Column 2 */}
        <div className="space-y-14 sm:space-y-20">
          {col2.map((item, idx) => renderCard(item, idx + 2))}
        </div>

        {/* Column 3 */}
        <div className="space-y-14 sm:space-y-20">
          {col3.map((item, idx) => renderCard(item, idx + 4))}
        </div>
      </div>
    </div>
  );
};
