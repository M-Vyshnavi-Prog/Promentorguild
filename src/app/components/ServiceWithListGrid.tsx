"use client";

import {
  ServicesSection,
  ServicesGrid,
  ServiceCard,
} from "../styles/commonStyles";

interface ListServiceItem {
  title: string;
  items: string[]; // Array of bullet points
}

interface ServiceWithListGridProps {
  sectionTitle: string;
  services: ListServiceItem[];
}

export default function ServiceWithListGrid({
  sectionTitle,
  services,
}: ServiceWithListGridProps) {
  return (
    <ServicesSection>
      <h2>{sectionTitle}</h2>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <h4>{service.title}</h4>
            <ul>
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
}
