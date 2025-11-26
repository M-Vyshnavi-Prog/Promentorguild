// src/app/For-professionals/interior-design/page.tsx
import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function InteriorDesign() {
  const services = [
    {
      title: "Training & Tools",
      items: [
        "SketchUp",
        "AutoCAD",
        "Revit & BIM",
        "Enscape",
        "V-Ray",
      ],
    },
    {
      title: "Professional Services",
      items: [
        "3D Architectural Modeling",
        "Photorealistic Rendering",
        "Technical Drawing & Layout Documentation",
      ],
    },
    {
      title: "3D Animation for Residential, Commercial & Public Spaces",
      items: [
        "Twin Motion",
      ],
    },
    {
      title: "Adobe",
      items: [
        "Photoshop",
        "InDesign",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/design-icon.png",
      title: "Interior Design",
      description:
        "Transform your spaces with innovative interior design solutions tailored to your needs and style.",
    },
    {
      icon: "/architecture-icon.png",
      title: "Architecture",
      description:
        "We provide modern and sustainable architectural designs that combine functionality and beauty.",
    },
    {
      icon: "/visualization-icon.png",
      title: "3D Visualization",
      description:
        "Bring your projects to life with high-quality 3D rendering and walkthrough animations.",
    },
    {
      icon: "/consulting-icon.png",
      title: "Consulting",
      description:
        "Get expert advice and guidance for architecture, planning, and design implementation.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Architecture and Interior Design"
        subtitle="We offer specialized training in industry-standard design tools and techniques for students, freelance designers, and firms."
        bg="/interior.jpg"
      />
      
      <ServiceWithListGrid sectionTitle="Services" services={services} />
      <SolutionGrid
        sectionTitle="Solutions"
        items={solutions}
        quote="Every room a reflection of you, every detail crafted with care — your dream home awaits."
      />
    </>
  );
}
