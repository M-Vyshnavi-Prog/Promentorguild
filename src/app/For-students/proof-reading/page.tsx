import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function ProofReading() {
  const services = [
    {
      title: "Grammar and Spelling Checks",
      items: [
        "Accurate correction of grammatical, spelling, and typographical errors",
        "Ensures clarity and correctness across all content types",
        "Enhances language fluency and overall readability",
        "Consistency checks for style, tone, and terminology",
      ],
    },
    {
      title: "Structural Editing",
      items: [
        "Organization and flow improvement",
        "Logical progression of ideas",
        "Paragraph restructuring for clarity",
        "Elimination of redundant or awkward phrasing",
      ],
    },
    {
      title: "Language Enhancement",
      items: [
        "Vocabulary optimization and enrichment",
        "Sentence variation and complexity improvement",
        "Tense and voice consistency",
        "Professional and academic tone refinement",
      ],
    },
    {
      title: "Format & Citation",
      items: [
        "APA, MLA, Chicago, and Harvard style compliance",
        "Proper formatting of references and citations",
        "Bibliography organization",
        "Document layout and presentation enhancement",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/student-icon.png",
      title: "Student Assignments",
      description:
        "Perfect essays, reports, and theses with polished writing and improved grades.",
    },
    {
      icon: "/research-icon.png",
      title: "Research Papers",
      description:
        "Professional proofreading for academic rigor, clarity, and publication-ready quality.",
    },
    {
      icon: "/professional-icon.png",
      title: "Professional Documents",
      description:
        "Business reports, emails, and content that convey professionalism and authority.",
    },
    {
      icon: "/content-icon.png",
      title: "Creative Content",
      description:
        "Blog posts, articles, and creative writing polished to engage and impress readers.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Proof Reading"
        subtitle="We offer expert proofreading and language enhancement services in both English and Hindi — designed for students, researchers, professionals, and content creators to refine and perfect their written communication."
        bg="/reading.jpg"
      />
      <ServiceWithListGrid sectionTitle="Our Services Include" services={services} />
      <SolutionGrid
        sectionTitle="Who We Help"
        items={solutions}
        quote="Perfect writing opens doors—let us help you make every word count."
      />
    </>
  );
}
