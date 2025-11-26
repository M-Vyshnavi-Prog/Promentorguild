import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function SchoolSubjects() {
  const subjects = [
    {
      title: "Mathematics",
      items: [
        "Concept-based learning with real-world applications",
        "Support for ICSE, CBSE, IB, and State Boards",
        "Step-by-step problem solving and test practice",
        "Special focus on logical reasoning and analytical skills",
      ],
    },
    {
      title: "Science",
      items: [
        "Physics, Chemistry, and General Science with practical insights",
        "Interactive concept breakdown for better retention",
        "Exam-focused revision and lab-based guidance",
        "Encouraging curiosity through experiments and visuals",
      ],
    },
    {
      title: "Biology",
      items: [
        "Detailed understanding through diagrams and flowcharts",
        "Support for assignments, practicals, and projects",
        "Chapter-wise quizzes and mock tests",
        "Focus on conceptual clarity and visual learning",
      ],
    },
    {
      title: "English",
      items: [
        "Grammar, comprehension, and creative writing improvement",
        "Reading and vocabulary-building exercises",
        "Essay and letter writing practice sessions",
        "Confidence-building in communication and expression",
      ],
    },
    {
      title: "Social Science & Humanities",
      items: [
        "History, Geography, Civics, and Economics made engaging",
        "Conceptual understanding through storytelling and maps",
        "Regular tests for knowledge reinforcement",
        "Support for projects, presentations, and assignments",
      ],
    },
  ];

  const approaches = [
    {
      icon: "/learning-plan-icon.png",
      title: "Personalized Learning",
      description:
        "We tailor our teaching methods to match each student's learning pace, ensuring they gain both confidence and conceptual mastery.",
    },
    {
      icon: "/skill-development-icon.png",
      title: "Interactive Learning",
      description:
        "Our sessions include visual aids, live quizzes, and activity-based explanations to make learning fun and effective.",
    },
    {
      icon: "/emotional-support-icon.png",
      title: "Continuous Academic Support",
      description:
        "From homework help to exam preparation, our mentors ensure continuous progress tracking and timely feedback for improvement.",
    },
    {
      icon: "/parent-training-icon.png",
      title: "Parent Collaboration",
      description:
        "We regularly update parents with student progress reports and provide guidance on academic growth strategies at home.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="School Subjects"
        subtitle={
          <>
            We provide personalized tutoring and academic
            guidance for students from <strong>Grade 5 to Grade 12</strong>, across all major boards —
            including <strong>Indian, UK, and IB curricula</strong>. Our expert mentors ensure
            conceptual clarity, exam readiness, and academic excellence.
          </>
        }
        bg="/school.jpg"
      />
      <ServiceWithListGrid sectionTitle="Subjects We Cover" services={subjects} />
      <SolutionGrid
        sectionTitle="Our Academic Approach"
        items={approaches}
        quote="Learning becomes meaningful when it's tailored to the learner's unique journey."
      />
    </>
  );
}
