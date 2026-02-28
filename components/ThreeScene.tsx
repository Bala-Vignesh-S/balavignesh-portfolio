"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} />

        <TorusKnot args={[1, 0.3, 128, 32]}>
          <meshStandardMaterial wireframe color="#d4af37" />
        </TorusKnot>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}