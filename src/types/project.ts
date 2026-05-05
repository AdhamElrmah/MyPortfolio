export interface ProjectDecision {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github: string;
  
  // New fields for the senior-level project page
  duration: string;
  role: string;
  overview: string;
  problem: string;
  research: string;
  decisions: ProjectDecision[];
  challenges: string;
  outcomes: string;
  gallery?: string[];
  
  // Optional for "Other Projects" section
  industry?: string;
}
