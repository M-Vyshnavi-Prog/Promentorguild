// src/app/website-design/page.tsx
import {
  HeroSection,
  Overlay,
  ServicesSection,
  ServicesGrid,
  ServiceCard,
  SolutionsSection,
} from './styles';

export default function websiteDesign() {
  return (
    <>
      <HeroSection>
        <Overlay>
          {/* Optional heading can go here */}
        </Overlay>
      </HeroSection>

      <ServicesSection>
        <h2>Services</h2>
        <ServicesGrid>
          <ServiceCard>
            <h4>UI/UX Design</h4>
            <ul>
              <li>Wireframing & Prototyping</li>
              <li>Responsive Layout Design</li>
              <li>Figma / Adobe XD</li>
              <li>User Interface Optimization</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Front-End Development</h4>
            <ul>
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React.js / Next.js Development</li>
              <li>Cross-Browser Compatibility</li>
              <li>Performance Optimization</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Back-End Development</h4>
            <ul>
              <li>Node.js / Express.js</li>
              <li>Database Integration (MongoDB / MySQL)</li>
              <li>RESTful APIs</li>
              <li>Authentication & Security</li>
            </ul>
          </ServiceCard>

          <ServiceCard>
            <h4>Branding & Visual Design</h4>
            <ul>
              <li>Logo & Color Palette Design</li>
              <li>Typography & Iconography</li>
              <li>Website Rebranding</li>
              <li>Design System Creation</li>
            </ul>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <SolutionsSection>
        <h2>Solution’s</h2>
        <ServicesGrid>
          <ServiceCard>
            <img src="/web-design-icon.png" alt="Web Design" />
            <h4>Responsive Web Design</h4>
            <p>
              Create visually engaging, mobile-friendly websites that work
              seamlessly on all devices.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/development-icon.png" alt="Web Development" />
            <h4>Full Stack Development</h4>
            <p>
              End-to-end website solutions — from user interface to backend
              logic and database management.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/seo-icon.png" alt="SEO" />
            <h4>SEO & Performance</h4>
            <p>
              Improve your site’s visibility and load speed to ensure better
              ranking and user retention.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/support-icon.png" alt="Maintenance" />
            <h4>Website Maintenance</h4>
            <p>
              Keep your website updated, secure, and optimized with ongoing
              support and content updates.
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
          "Crafting smart, stunning websites that turn ideas into impact — designing digital experiences that connect, engage, and grow."
        </p>
      </SolutionsSection>
    </>
  );
}
