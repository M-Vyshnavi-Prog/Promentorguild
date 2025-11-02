// src/app/For-researchers/technology-engineering/page.tsx
import styles from "./technology.module.css";

export default function TechnologyEngineering() {
  return (
    <>
      <div className={styles["techPage"]}>
        <div className={styles.overlay}>
          <h1>Technology & Engineering</h1>
          <p>
            Advancing innovation through research, simulation, and hands-on
            training in modern engineering technologies and systems.
          </p>
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Services</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Embedded Systems Design</h4>
            <ul>
              <li>Microcontroller & ARM-based development</li>
              <li>Sensor integration and real-time interfacing</li>
              <li>IoT system design and implementation</li>
              <li>Firmware optimization and testing</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Simulation & Modeling</h4>
            <ul>
              <li>MATLAB & Simulink based system modeling</li>
              <li>Circuit simulation using LTSpice</li>
              <li>EM field simulation using CST Microwave Studio</li>
              <li>Thermal & mechanical simulations</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>Product Development</h4>
            <ul>
              <li>Prototype design and testing</li>
              <li>PCB design & fabrication support</li>
              <li>Integration of hardware and software modules</li>
              <li>Performance evaluation and optimization</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Research & Innovation Support</h4>
            <ul>
              <li>Guidance for academic and industrial projects</li>
              <li>Publication and documentation assistance</li>
              <li>Simulation-based learning modules</li>
              <li>Mentorship for research students</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Solutions</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/embedded-icon.png" alt="Embedded Systems" />
            <h4>Embedded Systems</h4>
            <p>
              From concept to code — building efficient embedded hardware and firmware solutions for real-world applications.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/simulation-icon.png" alt="Simulation" />
            <h4>Simulation & Analysis</h4>
            <p>
              High-fidelity simulation using MATLAB, CST, and LTSpice to validate and enhance engineering designs.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/ev-icon.png" alt="EV & Power Systems" />
            <h4>EV & Power Systems</h4>
            <p>
              Research and training in Electric Vehicles, Wireless Power Transfer, and smart energy systems.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/innovation-icon.png" alt="Innovation Support" />
            <h4>Innovation Support</h4>
            <p>
              End-to-end support for engineering innovation, including simulation, prototyping, and academic collaboration.
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
          "Where technology meets innovation, turning concepts into creations that shape the future."
        </p>

      </section>
    </>
  );
}
