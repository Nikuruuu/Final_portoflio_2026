import {
  Layers,
  Activity,
  Code2,
  Globe,
  Server,
  LayoutGrid,
  Zap,
  CircleDot,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "@/lib/icons";

// ── Hero Section Data ────────────────────────────────────────────────────────

export interface SocialLink {
  icon: typeof GithubIcon;
  href: string;
  label: string;
}

export interface HeroContent {
  status: {
    text: string;
    isAvailable: boolean;
  };
  headline: {
    title: string;
    middle: string;
    suffix: string;
  };
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  socialLinks: SocialLink[];
}

export const HERO_CONTENT: HeroContent = {
  status: {
    text: "Available for work",
    isAvailable: true,
  },
  headline: {
    title: "Full-Stack Developer",
    middle: "crafting modern",
    suffix: "web applications",
  },
  description:
    "I design and build modern web applications—merging structural precision and clean UI design with robust backend architecture. Focused on writing clean, maintainable code that solves real problems.",
  cta: {
    primary: {
      text: "View Projects",
      href: "#work",
    },
    secondary: {
      text: "Contact Me",
      href: "#contact",
    },
  },
  socialLinks: [
    { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: XTwitterIcon, href: "https://twitter.com", label: "Twitter / X" },
  ],
};

// ── About Section Data ───────────────────────────────────────────────────────

export interface ValueBadge {
  icon: LucideIcon;
  label: string;
}

export interface AboutContent {
  tag: string;
  headline: {
    prefix: string;
    highlight: string;
  };
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
    location: string;
  };
  valueBadges: ValueBadge[];
}

export const ABOUT_CONTENT: AboutContent = {
  tag: "// ABOUT ME",
  headline: {
    prefix: "Building modern web applications with focus on ",
    highlight: "precision.",
  },
  paragraphs: [
    "I'm Jeremiah Dela Cruz, a BS Information Technology graduate and Full-Stack Web Developer based in the Philippines. I build fast, responsive web applications combining clean user interfaces with reliable backends. My core stack centers on React, Next.js, Node.js, Tailwind CSS, and Prisma.",
    "My approach is simple: write clean, maintainable code, build intuitive components, and ensure performance and user experience are never treated as afterthoughts.",
  ],
  image: {
    src: "/jpd.png",
    alt: "Jeremiah Dela Cruz - Software Engineer",
    location: "Davao City, Philippines",
  },
  valueBadges: [
    { icon: LayoutGrid, label: "Clean Architecture" },
    { icon: Zap, label: "High Performance" },
    { icon: CircleDot, label: "Product-Focused" },
  ],
};

