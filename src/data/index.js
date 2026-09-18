import {
  hoobank,
  medwin,
  obysagency,
  codesync,
  pathforge,
  hockeyiitbhu,
} from "../assets";

import GithubIcon from "../assets/github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import MailIcon from "../assets/mail.svg?react";
import LocationIcon from "../assets/location.svg?react";

export const navLinks = [
  {
    id: "about",
    label: "About",
    href: "about",
  },
  {
    id: "education",
    label: "Education",
    href: "education",
  },
  {
    id: "skills",
    label: "Skills",
    href: "skills",
  },
  {
    id: "projects",
    label: "Projects",
    href: "projects",
  },
  {
    id: "contact",
    label: "Contact",
    href: "contact",
  },
];

export const education = {
  primary: {
    degree: "Bachelor of Technology",
    stream: "Mining Engineering",
    institute: "Indian Institute of Technology (BHU), Varanasi",
    timeline: "2023 — Present",
    score: "6.80 CGPA",
    details:
      "Core engineering curriculum alongside rigorous coursework in algorithmic problem solving, software systems, and data structures.",
  },
  secondary: [
    {
      id: "12th",
      title: "Class XII (Senior Secondary)",
      score: "78.60%",
      board: "Science — RBSE",
      year: "2022",
      institute: "Govt. Sr. Sec. School Kumher, Bharatpur (Rajasthan)",
    },
    {
      id: "10th",
      title: "Class X (Secondary)",
      score: "77.67%",
      board: "General — RBSE",
      year: "2020",
      institute: "Govt. Sr. Sec. School Bailara Kalan, Kumher, Bharatpur (Rajasthan)",
    },
  ],
};

export const achievements = [
  {
    year: "2025",
    title: "VICE CAPTAIN",
    subtitle: "IIT (BHU) Hockey Team",
    event: "Spardha — IIT (BHU) Varanasi",
    badge: "LEADERSHIP",
  },
  {
    year: "2025",
    title: "BRONZE MEDAL",
    subtitle: "Inter-Collegiate Hockey",
    event: "Sangram — IIT Roorkee",
    badge: "COMPETITION",
  },
  {
    year: "2025",
    title: "INTER-IIT REPRESENTATIVE",
    subtitle: "Represented IIT (BHU) Varanasi",
    event: "Inter-IIT Sports Meet — Hockey",
    badge: "INSTITUTE HONOR",
  },
  {
    year: "2024",
    title: "GOLD MEDAL",
    subtitle: "Inter-Collegiate Hockey",
    event: "Spardha — IIT (BHU) Varanasi",
    badge: "CHAMPION",
  },
  {
    year: "2024",
    title: "BRONZE MEDAL",
    subtitle: "Inter-Collegiate Hockey",
    event: "Udghosh — IIT Kanpur",
    badge: "COMPETITION",
  },
];

export const skillCategories = [
  {
    id: "languages",
    category: "LANGUAGES",
    skills: ["C++", "JavaScript", "TypeScript"],
  },
  {
    id: "frontend",
    category: "FRONTEND",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    category: "BACKEND",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
  },
  {
    id: "databases",
    category: "DATABASES",
    skills: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    id: "auth-security",
    category: "AUTHENTICATION & SECURITY",
    skills: ["JWT", "Cookies", "Zod", "Argon2", "Helmet", "CORS", "Rate Limiting", "Sessions"],
  },
  {
    id: "tools",
    category: "TOOLS & DEPLOYMENT",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Cloudinary", "VS Code", "ImageKit"],
  },
];

