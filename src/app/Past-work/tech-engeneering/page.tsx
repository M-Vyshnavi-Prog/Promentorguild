"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./tech.module.css";

import simu1 from "../../../asset/private/simulation-1.png";
import simu2 from "../../../asset/private/simulation-2.png";
import simu3 from "../../../asset/private/simulation-3.png";



export default function PastWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("Simulation");
  const [index, setIndex] = useState(0);

  // ✅ Images grouped by category
  const imagesByCategory: Record<string, StaticImageData[]> = {
    "Simulation": [simu1, simu2, simu3],

  };

  const categories = Object.keys(imagesByCategory);
  const images = imagesByCategory[selectedCategory];

  // ✅ Reset index when changing category
  useEffect(() => {
    setIndex(0);
  }, [selectedCategory]);

  // ✅ Handle looping (manual infinite scroll)
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ Get visible images (2 at a time)
  const getVisibleImages = () => {
    const visibleCount = 2;
    const result: StaticImageData[] = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(images[(index + i) % images.length]); // ✅ Loop around
    }
    return result;
  };

  return (
    <section className={styles.pastWork}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Our Past Work</h1>
          <p className={styles.subtitle}>Showcasing our innovative work in technology and engineering excellence.</p>
        </div>
      </div>
      {/* Explore Section */}
      <div className={styles.exploreSection}>
        <h2 className={styles.exploreTitle}>
          "Dive into the World We Simulate, Before It’s Built"
        </h2>

        {/* Category Selector */}
        <div className={styles.selectionBox}>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? styles.activeCategory : ""}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Carousel */}
        <div className={styles.sliderContainer}>
          <button onClick={prevSlide} className={styles.navButton}>‹</button>

          <div className={styles.imageGrid}>
            {getVisibleImages().map((src: StaticImageData, idx: number) => (
              <div key={idx} className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`${selectedCategory} ${idx + 1}`}
                  className={styles.workcard}
                  width={600}
                  height={400}
                  priority
                />
              </div>
            ))}
          </div>

          <button onClick={nextSlide} className={styles.navButton}>›</button>
        </div>
      </div>
    </section>
  );
}
