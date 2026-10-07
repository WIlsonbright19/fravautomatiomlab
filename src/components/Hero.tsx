import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onExplore?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax zoom and fade on scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={containerRef}
      aria-label="Arthur Jones Web Developer Hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 sm:pb-12 px-6 sm:px-10 md:px-14 lg:px-24 overflow-hidden bg-neutral-900 select-none"
    >
      {/* Background Image Container with Parallax Zoom */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ scale: imageScale }}
      >
        <img
          src="./images/web_dev_hero_1791238807505.jpg"
          alt="Modern developer workspace with clean TypeScript code on ultra-wide display"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Soft cinematic gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>

      {/* Top Labels Row: Full-Stack Engineer (Left) — AI Systems Architect (Right) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full flex items-center justify-between text-white text-xs sm:text-sm font-semibold tracking-wider pt-6 font-sans"
      >
        <span className="drop-shadow-md px-3 py-1 rounded bg-black/40 backdrop-blur-xs border border-white/10">
          {HERO_DATA.roleLeft}
        </span>
        <span className="drop-shadow-md px-3 py-1 rounded bg-black/40 backdrop-blur-xs border border-white/10">
          {HERO_DATA.roleRight}
        </span>
      </motion.div>

      {/* Center Giant Typographic Display with Scroll Transformation */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full my-auto text-center flex flex-col items-center justify-center py-6 sm:py-12"
      >
        <h1 className="w-full font-['Syne',sans-serif] font-black tracking-tighter text-white uppercase text-center leading-[0.88] drop-shadow-2xl text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] xl:text-[13.5rem] 2xl:text-[16rem]">
          ARTHUR JONES
        </h1>
        <p className="sr-only">Arthur Jones - Full-Stack Web Developer & AI Automation Engineer</p>
      </motion.div>

      {/* Bottom Sub-Banners: Left — Center — Right with smooth entrance */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-md"
      >
        <div className="text-left w-full sm:w-auto">
          <span className="px-3.5 py-1.5 rounded-sm bg-black/40 backdrop-blur-md border border-white/10">
            {HERO_DATA.taglineLeft}
          </span>
        </div>
        <div className="text-center w-full sm:w-auto">
          <span className="px-3.5 py-1.5 rounded-sm bg-black/40 backdrop-blur-md border border-white/10">
            {HERO_DATA.taglineCenter}
          </span>
        </div>
        <div className="text-right w-full sm:w-auto">
          <span className="px-3.5 py-1.5 rounded-sm bg-black/40 backdrop-blur-md border border-white/10">
            {HERO_DATA.taglineRight}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
