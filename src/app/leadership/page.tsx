import Image from "next/image";
import { Container, Section, ReverseSection, ImageWrapper, Text, Title, Paragraph, Name } from "./styles";

export default function LeadershipPage() {
  return (
    <Container>
      {/* CEO Section */}
      <Section>
        {/* Left - Image */}
        <ImageWrapper>
          <Image src="/ceo.jpg" alt="CEO" width={350} height={350} />
        </ImageWrapper>

        {/* Right - Text */}
        <Text>
          <Title>CEO’s Message</Title>

          <Paragraph>
            “Welcome to <b>ProMentor Guild</b>". <br />Our goal is to help individuals
            and professionals stay ahead by building real-world skills.
            We bring together experienced mentors who offer hands-on training,
            project support, and personalized learning across technology,
            design, and research.
          </Paragraph>

          <Paragraph>
            We believe that learning should be flexible, guided by experts,
            and focused on innovation and leadership excellence.
            Whether you’re upskilling or mentoring others, we’re here to
            support your journey toward growth.
          </Paragraph>

          <Name>
            Kavya Dubagunta
            <br />
            Founder & CEO, ProMentor Guild
          </Name>
        </Text>
      </Section>

      {/* CTO Section (Reversed Layout) */}
      <ReverseSection>
        {/* Left - Text */}
        <Text>
          <Title>CTO’s Message</Title>

          <Paragraph>
            "At <b>ProMentor Guild</b>", <br /> We focus on integrating innovation and technology
            to create the best mentorship experience. Our team continuously
            develops platforms that make learning engaging and practical.
          </Paragraph>

          <Paragraph>
            Technology is not just about tools, it’s about empowering learners
            and mentors to connect, collaborate, and create solutions that
            shape the future.
          </Paragraph>

          <Name>
            Kalpana Putrevu
            <br />
            Co-Founder & CTO, ProMentor Guild
          </Name>
        </Text>

        {/* Right - Image */}
        <ImageWrapper>
          <Image src="/cto.jpg" alt="CTO" width={350} height={350} />
        </ImageWrapper>
      </ReverseSection>
    </Container>
  );
}
