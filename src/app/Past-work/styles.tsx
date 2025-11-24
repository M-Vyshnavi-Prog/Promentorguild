"use client";

import styled from 'styled-components';

export const PastWorkSection = styled.section`
  font-family: "Poppins", sans-serif;
  background-color: #f7f9fb;
  color: #333;
  margin-top: 0px;
`;

export const Banner = styled.div`
  background-image: url('/past.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -1px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #f1f1f1;
  max-width: 600px;
  line-height: 1.5;
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
  &:hover { transform: translateY(-8px); box-shadow: 0 8px 18px rgba(0,0,0,0.1); }
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

export const ImageWrapper = styled.div`
  flex: 0 0 48%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

export const Workcard = styled.img`
  min-width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.8);
  color: #333;
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10;
  &:hover { background: #c4a762; color: #fff; }
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

export const SelectionItem = styled.li<{active?: boolean}>`
  font-weight: ${props => (props.active ? 600 : 500)};
  cursor: pointer;
  color: #444;
  padding-bottom: 4px;
  border-bottom: 2px solid ${props => (props.active ? '#1a237e' : 'transparent')};
`;
