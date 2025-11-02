// src/app/For-professionals/app-development/page.tsx
import styles from "./appdevelopment.module.css";

export default function AppDevelopment() {
  return (
    <>
      <div className={styles["app-page"]}>
        <div className={styles.overlay}>
          * <h1>App Design & Development</h1>
          <p>
            We design and develop scalable, high-performance mobile and web applications
            that deliver excellent user experiences and meet your business goals.
          </p> 
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Services</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Mobile App Development</h4>
            <ul>
              <li>Android App Development (Kotlin / Java)</li>
              <li>iOS App Development (Swift)</li>
              <li>Cross-Platform Apps (React Native / Flutter)</li>
              <li>App Store Deployment & Support</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Web App Development</h4>
            <ul>
              <li>Progressive Web Apps (PWA)</li>
              <li>Single Page Applications (SPA)</li>
              <li>Backend Integration with APIs</li>
              <li>Database Management (MongoDB / MySQL)</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>UI/UX Design</h4>
            <ul>
              <li>Wireframes & Interactive Prototypes</li>
              <li>Figma / Adobe XD Design</li>
              <li>Usability Testing</li>
              <li>Design System Implementation</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Maintenance & Optimization</h4>
            <ul>
              <li>App Performance Monitoring</li>
              <li>Bug Fixes & Security Patches</li>
              <li>Feature Enhancements</li>
              <li>Regular Updates & Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Solution’s</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/mobile-icon.png" alt="Mobile Apps" />
            <h4>Mobile App Solutions</h4>
            <p>
              Native and hybrid mobile apps designed to perform seamlessly across all devices.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/webapp-icon.png" alt="Web Apps" />
            <h4>Web Application Development</h4>
            <p>
              Fast, secure, and scalable web apps built using modern frameworks like React and Next.js.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/uiux-icon.png" alt="UI UX" />
            <h4>UI/UX Experience</h4>
            <p>
              Beautiful and intuitive designs that provide smooth user interactions and improved engagement.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/support-icon.png" alt="Support" />
            <h4>Ongoing Support</h4>
            <p>
              Continuous monitoring, feature upgrades, and optimization to keep your app running smoothly.
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
          "Your vision, our code — crafting smart apps for a smarter world."
        </p>
      </section>
    </>
  );
}
