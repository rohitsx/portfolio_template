import { Linkedin, MessageSquare, type LucideIcon } from "lucide-react";

export interface PullRequest {
  title: string;
  url: string;
}

export interface Contribution {
  description: string;
  link?: string;
}

export interface Client {
  name: string;
  logo: string;
  role: string;
  link: string;
  summary: string;
  contributions: readonly Contribution[];
  prs?: readonly PullRequest[];
}



type TestimonialSourceName = "LinkedIn" | "Reddit";

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  source: {
    name: TestimonialSourceName;
    icon: LucideIcon;
    url?: string;
  };
}

export interface Task {
  title: string;
  description: string;
  details?: readonly string[];
  link?: string;
}

export interface PullRequest {
  title: string;
  url: string;
}

export const testimonialsData = [
  {
    quote:
      "I had the pleasure of collaborating with Rohit on several urgent tasks. He demonstrated strong problem-solving skills, asked thoughtful and precise questions, and consistently showed professionalism and respect. Rohit quickly adapted to team workflows and delivered results under pressure. I confidently recommend him as a reliable and collaborative professional.",
    author: "Anthony Rosales Laguan",
    title: "Senior Javascript Engineer, Able AI",
    source: {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rohitsx/",
    },
  },
  {
    quote:
      "Yes, that showed the issue finally.\nYou are a good one.\nI am glad we could finally handle this issue.\n I really appreciate and hope the best.",
    author: "hastogord1",
    title: "Founder Letit.net",
    source: {
      name: "Reddit",
      icon: MessageSquare,
      url: "https://www.letit.net"
    },
  },
] as const satisfies readonly Testimonial[];

export const clientsData = [
  {
    name: "Able AI",
    logo: "https://static.thenounproject.com/png/2616533-200.png",
    role: "Freelance Full Stack Engineer",
    link: "https://github.com/ableAI2025/able-ai",
    summary:
      "Contributed to a next-generation gig platform for AI professionals by implementing critical backend systems and user-facing features. My work focused on enhancing platform functionality, improving data integrity, and enabling new revenue streams.",
    contributions: [
      {
        description: "Architected and built a complete user referral and discount system, designing the database schema (Drizzle ORM) and implementing backend logic for code generation, validation, and application during gig creation.",
        link: "https://github.com/AbleAI2025/able-ai/pull/83",
      },
      {
        description: "Engineered an external recommendation feature, proactively identifying database schema limitations and coordinating migrations on a live system to support the new functionality.",
        link: "https://github.com/AbleAI2025/able-ai/pull/66",
      },
      {
        description: "Developed a complex gig amendment workflow for buyers, which involved significant backend state management, schema updates, and UI component refactoring to handle the end-to-end process.",
        link: "https://github.com/AbleAI2025/able-ai/pull/128",
      },
    ],
    prs: [
      { title: "feat: Add buyer gig amendment flow and refactor shared components", url: "https://github.com/AbleAI2025/able-ai/pull/128" },
      { title: "feat: implement gig amendment flow with amendId, schema, and UI updates", url: "https://github.com/AbleAI2025/able-ai/pull/108" },
      { title: "feat(onboarding): Implement referral code capture and application", url: "https://github.com/AbleAI2025/able-ai/pull/83" },
      { title: "Feature/external recommendation form", url: "https://github.com/AbleAI2025/able-ai/pull/66" },
    ],
  },
  {
    name: "Foxy Apps",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtcj5ijN1KbPc5xv7pudZSHUfFYrd2ot9WA&s",
    role: "Freelance Full Stack Engineer",
    link: "https://www.foxyapps.com/",
    summary:
      "Enhanced a no-code AI tool-building platform by resolving critical stability issues, developing a full-stack content management system, and modernizing core user-facing features to improve functionality and user experience.",
    contributions: [
      {
        description: "Resolved a critical state management bug in the core application builder by implementing robust state isolation, preventing data leakage between components and ensuring a stable app-building experience for users.", link: "https://www.foxyapps.com/builder"
      },
      {
        description: "Developed a full-stack blog and CMS from scratch using Next.js and Supabase, including a secure Zapier webhook for automated, AI-driven content publishing.", link: "https://www.foxyapps.com/blog"
      },
      {
        description: "Modernized the authentication system by implementing a passwordless 'Magic Link' sign-in feature with the Resend API, which streamlined the user login process and unified disparate account types.",
        link: "https://www.foxyapps.com/signin",
      },
      {
        description: "Shipped numerous UI/UX enhancements, including an auto-save-to-draft feature, dynamic app status indicators, and AI-powered assistance for form fields within the tool builder.",
        link: "https://www.foxyapps.com/builder"
      }
    ],
  },
  {
    name: "jpg to png Convertor",
    logo: "https://static.thenounproject.com/png/2616533-200.png",
    role: "Freelance Full Stack Developer (Upwork)",
    link: "https://jpg-to-png-seven.vercel.app/",
    summary:
      "Built a full-stack, serverless image conversion tool from the ground up. The project involved integrating multiple third-party cloud services and designing a scalable backend architecture to prepare for high-volume processing.",
    contributions: [
      {
        description: "Developed a complete image conversion web app using Next.js, integrating Firebase for authentication, and Cloudinary/MinIO for cloud storage solutions.",
      },
      {
        description: "Implemented multi-source file uploads, allowing users to import images directly from their local drive, Google Drive, and Dropbox through their respective APIs.",
      },
      {
        description: "Designed and documented a scalable backend architecture to handle high-volume image processing, proposing solutions using both serverless functions and containerized microservices (Kubernetes) to balance cost and performance.",
      },
    ],
  },
    {
    name: "SquadX",
    logo: "https://static.thenounproject.com/png/2616533-200.png",
    role: "Lead Full Stack Developer",
    link: "https://github.com/rohitsx/squadx",
    summary:
      "Led the end-to-end development of a real-time video chat platform inspired by Omegle. I designed the system architecture, implemented the complex frontend and backend logic, and managed the full deployment process.",
    contributions: [
        {
            description: "Built the application's core real-time video and text chat functionality using WebRTC, managing complex signaling logic, peer-to-peer connections, and data channels for a seamless user experience.",
        },
        {
            description: "Engineered a scalable backend architecture with Node.js, PostgreSQL, and Redis to efficiently manage user sessions and high-concurrency socket connections in a production environment.",
        },
        {
            description: "Handled the complete DevOps lifecycle, containerizing both frontend and backend applications with Docker and configuring Nginx as a reverse proxy for routing and SSL termination on a Linux VPS."
        }
    ]
  },
] as const satisfies readonly Client[];
