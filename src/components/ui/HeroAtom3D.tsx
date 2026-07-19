"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

// ─── Orbit + Electron ────────────────────────────────────────────────────────

interface OrbitProps {
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  electronSpeed: number;
  electronOffset: number;
  orbitDelta: { ry: number; rz: number; rx: number };
  radius: number;
}

function Orbit({
  rotation,
  scale,
  color,
  electronSpeed,
  electronOffset,
  orbitDelta,
  radius,
}: OrbitProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const electronRef = useRef<THREE.Mesh>(null!);

  // Torus geometry — thin ring, many segments for smoothness
  const torusGeo = useMemo(
    () => new THREE.TorusGeometry(radius, 0.012, 10, 100),
    [radius]
  );

  const torusMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.6,
        roughness: 0.4,
        metalness: 0.1,
        transparent: true,
        opacity: 0.75,
      }),
    [color]
  );

  const electronGeo = useMemo(() => new THREE.SphereGeometry(0.07, 16, 16), []);
  const electronMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 1.4,
        roughness: 0.1,
        metalness: 0,
      }),
    [color]
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    // Orbit group slow precession
    groupRef.current.rotation.y += orbitDelta.ry;
    groupRef.current.rotation.z += orbitDelta.rz;
    groupRef.current.rotation.x += orbitDelta.rx;

    // Electron position along orbit ellipse (local XY plane of group)
    const angle = elapsed * electronSpeed + electronOffset;
    electronRef.current.position.set(
      Math.cos(angle) * radius * scale[0],
      Math.sin(angle) * radius * scale[1],
      0
    );
  });

  return (
    <group ref={groupRef} rotation={rotation}>
      {/* Orbit ring */}
      <mesh geometry={torusGeo} material={torusMat} scale={scale} />
      {/* Electron */}
      <mesh ref={electronRef} geometry={electronGeo} material={electronMat} />
    </group>
  );
}

// ─── Nucleus ─────────────────────────────────────────────────────────────────

function Nucleus() {
  const nucleusRef = useRef<THREE.Group>(null!);
  const { camera } = useThree();

  // Subtle pulse scale
  useFrame(({ clock }) => {
    const s = 1 + Math.sin(clock.getElapsedTime() * 1.6) * 0.03;
    nucleusRef.current.scale.set(s, s, s);
    // Billboard: always face the camera
    nucleusRef.current.quaternion.copy(camera.quaternion);
  });

  return (
    <group ref={nucleusRef}>
      {/* Soft glow sphere */}
      <mesh>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial
          color="#0e4a6e"
          emissive="#06b6d4"
          emissiveIntensity={0.35}
          roughness={0.6}
          transparent
          opacity={0.55}
        />
      </mesh>
      {/* Inner core */}
      <mesh>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.9}
          roughness={0.2}
        />
      </mesh>
      {/* RN text — always readable, faces camera via parent billboard */}
      <Text
        fontSize={0.22}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.35]}
        font={undefined}
        letterSpacing={0.05}
        outlineWidth={0.005}
        outlineColor="#000"
      >
        RN
      </Text>
    </group>
  );
}

// ─── Scene ────────────────────────────────────────────────────────────────────

function AtomScene() {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const speedMul = prefersReducedMotion ? 0 : 1;
  const deltaScale = prefersReducedMotion ? 0 : 1;

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#3b82f6" />
      <pointLight position={[-2, -2, 2]} intensity={0.6} color="#06b6d4" />
      <pointLight position={[0, 2, -3]} intensity={0.4} color="#8b5cf6" />

      {/* ── Orbit 1 — Cyan — X-tilted ~68° ── */}
      <Orbit
        rotation={[Math.PI / 2.7, 0, 0]}
        scale={[1.5, 0.72, 1]}
        color="#06b6d4"
        electronSpeed={0.65 * speedMul || (prefersReducedMotion ? 0 : 0.65)}
        electronOffset={0}
        radius={1.1}
        orbitDelta={{
          ry: 0.00028 * deltaScale,
          rz: 0.00009 * deltaScale,
          rx: 0,
        }}
      />

      {/* ── Orbit 2 — Blue — Y+Z tilted ── */}
      <Orbit
        rotation={[Math.PI / 3.2, Math.PI / 2.8, Math.PI / 3.5]}
        scale={[1.45, 0.68, 1]}
        color="#3b82f6"
        electronSpeed={0.48 * speedMul || (prefersReducedMotion ? 0 : 0.48)}
        electronOffset={Math.PI * 0.7}
        radius={1.1}
        orbitDelta={{
          ry: 0,
          rz: 0.00025 * deltaScale,
          rx: -0.00016 * deltaScale,
        }}
      />

      {/* ── Orbit 3 — Violet — -Y -Z tilted ── */}
      <Orbit
        rotation={[-Math.PI / 3, Math.PI / 3.4, -Math.PI / 4]}
        scale={[1.4, 0.7, 1]}
        color="#8b5cf6"
        electronSpeed={0.82 * speedMul || (prefersReducedMotion ? 0 : 0.82)}
        electronOffset={Math.PI * 1.4}
        radius={1.1}
        orbitDelta={{
          ry: -0.0002 * deltaScale,
          rz: 0,
          rx: 0.00013 * deltaScale,
        }}
      />

      {/* ── Nucleus — fixed, billboard ── */}
      <Nucleus />
    </>
  );
}

// ─── Static SVG Fallback (WebGL unavailable) ─────────────────────────────────

function AtomFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
      <svg viewBox="-160 -160 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[320px]">
        <defs>
          <filter id="fg"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        {/* Orbit 1 — horizontal */}
        <ellipse cx="0" cy="0" rx="130" ry="45" fill="none" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.7" filter="url(#fg)" />
        {/* Orbit 2 — 60deg */}
        <ellipse cx="0" cy="0" rx="130" ry="45" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.7" filter="url(#fg)" transform="rotate(60)" />
        {/* Orbit 3 — -60deg */}
        <ellipse cx="0" cy="0" rx="130" ry="45" fill="none" stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.7" filter="url(#fg)" transform="rotate(-60)" />
        {/* Nucleus */}
        <circle cx="0" cy="0" r="28" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="0" y="7" textAnchor="middle" fontSize="18" fontWeight="bold" fontFamily="monospace" fill="#06b6d4" letterSpacing="3">RN</text>
      </svg>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export const HeroAtom3D: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [webglOk, setWebglOk] = React.useState(true);

  // WebGL support detection
  React.useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ok = !!(
        canvas.getContext("webgl2") || canvas.getContext("webgl")
      );
      setWebglOk(ok);
    } catch {
      setWebglOk(false);
    }
  }, []);

  if (!webglOk) return <AtomFallback />;

  return (
    <div
      className={`w-full ${className}`}
      style={{ aspectRatio: "1 / 1" }}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        shadows={false}
        camera={{ fov: 40, position: [0, 0.3, 6], near: 0.1, far: 100 }}
        style={{ background: "transparent" }}
      >
        <AtomScene />
      </Canvas>
    </div>
  );
};

export default HeroAtom3D;
