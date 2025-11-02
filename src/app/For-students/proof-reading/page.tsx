import styles from "./reading.module.css"; // using same CSS structure

export default function ProofReading() {
  return (
    <>
      {/* ✅ Hero Section */}
      <div className={styles["reading-page"]}>
        <div className={styles.overlay}>
          <h1>Proof Reading</h1>
          <p>
            We offer expert proofreading and language enhancement services in both
            English and Hindi — designed for students, researchers, professionals,
            and content creators to refine and perfect their written communication.
          </p>
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Our Services Include</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Grammar and Spelling Checks</h4>
            <ul>
              <li>Accurate correction of grammatical, spelling, and typographical errors</li>
              <li>Ensures clarity and correctness across all content types</li>
              <li>Enhances language fluency and overall readability</li>
              <li>Tailored corrections for both academic and professional writing</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Sentence Structure & Style Suggestions</h4>
            <ul>
              <li>Improvement of sentence flow and logical organization</li>
              <li>Polishing writing tone for formal or creative contexts</li>
              <li>Rephrasing complex or ambiguous sentences for clarity</li>
              <li>Ensuring consistent formatting and professional presentation</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>Content & Plagiarism Review</h4>
            <ul>
              <li>Comprehensive plagiarism checks with detailed similarity reports</li>
              <li>Suggestions for originality and authentic expression</li>
              <li>Improvement in structure, coherence, and content accuracy</li>
              <li>Confidential and ethical document handling</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Reference & Citation Validation</h4>
            <ul>
              <li>Checking citations and references (APA, MLA, IEEE, etc.)</li>
              <li>Ensuring proper formatting and in-text citation consistency</li>
              <li>Cross-verification of sources and bibliographic details</li>
              <li>Support for academic and research document submissions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Our Specialized Support</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/learning-plan-icon.png" alt="Language Polishing" />
            <h4>Language Polishing Sessions</h4>
            <p>
              One-on-one proofreading and editing sessions to refine vocabulary,
              tone, and structure — ideal for theses, articles, and creative works.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/emotional-support-icon.png" alt="Editing Guidance" />
            <h4>Expert Editorial Guidance</h4>
            <p>
              Personalized feedback from experienced editors to enhance clarity,
              professionalism, and logical flow in your writing.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/skill-development-icon.png" alt="Academic Editing" />
            <h4>Academic & Research Editing</h4>
            <p>
              Specialized in refining dissertations, journals, and project reports —
              ensuring academic accuracy and linguistic precision.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/parent-training-icon.png" alt="Publication Support" />
            <h4>Publication & Submission Support</h4>
            <p>
              Helping students and professionals format, finalize, and polish their
              work for journals, publishers, and academic institutions.
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
          "Great writing isn’t just about ideas — it’s about clarity, precision, and perfection."
        </p>
      </section>
    </>
  );
}
