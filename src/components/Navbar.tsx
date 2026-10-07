import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type Lenis from 'lenis';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Website Development', id: 'web-dev' },
    { label: 'AI Automation', id: 'ai-automation' },
    { label: 'Contact', id: 'contact' },
  ];

  const handlePageSelect = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 w-full ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md py-4 border-b border-neutral-200/60 shadow-xs'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="w-full px-6 sm:px-10 md:px-14 lg:px-24 flex items-center justify-between">
          {/* Logo on Left */}
          <button
            type="button"
            onClick={() => handlePageSelect('home')}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 font-['Syne',sans-serif] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 cursor-pointer active:scale-98 transition-transform text-left"
            aria-label="Arthur Jones - Home"
          >
            Arth.Jones
          </button>

          {/* 4 Clean Navigation Pages with sliding active indicator */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-medium"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageSelect(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                    isActive ? 'text-neutral-950 font-semibold' : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neutral-950 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg active:scale-95 transition-transform cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                  <span className="text-xl font-bold tracking-tight text-neutral-900 font-['Syne',sans-serif]">
                    Arth.Jones
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-neutral-500 hover:text-neutral-900 rounded-md cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col gap-3 text-base font-medium">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handlePageSelect(item.id)}
                      className={`py-2.5 px-3 rounded-md transition-colors text-left cursor-pointer ${
                        currentPage === item.id
                          ? 'bg-neutral-100 text-neutral-950 font-bold'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="text-xs text-neutral-400 pb-4 border-t border-neutral-100 pt-4">
                hi@arthurjones.dev · Available for commissions
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
