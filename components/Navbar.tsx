"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#2a1a1a]/80 backdrop-blur-md border-b border-[#d4af37]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO / NAME */}
        <a href="#home" className="text-xl font-bold text-[#f5e6c8] tracking-wide">
          Balavignesh
        </a>

        {/* NAV LINKS */}
        <div className="space-x-6 text-gray-300 hidden md:block">
          <a href="#home" className="hover:text-[#d4af37] transition">
            Home
          </a>

          <a href="#projects" className="hover:text-[#d4af37] transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-[#d4af37] transition">
            Skills
          </a>

          <a href="#about" className="hover:text-[#d4af37] transition">
            About
          </a>

          <a href="#connect" className="hover:text-[#d4af37] transition">
            Connect
          </a>
        </div>
      </div>
    </motion.nav>
  );
}