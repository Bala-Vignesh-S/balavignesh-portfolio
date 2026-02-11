"use client";

import ThreeScene from "@/components/ThreeScene";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <ThreeScene />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          Balavignesh Shanmugam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-xl text-gray-400"
        >
          AI Engineer | Computer Vision Developer | Full Stack Builder
        </motion.p>
      </div>
    </main>
  );
}
