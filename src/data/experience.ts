export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Internship" | "Training" | "Scholarship";
  period: string;
  startDate: string; // for sorting
  description: string;
  highlights: string[];
  tech: string[];
  icon: "code" | "briefcase" | "graduation" | "rocket" | "terminal";
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Web Development Intern – Angular",
    company: "Information Technology Institute (ITI)",
    location: "Egypt",
    type: "Internship",
    period: "Aug 2026 — Sep 2026",
    startDate: "2026-08",
    description:
      "Intensive web development internship focused on TypeScript, modern Angular component architecture, client-side routing, services, and REST API integration.",
    highlights: [
      "Studied TypeScript, Angular component architecture, routing, services, and REST API integration in an intensive web development program",
      "Developed modular Angular features with reusable components, form validation, and asynchronous HTTP client communication",
    ],
    tech: ["Angular", "TypeScript", "REST APIs", "HTML5", "CSS3", "Tailwind CSS"],
    icon: "code",
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Beeviro",
    location: "Remote",
    type: "Internship",
    period: "Apr 2026 — Jun 2026",
    startDate: "2026-04",
    description:
      "Collaborated remotely within the web engineering team of a large development organization to build, ship, and maintain multiple production web projects.",
    highlights: [
      "Contributed to multiple web projects as a member of the web team in a large development organization",
      "Delivered tasks assigned by the team lead through ClickUp, tracking each item from assignment to completion",
      "Coordinated daily updates and handoffs with developers and leads in a virtual office",
    ],
    tech: ["TypeScript", "JavaScript", "React", "Git", "ClickUp", "Agile"],
    icon: "briefcase",
  },
  {
    id: 3,
    role: "React Frontend Web Developer – Software Development Track",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Egypt",
    type: "Training",
    period: "Jul 2025 — Jan 2026",
    startDate: "2025-07",
    description:
      "Intensive software development track covering React, TypeScript, Node.js, Express.js, testing, and Docker with a strong focus on web performance and accessibility.",
    highlights: [
      "Trained in React, TypeScript, Node.js, Express.js, Git/GitHub, testing, and Docker, with a focus on performance and accessibility",
      "Delivered ByDrive as Team Lead of 4 developers — a full-stack capstone built with Agile practices, named one of the best projects in the training",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Docker"],
    icon: "graduation",
  },
  {
    id: 4,
    role: "Software Engineer Trainee",
    company: "ALX Software Engineering Scholarship",
    location: "Remote",
    type: "Scholarship",
    period: "Nov 2023 — Aug 2024",
    startDate: "2023-11",
    description:
      "Rigorous software engineering scholarship focused on low-level systems programming in C, data structures, algorithms, Linux/Unix environments, and collaborative Git workflows.",
    highlights: [
      "Built a foundation in C, data structures, algorithms, memory management, and shell scripting",
      "Practiced Git and Linux/Unix workflows through pair programming and peer code reviews",
      "Implemented a custom printf() standard library clone supporting 16+ format specifiers, flags, and length modifiers",
    ],
    tech: ["C", "Linux/Unix", "Shell Scripting", "Data Structures", "Algorithms", "Git"],
    icon: "terminal",
  },
];
