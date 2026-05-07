import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiFigma,
  SiDocker,
  SiThreedotjs,
  SiPostgresql,
  SiGraphql,
  SiJsonwebtokens,
  SiShadcnui,
  SiDrizzle,
  SiPrisma,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi, TbBrandVscode } from "react-icons/tb";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  api: TbApi,
  jwt: SiJsonwebtokens,
  python: SiPython,
  git: SiGit,
  github: SiGithub,
  linux: SiLinux,
  vercel: SiVercel,
  vscode: TbBrandVscode,
  figma: SiFigma,
  docker: SiDocker,
  threejs: SiThreedotjs,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  aws: FaAws,
  shadcn: SiShadcnui,
  drizzle: SiDrizzle,
  prisma: SiPrisma,
  postman: SiPostman,
};

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 20, className = "", style }) => {
  const Icon = iconMap[name];
  if (!Icon) return <SiReact size={size} className={className} style={style} />;
  return <Icon size={size} className={className} style={style} />;
};
