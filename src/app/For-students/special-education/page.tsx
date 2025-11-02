// src/app/For-students/Special-education/page.tsx
import styles from "./special.module.css"; // using same CSS structure

export default function SpecialEducation() {
  return (
    <>
      {/* ✅ Hero Section */}
      <div className={styles.techPage}>
        <div className={styles.overlay}>
          <h1>Special Education</h1>
          <p>
            Providing personalized educational support for children with unique
            learning needs — ensuring inclusion, confidence, and progress for every learner.
          </p>
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Our Focus Areas</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Dyslexia Support</h4>
            <ul>
              <li>Specialized strategies for reading and writing difficulties</li>
              <li>Personalized teaching techniques for better comprehension</li>
              <li>Confidence-building exercises and progress monitoring</li>
              <li>Use of multi-sensory learning tools</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Autism Spectrum Disorder (ASD)</h4>
            <ul>
              <li>Structured learning programs with behavioral support</li>
              <li>Focus on social and communication development</li>
              <li>One-on-one sessions for individualized progress</li>
              <li>Integration of sensory and emotional balance techniques</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>ADHD (Attention Deficit Hyperactivity Disorder)</h4>
            <ul>
              <li>Techniques for improving focus and reducing impulsivity</li>
              <li>Behavioral reinforcement and structured learning environment</li>
              <li>Guided activities for time management and attention span</li>
              <li>Collaboration with parents for continuity at home</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Support for Slow Learners</h4>
            <ul>
              <li>Foundational skill-building in literacy and numeracy</li>
              <li>Customized pace and learning materials</li>
              <li>Encouragement through positive reinforcement</li>
              <li>Development of independent study habits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Key Support Programs</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/learning-plan-icon.png" alt="Learning Plans" />
            <h4>Individualized Learning Plans</h4>
            <p>
              Customized study approaches that adapt to each student’s pace,
              interests, and abilities to promote confident learning.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/emotional-support-icon.png" alt="Behavioral Support" />
            <h4>Behavioral & Emotional Support</h4>
            <p>
              Incorporating mindfulness, positive reinforcement, and structured routines
              to ensure emotional balance and social well-being.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/skill-development-icon.png" alt="Skill Development" />
            <h4>Skill Development Workshops</h4>
            <p>
              Enhancing communication, problem-solving, and social interaction
              through creative and experiential learning sessions.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/parent-training-icon.png" alt="Parent Training" />
            <h4>Parent & Teacher Training</h4>
            <p>
              Empowering caregivers and educators with strategies to support children’s
              development both at school and home effectively.
            </p>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "2rem", fontStyle: "italic", color: "#1a237e" }}>
          "Every child can learn, just not in the same way or on the same day."
        </p>
      </section>
    </>
  );
}
