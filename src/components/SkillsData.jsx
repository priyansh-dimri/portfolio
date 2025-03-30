import DevIcon from "../assets/images/website.svg";
import DbIcon from "../assets/images/database2.svg";
import ToolsIcon from "../assets/images/tools.svg";
import DsaIcon from "../assets/images/problem-solving.svg";

const skillsData = [
  {
    category: "Web Development",
    icon: DevIcon,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "EJS",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    category: "Databases & Deployment",
    icon: DbIcon,
    skills: ["PostgreSQL", "MySQL", "Supabase", "Railway", "Netlify", "Linux"],
  },
  {
    category: "Tools & Version Control",
    icon: ToolsIcon,
    skills: ["Git", "Burp Suite"],
  },
  {
    category: "Programming & Problem Solving",
    icon: DsaIcon,
    skills: ["C", "C++"],
  },
];

export default skillsData;
