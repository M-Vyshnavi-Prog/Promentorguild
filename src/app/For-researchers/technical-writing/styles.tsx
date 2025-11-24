"use client";

import styled from 'styled-components';

export const HeroSection = styled.div`
  background-image: url('/technical.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: visible;
  margin-top: -10px;
  margin-bottom: 0;
  padding-bottom: 0;
  z-index: 1;
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
  h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 10px; }
  p { font-size: 1.2rem; max-width: 800px; line-height: 1.5; }
`;

export const ServicesSection = styled.section`
  background-color: #f9f9f9;
  padding: 60px 20px 100px;
  text-align: center;
  color: #222;
  margin-top: 0;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  justify-items: stretch;
  align-items: stretch;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 0;
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 30px 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: 50px;
  height: 100%;
  width: 100%;
  h4 { font-size: 1.3rem; color: #003366; margin-bottom: 2px; }
  p { font-size: 1rem; color: #444; line-height: 1.5; }
  ul { list-style-type: disc; padding-left: 20px; text-align: left; color: #444; margin: 0; margin-top: 4px; }
  li { margin: 6px 0; line-height: 1.5; font-size: 1rem; transition: all 0.3s ease; }
  li:hover { color: #d4a017; transform: translateX(4px); }
  img { width: 35px; height: 35px; object-fit: contain; margin-bottom: 0.8rem; display: inline-block; padding: 0.1px; background-color: #fff; margin-left: 80px; transform: scale(1.3); }
`;

export const SolutionsSection = styled.section`
  background-color: #fff;
  padding: 40px 20px;
  margin-top: -80px;
  text-align: center;
  color: #222;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
