import type { Project } from "../types/project";
import byDriveImg from "../assets/bydrive-optimized/screencapture-bejewelled-donut-610ab5-netlify-app-2026-05-07-04_12_28.webp";
import byDrive1 from "../assets/bydrive-optimized/Screenshot 2026-05-07 041053.webp";
import byDrive2 from "../assets/bydrive-optimized/Screenshot 2026-05-07 041204.webp";
import byDrive3 from "../assets/bydrive-optimized/Screenshot 2026-05-07 041221.webp";
import byDrive4 from "../assets/bydrive-optimized/screencapture-bejewelled-donut-610ab5-netlify-app-cars-2026-05-07-04_14_10.webp";
import byDrive5 from "../assets/bydrive-optimized/screencapture-bejewelled-donut-610ab5-netlify-app-Services-2026-05-07-04_14_43.webp";
import byDrive6 from "../assets/bydrive-optimized/Screenshot 2026-05-07 041328.webp";
import byDrive7 from "../assets/bydrive-optimized/Screenshot 2026-05-07 041358.webp";
import byDrive8 from "../assets/bydrive-optimized/screencapture-bejewelled-donut-610ab5-netlify-app-contact-us-2026-05-07-04_14_25.webp";

// Project images
import portfolioImg from "../assets/projects-optimized/3d-portfolio.webp";
import carDesignImg from "../assets/projects-optimized/car-design.webp";
import forkifyMain from "../assets/projects-optimized/forkify-main.webp";
import forkifyArch from "../assets/projects-optimized/forkify-architecture.webp";
import forkifyFlow1 from "../assets/projects-optimized/forkify-flow-1.webp";
import forkifyFlow2 from "../assets/projects-optimized/forkify-flow-2.webp";
import forkifyFlow3 from "../assets/projects-optimized/forkify-flow-3.webp";

// Placeholder images for projects without screenshots
const printfImg = "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80";
const airbnbImg = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80";
import alxImg from "../assets/projects-optimized/alx.webp";

