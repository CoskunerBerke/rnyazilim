"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, HeartHandshake, TrendingUp } from "lucide-react";
import { whyUs } from "@/content/company";
import Card from "../ui/Card";

const iconMap = [Target, ShieldCheck, HeartHandshake, TrendingUp];

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      {/* Gestalt Connection Diagram SVG */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" 
        viewBox="0 0 1200 600" 
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 280,220 C 580,180 620,380 920,340 C 920,340 700,520 280,480"
          fill="none"
          stroke="rgba(6, 182, 212, 0.12)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Değerlerimiz
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            Neden RN Yazılım?
          </h2>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed">
            İşletmenizi dijital dünyada bir adım öne taşırken güven, kalite ve şeffaflık ilkelerinden asla ödün vermiyoruz.
          </p>
        </div>

        {/* 2x2 Why Us Grid with Emphasized Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {whyUs.map((item, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            // Emphasize the first two values (primary principles) over the rest
            const isEmphasized = index < 2;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card 
                  className={`flex flex-col sm:flex-row items-start gap-5 group relative h-full transition-all duration-300 ${
                    isEmphasized 
                      ? "border border-primary/20 bg-slate-900/50 glow-blue" 
                      : "border border-white/5 bg-slate-950/40"
                  }`}
                >
                  {/* Glowing edge on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon box */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isEmphasized 
                      ? "bg-primary/10 border-primary/30 text-accent-cyan group-hover:border-primary/60 group-hover:bg-primary/20" 
                      : "bg-white/5 border-white/10 text-text-gray group-hover:border-white/20 group-hover:text-primary-light"
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-2 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-plus-jakarta font-bold text-lg text-text-light group-hover:text-primary-light transition-colors duration-200">
                        {item.title}
                      </h3>
                      {isEmphasized && (
                        <span className="px-2 py-0.5 text-[9px] font-bold text-accent-cyan bg-accent-cyan/10 rounded-full select-none">
                          Öncelikli İlke
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-text-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
