"use client";

import { HeroSection, Overlay } from "../styles/commonStyles";

interface HeroWithOverlayProps {
  title: string;
  subtitle: string | React.ReactNode;
  bg?: string;
}

export default function HeroWithOverlay({
  title,
  subtitle,
  bg,
}: HeroWithOverlayProps) {
  const backgroundImage = bg ? `url('${bg}')` : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  
  return (
    <HeroSection style={{ backgroundImage }}>
      <Overlay>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Overlay>
    </HeroSection>
  );
}
