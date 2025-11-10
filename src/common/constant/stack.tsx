import type { JSX } from "react";
import { BsCodeSlash, BsCreditCard, BsRobot } from "react-icons/bs";
import {
  SiCss3,
  SiDeno,
  SiDocker,
  SiDropbox,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGmail,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiWebrtc,
  SiYoutube,
} from "react-icons/si";
import { TbComponents, TbDatabase, TbKey } from "react-icons/tb";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineUploadFile } from "react-icons/md";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // --- Languages ---
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  Python: <SiPython size={iconSize} className="text-yellow-500" />,
  PHP: <SiPhp size={iconSize} className="text-indigo-400" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-300" />,
  
  // --- Frontend Frameworks & Libraries ---
  React: <SiReact size={iconSize} className="text-sky-500" />,
  "React Native": <SiReact size={iconSize} className="text-sky-400" />,
  Expo: <SiExpo size={iconSize} />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  "shadcn/ui": <TbComponents size={iconSize} />,
  Zustand: <SiReact size={iconSize} className="text-lime-500" />,
  RNEUI: <SiReact size={iconSize} className="text-indigo-500" />,
  
  // --- Backend Frameworks & Runtimes ---
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-600" />,
  "Express.js": <SiExpress size={iconSize} />,
  FastAPI: <SiFastapi size={iconSize} className="text-teal-500" />,
  Deno: <SiDeno size={iconSize} />,
  
  // --- Middleware & Utilities ---
  CORS: <BsCodeSlash size={iconSize} className="text-orange-400" />,
  Dotenv: <AiOutlineFileText size={iconSize} className="text-yellow-600" />,
  Multer: <MdOutlineUploadFile size={iconSize} className="text-blue-500" />,
  
  // --- Databases & ORMs ---
  MongoDB: <SiMongodb size={iconSize} className="text-green-600" />,
  MySQL: <SiMysql size={iconSize} className="text-blue-400" />,
  PostgreSQL: <SiPostgresql size={iconSize} className="text-blue-500" />,
  Redis: <SiRedis size={iconSize} className="text-red-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-emerald-500" />,
  "Drizzle ORM": <TbDatabase size={iconSize} className="text-green-400" />,
  
  // --- DevOps & Infrastructure ---
  Docker: <SiDocker size={iconSize} className="text-blue-500" />,
  "Docker Compose": <SiDocker size={iconSize} className="text-sky-600" />,
  Nginx: <SiNginx size={iconSize} className="text-green-500" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Supabase: <SiSupabase size={iconSize} className="text-green-500" />,
  
  // --- Real-time & Communication ---
  WebRTC: <SiWebrtc size={iconSize} className="text-green-400" />,
  "Socket.IO": <SiSocketdotio size={iconSize} />,
  Ratchet: <SiSocketdotio size={iconSize} className="text-gray-400" />,
  
  // --- APIs & Services ---
  "YouTube API": <SiYoutube size={iconSize} className="text-red-500" />,
  "Google Auth": <SiGoogle size={iconSize} className="text-blue-500" />,
  "Google Drive API": <SiGoogle size={iconSize} className="text-green-500" />,
  "Gmail API": <SiGmail size={iconSize} className="text-red-400" />,
  "Dropbox API": <SiDropbox size={iconSize} className="text-blue-600" />,
  "Telegram Bot API": <SiTelegram size={iconSize} className="text-sky-500" />,
  DodoPayments: <BsCreditCard size={iconSize} className="text-purple-400" />,
  RevenueCat: <BsCreditCard size={iconSize} className="text-orange-500" />,
  Webhook: <BsCodeSlash size={iconSize} className="text-gray-400" />,
  "Better Auth": <TbKey size={iconSize} className="text-yellow-500" />,
  
  // --- AI & Machine Learning ---
  Gemini: <BsRobot size={iconSize} className="text-indigo-500" />,
  "Google Generative AI": <SiGoogle size={iconSize} className="text-purple-500" />,
  LangChain: <BsRobot size={iconSize} className="text-yellow-500" />,
  Qdrant: <BsRobot size={iconSize} className="text-teal-400" />,
};
