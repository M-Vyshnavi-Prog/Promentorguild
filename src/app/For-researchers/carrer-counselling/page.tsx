import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function CareerCounseling() {
  const services = [
    {
      title: "Academic & Career Guidance",
      items: [
        "Identify strengths, interests, and long-term career goals",
        "Expert counseling for Master's and PhD programs",
        "Profile evaluation and career mapping",
        "Customized roadmap for academic & professional success",
      ],
    },
    {
      title: "Application & Admission Support",
      items: [
        "University & Program selection",
        "Statement of Purpose (SOP) & CV writing",
        "Interview preparation and mock sessions",
        "Scholarship & funding opportunities guidance",
      ],
    },
    {
      title: "Postdoctoral & Research Career",
      items: [
        "Postdoc position identification and application strategy",
        "Research funding opportunities (grants & fellowships)",
        "Publication strategy and impact maximization",
        "Industry transition guidance for researchers",
      ],
    },
    {
      title: "Professional Development",
      items: [
        "Network building and mentor connection",
        "Personal branding and online presence",
        "Communication skills for academics",
        "Leadership and collaboration expertise",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/masters-icon.png",
      title: "Master's Programs",
      description:
        "Navigate the best Master's programs worldwide aligned with your research interests and career goals.",
    },
    {
      icon: "/phd-icon.png",
      title: "PhD & Doctorate",
      description:
        "Strategic planning and support for pursuing advanced research degrees at top institutions.",
    },
    {
      icon: "/industry-icon.png",
      title: "Industry Career",
      description:
        "Transition from academia to industry roles with market-relevant skills and positioning.",
    },
    {
      icon: "/research-icon.png",
      title: "Research Excellence",
      description:
        "Build a strong research profile, publish impactfully, and establish yourself as a thought leader.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Career Counseling"
        subtitle="We provide expert guidance on pursuing higher education or career opportunities, whether it's a Master's, PhD, or professional path — all based on each candidate's interests, strengths, and aspirations."
        bg="/carrer.jpg"
      />
      <ServiceWithListGrid sectionTitle="Our Services" services={services} />
      <SolutionGrid
        sectionTitle="Career Paths We Guide"
        items={solutions}
        quote="Your career is a journey, not a destination—let's chart the right path together."
      />
    </>
  );
}
