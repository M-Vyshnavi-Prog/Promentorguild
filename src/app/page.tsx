"use client";

import HeroSlider from "./components/HeroSlider";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <div>
      {/* 1️⃣ Hero Slider */}
      <HeroSlider />

      {/* 2️⃣ Hero Section */}
      <Hero />

      {/* 3️⃣ About Us Section */}
      <section className="bg-gray-50 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          ProMentor Guild is a platform dedicated to empowering professionals, 
          researchers, and students by offering mentorship and guidance across 
          various fields such as interior design, web development, and app innovation.
        </p>
      </section>
    </div>
  );
}
