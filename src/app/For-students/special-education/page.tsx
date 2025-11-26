import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function SpecialEducation() {
  const focusAreas = [
    {
      title: "Dyslexia Support",
      items: [
        "Specialized strategies for reading and writing difficulties",
        "Personalized teaching techniques for better comprehension",
        "Confidence-building exercises and progress monitoring",
        "Use of multi-sensory learning tools",
      ],
    },
    {
      title: "ADHD & Focus Challenges",
      items: [
        "Structured learning with attention-building strategies",
        "Task breakdown and time management techniques",
        "Positive reinforcement and behavioral support",
        "Regular engagement and interactive activities",
      ],
    },
    {
      title: "Autism Spectrum Disorders",
      items: [
        "Sensory-aware learning environments",
        "Clear, visual communication methods",
        "Routine-based, structured learning approaches",
        "Social skills and emotional regulation support",
      ],
    },
    {
      title: "General Learning Differences",
      items: [
        "Cognitive ability assessment and support",
        "Alternative learning methods and resources",
        "Speech & language development guidance",
        "Collaborative support with parents & therapists",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/assessment-icon.png",
      title: "Comprehensive Assessment",
      description:
        "Professional evaluation of learning strengths and challenges to design targeted interventions.",
    },
    {
      icon: "/planning-icon.png",
      title: "Customized Learning Plans",
      description:
        "Individualized education strategies tailored to each child's unique learning style.",
    },
    {
      icon: "/support-icon.png",
      title: "Ongoing Support",
      description:
        "Continuous monitoring, adaptation, and encouragement throughout the learning journey.",
    },
    {
      icon: "/collaboration-icon.png",
      title: "Family Collaboration",
      description:
        "Partnership with parents and other professionals for holistic development.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Special Education"
        subtitle="Providing personalized educational support for children with unique learning needs — ensuring inclusion, confidence, and progress for every learner."
        bg="/special.jpg"
      />
      <ServiceWithListGrid sectionTitle="Our Focus Areas" services={focusAreas} />
      <SolutionGrid
        sectionTitle="How We Support"
        items={solutions}
        quote="Every child has unique gifts—we help them discover and nurture them with care and expertise."
      />
    </>
  );
}
