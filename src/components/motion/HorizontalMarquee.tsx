import React from 'react';
import { motion } from 'motion/react';

interface HorizontalMarqueeProps {
  items: string[];
  separator?: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const HorizontalMarquee: React.FC<HorizontalMarqueeProps> = ({
  items,
  separator = '·',
  speed = 35,
  direction = 'left',
  className = '',
}) => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden select-none whitespace-nowrap flex ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
        className="flex items-center shrink-0"
      >
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-neutral-400">
              {item}
            </span>
            <span className="mx-6 text-neutral-600 font-sans text-xs">{separator}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
