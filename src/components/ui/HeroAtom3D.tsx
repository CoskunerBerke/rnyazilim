"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { usePerformanceMode } from "@/components/context/PerformanceModeProvider";

// ─── Orbit Component ─────────────────────────────────────────────────────────

interface OrbitProps {
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  electronSpeed: number;
  electronOffset: number;
  precessionSpeed: { x: number; y: number; z: number };
  radius: number;
}

const Orbit: React.FC<OrbitProps> = ({
  rotation,
  scale,
  color,
  electronSpeed,
  electronOffset,
  precessionSpeed,
  radius,
}) => {
  const orbitGroupRef = useRef<THREE.Group>(null!);
  const electronRef = useRef<THREE.Mesh>(null!);

  // Smooth torus geometry for the orbit ring path
  const ringGeo = useMemo(() => new THREE.TorusGeometry(radius, 0.012, 12, 120), [radius]);
  const ringMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.8,
        roughness: 0.3,
        metalness: 0.1,
        transparent: true,
        opacity: 0.6,
      }),
    [color]
  );

  const electronGeo = useMemo(() => new THREE.SphereGeometry(0.065, 16, 16), []);
  const electronMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 2.2,
        roughness: 0.1,
        metalness: 0.0,
      }),
    [color]
  );

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();

    // 1. Precession of orbit planes
    orbitGroupRef.current.rotation.x += precessionSpeed.x * delta * 50;
    orbitGroupRef.current.rotation.y += precessionSpeed.y * delta * 50;
    orbitGroupRef.current.rotation.z += precessionSpeed.z * delta * 50;

    // 2. Trigonometrical electron motion inside the orbit group
    const angle = elapsed * electronSpeed + electronOffset;
    electronRef.current.position.set(
      Math.cos(angle) * radius * scale[0],
      Math.sin(angle) * radius * scale[1],
      0
    );
  });

  return (
    <group ref={orbitGroupRef} rotation={rotation}>
      {/* Orbit Ellipse Ring */}
      <mesh geometry={ringGeo} material={ringMat} scale={scale} />
      {/* Active Electron Sphere */}
      <mesh ref={electronRef} geometry={electronGeo} material={electronMat} />
    </group>
  );
};

// ─── Nucleus Component ────────────────────────────────────────────────────────

const Nucleus: React.FC = () => {
  const nucleusRef = useRef<THREE.Group>(null!);
  const { camera } = useThree();

  useFrame((state) => {
    // Gentle pulse scale
    const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 2.0) * 0.03;
    nucleusRef.current.scale.set(pulse, pulse, pulse);

    // Billboard core: always face the camera directly so text is readable
    nucleusRef.current.quaternion.copy(camera.quaternion);
  });

  return (
    <group ref={nucleusRef}>
      {/* Outer cyan glowing shell */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#083344"
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          roughness={0.4}
          transparent
          opacity={0.65}
        />
      </mesh>
      {/* Inner bright core */}
      <mesh>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>
      {/* Serif RN Monogram */}
      <Text
        fontSize={0.2}
        color="#22d3ee"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.32]}
        font={undefined} // falls back to default sans/serif
        letterSpacing={0.05}
        outlineWidth={0.005}
        outlineColor="#000000"
      >
        RN
      </Text>
    </group>
  );
};

// ─── Scene Wrapper ───────────────────────────────────────────────────────────

const Scene: React.FC = () => {
  const atomContainerRef = useRef<THREE.Group>(null!);
  const { mode } = usePerformanceMode();

  useFrame((state, delta) => {
    // 1. Slow global rotation of the entire atom structure
    atomContainerRef.current.rotation.y += 0.15 * delta;

    // 2. Interactive mouse parallax
    const targetX = state.pointer.y * 0.3; // tilt based on vertical mouse
    const targetY = state.pointer.x * 0.3; // pan based on horizontal mouse

    atomContainerRef.current.rotation.x += (targetX - atomContainerRef.current.rotation.x) * 0.05;
    atomContainerRef.current.rotation.z += (-targetY - atomContainerRef.current.rotation.z) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#8b5cf6" />
      
      {/* Core container holding orbits & nucleus */}
      <group ref={atomContainerRef}>
        {/* Orbit 1 — Cyan (#22d3ee) */}
        <Orbit
          rotation={[Math.PI / 2.7, 0, 0]}
          scale={[1.5, 0.72, 1.0]}
          color="#22d3ee"
          electronSpeed={0.65}
          electronOffset={0}
          precessionSpeed={{ x: 0, y: 0.0006, z: 0.0002 }}
          radius={1.15}
        />
        {/* Orbit 2 — Violet (#8b5cf6) */}
        <Orbit
          rotation={[Math.PI / 3.2, Math.PI / 2.8, Math.PI / 3.5]}
          scale={[1.45, 0.68, 1.0]}
          color="#8b5cf6"
          electronSpeed={0.48}
          electronOffset={Math.PI * 0.66}
          precessionSpeed={{ x: -0.0003, y: 0, z: 0.0005 }}
          radius={1.15}
        />
        {/* Orbit 3 — Light Blue (#38bdf8) */}
        <Orbit
          rotation={[-Math.PI / 3, Math.PI / 3.4, -Math.PI / 4]}
          scale={[1.4, 0.7, 1.0]}
          color="#38bdf8"
          electronSpeed={0.82}
          electronOffset={Math.PI * 1.33}
          precessionSpeed={{ x: 0.0002, y: -0.0004, z: 0 }}
          radius={1.15}
        />
        <Nucleus />
      </group>

      {/* Postprocessing Bloom glow filter (skip on low mode for speed) */}
      {mode !== "low" && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.15}
            luminanceSmoothing={0.85}
            height={300}
            intensity={1.2}
          />
        </EffectComposer>
      )}
    </>
  );
};

// ─── Static SVG Fallback (WebGL unavailable) ─────────────────────────────────

const Fallback: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
    <svg viewBox="-160 -160 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[320px]">
      <defs>
        <filter id="fallbackGlow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <ellipse cx="0" cy="0" rx="130" ry="45" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.85" filter="url(#fallbackGlow)" />
      <ellipse cx="0" cy="0" rx="130" ry="45" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.85" filter="url(#fallbackGlow)" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="130" ry="45" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.85" filter="url(#fallbackGlow)" transform="rotate(-60)" />
      <circle cx="0" cy="0" r="28" fill="#083344" stroke="#22d3ee" strokeWidth="1.8" strokeOpacity="0.75" />
      <text x="0" y="7" textAnchor="middle" fontSize="18" fontWeight="bold" fontFamily="'Courier New', Courier, monospace" fill="#22d3ee" letterSpacing="3">RN</text>
    </svg>
  </div>
);

// ─── Exported Component ──────────────────────────────────────────────────────

export const HeroAtom3D: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ok = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
      setWebglSupported(ok);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (webglSupported === null) {
    return (
      <div className="w-full flex items-center justify-center" style={{ aspectRatio: "1/1" }}>
        <div className="w-16 h-16 rounded-full border border-cyan-400/20 animate-pulse" />
      </div>
    );
  }

  if (!webglSupported) {
    return <Fallback />;
  }

  return (
    <div
      className={`w-full relative ${className}`}
      style={{ aspectRatio: "1 / 1" }}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        shadows={false}
        camera={{ fov: 40, position: [0, 0.3, 6], near: 0.1, far: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroAtom3D;
