export interface Skill {
  name: string;
  iconName: string; // key used to look up the actual icon component
  color: string; // brand color for the skill
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    iconName: "frontend",
    skills: [
      { name: "React", iconName: "react", color: "#61DAFB" },
      { name: "TypeScript", iconName: "typescript", color: "#3178C6" },
      { name: "Next.js", iconName: "nextjs", color: "inherit" },
      { name: "Tailwind CSS", iconName: "tailwind", color: "#06B6D4" },
      { name: "Framer Motion", iconName: "framer", color: "#BB4B96" },
      { name: "HTML5/CSS3", iconName: "html5", color: "#E34F26" },
    ],
  },
  {
    title: "Backend",
    iconName: "backend",
    skills: [
      { name: "Node.js", iconName: "nodejs", color: "#339933" },
      { name: "Express.js", iconName: "express", color: "inherit" },
      { name: "MongoDB", iconName: "mongodb", color: "#47A248" },
      { name: "REST APIs", iconName: "api", color: "#FF6C37" },
      { name: "JWT Auth", iconName: "jwt", color: "#D63AFF" },
      { name: "Python", iconName: "python", color: "#3776AB" },
    ],
  },
  {
    title: "Tools & DevOps",
    iconName: "tools",
    skills: [
      { name: "Git", iconName: "git", color: "#F05032" },
      { name: "Linux/Unix", iconName: "linux", color: "#FCC624" },
      { name: "Vercel", iconName: "vercel", color: "inherit" },
      { name: "VS Code", iconName: "vscode", color: "#007ACC" },
      { name: "Figma", iconName: "figma", color: "#F24E1E" },
      { name: "Docker", iconName: "docker", color: "#2496ED" },
    ],
  },
  {
    title: "Currently Learning",
    iconName: "learning",
    skills: [
      { name: "Three.js", iconName: "threejs", color: "inherit" },
      { name: "PostgreSQL", iconName: "postgresql", color: "#4169E1" },
      { name: "GraphQL", iconName: "graphql", color: "#E10098" },
      { name: "AWS", iconName: "aws", color: "#FF9900" },
    ],
  },
];
