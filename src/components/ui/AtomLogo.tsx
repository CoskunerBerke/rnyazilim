"use client";

import React from "react";

/**
 * AtomLogo — SVG + pure CSS atom orbital animation.
 *
 * Architecture:
 *  - One fixed <g> for the RN nucleus (pulse glow only)
 *  - Three <g> elements, each containing a tilted ellipse + electron dot.
 *    Each <g> is rotated in 3-D perspective via CSS transform so the ellipse
 *    looks angled, then the whole group spins with a CSS @keyframes rotateOrbit.
 *
 * Implementation choice:
 *  SVG viewBox 400×400, centered at (200,200).
 *  Each orbit group is tilted with a CSS perspective transform so the ellipse
 *  appears at the correct 3-D angle. The group then rotates around the Z-axis
 *  (transform-origin center) via an infinite linear keyframe — this creates
 *  the "orbital plane rotating around the nucleus" effect.
 *
 *  The electron dot sits at the 3 o'clock position of its ellipse. Because the
 *  whole group including the ellipse rotates, the dot travels along the apparent
 *  ellipse perimeter exactly like an electron in orbit.
 *
 * Orbits:
 *  1. Horizontal-ish  — tilted 20 deg on X → rotates 8s CW
 *  2. +60 deg diagonal — tilted 60 deg on X → rotates 6s CCW
 *  3. -60 deg diagonal — tilted -60 deg on X → rotates 10s CW
 */
export const AtomLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {/* Outer ambient glow behind the whole atom */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-[60px] pointer-events-none" />

      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Glow filter for orbits */}
          <filter id="orbitGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Stronger glow for electron dots */}
          <filter id="electronGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Nucleus pulse glow */}
          <filter id="nucleusGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient strokes for each orbit */}
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="orbitGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* ── Orbit 1 — Cyan — 8s clockwise — tilt 20° on X ───────────── */}
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "atomOrbit1 8s linear infinite",
          }}
        >
          {/*
            The ellipse is drawn un-rotated in SVG space.
            We apply a CSS perspective tilt so it looks angled in 3-D.
            The whole group then spins, making it look like the orbital
            plane rotates around the nucleus.
          */}
          <g style={{ transform: "perspective(400px) rotateX(72deg)", transformOrigin: "200px 200px" }}>
            <ellipse
              cx="200"
              cy="200"
              rx="140"
              ry="50"
              fill="none"
              stroke="url(#orbitGrad1)"
              strokeWidth="1.5"
              filter="url(#orbitGlow)"
            />
            {/* Electron at right tip of ellipse (cx + rx, cy) */}
            <circle
              cx="340"
              cy="200"
              r="5"
              fill="#06b6d4"
              filter="url(#electronGlow)"
            />
            <circle cx="340" cy="200" r="9" fill="#06b6d4" fillOpacity="0.25" />
          </g>
        </g>

        {/* ── Orbit 2 — Blue — 6s counter-clockwise — tilt 60° on X ───── */}
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "atomOrbit2 6s linear infinite reverse",
          }}
        >
          <g style={{ transform: "perspective(400px) rotateX(72deg) rotateZ(60deg)", transformOrigin: "200px 200px" }}>
            <ellipse
              cx="200"
              cy="200"
              rx="140"
              ry="50"
              fill="none"
              stroke="url(#orbitGrad2)"
              strokeWidth="1.5"
              filter="url(#orbitGlow)"
            />
            <circle
              cx="340"
              cy="200"
              r="5"
              fill="#3b82f6"
              filter="url(#electronGlow)"
            />
            <circle cx="340" cy="200" r="9" fill="#3b82f6" fillOpacity="0.25" />
          </g>
        </g>

        {/* ── Orbit 3 — Violet — 10s clockwise — tilt -60° on X ────────── */}
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "atomOrbit3 10s linear infinite",
          }}
        >
          <g style={{ transform: "perspective(400px) rotateX(72deg) rotateZ(-60deg)", transformOrigin: "200px 200px" }}>
            <ellipse
              cx="200"
              cy="200"
              rx="140"
              ry="50"
              fill="none"
              stroke="url(#orbitGrad3)"
              strokeWidth="1.5"
              filter="url(#orbitGlow)"
            />
            <circle
              cx="340"
              cy="200"
              r="5"
              fill="#8b5cf6"
              filter="url(#electronGlow)"
            />
            <circle cx="340" cy="200" r="9" fill="#8b5cf6" fillOpacity="0.25" />
          </g>
        </g>

        {/* ── Nucleus — fixed center, gentle pulse glow ─────────────────── */}
        {/* Outer pulsing ring */}
        <circle
          cx="200"
          cy="200"
          r="38"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="0.75"
          strokeOpacity="0.3"
          style={{ animation: "nucleusPulseRing 2.5s ease-in-out infinite" }}
        />
        {/* Inner glow fill */}
        <circle
          cx="200"
          cy="200"
          r="30"
          fill="rgba(6,182,212,0.07)"
          filter="url(#nucleusGlow)"
          style={{ animation: "nucleusPulse 2.5s ease-in-out infinite" }}
        />
        {/* Nucleus border ring */}
        <circle
          cx="200"
          cy="200"
          r="30"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* RN text */}
        <text
          x="200"
          y="207"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="22"
          fontWeight="700"
          fontFamily="'Courier New', Courier, monospace"
          fill="#06b6d4"
          filter="url(#nucleusGlow)"
          style={{ letterSpacing: "2px" }}
        >
          RN
        </text>
      </svg>

      {/* CSS Keyframes injected via a style tag */}
      <style>{`
        @keyframes atomOrbit1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes atomOrbit2 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes atomOrbit3 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes nucleusPulse {
          0%, 100% { opacity: 0.6; r: 30; }
          50%       { opacity: 1;   r: 34; }
        }
        @keyframes nucleusPulseRing {
          0%, 100% { r: 38; stroke-opacity: 0.25; }
          50%       { r: 46; stroke-opacity: 0.08; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="atomOrbit"],
          [style*="nucleusPulse"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AtomLogo;
