import Image from "next/image";
import HeroWithOverlay from "../components/HeroWithOverlay";
import { Container, Section, ReverseSection, ImageWrapper, Text, Title, Paragraph, Name } from "../styles/commonStyles";

export default function LeadershipPage() {
  const leaders = [
    {
      role: "CEO's Message",
      bio: (
        <>
          "Welcome to <b>ProMentor Guild</b>". <br />Our goal is to help individuals
          and professionals stay ahead by building real-world skills.
          We bring together experienced mentors who offer hands-on training,
          project support, and personalized learning across technology,
          design, and research.
          <br />
          <br />
          We believe that learning should be flexible, guided by experts,
          and focused on innovation and leadership excellence.
          Whether you're upskilling or mentoring others, we're here to
          support your journey toward growth.
        </>
      ),
      name: (
        <>
          Kavya Dubagunta
          <br />
          Founder & CEO, ProMentor Guild
        </>
      ),
      image: "/ceo.jpg",
      reverse: false,
    },
    {
      role: "CTO's Message",
      bio: (
        <>
          "At <b>ProMentor Guild</b>", <br /> We focus on integrating innovation and technology
          to create the best mentorship experience. Our team continuously
          develops platforms that make learning engaging and practical.
          <br />
          <br />
          Technology is not just about tools, it's about empowering learners
          and mentors to connect, collaborate, and create solutions that
          shape the future.
        </>
      ),
      name: (
        <>
          Kalpana Putrevu
          <br />
          Co-Founder & CTO, ProMentor Guild
        </>
      ),
      image: "/cto.jpg",
      reverse: true,
    },
  ];

  return (
    <>
      <HeroWithOverlay
        title="Our Leadership Team"
        subtitle="Meet the visionary professionals driving ProMentor Guild's mission to empower mentees worldwide."
        bg="/leadership.jpg"
      />

      <Container>
        {leaders.map((leader, idx) => {
          const SectionWrapper = leader.reverse ? ReverseSection : Section;
          return (
            <SectionWrapper key={idx}>
              {!leader.reverse && (
                <ImageWrapper>
                  <Image src={leader.image} alt={leader.role} width={350} height={350} />
                </ImageWrapper>
              )}

              <Text>
                <Title>{leader.role}</Title>
                <Paragraph>{leader.bio}</Paragraph>
                <Name>{leader.name}</Name>
              </Text>

              {leader.reverse && (
                <ImageWrapper>
                  <Image src={leader.image} alt={leader.role} width={350} height={350} />
                </ImageWrapper>
              )}
            </SectionWrapper>
          );
        })}
      </Container>
    </>
  );
}
