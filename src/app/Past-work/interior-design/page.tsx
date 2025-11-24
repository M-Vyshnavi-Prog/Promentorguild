"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  PastWorkSection,
  Banner,
  Overlay,
  Title,
  Subtitle,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureBox,
  FeatureImage,
  ExploreSection,
  ExploreTitle,
  SelectionBox,
  SelectionList,
  SelectionItem,
  SliderContainer,
  ImageGrid,
  ImageWrapper,
  NavButton,
} from "../styles";

import villa1 from "../../../asset/private/villa5000-1.jpg";
import villa2 from "../../../asset/private/villa5000-2.jpg";
import villa3 from "../../../asset/private/villa5000-3.jpg";
import entertainment1 from "../../../asset/private/entertainmentroom-1.jpg";
import entertainment2 from "../../../asset/private/entertainmentroom-2.jpg";
import villa35_1 from "../../../asset/private/villa3500-1.jpg";
import villa35_2 from "../../../asset/private/villa3500-2.jpg";
import villa35_3 from "../../../asset/private/villa3500-3.jpg";
import villa35_4 from "../../../asset/private/villa3500-4.jpg";
import villa35_5 from "../../../asset/private/villa3500-5.jpg";
import villa35_6 from "../../../asset/private/villa3500-6.jpg";
import school_1 from "../../../asset/private/specialneedschool-1.jpg";
import school_2 from "../../../asset/private/specialneedschool-2.jpg";
import school_3 from "../../../asset/private/specialneedschool-3.jpg";
import school_4 from "../../../asset/private/specialneedschool-4.jpg";
import work_1 from "../../../asset/private/workspace-1.jpg";
import work_2 from "../../../asset/private/workspace-2.jpg";
import work_3 from "../../../asset/private/workspace-3.jpg";
import work_4 from "../../../asset/private/workspace-4.jpg";
import work_5 from "../../../asset/private/workspace-5.jpg";
import work_6 from "../../../asset/private/workspace-6.jpg";
import work_7 from "../../../asset/private/workspace-7.jpg";

export default function PastWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("5000 Sqft Villa Interiors");
  const [index, setIndex] = useState(0);

  // ✅ Images grouped by category
  const imagesByCategory: Record<string, StaticImageData[]> = {
    "5000 Sqft Villa Interiors": [villa1, villa2, villa3],
    "3500 Sqft Villa Interiors": [villa35_1, villa35_2, villa35_3, villa35_4, villa35_5, villa35_6],
    "Entertainment Room": [entertainment1, entertainment2],
    "Special Needs School": [school_1, school_2, school_3, school_4],
    "Work Space": [work_1, work_2, work_3, work_4, work_5, work_6, work_7],
  };

  const categories = Object.keys(imagesByCategory);
  const images = imagesByCategory[selectedCategory];

  // ✅ Reset index when changing category
  useEffect(() => {
    setIndex(0);
  }, [selectedCategory]);

  // ✅ Handle looping (manual infinite scroll)
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ Get visible images (2 at a time)
  const getVisibleImages = () => {
    const visibleCount = 2;
    const result: StaticImageData[] = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(images[(index + i) % images.length]); // ✅ Loop around
    }
    return result;
  };

  return (
    <PastWorkSection>
      {/* Banner Section */}
      <Banner>
        <Overlay>
          <Title>Our Past Work</Title>
          <Subtitle>Discover how our designs bring spaces to life</Subtitle>
        </Overlay>
      </Banner>

      {/* Features Section */}
      <FeaturesSection>
        <SectionTitle>What Makes Our Work Stand Out</SectionTitle>

        <FeaturesGrid>
          <FeatureBox>
            <FeatureImage src="/detail.jpg" alt="Attention to Detail" />
            <h3>Attention to Detail</h3>
            <p>
              Every project is crafted with precision, ensuring beauty, balance,
              and harmony in every design.
            </p>
          </FeatureBox>

          <FeatureBox>
            <FeatureImage src="/ideas.jpg" alt="Innovative Ideas" />
            <h3>Innovative Ideas</h3>
            <p>
              We merge creativity and practicality to deliver unique and inspiring
              solutions.
            </p>
          </FeatureBox>

          <FeatureBox>
            <FeatureImage src="/client.jpg" alt="Client-Centric Approach" />
            <h3>Client-Centric Approach</h3>
            <p>
              Your vision leads our process — we work closely with you from concept
              to creation.
            </p>
          </FeatureBox>

          <FeatureBox>
            <FeatureImage src="/quality.jpg" alt="Premium Quality" />
            <h3>Premium Quality</h3>
            <p>
              From material selection to finishing touches, we maintain excellence
              at every step.
            </p>
          </FeatureBox>
        </FeaturesGrid>
      </FeaturesSection>

      {/* Explore Section */}
      <ExploreSection>
        <ExploreTitle>"Step Into the Spaces We’ve Redefined"</ExploreTitle>

        {/* Category Selector */}
        <SelectionBox>
          <SelectionList>
            {categories.map((cat) => (
              <SelectionItem key={cat} onClick={() => setSelectedCategory(cat)} active={selectedCategory === cat}>
                {cat}
              </SelectionItem>
            ))}
          </SelectionList>
        </SelectionBox>

        {/* Image Carousel */}
        <SliderContainer>
          <NavButton style={{ left: 15 }} onClick={prevSlide}>‹</NavButton>

          <ImageGrid>
            {getVisibleImages().map((src: StaticImageData, idx: number) => (
              <ImageWrapper key={idx}>
                <Image src={src} alt={`${selectedCategory} ${idx + 1}`} width={600} height={400} priority />
              </ImageWrapper>
            ))}
          </ImageGrid>

          <NavButton style={{ right: 15 }} onClick={nextSlide}>›</NavButton>
        </SliderContainer>
      </ExploreSection>
    </PastWorkSection>
  );
}
