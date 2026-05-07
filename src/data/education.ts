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
  period: "2022 — 2027",
  status: "in-progress",
  description:
    "Final-year Computer Engineering student with a strong foundation in software development, data structures, algorithms, and system design.",
  highlights: [
    "Specializing in Software Engineering & Web Technologies",
    "Core coursework: Data Structures, Algorithms, Databases, Networking",
    "Built multiple academic projects applying real-world engineering principles",
    "Final year — expected graduation 2027",
  ],
};
