"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { processSteps } from "@/content/company";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = processSteps.length;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="surec" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />

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

        {/* Desktop Interactive 3D Perspective Timeline */}
        <div className="hidden lg:block relative py-12 mb-10 [perspective:1000px] [transform-style:preserve-3d]">
          <div className="relative [transform:rotateX(20deg)] origin-center">
            {/* Background Grey Track Line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[3px] bg-white/5 -translate-y-1/2 z-0" />

            {/* Glowing Active Track Line */}
            <motion.div
              className="absolute top-1/2 left-[10%] h-[3px] bg-gradient-to-r from-primary via-accent-cyan to-accent-violet -translate-y-1/2 z-0 origin-left"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeStep - 1) / (totalSteps - 1)) * 80}%` }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            />

            <motion.div
              className="grid grid-cols-5 gap-4 relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {processSteps.map((step) => {
                const stepNum = step.stepNumber;
                const isCompleted = stepNum < activeStep;
                const isActive = stepNum === activeStep;
                const isPending = stepNum > activeStep;

                return (
                  <motion.div
                    key={step.stepNumber}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveStep(stepNum)}
                    className="flex flex-col items-center text-center cursor-pointer group transition-all duration-300"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {/* Node circle */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-plus-jakarta font-bold text-lg mb-6 shadow-xl relative transition-all duration-300 border-2 ${
                        isCompleted
                          ? "bg-primary/20 border-primary text-text-light"
                          : isActive
                          ? "bg-slate-950 border-accent-cyan scale-110 text-accent-cyan shadow-lg shadow-accent-cyan/10"
                          : "bg-slate-950 border-white/10 text-text-gray/50"
                      }`}
                    >
                      {/* Active pulsing glow */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-accent-cyan/15 animate-ping" />
                      )}
                      
                      {/* Inner text or checkmark */}
                      <span className="relative z-10">
                        {isCompleted ? "✓" : `0${stepNum}`}
                      </span>
                    </div>

                    {/* Step details content */}
                    <h3
                      className={`font-plus-jakarta font-bold text-base mb-3 transition-colors duration-300 ${
                        isActive
                          ? "text-accent-cyan"
                          : isCompleted
                          ? "text-text-light/90"
                          : "text-text-gray/40"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed max-w-[180px] transition-colors duration-300 ${
                        isActive || isCompleted ? "text-text-gray" : "text-text-gray/20"
                      }`}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
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
            {processSteps.map((step) => {
              const stepNum = step.stepNumber;
              const isCompleted = stepNum < activeStep;
              const isActive = stepNum === activeStep;

              return (
                <motion.div
                  key={step.stepNumber}
                  variants={itemVariants}
                  onClick={() => setActiveStep(stepNum)}
                  className="relative flex flex-col gap-2 text-left cursor-pointer group"
                >
                  {/* Node circle on the vertical border line */}
                  <div
                    className={`absolute left-[-48px] top-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-plus-jakarta font-bold shadow-md border-2 transition-all duration-300 ${
                      isCompleted
                        ? "bg-primary/20 border-primary text-text-light"
                        : isActive
                        ? "bg-slate-950 border-accent-cyan text-accent-cyan scale-105"
                        : "bg-slate-950 border-white/10 text-text-gray/50"
                    }`}
                  >
                    {isCompleted ? "✓" : `0${stepNum}`}
                  </div>

                  {/* Step content */}
                  <h3
                    className={`font-plus-jakarta font-bold text-lg transition-colors duration-300 ${
                      isActive ? "text-accent-cyan" : "text-text-light"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-gray leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
