"use client";

import React, { useRef, useEffect } from "react";
import { usePerformanceMode } from "@/components/context/PerformanceModeProvider";

interface OrbitDefinition {
  color: string;
  speed: number;
  scaleX: number;
  scaleY: number;
  initRotation: { x: number; y: number; z: number };
  precessionSpeed: { x: number; y: number; z: number };
  electronOffset: number;
}

export const HeroAtom3D: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mode, isReducedMotion } = usePerformanceMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth || 400;
      height = container.clientHeight || 400;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // ─── 3D Math Helper Functions ─────────────────────────────────────────
    const rotX = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x, y: y * cos - z * sin, z: y * sin + z * cos };
    };

    const rotY = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos + z * sin, y, z: -x * sin + z * cos };
    };

    const rotZ = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: x * cos - y * sin, y: x * sin + y * cos, z };
    };

    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // ─── Orbit Definitions ────────────────────────────────────────────────
    const orbits: OrbitDefinition[] = [
      {
        color: "#06b6d4",
        speed: 0.65,
        scaleX: 1.5,
        scaleY: 0.72,
        initRotation: { x: Math.PI / 2.7, y: 0, z: 0 },
        precessionSpeed: { x: 0, y: 0.0018, z: 0.0006 },
        electronOffset: 0,
      },
      {
        color: "#3b82f6",
        speed: 0.48,
        scaleX: 1.45,
        scaleY: 0.68,
        initRotation: { x: Math.PI / 3.2, y: Math.PI / 2.8, z: Math.PI / 3.5 },
        precessionSpeed: { x: -0.001, y: 0, z: 0.0014 },
        electronOffset: Math.PI * 0.7,
      },
      {
        color: "#8b5cf6",
        speed: 0.82,
        scaleX: 1.4,
        scaleY: 0.7,
        initRotation: { x: -Math.PI / 3, y: Math.PI / 3.4, z: -Math.PI / 4 },
        precessionSpeed: { x: 0.0008, y: -0.0012, z: 0 },
        electronOffset: Math.PI * 1.4,
      },
    ];

    // Camera perspective parameters
    const focalLength = 320;
    const cameraTiltX = 0.2; // slight down-angle camera

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Painters algorithm list for depth sorting
      interface Renderable {
        type: "segment" | "electron" | "nucleus";
        depth: number;
        draw: () => void;
      }
      const renderList: Renderable[] = [];

      const speedFactor = isReducedMotion ? 0 : 1;
      time += 0.016 * speedFactor;

      const baseRadius = 80;

      orbits.forEach((orbit) => {
        const rotX_current = orbit.initRotation.x + time * orbit.precessionSpeed.x;
        const rotY_current = orbit.initRotation.y + time * orbit.precessionSpeed.y;
        const rotZ_current = orbit.initRotation.z + time * orbit.precessionSpeed.z;

        // 1. Draw Orbit Ring Line as segmented 3D points
        const segmentCount = mode === "high" ? 100 : mode === "medium" ? 80 : 50;
        const points = [];

        for (let i = 0; i <= segmentCount; i++) {
          const angle = (i / segmentCount) * Math.PI * 2;
          let p = {
            x: baseRadius * Math.cos(angle) * orbit.scaleX,
            y: baseRadius * Math.sin(angle) * orbit.scaleY,
            z: 0,
          };

          // Apply Precession rotations
          p = rotZ(p.x, p.y, p.z, rotZ_current);
          p = rotY(p.x, p.y, p.z, rotY_current);
          p = rotX(p.x, p.y, p.z, rotX_current);

          // Apply global Camera tilt
          p = rotX(p.x, p.y, p.z, cameraTiltX);
          points.push(p);
        }

        for (let i = 0; i < segmentCount; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          const scale1 = focalLength / (focalLength + p1.z);
          const scale2 = focalLength / (focalLength + p2.z);

          const x1 = p1.x * scale1 + width / 2;
          const y1 = p1.y * scale1 + height / 2;
          const x2 = p2.x * scale2 + width / 2;
          const y2 = p2.y * scale2 + height / 2;

          const avgDepth = (p1.z + p2.z) / 2;
          const avgScale = (scale1 + scale2) / 2;

          renderList.push({
            type: "segment",
            depth: avgDepth,
            draw: () => {
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              
              // Fade lines that go behind
              const alpha = Math.max(0.12, Math.min(0.75, avgScale * 0.65));
              ctx.strokeStyle = hexToRgba(orbit.color, alpha);
              ctx.lineWidth = 1.35 * avgScale;
              ctx.stroke();
            },
          });
        }

        // 2. Draw Electron particle
        const electronAngle = (isReducedMotion ? 0.8 : time) * orbit.speed + orbit.electronOffset;
        let ep = {
          x: baseRadius * Math.cos(electronAngle) * orbit.scaleX,
          y: baseRadius * Math.sin(electronAngle) * orbit.scaleY,
          z: 0,
        };

        // Apply Precession rotations
        ep = rotZ(ep.x, ep.y, ep.z, rotZ_current);
        ep = rotY(ep.x, ep.y, ep.z, rotY_current);
        ep = rotX(ep.x, ep.y, ep.z, rotX_current);

        // Apply global Camera tilt
        ep = rotX(ep.x, ep.y, ep.z, cameraTiltX);

        const eScale = focalLength / (focalLength + ep.z);
        const ex = ep.x * eScale + width / 2;
        const ey = ep.y * eScale + height / 2;

        renderList.push({
          type: "electron",
          depth: ep.z,
          draw: () => {
            // Radial glow
            const glowSize = 9 * eScale;
            const glow = ctx.createRadialGradient(ex, ey, 0, ex, ey, glowSize);
            glow.addColorStop(0, hexToRgba(orbit.color, 0.7));
            glow.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(ex, ey, glowSize, 0, Math.PI * 2);
            ctx.fill();

            // Core dot
            ctx.fillStyle = orbit.color;
            ctx.beginPath();
            ctx.arc(ex, ey, 3.8 * eScale, 0, Math.PI * 2);
            ctx.fill();
          },
        });
      });

      // 3. Central Nucleus (fixed at depth=0)
      renderList.push({
        type: "nucleus",
        depth: 0,
        draw: () => {
          const cx = width / 2;
          const cy = height / 2;
          const pulse = 1 + Math.sin(time * 2.2) * 0.035;

          // Outer energy aura
          const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40 * pulse);
          glowGrad.addColorStop(0, "rgba(6, 182, 212, 0.28)");
          glowGrad.addColorStop(0.5, "rgba(37, 99, 235, 0.08)");
          glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(cx, cy, 40 * pulse, 0, Math.PI * 2);
          ctx.fill();

          // Central core sphere
          ctx.fillStyle = "rgba(10, 24, 46, 0.9)";
          ctx.strokeStyle = "rgba(6, 182, 212, 0.65)";
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.arc(cx, cy, 26 * pulse, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Neon text "RN"
          ctx.save();
          ctx.font = `bold ${Math.round(18 * pulse)}px 'Courier New', Courier, monospace`;
          ctx.fillStyle = "#06b6d4";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.shadowColor = "rgba(6, 182, 212, 0.9)";
          ctx.shadowBlur = 12;
          ctx.fillText("RN", cx, cy);
          ctx.restore();
        },
      });

      // ─── 4. Sort and Draw all renderable items ───────────────────────────
      // Large Z values are drawn first (background), small Z values drawn last (foreground)
      renderList.sort((a, b) => b.depth - a.depth);
      renderList.forEach((item) => item.draw());

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mode, isReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`w-full flex items-center justify-center relative overflow-hidden select-none ${className}`}
      style={{ aspectRatio: "1 / 1" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10"
        aria-label="RN Yazılım 3 Boyutlu Atom Modeli"
      />
    </div>
  );
};

export default HeroAtom3D;
