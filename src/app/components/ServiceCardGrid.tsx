"use client";

import { ServicesGrid, ServiceCard } from "../styles/commonStyles";

interface ServiceItem {
  title: string;
  content: React.ReactNode; // Can be <ul>, <p>, or mixed JSX
}

interface ServiceCardGridProps {
  items: ServiceItem[];
  sectionTitle?: string;
}

export default function ServiceCardGrid({
  items,
  sectionTitle = "Services",
}: ServiceCardGridProps) {
  return (
    <>
      <h2>{sectionTitle}</h2>
      <ServicesGrid>
        {items.map((item, index) => (
          <ServiceCard key={index}>
            <h4>{item.title}</h4>
            <div>{item.content}</div>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </>
  );
}
