import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function TechnicalWriting() {
  const services = [
    {
      title: "Research Paper Writing & Formatting",
      items: [
        "Manuscript structuring and proofreading",
        "Formatting as per journal and conference standards",
        "Reference styling (IEEE, APA, Springer, etc.)",
        "Plagiarism check and content enhancement",
      ],
    },
    {
      title: "Technical Reports & Proposals",
      items: [
        "Creation of detailed project reports (DPR)",
        "Funding proposal preparation (DST, SERB, etc.)",
        "Industrial documentation and progress reports",
        "Executive summaries and presentation writing",
      ],
    },
    {
      title: "Visual & Figure Generation",
      items: [
        "Scientific illustrations using SketchUp & MATLAB",
        "Flowcharts, block diagrams, and schematics",
        "High-resolution figures for publication",
        "Data visualization and infographics",
      ],
    },
    {
      title: "Editing & Review Support",
      items: [
        "Peer-review assistance and manuscript polishing",
        "Language editing and grammar correction",
        "Consistency and compliance check",
        "Final proof editing for submission",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/writing-icon.png",
      title: "Writing Tools",
      description:
        "Expert support using LaTeX, MS Word, PowerPoint, and SketchUp for technical writing and publication-ready outputs.",
    },
    {
      icon: "/research-icon.png",
      title: "Research Communication",
      description:
        "Helping scholars convey complex ideas effectively through clear, concise, and impactful documentation.",
    },
    {
      icon: "/formatting-icon.png",
      title: "Formatting & Compliance",
      description:
        "Ensuring all documents meet journal and institutional requirements for structure, style, and formatting.",
    },
    {
      icon: "/review-icon.png",
      title: "Peer Review & Editing",
      description:
        "Comprehensive review and refinement services to improve the technical clarity and publication readiness of your work.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Technical Writing & Documentation"
        subtitle="Empowering researchers and professionals to present their work clearly, precisely, and effectively through world-class documentation and visual communication."
        bg="/technical.jpg"
      />
      <ServiceWithListGrid sectionTitle="Services" services={services} />
      <SolutionGrid
        sectionTitle="Solutions"
        items={solutions}
        quote="Where technology finds its voice — translating complexity into clarity"
      />
    </>
  );
}
