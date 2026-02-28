"use client";

import ThreeScene from "@/components/ThreeScene";
import Navbar from "@/components/Navbar";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import About from "@/sections/About";
import Connect from "@/sections/Connect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <ThreeScene />
        </div>

        <div className="relative z-10 text-center px-6 bg-[#2a1a1a]/40 backdrop-blur-sm p-8 rounded-3xl border border-[#d4af37] shadow-lg">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold tracking-wide text-[#f5e6c8]"
          >
            Balavignesh Shanmugam
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-xl text-[#d4af37]"
          >
            AI Engineer | Computer Vision Developer | Full Stack Builder
          </motion.p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <Projects />

      {/* SKILLS SECTION */}
      <Skills />

      {/* ABOUT SECTION */}
      <About />

      {/* CONNECT SECTION */}
      <Connect />

    </main>
  );
}