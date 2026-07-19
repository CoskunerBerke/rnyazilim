"use client";

import React, { useRef, useEffect } from "react";
import { usePerformanceMode } from "@/components/context/PerformanceModeProvider";

export const DigitalCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { mode, isReducedMotion } = usePerformanceMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0;
    let H = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = container.clientWidth;
      H = container.clientHeight || 500;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // ── Orbital definitions ─────────────────────────────────────────────
    // Each orbit: rx/ry (semi-axes), tiltX (x-axis tilt in rad), tiltZ (z rotation),
    // speed (radians per frame), electronColor
    const orbits = [
      { rx: 110, ry: 38, tiltX: 0,            tiltZ: 0,           speed: 0.022, color: "#06b6d4", phase: 0 },
      { rx: 110, ry: 38, tiltX: Math.PI / 3,  tiltZ: Math.PI / 3, speed: 0.018, color: "#3b82f6", phase: Math.PI * 0.66 },
      { rx: 110, ry: 38, tiltX: -Math.PI / 3, tiltZ: -Math.PI / 3,speed: 0.025, color: "#8b5cf6", phase: Math.PI * 1.33 },
    ];

    const electronAngles = orbits.map((o) => o.phase);

    // ── Draw a single tilted ellipse ────────────────────────────────────
    const drawOrbit = (
      cx: number,
      cy: number,
      rx: number,
      ry: number,
      tiltX: number,
      tiltZ: number,
      alpha: number,
      color: string
    ) => {
      const steps = 120;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const a = (i / steps) * Math.PI * 2;
        // Point on flat ellipse
        let x = rx * Math.cos(a);
        let y = ry * Math.sin(a);
        let z = 0;

        // Rotate around X axis by tiltX
        const cosX = Math.cos(tiltX);
        const sinX = Math.sin(tiltX);
        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;
        y = y1;
        z = z1;

        // Rotate around Z axis by tiltZ  
        const cosZ = Math.cos(tiltZ);
        const sinZ = Math.sin(tiltZ);
        const x2 = x * cosZ - y * sinZ;
        const y2 = x * sinZ + y * cosZ;
        x = x2;
        y = y2;

        // Simple depth-based opacity (z ranges roughly -ry..+ry after tilt)
        if (i === 0) ctx.moveTo(cx + x, cy + y);
        else ctx.lineTo(cx + x, cy + y);
      }

      ctx.setLineDash([6, 5]);
      ctx.strokeStyle = color.replace(")", `, ${alpha})`).replace("rgb(", "rgba(").replace("#", "rgba(").replace(/rgba\(([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/, (_m, r, g, b) =>
        `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`
      );
      // Simpler approach: just use a fixed rgba
      ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.45})`;
      if (color === "#3b82f6") ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.45})`;
      if (color === "#8b5cf6") ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.45})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // ── Get electron 3D position on orbit ──────────────────────────────
    const getElectronPos = (
      cx: number,
      cy: number,
      rx: number,
      ry: number,
      tiltX: number,
      tiltZ: number,
      angle: number
    ): { x: number; y: number; z: number } => {
      let x = rx * Math.cos(angle);
      let y = ry * Math.sin(angle);
      let z = 0;

      // Rotate around X
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      y = y1;
      z = z1;

      // Rotate around Z
      const cosZ = Math.cos(tiltZ);
      const sinZ = Math.sin(tiltZ);
      const x2 = x * cosZ - y * sinZ;
      const y2 = x * sinZ + y * cosZ;
      x = x2;
      y = y2;

      return { x: cx + x, y: cy + y, z };
    };

    // ── Draw nucleus "RN" ───────────────────────────────────────────────
    const drawNucleus = (cx: number, cy: number, pulse: number) => {
      // Outer glow rings
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 38 + pulse * 4);
      glowGrad.addColorStop(0, "rgba(6, 182, 212, 0.25)");
      glowGrad.addColorStop(0.5, "rgba(37, 99, 235, 0.08)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 38 + pulse * 4, 0, Math.PI * 2);
      ctx.fill();

      // Nucleus circle
      const nucGrad = ctx.createRadialGradient(cx - 6, cy - 6, 2, cx, cy, 28);
      nucGrad.addColorStop(0, "rgba(14, 165, 233, 0.35)");
      nucGrad.addColorStop(0.6, "rgba(30, 64, 175, 0.18)");
      nucGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nucGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.fill();

      // "RN" text
      ctx.save();
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(6, 182, 212, 0.9)";
      ctx.fillStyle = "rgba(6, 182, 212, 0.95)";
      ctx.font = `bold ${Math.round(22 + pulse * 1)}px 'Courier New', monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("RN", cx, cy);
      ctx.restore();
    };

    // ── Main render loop ────────────────────────────────────────────────
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;

      const pulse = Math.sin(t * 1.8) * 0.5 + 0.5; // 0..1

      // Advance electron angles
      orbits.forEach((orb, i) => {
        electronAngles[i] += orb.speed;
      });

      // Collect electrons with depth for painter's sort
      const electrons: { x: number; y: number; z: number; color: string; i: number }[] = [];
      orbits.forEach((orb, i) => {
        const pos = getElectronPos(cx, cy, orb.rx, orb.ry, orb.tiltX, orb.tiltZ, electronAngles[i]);
        electrons.push({ ...pos, color: orb.color, i });
      });

      // Sort by z: draw farther ones first
      const sorted = [...electrons].sort((a, b) => a.z - b.z);

      // Draw back-half orbits + electrons
      orbits.forEach((orb, i) => {
        drawOrbit(cx, cy, orb.rx, orb.ry, orb.tiltX, orb.tiltZ, 1, orb.color);
      });

      // Draw back electrons (z < 0 = behind nucleus)
      sorted.filter((e) => e.z < 0).forEach((e) => {
        drawElectron(e.x, e.y, e.color, 0.55 + pulse * 0.1);
      });

      // Draw nucleus on top of back electrons
      drawNucleus(cx, cy, pulse);

      // Draw front electrons (z >= 0 = in front of nucleus)
      sorted.filter((e) => e.z >= 0).forEach((e) => {
        drawElectron(e.x, e.y, e.color, 0.9 + pulse * 0.1);
      });

      t += 0.016;
      animId = requestAnimationFrame(render);
    };

    // ── Draw electron particle ──────────────────────────────────────────
    const drawElectron = (x: number, y: number, color: string, alpha: number) => {
      // Trail / glow
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
      if (color === "#06b6d4") {
        grad.addColorStop(0, `rgba(6, 182, 212, ${alpha * 0.5})`);
        grad.addColorStop(1, "rgba(6, 182, 212, 0)");
        ctx.fillStyle = grad;
      } else if (color === "#3b82f6") {
        grad.addColorStop(0, `rgba(59, 130, 246, ${alpha * 0.5})`);
        grad.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = grad;
      } else {
        grad.addColorStop(0, `rgba(139, 92, 246, ${alpha * 0.5})`);
        grad.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx.fillStyle = grad;
      }
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.save();
      ctx.shadowBlur = 12;
      ctx.shadowColor = color;
      if (color === "#06b6d4") ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
      else if (color === "#3b82f6") ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
      else ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    if (!isReducedMotion) {
      render();
    } else {
      // Static frame
      const cx = W / 2;
      const cy = H / 2;
      orbits.forEach((orb) => drawOrbit(cx, cy, orb.rx, orb.ry, orb.tiltX, orb.tiltZ, 1, orb.color));
      drawNucleus(cx, cy, 0.5);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mode, isReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] sm:min-h-[450px] flex items-center justify-center relative overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10"
        aria-label="RN Yazılım atom modeli animasyonu"
      />
    </div>
  );
};

export default DigitalCore;
