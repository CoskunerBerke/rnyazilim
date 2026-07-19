"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const HeroVisual: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Motion values for mouse movement parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  
  // Floating depth offsets for elements
  const translateX1 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const translateY1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const translateX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const translateY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to center of window
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return <div className="aspect-square w-full max-w-[500px]" />;
  }

  return (
    <div className="relative aspect-square w-full max-w-[500px] flex items-center justify-center select-none perspective-[1000px] mx-auto">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent-cyan/5 to-accent-violet/10 rounded-full blur-[80px]" />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full flex items-center justify-center transform-style-3d"
      >
        {/* Subtle Background Grid */}
        <svg
          className="absolute inset-0 w-full h-full text-white/[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated Connected Nodes and Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Paths */}
          <motion.path
            d="M 100 250 H 400 M 250 100 V 400 M 150 150 L 350 350 M 150 350 L 350 150"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeOpacity="0.15"
          />

          <motion.path
            d="M 120 180 L 250 250 L 380 180"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeOpacity="0.4"
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />

          <motion.path
            d="M 250 250 L 350 380 L 150 380 Z"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />

          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="500" y2="500">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Glowing Nodes */}
          <circle cx="250" cy="100" r="4" fill="#2563eb" className="animate-pulse" />
          <circle cx="100" cy="250" r="4" fill="#06b6d4" />
          <circle cx="400" cy="250" r="4" fill="#8b5cf6" className="animate-pulse" />
          <circle cx="250" cy="400" r="4" fill="#2563eb" />
          <circle cx="150" cy="150" r="3" fill="#06b6d4" />
          <circle cx="350" cy="150" r="3" fill="#8b5cf6" />
          <circle cx="150" cy="350" r="3" fill="#2563eb" />
          <circle cx="350" cy="350" r="3" fill="#06b6d4" />
        </svg>

        {/* Central Glowing Monogram Layer */}
        <motion.div
          className="w-40 h-40 rounded-3xl bg-slate-900/60 border border-white/10 flex items-center justify-center shadow-2xl relative"
          style={{
            boxShadow: "0 0 40px -5px rgba(37, 99, 235, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)",
          }}
          animate={{
            boxShadow: [
              "0 0 40px -5px rgba(37, 99, 235, 0.25)",
              "0 0 50px 2px rgba(6, 182, 212, 0.35)",
              "0 0 40px -5px rgba(37, 99, 235, 0.25)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Neon inner frame */}
          <div className="absolute inset-1.5 rounded-[22px] border border-primary/20 bg-gradient-to-tr from-primary/5 to-accent-cyan/10" />

          {/* Logo Monogram */}
          <span className="font-plus-jakarta font-extrabold text-5xl bg-gradient-to-tr from-white via-slate-100 to-slate-400 bg-clip-text text-transparent tracking-wide select-none z-10">
            RN
          </span>
        </motion.div>

        {/* Floating UI Fragment 1 (Top Left) */}
        <motion.div
          style={{ x: translateX1, y: translateY1 }}
          className="absolute top-12 left-6 p-4 rounded-xl border border-white/5 bg-slate-950/40 backdrop-blur-md shadow-xl text-left flex flex-col gap-1 z-20 pointer-events-none transform-translate-z-30 w-44"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] uppercase tracking-wider text-text-gray font-bold">API STATUS</span>
          </div>
          <span className="text-xs font-semibold text-text-light font-plus-jakarta mt-1">Sistem Aktif</span>
          <div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Floating UI Fragment 2 (Bottom Right) */}
        <motion.div
          style={{ x: translateX2, y: translateY2 }}
          className="absolute bottom-16 right-4 p-4 rounded-xl border border-white/5 bg-slate-950/40 backdrop-blur-md shadow-xl text-left flex flex-col gap-1.5 z-20 pointer-events-none transform-translate-z-50 w-40"
        >
          <span className="text-[10px] uppercase tracking-wider text-primary-light font-bold">PERFORMANS</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold font-plus-jakarta text-text-light">0.4s</span>
            <span className="text-[9px] text-emerald-500 font-medium">LCP (Hızlı)</span>
          </div>
          <span className="text-[9px] text-text-gray leading-tight">Next.js Edge Rendering</span>
        </motion.div>

        {/* Floating UI Fragment 3 (Top Right) */}
        <motion.div
          className="absolute top-1/4 right-8 p-3 rounded-lg border border-white/5 bg-slate-950/20 backdrop-blur-sm shadow-lg text-[10px] text-text-gray/80 font-mono z-10 transform-translate-z-10 animate-pulse"
          style={{ animationDuration: "4s" }}
        >
          {"<npm run build />"}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
