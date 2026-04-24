export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  featured: boolean;
  year: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const services: Service[] = [
  {
    id: "web-mobile",
    icon: "Code2",
    title: "Web & Mobile Development",
    description:
      "Full-stack web and cross-platform mobile applications built with React, React Native, Vue.js, Next.js, and Express.js. From MVPs to production systems.",
  },
  {
    id: "cloud-infra",
    icon: "Cloud",
    title: "Cloud & Infrastructure",
    description:
      "AWS deployments, Docker containerization, CI/CD pipelines, database administration, and monitoring setups that scale with your product.",
  },
  {
    id: "ai-data",
    icon: "Brain",
    title: "AI & Data Automation",
    description:
      "Python-based data pipelines, ML model integration, workflow automation, and intelligent tooling that transforms raw data into actionable insight.",
  },
  {
    id: "systems-design",
    icon: "Settings2",
    title: "Systems Design & Consulting",
    description:
      "Architecture reviews, data modeling, API design, and code audits. We help teams make the right technical decisions before they become costly ones.",
  },
  {
    id: "mvp-product",
    icon: "Rocket",
    title: "MVP & Product Development",
    description:
      "Rapid prototyping, agile delivery, and user-centered design using Figma and modern frameworks. Take an idea from concept to a working product — fast.",
  },
  {
    id: "maintenance",
    icon: "Wrench",
    title: "Maintenance & Optimization",
    description:
      "Performance tuning, legacy migrations, ongoing monitoring, and dedicated support. Keep your systems fast, secure, and up to date.",
  },
];

export const projects: Project[] = [
  {
    slug: "elevate-you",
    title: "ElevateYou",
    category: "Productivity",
    tagline: "Open-source project management for teams and individuals.",
    description:
      "A modern, real-time project management platform built with Nuxt 3 and Firebase. Features Kanban boards with drag-and-drop, rich TipTap document editing, hierarchical document trees, team workspaces with role-based access, and instant Firestore sync — installable as a PWA.",
    tech: ["Nuxt 3", "Vue 3", "TypeScript", "Firebase", "Pinia", "TipTap", "Tailwind CSS", "PWA"],
    featured: true,
    year: "2024",
  },
  {
    slug: "budgetplug-ke",
    title: "BudgetPlug KE",
    category: "E-commerce",
    tagline: "Quality Chinese imports delivered to your doorstep in Kenya.",
    description:
      "A full-stack e-commerce platform for affordable Chinese imports delivered across Kenya, with M-Pesa payment integration. Features real-time inventory, order tracking, admin dashboard with analytics, web push notifications, and a PWA-ready storefront powered by Nuxt 4 and a Node.js/MySQL backend.",
    tech: ["Nuxt 4", "Vue 3", "Nuxt UI", "Express.js", "MySQL", "Socket.io", "M-Pesa", "Cloudinary", "PWA"],
    featured: true,
    year: "2025",
  },
  {
    slug: "mnt-farms",
    title: "MTN Farms",
    category: "AgriTech",
    tagline: "Farm operations management built for African farmers.",
    description:
      "A mobile-first PWA for managing agricultural projects — track labor, monitor harvests, and report on farm progress from the field. Built offline-capable with Nuxt 3 and Firebase, designed for low-connectivity environments with a green-first UI.",
    tech: ["Nuxt 3", "Vue 3", "TypeScript", "Firebase", "Firestore", "Pinia", "VueUse", "PWA"],
    featured: true,
    year: "2024",
  },
  {
    slug: "budget-hair-supply-chain",
    title: "Budget Hair Supply Chain",
    category: "Supply Chain",
    tagline: "Real-time inventory and point-of-sale system.",
    description:
      "An end-to-end supply chain management platform with real-time inventory tracking and POS capabilities. Built to handle the fast-moving dynamics of the hair supply market in Kenya.",
    tech: ["Nuxt 4", "Vue 3", "Express.js", "MySQL", "Socket.io", "Nuxt UI"],
    featured: false,
    year: "2024",
  },
  {
    slug: "expensifly",
    title: "EXpensifly.iO",
    category: "Fintech",
    tagline: "Open-source personal finance platform.",
    description:
      "An open-source finance management platform with real-time updates via WebSockets and a clean Vue.js frontend. Designed for transparency, extensibility, and developer contribution.",
    tech: ["Vue.js", "Node.js", "WebSockets", "PostgreSQL"],
    featured: false,
    year: "2023",
  },
  {
    slug: "dazel",
    title: "DAZEL®",
    category: "Consumer Goods",
    tagline: "Detergents & skin care manufacturer based in Kibwezi, Kenya.",
    description:
      "A public marketing and product site for DAZEL®, a Kenyan manufacturer of detergents and skin care products — bar soap, body lotions, baby jelly, and powder detergent. The site serves wholesale distributors and retailers across East Africa, built with React, Vite, and Framer Motion for smooth product storytelling.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    featured: false,
    year: "2025",
  },
];

export const techGroups: TechGroup[] = [
  {
    label: "Frontend",
    items: ["React", "React Native", "Vue.js", "Next.js", "Tailwind CSS", "Expo", "Nx.dev", "Figma"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Python", "REST APIs", "WebSockets", "Atlas GO"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Data Modeling", "Migration"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "CI/CD", "AWS", "Cloud", "Monitoring", "Performance"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by listening. Understanding your problem, your users, and what success looks like before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture and data models first — then UI. We plan the system before we build it, so we ship the right thing.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iterative development with regular check-ins. You see real progress every week, not just at the end.",
  },
  {
    number: "04",
    title: "Ship & Support",
    description:
      "Production deployment with monitoring in place. We don't hand off and disappear — we stay close after launch.",
  },
];

export const stats: Stat[] = [
  { value: "6+", label: "Products Shipped" },
  { value: "41+", label: "Technologies" },
  { value: "3+", label: "Years Building" },
  { value: "100%", label: "Open Communication" },
];
