"use client";
import styled from "styled-components";

export const NAVBAR_HEIGHT = "75px";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBAR_HEIGHT};
  background-color: #f5f4f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 65px;
  }
`;

export const NavContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex: 1;
    justify-content: flex-end;
  }
`;

export const BrandLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 15px;
`;

export const Logo = styled.img`
  border-radius: 50%;
  border: 2px solid #832f2f;
  width: 55px;
  height: 55px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const BrandText = styled.span`
  font-family: "Bareya", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #111;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #111;
  padding: 8px;

  @media (max-width: 768px) {
    display: block;
    margin-right: 10px;
  }
`;

export const NavItems = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 40px;

  @media (max-width: 1024px) {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
    height: calc(100vh - 65px);
    background-color: #f5f4f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem 0;
    gap: 12px;
    margin-left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;

export const NavLink = styled.a<{ $first?: boolean }>`
  margin-left: ${(props) => (props.$first ? "0" : "35px")};
  font-family: "Bareya", sans-serif;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  font-weight: 500;
  transition: 0.3s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(2px 4px 6px black);
  }

  @media (max-width: 1024px) {
    font-size: 0.75rem;
    margin-left: ${(props) => (props.$first ? "0" : "20px")};
  }

  @media (max-width: 768px) {
    margin: 8px 0;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const DropdownContainer = styled.div<{ $first?: boolean }>`
  position: relative;
  margin-left: ${(props) => (props.$first ? "0" : "35px")};

  @media (max-width: 1024px) {
    margin-left: ${(props) => (props.$first ? "0" : "20px")};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
    width: 100%;
  }
`;

export const DropdownButton = styled.button`
  font-family: "Bareya", sans-serif;
  color: black;
  font-size: 0.8rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 0;
  text-transform: uppercase;
  transition: 0.3s;
  gap: 6px;

  &:hover {
    filter: drop-shadow(2px 4px 6px black);
  }

  @media (max-width: 1024px) {
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    
    &:hover {
      filter: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #f5f4f0;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  min-width: 230px;
  padding: 12px 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  @media (max-width: 768px) {
    position: static;
    background: #f5f4f0;
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding: 0;
    margin: 0;
    transform: none;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    opacity: 1;
    visibility: visible;
    width: 100%;
  }
`;

export const DropdownItem = styled.a`
  width: 100%;
  padding: 10px;
  text-align: center;
  color: black;
  text-decoration: none;
  font-family: "Bareya", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  transition: 0.3s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #d8d5cf;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 0.9rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background-color: transparent;
    color: #555;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover,
    &:active {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchButton = styled.button`
  margin-left: 80px;
  padding: 6px;
  border-radius: 9999px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #e5e5e5;
  }

  @media (max-width: 1024px) {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 100%;
  right: -60px;
  margin-top: 8px;
  padding: 6px 32px 6px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
  width: 180px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  line-height: 1.4;

  &:focus {
    outline: none;
    border-color: #38a0ad;
    box-shadow: 0 0 4px rgba(56, 160, 173, 0.4);
  }
`;

export const CancelButton = styled.button`
  position: absolute;
  top: calc(100% + 15px);
  right: -55px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: opacity 0.3s ease;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
  }
`;
