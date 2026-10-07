import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const FravProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const steps = [
    { index: '01', title: 'DISCOVER' },
    { index: '02', DESIGN: 'DESIGN', title: 'DESIGN' },
    { index: '03', title: 'BUILD' },
    { index: '04', title: 'LAUNCH' },
    { index: '05', title: 'AUTOMATE' },
  ];

  // Each stage becomes dominant sequentially as visitor scrolls
  const step1Highlight = useTransform(scrollYProgress, [0, 0.2, 0.28], [1, 1, 0.25]);
  const step2Highlight = useTransform(scrollYProgress, [0.2, 0.38, 0.48], [0.25, 1, 0.25]);
  const step3Highlight = useTransform(scrollYProgress, [0.4, 0.58, 0.68], [0.25, 1, 0.25]);
  const step4Highlight = useTransform(scrollYProgress, [0.6, 0.78, 0.88], [0.25, 1, 0.25]);
  const step5Highlight = useTransform(scrollYProgress, [0.8, 0.95], [0.25, 1]);

  const highlights = [step1Highlight, step2Highlight, step3Highlight, step4Highlight, step5Highlight];

  return (
    <section
      id="process"
      ref={containerRef}
      aria-label="Section 04 PROCESS"
      className="relative w-full h-[220vh] bg-[#0A0A0A] text-white"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between p-6 sm:p-12 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="flex items-baseline justify-between w-full border-b border-white/10 pb-6">
          <div className="flex items-baseline gap-4">
            <span className="text-xs font-sans text-neutral-400">04 /</span>
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black font-['Syne',sans-serif] tracking-tighter leading-none">
              PROCESS
            </h2>
          </div>
          <span className="text-xs font-sans text-neutral-400 tracking-widest uppercase hidden sm:block">
            01 → 05 SEQUENTIAL DOMINANCE
          </span>
        </div>

        {/* The 5 Steps Stack: One becomes dominant while others move away */}
        <div className="my-auto py-8 space-y-4 sm:space-y-6 max-w-5xl">
          {steps.map((step, idx) => (
            <motion.div
              key={step.index}
              style={{ opacity: highlights[idx] }}
              className="flex items-baseline gap-6 sm:gap-10 transition-all duration-300"
            >
              <span className="text-lg sm:text-2xl lg:text-3xl font-sans text-neutral-500 font-bold">
                {step.index}
              </span>
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-['Syne',sans-serif] tracking-tighter uppercase text-white hover:text-[#FF4F38] transition-colors cursor-default">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Marker */}
        <div className="flex items-center justify-between text-xs font-sans text-neutral-500 pt-6 border-t border-white/10">
          <span>FRAV EXECUTION CADENCE</span>
          <span>SCROLL PROGRESSION ↓</span>
        </div>
      </div>
    </section>
  );
};
