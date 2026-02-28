"use client";

import ThreeScene from "@/components/ThreeScene";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">

        {/* 3D BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <ThreeScene />
        </div>

        {/* HERO CONTENT */}
        <div className="text-center px-6">
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

      </section>

    </main>
  );
}