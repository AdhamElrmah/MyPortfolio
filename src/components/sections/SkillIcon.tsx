import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiLinux,
  SiVercel,
  SiFigma,
  SiDocker,
  SiThreedotjs,
  SiPostgresql,
  SiGraphql,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  TbApi,
  TbCode,
  TbServer,
  TbTool,
  TbRocket,
} from "react-icons/tb";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  // Skills
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  html5: SiHtml5,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  api: TbApi,
  jwt: SiJsonwebtokens,
  python: SiPython,
  git: SiGit,
  linux: SiLinux,
  vercel: SiVercel,
  vscode: VscCode,
  figma: SiFigma,
  docker: SiDocker,
  threejs: SiThreedotjs,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  aws: FaAws,
  // Category icons
  frontend: TbCode,
  backend: TbServer,
  tools: TbTool,
  learning: TbRocket,
};

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 20, className = "", style }) => {
  const Icon = iconMap[name];
  if (!Icon) return <TbCode size={size} className={className} style={style} />;
  return <Icon size={size} className={className} style={style} />;
};
