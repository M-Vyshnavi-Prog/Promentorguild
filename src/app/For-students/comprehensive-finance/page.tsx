import { HeroSection, Overlay, ServicesSection, ServicesGrid, ServiceCard, SolutionsSection } from "./styles";

export default function FinanceEducation() {
  return (
    <>
      <HeroSection bg="/finance.jpg">
        <Overlay>
          <h1>Comprehensive Finance</h1>
          <p>
            Empowering commerce and finance students with expert academic support —
            from school to professional levels, helping them master the concepts of
            finance, accounting, and business management with confidence.
          </p>
        </Overlay>
      </HeroSection>

      <ServicesSection>
        <h2>Our Focus Areas</h2>
        <ServicesGrid>
          <ServiceCard>
            <h4>School & Intermediate Level (11th–12th)</h4>
            <ul>
              <li>Comprehensive coverage of Accountancy, Business Studies, and Economics</li>
              <li>Concept-based learning for CBSE, ICSE, IB, and State Boards</li>
              <li>Regular assessments and progress tracking</li>
              <li>Exam-oriented preparation with personalized attention</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Undergraduate & Postgraduate Courses</h4>
            <ul>
              <li>Support for B.Com, BBA, MBA, and M.Com programs</li>
              <li>Detailed guidance in Corporate Finance, Financial Management, and Accounting</li>
              <li>Assistance with assignments, case studies, and presentations</li>
              <li>Crash courses before exams and concept clarification sessions</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Professional Finance Courses</h4>
            <ul>
              <li>Preparation support for CA, ACCA, CMA, CFA, and CS</li>
              <li>Topic-wise mentoring for theory and practical applications</li>
              <li>Practice sessions on problem-solving and financial analysis</li>
              <li>Mock tests and revision plans for exam readiness</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Career & Skill Development</h4>
            <ul>
              <li>Workshops on budgeting, taxation, and financial planning</li>
              <li>Soft-skill and communication training for finance professionals</li>
              <li>Internship and career guidance support</li>
              <li>Hands-on projects with practical business simulations</li>
            </ul>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <SolutionsSection>
        <h2>Key Support Programs</h2>
        <ServicesGrid>
          <ServiceCard>
            <img src="/learning-plan-icon.png" alt="Learning Plans" />
            <h4>Personalized Learning Plans</h4>
            <p>
              Structured study plans tailored to the student’s course, goals, and pace —
              ensuring clarity and confidence in every finance concept.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/emotional-support-icon.png" alt="Guidance Support" />
            <h4>Expert Mentorship & Guidance</h4>
            <p>
              Continuous mentor support for career planning, exam strategies,
              and concept mastery through one-on-one sessions.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/skill-development-icon.png" alt="Skill Development" />
            <h4>Skill Development Workshops</h4>
            <p>
              Focused on analytical thinking, presentation skills, and
              financial decision-making for professional growth.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/parent-training-icon.png" alt="Career Counseling" />
            <h4>Career Counseling & Placement Support</h4>
            <p>
              Helping students identify the right finance career path and
              prepare for internships or professional roles with confidence.
            </p>
          </ServiceCard>
        </ServicesGrid>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontStyle: "italic",
            color: "#1a237e",
          }}
        >
          "Financial literacy is not an option — it’s a necessity for success in today’s world."
        </p>
      </SolutionsSection>
    </>
  );
}
