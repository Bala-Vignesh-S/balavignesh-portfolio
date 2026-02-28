"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Intelligent Poaching Detection System",
    description:
      "AI-powered wildlife monitoring using YOLOv8 with Flask backend for real-time image and video detection.",
  },
  {
    title: "AI Offside Detection System",
    description:
      "Computer vision system detecting player positions, ball tracking, and automated offside decision support.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 bg-[#1a0f0f]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-[#d4af37]"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-[#d4af37]/40 shadow-xl hover:shadow-[#d4af37]/30 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#f5e6c8]">
                {project.title}
              </h3>
              <p className="text-[#e6cfa7]">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}