"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  SliderContainer,
  Slide,
  SlideImageWrapper,
  SlideOverlay,
} from "../styles/homeStyles";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/slide1.jpg",
      title: "Empower Your Skills",
      subtitle: "Learn. Build. Grow with ProMentor Guild.",
    },
    {
      id: 2,
      image: "/slide2.jpg",
      title: "Shape Your Future",
      subtitle: "Discover opportunities across all domains.",
    },
    {
      id: 3,
      image: "/slide3.jpg",
      title: "Innovate & Lead",
      subtitle: "Join hands with mentors and professionals.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={slide.id} $active={index === current}>
          <SlideImageWrapper>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <SlideOverlay>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </SlideOverlay>
          </SlideImageWrapper>
        </Slide>
      ))}
    </SliderContainer>
  );
}
