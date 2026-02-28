"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Intelligent Poaching Detection System
            </h3>
            <p className="text-gray-400">
              AI-powered wildlife monitoring using YOLOv8 with Flask backend for real-time image and video detection.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              AI Offside Detection System
            </h3>
            <p className="text-gray-400">
              Computer vision system detecting player positions, ball tracking, and automated offside decision support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}