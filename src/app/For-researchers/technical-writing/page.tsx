// src/app/For-researchers/Technical-writing/page.tsx
import styles from "./technical.module.css";

export default function TechnicalWriting() {
  return (
    <>
      <div className={styles.techPage}>
        <div className={styles.overlay}>
          <h1>Technical Writing & Documentation</h1>
          <p>
            Empowering researchers and professionals to present their work
            clearly, precisely, and effectively through world-class documentation
            and visual communication.
          </p>
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Services</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Research Paper Writing & Formatting</h4>
            <ul>
              <li>Manuscript structuring and proofreading</li>
              <li>Formatting as per journal and conference standards</li>
              <li>Reference styling (IEEE, APA, Springer, etc.)</li>
              <li>Plagiarism check and content enhancement</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Technical Reports & Proposals</h4>
            <ul>
              <li>Creation of detailed project reports (DPR)</li>
              <li>Funding proposal preparation (DST, SERB, etc.)</li>
              <li>Industrial documentation and progress reports</li>
              <li>Executive summaries and presentation writing</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>Visual & Figure Generation</h4>
            <ul>
              <li>Scientific illustrations using SketchUp & MATLAB</li>
              <li>Flowcharts, block diagrams, and schematics</li>
              <li>High-resolution figures for publication</li>
              <li>Data visualization and infographics</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Editing & Review Support</h4>
            <ul>
              <li>Peer-review assistance and manuscript polishing</li>
              <li>Language editing and grammar correction</li>
              <li>Consistency and compliance check</li>
              <li>Final proof editing for submission</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Solutions</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/writing-icon.png"  />
            <h4>Writing Tools</h4>
            <p>
              Expert support using LaTeX, MS Word, PowerPoint, and SketchUp for
              technical writing and publication-ready outputs.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/research-icon.png" alt="Research Support" />
            <h4>Research Communication</h4>
            <p>
              Helping scholars convey complex ideas effectively through clear,
              concise, and impactful documentation.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/formatting-icon.png" alt="Formatting" />
            <h4>Formatting & Compliance</h4>
            <p>
              Ensuring all documents meet journal and institutional
              requirements for structure, style, and formatting.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/review-icon.png" alt="Peer Review" />
            <h4>Peer Review & Editing</h4>
            <p>
              Comprehensive review and refinement services to improve the
              technical clarity and publication readiness of your work.
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
          "Where technology finds its voice — translating complexity into clarity"
        </p>
      </section>
    </>
  );
}
