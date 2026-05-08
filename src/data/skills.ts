export interface Skill {
  name: string;
  iconName: string;
  color: string;
}

// Row 1 — Frontend & UI
export const skillsRow1: Skill[] = [
  { name: "React", iconName: "react", color: "#61DAFB" },
  { name: "TypeScript", iconName: "typescript", color: "#3178C6" },
  { name: "Next.js", iconName: "nextjs", color: "inherit" },
  { name: "Framer Motion", iconName: "framer", color: "#BB4B96" },
  { name: "HTML5", iconName: "html5", color: "#E34F26" },
  { name: "Tailwind CSS", iconName: "tailwind", color: "#06B6D4" },
  { name: "CSS3", iconName: "css3", color: "#1572B6" },
  { name: "JavaScript", iconName: "javascript", color: "#F7DF1E" },
  { name: "shadcn/ui", iconName: "shadcn", color: "inherit" },
];

// Row 2 — Backend & Databases
export const skillsRow2: Skill[] = [
  { name: "Node.js", iconName: "nodejs", color: "#339933" },
  { name: "Express", iconName: "express", color: "inherit" },
  { name: "MongoDB", iconName: "mongodb", color: "#47A248" },
  { name: "Python", iconName: "python", color: "#3776AB" },
  { name: "C++", iconName: "cpp", color: "#00599C" },
  { name: "REST APIs", iconName: "api", color: "#FF6C37" },
  { name: "JWT Auth", iconName: "jwt", color: "#D63AFF" },
  { name: "PostgreSQL", iconName: "postgresql", color: "#4169E1" },
  { name: "GraphQL", iconName: "graphql", color: "#E10098" },
  { name: "Drizzle ORM", iconName: "drizzle", color: "#C5F74F" },
  { name: "Prisma", iconName: "prisma", color: "inherit" },
  { name: "Mongoose", iconName: "mongoose", color: "#880000" },
];

// Row 3 — Tools & DevOps
export const skillsRow3: Skill[] = [
  { name: "Git", iconName: "git", color: "#F05032" },
  { name: "GitHub", iconName: "github", color: "inherit" },
  { name: "VS Code", iconName: "vscode", color: "#007ACC" },
  { name: "Docker", iconName: "docker", color: "#2496ED" },
  { name: "Linux", iconName: "linux", color: "#FCC624" },
  { name: "Ubuntu", iconName: "ubuntu", color: "#E95420" },
  { name: "Vercel", iconName: "vercel", color: "inherit" },
  { name: "Figma", iconName: "figma", color: "#F24E1E" },
  { name: "Three.js", iconName: "threejs", color: "inherit" },
  { name: "AWS", iconName: "aws", color: "#FF9900" },
  { name: "Postman", iconName: "postman", color: "#FF6C37" },
];

export const allSkillRows = [skillsRow1, skillsRow2, skillsRow3];
