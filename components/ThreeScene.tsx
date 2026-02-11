"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial wireframe color="#00ffff" />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
