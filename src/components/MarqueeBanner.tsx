import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const MarqueeBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax subtle zoom on image
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const marqueeItems = [
    'Sub-Second Web Applications',
    'Autonomous AI Agent Pipelines',
    'Zero-Latency Architecture',
    'Full-Stack Type Safety',
  ];

  return (
    <div ref={containerRef} aria-label="Engineering Philosophy" className="w-full overflow-hidden my-12 sm:my-20">
      {/* Full-width image break with parallax */}
      <div className="w-full h-[60vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden bg-neutral-900 relative">
        <motion.div
          className="w-full h-[120%] -top-[10%] relative"
          style={{ y: imgY }}
        >
          <img
            src="./images/ai_automation_hero_1791238819833.jpg"
            alt="Abstract neural networks and data pipeline streams"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Ticker banner with smooth infinite animation */}
      <div className="py-6 sm:py-8 bg-white border-y border-neutral-200 overflow-hidden select-none w-full">
        <div className="animate-marquee flex items-center gap-8 sm:gap-14 whitespace-nowrap text-sm sm:text-base md:text-lg font-medium text-neutral-800">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-neutral-400 font-light">+</span>
              <span className="tracking-wide uppercase font-sans text-sm">{item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
