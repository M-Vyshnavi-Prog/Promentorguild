"use client";

import { SolutionsSection, ServicesGrid, ServiceCard } from "../styles/commonStyles";

interface SolutionItem {
  icon: string; // Image path
  title: string;
  description: string;
}

interface SolutionGridProps {
  sectionTitle: string;
  items: SolutionItem[];
  quote?: string; // Optional motivational quote
}

export default function SolutionGrid({
  sectionTitle,
  items,
  quote,
}: SolutionGridProps) {
  return (
    <SolutionsSection>
      <h2>{sectionTitle}</h2>
      <ServicesGrid>
        {items.map((item, index) => (
          <ServiceCard key={index}>
            <img src={item.icon} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
      {quote && (
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontStyle: "italic",
            color: "#1a237e",
          }}
        >
          {quote}
        </p>
      )}
    </SolutionsSection>
  );
}
