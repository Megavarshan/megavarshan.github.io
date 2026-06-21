import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeTerrain() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * 0.4; // Slow down time
    const positions = meshRef.current.geometry.attributes.position;
    
    // Animate the z coordinate of each vertex (which faces "up" because of the mesh rotation)
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i); // This is the horizontal depth axis in 2D plane coords
      
      // Mathematical approximation of smooth flowing terrain (gradient descent mapping)
      let z = Math.sin(x * 0.15 + time) * 1.5;
      z += Math.sin(y * 0.15 + time * 1.2) * 1.5;
      z += Math.cos((x + y) * 0.1 - time * 0.5) * 1.0;
      
      // Interactive dip based on mouse
      const mouseX = state.pointer.x * 30;
      const mouseY = state.pointer.y * 30;
      const dist = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
      
      if (dist < 15) {
        z -= (15 - dist) * 0.3; // Push the terrain down near the mouse
      }
      
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -3, 0]}>
      {/* 120x120 size, 80x80 segments for a dense wireframe */}
      <planeGeometry args={[120, 120, 80, 80]} />
      <meshBasicMaterial 
        color="#38bdf8" // Professional sleek cyan (sky-400)
        wireframe={true} 
        transparent={true} 
        opacity={0.12} // Extremely subtle and clean
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none" style={{ backgroundColor: '#020617' }}>
      {/* Subtle central glow */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, #020617 80%)' }} />
      <Canvas camera={{ fov: 75, position: [0, 5, 20] }}>
        <WireframeTerrain />
      </Canvas>
    </div>
  );
}
