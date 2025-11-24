import { HeroSection, Overlay, ContentSection, ServicesSection, ServicesGrid, ServiceCard, SolutionsSection } from "./styles"; // ✅ Using same CSS layout for consistency

export default function SchoolSubjects() {
  return (
    <>
      <HeroSection bg="/school.jpg">
        <Overlay>
          <h1>School Subjects</h1>
          <p>
            We provide personalized tutoring and academic
            guidance for students from <strong>Grade 5 to Grade 12</strong>, across all major boards —
            including <strong>Indian, UK, and IB curricula</strong>. Our expert mentors ensure
            conceptual clarity, exam readiness, and academic excellence.
          </p>
        </Overlay>
      </HeroSection>

      <ServicesSection>
        <h2>Subjects We Cover</h2>
        <ServicesGrid>
          <ServiceCard>
            <h4>Mathematics</h4>
            <ul>
              <li>Concept-based learning with real-world applications</li>
              <li>Support for ICSE, CBSE, IB, and State Boards</li>
              <li>Step-by-step problem solving and test practice</li>
              <li>Special focus on logical reasoning and analytical skills</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Science</h4>
            <ul>
              <li>Physics, Chemistry, and General Science with practical insights</li>
              <li>Interactive concept breakdown for better retention</li>
              <li>Exam-focused revision and lab-based guidance</li>
              <li>Encouraging curiosity through experiments and visuals</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Biology</h4>
            <ul>
              <li>Detailed understanding through diagrams and flowcharts</li>
              <li>Support for assignments, practicals, and projects</li>
              <li>Chapter-wise quizzes and mock tests</li>
              <li>Focus on conceptual clarity and visual learning</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>English</h4>
            <ul>
              <li>Grammar, comprehension, and creative writing improvement</li>
              <li>Reading and vocabulary-building exercises</li>
              <li>Essay and letter writing practice sessions</li>
              <li>Confidence-building in communication and expression</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Social Science & Humanities</h4>
            <ul>
              <li>History, Geography, Civics, and Economics made engaging</li>
              <li>Conceptual understanding through storytelling and maps</li>
              <li>Regular tests for knowledge reinforcement</li>
              <li>Support for projects, presentations, and assignments</li>
            </ul>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <SolutionsSection>
        <h2>Our Academic Approach</h2>
        <ServicesGrid>
          <ServiceCard>
            <img src="/learning-plan-icon.png" alt="Personalized Plans" />
            <h4>Personalized Learning</h4>
            <p>
              We tailor our teaching methods to match each student’s learning pace,
              ensuring they gain both confidence and conceptual mastery.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/skill-development-icon.png" alt="Interactive Learning" />
            <h4>Interactive Learning</h4>
            <p>
              Our sessions include visual aids, live quizzes, and activity-based
              explanations to make learning fun and effective.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/emotional-support-icon.png" alt="Continuous Support" />
            <h4>Continuous Academic Support</h4>
            <p>
              From homework help to exam preparation, our mentors ensure continuous
              progress tracking and timely feedback for improvement.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/parent-training-icon.png" alt="Parent Collaboration" />
            <h4>Parent Collaboration</h4>
            <p>
              We regularly update parents with student progress reports and provide
              guidance on academic growth strategies at home.
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
          “Learning becomes meaningful when it’s tailored to the learner’s unique journey.”
        </p>
      </SolutionsSection>
    </>
  );
}
