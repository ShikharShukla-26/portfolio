import type { SiteContentPayload } from "@/lib/validations";

export const defaultSiteContent: SiteContentPayload = {
  site: {
    heroName: "Shikhar Shukla",
    heroSubtitle: "Full Stack Developer | People Research & Talent Acquisition | Behavioral Writer at Substack",
    heroQuote:
      "I become curious whenever reality quietly stops matching the explanation everyone is still using.",
    contactEmail: "hello@example.com",
    substackUrl: "#",
    aboutTitle: "About Shikhar",
    aboutBody:
      "I'm a full stack developer based in Vadodara, India, with 1.5 years of experience building production applications for international clients across the UK, Canada, USA, and the Netherlands.\n\nBut the part of the work I keep returning to is the conversation before the build — the requirement-gathering call, the moment when what a client says they need and what they actually need start to diverge. Finding that gap, and naming it clearly, is where I do my best work.\n\nOn the side, I research and write about behavioral psychology — specifically the moment when accepted explanations stop matching what people actually do. I publish long-form behavioral essays on Substack and conduct qualitative case studies on organizational behavior and product adoption.\n\nI'm currently exploring roles in Technical Recruitment and Behavioral Research, where understanding people's real motivations is the core of the work — not a side effect of it.",
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
  caseStudies: [
    {
      title: "Why Divide-and-Conquer Policies Backfire",
      subtitle: "A Workplace Ethnography",
      description:
        "A three-month insider ethnography documenting how control-based workplace policies produced behavioral outcomes opposite to their intended effect. Includes the Control-Trust-Output Loop framework, boundary condition analysis, testable hypotheses, and consulting recommendations.",
      downloadUrl: "/assets/behaveor_research/Shikhar_BehavioralCaseStudy_SurfaceCompliance.docx",
      downloadLabel: "Download Case Study",
      sortOrder: 0,
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
    { label: "GitHub", url: "https://github.com/ShikharShukla-26", icon: "code", sortOrder: 1 },
    { label: "Twitter", url: "https://twitter.com", icon: "chat", sortOrder: 2 },
    { label: "Email", url: "mailto:hello@example.com", icon: "mail", sortOrder: 3 },
    { label: "Substack", url: "#", icon: "article", sortOrder: 4 },
  ],
};
