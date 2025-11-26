"use client";

import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import {
  HomePage,
  WelcomeSection,
  WelcomeTitle,
  WelcomeText,
  AboutSection,
  AboutContent,
  AboutTitle,
  AboutText,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  CTASection,
  CTATitle,
  CTAText,
  CTAButton,
} from "./styles/homeStyles";

export default function Page() {
  return (
    <HomePage>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Welcome Section */}
      <WelcomeSection>
        <WelcomeTitle>Welcome to ProMentor Guild</WelcomeTitle>
        <WelcomeText>
          Professional guidance for Interior, Website, and App development.
        </WelcomeText>
        <WelcomeText>
          Empowering professionals, researchers, and students.
        </WelcomeText>
      </WelcomeSection>

      {/* About Us Section */}
      <AboutSection>
        <AboutContent>
          <AboutTitle>About Us</AboutTitle>
          <AboutText>
            ProMentor Guild is a platform dedicated to empowering professionals, 
            researchers, and students by offering mentorship and guidance across 
            various fields such as interior design, web development, and app innovation.
          </AboutText>

          {/* Services Grid */}
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>🎨</ServiceIcon>
              <ServiceTitle>For Professionals</ServiceTitle>
              <ServiceDescription>
                Interior Design, Website Development, and App Innovation services 
                tailored for professionals looking to excel in their fields.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🔬</ServiceIcon>
              <ServiceTitle>For Researchers</ServiceTitle>
              <ServiceDescription>
                Technology & Engineering support, Technical Writing assistance, 
                and Career Counselling for aspiring researchers.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🎓</ServiceIcon>
              <ServiceTitle>For Students</ServiceTitle>
              <ServiceDescription>
                Special Education, Comprehensive Finance, Proof Reading, 
                and School Subjects tutoring to help students succeed.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </AboutContent>
      </AboutSection>

      {/* Call to Action Section */}
      <CTASection>
        <CTATitle>Ready to Start Your Journey?</CTATitle>
        <CTAText>
          Join ProMentor Guild today and unlock your potential with expert guidance.
        </CTAText>
        <CTAButton as={Link} href="/Contact-Us">
          Get in Touch
        </CTAButton>
      </CTASection>
    </HomePage>
  );
}
