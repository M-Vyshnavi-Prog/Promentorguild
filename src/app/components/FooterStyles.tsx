import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #131212;
  color: #333;
  padding: 40px 0;
  border-top: 1px solid #d6d6d6;
  font-family: "Poppins", sans-serif;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Section = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 0.8rem;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: #e6dfdf;
`;

export const SectionSubtitle = styled.h4`
  font-size: 0.8rem;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: #e6dfdf;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 3px;
`;

export const FooterLink = styled.a`
  color: #e6dfdf;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    color: #dfd6d6;
  }
`;

export const FooterText = styled.p`
  color: #e6dfdf;
  font-size: 0.7rem;
  margin-bottom: 8px;

  &:last-of-type {
    margin-top: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  align-items: center;
`;

export const SocialLink = styled.a`
  font-size: 1.4rem;
  color: #e7dede;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #e9dddd;
  }
`;
