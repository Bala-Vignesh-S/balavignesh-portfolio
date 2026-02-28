"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiTensorflow,
  SiSolidity,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiReact,
  SiMongodb,
  SiLinux,
  SiGit,
  SiTailwindcss,
  SiTypescript,
  SiOpencv,
} from "react-icons/si";

import { FaFlask, FaEthereum } from "react-icons/fa";

const techStacks = [
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Flask", icon: FaFlask },
  { name: "Solidity", icon: SiSolidity },
  { name: "Ethereum", icon: FaEthereum },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
];

// Stable alphabets (no hydration error)
const alphabets =
  "ABCDEFGHIJKLMNOPQASKUGKENVOWBIYCVOCWOBCPANCPCHASJXVCTSEWQRETRYUIOPABNAVCVARSTUVWXYZ".split(
    ""
  );

function generateLongRow(row: typeof techStacks) {
  let extended = [...row];
  while (extended.length < 30) {
    extended = [...extended, ...row];
  }
  return extended;
}

// Split into 4 rows
const rows = [
  techStacks.slice(0, 4),
  techStacks.slice(4, 8),
  techStacks.slice(8, 12),
  techStacks.slice(12),
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[#120808] overflow-hidden"
    >
      {/* Subtle depth shadow under entire wall */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#d4af37]">
          Technical Arsenal
        </h2>
      </div>

      <div className="space-y-6">
        {rows.map((row, rowIndex) => {
          const longRow = generateLongRow(row);
          const loopRow = [...longRow, ...longRow];

          return (
            <motion.div
              key={rowIndex}
              animate={{
                x:
                  rowIndex % 2 === 0
                    ? ["0%", "-50%"]
                    : ["-50%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 25 + rowIndex * 3,
                ease: "linear",
              }}
              className="flex whitespace-nowrap"
            >
              {loopRow.map((tech, index) => {
                const Icon = tech.icon;
                const letter = alphabets[index % alphabets.length];
                const isAlt = index % 2 === 0;

                return (
                  <div key={index} className="flex">

                    {/* TECH BRICK */}
                    <div
                      className="
                      flex items-center gap-3
                      px-10
                      h-20
                      bg-gradient-to-br from-[#f5d77a] to-[#d4af37]
                      border border-[#b8860b]
                      shadow-[0_6px_15px_rgba(0,0,0,0.4)]
                      hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]
                      transition
                    "
                    >
                      <Icon size={24} className="text-black" />
                      <span className="text-black font-semibold">
                        {tech.name}
                      </span>
                    </div>

                    {/* ALPHABET BRICK */}
                    <div
                      className={`
                      flex items-center justify-center
                      px-6
                      h-20
                      min-w-[70px]
                      border border-[#b8860b]
                      shadow-[0_6px_15px_rgba(0,0,0,0.4)]
                      ${
                        isAlt
                          ? "bg-gradient-to-br from-[#e8c15a] to-[#c79b2c]"
                          : "bg-gradient-to-br from-[#ffcc4d] to-[#e6b800]"
                      }
                    `}
                    >
                      <span
                        className="
                          alphabet-font
                          text-[#050505]
                          text-xl
                          tracking-wide
                          font-extrabold
                          drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
                        "
                      >
                        {letter}
                      </span>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}