// ── Projects Section Data ───────────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;        // Primary banner/thumbnail image
  screenshots?: string[];   // Array of full screenshots for the Carousel
  about?: string;           // Detailed project background & problem statement
  keyFeatures?: string[];   // Bullet points of key technical features
  challenges?: string;      // Challenges overcome during architecture/development
  outcome?: string;         // Results, metrics, performance gains, or impact
  theme: "cyan" | "purple" | "emerald" | "amber";
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "atlas-cms",
    name: "Atlas CMS",
    description:
      "Headless content management system with a real-time collaborative editor, role-based access control, and a GraphQL API powering multi-tenant publishing workflows.",
    stack: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    imageUrl: "/portrait.jpg",
    screenshots: ["/portrait.jpg", "/jpd.png"],
    about:
      "Atlas CMS was engineered to provide high-growth publishing teams with a decoupled, sub-second headless authoring experience. It separates content creation from frontend presentation through automated schema generation and real-time synchronization.",
    keyFeatures: [
      "Real-time multiplayer content editing using CRDTs and WebSocket relays",
      "Dynamic GraphQL & REST API generation with granular field-level permissions",
      "Edge caching layer with automated Redis tag-invalidation on publish",
      "Role-based access control (RBAC) supporting multi-tenant enterprise teams",
    ],
    challenges:
      "Managing high-concurrency document edits without locking the database required designing an in-memory Operational Transformation pipeline backed by Redis before persisting to PostgreSQL.",
    outcome:
      "Reduced content publish-to-edge latency by 65% and supported 50+ concurrent editors per workspace with zero data collisions.",
    theme: "cyan",
  },
  {
    id: "meridian-analytics",
    name: "Meridian Analytics",
    description:
      "Real-time data pipeline dashboard with streaming event ingestion, interactive time-series charts, and anomaly detection alerts via WebSockets.",
    stack: ["React", "Rust", "ClickHouse", "Kafka", "D3.js"],
    githubUrl: "https://github.com",
    imageUrl: "/jpd.png",
    screenshots: ["/jpd.png", "/portrait.jpg"],
    about:
      "Meridian Analytics is an observability and event-tracking platform designed to process billions of user interaction logs daily, transforming raw telemetric data into actionable time-series visualizations.",
    keyFeatures: [
      "Sub-second aggregation queries across 100M+ rows via ClickHouse columnar storage",
      "Interactive SVG time-series charts with pan, zoom, and dynamic interval clustering in D3.js",
      "Real-time anomaly detection daemon built with Rust and Kafka consumers",
      "Custom query builder supporting SQL filters, regex matching, and cohort slicing",
    ],
    challenges:
      "Rendering 50,000+ data points smoothly in the browser required offloading math transformations to Web Workers and implementing WebGL canvas downsampling.",
    outcome:
      "Achieved stable 60fps chart interactions on large data volumes and dropped server ingest processing costs by 40% using Rust workers.",
    theme: "purple",
  },
  {
    id: "forge-cli",
    name: "Forge CLI",
    description:
      "Extensible developer toolchain for scaffolding full-stack projects with opinionated defaults, plugin ecosystem, and zero-config deployments to major cloud providers.",
    stack: ["Node.js", "Go", "Docker", "Terraform", "GitHub Actions"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    about:
      "Forge CLI is a developer experience engine built to eliminate boilerplate and standardize microservice infrastructure across engineering teams through automated code generation and IaC scaffolding.",
    keyFeatures: [
      "Interactive terminal UI with smart scaffolding presets for Next.js, Go, and Fastify",
      "Integrated Docker and Terraform generation tailored to AWS, GCP, and Railway",
      "Zero-config CI/CD workflow generator with automated lint, test, and preview pipelines",
      "Pluggable architecture allowing custom enterprise templates and policy checks",
    ],
    challenges:
      "Ensuring cross-platform binary execution speed on macOS, Linux, and Windows required compiling core CLI engines in Go with automated release pipelines.",
    outcome:
      "Saved developer onboarding time by over 80% and adopted by 500+ developers within open-source dev communities.",
    theme: "emerald",
  },
  {
    id: "pulse-gateway",
    name: "Pulse Gateway",
    description:
      "High-throughput API gateway with automatic rate limiting, distributed JWT authentication, and sub-millisecond edge routing for microservices.",
    stack: ["TypeScript", "Fastify", "Redis", "Docker", "Grafana"],
    githubUrl: "https://github.com",
    about:
      "Pulse Gateway acts as the secure entry point for distributed microservices, managing rate limits, request authentication, header transformations, and real-time distributed telemetry.",
    keyFeatures: [
      "Token-bucket rate limiting backed by distributed Redis clusters",
      "Sub-millisecond routing overhead powered by Fastify and optimized V8 execution paths",
      "Automated OpenTelemetry tracing exports to Prometheus and Grafana",
      "Dynamic hot-reloading routing table without service restarts",
    ],
    challenges:
      "Preventing cache stampedes under sudden traffic spikes required implementing sliding-window rate limit algorithms with local memory pre-checks.",
    outcome:
      "Sustained 45,000 req/sec at under 2ms p99 latency with automated zero-downtime rolling upgrades.",
    theme: "amber",
  },
  {
    id: "nova-canvas",
    name: "Nova Canvas",
    description:
      "Collaborative infinite-canvas workspace featuring multiplayer CRDT sync, vector rendering, export pipelines, and customizable node plugins.",
    stack: ["Next.js", "WebSockets", "Tailwind CSS", "Canvas API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    about:
      "Nova Canvas is a lightweight, cloud-based visual ideation tool engineered for architecture diagrams, wireframes, and collaborative system design.",
    keyFeatures: [
      "High-performance 2D canvas rendering supporting 10,000+ interactive nodes",
      "Live cursor presence and multiplayer synchronization via WebSockets",
      "Vector export engine with PNG, SVG, and JSON layout serializers",
      "Keyboard shortcut engine with custom node snapping and smart alignment guides",
    ],
    challenges:
      "Balancing crisp vector crispness with complex multiplayer state mutations required quad-tree spatial partitioning to optimize render passes.",
    outcome:
      "Supported buttery-smooth 120Hz canvas rendering on high-refresh displays with instant collaborative sync across devices.",
    theme: "cyan",
  },
];

export const PROJECT_THEME_STYLES: Record<
  Project["theme"],
  {
    bannerGradient: string;
    borderGlow: string;
    ambientGlow: string;
    iconColor: string;
  }
> = {
  cyan: {
    bannerGradient: "from-cyan-950/30 via-slate-900/60 to-slate-950",
    borderGlow: "hover:border-cyan-500/40",
    ambientGlow: "bg-cyan-500/10",
    iconColor: "group-hover:text-cyan-400",
  },
  purple: {
    bannerGradient: "from-purple-950/30 via-slate-900/60 to-slate-950",
    borderGlow: "hover:border-purple-500/40",
    ambientGlow: "bg-purple-500/10",
    iconColor: "group-hover:text-purple-400",
  },
  emerald: {
    bannerGradient: "from-emerald-950/30 via-slate-900/60 to-slate-950",
    borderGlow: "hover:border-emerald-500/40",
    ambientGlow: "bg-emerald-500/10",
    iconColor: "group-hover:text-emerald-400",
  },
  amber: {
    bannerGradient: "from-amber-950/30 via-slate-900/60 to-slate-950",
    borderGlow: "hover:border-amber-500/40",
    ambientGlow: "bg-amber-500/10",
    iconColor: "group-hover:text-amber-400",
  },
};

// ── Skills Section Data ─────────────────────────────────────────────────────

export interface SkillItem {
  name: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  color: string;
  borderColor: string;
  bgColor: string;
  dotColor: string;
  skills: SkillItem[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend-skills",
    category: "Frontend",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/5",
    dotColor: "bg-cyan-400",
    skills: [
      { name: "React / Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML & CSS" },
      { name: "Mobile responsive" },
    ],
  },
  {
    id: "backend-skills",
    category: "Backend",
    color: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/5",
    dotColor: "bg-violet-400",
    skills: [
      { name: "Node.js" },
      { name: "Express / Fastify" },
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "Redis" },
      { name: "REST & GraphQL" },
    ],
  },
  {
    id: "devops-skills",
    category: "Tools & DevOps",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/5",
    dotColor: "bg-emerald-400",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Vercel / Railway" },
      { name: "CI/CD Pipelines" },
      { name: "Linux / Bash" },
      { name: "Figma" },
    ],
  },
];

// ── Contact Section Data ────────────────────────────────────────────────────

export interface ContactContent {
  tag: string;
  headline: {
    prefix: string;
    highlight: string;
  };
  description: string;
  email: string;
  emailLabel: string;
  socialLinks: SocialLink[];
  footer: {
    author: string;
    techStack: string;
  };
}

export const CONTACT_CONTENT: ContactContent = {
  tag: "// GET IN TOUCH",
  headline: {
    prefix: "Let's ",
    highlight: "Connect.",
  },
  description:
    "Open to full-time, part-time, and freelance web development opportunities. Reach out directly via email or connect with me on LinkedIn.",
  email: "zeremiahdelacruz@gmail.com",
  emailLabel: "Direct Email",
  socialLinks: [
    { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: XTwitterIcon, href: "https://twitter.com", label: "X" },
  ],
  footer: {
    author: "Jeremiah Dela Cruz. All rights reserved.",
    techStack: "Davao City, Philippines",
  },
};
