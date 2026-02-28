"use client";

export default function Connect() {
  return (
    <section
      id="connect"
      className="min-h-screen flex flex-col items-center justify-center bg-[#1a0f0f]"
    >
      <h2 className="text-4xl font-bold text-[#d4af37] mb-12">
        Connect With Me
      </h2>

      <div className="flex gap-10">
        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-2xl bg-[#2a1a1a] border border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-2xl bg-[#2a1a1a] border border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}