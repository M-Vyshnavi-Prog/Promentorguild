"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavLinkProps {
  href: string;
  label: string;
  first?: boolean;
}

interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownProps {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  items: DropdownItem[];
  first?: boolean;
}

export default function Navbar() {
  const [isProfessionalOpen, setIsProfessionalOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isStudentOpen, setIsStudentOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Left Section */}
          <div className={styles.navLeft}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="ProMentorGuild Logo"
                width={80}
                height={80}
                className={styles.logo}
              />
            </Link>
            <span className={styles.brand}>ProMentor Guild</span>
          </div>

          {/* Center Section - Links */}
          <div className={styles.navItems}>
            <NavLink href="/" label="Home" first />
            <NavLink href="/leadership" label="Leadership" />
            <Dropdown
              title="For Professionals"
              isOpen={isProfessionalOpen}
              setIsOpen={setIsProfessionalOpen}
              items={[
                { href: "/interior-design", label: "Interior Designing" },
                { href: "/website-design", label: "Website Designing" },
                { href: "/app-development", label: "App Development" },
              ]}
            />
            <Dropdown
              title="For Research"
              isOpen={isResearchOpen}
              setIsOpen={setIsResearchOpen}
              items={[
                { href: "/technology-engineering", label: "Technology & Engineering" },
                { href: "/technical-writing", label: "Technical Writing" },
                { href: "/career-counseling", label: "Career Counseling" },
              ]}
            />
            <Dropdown
              title="For Students"
              isOpen={isStudentOpen}
              setIsOpen={setIsStudentOpen}
              items={[
                { href: "/special-education", label: "Special Education" },
                { href: "/comprehensive-finance", label: "Comprehensive Finance" },
                { href: "/proof-reading", label: "Proof Reading" },
                { href: "/school-subjects", label: "School Subjects" },
              ]}
            />
            <NavLink href="/past-work" label="Past Work" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* Right Section - Search */}
          <div className={styles.navRight}>
            <button className={styles.searchButton} aria-label="Search">
              <Search size={22} color="black" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

// NavLink Component
function NavLink({ href, label, first = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.navItem} ${first ? styles.first : ""}`}
    >
      {label}
    </Link>
  );
}

// Dropdown Component
function Dropdown({
  title,
  isOpen,
  setIsOpen,
  items,
  first = false,
}: DropdownProps) {
  return (
    <div
      className={`${styles.dropdown} ${first ? styles.first : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={styles.dropdownButton}>
        {title}
        <ChevronDown
          size={18}
          className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={styles.dropdownItem}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// HeroSlider Component
function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/slide1.jpg",
      title: "Empower Your Skills",
      subtitle: "Learn. Build. Grow with ProMentor Guild.",
    },
    {
      id: 2,
      image: "/slide2.jpg",
      title: "Shape Your Future",
      subtitle: "Discover opportunities across all domains.",
    },
    {
      id: 3,
      image: "/slide3.jpg",
      title: "Innovate & Lead",
      subtitle: "Join hands with mentors and professionals.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={styles.heroSlider}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
        >
          <div className={styles.slideImageWrapper}>
            <Image src={slide.image} alt={slide.title} fill style={{ objectFit: "contain" }} />
            <div className={styles.slideOverlay}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
