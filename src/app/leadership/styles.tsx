"use client";

import styled from 'styled-components';

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
  img { width: 100%; height: 100%; object-fit: cover; }
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
