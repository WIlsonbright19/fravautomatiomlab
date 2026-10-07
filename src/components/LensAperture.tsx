import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Network, ArrowDownRight, Layers, Database } from 'lucide-react';
import type Lenis from 'lenis';

type SystemMode = 'fullstack' | 'agent' | 'rag';

interface LensApertureProps {
  onNavigateToContact?: () => void;
}

export const LensAperture: React.FC<LensApertureProps> = ({ onNavigateToContact }) => {
  const [activeMode, setActiveMode] = useState<SystemMode>('fullstack');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const systemModes: Record<SystemMode, {
    title: string;
    badge: string;
    stack: string;
    telemetry: string;
    image: string;
    metrics: string;
    color: string;
  }> = {
    fullstack: {
      title: 'Next.js 15 & React 19 Architecture',
      badge: 'Edge Streaming Engine',
      stack: 'TypeScript · Server Actions · Tailwind · PostgreSQL',
      telemetry: 'TTFB: 42ms · FCP: 0.7s · Lighthouse: 100/100',
      image: './images/web_dev_hero_1791238807505.jpg',
      metrics: 'Sub-second real-world performance with zero layout shift',
      color: 'text-amber-400 border-amber-400/40 bg-amber-400/10',
    },
    agent: {
      title: 'Autonomous Multi-Agent Orchestration',
      badge: 'LangGraph Reasoning Graph',
      stack: 'Python · FastAPI · Deterministic Tools · Redis Queue',
      telemetry: 'Agents: 6 · Parallel Steps: 14 · Tool Calls: 99.8%',
      image: './images/ai_automation_hero_1791238819833.jpg',
      metrics: 'Complex multi-step workflow automation with strict human escalation',
      color: 'text-cyan-400 border-cyan-400/40 bg-cyan-400/10',
    },
    rag: {
      title: 'Enterprise Vector Retrieval & Grounding',
      badge: 'Neural Reranking Pipeline',
      stack: 'Pinecone · Cohere Rerank · Hybrid BM25 · Pydantic',
      telemetry: 'Top-K: 5 · Recall: 99.4% · Hallucination Guard: Active',
      image: './images/service_commercial_1791230786111.jpg',
      metrics: 'Deterministic grounding across million-token enterprise data sets',
      color: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
    },
  };

  const handleContactClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      const target = document.querySelector('#contact');
      if (target) {
        if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -40, duration: 1.2 });
        else target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      aria-label="Interactive Systems Architecture"
      className="relative w-full bg-[#080808] text-white py-24 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden border-t border-neutral-900"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 bg-radial from-neutral-900/60 via-[#080808] to-[#080808] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full relative z-10">
        {/* Section Header: Bold Engineering Tenet */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-sans tracking-widest text-amber-400 uppercase mb-3 block font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Live Architecture Console & Telemetry
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-['Syne',sans-serif] leading-[1.05]">
              Clean code.
              <br />
              <span className="text-neutral-400 font-light">Autonomous intelligence.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2 text-sm text-neutral-400 font-sans">
            <span>[RUNTIME ENGINE: ACTIVE]</span>
            <span className="text-xs text-neutral-500">{systemModes[activeMode].telemetry}</span>
          </div>
        </div>

        {/* Master Interactive Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          className="relative w-full rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-950 shadow-[0_30px_90px_rgba(0,0,0,0.9)] aspect-16/10 sm:aspect-16/9 lg:aspect-21/9"
        >
          {/* Main Visual Image with Parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={systemModes[activeMode].image}
              alt={systemModes[activeMode].title}
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out origin-center"
              style={{
                transform: `scale(1.05) translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
              }}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Dark glass overlay */}
            <div className="absolute inset-0 bg-neutral-950/70" />
          </div>

          {/* Interactive HUD Overlays */}
          <div className="absolute inset-6 sm:inset-10 pointer-events-none z-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="w-8 h-8 border-t-2 border-l-2 border-white/60" />
              <div className="flex items-center gap-3 font-sans text-[10px] sm:text-xs text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{systemModes[activeMode].badge}</span>
                <span>TYPE-SAFE SLA</span>
              </div>
              <span className="w-8 h-8 border-t-2 border-r-2 border-white/60" />
            </div>

            {/* Central Spec Card inside stage */}
            <div className="self-center text-center bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/15 max-w-xl">
              <span className="text-xs font-sans text-amber-400 uppercase tracking-wider mb-2 block">
                {systemModes[activeMode].badge}
              </span>
              <h3 className="font-['Syne',sans-serif] font-bold text-xl sm:text-2xl text-white tracking-tight mb-2">
                {systemModes[activeMode].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mb-3">
                {systemModes[activeMode].stack}
              </p>
              <div className="text-xs font-sans text-neutral-400 border-t border-white/10 pt-2">
                {systemModes[activeMode].metrics}
              </div>
            </div>

            <div className="flex justify-between items-end">
              <span className="w-8 h-8 border-b-2 border-l-2 border-white/60" />
              <span className="font-sans text-xs text-neutral-400 hidden sm:inline">
                Arthur Jones Studio · High-Concurrence Systems
              </span>
              <span className="w-8 h-8 border-b-2 border-r-2 border-white/60" />
            </div>
          </div>
        </div>

        {/* Viewfinder Interactive Control Console */}
        <div className="mt-8 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Architecture Mode Selector */}
          <div className="md:col-span-8 flex flex-col gap-2">
            <span className="text-xs font-sans uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" /> Switch Architecture Pipeline:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {(['fullstack', 'agent', 'rag'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setActiveMode(mode)}
                  className={`px-4 py-2 rounded-lg text-xs font-sans transition-all cursor-pointer ${
                    activeMode === mode
                      ? systemModes[mode].color + ' font-bold shadow-xs'
                      : 'text-neutral-400 bg-neutral-950/60 border border-neutral-800 hover:text-white'
                  }`}
                >
                  {systemModes[mode].badge}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-3 pt-2 md:pt-0">
            <button
              type="button"
              onClick={handleContactClick}
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-98"
            >
              <span>Build This Architecture</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
