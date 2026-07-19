"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Layout, Database, Cloud, ShieldAlert, ChevronDown } from "lucide-react";
import { techCapabilities } from "@/content/company";
import Card from "../ui/Card";

const iconMap = [Layout, Terminal, Database, Cloud, Cpu, ShieldAlert];

export const TechCapabilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<number | null>(0);

  // Orbit Center & Math parameters
  const width = 360;
  const height = 360;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 120;

  return (
    <section className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Teknolojilerimiz
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            Modern ve Güvenilir Teknolojiler
          </h2>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed">
            Projelerimizi geliştirirken en güncel, güvenli, topluluk desteği güçlü ve performanslı teknolojileri tercih ediyoruz.
          </p>
        </div>

        {/* Desktop Orbiting Technology Universe (lg and above) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center min-h-[400px]">
          {/* Left Column: Interactive Orbit Visual (col-span-5) */}
          <div className="col-span-5 flex justify-center items-center">
            <div 
              className="relative select-none" 
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              {/* Central Pulsing Orbiting Track rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none scale-100" />
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/10 pointer-events-none scale-[0.67]" />
              
              {/* Dynamic SVG Connection lines with animated pulse paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {techCapabilities.map((_, i) => {
                  const angle = (i * (360 / techCapabilities.length) - 90) * (Math.PI / 180);
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  const isActive = activeCategory === i;

                  return (
                    <g key={i}>
                      <line
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke={isActive ? "url(#activeLineGrad)" : "rgba(255,255,255,0.06)"}
                        strokeWidth={isActive ? 2 : 1}
                      />
                      {isActive && (
                        <circle
                          cx={centerX + (x - centerX) * 0.5}
                          cy={centerY + (y - centerY) * 0.5}
                          r="3"
                          fill="#06b6d4"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central RN Core Engine Node */}
              <div
                className="absolute rounded-full bg-slate-950 border border-primary/40 glow-blue text-text-light flex flex-col items-center justify-center font-plus-jakarta font-bold text-sm shadow-xl z-20"
                style={{
                  width: "80px",
                  height: "80px",
                  left: `${centerX - 40}px`,
                  top: `${centerY - 40}px`,
                }}
              >
                <Cpu className="h-5 w-5 text-primary-light animate-pulse mb-1" />
                <span className="text-[10px] tracking-wider font-mono">RN_CORE</span>
              </div>

              {/* Satellite Orbiting Category Nodes */}
              {techCapabilities.map((cap, i) => {
                const Icon = iconMap[i % iconMap.length];
                const angle = (i * (360 / techCapabilities.length) - 90) * (Math.PI / 180);
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                const isActive = activeCategory === i;

                return (
                  <button
                    key={cap.category}
                    onClick={() => setActiveCategory(i)}
                    onMouseEnter={() => setActiveCategory(i)}
                    className={`absolute w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 z-20 cursor-pointer shadow-lg outline-none ${
                      isActive
                        ? "bg-primary/20 border-accent-cyan text-accent-cyan scale-110 shadow-accent-cyan/10"
                        : "bg-slate-950 border-white/10 text-text-gray hover:border-white/20 hover:text-text-light"
                    }`}
                    style={{
                      left: `${x - 24}px`,
                      top: `${y - 24}px`,
                    }}
                    aria-label={`${cap.category} teknolojileri`}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Tech Details Showcase (col-span-7) */}
          <div className="col-span-7 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {techCapabilities.map((capability, idx) => {
                if (activeCategory !== idx) return null;
                const Icon = iconMap[idx % iconMap.length];
                
                return (
                  <motion.div
                    key={capability.category}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <Card className="border border-white/10 bg-slate-900/40 glow-cyan p-8">
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-plus-jakarta font-bold text-xl text-text-light">
                          {capability.category}
                        </h3>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-text-gray leading-relaxed mb-6">
                        Projelerimizde yüksek verimlilik ve kararlı çalışma yapısı elde etmek adına bu kategori altında aşağıdaki modern araçları kullanmaktayız.
                      </p>

                      <div className="flex flex-wrap gap-2.5">
                        {capability.items.map((tech) => (
                          <span
                            key={tech}
                            className="px-3.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-white/5 text-text-light font-mono select-none hover:border-primary/30 transition-all hover:scale-105 duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion Fallback (below lg screen width) */}
        <div className="lg:hidden flex flex-col gap-3 max-w-lg mx-auto">
          {techCapabilities.map((capability, index) => {
            const Icon = iconMap[index % iconMap.length];
            const isOpen = openMobileAccordion === index;

            return (
              <div
                key={capability.category}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-slate-900/60 border-primary/20" 
                    : "bg-white/[0.01] border-white/5"
                }`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => setOpenMobileAccordion(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${isOpen ? "text-accent-cyan" : "text-text-gray"}`} />
                    <span className={`font-plus-jakarta font-bold text-sm sm:text-base ${isOpen ? "text-text-light" : "text-text-gray/80"}`}>
                      {capability.category}
                    </span>
                  </div>
                  <ChevronDown className={`h-4.5 w-4.5 text-text-gray transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Accordion Body contents */}
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5 border-t border-white/5 pt-4 bg-slate-950/20"
                  >
                    <div className="flex flex-wrap gap-2">
                      {capability.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-slate-950 border border-white/5 text-text-light font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechCapabilitiesSection;
