export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProjectFeature {
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
  overview: string;
  role: string;
  features: ProjectFeature[];
  architecture: string;
  highlights: string[];
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
    overview:
      "ElevateYou was built to give teams and individuals a single, unified workspace for managing projects without the cost or complexity of enterprise tools. The platform combines Kanban task boards, a rich document editor, and real-time team collaboration — all synced instantly through Firebase Firestore. It is fully open-source under the MIT license, meaning any team can self-host or contribute to it.",
    role:
      "Designed and built the full product from scratch — architecture, data modeling, Firestore security rules, real-time sync layer, PWA setup, and all frontend UI.",
    features: [
      {
        title: "Kanban Boards",
        description:
          "Drag-and-drop task boards with To Do, In Progress, and Done columns. Tasks carry priorities, due dates, assignees, and dependencies — giving teams a clear visual picture of work in flight.",
      },
      {
        title: "Rich Document Editor",
        description:
          "TipTap-powered editor supporting headings, bullet lists, code blocks, and nested document trees. Teams can write specs, meeting notes, and project briefs directly in the workspace — no separate wiki needed.",
      },
      {
        title: "Team Workspaces & RBAC",
        description:
          "Isolated workspaces per team with a four-tier role system: Owner, Admin, Member, and Viewer. Permissions are enforced both client-side and at the Firestore security rules level, so data never leaks between workspaces.",
      },
      {
        title: "Real-time Collaboration",
        description:
          "Firestore onSnapshot listeners push updates to every connected client instantly. Two team members editing the same board see each other's changes in real time without any page refreshes.",
      },
      {
        title: "Multiple Views",
        description:
          "Switch between Kanban, list, and calendar views for the same set of tasks. Different team members can work in the view that suits their workflow without changing the underlying data.",
      },
      {
        title: "PWA — Install Anywhere",
        description:
          "ElevateYou installs as a native-like app on Android, iOS, and desktop. Workbox service workers cache critical assets so the app remains usable even on unstable connections.",
      },
    ],
    architecture:
      "The frontend is built with Nuxt 3 (Vue 3 + TypeScript), using Pinia for state management with composables that wrap Firestore listeners. Firebase handles authentication, database, and file storage — eliminating backend infrastructure entirely. The real-time layer uses a dual-listener pattern to merge workspaces the user owns with workspaces they've been invited to, all reconciled in a single reactive store. Firestore security rules enforce role-based access at the database level, ensuring that even direct API calls cannot bypass permissions. A lightweight Node.js server API handles email invitations via Nodemailer. The PWA layer uses Vite PWA with a NetworkFirst strategy for API calls and CacheFirst for static assets.",
    highlights: [
      "Zero backend infrastructure — Firebase powers auth, database, and storage",
      "Four-tier RBAC enforced at both app and Firestore security rules level",
      "Real-time sync across all clients via Firestore onSnapshot",
      "Installable PWA with offline support via Workbox service workers",
      "Open-source (MIT) — any team can self-host or extend it",
      "Rich text editing with TipTap including nested document hierarchies",
    ],
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
    overview:
      "BudgetPlug KE was built to bridge the gap between Kenyan bulk importers and retail consumers. The platform lets shoppers browse Chinese wholesale goods, check out with M-Pesa in a single STK push, and track their order from placement to delivery. On the seller side, an admin dashboard provides real-time inventory control, order management, and payment reconciliation. The system is built for the realities of the Kenyan market — mobile-first, M-Pesa native, and capable of running in low-bandwidth conditions.",
    role:
      "Built the full platform end-to-end: database schema, Express.js REST API, M-Pesa Daraja integration, real-time Socket.io layer, Nuxt 4 storefront, admin dashboard, and PWA configuration.",
    features: [
      {
        title: "M-Pesa STK Push Checkout",
        description:
          "Customers pay using M-Pesa's STK push — they enter their phone number, receive a prompt on their phone, and confirm payment with their PIN. The system normalizes phone numbers (0700→254700), polls for payment confirmation, and updates order status automatically.",
      },
      {
        title: "Real-time Inventory",
        description:
          "Socket.io broadcasts stock changes to all connected admin users instantly. When a product sells out or stock is replenished, every open dashboard session updates without a page refresh — eliminating overselling.",
      },
      {
        title: "Guest & Authenticated Checkout",
        description:
          "Customers can complete purchases without creating an account using just their phone number. Registered users get order history, saved addresses, and a wishlist. Both flows share the same order management backend.",
      },
      {
        title: "Admin Dashboard",
        description:
          "A comprehensive back-office for managing products, orders, payments, and users. Includes sales analytics, payment status tracking, and stock alerts — built to let a small team run a high-volume catalogue.",
      },
      {
        title: "Order Tracking",
        description:
          "Every order has a lifecycle — placed, confirmed, packed, shipped, delivered. Customers receive real-time status updates via web push notifications. Admins move orders through stages from the dashboard.",
      },
      {
        title: "Offline-Ready PWA",
        description:
          "The storefront installs as a PWA with aggressive caching: API responses cached for one hour, product images cached for 30 days. Returning users see products immediately even before the network responds.",
      },
    ],
    architecture:
      "The storefront is built with Nuxt 4 (Vue 3) using Nuxt UI for components and Pinia with persisted state for cart and session management. The backend is an Express.js API on Node.js connected to a MySQL database with structured tables for users, products, orders, and payments. M-Pesa payments flow through Safaricom's Daraja API: the backend initiates an STK push, receives a callback URL confirmation, and reconciles the payment against the pending order. Socket.io runs on the Express server and emits stock and order events to all connected clients. Product images are hosted and served from a static uploads directory with CORS headers. The PWA layer uses Vite PWA with NetworkFirst strategies for API calls and CacheFirst for images, ensuring fast repeat visits on slow Kenyan networks.",
    highlights: [
      "Native M-Pesa STK push — no card required, works on any Kenyan phone",
      "Real-time stock sync via Socket.io prevents overselling across concurrent sessions",
      "Guest checkout with phone number only — removes friction for new customers",
      "PWA with 30-day image cache and 1-hour API cache for low-bandwidth conditions",
      "Full order lifecycle from placement to delivery with push notification updates",
      "Rate-limited auth endpoints to protect against brute-force attacks",
    ],
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
    overview:
      "MTN Farms replaces paper-based farm record keeping with a structured digital system farmers can use directly from the field. The app organises each farming season into a project — and within that project, tracks every dimension of operations: labor hours, land preparation, harvest yields, spraying schedules, and fertilizer applications. It was designed specifically for African conditions — mobile-first, offline-capable, and performant on low-end Android devices.",
    role:
      "Designed the data model for agricultural projects, built the full Nuxt 3 frontend, set up Firestore persistence, configured offline PWA caching, and designed the green-first UI suited for outdoor use.",
    features: [
      {
        title: "Agricultural Project Management",
        description:
          "Each farming season is a project with crop type, acreage, and location. Farmers can manage multiple projects simultaneously — a maize plot, a kitchen garden, and a cash crop — each with its own independent tracking data.",
      },
      {
        title: "Labor Tracking",
        description:
          "Log worker names, hours, tasks, and costs for every labor session. Over a season, farmers get a complete record of labor expenditure that can be used for cost analysis and future planning.",
      },
      {
        title: "Harvest Monitoring",
        description:
          "Record harvest dates, yield quantities, and quality grades. Historical harvest data builds a multi-season picture of farm productivity — showing which inputs and practices produce the best results.",
      },
      {
        title: "Spraying & Fertilizer Schedules",
        description:
          "Track pesticide and fungicide applications with product names, quantities, and dates. Fertilizer logs capture type, quantity, and application date. Both create an auditable record critical for organic certification and export compliance.",
      },
      {
        title: "Offline-First Operation",
        description:
          "Farmers often work in areas with no mobile signal. The app caches all project data locally via Workbox service workers. Changes made offline are queued and synced to Firestore when connectivity returns.",
      },
      {
        title: "Project Pinning & Archive",
        description:
          "Active projects can be pinned for quick access. Completed seasons are archived rather than deleted, preserving the full historical record while keeping the active project list clean.",
      },
    ],
    architecture:
      "Built with Nuxt 3 (Vue 3 + TypeScript) in client-only mode, optimised for mobile performance. Pinia stores with localStorage persistence hold project data locally, ensuring the app is fast and functional even before the network responds. Firestore acts as the source of truth for all farm data, with JWT-authenticated API calls syncing changes. The data model uses six normalised sub-tables per project (labor, land prep, harvest, spraying, fertilizer, progress), each independently queryable. VueUse provides reactive device utilities. The PWA layer is configured with a mobile-first install prompt — the app ships with a 1080×1920 screenshot for the Android install sheet, presenting itself as a standalone app rather than a browser tab.",
    highlights: [
      "Six tracking modules per project: labor, land prep, harvest, spraying, fertilizer, progress",
      "Full offline operation — data queued locally and synced when connectivity returns",
      "Mobile-first PWA with Android install prompt and standalone display mode",
      "JWT authentication with localStorage persistence for field use without re-login",
      "Multi-project support — manage multiple crop cycles and locations simultaneously",
      "Designed for low-end Android devices common in rural Kenyan farming communities",
    ],
  },
  {
    slug: "budget-hair-supply-chain",
    title: "Budget Hair Supply Chain",
    category: "Supply Chain",
    tagline: "Real-time inventory and point-of-sale system — managed monthly by Lumis Studios.",
    description:
      "An end-to-end supply chain management platform with real-time inventory tracking and POS capabilities. Built to handle the fast-moving dynamics of the hair supply market in Kenya. Delivered as a monthly subscription — Lumis Studios manages the system, monitors uptime, and ships new features on an ongoing basis.",
    tech: ["Nuxt 4", "Vue 3", "Express.js", "MySQL", "Socket.io", "Nuxt UI"],
    featured: false,
    year: "2024",
    overview:
      "Budget Hair Supply Chain was built for a fast-moving hair and beauty supply business where stock accuracy is critical — a single oversell means a customer order can't be fulfilled. The platform gives every member of the team — from warehouse staff to sales reps — a live, accurate view of inventory. When stock moves, every connected device updates in under a second. The POS module handles retail transactions on the same system, eliminating the data gap between sales and inventory. The system is delivered as a monthly subscription: Lumis Studios manages hosting, monitors the platform, handles issues, and ships additional features as the business grows — so the client never has to think about the tech.",
    role:
      "Designed the database schema, built the Express.js API, implemented real-time Socket.io stock broadcasting, and developed the Nuxt 4 frontend including the POS and inventory management interfaces.",
    features: [
      {
        title: "Real-time Stock Management",
        description:
          "Every stock movement — sales, restocks, adjustments — is broadcast via Socket.io to all connected clients instantly. A warehouse worker updating stock in the back room and a sales rep at the counter see the same numbers at the same time.",
      },
      {
        title: "Point of Sale",
        description:
          "Integrated POS module handles retail transactions directly within the platform. Sales automatically deduct from inventory — no separate reconciliation step, no spreadsheet updates at end of day.",
      },
      {
        title: "Stock History & Audit Trail",
        description:
          "Every stock movement is logged with timestamp, quantity change, reason, and the user who made the change. Managers can trace any discrepancy back to its source without guesswork.",
      },
      {
        title: "Low Stock & Out-of-Stock Alerts",
        description:
          "Computed inventory states automatically flag items below the low-stock threshold and items at zero. Reorder alerts surface before stockouts happen, not after a customer tries to buy something unavailable.",
      },
      {
        title: "Role-based Access",
        description:
          "Admin users manage stock levels, prices, and users. Workers access the POS and view inventory but cannot modify master stock records. JWT authentication enforces role boundaries at the API level.",
      },
      {
        title: "PWA for Mobile Workers",
        description:
          "The app installs as a PWA on Android and iOS. Field sales reps can check stock availability from their phones without carrying a laptop. Network-first caching ensures data stays fresh even on intermittent connections.",
      },
      {
        title: "Monthly Managed Service",
        description:
          "The platform is delivered as a subscription. Lumis Studios handles hosting, uptime monitoring, bug fixes, and ongoing feature development — giving the business a dedicated tech team without the cost of hiring one.",
      },
    ],
    architecture:
      "The backend is an Express.js API connected to MySQL with tables for products, stock levels, stock history, orders, and users. Socket.io runs on the same Express server and maintains a real-time channel for stock updates — when the database is modified, the server emits a broadcast to all connected clients. The frontend is built with Nuxt 4 (Vue 3) and Nuxt UI, using Pinia stores with a Socket.io state machine that tracks connection status, queues pending updates when offline, and flushes them when connectivity is restored. The stock store exposes computed getters for low-stock items (quantity < 5) and out-of-stock items (quantity = 0), giving the UI instant access to reorder-critical data. SweetAlert2 handles modal confirmations for destructive operations like stock adjustments.",
    highlights: [
      "Sub-second stock updates across all connected devices via Socket.io",
      "POS and inventory on the same platform — no reconciliation gap",
      "Full audit trail — every stock movement logged with user and timestamp",
      "Offline resilience — pending updates queued and flushed on reconnect",
      "Low-stock and out-of-stock computed states surfaced automatically",
      "Role-based access enforced at API level for admin vs worker permissions",
      "Monthly subscription model — Lumis Studios manages, monitors, and continuously improves the system",
    ],
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
    overview:
      "EXpensifly.iO was built to give individuals — especially young professionals and gig economy workers — a clear, honest picture of where their money goes. The platform tracks daily expenses by category, monitors savings goals, and provides financial education content alongside the numbers. It is fully open-source, designed to be extended by the community and adapted for different markets and currencies.",
    role:
      "Designed the full product — data model, Express.js API, Vue 3 frontend, Pinia stores, ECharts visualisations, and the financial education content structure.",
    features: [
      {
        title: "Expense Tracking",
        description:
          "Log daily spending with category, amount, date, and payment method. Filter by date range, category, or payment method to isolate spending patterns. Monthly and daily totals update automatically as entries are added.",
      },
      {
        title: "Savings Goals",
        description:
          "Define savings targets with a goal name, target amount, and deadline. The platform tracks progress against each goal and surfaces how much needs to be saved per day or month to stay on track.",
      },
      {
        title: "Financial Targets",
        description:
          "Set short and long-term financial goals — an emergency fund, a business investment, a travel budget. Each target has a visual progress bar and milestone markers so users can see momentum over time.",
      },
      {
        title: "Analytics & Charts",
        description:
          "ECharts-powered visualisations show expense trends over time, category breakdowns as pie charts, and daily spending patterns as bar charts. The charts update reactively as new expenses are logged.",
      },
      {
        title: "Financial Education",
        description:
          "Built-in guides cover budgeting basics, saving strategies for SMMEs, investment fundamentals, and introductory crypto content. Education is embedded in the app rather than outsourced to external links.",
      },
      {
        title: "Open-Source & Extensible",
        description:
          "Every module — expense tracking, savings, targets, education — is a separate Pinia store, making it straightforward for contributors to add new features without breaking existing ones. MIT licensed.",
      },
    ],
    architecture:
      "The frontend is built with Vue 3 (Composition API, script setup) and Vite, using Pinia stores with pinia-plugin-persistedstate for localStorage sync — giving the app near-instant load times on return visits. The backend is an Express.js API on Node.js with MySQL for persistent user data, expenses, savings records, and financial targets. Passwords are hashed with bcrypt and sessions managed via JWT. Vue-ECharts wraps ECharts for reactive, responsive charts that recompute when store data changes. Tesseract.js is included for a future receipt OCR feature — snap a receipt and have the expense auto-populated. The WebSocket layer is architectured and ready for multi-device real-time sync. The app is deployed on Vercel (frontend) and Render (backend) for zero-infrastructure hosting.",
    highlights: [
      "Multi-store Pinia architecture — expenses, savings, targets, user each independently managed",
      "All stores auto-persist to localStorage — app loads instantly on return visits",
      "ECharts visualisations update reactively as expenses are logged",
      "Tesseract.js OCR integrated for future receipt-scanning feature",
      "WebSocket-ready architecture for multi-device sync",
      "Open-source (MIT) with financial education content built directly into the app",
    ],
  },
  {
    slug: "lumis-studios-site",
    title: "Lumis Studios Website",
    category: "Web",
    tagline: "The studio's own production website — built and shipped by Lumis Studios.",
    description:
      "A fully production-grade marketing and portfolio site for Lumis Studios, built with Next.js 16, Tailwind CSS v4, and Framer Motion 12. Features five pages, animated case study layouts, full SEO coverage, and Vercel deployment.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    featured: false,
    year: "2025",
    overview:
      "Lumis Studios needed a web presence that matched the quality of the work it ships for clients — fast, polished, and production-ready from day one. The site was designed and built in-house: five pages covering the studio's services, work portfolio, about, and contact — with deep-linked case study pages for every project. It runs on the latest Next.js App Router with full static generation, end-to-end SEO coverage, and smooth Framer Motion entrance animations throughout.",
    role:
      "Designed and built the complete site — page architecture, component library, animation system, SEO metadata layer, OG image generation, sitemap, JSON-LD structured data, and Vercel deployment.",
    features: [
      {
        title: "Case Study Pages",
        description:
          "Each project has a dedicated deep-dive page covering overview, role, key features, architecture, and highlights. Case studies are statically generated at build time from a typed data layer — no CMS required.",
      },
      {
        title: "Framer Motion Animations",
        description:
          "Page entrance animations and scroll-triggered reveals across all sections. Staggered feature cards, fade-up text blocks, and smooth layout transitions give the site a premium feel without compromising load performance.",
      },
      {
        title: "Full SEO Coverage",
        description:
          "Per-page metadata, Open Graph and Twitter Card tags, canonical URLs, a machine-generated sitemap.xml, robots.txt, and a dynamic OG image rendered server-side via Next.js ImageResponse — all wired up for Google Search Console.",
      },
      {
        title: "JSON-LD Structured Data",
        description:
          "Organisation and WebSite schema injected into the root layout. Per-project metadata on case study pages. Structured data helps search engines understand the studio's identity, location, and content hierarchy.",
      },
      {
        title: "Responsive Component Library",
        description:
          "A set of reusable primitives — Container, Button, Tag, Card, SectionHeader, Section — built specifically for this site. Every component is typed, responsive, and consistent across all five pages.",
      },
      {
        title: "Vercel Production Deployment",
        description:
          "Deployed on Vercel with a custom domain (lumisstudios.site), automatic HTTPS, edge CDN, and preview deployments on every push. Zero infrastructure to manage — the site is always live and globally fast.",
      },
    ],
    architecture:
      "Built on Next.js 16 App Router with the TypeScript template. All pages are React Server Components by default — only sections with animations are marked 'use client'. Tailwind CSS v4 is configured via @theme inline in globals.css with no tailwind.config.ts. Framer Motion 12 handles all animations with Variants typed explicitly to satisfy the strict Framer type system. The SEO layer uses Next.js built-in Metadata API with per-directory layout.tsx files acting as transparent wrappers that export metadata without forcing client components. The OG image is a Next.js ImageResponse route that renders a branded 1200×630 PNG at build time. The sitemap and robots files are TypeScript modules that Next.js converts to XML and text at the /sitemap.xml and /robots.txt routes automatically.",
    highlights: [
      "Built with Next.js 16 App Router — static generation for every page and case study",
      "Tailwind CSS v4 with @theme inline — no config file, CSS variables as design tokens",
      "Dynamic OG image via Next.js ImageResponse — branded preview on every social share",
      "Sitemap submitted to Google Search Console — 11 URLs discovered and indexed",
      "Zero layout.tsx boilerplate — per-directory metadata with transparent server wrappers",
      "Deployed on Vercel with custom domain, edge CDN, and automatic HTTPS",
    ],
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
    overview:
      "DAZEL® approached Lumis Studios needing a professional web presence that could speak to wholesale distributors and retail buyers across East Africa. The site needed to communicate quality, local manufacturing credibility, and a clear B2B value proposition — all while being fast, mobile-friendly, and discoverable on search. The result is a fully static, SEO-optimised marketing site with smooth Framer Motion animations that give the brand a premium feel without compromising load performance.",
    role:
      "Designed and built the complete marketing site — component architecture, Framer Motion animation sequences, SEO metadata, JSON-LD structured data, and Vercel deployment configuration.",
    features: [
      {
        title: "Product Showcase",
        description:
          "High-quality product presentations for DAZEL®'s range: bar soap, body lotions, baby jelly, and powder detergents. Each product section communicates key benefits, ingredients, and availability — giving distributors the information they need to stock with confidence.",
      },
      {
        title: "B2B Value Proposition",
        description:
          "A dedicated section communicates DAZEL®'s wholesale offer: competitive pricing, consistent quality from a local manufacturer, and reliable supply chain. Designed to convert distributor enquiries rather than individual retail sales.",
      },
      {
        title: "Trust & Credibility Section",
        description:
          "Customer testimonials, manufacturing location (Kibwezi, Kenya), and product quality signals build credibility with buyers who haven't worked with DAZEL® before. East African buyers strongly prefer suppliers they can verify.",
      },
      {
        title: "Framer Motion Animations",
        description:
          "Entrance animations, scroll-triggered reveals, and smooth section transitions give the site a polished, premium feel. All animations are implemented with Framer Motion for performant, GPU-accelerated rendering.",
      },
      {
        title: "SEO & Local Search Optimisation",
        description:
          "Full Open Graph, Twitter Card, and JSON-LD structured data. Geographic meta tags (geo.region, geo.placename, geo.position) target local search for Kibwezi and the wider Kenyan market. React Snap pre-renders pages at build time for crawlability.",
      },
      {
        title: "Contact & Enquiry",
        description:
          "Contact section with email, phone, and location clearly presented. Designed for B2B enquiry flow — a wholesale distributor can find what they need and reach out without friction.",
      },
    ],
    architecture:
      "Built with React 18 (functional components and hooks) and Vite as the build tool, giving extremely fast HMR in development and optimised production bundles. Tailwind CSS handles all styling with a utility-first approach. Framer Motion v11 powers all animations with hardware-accelerated transforms. React Snap pre-renders the site at build time, producing static HTML that search engines and social crawlers can index without executing JavaScript. SEO metadata including Open Graph, Twitter Cards, and JSON-LD Organisation schema are injected at render time. Vercel Analytics tracks visitor behaviour with zero configuration. The entire stack is static — no backend, no database, no server — keeping hosting costs at zero while delivering sub-second load times.",
    highlights: [
      "Fully static with React Snap pre-rendering — search engines crawl real HTML, not JavaScript",
      "JSON-LD structured data and geo-tags for local East African search visibility",
      "Framer Motion v11 animations — GPU-accelerated, no layout thrashing",
      "Zero backend, zero hosting cost — static deployment on Vercel",
      "Open Graph and Twitter Card metadata for social sharing previews",
      "B2B-focused content architecture targeting wholesale distributors and retailers",
    ],
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
