// src/app/For-researchers/technology-engineering/page.tsx
import { HeroSection, Overlay, ServicesSection, ServicesGrid, ServiceCard, SolutionsSection } from "./styles";

export default function TechnologyEngineering() {
  return (
    <>
      <HeroSection>
        <Overlay>
          <h1>Technology & Engineering</h1>
          <p>
            Advancing innovation through research, simulation, and hands-on
            training in modern engineering technologies and systems.
          </p>
        </Overlay>
      </HeroSection>

      {/* ✅ Services Section */}
      <ServicesSection>
        <h2>Services</h2>
        <ServicesGrid>
          {/* Card 1 */}
          <ServiceCard>
            <h4>Embedded Systems Design</h4>
            <ul>
              <li>Microcontroller & ARM-based development</li>
              <li>Sensor integration and real-time interfacing</li>
              <li>IoT system design and implementation</li>
              <li>Firmware optimization and testing</li>
            </ul>
          </ServiceCard>

          {/* Card 2 */}
          <ServiceCard>
            <h4>Simulation & Modeling</h4>
            <ul>
              <li>MATLAB & Simulink based system modeling</li>
              <li>Circuit simulation using LTSpice</li>
              <li>EM field simulation using CST Microwave Studio</li>
              <li>Thermal & mechanical simulations</li>
            </ul>
          </ServiceCard>

          {/* Card 3 */}
          <ServiceCard>
            <h4>Product Development</h4>
            <ul>
              <li>Prototype design and testing</li>
              <li>PCB design & fabrication support</li>
              <li>Integration of hardware and software modules</li>
              <li>Performance evaluation and optimization</li>
            </ul>
          </ServiceCard>

          {/* Card 4 */}
          <ServiceCard>
            <h4>Research & Innovation Support</h4>
            <ul>
              <li>Guidance for academic and industrial projects</li>
              <li>Publication and documentation assistance</li>
              <li>Simulation-based learning modules</li>
              <li>Mentorship for research students</li>
            </ul>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* ✅ Solutions Section */}
      <SolutionsSection>
        <h2>Solutions</h2>
        <ServicesGrid>
          <ServiceCard>
            <img src="/embedded-icon.png" alt="Embedded Systems" />
            <h4>Embedded Systems</h4>
            <p>
              From concept to code — building efficient embedded hardware and firmware solutions for real-world applications.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/simulation-icon.png" alt="Simulation" />
            <h4>Simulation & Analysis</h4>
            <p>
              High-fidelity simulation using MATLAB, CST, and LTSpice to validate and enhance engineering designs.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/ev-icon.png" alt="EV & Power Systems" />
            <h4>EV & Power Systems</h4>
            <p>
              Research and training in Electric Vehicles, Wireless Power Transfer, and smart energy systems.
            </p>
          </ServiceCard>

          <ServiceCard>
            <img src="/innovation-icon.png" alt="Innovation Support" />
            <h4>Innovation Support</h4>
            <p>
              End-to-end support for engineering innovation, including simulation, prototyping, and academic collaboration.
            </p>
          </ServiceCard>
        </ServicesGrid>
         <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontStyle: "italic",
            color: "#1a237e",
          }}
        >
          "Where technology meets innovation, turning concepts into creations that shape the future."
        </p>

      </SolutionsSection>
    </>
  );
}
