// src/app/interior-design/page.tsx
import {
  HeroSection,
  Overlay,
  ContentSection,
  GridList,
  ServicesSection,
  ServicesGrid,
  ServiceCard,
  SolutionsSection,
} from './styles';

export default function InteriorDesign() {
  return (
    <>
      <HeroSection>
        <Overlay>
          <h1>Architecture and Interior Design</h1>
          <p>
            We offer specialized training in industry-standard design tools and
            techniques for students, freelance designers, and firms.
          </p>
        </Overlay>
      </HeroSection>

      <ServicesSection>
        <h2>Services</h2>
        <ServicesGrid>
          <ServiceCard>
            <h4>Training &amp; Tools</h4>
            <ul>
              <li>SketchUp</li>
              <li>AutoCAD</li>
              <li>Revit &amp; BIM</li>
              <li>Enscape</li>
              <li>V-Ray</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Professional Services</h4>
            <ul>
              <li>3D Architectural Modeling</li>
              <li>Photorealistic Rendering</li>
              <li>Technical Drawing &amp; Layout Documentation</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>3D Animation for Residential, Commercial &amp; Public Spaces</h4>
            <ul>
              <li>Twin Motion</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Adobe</h4>
            <ul>
              <li>Photoshop</li>
              <li>InDesign</li>
            </ul>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <SolutionsSection>
        <h2>Solution's</h2>
        <ServicesGrid>
          <ServiceCard>
            <img src="/design-icon.png" alt="Design" />
            <h4>Interior Design</h4>
            <p>
              Transform your spaces with innovative interior design solutions
              tailored to your needs and style.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/architecture-icon.png" alt="Architecture" />
            <h4>Architecture</h4>
            <p>
              We provide modern and sustainable architectural designs that
              combine functionality and beauty.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/visualization-icon.png" alt="3D Visualization" />
            <h4>3D Visualization</h4>
            <p>
              Bring your projects to life with high-quality 3D rendering and
              walkthrough animations.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/consulting-icon.png" alt="Consulting" />
            <h4>Consulting</h4>
            <p>
              Get expert advice and guidance for architecture, planning, and
              design implementation.
            </p>
          </ServiceCard>
        </ServicesGrid>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontStyle: 'italic',
            color: '#1a237e',
          }}
        >
          "Every room a reflection of you, every detail crafted with care — your dream home awaits."
        </p>
      </SolutionsSection>
    </>
  );
}
