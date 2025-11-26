import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function TechnologyEngineering() {
  const services = [
    {
      title: "Embedded Systems Design",
      items: [
        "Microcontroller & ARM-based development",
        "Sensor integration and real-time interfacing",
        "IoT system design and implementation",
        "Firmware optimization and testing",
      ],
    },
    {
      title: "Simulation & Modeling",
      items: [
        "MATLAB & Simulink based system modeling",
        "Circuit simulation using LTSpice",
        "EM field simulation using CST Microwave Studio",
        "Thermal & mechanical simulations",
      ],
    },
    {
      title: "Product Development",
      items: [
        "Prototype design and testing",
        "PCB design & fabrication support",
        "Integration of hardware and software modules",
        "Performance evaluation and optimization",
      ],
    },
    {
      title: "Research & Innovation Support",
      items: [
        "Guidance for academic and industrial projects",
        "Publication and documentation assistance",
        "Simulation-based learning modules",
        "Mentorship for research students",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/embedded-icon.png",
      title: "Embedded Systems",
      description:
        "From concept to code — building efficient embedded hardware and firmware solutions for real-world applications.",
    },
    {
      icon: "/simulation-icon.png",
      title: "Simulation & Analysis",
      description:
        "High-fidelity simulation using MATLAB, CST, and LTSpice to validate and enhance engineering designs.",
    },
    {
      icon: "/ev-icon.png",
      title: "EV & Power Systems",
      description:
        "Research and training in Electric Vehicles, Wireless Power Transfer, and smart energy systems.",
    },
    {
      icon: "/innovation-icon.png",
      title: "Innovation Support",
      description:
        "End-to-end support for engineering innovation, including simulation, prototyping, and academic collaboration.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Technology & Engineering"
        subtitle="Advancing innovation through research, simulation, and hands-on training in modern engineering technologies and systems."
        bg="/engeneering.jpg"
      />
      <ServiceWithListGrid sectionTitle="Services" services={services} />
      <SolutionGrid
        sectionTitle="Solutions"
        items={solutions}
        quote="Where technology meets innovation, turning concepts into creations that shape the future."
      />
    </>
  );
}
