import DevIcon from "../assets/images/website.svg";
import DbIcon from "../assets/images/database.svg";
import ToolsIcon from "../assets/images/tools.svg";
import DsaIcon from "../assets/images/problem-solving.svg";

const skillsData = [
  {
    category: "Web Development",
    icon: DevIcon,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Tailwind CSS",
      "ShadCN",
      "Vite",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Databases & Infrastructure",
    icon: DbIcon,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Docker",
      "Linux",
      "Git",
      "CI/CD (GitHub Actions)",
      "Supabase",
      "Vercel",
      "Render",
      "Railway",
    ],
  },
  {
    category: "Security & Cryptography",
    icon: ToolsIcon,
    skills: [
      "Web Application Firewall (WAF)",
      "API Security",
      "AI-based Threat Detection",
      "Threat Modeling",
      "Post-Quantum Cryptography",
      "Secure Coding Practices",
      "JWT",
      "AES-256",
      "Argon2",
      "Burp Suite",
    ],
  },
  {
    category: "Programming & Systems",
    icon: DsaIcon,
    skills: [
      "Go",
      "C++",
      "C",
      "Database Internals",
      "Query Optimization",
      "Buffer Pool Management",
      "Performance Optimization",
      "Fault Tolerance",
      "GoogleTest",
      "Data Structures & Algorithms",
    ],
  },
];

export default skillsData;
