// src/app/For-professionals/website-design/page.tsx
import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function websiteDesign() {
  const services = [
    {
      title: "UI/UX Design",
      items: [
        "Wireframing & Prototyping",
        "Responsive Layout Design",
        "Figma / Adobe XD",
        "User Interface Optimization",
      ],
    },
    {
      title: "Front-End Development",
      items: [
        "HTML, CSS, JavaScript, TypeScript",
        "React.js / Next.js Development",
        "Cross-Browser Compatibility",
        "Performance Optimization",
      ],
    },
    {
      title: "Back-End Development",
      items: [
        "Node.js / Express.js",
        "Database Integration (MongoDB / MySQL)",
        "RESTful APIs",
        "Authentication & Security",
      ],
    },
    {
      title: "Branding & Visual Design",
      items: [
        "Logo & Color Palette Design",
        "Typography & Iconography",
        "Website Rebranding",
        "Design System Creation",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/web-design-icon.png",
      title: "Responsive Web Design",
      description:
        "Create visually engaging, mobile-friendly websites that work seamlessly on all devices.",
    },
    {
      icon: "/development-icon.png",
      title: "Full Stack Development",
      description:
        "End-to-end website solutions — from user interface to backend logic and database management.",
    },
    {
      icon: "/seo-icon.png",
      title: "SEO & Performance",
      description:
        "Optimize your website for search engines and ensure lightning-fast load times.",
    },
    {
      icon: "/support-icon.png",
      title: "Maintenance & Updates",
      description:
        "Continuous support, bug fixes, and feature updates to keep your website secure and current.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Website Design & Development"
        subtitle="We help individuals and organizations build stunning, responsive, and high-performing websites using the latest tools and technologies."
        bg="/website.jpg"
      />
      <ServiceWithListGrid sectionTitle="Services" services={services} />
      <SolutionGrid
        sectionTitle="Solution's"
        items={solutions}
        quote="Your website is your digital storefront — let's build one that converts."
      />
    </>
  );
}
