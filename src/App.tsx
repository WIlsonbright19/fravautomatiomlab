/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import { FravNav } from './components/frav/FravNav';
import { FravFooter } from './components/frav/FravFooter';
import { FravContactModal } from './components/frav/FravContactModal';
import { FravEntranceLoader } from './components/frav/FravEntranceLoader';
import { HomePage } from './pages/HomePage';
import { WebDevPage } from './pages/WebDevPage';
import { AIAutomationPage } from './pages/AIAutomationPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { FravPageId } from './types';

export default function App() {
  const normalizePage = (p: string): FravPageId => {
    if (p === 'web' || p === 'web-development' || p === 'web-dev') return 'web-development';
    if (p === 'automation' || p === 'ai-automation') return 'automation';
    if (p === 'about' || p === 'about-us' || p === 'contact') return 'about-us';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<FravPageId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        return normalizePage(hash);
      }
    }
    return 'home';
  });

  const [contactOpen, setContactOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Pause smooth scroll during entrance sequence
  useEffect(() => {
    if (!hasEntered) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [hasEntered]);

  // Lenis smooth momentum scrolling with studio-directed cubic easing
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Hash change synchronization for back/forward browser buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(normalizePage(hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: FravPageId, targetElementId?: string) => {
    const canonicalPage = normalizePage(page);
    setCurrentPage(canonicalPage);
    window.location.hash = canonicalPage === 'home' ? '' : canonicalPage;

    if (lenisRef.current) {
      if (targetElementId) {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          if (el && lenisRef.current) {
            lenisRef.current.scrollTo(el, { duration: 1.2 });
          }
        }, 100);
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
      }
    } else {
      if (targetElementId) {
        setTimeout(() => {
          const el = document.getElementById(targetElementId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  };

  return (
    <>
      {/* Cinematic Studio Entrance Loader on Initial Page Load */}
      {!hasEntered && (
        <FravEntranceLoader onComplete={() => setHasEntered(true)} />
      )}

      <div className="min-h-screen bg-[#0A0A0A] text-white font-sans flex flex-col selection:bg-white selection:text-black relative antialiased">
        {/* Top subtle scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-white origin-left z-50 pointer-events-none opacity-80"
        style={{ scaleX }}
      />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-white text-black text-xs font-sans uppercase font-bold rounded-sm shadow-xl"
      >
        Skip to content
      </a>

      {/* Navigation: FRAV · WEB DEVELOPMENT / AUTOMATION / ABOUT US · START */}
      <FravNav
        currentPage={currentPage}
        onNavigate={(page) => navigateToPage(page)}
        onStartClick={() => setContactOpen(true)}
      />

      {/* Active Page View */}
      <main id="main-content" className="flex-1 flex flex-col">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => navigateToPage(page)}
            onStartClick={() => setContactOpen(true)}
            onContactClick={() => navigateToPage('about-us', 'contact')}
          />
        )}

        {currentPage === 'web-development' && (
          <WebDevPage
            onNavigate={(page) => navigateToPage(page)}
            onStartClick={() => setContactOpen(true)}
          />
        )}

        {currentPage === 'automation' && (
          <AIAutomationPage
            onNavigate={(page) => navigateToPage(page)}
            onStartClick={() => setContactOpen(true)}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutUsPage
            onNavigate={(page) => navigateToPage(page)}
            onStartClick={() => setContactOpen(true)}
          />
        )}
      </main>

      {/* Footer: FRAV AUTOMATION LAB · WEB DEVELOPMENT, AUTOMATION, ABOUT US, CONTACT · PRIVACY / TERMS */}
      <FravFooter
        onNavigate={(page) => navigateToPage(page)}
        onContactClick={() => navigateToPage('about-us', 'contact')}
      />

      {/* Interactive Quick Brief Modal */}
      <FravContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  </>
);
}
