"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/slide1.jpg",
      title: "Empower Your Skills",
      subtitle: "Learn. Build. Grow with ProMentor Guild.",
    },
    {
      id: 2,
      image: "/slide2.jpg",
      title: "Shape Your Future",
      subtitle: "Discover opportunities across all domains.",
    },
    {
      id: 3,
      image: "/slide3.jpg",
      title: "Innovate & Lead",
      subtitle: "Join hands with mentors and professionals.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={styles.heroSlider}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
        >
          <div className={styles.slideImageWrapper}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className={styles.slideOverlay}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
