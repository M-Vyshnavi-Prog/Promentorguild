"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, ChevronDown, Menu } from "lucide-react";
import { searchPages } from "../config/searchConfig";
import {
  Nav,
  NavContainer,
  NavLeft,
  NavRight,
  BrandLink,
  Logo,
  BrandText,
  HamburgerButton,
  NavItems,
  NavLink,
  DropdownContainer,
  DropdownButton,
  ChevronIcon,
  DropdownMenu,
  DropdownItem,
  SearchWrapper,
  SearchButton,
  SearchInput,
  CancelButton,
} from "./NavbarStyles";

interface NavLinkComponentProps {
  href: string;
  label: string;
  first?: boolean;
  onClick?: () => void;
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close all dropdowns when mobile menu closes
  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setIsProfessionalOpen(false);
    setIsResearchOpen(false);
    setIsStudentOpen(false);
    setIsPastWorkOpen(false);
  };

  // Search handler
  const handleSearch = () => {
    const query = searchQuery.trim();
    if (!query) return;

    // Use the centralized search function
    const results = searchPages(query);

    if (results.length > 0) {
      // Navigate to the best match
      router.push(results[0].path);
      setIsSearchOpen(false);
      setSearchQuery("");
    } else {
      alert(`No results found for "${searchQuery}". Try searching for: home, leadership, interior design, website, app, research, finance, school, contact, etc.`);
    }
  };

  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <BrandLink as={Link} href="/" onClick={closeMobile}>
            <Logo src="/logo.png" alt="ProMentorGuild Logo" />
            <BrandText>ProMentor Guild</BrandText>
          </BrandLink>
        </NavLeft>

        <NavItems id="pmg-main-nav" $isOpen={isMobileMenuOpen}>
          <NavLinkComponent href="/" label="Home" first onClick={closeMobile} />
          <NavLinkComponent href="/leadership" label="Leadership" onClick={closeMobile} />

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
              { href: "/Past-work/tech-engeneering", label: "Engineering & Technology" },
            ]}
            onItemClick={closeMobile}
          />
        </NavItems>

        <NavRight>
          <HamburgerButton
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="pmg-main-nav"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </HamburgerButton>

          <SearchWrapper>
            {isSearchOpen && (
              <>
                <SearchInput
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  autoFocus
                />
                <CancelButton
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  aria-label="Cancel search"
                >
                  <X size={18} color="black" />
                </CancelButton>
              </>
            )}

            <SearchButton
              onClick={() => {
                if (isSearchOpen && searchQuery.trim()) handleSearch();
                else setIsSearchOpen((prev) => !prev);
              }}
              aria-label="Search"
            >
              <Search size={20} color="black" />
            </SearchButton>
          </SearchWrapper>
        </NavRight>
      </NavContainer>
    </Nav>
  );
}

/* ---------- NavLinkComponent ---------- */
function NavLinkComponent({ href, label, first = false, onClick }: NavLinkComponentProps) {
  return (
    <NavLink as={Link} href={href} $first={first} onClick={onClick}>
      {label}
    </NavLink>
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

  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <DropdownContainer
      $first={first}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownButton
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        {title}
        <ChevronIcon $isOpen={isOpen}>
          <ChevronDown size={18} />
        </ChevronIcon>
      </DropdownButton>

      <DropdownMenu id={id} $isOpen={isOpen}>
        {items.map((item) => (
          <DropdownItem
            key={item.href}
            as={Link}
            href={item.href}
            onClick={onItemClick}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
}
