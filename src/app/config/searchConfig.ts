/**
 * Search configuration for all pages
 * Add or modify page metadata here to update search functionality
 */

export interface SearchablePage {
  path: string;
  title: string;
  keywords: string[];
  category?: string;
}

export const searchablePages: SearchablePage[] = [
  {
    path: "/",
    title: "Home",
    keywords: ["home", "main", "welcome", "promentor", "guild", "mentoring", "education"],
    category: "main"
  },
  {
    path: "/leadership",
    title: "Leadership",
    keywords: ["leadership", "team", "ceo", "cto", "about", "founders", "kavya", "kalpana"],
    category: "main"
  },
  {
    path: "/For-professionals/interior-design",
    title: "Interior Design & Architecture",
    keywords: ["interior", "design", "architecture", "sketchup", "autocad", "revit", "bim", "3d", "rendering", "modeling", "professional"],
    category: "professionals"
  },
  {
    path: "/For-professionals/website-design",
    title: "Website Design & Development",
    keywords: ["website", "web", "design", "development", "ui", "ux", "react", "nextjs", "frontend", "backend", "html", "css", "javascript", "professional"],
    category: "professionals"
  },
  {
    path: "/For-professionals/app-development",
    title: "App Development",
    keywords: ["app", "mobile", "application", "android", "ios", "flutter", "react native", "development", "professional"],
    category: "professionals"
  },
  {
    path: "/For-researchers/technology-engineering",
    title: "Technology & Engineering",
    keywords: ["technology", "engineering", "research", "embedded", "simulation", "matlab", "iot", "prototype", "pcb", "researcher"],
    category: "researchers"
  },
  {
    path: "/For-researchers/technical-writing",
    title: "Technical Writing",
    keywords: ["writing", "technical", "documentation", "research paper", "manuscript", "publication", "ieee", "latex", "researcher"],
    category: "researchers"
  },
  {
    path: "/For-researchers/carrer-counselling",
    title: "Career Counselling",
    keywords: ["career", "counselling", "counseling", "guidance", "masters", "phd", "doctorate", "admission", "university", "researcher"],
    category: "researchers"
  },
  {
    path: "/For-students/special-education",
    title: "Special Education",
    keywords: ["special", "education", "dyslexia", "adhd", "autism", "learning", "disabilities", "support", "student"],
    category: "students"
  },
  {
    path: "/For-students/comprehensive-finance",
    title: "Comprehensive Finance",
    keywords: ["finance", "accounting", "commerce", "ca", "cs", "mba", "tally", "quickbooks", "financial", "student"],
    category: "students"
  },
  {
    path: "/For-students/proof-reading",
    title: "Proof Reading",
    keywords: ["proof", "reading", "proofreading", "editing", "grammar", "spelling", "language", "correction", "student"],
    category: "students"
  },
  {
    path: "/For-students/school-subjects",
    title: "School Subjects",
    keywords: ["school", "subjects", "mathematics", "science", "biology", "english", "social", "cbse", "icse", "ib", "tutoring", "student"],
    category: "students"
  },
  {
    path: "/Past-work",
    title: "Past Work",
    keywords: ["past", "work", "portfolio", "projects", "gallery", "showcase"],
    category: "portfolio"
  },
  {
    path: "/Past-work/interior-design",
    title: "Past Work - Interior Design",
    keywords: ["interior", "portfolio", "villa", "workspace", "entertainment", "school", "past"],
    category: "portfolio"
  },
  {
    path: "/Past-work/tech-engeneering",
    title: "Past Work - Engineering",
    keywords: ["engineering", "technology", "simulation", "portfolio", "past"],
    category: "portfolio"
  },
  {
    path: "/Contact-Us",
    title: "Contact Us",
    keywords: ["contact", "email", "reach", "form", "apply", "get in touch"],
    category: "main"
  },
];

/**
 * Search function that can be used across the application
 * @param query - Search query string
 * @returns Array of matching pages, sorted by relevance
 */
export const searchPages = (query: string): SearchablePage[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return searchablePages
    .map(page => {
      let score = 0;

      // Exact title match (highest priority)
      if (page.title.toLowerCase() === normalizedQuery) {
        score += 100;
      }
      // Title contains query
      else if (page.title.toLowerCase().includes(normalizedQuery)) {
        score += 50;
      }

      // Check keywords
      page.keywords.forEach(keyword => {
        if (keyword.toLowerCase() === normalizedQuery) {
          score += 30; // Exact keyword match
        } else if (keyword.toLowerCase().includes(normalizedQuery)) {
          score += 10; // Partial keyword match
        } else if (normalizedQuery.includes(keyword.toLowerCase())) {
          score += 5; // Query contains keyword
        }
      });

      return { page, score };
    })
    .filter(result => result.score > 0) // Only return matches
    .sort((a, b) => b.score - a.score) // Sort by relevance
    .map(result => result.page);
};
