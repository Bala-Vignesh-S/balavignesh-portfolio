"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#120808]"
    >
      <div className="text-center max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-[#d4af37] mb-6">
          About Me
        </h2>

        <p className="text-[#f5e6c8] text-lg">
          I build intelligent systems combining AI, computer vision,
          and full-stack engineering to solve real-world problems
          in wildlife protection, sports analytics, and governance.
        </p>
      </div>
    </section>
  );
}