export const projects = [
  {
    id: "codesync-ai",
    num: "01",
    title: "CodeSync AI",
    category: "FULL STACK",
    type: "FULL STACK / REAL-TIME / AI",
    featured: true,
    description:
      "Real-time collaborative code editor with AI-assisted developer workflows, low-latency document sync, and containerized execution.",
    techs: ["React", "TypeScript", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Real-time multi-user document synchronization via Socket.IO",
      "AI-assisted developer completions & workflow assistance",
      "Isolated containerized execution environment powered by Docker",
      "High-throughput caching & state persistence with Redis and PostgreSQL",
    ],
    live: "https://code-sync-ai-tan.vercel.app/",
    github: "https://github.com/niranjan05Kumar/codesync-ai",
    image: codesync,
    tagline: "Real-time collaborative code editor with AI workflows",
  },
  {
    id: "pathforge",
    num: "02",
    title: "PathForge",
    category: "DSA",
    type: "DSA / ALGORITHMS / INTERACTIVE",
    featured: true,
    description:
      "A DSA-focused interactive engine for exploring data structures, algorithmic execution traces, and problem-solving concepts.",
    techs: ["React", "TypeScript", "C++", "Algorithms", "Data Structures"],
    highlights: [
      "Step-by-step visual execution trace for graph, tree, and sorting algorithms",
      "Interactive data structure mutation, state inspection, and complexity graphs",
      "Core algorithmic problem-solving logic implemented with strict time constraints",
    ],
    live: "https://pathforge-dwlz.onrender.com/",
    github: "https://github.com/niranjan05Kumar/pathforge",
    image: pathforge,
    tagline: "Interactive DSA & algorithmic execution engine",
  },
  {
    id: "hockey-archive",
    num: "03",
    title: "IIT (BHU) Hockey Digital Archive",
    category: "FULL STACK",
    type: "FULL STACK / ARCHIVE / CMS",
    featured: true,
    description:
      "A full-stack digital archive and management platform for documenting IIT (BHU) Hockey's players, teams, tournaments, matches, achievements, and gallery.",
    techs: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "ImageKit", "JWT", "Zod"],
    highlights: [
      "Full CRUD records management for players, tournaments, rosters, and match logs",
      "ImageKit-backed media archive and tournament gallery management",
      "Role-based admin access control with JWT authentication and Zod schema validation",
    ],
    live: "https://hockeyiitbhu.vercel.app/",
    github: "https://github.com/Niranjan05Kumar/HOCKEYIITBHU",
    image: hockeyiitbhu,
    tagline: "Full-stack institutional archive & sports management system",
  },
  {
    id: "obys-agency",
    num: "04",
    title: "Obys Agency Clone",
    category: "FRONTEND",
    type: "FRONTEND / CREATIVE",
    featured: false,
    image: obysagency,
    description:
      "Animated Obys agency clone engineered with GSAP, Locomotive Scroll, and magnetic cursor interactions showcasing creative web experiences.",
    techs: ["HTML5", "CSS3", "JavaScript", "GSAP", "Locomotive Scroll"],
    highlights: [
      "Precise scroll-based micro-interactions and timeline triggers",
      "Physics-based magnetic button animations",
      "Fluid responsive layout across mobile and desktop",
    ],
    live: "https://niranjan05kumar.github.io/obysagency/",
    github: "https://github.com/Niranjan05Kumar/obysagency",
  },
  {
    id: "hoobank",
    num: "05",
    title: "HooBank UI",
    category: "FRONTEND",
    type: "FRONTEND / UI",
    featured: false,
    image: hoobank,
    description:
      "Modern fintech UI architecture engineered with React and Tailwind CSS, demonstrating reusable component design and structured data flow.",
    techs: ["React", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Modular, reusable UI components built for scalability",
      "Clean structured data-driven layout and typography",
      "Fully responsive design optimized across all breakpoints",
    ],
    live: "https://hoobank-iota-brown.vercel.app/",
    github: "https://github.com/Niranjan05Kumar/hoobank",
  },
  {
    id: "medwin-health",
    num: "06",
    title: "Medwin Health",
    category: "FRONTEND",
    type: "FRONTEND / RESPONSIVE",
    featured: false,
    image: medwin,
    description:
      "Healthcare services landing platform featuring embedded Google Maps geolocation, clean accessible layout, and mobile-friendly usability.",
    techs: ["HTML5", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Interactive Google Maps location integration",
      "Accessible information architecture with clear visual hierarchy",
      "Performant mobile-first responsive design",
    ],
    live: "https://medwin-psi.vercel.app/",
    github: "https://github.com/Niranjan05Kumar/Medwin",
  },
];

export const socialMedia = [
  {
    id: "email",
    label: "Email",
    value: "niranjankumar11082005@gmail.com",
    href: "mailto:niranjankumar11082005@gmail.com",
    icon: MailIcon,
    copyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/niranjan05Kumar",
    href: "https://github.com/niranjan05Kumar/",
    icon: GithubIcon,
    copyable: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/niranjan05kumar",
    href: "https://www.linkedin.com/in/niranjan05kumar/",
    icon: LinkedinIcon,
    copyable: false,
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    value: "@05niranjankumar",
    href: "https://x.com/05niranjankumar",
    icon: TwitterIcon,
    copyable: false,
  },
  {
    id: "location",
    label: "Location",
    value: "IIT (BHU) Varanasi, India",
    href: "https://www.google.com/maps/place/Indian+Institute+of+Technology+(BHU)+Varanasi/@25.2677,82.9913,17z",
    icon: LocationIcon,
    copyable: false,
  },
];
