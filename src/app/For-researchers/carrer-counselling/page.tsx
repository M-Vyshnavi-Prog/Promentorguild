// src/app/For-researchers/Career-counseling/page.tsx
import styles from "./carrer.module.css";

export default function CareerCounseling() {
  return (
    <>
      {/* ✅ Hero Section */}
      <div className={styles.techPage}>
        <div className={styles.overlay}>
          <h1>Career Counseling</h1>
          <p>
            We provide expert guidance on pursuing higher education or career opportunities,
            whether it’s a Master’s, PhD, or professional path — all based on each candidate’s
            interests, strengths, and aspirations.
          </p>
        </div>
      </div>

      {/* ✅ Services Section */}
      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <h4>Academic & Career Guidance</h4>
            <ul>
              <li>Identify strengths, interests, and long-term career goals</li>
              <li>Expert counseling for Master’s and PhD programs</li>
              <li>Profile evaluation and career mapping</li>
              <li>Customized guidance for higher studies abroad</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <h4>Skill & Personality Assessment</h4>
            <ul>
              <li>Psychometric and aptitude assessments</li>
              <li>Soft skills and communication evaluation</li>
              <li>Building confidence and goal clarity</li>
              <li>Personalized improvement strategies</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <h4>Career Path Planning</h4>
            <ul>
              <li>Explore career opportunities across domains</li>
              <li>Guidance on job-oriented and research-based roles</li>
              <li>Roadmap creation for short and long-term goals</li>
              <li>Mentorship support for academic or industry careers</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.serviceCard}>
            <h4>Application & Resume Support</h4>
            <ul>
              <li>CV and SOP preparation for universities and jobs</li>
              <li>LinkedIn and personal brand optimization</li>
              <li>Mock interviews and profile enhancement</li>
              <li>Scholarship and funding guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2>Key Solutions</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src="/career-path-icon.png" alt="Career Path" />
            <h4>Personalized Counseling</h4>
            <p>
              One-on-one counseling sessions designed to align your education, skills, and interests 
              with the most rewarding career opportunities.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/assessment-icon.png" alt="Assessment" />
            <h4>Skill Assessment</h4>
            <p>
              Data-driven insights and analytical tools to evaluate your core competencies 
              and match them with emerging professional fields.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/goal-icon.png" alt="Career Planning" />
            <h4>Career Roadmapping</h4>
            <p>
              Step-by-step planning for your academic and professional journey, 
              ensuring clarity and direction at every stage.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <img src="/resume-icon.png" alt="Resume Support" />
            <h4>Profile Enhancement</h4>
            <p>
              Guidance on CV building, networking, and interview preparation 
              to enhance your employability and academic success.
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
          "Guiding dreams into direction and helping you discover your potential to define your future."
        </p>

      </section>
    </>
  );
}
