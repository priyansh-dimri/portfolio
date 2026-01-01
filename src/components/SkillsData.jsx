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
      "NextJS",
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
    category: "Databases & Deployment",
    icon: DbIcon,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Docker",
      "Linux",
      "CI/CD (GitHub Actions)",
      "Vercel",
      "Render",
      "Railway",
      "Supabase",
      "Netlify",
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
      "Low-Latency Systems",
      "Middleware Development",
      "Fault Tolerance",
      "Performance Optimization",
      "Test-driven Development",
      "Data Structures",
      "Algorithms",
    ],
  },
];

export default skillsData;
