export interface Education {
  degree: string;
  institution: string;
  shortName: string;
  location: string;
  period: string;
  status: "completed" | "in-progress";
  description: string;
  highlights: string[];
}

export const education: Education = {
  degree: "Bachelor of Computer Engineering",
  institution: "Alexandria Higher Institute of Engineering and Technology",
  shortName: "AIET",
  location: "Alexandria, Egypt",
  period: "2022 — 2027 (Expected)",
  status: "in-progress",
  description:
    "Final-year Computer Engineering student (GPA: 3.0 / 4.0) building full-stack web applications and scalable backend systems. Currently serving as sole frontend engineer on Medora, a multi-tenant clinic management SaaS built by an 11-member graduation team.",
  highlights: [
    "GPA: 3.0 / 4.0 — Expected Graduation 2027",
    "Graduation Project: Sole Frontend Engineer on Medora (Angular 21 SSR, NgRx Signals, PrimeNG, WCAG AA)",
    "Certifications: DEPI React Frontend • ITI Angular Web Development • Beeviro Web Developer Internship",
    "Languages: Arabic (Native) • English (Professional)",
  ],
};
