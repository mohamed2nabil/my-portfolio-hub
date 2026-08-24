"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Wireframe, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points for a particle cloud
const generateParticles = (count) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const radius = 2.5 + Math.random() * 1.5;
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
};

const particles = generateParticles(500);

function AbstractCore() {
  const groupRef = useRef();
  
  useFrame((state) => {
    // Smooth 3D rotation based on scroll position
    const scrollY = window.scrollY || 0;
    
    // Base continuous rotation
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.1 + (scrollY * 0.001);
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15 + (scrollY * 0.002);
  });

  return (
    <group ref={groupRef}>
      {/* Outer abstract sphere (Data & Web) */}
      <Sphere args={[2, 16, 16]}>
        <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Inner core (AI Automation) */}
      <Sphere args={[1.2, 8, 8]}>
        <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.5} />
      </Sphere>
      
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>

      {/* Particle field */}
      <Points positions={particles}>
        <PointMaterial transparent color="#a855f7" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function Interactive3DScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <AbstractCore />
        </Float>
      </Canvas>
    </div>
  );
}
