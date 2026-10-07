import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div
      className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full relative"
    >
      {/* Title */}
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 font-['Syne',sans-serif] mb-12 sm:mb-16 px-2"
      >
        What I Do
      </motion.h2>

      {/* Sticky Card Stacking with 100vh per article matching user request */}
      <div className="relative w-full space-y-12 sm:space-y-16 pb-24">
        {SERVICES_DATA.map((service, idx) => {
          return (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'sticky',
                top: '24px',
                zIndex: idx + 10,
              }}
              className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-neutral-950 text-white min-h-screen h-[100vh] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-neutral-800 transition-all duration-500"
            >
              {/* Blurred Background Image matching video */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover filter blur-2xl scale-125 opacity-25"
                />
                <div
                  className="absolute inset-0 bg-radial from-transparent via-neutral-950/70 to-neutral-950/95"
                  aria-hidden="true"
                />
              </div>

              {/* Top Row: Service Category Title & Number */}
              <div className="relative z-10 w-full flex items-baseline justify-between border-b border-white/15 pb-6 sm:pb-8">
                <h3 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-['Syne',sans-serif]">
                  {service.title}
                </h3>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-sans text-white/70 font-extrabold tabular-nums">
                  {service.number}
                </span>
              </div>

              {/* Middle & Bottom Content Grid designed specifically for 100vh height */}
              <div className="relative z-10 my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left Column: Subtitle, Narrative & Features */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="text-xs sm:text-sm font-sans tracking-widest text-amber-400 uppercase mb-3 block font-semibold">
                    Category {service.number} · Bespoke Art Direction
                  </span>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-5 font-['Syne',sans-serif] leading-tight">
                    {service.subtitle}
                  </h4>
                  <p className="text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8">
                    {service.description}
                  </p>

                  {/* Curated Scope & Deliverables */}
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3 block">
                      Scope & Key Deliverables
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-200">
                      {service.features.map((feature: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/90 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Generous Inset Photography Container */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-64 sm:h-80 lg:h-96 xl:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-neutral-900 group relative">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.subtitle}`}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-white/90 font-medium">
                      <span>{service.title} Portfolio Commission</span>
                      <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Bar */}
              <div className="relative z-10 w-full flex items-center justify-between pt-6 border-t border-white/10 text-xs text-neutral-400 font-sans">
                <span>Arthur Jones Studio · High-Fidelity Capture</span>
                <span>Scroll to explore next chapter ↓</span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};
