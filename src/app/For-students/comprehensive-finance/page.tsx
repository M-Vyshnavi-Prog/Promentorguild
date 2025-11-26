import HeroWithOverlay from "../../components/HeroWithOverlay";
import ServiceWithListGrid from "../../components/ServiceWithListGrid";
import SolutionGrid from "../../components/SolutionGrid";

export default function FinanceEducation() {
  const focusAreas = [
    {
      title: "School & Intermediate Level (11th–12th)",
      items: [
        "Comprehensive coverage of Accountancy, Business Studies, and Economics",
        "Concept-based learning for CBSE, ICSE, IB, and State Boards",
        "Regular assessments and progress tracking",
        "Real-world case studies and practical applications",
      ],
    },
    {
      title: "Professional & Advanced Studies",
      items: [
        "CA (Chartered Accountant) & CS (Company Secretary) guidance",
        "MBA Finance program preparation",
        "Investment & Portfolio Management insights",
        "Financial Planning & Analysis expertise",
      ],
    },
    {
      title: "Practical Skills",
      items: [
        "Tally & QuickBooks Software training",
        "Financial Statement Analysis",
        "Tax Planning & Compliance",
        "Financial Modeling & Valuation",
      ],
    },
    {
      title: "Career Guidance",
      items: [
        "Career options in Finance & Accounting",
        "Resume & Interview Preparation",
        "Internship opportunities guidance",
        "Industry networking support",
      ],
    },
  ];

  const solutions = [
    {
      icon: "/basics-icon.png",
      title: "Financial Literacy",
      description:
        "Master the fundamentals of money management, investments, and financial decision-making.",
    },
    {
      icon: "/analysis-icon.png",
      title: "Advanced Analysis",
      description:
        "Develop expertise in financial analysis, reporting, and strategic planning.",
    },
    {
      icon: "/strategy-icon.png",
      title: "Business Strategy",
      description:
        "Learn how finance drives business decisions and corporate strategy.",
    },
    {
      icon: "/mentorship-icon.png",
      title: "Expert Mentorship",
      description:
        "Get personalized guidance from finance professionals with industry experience.",
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Comprehensive Finance"
        subtitle="Empowering commerce and finance students with expert academic support — from school to professional levels, helping them master the concepts of finance, accounting, and business management with confidence."
        bg="/finance.jpg"
      />
      <ServiceWithListGrid sectionTitle="Our Focus Areas" services={focusAreas} />
      <SolutionGrid
        sectionTitle="Why Choose Us"
        items={solutions}
        quote="Finance is not just about numbers—it's about strategic decision-making for a brighter future."
      />
    </>
  );
}
