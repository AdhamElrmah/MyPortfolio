export interface Skill {
  name: string;
  icon: string; // emoji or text shorthand
  level: "Expert" | "Advanced" | "Intermediate" | "Learning";
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", icon: "⚛️", level: "Expert" },
      { name: "TypeScript", icon: "🔷", level: "Advanced" },
      { name: "Next.js", icon: "▲", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🎐", level: "Expert" },
      { name: "Framer Motion", icon: "🎬", level: "Advanced" },
      { name: "HTML5/CSS3", icon: "🌐", level: "Expert" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢", level: "Advanced" },
      { name: "Express.js", icon: "🚂", level: "Advanced" },
      { name: "MongoDB", icon: "🍃", level: "Advanced" },
      { name: "REST APIs", icon: "🔗", level: "Expert" },
      { name: "JWT Auth", icon: "🔐", level: "Advanced" },
      { name: "Python", icon: "🐍", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "📦", level: "Expert" },
      { name: "Linux/Unix", icon: "🐧", level: "Advanced" },
      { name: "Vercel", icon: "▲", level: "Advanced" },
      { name: "VS Code", icon: "💻", level: "Expert" },
      { name: "Figma", icon: "🎨", level: "Intermediate" },
      { name: "Docker", icon: "🐳", level: "Learning" },
    ],
  },
  {
    title: "Currently Learning",
    icon: "🚀",
    skills: [
      { name: "Three.js", icon: "🧊", level: "Learning" },
      { name: "PostgreSQL", icon: "🐘", level: "Learning" },
      { name: "GraphQL", icon: "◈", level: "Learning" },
      { name: "AWS", icon: "☁️", level: "Learning" },
    ],
  },
];
