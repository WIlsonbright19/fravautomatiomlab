import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  strength?: number; // Distance pull multiplier
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  strength = 0.35,
  disabled = false,
  type = 'button',
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [canHover, setCanHover] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  const springConfig = { damping: 20, stiffness: 160, mass: 0.2 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const textX = useSpring(0, springConfig);
  const textY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!canHover || prefersReducedMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
    textX.set(deltaX * 0.4);
    textY.set(deltaY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    textX.set(0);
    textY.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={`relative cursor-pointer transition-colors duration-300 ${className}`}
    >
      <motion.span style={{ x: textX, y: textY }} className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </motion.span>
    </motion.button>
  );
};
