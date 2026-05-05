import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "ByDrive",
    category: "CAR RENTAL PLATFORM",
    description: "Full-stack car rental management system with dual-role interfaces.",
    longDescription: "Led a team of 4 developers to build a comprehensive car rental platform. Features secure JWT authentication, real-time vehicle availability, an admin dashboard for business analytics, and a moderated review/rating system.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/adhamelrmah"
  },
  {
    id: 2,
    title: "Custom printf",
    category: "LOW-LEVEL C",
    description: "Fully functional C standard library implementation of printf().",
    longDescription: "Implemented a custom printf() clone in C supporting 16+ format specifiers, flags, and length modifiers. Engineered optimized buffer management and custom specifiers like ROT13 and string reversal using variadic functions.",
    tech: ["C", "Linux/Unix", "CLI", "Algorithms"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
    link: "#",
    github: "https://github.com/adhamelrmah"
  }
];
