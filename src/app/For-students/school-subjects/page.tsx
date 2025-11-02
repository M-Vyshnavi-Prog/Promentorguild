import styles from "./school.module.css"; // ✅ Using same CSS layout for consistency

export default function SchoolSubjects() {
  return (
    <>
      {/* ✅ Hero Section */}
      <div className={styles["school-page"]}>
        <div className={styles.overlay}>
          <h1>School Subjects</h1>
          <p>
             We provide personalized tutoring and academic
            guidance for students from <strong>Grade 5 to Grade 12</strong>, across all major boards —
            including <strong>Indian, UK, and IB curricula</strong>. Our expert mentors ensure
            conceptual clarity, exam readiness, and academic excellence.
          </p>
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Subjects We Cover</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Mathematics</h4>
            <ul>
              <li>Concept-based learning with real-world applications</li>
              <li>Support for ICSE, CBSE, IB, and State Boards</li>
              <li>Step-by-step problem solving and test practice</li>
              <li>Special focus on logical reasoning and analytical skills</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Science</h4>
            <ul>
              <li>Physics, Chemistry, and General Science with practical insights</li>
              <li>Interactive concept breakdown for better retention</li>
              <li>Exam-focused revision and lab-based guidance</li>
              <li>Encouraging curiosity through experiments and visuals</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>Biology</h4>
            <ul>
              <li>Detailed understanding through diagrams and flowcharts</li>
              <li>Support for assignments, practicals, and projects</li>
              <li>Chapter-wise quizzes and mock tests</li>
              <li>Focus on conceptual clarity and visual learning</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>English</h4>
            <ul>
              <li>Grammar, comprehension, and creative writing improvement</li>
              <li>Reading and vocabulary-building exercises</li>
              <li>Essay and letter writing practice sessions</li>
              <li>Confidence-building in communication and expression</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className={styles.serviceCard}>
            <h4>Social Science & Humanities</h4>
            <ul>
              <li>History, Geography, Civics, and Economics made engaging</li>
              <li>Conceptual understanding through storytelling and maps</li>
              <li>Regular tests for knowledge reinforcement</li>
              <li>Support for projects, presentations, and assignments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Our Academic Approach</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/learning-plan-icon.png" alt="Personalized Plans" />
            <h4>Personalized Learning</h4>
            <p>
              We tailor our teaching methods to match each student’s learning pace,
              ensuring they gain both confidence and conceptual mastery.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/skill-development-icon.png" alt="Interactive Learning" />
            <h4>Interactive Learning</h4>
            <p>
              Our sessions include visual aids, live quizzes, and activity-based
              explanations to make learning fun and effective.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/emotional-support-icon.png" alt="Continuous Support" />
            <h4>Continuous Academic Support</h4>
            <p>
              From homework help to exam preparation, our mentors ensure continuous
              progress tracking and timely feedback for improvement.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/parent-training-icon.png" alt="Parent Collaboration" />
            <h4>Parent Collaboration</h4>
            <p>
              We regularly update parents with student progress reports and provide
              guidance on academic growth strategies at home.
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
          “Learning becomes meaningful when it’s tailored to the learner’s unique journey.”
        </p>
      </section>
    </>
  );
}
