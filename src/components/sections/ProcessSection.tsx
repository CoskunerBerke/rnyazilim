"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { processSteps } from "@/content/company";

export const ProcessSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut" as const },
    },
  };

  return (
    <section id="surec" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            İşleyişimiz
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            Fikirden Yayına, Net ve Planlı Bir Süreç
          </h2>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed">
            RN Yazılım ile yürüttüğünüz her projede süreç belirsiz olmaktan çıkar; şeffaf, ölçülebilir ve planlı aşamalarla ilerler.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Timeline */}
        <div className="hidden lg:block relative py-10 mb-10">
          {/* Connecting Line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 via-accent-cyan/40 to-accent-violet/30 -translate-y-1/2 z-0 origin-left"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          />

          <motion.div
            className="grid grid-cols-5 gap-4 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.stepNumber}
                variants={itemVariants}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Step circle */}
                <div className="w-14 h-14 rounded-full border-2 border-white/10 bg-slate-950 flex items-center justify-center text-text-light font-plus-jakarta font-bold text-lg mb-6 shadow-xl relative transition-all duration-300 group-hover:border-primary group-hover:scale-105 group-hover:shadow-primary/10">
                  {/* Glowing halo */}
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="bg-gradient-to-tr from-white to-slate-300 bg-clip-text text-transparent group-hover:from-primary-light group-hover:to-accent-cyan">
                    0{step.stepNumber}
                  </span>
                </div>

                {/* Step content */}
                <h3 className="font-plus-jakarta font-bold text-lg text-text-light mb-3 transition-colors duration-200 group-hover:text-primary-light">
                  {step.title}
                </h3>
                <p className="text-xs text-text-gray leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-8 border-l border-white/10 max-w-lg mx-auto flex flex-col gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-12"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.stepNumber}
                variants={itemVariants}
                className="relative flex flex-col gap-2 text-left"
              >
                {/* Node circle on the vertical border line */}
                <div className="absolute left-[-45px] top-0 w-8 h-8 rounded-full border border-white/10 bg-slate-950 flex items-center justify-center text-text-light font-plus-jakarta font-bold text-xs shadow-md">
                  0{step.stepNumber}
                </div>

                {/* Step content */}
                <h3 className="font-plus-jakarta font-bold text-lg text-text-light">
                  {step.title}
                </h3>
                <p className="text-sm text-text-gray leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
