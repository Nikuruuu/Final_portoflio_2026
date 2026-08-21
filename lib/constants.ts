import { GithubIcon, LinkedinIcon } from "@/lib/icons";
import { type LucideIcon, LayoutGrid, Zap, CircleDot } from "lucide-react";

// ── Hero Section Data ────────────────────────────────────────────────────────

export interface SocialLink {
  icon: typeof GithubIcon | typeof LinkedinIcon;
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
    middle: "Building intuitive, ",
    suffix: "scalable web apps",
  },
  description:
    "I design and build modern web applications with a focus on solid engineering, clean user interfaces, and scalable backend systems. I leverage AI tools alongside my programming skills to improve my workflow, solve problems, and turn ideas into reliable digital products",
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
    { icon: GithubIcon, href: "https://github.com/Nikuruuu", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/jeremiah-dela-cruz/", label: "LinkedIn" },
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
    prefix: "Fullstack Web Development & AI-Powered ",
    highlight: "Tools.",
  },
  paragraphs: [
    "I'm Jeremiah Dela Cruz, an aspiring Fullstack Web Developer passionate about building intuitive and scalable web applications. With a strong foundation in problem-solving and user-centric design, I enjoy creating seamless digital experiences that are both functional and visually engaging.",
    "As I continue to grow in web development, I've worked on projects involving SaaS applications, AI-powered tools, and dynamic web solutions, allowing me to refine my skills and adapt to different challenges. I'm always eager to learn new technologies, improve my craft, and collaborate on meaningful projects.",
    "Excited to bring ideas to life through code and contribute to innovative solutions!",
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

export interface ProjectDetails {
  description?: string;
  features?: string[];
  images?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export interface Project {
  id: string | number;
  title: string;
  shortDescription?: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  link?: string;
  githubUrl?: string;
  details?: ProjectDetails;
  theme?: "cyan" | "purple" | "emerald" | "amber";
  // Optional convenience aliases
  name?: string;
  stack?: string[];
  liveUrl?: string;
  screenshots?: string[];
  about?: string;
  keyFeatures?: string[];
  challenges?: string | string[];
  outcome?: string | string[];
}

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "JobHive",
    shortDescription:
      "Landing page for a modern job board platform with sleek and animated UI.",
    description:
      "A landing page built to present the concept of JobHive, a curated job board platform. Designed with smooth animations and clean layouts for an engaging first impression.",
    techStack: ["Next.js", "Tailwind CSS", "shadcn", "Framer Motion", "Lottie"],
    imageUrl:
      "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive1.png",
    theme: "amber",
    details: {
      description:
        "JobHive is a landing page designed to showcase the idea of a modern job board. It highlights the platform's value through engaging visuals, responsive layouts, and interactive animations. The page focuses on presentation and branding rather than full job board functionality.",
      features: [
        "Landing page design with Next.js and Tailwind CSS",
        "Reusable UI components from shadcn",
        "Smooth animations using Framer Motion",
        "Lottie animations for enhanced visual appeal",
        "Responsive layouts optimized for all devices",
        "Metadata optimization for SEO and branding",
      ],
      images: [
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive1.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive2.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive3.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive4.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive5.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive6.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Jobhive/jobhive7.png",
      ],
      challenges: [
        "Designing a landing page that looks functional without backend features",
        "Balancing animations with performance for a smooth UX",
        "Keeping the design consistent with shadcn components",
      ],
      outcomes: [
        "Created a polished and modern landing page for JobHive",
        "Delivered a visually engaging concept for a future job board platform",
        "Provided a scalable foundation for adding functionality later",
      ],
    },
    link: "https://jobhive.jeremiahdelacruz.com/",
  },

  {
    id: 2,
    title: "Health & Nutrition Management System",
    shortDescription:
      "A capstone project developed for Don Juan Dela Cruz Elementary School to manage student health and nutrition programs.",
    description:
      "A full-stack system that helps the school clinic and staff manage clinic visits, feeding programs, medicine inventory, and student health records.",
    techStack: ["React", "Material UI", "Express.js", "MongoDB", "Node.js"],
    imageUrl:
      "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%2810%29-3B8doBeoA2HsEHhHcVvQkf7d6avNoW.png",
    theme: "emerald",
    details: {
      description:
        "This capstone system was built to streamline the health and nutrition tracking for an elementary school. It allows clinic staff to track clinic visits, manage medicine inventory (with batch expiration tracking), and monitor students eligible for feeding programs. It also includes analytics, logs, and user roles for better school-wide health data governance.",
      features: [
        "User authentication with role-based access (admin, clinic staff, etc.)",
        "Student database management (2,400+ records)",
        "Clinic visit logging and statistics tracking",
        "Medicine inventory with batch tracking and expiration alerts",
        "Feeding program eligibility monitoring",
        "Analytics and activity logs",
        "School year selector for filtering records",
      ],
      images: [
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%281%29-zCJc0YXXpaFTjLo12DasU1OJP0BbFx.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%2810%29-3B8doBeoA2HsEHhHcVvQkf7d6avNoW.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%2811%29-oQxLH7FkNL2WKqEd1zYRVViEzZr9rZ.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%282%29-IUGn3GOSLTHV55xExBelXViZFsLagB.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%283%29-gMM1PMhcHAiT4Emtj1fF8QVFCOgi6H.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%284%29-KyGtUVKunFHEYygEuwPBh56Zs2I3ql.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%285%29-gWtC3fXVVqxuF1T20QZshVINnJVYZn.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%286%29-MUMHkhAeyROEUIXA29UQLs9MqYz4sz.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%287%29-yfegHSI1ml3mHPy9ir4zmTXPQiaOvU.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%288%29-Kve0eVFabckInG0aamcKhNOid9Fr39.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Adcor/image%289%29-EJ42Jez8S9qTlPpA6QcbIpzPpJMzQ4.png",
      ],
      challenges: [
        "Creating a scalable MongoDB schema to handle student health and medicine records",
        "Designing an intuitive UI for clinic staff with minimal training",
        "Implementing accurate medicine expiration tracking and filtering",
      ],
      outcomes: [
        "Streamlined the health and feeding program processes for 2,400+ students",
        "Improved inventory tracking and reduced expired medicine waste",
        "Enabled non-technical school staff to manage records with ease",
      ],
    },
  },
  {
    id: 3,
    title: "DeepLogo AI",
    shortDescription:
      "AI-powered logo generator for unique and professional branding.",
    description:
      "An AI-powered tool that generates unique and professional logos based on user input. Built with modern web technologies for seamless performance.",
    techStack: [
      "Next.js",
      "shadcn",
      "Clerk",
      "NeonDB",
      "Firebase",
      "Replicate AI",
    ],
    imageUrl:
      "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deepAI1.PNG",
    theme: "cyan",
    details: {
      description:
        "DeepLogo AI is a web application that allows users to generate professional logos using AI. It simplifies the branding process by transforming short prompts into logo visuals. Users receive downloadable logo outputs in seconds, making it ideal for startups, freelancers, and designers.",
      features: [
        "Prompt-based logo generation powered by Replicate AI",
        "User authentication using Clerk",
        "Credit-based generation system with Firebase",
        "Responsive UI built with shadcn and Tailwind CSS",
        "Logo download functionality",
        "Admin access for managing credits and monitoring usage",
      ],
      images: [
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deepAI1.PNG",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/DeepLogo2.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deeplogo3.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deeplogo5.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deeplogo6.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deeplogo7.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deeplogo8.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/DeepLogoAI/deeplogo9.png",
      ],
      challenges: [
        "Integrating Replicate AI for stable image output",
        "Handling user authentication securely with Clerk",
        "Building a flexible credit system with Firebase",
      ],
      outcomes: [
        "Enabled users to generate and download logos within seconds",
        "Improved logo quality and brand relevance using prompt-based input",
        "Reduced friction in the branding process for non-designers",
      ],
    },
  },
  {
    id: 4,
    title: "Soulitude",
    shortDescription:
      "Figma UI design for a social music player connecting artists and listeners.",
    description:
      "A high-fidelity Figma UI design for Soulitude, a music platform where users can stream songs, interact with artists, and view daily top tracks.",
    techStack: ["Figma", "UI/UX Design", "Prototyping"],
    imageUrl:
      "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Soulitude/thumbnail.png",
    theme: "purple",
    details: {
      description:
        "Soulitude focuses on user-friendly design and artist-listener interaction. The UI includes music streaming pages, comment sections, artist profiles, and dynamic top charts.",
      features: [
        "Interactive homepage with trending songs",
        "Clean music player interface with queue and playback controls",
        "Comment section under each track",
        "Artist and listener profile views",
        "Daily top charts with filter options",
        "Artist can interact to fans",
        "Prototype-ready design with navigation flows",
      ],
      images: [
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Soulitude/thumbnail.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Soulitude/soul_1.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/Soulitude/soul_2.png",

      ],
      challenges: [
        "Balancing feature-rich UI with simplicity",
        "Designing intuitive flows for both artists and users",
        "Creating a consistent design system for music-based interactions",
      ],
      outcomes: [
        "Delivered a complete UI kit for a music interaction platform",
        "Improved usability through user-centric design decisions",
        "Prepared for seamless developer handoff with clear component structure",
      ],
    },
  },

  {
    id: 5,
    title: "Architectura",
    shortDescription:
      "A high-end architectural firm portfolio showcasing modern residential, commercial, and urban planning projects with raw industrial aesthetics.",
    description:
      "A modern, high-end web portfolio designed for an architectural firm. It features industrial minimalism, responsive layouts, interactive services breakdown, and a selected works showcase.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "shadcn/ui", "Lucide Icons"],
    imageUrl: "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/architectu_firm/Thumbnail.png",
    theme: "cyan",
    details: {
      description:
        "Architectura focuses on minimalist industrial design and bespoke architecture presentation. The web app includes interactive service catalogs, curated project galleries, philosophy breakdown, and an intuitive project consultation inquiry flow.",
      features: [
        "Minimalist industrial aesthetic with high-impact typography",
        "Selected works gallery with category filtering (Residential, Commercial)",
        "Interactive expertise and architectural service breakdowns",
        "Methodology and continuum delivery workflow section",
        "Interactive project inquiry and consultation form",
        "Full mobile-responsive layout with smooth glassmorphism navigation",
      ],
      images: [
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/architectu_firm/Thumbnail.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/architectu_firm/arch_2.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/architectu_firm/arch_3.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/architectu_firm/arch_4.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/architectu_firm/arch_5.png",
        "https://v2fb8mgxei4hfyfe.public.blob.vercel-storage.com/architectu_firm/arch_6.png",

      ],
      challenges: [
        "Crafting high-contrast editorial typography and raw industrial design while maintaining optimal readability",
        "Building responsive full-screen hero and portfolio grids with smooth transitions",
        "Structuring modular component architecture with shadcn and Tailwind CSS",
      ],
      outcomes: [
        "Delivered an editorial-grade web experience tailored for architecture clients",
        "Implemented clean responsive navigation and interactive project showcases",
        "Established a flexible foundation for showcasing architectural case studies",
      ],
    },
    link: "https://architect.jeremiahdelacruz.com/",
  },
];

