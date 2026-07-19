"use client";

import React from "react";

/**
 * AtomLogo — HTML div + CSS 3D atom orbital animation.
 *
 * Teknik:
 *  - Dış container: perspective(600px) ile CSS 3D sahne kurulur
 *  - Her orbit: tam çember (borderRadius 50%), rotateX(75deg) ile elipse dönüştürülür
 *  - Keyframes'de rotateY(0→360deg) döndürmesi → elektron 3D yörüngede dolaşır
 *  - Farklı yörünge düzlemleri için keyframes'e rotateZ sabit değer eklenir
 *  - preserve-3d ile katmanlar gerçek 3D derinlik alır
 */
export const AtomLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <style>{`
        /* ── Orbit 1: yatay düzlem, 8s saat yönü ── */
        @keyframes atomOrbit1 {
          from { transform: rotateY(0deg)    rotateX(75deg); }
          to   { transform: rotateY(360deg)  rotateX(75deg); }
        }

        /* ── Orbit 2: 60° eğik düzlem, 6s ters yön ── */
        @keyframes atomOrbit2 {
          from { transform: rotateZ(60deg) rotateY(0deg)    rotateX(75deg); }
          to   { transform: rotateZ(60deg) rotateY(-360deg) rotateX(75deg); }
        }

        /* ── Orbit 3: -60° eğik düzlem, 10s saat yönü ── */
        @keyframes atomOrbit3 {
          from { transform: rotateZ(-60deg) rotateY(0deg)   rotateX(75deg); }
          to   { transform: rotateZ(-60deg) rotateY(360deg) rotateX(75deg); }
        }

        /* ── Çekirdek pulse ── */
        @keyframes nucleusPulse {
          0%,100% { box-shadow: 0 0 18px 4px rgba(6,182,212,0.25), 0 0 0 1px rgba(6,182,212,0.35); }
          50%     { box-shadow: 0 0 32px 10px rgba(6,182,212,0.45), 0 0 0 1px rgba(6,182,212,0.6); }
        }

        /* ── Reduced-motion erişilebilirliği ── */
        @media (prefers-reduced-motion: reduce) {
          .atom-orbit { animation-duration: 9999s !important; }
          .atom-nucleus { animation: none !important; }
        }
      `}</style>

      {/* ── CSS 3D Perspektif sahnesi ── */}
      <div
        style={{
          perspective: "600px",
          perspectiveOrigin: "50% 50%",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ── Ana 3D konteyner ── */}
        <div
          style={{
            position: "relative",
            width: "260px",
            height: "260px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* ══ ORBIT 1 — Cyan — 8s saat yönü ══ */}
          <div
            className="atom-orbit"
            style={{
              position: "absolute",
              inset: 0,
              transformStyle: "preserve-3d",
              animation: "atomOrbit1 8s linear infinite",
            }}
          >
            {/* Orbit halkası */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "260px",
                height: "260px",
                marginTop: "-130px",
                marginLeft: "-130px",
                borderRadius: "50%",
                border: "1.5px solid rgba(6,182,212,0.6)",
                boxShadow: "0 0 10px 2px rgba(6,182,212,0.25), inset 0 0 10px 2px rgba(6,182,212,0.1)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Elektron */}
              <div
                style={{
                  position: "absolute",
                  right: "-8px",
                  top: "50%",
                  marginTop: "-8px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#06b6d4",
                  boxShadow: "0 0 14px 5px rgba(6,182,212,0.8), 0 0 4px 1px #06b6d4",
                }}
              />
            </div>
          </div>

          {/* ══ ORBIT 2 — Blue — 6s ters yön ══ */}
          <div
            className="atom-orbit"
            style={{
              position: "absolute",
              inset: 0,
              transformStyle: "preserve-3d",
              animation: "atomOrbit2 6s linear infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "260px",
                height: "260px",
                marginTop: "-130px",
                marginLeft: "-130px",
                borderRadius: "50%",
                border: "1.5px solid rgba(59,130,246,0.6)",
                boxShadow: "0 0 10px 2px rgba(59,130,246,0.25), inset 0 0 10px 2px rgba(59,130,246,0.1)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-8px",
                  top: "50%",
                  marginTop: "-8px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#3b82f6",
                  boxShadow: "0 0 14px 5px rgba(59,130,246,0.8), 0 0 4px 1px #3b82f6",
                }}
              />
            </div>
          </div>

          {/* ══ ORBIT 3 — Violet — 10s saat yönü ══ */}
          <div
            className="atom-orbit"
            style={{
              position: "absolute",
              inset: 0,
              transformStyle: "preserve-3d",
              animation: "atomOrbit3 10s linear infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "260px",
                height: "260px",
                marginTop: "-130px",
                marginLeft: "-130px",
                borderRadius: "50%",
                border: "1.5px solid rgba(139,92,246,0.6)",
                boxShadow: "0 0 10px 2px rgba(139,92,246,0.25), inset 0 0 10px 2px rgba(139,92,246,0.1)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-8px",
                  top: "50%",
                  marginTop: "-8px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#8b5cf6",
                  boxShadow: "0 0 14px 5px rgba(139,92,246,0.8), 0 0 4px 1px #8b5cf6",
                }}
              />
            </div>
          </div>

          {/* ══ ÇEKIRDEK — Sabit, hafif pulse ══ */}
          <div
            className="atom-nucleus"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              width: "76px",
              height: "76px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.04) 60%, transparent 100%)",
              border: "1.5px solid rgba(6,182,212,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "nucleusPulse 2.5s ease-in-out infinite",
            }}
          >
            <span
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: 700,
                fontSize: "20px",
                color: "#06b6d4",
                textShadow:
                  "0 0 12px rgba(6,182,212,1), 0 0 24px rgba(6,182,212,0.6)",
                letterSpacing: "3px",
              }}
            >
              RN
            </span>
          </div>
        </div>
      </div>

      {/* Ambient dış parıltı */}
      <div
        style={{
          position: "absolute",
          inset: "10%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default AtomLogo;
