"use client";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 4rem 1.5rem;
  gap: 3rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 6rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ReverseSection = styled(Section)`
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 350px;
  height: 350px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Text = styled.div`
  flex: 1;
  text-align: justify;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #374151;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color: #374151;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

export const Name = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #0c0d0f;
`;

// Past-work page shared styles
export const PastWorkSection = styled.section`
  font-family: "Poppins", sans-serif;
  background-color: #f7f9fb;
  color: #333;
  margin-top: 0px;
`;

export const FeaturesSection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #ffffff;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 3rem;
  font-family: "Playfair Display", serif;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  justify-items: center;
`;

export const FeatureBox = styled.div`
  max-width: 270px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #c4a762;
`;

export const ExploreSection = styled.div`
  text-align: center;
  background-color: #ffffff;
  padding: 4rem 2rem;
`;

export const ExploreTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  top: -50px;
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  max-width: 1100px;
  margin: 0 auto;
`;

export const ImageGrid = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 20px;
  justify-content: center;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10;
  &:hover {
    background: #c4a762;
    color: #fff;
  }
`;

export const SelectionBox = styled.div`
  margin: 1.5rem auto;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin-top: -30px;
`;

export const SelectionList = styled.ul`
  display: inline-flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SelectionItem = styled.li<{ $active?: boolean }>`
  font-weight: ${(props) => (props.$active ? 600 : 500)};
  cursor: pointer;
  color: #444;
  padding-bottom: 4px;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "#1a237e" : "transparent")};
`;
// Shared hero/banner used across many pages
export const HeroSection = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  margin-top: -10px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServicesSection = styled.section`
  background-color: #f9f9f9;
  padding: 60px 20px 100px;
  text-align: center;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 30px 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  h4 {
    font-size: 1.3rem;
    color: #003366;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    color: #444;
    line-height: 1.5;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    text-align: left;
    color: #444;
    margin: 0;
    margin-top: 4px;
  }
  li {
    margin: 6px 0;
    line-height: 1.5;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  li:hover {
    color: #d4a017;
    transform: translateX(4px);
  }

  /* center card images so Solution cards align correctly */
  img {
    display: block;
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin: 0 auto 0.8rem;
    background-color: transparent;
  }
`;

export const SolutionsSection = styled.section`
  background-color: #fff;
  padding: 40px 20px;
  margin-top: -80px;
  text-align: center;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default {};
