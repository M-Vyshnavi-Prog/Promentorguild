"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./past.module.css";

import villa1 from "../../asset/private/villa5000-1.jpg";
import villa2 from "../../asset/private/villa5000-2.jpg";
import villa3 from "../../asset/private/villa5000-3.jpg";
import entertainment1 from "../../asset/private/entertainmentroom-1.jpg";
import entertainment2 from "../../asset/private/entertainmentroom-2.jpg";
import villa35_1 from "../../asset/private/villa3500-1.jpg";
import villa35_2 from "../../asset/private/villa3500-2.jpg";
import villa35_3 from "../../asset/private/villa3500-3.jpg";
import villa35_4 from "../../asset/private/villa3500-4.jpg";
import villa35_5 from "../../asset/private/villa3500-5.jpg";
import villa35_6 from "../../asset/private/villa3500-6.jpg";
import school_1 from "../../asset/private/specialneedschool-1.jpg";
import school_2 from "../../asset/private/specialneedschool-2.jpg";
import school_3 from "../../asset/private/specialneedschool-3.jpg";
import school_4 from "../../asset/private/specialneedschool-4.jpg";
import work_1 from "../../asset/private/workspace-1.jpg";
import work_2 from "../../asset/private/workspace-2.jpg";
import work_3 from "../../asset/private/workspace-3.jpg";
import work_4 from "../../asset/private/workspace-4.jpg";
import work_5 from "../../asset/private/workspace-5.jpg";
import work_6 from "../../asset/private/workspace-6.jpg";
import work_7 from "../../asset/private/workspace-7.jpg";

export default function PastWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("5000 Sqft Villa Interiors");
  const [index, setIndex] = useState(0);

  // ✅ Images grouped by category
  const imagesByCategory: Record<string, StaticImageData[]> = {
    "5000 Sqft Villa Interiors": [villa1, villa2, villa3],
    "3500 Sqft Villa Interiors": [villa35_1, villa35_2, villa35_3, villa35_4, villa35_5, villa35_6],
    "Entertainment Room": [entertainment1, entertainment2],
    "Special Needs School": [school_1, school_2, school_3, school_4],
    "Work Space": [work_1, work_2, work_3, work_4, work_5, work_6, work_7],
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
          <p className={styles.subtitle}>Discover how our designs bring spaces to life</p>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>What Makes Our Work Stand Out</h2>

        <div className={styles.featuresGrid}>
          <div className={styles.featureBox}>
            <img src="/detail.jpg" alt="Attention to Detail" className={styles.featureImage} />
            <h3>Attention to Detail</h3>
            <p>
              Every project is crafted with precision, ensuring beauty, balance,
              and harmony in every design.
            </p>
          </div>

          <div className={styles.featureBox}>
            <img src="/ideas.jpg" alt="Innovative Ideas" className={styles.featureImage} />
            <h3>Innovative Ideas</h3>
            <p>
              We merge creativity and practicality to deliver unique and inspiring
              solutions.
            </p>
          </div>

          <div className={styles.featureBox}>
            <img src="/client.jpg" alt="Client-Centric Approach" className={styles.featureImage} />
            <h3>Client-Centric Approach</h3>
            <p>
              Your vision leads our process — we work closely with you from concept
              to creation.
            </p>
          </div>

          <div className={styles.featureBox}>
            <img src="/quality.jpg" alt="Premium Quality" className={styles.featureImage} />
            <h3>Premium Quality</h3>
            <p>
              From material selection to finishing touches, we maintain excellence
              at every step.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className={styles.exploreSection}>
        <h2 className={styles.exploreTitle}>
          "Step Into the Spaces We’ve Redefined"
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
