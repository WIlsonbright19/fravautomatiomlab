import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

interface TiltCanvasProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max degrees of tilt
  scaleOnHover?: number;
}

export const TiltCanvas: React.FC<TiltCanvasProps> = ({
  children,
  className = '',
  maxTilt = 6,
  scaleOnHover = 1.02,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    }
  }, []);

  const springConfig = { stiffness: 180, damping: 25 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(-y * maxTilt * 2);
    rotateY.set(x * maxTilt * 2);
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className={`w-full transition-shadow duration-500 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