export const FEATURED_PROJECTS = ProjectsData;

export const PROJECT_THEME_STYLES: Record<
  "cyan" | "purple" | "emerald" | "amber",
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

export const TechStack = {
  frontend: ["Next.js", "React.js", "Tailwind CSS", "Typescript", "shadcn/ui"],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "PostgreSQL",
    "REST",
    "JWT",
    "FastAPI",
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
    "Vite",
    "Discord",
    "Teams",
  ],
  services: ["Firebase", "Clerk", "Vercel", "Replicate", "Supabase"],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend-skills",
    category: "Frontend",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/5",
    dotColor: "bg-cyan-400",
    skills: TechStack.frontend.map((name) => ({ name })),
  },
  {
    id: "backend-skills",
    category: "Backend",
    color: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/5",
    dotColor: "bg-violet-400",
    skills: TechStack.backend.map((name) => ({ name })),
  },
  {
    id: "tools-skills",
    category: "Tools",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/5",
    dotColor: "bg-emerald-400",
    skills: TechStack.tools.map((name) => ({ name })),
  },
  {
    id: "services-skills",
    category: "Services",
    color: "text-amber-400",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/5",
    dotColor: "bg-amber-400",
    skills: TechStack.services.map((name) => ({ name })),
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
    { icon: GithubIcon, href: "https://github.com/Nikuruuu", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/jeremiah-dela-cruz/", label: "LinkedIn" },
  ],
  footer: {
    author: "Jeremiah Dela Cruz. All rights reserved.",
    techStack: "Davao City, Philippines",
  },
};
