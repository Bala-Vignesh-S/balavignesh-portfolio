"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} />

        <mesh rotation={[0, 0, Math.PI / 2]}>
  <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
  <meshStandardMaterial wireframe color="#d4af37" />
</mesh>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}