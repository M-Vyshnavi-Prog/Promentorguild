"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  PastWorkSection,
  Banner,
  Overlay,
  Title,
  Subtitle,
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

import simu1 from "../../../asset/private/simulation-1.png";
import simu2 from "../../../asset/private/simulation-2.png";
import simu3 from "../../../asset/private/simulation-3.png";



export default function PastWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("Simulation");
  const [index, setIndex] = useState(0);

  // ✅ Images grouped by category
  const imagesByCategory: Record<string, StaticImageData[]> = {
    "Simulation": [simu1, simu2, simu3],

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
          <Subtitle>Showcasing our innovative work in technology and engineering excellence.</Subtitle>
        </Overlay>
      </Banner>
      {/* Explore Section */}
      <ExploreSection>
        <ExploreTitle>"Dive into the World We Simulate, Before It’s Built"</ExploreTitle>

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
