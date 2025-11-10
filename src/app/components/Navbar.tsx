"use client";

import { useState, Dispatch, SetStateAction, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ChevronDown, Menu } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavLinkProps {
  href: string;
  label: string;
  first?: boolean;
  onClick?: (e: MouseEvent) => void;
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
  onItemClick?: () => void;
}

export default function Navbar() {
  const [isProfessionalOpen, setIsProfessionalOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [isPastWorkOpen, setIsPastWorkOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  // Search handler (unchanged)
  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return;

    if (query.includes("home")) router.push("/");
    else if (query.includes("leadership")) router.push("/leadership");

    // For Professionals
    else if (
      query.includes("professional") ||
      query.includes("for professional") ||
      query.includes("for professionals")
    )
      router.push("/For-professionals/interior-design");
    else if (query.includes("interior")) router.push("/For-professionals/interior-design");
    else if (query.includes("website")) router.push("/For-professionals/website-design");
    else if (query.includes("app")) router.push("/For-professionals/app-development");

    // For Research
    else if (
      query.includes("research") ||
      query.includes("researcher") ||
      query.includes("for research")
    )
      router.push("/For-researchers/technology-engineering");
    else if (query.includes("writing")) router.push("/For-researchers/technical-writing");
    else if (query.includes("counselling")) router.push("/For-researchers/carrer-counselling");

    // For Students
    else if (
      query.includes("student") ||
      query.includes("students") ||
      query.includes("for student")
    )
      router.push("/For-students/special-education");
    else if (query.includes("finance")) router.push("/For-students/comprehensive-finance");
    else if (query.includes("proof")) router.push("/For-students/proof-reading");
    else if (query.includes("school")) router.push("/For-students/school-subjects");

    else if (query.includes("past")) router.push("/Past-work");
    else if (query.includes("contact")) router.push("/Contact-Us");
    else alert("Page not found!");

    setIsSearchOpen(false);
    setSearchQuery("");
  };

  // Close the mobile menu after navigating
  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Left */}
        <div className={styles.navLeft}>
          <Link href="/" className={styles.brandlink} onClick={closeMobile}>
            <Image
              src="/logo.png"
              alt="ProMentorGuild Logo"
              width={80}
              height={80}
              className={styles.logo}
            />
            <span className={styles.brand}>ProMentor Guild</span>
          </Link>

          {/* Hamburger (your CSS shows this only ≤768px) */}
          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="pmg-main-nav"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Center – desktop by default; mobile uses `.active` from your CSS */}
        <div
          id="pmg-main-nav"
          className={`${styles.navItems} ${isMobileMenuOpen ? styles.active : ""}`}
        >
          <NavLink href="/" label="Home" first onClick={closeMobile} />
          <NavLink href="/leadership" label="Leadership" onClick={closeMobile} />

          <Dropdown
            title="For Professionals"
            isOpen={isProfessionalOpen}
            setIsOpen={setIsProfessionalOpen}
            items={[
              { href: "/For-professionals/interior-design", label: "Interior Designing" },
              { href: "/For-professionals/website-design", label: "Website Designing" },
              { href: "/For-professionals/app-development", label: "App Development" },
            ]}
            onItemClick={closeMobile}
          />

          <Dropdown
            title="For Research"
            isOpen={isResearchOpen}
            setIsOpen={setIsResearchOpen}
            items={[
              { href: "/For-researchers/technology-engineering", label: "Technology & Engineering" },
              { href: "/For-researchers/technical-writing", label: "Technical Writing" },
              { href: "/For-researchers/carrer-counselling", label: "Career Counselling" },
            ]}
            onItemClick={closeMobile}
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
            onItemClick={closeMobile}
          />

          <Dropdown
            title="Past Work"
            isOpen={isPastWorkOpen}
            setIsOpen={setIsPastWorkOpen}
            items={[
              { href: "/Past-work/interior-design", label: "Interior Design" },
              { href: "/Past-work/engineering-technology", label: "Engineering & Technology" },
            ]}
            onItemClick={closeMobile}
          />
        </div>

        {/* Right (search) */}
        <div className={styles.navRight}>
          <div className={styles.searchWrapper}>
            {isSearchOpen && (
              <>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className={styles.searchInput}
                  autoFocus
                />
                <button
                  className={styles.cancelButton}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  aria-label="Cancel search"
                >
                  <X size={18} color="black" />
                </button>
              </>
            )}

            <button
              className={styles.searchButton}
              onClick={() => {
                if (isSearchOpen && searchQuery.trim()) handleSearch();
                else setIsSearchOpen((prev) => !prev);
              }}
              aria-label="Search"
            >
              <Search size={20} color="black" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ---------- NavLink ---------- */
function NavLink({ href, label, first = false, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.navItem} ${first ? styles.first : ""}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

/* ---------- Dropdown (tap + hover) ---------- */
function Dropdown({
  title,
  isOpen,
  setIsOpen,
  items,
  first = false,
  onItemClick,
}: DropdownProps) {
  const id = `${title.replace(/\s+/g, "-").toLowerCase()}-menu`;

  return (
    <div
      className={`${styles.dropdown} ${first ? styles.first : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen((v) => !v)}   // tap to toggle (mobile)
        aria-expanded={isOpen}
        aria-controls={id}
      >
        {title}
        <ChevronDown size={18} className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`} />
      </button>

      {isOpen && (
        <div id={id} className={styles.dropdownMenu}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.dropdownItem}
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
