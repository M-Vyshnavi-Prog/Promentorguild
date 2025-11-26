// src/app/For-professionals/app-development/page.tsx
import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function AppDevelopment() {
  const services = [
    {
      title: "Mobile App Development",
      items: [
        "Android App Development (Kotlin / Java)",
        "iOS App Development (Swift)",
        "Cross-Platform Apps (React Native / Flutter)",
        "App Store Deployment & Support",
      ],
    },
    {
      title: "Web App Development",
      items: [
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "Backend Integration with APIs",
        "Database Management (MongoDB / MySQL)",
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        "Wireframes & Interactive Prototypes",
        "Figma / Adobe XD Design",
        "Usability Testing",
        "Design System Implementation",
      ],
    },
    {
      title: "Maintenance & Optimization",
      items: [
        "App Performance Monitoring",
        "Bug Fixes & Security Patches",
        "Feature Enhancements",
        "Regular Updates & Support",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/mobile-icon.png",
      title: "Mobile App Solutions",
      description:
        "Native and hybrid mobile apps designed to perform seamlessly across all devices.",
    },
    {
      icon: "/webapp-icon.png",
      title: "Web Application Development",
      description:
        "Fast, secure, and scalable web apps built using modern frameworks like React and Next.js.",
    },
    {
      icon: "/uiux-icon.png",
      title: "UI/UX Experience",
      description:
        "Beautiful and intuitive designs that provide smooth user interactions and improved engagement.",
    },
    {
      icon: "/supporting-icon.png",
      title: "Ongoing Support",
      description:
        "Continuous monitoring, feature upgrades, and optimization to keep your app running smoothly.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="App Design & Development"
        subtitle="We design and develop scalable, high-performance mobile and web applications that deliver excellent user experiences and meet your business goals."
        bg="/app.jpg"
      />
      <ServiceWithListGrid sectionTitle="Services" services={services} />
      <SolutionGrid
        sectionTitle="Solution's"
        items={solutions}
        quote="Your vision, our code — crafting smart apps for a smarter world."
      />
    </>
  );
}
