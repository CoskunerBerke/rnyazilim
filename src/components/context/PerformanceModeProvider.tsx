"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type PerformanceTier = "low" | "medium" | "high";

interface PerformanceModeContextType {
  mode: PerformanceTier;
  isReducedMotion: boolean;
  setMode: (mode: PerformanceTier) => void;
}

const PerformanceModeContext = createContext<PerformanceModeContextType>({
  mode: "high",
  isReducedMotion: false,
  setMode: () => {},
});

export const PerformanceModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PerformanceTier>("high");
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Check for reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    // 2. Determine initial performance tier
    const determineTier = (): PerformanceTier => {
      if (motionQuery.matches) return "low";

      // Check Save-Data header if supported
      // @ts-ignore
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection && (connection.saveData || connection.effectiveType === "2g" || connection.effectiveType === "3g")) {
        return "low";
      }

      // Check device memory and cores (if available in modern browsers)
      // @ts-ignore
      const memory = navigator.deviceMemory;
      const cores = navigator.hardwareConcurrency;
      const dpr = window.devicePixelRatio || 1;

      // Low end mobile or tablet
      if ((memory && memory < 4) || (cores && cores < 4) || (window.innerWidth < 768 && dpr > 2.5)) {
        return "low";
      }

      // Mid range laptop/mobile
      if ((memory && memory < 8) || (cores && cores < 6) || window.innerWidth < 1024) {
        return "medium";
      }

      return "high";
    };

    setMode(determineTier());

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <PerformanceModeContext.Provider value={{ mode: isReducedMotion ? "low" : mode, isReducedMotion, setMode }}>
      {children}
    </PerformanceModeContext.Provider>
  );
};

export const usePerformanceMode = () => useContext(PerformanceModeContext);