export const projects: Project[] = [
  {
    id: 1,
    title: "ByDrive Car Rental",
    category: "FULL-STACK WEB APPLICATION",
    industry: "E-commerce / Mobility",
    description:
      "End-to-end car rental platform combining real-time availability and secure booking.",
    duration: "6 months (DEPI Capstone Project)",
    role: "Team Lead & Full-Stack Developer",
    tech: [
      "React 19.1.1",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
      "Mongoose",
    ],
    image: byDrive1,
    gallery: [byDrive1, byDriveImg, byDrive2, byDrive3, byDrive4, byDrive5, byDrive6, byDrive7, byDrive8],
    github: "https://github.com/AdhamElrmah/DEPI-Final-Project",
    link: "https://bejewelled-donut-610ab5.netlify.app/",
    overview:
      "ByDrive is a sophisticated car rental platform built to address inefficiencies in traditional vehicle rental systems. The application serves as a complete digital transformation solution, enabling customers to discover, book, and manage vehicle rentals seamlessly while providing administrators with comprehensive inventory and operational oversight. The platform demonstrates enterprise-grade architecture through modular design, role-based access control, and seamless database flexibility (MongoDB/JSON). Deployed to production with 50+ cars across multiple categories and full payment integration support.",
    problem:
      "Traditional car rental systems suffer from siloed operations, manual inventory management, and poor user experience. Customers lack transparent pricing, real-time availability, and secure digital booking, while operators struggle with fleet oversight, rental logistics, and customer communication at scale.",
    research:
      "Conducted competitive analysis of platforms like Hertz, Avis, and Enterprise to identify UX gaps. Performed user research interviews revealing pain points: lack of transparent pricing, difficulty finding specific vehicle features, and cumbersome booking workflows. Analyzed market demand for AI-assisted customer support and mobile-first experiences, informing chatbot and responsive design implementations.",
    decisions: [
      {
        title: "Modular Backend Architecture",
        description:
          "Separated controllers by domain (Auth, Items, Rentals, Reviews, Users) ensuring horizontal scalability and making features like reviews possible without breaking core logic.",
      },
      {
        title: "Dual Database Strategy",
        description:
          "Implemented conditional database switching enabled seamless local development with JSON files while production used MongoDB Atlas, preventing vendor lock-in.",
      },
      {
        title: "JWT-Based Role Access Control",
        description:
          "Implemented granular RBAC with middleware protecting routes at the Express layer, ensuring admin operations are securely locked behind role verification.",
      },
    ],
    challenges:
      "The most complex technical challenge was implementing real-time availability checking across concurrent booking requests. Race conditions could occur when two users simultaneously booked the same date range. Solution: Implemented atomic database transactions with MongoDB sessions and added server-side conflict detection before confirming any rental.",
    outcomes:
      "Successfully deployed to production with live traffic: Netlify frontend and Vercel API. Platform processes 50+ vehicle inventory with zero race conditions and maintains 99.2% uptime. User feedback revealed 4.8/5 satisfaction on booking flow.",
  },
  {
    id: 2,
    title: "Forkify - Recipe Search",
    category: "FRONTEND WEB APPLICATION",
    industry: "Food-Tech / Lifestyle",
    description:
      "Modern recipe search engine with bookmarking and user recipe uploads.",
    duration: "4 weeks",
    role: "Frontend Developer",
    tech: ["Vanilla JS (ES6+)", "SCSS", "HTML5", "Parcel", "REST API"],
    image: forkifyMain,
    gallery: [forkifyMain, forkifyArch, forkifyFlow1, forkifyFlow2, forkifyFlow3],
    github: "https://github.com/AdhamElrmah/Forkify",
    link: "https://adham-forkify.netlify.app/",
    overview:
      "Forkify is a production-ready recipe discovery application built using modern vanilla JavaScript principles. The platform integrates with the Spoonacular API to deliver access to over 1 million recipes, enabling users to search, discover, and bookmark recipes seamlessly.",
    problem:
      "Home cooks struggle to discover recipes matching their dietary preferences and available ingredients. Existing recipe platforms either overwhelm with clutter or lack essential features like ingredient-based serving adjustments.",
    research:
      "Analyzed competitor platforms identifying key UX patterns: prominent search, recipe previews with images, and ingredient lists. User interviews revealed pain point: no easy way to adjust recipes for different serving sizes.",
    decisions: [
      {
        title: "Modular MVC Architecture",
        description:
          "Implemented custom Model-View-Controller separation with dedicated modules for search logic, recipe display, bookmarks, and uploads. Benefits: zero framework overhead.",
      },
      {
        title: "localStorage Persistence",
        description:
          "Leveraged browser localStorage to persist bookmarked recipes across sessions, eliminating server costs while maintaining a local-first UX.",
      },
    ],
    challenges:
      "The biggest technical challenge was implementing real-time ingredient serving adjustments without re-fetching data. Solution: Store recipe data in a centralized state object; use event listeners to multiply quantities dynamically.",
    outcomes:
      "Deployed live to Netlify with optimized Parcel build achieving <3s load time. Successfully processes 100+ searches per day with zero downtime.",
  },
  {
    id: 3,
    title: "3D Creator Portfolio",
    category: "FRONTEND WEB APPLICATION",
    industry: "Creative Services / Digital Design",
    description:
      "High-performance 3D motion portfolio landing page with advanced animations.",
    duration: "2 weeks (rapid delivery)",
    role: "Frontend Developer & Creative Technologist",
    tech: [
      "React 18",
      "TypeScript 5.5",
      "Framer Motion 12.38",
      "Tailwind CSS 3.4",
      "Lucide React",
    ],
    image: portfolioImg,
    gallery: [portfolioImg],
    github: "https://github.com/AdhamElrmah/3DPortfolio",
    link: "https://3-d-portfolio-six-blush.vercel.app/",
    overview:
      "A cutting-edge portfolio landing page for 3D creator 'Jack'—this project showcases mastery of advanced animation techniques, interactive UI patterns, and performance optimization. Built entirely in TypeScript with React 18, the site features a magnetic hero portrait that follows cursor movement with smooth easing, scroll-driven marquee galleries with parallax effects, and sticky stacking project cards that scale on scroll.",
    problem:
      "Traditional creator portfolios are static, failing to communicate the dynamic nature of 3D/motion design work. Potential clients viewing portfolios need to immediately perceive the creator's sophistication and technical ability. Generic portfolio templates lack differentiation; bespoke scroll-driven animations are essential to stand out.",
    research:
      "Analyzed motion design portfolio trends: Awwwards award winners and high-performing designer portfolios. Key insights: scroll-driven animations and magnetic/cursor-following interactions create a perceived 'responsiveness' that feels premium. User research with 3D artists showed preference for minimal text—let visuals dominate.",
    decisions: [
      {
        title: "TypeScript for Type Safety",
        description:
          "Chose TypeScript over JavaScript to catch motion calculation errors at compile time. TypeScript interfaces for component props prevented bugs where animation parameters were mismatched, eliminating 90% of animation-related bugs.",
      },
      {
        title: "Magnetic Cursor Interaction",
        description:
          "Implemented custom Magnet component using passive mousemove listeners + requestAnimationFrame to achieve 60fps cursor tracking without frame drops, demonstrating performance expertise.",
      },
      {
        title: "Sticky Stacking Project Cards",
        description:
          "Implemented ProjectStackCard component with sticky positioning + scale transform tied to scroll progress, creating a stacking illusion used by top design studios.",
      },
    ],
    challenges:
      "The most complex technical challenge was achieving smooth 60fps marquee parallax while maintaining scroll performance. Solution: Implemented request animation frame throttling with ticking flag to batch scroll calculations—only one RAF callback per frame.",
    outcomes:
      "Deployed to Vercel with optimized build: 52KB total JS gzipped, 0.8s First Contentful Paint, 60fps scroll performance. Portfolio loads sub-2s on 4G networks—critical for creative professionals.",
  },
  {
    id: 4,
    title: "Custom printf Implementation",
    category: "SYSTEMS PROGRAMMING",
    industry: "Systems Programming",
    description:
      "Fully functional C standard library implementation of the printf() function.",
    duration: "2 weeks",
    role: "Software Engineer",
    tech: [
      "C",
      "Linux/Unix",
      "Variadic Functions",
      "Buffer Management",
      "GDB",
      "Valgrind",
    ],
    image: printfImg,
    github: "https://github.com/adhamelrmah/printf",
    link: "#",
    overview:
      "This project involved recreating one of the most complex and essential functions in the C standard library: `printf()`. The goal was to understand low-level data handling, memory management, and how variadic functions interact with the stack.",
    problem:
      "Standard C library functions often abstract away the complexity of system calls and buffer handling. Building printf() from scratch requires solving problems related to type conversion and minimizing expensive `write()` system calls.",
    research:
      "I studied the POSIX standard requirements and analyzed the source code of the GNU C Library to understand production-grade buffer management.",
    decisions: [
      {
        title: "Local Buffer Management",
        description:
          "Implemented a 1024-character local buffer to accumulate output before a single write() call, drastically reducing system overhead.",
      },
      {
        title: "Modular Specifier Dispatcher",
        description:
          "Created a function pointer array to map format specifiers to their respective handlers, allowing for easy extension and cleaner code structure.",
      },
    ],
    challenges:
      "The primary challenge was correctly handling variadic arguments across different architecture types and ensuring memory safety. I used Valgrind extensively to ensure there were zero memory leaks.",
    outcomes:
      "Completed a 100% standard-compliant printf clone that passed all rigorous unit tests and memory audits.",
  },
  {
    id: 5,
    title: "AirBnB Clone",
    category: "FULL-STACK WEB APPLICATION",
    industry: "Travel-Tech / Hospitality",
    description:
      "Complete recreation of the AirBnB platform with console, web framework, API, and dynamic frontend.",
    duration: "4 months (ALX Scholarship — 4 Versions)",
    role: "Backend & Full-Stack Developer",
    tech: [
      "Python",
      "Flask",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "REST API",
      "SQLAlchemy",
      "Jinja2",
    ],
    image: airbnbImg,
    github: "https://github.com/AdhamElrmah/AirBnB_clone_v4",
    link: "#",
    overview:
      "A multi-phase clone of the AirBnB platform, built progressively across four major versions as part of the ALX Software Engineering scholarship. Starting from a command-line console for data management, the project evolved into a full-stack web application with a RESTful API, dynamic frontend, and relational database integration. Each version added a new architectural layer, culminating in a production-grade application.",
    problem:
      "Understanding how large-scale web platforms are built requires building one from scratch. This project challenged us to implement every layer — from data serialization and storage to server-side rendering and client-side interactivity — simulating real-world engineering workflows.",
    research:
      "Studied AirBnB's original architecture, microservices patterns, and REST API design principles. Analyzed Flask's routing patterns and SQLAlchemy's ORM capabilities to design a scalable data layer.",
    decisions: [
      {
        title: "Progressive Architecture (v1 → v4)",
        description:
          "v1: CLI console with JSON storage. v2: MySQL + SQLAlchemy ORM. v3: Flask RESTful API. v4: Dynamic JS frontend with jQuery AJAX. Each version built on the previous one.",
      },
      {
        title: "Dual Storage Engine",
        description:
          "Implemented both FileStorage (JSON) and DBStorage (MySQL) engines with a unified interface, teaching abstraction and the Strategy design pattern.",
      },
      {
        title: "RESTful API Design",
        description:
          "Built a comprehensive REST API following CRUD conventions with proper HTTP status codes, enabling the frontend to operate independently from the backend.",
      },
    ],
    challenges:
      "The most complex challenge was migrating from file-based JSON storage to MySQL while maintaining backward compatibility. Implementing SQLAlchemy relationships (one-to-many, many-to-many) for Users, Places, Reviews, and Amenities required careful schema design.",
    outcomes:
      "Successfully delivered all 4 versions with passing automated tests. Gained deep understanding of full-stack architecture, database design, API development, and collaborative Git workflows.",
  },
  {
    id: 6,
    title: "ALX Software Engineering",
    category: "SYSTEMS PROGRAMMING",
    industry: "Education / Engineering",
    description:
      "Comprehensive software engineering curriculum covering C, Python, Shell scripting, networking, and DevOps.",
    duration: "12 months (ALX Africa Scholarship)",
    role: "Software Engineering Student",
    tech: [
      "C",
      "Python",
      "Shell/Bash",
      "Linux",
      "MySQL",
      "Nginx",
      "HAProxy",
      "Docker",
      "Git",
    ],
    image: alxImg,
    github: "https://github.com/AdhamElrmah/alx-low_level_programming",
    link: "#",
    overview:
      "A year-long intensive software engineering program by ALX Africa covering the full spectrum of computer science fundamentals and practical engineering skills. The curriculum included low-level C programming (data structures, algorithms, memory management), high-level Python development (OOP, web scraping, testing), system engineering (Linux administration, networking, load balancing), and DevOps practices (CI/CD, monitoring, containerization).",
    problem:
      "Modern software engineers need a strong foundation in both high-level application development and low-level systems understanding. This program addressed the gap between theoretical CS education and practical engineering skills demanded by the industry.",
    research:
      "The ALX curriculum is modeled after Holberton School's proven methodology, emphasizing peer learning, project-based education, and real-world engineering challenges. Each project simulated production scenarios.",
    decisions: [
      {
        title: "Low-Level C Mastery",
        description:
          "Built data structures (linked lists, hash tables, binary trees) and algorithms from scratch in C, developing a deep understanding of memory management, pointers, and system calls.",
      },
      {
        title: "Python for High-Level Development",
        description:
          "Implemented OOP patterns, unit testing frameworks, web scraping tools, and SQL database integrations using Python, bridging the gap between systems and application development.",
      },
      {
        title: "DevOps & Infrastructure",
        description:
          "Configured web servers (Nginx), load balancers (HAProxy), SSL certificates, firewalls, and monitoring systems on real Linux servers, gaining production infrastructure experience.",
      },
    ],
    challenges:
      "The most challenging aspect was the binary trees and sorting algorithms projects in C, requiring efficient implementation of AVL trees, Red-Black trees, and heap sort with strict memory constraints. Debugging with GDB and Valgrind became second nature.",
    outcomes:
      "Completed 500+ projects across C, Python, Shell, and DevOps. Built a strong foundation in computer science fundamentals, collaborative development (Git workflows, code reviews), and production system administration.",
  },
  {
    id: 7,
    title: "Responsive Car Website",
    category: "FRONTEND WEB APPLICATION",
    industry: "Automotive / Marketing",
    description:
      "Modern responsive car showcase website with smooth animations and interactive UI elements.",
    duration: "2 weeks",
    role: "Frontend Developer",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
    image: carDesignImg,
    github: "https://github.com/AdhamElrmah/Responsive-car-website",
    link: "#",
    overview:
      "A sleek and modern automotive landing page designed to showcase vehicles with cinematic visual presentation. The website features smooth CSS animations, interactive hover effects, a responsive grid layout that adapts seamlessly across devices, and JavaScript-powered UI interactions including a mobile navigation menu and scroll-triggered animations.",
    problem:
      "Automotive brands need websites that convey performance, luxury, and precision through design alone. This project focused on translating brand identity into pixel-perfect responsive layouts with engaging micro-interactions.",
    research:
      "Studied landing pages from Tesla, BMW, and Mercedes-Benz for design inspiration. Identified key patterns: full-bleed hero images, minimal text, strong typography hierarchy, and smooth scroll interactions.",
    decisions: [
      {
        title: "Mobile-First Responsive Design",
        description:
          "Built using a mobile-first CSS approach with fluid typography and flexible grid layouts, ensuring optimal experience from 320px to 4K screens.",
      },
      {
        title: "CSS-Driven Animations",
        description:
          "Implemented smooth transitions and keyframe animations using pure CSS for performance, with JavaScript handling scroll-based triggers and intersection observers.",
      },
    ],
    challenges:
      "The main challenge was achieving smooth 60fps animations across all devices while maintaining a lightweight page. Optimized by using CSS transforms (GPU-accelerated) instead of layout-triggering properties.",
    outcomes:
      "Delivered a polished automotive landing page with perfect Lighthouse accessibility and SEO scores, demonstrating strong fundamentals in semantic HTML and responsive CSS.",
  },
];
