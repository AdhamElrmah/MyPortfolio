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
    role: "Full-Stack Web Development Trainee",
    company: "DEPI — Digital Egypt Pioneers Initiative",
    location: "Egypt",
    type: "Training",
    period: "Oct 2024 — Apr 2025",
    startDate: "2024-10",
    description:
      "Intensive full-stack web development training program by the Egyptian Ministry of Communications. Built production-grade applications using modern technologies and agile methodologies.",
    highlights: [
      "Completed 300+ hours of intensive training in full-stack web development",
      "Led a team of 4 developers to build ByDrive — a full car rental platform as capstone project",
      "Mastered React, Node.js, Express.js, and MongoDB in production workflows",
      "Graduated with distinction among top performers in the cohort",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    icon: "graduation",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Freelance",
    location: "Remote",
    type: "Freelance",
    period: "2024 — Present",
    startDate: "2024-01",
    description:
      "Designing and developing high-performance, visually stunning web applications for clients. Specializing in interactive UIs with modern animation techniques and responsive design systems.",
    highlights: [
      "Built 10+ responsive web applications with pixel-perfect designs",
      "Delivered 3D interactive portfolio achieving sub-2s load time on 4G networks",
      "Implemented advanced scroll-driven animations and micro-interactions",
      "Maintained 100% client satisfaction rate with on-time delivery record",
    ],
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Next.js", "Three.js"],
    icon: "rocket",
  },
  {
    id: 3,
    role: "Software Engineering Student",
    company: "ALX Africa / Holberton School",
    location: "Remote",
    type: "Scholarship",
    period: "2024 — Present",
    startDate: "2024-01",
    description:
      "Rigorous software engineering program focusing on low-level programming, algorithms, and systems design. Building strong foundations in C, Python, and Linux systems.",
    highlights: [
      "Implemented custom printf() — fully compliant C standard library function from scratch",
      "Built and optimized data structures: linked lists, hash tables, binary trees",
      "Developed strong Linux/Unix systems programming skills",
      "Collaborated on peer-reviewed code projects using Git workflows",
    ],
    tech: ["C", "Python", "Linux", "Shell Scripting", "Git", "GDB"],
    icon: "terminal",
  },
];
