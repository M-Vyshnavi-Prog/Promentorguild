"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import {
  FooterContainer,
  FooterContent,
  Section,
  SectionTitle,
  SectionSubtitle,
  List,
  ListItem,
  FooterLink,
  FooterText,
  SocialIcons,
  SocialLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <SectionTitle>About Us</SectionTitle>
          <List>
            <ListItem>
              <FooterLink as={Link} href="/the-team">The Team</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink as={Link} href="/company">Company</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink as={Link} href="/reviews">Reviews</FooterLink>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionSubtitle>Explore</SectionSubtitle>
          <List>
            <ListItem>
              <FooterLink as={Link} href="/Contact-Us">Contact Us</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink as={Link} href="/faq">FAQ</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink as={Link} href="/interior-design-blog">Interior Design Blog</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink as={Link} href="/designer-portfolio">Designer Portfolio</FooterLink>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionSubtitle>Location</SectionSubtitle>
          <FooterText>Dubai</FooterText>
          <FooterText>Bangalore</FooterText>
          <FooterText>© {new Date().getFullYear()} Pro Mentor Guild. All rights reserved.</FooterText>
        </Section>

        <Section>
          <SectionSubtitle>Connect With Us</SectionSubtitle>
          <SocialIcons>
            <SocialLink 
              href="https://www.instagram.com/promentor_guild?igsh=aGtvZHFyYnE5Y3Vm" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" aria-label="Facebook">
              <FaFacebookF />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/promentor-guild-a8057b379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <FaXTwitter />
            </SocialLink>
          </SocialIcons>
        </Section>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
