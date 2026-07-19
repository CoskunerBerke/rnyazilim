"use client";

import React, { useRef, useEffect, useState } from "react";
import { usePerformanceMode } from "@/components/context/PerformanceModeProvider";

interface Point3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  color?: string;
  size?: number;
}

export const DigitalCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { mode, isReducedMotion } = usePerformanceMode();

  // Mouse position tracking for parallax camera rotation
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    // Set sizes based on container
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      // Limit resolution on low performance mode
      const resolutionScale = mode === "low" ? 1 : Math.min(dpr, 1.5);
      
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight || 500;
      
      canvas.width = width * resolutionScale;
      canvas.height = height * resolutionScale;
      ctx.scale(resolutionScale, resolutionScale);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates over window to rotate camera
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Normalized coordinates from -0.5 to 0.5 relative to canvas center
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      
      mouseRef.current.targetX = x * 0.6; // camera angle limit
      mouseRef.current.targetY = y * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initialize 3D nodes
    const nodeCount = mode === "high" ? 28 : mode === "medium" ? 16 : 8;
    const nodes: Point3D[] = [];
    const sphereRadius = 130;

    for (let i = 0; i < nodeCount; i++) {
      // Position points randomly on a sphere surface or inside
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const r = sphereRadius * (0.6 + 0.4 * Math.random());
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      nodes.push({
        x,
        y,
        z,
        // Small random movement velocities
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        size: 2 + Math.random() * 3,
      });
    }

    // Concentric ring segments in 3D
    const ringRadii = [90, 140, 190];
    const ringRotations = [
      { rx: 0.8, ry: 0.5, speed: 0.003 },  // Ring 1 angles
      { rx: -0.6, ry: 0.8, speed: -0.002 }, // Ring 2 angles
      { rx: 0.2, ry: 1.2, speed: 0.004 },   // Ring 3 angles
    ];
    let ringAngles = [0, 0, 0];

    // Ambient stars background cloud
    const starCount = mode === "high" ? 60 : mode === "medium" ? 30 : 0;
    const stars: Point3D[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
        z: (Math.random() - 0.5) * 500,
        vx: 0,
        vy: 0,
        vz: (Math.random() - 0.5) * 0.05,
      });
    }

    // 3D rotation math helper functions
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

    // Camera parameters
    const focalLength = 300;
    let time = 0;

    // Main animation loop
    const renderLoop = () => {
      if (isReducedMotion) {
        // Just draw a static frame and stop loop
        drawFrame(0, 0);
        return;
      }

      time += 0.008;

      // Smooth interpolation for mouse parallax (spring effect)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Update node positions inside sphere boundary
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;

        // Bounce back if node gets out of bounds
        const d = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
        if (d > sphereRadius * 1.3) {
          n.vx *= -1;
          n.vy *= -1;
          n.vz *= -1;
        }
      });

      // Update ambient stars
      stars.forEach((s) => {
        s.z -= 0.15; // slow translation forward
        if (s.z < -250) {
          s.z = 250; // wrap around
        }
      });

      // Rotate ring angles
      ringRotations.forEach((r, idx) => {
        ringAngles[idx] += r.speed;
      });

      drawFrame(mouseRef.current.x, mouseRef.current.y);

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Draw single frame function
    const drawFrame = (camAngleY: number, camAngleX: number) => {
      ctx.clearRect(0, 0, width, height);

      // Create a depth list for painters algorithm
      interface Renderable {
        type: "node" | "line" | "star" | "ring-segment" | "monogram";
        depth: number;
        draw: () => void;
      }
      const renderList: Renderable[] = [];

      // 1. Project nodes and build connections
      const projectedNodes = nodes.map((n) => {
        // Auto rotate nodes slowly over time
        let p = rotY(n.x, n.y, n.z, time * 0.15);
        p = rotX(p.x, p.y, p.z, time * 0.1);

        // Apply camera parallax
        p = rotY(p.x, p.y, p.z, camAngleY);
        p = rotX(p.x, p.y, p.z, camAngleX);

        // Perspective scaling
        const scale = focalLength / (focalLength + p.z + 250); // offset camera z by 250
        const projX = p.x * scale + width / 2;
        const projY = p.y * scale + height / 2;

        return { x: projX, y: projY, scale, depth: p.z, raw: n };
      });

      // Add nodes to render list
      projectedNodes.forEach((pn) => {
        renderList.push({
          type: "node",
          depth: pn.depth,
          draw: () => {
            ctx.beginPath();
            ctx.arc(pn.x, pn.y, pn.raw.size! * pn.scale, 0, Math.PI * 2);
            // Glowing cyan color for front nodes, dimmer blue for back
            const alpha = Math.max(0.2, Math.min(1.0, pn.scale * 1.2));
            ctx.fillStyle = pn.depth < 0 
              ? `rgba(6, 182, 212, ${alpha})` // cyan for close
              : `rgba(37, 99, 235, ${alpha * 0.7})`; // blue for far
            ctx.fill();

            // Glow ring for top nodes
            if (pn.depth < -30 && mode === "high") {
              ctx.beginPath();
              ctx.arc(pn.x, pn.y, pn.raw.size! * pn.scale * 2.5, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.25})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          },
        });
      });

      // Add connections to render list (lines between close nodes)
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const pi = projectedNodes[i];
          const pj = projectedNodes[j];
          const dx = pi.raw.x - pj.raw.x;
          const dy = pi.raw.y - pj.raw.y;
          const dz = pi.raw.z - pj.raw.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 100) {
            const avgDepth = (pi.depth + pj.depth) / 2;
            const avgScale = (pi.scale + pj.scale) / 2;
            const alpha = (1 - dist / 100) * Math.max(0.05, Math.min(0.6, avgScale));

            renderList.push({
              type: "line",
              depth: avgDepth,
              draw: () => {
                ctx.beginPath();
                ctx.moveTo(pi.x, pi.y);
                ctx.lineTo(pj.x, pj.y);
                // Create a cyan/violet gradient for connections
                const grad = ctx.createLinearGradient(pi.x, pi.y, pj.x, pj.y);
                grad.addColorStop(0, `rgba(6, 182, 212, ${alpha})`);
                grad.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 0.75 * avgScale;
                ctx.stroke();
              },
            });
          }
        }
      }

      // 2. Project and draw ring segments
      ringRadii.forEach((radius, ringIdx) => {
        const ringSet = ringRotations[ringIdx];
        const segments = 40;
        const currentAngle = ringAngles[ringIdx];

        for (let i = 0; i < segments; i++) {
          // Draw dashed orbital lines
          const angle1 = (i / segments) * Math.PI * 2;
          const angle2 = ((i + 0.65) / segments) * Math.PI * 2; // gaps in ring

          // Coordinates on local ring plane
          let p1 = { x: radius * Math.cos(angle1), y: radius * Math.sin(angle1), z: 0 };
          let p2 = { x: radius * Math.cos(angle2), y: radius * Math.sin(angle2), z: 0 };

          // Rotate local ring coordinate by its custom tilt angles
          let r1 = rotZ(p1.x, p1.y, p1.z, currentAngle);
          r1 = rotX(r1.x, r1.y, r1.z, ringSet.rx);
          p1 = rotY(r1.x, r1.y, r1.z, ringSet.ry);

          let r2 = rotZ(p2.x, p2.y, p2.z, currentAngle);
          r2 = rotX(r2.x, r2.y, r2.z, ringSet.rx);
          p2 = rotY(r2.x, r2.y, r2.z, ringSet.ry);

          // Apply camera angles
          let c1 = rotX(p1.x, p1.y, p1.z, camAngleX);
          p1 = rotY(c1.x, c1.y, c1.z, camAngleY);

          let c2 = rotX(p2.x, p2.y, p2.z, camAngleX);
          p2 = rotY(c2.x, c2.y, c2.z, camAngleY);

          // Perspective project
          const s1 = focalLength / (focalLength + p1.z + 250);
          const s2 = focalLength / (focalLength + p2.z + 250);

          const x1 = p1.x * s1 + width / 2;
          const y1 = p1.y * s1 + height / 2;
          const x2 = p2.x * s2 + width / 2;
          const y2 = p2.y * s2 + height / 2;

          const avgDepth = (p1.z + p2.z) / 2;
          const avgScale = (s1 + s2) / 2;

          renderList.push({
            type: "ring-segment",
            depth: avgDepth,
            draw: () => {
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              const opacity = Math.max(0.05, Math.min(0.5, avgScale * 0.8));
              ctx.strokeStyle = avgDepth < 0 
                ? `rgba(6, 182, 212, ${opacity})` // cyan for front
                : `rgba(37, 99, 235, ${opacity * 0.6})`; // blue for back
              ctx.lineWidth = (ringIdx === 1 ? 1.5 : 0.8) * avgScale;
              ctx.stroke();
            },
          });
        }
      });

      // 3. Project ambient stars
      stars.forEach((s) => {
        let p = rotY(s.x, s.y, s.z, camAngleY);
        p = rotX(p.x, p.y, p.z, camAngleX);

        const scale = focalLength / (focalLength + p.z + 250);
        const px = p.x * scale + width / 2;
        const py = p.y * scale + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          renderList.push({
            type: "star",
            depth: p.z,
            draw: () => {
              ctx.beginPath();
              ctx.arc(px, py, 0.75 * scale, 0, Math.PI * 2);
              const alpha = Math.max(0.1, Math.min(0.6, (1 - p.z / 250) * scale));
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.fill();
            },
          });
        }
      });

      // 4. Central Monogram core symbol (drawn exactly at 3D center z=0 depth)
      renderList.push({
        type: "monogram",
        depth: 0, // exactly at center depth
        draw: () => {
          ctx.save();
          ctx.translate(width / 2, height / 2);

          // Pulsing scale factor for organic core heartbeats
          const pulse = 1 + Math.sin(time * 2) * 0.05;
          ctx.scale(pulse, pulse);

          // Glowing central glow gradient
          const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 45);
          glow.addColorStop(0, "rgba(6, 182, 212, 0.2)");
          glow.addColorStop(0.5, "rgba(37, 99, 235, 0.05)");
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(0, 0, 45, 0, Math.PI * 2);
          ctx.fill();

          // Stylized glowing central "RN" shape
          ctx.beginPath();
          ctx.strokeStyle = "rgba(6, 182, 212, 0.8)";
          ctx.lineWidth = 3;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(6, 182, 212, 0.8)";
          
          // Draw "R" shape
          ctx.beginPath();
          ctx.moveTo(-20, 20);
          ctx.lineTo(-20, -20);
          ctx.lineTo(-5, -20);
          ctx.bezierCurveTo(5, -20, 5, -5, -5, -5);
          ctx.lineTo(-20, -5);
          ctx.moveTo(-8, -5);
          ctx.lineTo(8, 20);
          
          // Draw "N" shape
          ctx.moveTo(1, 20);
          ctx.lineTo(1, -20);
          ctx.lineTo(16, 20);
          ctx.lineTo(16, -20);

          ctx.stroke();
          ctx.restore();
        },
      });

      // 5. SORT BY DEPTH (Painters Algorithm: back to front)
      // High Z is further back in 3D coordinate system, low Z is closer
      renderList.sort((a, b) => b.depth - a.depth);

      // 6. DRAW ALL
      renderList.forEach((r) => r.draw());
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mode, isReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] sm:min-h-[450px] flex items-center justify-center relative overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10 cursor-grab active:cursor-grabbing"
        aria-label="RN Yazılım Digital Core: etkileşimli, 3 boyutlu soyut yapay zeka ve yazılım ağ yapısı."
      />
    </div>
  );
};

export default DigitalCore;
