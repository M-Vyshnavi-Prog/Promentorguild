// src/app/interior-design/page.tsx
import styles from "./interiordesign.module.css";

export default function InteriorDesign() {
  return (
    <>
      <div className={styles["interior-page"]}>
        <div className={styles.overlay}>
          <h1>Architecture and Interior Design</h1>
          <p>
            We offer specialized training in industry-standard design tools and
            techniques for students, freelance designers, and firms.
          </p>
        </div>
      </div>

      {/* ✅ New “Services” section (Added Above Solutions) */}
      <section className={styles.servicesSection}>
        <h2>Services</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Training &amp; Tools</h4>
            <ul>
              <li>SketchUp</li>
              <li>AutoCAD</li>
              <li>Revit &amp; BIM</li>
              <li>Enscape</li>
              <li>V-Ray</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Professional Services</h4>
            <ul>
              <li>3D Architectural Modeling</li>
              <li>Photorealistic Rendering</li>
              <li>Technical Drawing &amp; Layout Documentation</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>
              3D Animation for Residential, Commercial &amp; Public Spaces
            </h4>
            <ul>
              <li>Twin Motion</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Adobe</h4>
            <ul>
              <li>Photoshop</li>
              <li>InDesign</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Existing “Solution’s” Section (Unchanged) */}
      <section className={styles.solutionsSection}>
        <h2>Solution's</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/design-icon.png" alt="Design" />
            <h4>Interior Design</h4>
            <p>
              Transform your spaces with innovative interior design solutions
              tailored to your needs and style.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/architecture-icon.png" alt="Architecture" />
            <h4>Architecture</h4>
            <p>
              We provide modern and sustainable architectural designs that
              combine functionality and beauty.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/visualization-icon.png" alt="3D Visualization" />
            <h4>3D Visualization</h4>
            <p>
              Bring your projects to life with high-quality 3D rendering and
              walkthrough animations.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/consulting-icon.png" alt="Consulting" />
            <h4>Consulting</h4>
            <p>
              Get expert advice and guidance for architecture, planning, and
              design implementation.
            </p>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontStyle: "italic",
            color: "#1a237e",
          }}
        >
          "Every room a reflection of you, every detail crafted with care — your dream home awaits."
        </p>
      </section>
    </>
  );
}
