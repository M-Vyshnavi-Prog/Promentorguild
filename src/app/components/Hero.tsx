// src/app/components/Hero.tsx
"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-blue-100 flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome to ProMentorGuild
      </h1>

      <p className="text-xl mb-6 text-center max-w-xl">
        Professional guidance for Interior, Website, and App development.
      </p>

      {/* ✅ Use Next.js Link for page navigation */}
      <Link
        href="/leadership"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Learn More
      </Link>
    </section>
  );
}
