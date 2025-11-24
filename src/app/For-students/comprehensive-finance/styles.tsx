"use client";
import styled from "styled-components";

export const HeroSection = styled.div<{ bg?: string }>`
  background-image: url(${(p) => p.bg || "none"});
  background-size: cover;
  background-position: center;
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
  margin: 0 auto;
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 30px 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
