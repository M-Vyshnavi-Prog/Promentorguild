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

  // 🔍 Search feature states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 🔍 Handle search logic
  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return;

    if (query.includes("home")) window.location.href = "/";
    else if (query.includes("leadership")) window.location.href = "/leadership";
    else if (query.includes("interior")) window.location.href = "/For-professionals/interior-design";
    else if (query.includes("website")) window.location.href = "/For-professionals/website-design";
    else if (query.includes("app")) window.location.href = "/For-professionals/app-development";
    else if (query.includes("research")) window.location.href = "/For-researchers/technology-engineering";
    else if (query.includes("student")) window.location.href = "/For-students/special-education";
    else if (query.includes("past")) window.location.href = "/past-work";
    else if (query.includes("contact")) window.location.href = "/Contact-Us";
    else alert("Page not found!");

    setIsSearchOpen(false);
    setSearchQuery("");
  };

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
                { href: "/For-professionals/interior-design", label: "Interior Designing" },
                { href: "/For-professionals/website-design", label: "Website Designing" },
                { href: "/For-professionals/app-development", label: "App Development" },
              ]}
            />
            <Dropdown
              title="For Research"
              isOpen={isResearchOpen}
              setIsOpen={setIsResearchOpen}
              items={[
                { href: "/For-researchers/technology-engineering", label: "Technology & Engineering" },
                { href: "/For-researchers/technical-writing", label: "Technical Writing" },
                { href: "/For-researchers/carrer-counselling", label: "Carrer Counselling" },
              ]}
            />
            <Dropdown
              title="For Students"
              isOpen={isStudentOpen}
              setIsOpen={setIsStudentOpen}
              items={[
                { href: "/For-students/special-education", label: "Special Education" },
                { href: "/For-students/comprehensive-finance", label: "Comprehensive Finance" },
                { href: "/For-students/proof-reading", label: "Proof Reading" },
                { href: "/For-students/school-subjects", label: "School Subjects" },
              ]}
            />
            <NavLink href="/Past-work" label="Past Work" />
            <NavLink href="/Contact-Us" label="Contact Us" />
          </div>

          {/* Right Section - Search */}
          <div className={styles.navRight}>
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className={styles.searchInput}
                autoFocus
              />
            ) : (
              <button
                className={styles.searchButton}
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={22} color="black" />
              </button>
            )}
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
