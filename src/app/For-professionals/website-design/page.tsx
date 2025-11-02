// src/app/website-design/page.tsx
import styles from "./websitedesign.module.css";

export default function websiteDesign() {
  return (
    <>
      <div className={styles["website-page"]}>
        <div className={styles.overlay}>
         {/* <h1>Website Design & Development</h1>
          <p>
            We help individuals and organizations build stunning, responsive,
            and high-performing websites using the latest tools and
            technologies.
          </p>*/}
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Services</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>UI/UX Design</h4>
            <ul>
              <li>Wireframing & Prototyping</li>
              <li>Responsive Layout Design</li>
              <li>Figma / Adobe XD</li>
              <li>User Interface Optimization</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Front-End Development</h4>
            <ul>
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React.js / Next.js Development</li>
              <li>Cross-Browser Compatibility</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>Back-End Development</h4>
            <ul>
              <li>Node.js / Express.js</li>
              <li>Database Integration (MongoDB / MySQL)</li>
              <li>RESTful APIs</li>
              <li>Authentication & Security</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Branding & Visual Design</h4>
            <ul>
              <li>Logo & Color Palette Design</li>
              <li>Typography & Iconography</li>
              <li>Website Rebranding</li>
              <li>Design System Creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Solution’s</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/web-design-icon.png" alt="Web Design" />
            <h4>Responsive Web Design</h4>
            <p>
              Create visually engaging, mobile-friendly websites that work
              seamlessly on all devices.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/development-icon.png" alt="Web Development" />
            <h4>Full Stack Development</h4>
            <p>
              End-to-end website solutions — from user interface to backend
              logic and database management.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/seo-icon.png" alt="SEO" />
            <h4>SEO & Performance</h4>
            <p>
              Improve your site’s visibility and load speed to ensure better
              ranking and user retention.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/support-icon.png" alt="Maintenance" />
            <h4>Website Maintenance</h4>
            <p>
              Keep your website updated, secure, and optimized with ongoing
              support and content updates.
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
          "Crafting smart, stunning websites that turn ideas into impact — designing digital experiences that connect, engage, and grow."
        </p>
      </section>
    </>
  );
}
