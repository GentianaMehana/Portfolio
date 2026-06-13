import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <Sphere visible args={[1, 100, 200]} ref={meshRef}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;