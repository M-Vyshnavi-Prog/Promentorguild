"use client";
import { useEffect } from "react";
import styles from "./past.module.css";

export default function PastWorkPage() {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>(`.${styles.imageGrid}`);
    const nextBtn = document.getElementById("nextSlide");
    const prevBtn = document.getElementById("prevSlide");

    // ✅ Exit early if elements are missing
    if (!track || !nextBtn || !prevBtn) return;

    const slides = track.children.length;
    let index = 0;

    const updateSlide = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      track.style.transition = "transform 0.5s ease-in-out";
    };

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides;
      updateSlide();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides) % slides;
      updateSlide();
    });

    // ✅ Cleanup listeners on unmount
    return () => {
      nextBtn.removeEventListener("click", () => {});
      prevBtn.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <section className={styles.pastWork}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Our Past Work</h1>
          <p className={styles.subtitle}>
            Discover how our designs bring spaces to life
          </p>
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

      {/* Explore Section (Slider) */}
      <div className={styles.exploreSection}>
        <h2 className={styles.exploreTitle}>"Step Into the Spaces We’ve Redefined"</h2>

        <div className={styles.sliderContainer}>
          <button id="prevSlide" className={styles.navButton}>‹</button>

          <div className={styles.imageGrid}>
            <img src="/interior-1.jpg" alt="Living Room" className={styles.workcard} />
            <img src="/interior-2.jpg" alt="Modern Living" className={styles.workcard} />
            <img src="/interior-3.jpg" alt="Elegant Space" className={styles.workcard} />
            <img src="/interior-4.jpg" alt="Cozy Interior" className={styles.workcard} />
          </div>

          <button id="nextSlide" className={styles.navButton}>›</button>
        </div>
      </div>
    </section>
  );
}
