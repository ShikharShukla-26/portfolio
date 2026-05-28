import type { SiteContentPayload } from "@/lib/validations";

export const defaultSiteContent: SiteContentPayload = {
  site: {
    heroName: "Shikhar Shukla",
    heroSubtitle: "Full Stack Developer & Behavioral Product Researcher",
    heroQuote:
      "I build products and study why people use them the way they do.",
    contactEmail: "hello@example.com",
    substackUrl: "#",
    aboutTitle: "About Shikhar",
    aboutBody:
      "I'm a full stack developer who got curious about why people use products the way they do. I build web applications for clients across USA, UK and Canada. On the side I write about human behavior and technology — mostly by observing myself making the same mistakes repeatedly.",
    footerTagline: "© 2024 Shikhar Shukla. Built for performance.",
  },
  engineeringProjects: [
    {
      title: "Shiv Trans Inc",
      country: "USA",
      description:
        "Logistics website platform developed for a USA-based client.",
      tags: ["Next.js", "TypeScript"],
      icon: "local_shipping",
      projectUrl: "#",
      sortOrder: 0,
    },
    {
      title: "Booksly",
      country: "UK",
      description:
        "VAT reconciliation platform engineered for complex UK tax flows.",
      tags: ["Next.js", "NestJS", "MongoDB"],
      icon: "receipt_long",
      projectUrl: "#",
      sortOrder: 1,
    },
    {
      title: "Appear Appraisals",
      country: "Canada",
      description:
        "Real estate appraisal platform streamlining property evaluation.",
      tags: ["React", "Laravel"],
      icon: "real_estate_agent",
      projectUrl: "#",
      sortOrder: 2,
    },
    {
      title: "OPD.CARE",
      country: "Global",
      description:
        "Healthcare platform optimizing patient-doctor scheduling flows.",
      tags: ["MySQL", "React"],
      icon: "medical_services",
      projectUrl: "#",
      sortOrder: 3,
    },
  ],
  thinkingItems: [
    {
      title: '"YouTube Is Not Your Problem. Tomorrow Is."',
      description:
        "An exploration of behavioral procrastination and temporal discounting in digital consumption.",
      linkUrl: "#",
      sortOrder: 0,
    },
    {
      title: '"How YouTube Controls Your Thinking Before You Notice."',
      description:
        "Analyzing algorithmic influence and the illusion of agency in suggestion-driven interfaces.",
      linkUrl: "#",
      sortOrder: 1,
    },
  ],
  socialLinks: [
    { label: "LinkedIn", url: "https://linkedin.com", icon: "link", sortOrder: 0 },
    { label: "Twitter", url: "https://twitter.com", icon: "chat", sortOrder: 1 },
    { label: "Email", url: "mailto:hello@example.com", icon: "mail", sortOrder: 2 },
    { label: "Substack", url: "#", icon: "article", sortOrder: 3 },
  ],
};
