"use client";

import HeroSlider from "./components/HeroSlider"; // ✅ make sure this file exists

export default function Page() {
  return (
    <div>
      {/* ✅ Hero Slider section */}
      <HeroSlider />

      {/* ✅ Homepage content below the slider */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Welcome to ProMentor Guild
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Empowering professionals, researchers, and students.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Build your leadership and innovation skills.
        </p>
      </section>
    </div>
  );
}
