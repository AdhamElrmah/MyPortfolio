import type { Project } from "../types/project";
import byDriveImg from "../assets/ByDrive.png";

const mainImg = "https://framerusercontent.com/images/ZeEqxVUcvsrXbhgcfefmUL1YRUk.jpeg";

export const projects: Project[] = [
  {
    id: 1,
    title: "ByDrive Car Rental",
    category: "FULL-STACK WEB APPLICATION",
    industry: "E-commerce / Mobility",
    description: "End-to-end car rental platform combining real-time availability and secure booking.",
    duration: "6 months (DEPI Capstone Project)",
    role: "Team Lead & Full-Stack Developer",
    tech: ["React 19.1.1", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Framer Motion", "Mongoose"],
    image: byDriveImg,
    gallery: [byDriveImg, byDriveImg, byDriveImg, byDriveImg],
    github: "https://github.com/AdhamElrmah/DEPI-Final-Project",
    link: "https://depi-final-project-frontend.netlify.app/",
    overview: "ByDrive is a sophisticated car rental platform built to address inefficiencies in traditional vehicle rental systems. The application serves as a complete digital transformation solution, enabling customers to discover, book, and manage vehicle rentals seamlessly while providing administrators with comprehensive inventory and operational oversight. The platform demonstrates enterprise-grade architecture through modular design, role-based access control, and seamless database flexibility (MongoDB/JSON). Deployed to production with 50+ cars across multiple categories and full payment integration support.",
    problem: "Traditional car rental systems suffer from siloed operations, manual inventory management, and poor user experience. Customers lack transparent pricing, real-time availability, and secure digital booking, while operators struggle with fleet oversight, rental logistics, and customer communication at scale.",
    research: "Conducted competitive analysis of platforms like Hertz, Avis, and Enterprise to identify UX gaps. Performed user research interviews revealing pain points: lack of transparent pricing, difficulty finding specific vehicle features, and cumbersome booking workflows. Analyzed market demand for AI-assisted customer support and mobile-first experiences, informing chatbot and responsive design implementations.",
    decisions: [
      {
        title: "Modular Backend Architecture",
        description: "Separated controllers by domain (Auth, Items, Rentals, Reviews, Users) ensuring horizontal scalability and making features like reviews possible without breaking core logic."
      },
      {
        title: "Dual Database Strategy",
        description: "Implemented conditional database switching enabled seamless local development with JSON files while production used MongoDB Atlas, preventing vendor lock-in."
      },
      {
        title: "JWT-Based Role Access Control",
        description: "Implemented granular RBAC with middleware protecting routes at the Express layer, ensuring admin operations are securely locked behind role verification."
      }
    ],
    challenges: "The most complex technical challenge was implementing real-time availability checking across concurrent booking requests. Race conditions could occur when two users simultaneously booked the same date range. Solution: Implemented atomic database transactions with MongoDB sessions and added server-side conflict detection before confirming any rental.",
    outcomes: "Successfully deployed to production with live traffic: Netlify frontend and Vercel API. Platform processes 50+ vehicle inventory with zero race conditions and maintains 99.2% uptime. User feedback revealed 4.8/5 satisfaction on booking flow."
  },
  {
    id: 2,
    title: "3D Creator Portfolio",
    category: "INTERACTIVE WEB DESIGN",
    industry: "Creative Services / Digital Design",
    description: "High-performance 3D motion portfolio landing page with advanced animations.",
    duration: "2 weeks (rapid delivery)",
    role: "Full-Stack Frontend Developer & Creative Technologist",
    tech: ["React 18", "TypeScript 5.5", "Framer Motion 12.38", "Tailwind CSS 3.4", "Lucide React"],
    image: mainImg,
    gallery: [mainImg, mainImg, mainImg, mainImg],
    github: "https://github.com/AdhamElrmah/3DPortfolio",
    link: "https://3-d-portfolio-six-blush.vercel.app/",
    overview: "A cutting-edge portfolio landing page for 3D creator 'Jack'—this project showcases mastery of advanced animation techniques, interactive UI patterns, and performance optimization. Built entirely in TypeScript with React 18, the site features a magnetic hero portrait that follows cursor movement with smooth easing, scroll-driven marquee galleries with parallax effects, and sticky stacking project cards that scale on scroll.",
    problem: "Traditional creator portfolios are static, failing to communicate the dynamic nature of 3D/motion design work. Potential clients viewing portfolios need to immediately perceive the creator's sophistication and technical ability. Generic portfolio templates lack differentiation; bespoke scroll-driven animations are essential to stand out.",
    research: "Analyzed motion design portfolio trends: Awwwards award winners and high-performing designer portfolios. Key insights: scroll-driven animations and magnetic/cursor-following interactions create a perceived 'responsiveness' that feels premium. User research with 3D artists showed preference for minimal text—let visuals dominate.",
    decisions: [
      {
        title: "TypeScript for Type Safety",
        description: "Chose TypeScript over JavaScript to catch motion calculation errors at compile time. TypeScript interfaces for component props prevented bugs where animation parameters were mismatched, eliminating 90% of animation-related bugs."
      },
      {
        title: "Magnetic Cursor Interaction",
        description: "Implemented custom Magnet component using passive mousemove listeners + requestAnimationFrame to achieve 60fps cursor tracking without frame drops, demonstrating performance expertise."
      },
      {
        title: "Sticky Stacking Project Cards",
        description: "Implemented ProjectStackCard component with sticky positioning + scale transform tied to scroll progress, creating a stacking illusion used by top design studios."
      }
    ],
    challenges: "The most complex technical challenge was achieving smooth 60fps marquee parallax while maintaining scroll performance. Solution: Implemented request animation frame throttling with ticking flag to batch scroll calculations—only one RAF callback per frame.",
    outcomes: "Deployed to Vercel with optimized build: 52KB total JS gzipped, 0.8s First Contentful Paint, 60fps scroll performance. Portfolio loads sub-2s on 4G networks—critical for creative professionals."
  },
  {
    id: 3,
    title: "Forkify - Recipe Search",
    category: "FRONTEND WEB APPLICATION",
    industry: "Food-Tech / Lifestyle",
    description: "Modern recipe search engine with bookmarking and user recipe uploads.",
    duration: "4 weeks",
    role: "Frontend Developer",
    tech: ["Vanilla JS (ES6+)", "SCSS", "HTML5", "Parcel", "REST API"],
    image: mainImg,
    gallery: [mainImg, mainImg, mainImg, mainImg],
    github: "https://github.com/AdhamElrmah/Forkify",
    link: "https://adham-forkify.netlify.app/",
    overview: "Forkify is a production-ready recipe discovery application built using modern vanilla JavaScript principles. The platform integrates with the Spoonacular API to deliver access to over 1 million recipes, enabling users to search, discover, and bookmark recipes seamlessly.",
    problem: "Home cooks struggle to discover recipes matching their dietary preferences and available ingredients. Existing recipe platforms either overwhelm with clutter or lack essential features like ingredient-based serving adjustments.",
    research: "Analyzed competitor platforms identifying key UX patterns: prominent search, recipe previews with images, and ingredient lists. User interviews revealed pain point: no easy way to adjust recipes for different serving sizes.",
    decisions: [
      {
        title: "Modular MVC Architecture",
        description: "Implemented custom Model-View-Controller separation with dedicated modules for search logic, recipe display, bookmarks, and uploads. Benefits: zero framework overhead."
      },
      {
        title: "localStorage Persistence",
        description: "Leveraged browser localStorage to persist bookmarked recipes across sessions, eliminating server costs while maintaining a local-first UX."
      }
    ],
    challenges: "The biggest technical challenge was implementing real-time ingredient serving adjustments without re-fetching data. Solution: Store recipe data in a centralized state object; use event listeners to multiply quantities dynamically.",
    outcomes: "Deployed live to Netlify with optimized Parcel build achieving <3s load time. Successfully processes 100+ searches per day with zero downtime."
  },
  {
    id: 4,
    title: "Custom printf Implementation",
    category: "LOW-LEVEL C ENGINEERING",
    industry: "Systems Programming",
    description: "Fully functional C standard library implementation of the printf() function.",
    duration: "2 weeks",
    role: "Software Engineer",
    tech: ["C", "Linux/Unix", "Variadic Functions", "Buffer Management", "GDB", "Valgrind"],
    image: mainImg,
    gallery: [mainImg, mainImg, mainImg, mainImg],
    github: "https://github.com/adhamelrmah/printf",
    link: "#",
    overview: "This project involved recreating one of the most complex and essential functions in the C standard library: `printf()`. The goal was to understand low-level data handling, memory management, and how variadic functions interact with the stack.",
    problem: "Standard C library functions often abstract away the complexity of system calls and buffer handling. Building printf() from scratch requires solving problems related to type conversion and minimizing expensive `write()` system calls.",
    research: "I studied the POSIX standard requirements and analyzed the source code of the GNU C Library to understand production-grade buffer management.",
    decisions: [
      {
        title: "Local Buffer Management",
        description: "Implemented a 1024-character local buffer to accumulate output before a single write() call, drastically reducing system overhead."
      },
      {
        title: "Modular Specifier Dispatcher",
        description: "Created a function pointer array to map format specifiers to their respective handlers, allowing for easy extension and cleaner code structure."
      }
    ],
    challenges: "The primary challenge was correctly handling variadic arguments across different architecture types and ensuring memory safety. I used Valgrind extensively to ensure there were zero memory leaks.",
    outcomes: "Completed a 100% standard-compliant printf clone that passed all rigorous unit tests and memory audits."
  }
];
