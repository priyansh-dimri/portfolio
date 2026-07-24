import ProjectCard from "./ProjectCard";
import GistDB from "../assets/images/projects/gistdb.png";
import Argus from "../assets/images/projects/argus.png";
import Encra from "../assets/images/projects/encra.png";
import WeatherApp from "../assets/images/projects/weather-app.png";
import TodoApp from "../assets/images/projects/todo.png";

const projects = [
  {
    title: "GistDB",
    description:
      "GistDB is a single-node columnar OLAP database engine built from scratch in C++. It processes queries using 1,024-row vectorized execution, includes a custom buffer pool manager with LRU eviction, and a rule-based optimizer implementing predicate pushdown and column pruning, with SQL parsing as its only external dependency.",
    techStack: [
      "C++",
      "Database Internals",
      "Columnar Storage",
      "Vectorized Query Execution",
      "Query Optimization",
      "Buffer Pool Management",
      "Docker",
      "GoogleTest",
    ],
    liveLink:
      "https://hub.docker.com/repository/docker/priyanshd0908/gistdb/general",
    repoLink: "https://github.com/priyansh-dimri/gistdb",
    videoLink: "https://youtu.be/maMNzd2HwaA",
    image: GistDB,
  },
  {
    title: "Argus",
    description:
      "Argus is a Hybrid AI Web Application Firewall (WAF) written in Go. It aims to solves the trade off between Latency and Context by merging the speed of deterministic pattern matching with the deep contextual understanding of probabilistic AI models.",
    techStack: [
      "Go",
      "Web Application Firewall (WAF)",
      "API Security",
      "Fault Tolerance",
      "AI-based Threat Detection",
      "NextJS",
      "ShadCN",
      "Test-driven Development",
      "Docker",
    ],
    liveLink: "https://argusguard.vercel.app/",
    repoLink: "https://github.com/priyansh-dimri/argus",
    videoLink: "https://youtu.be/c4e-IWY4Fps",
    image: Argus,
  },
  {
    title: "Encra",
    description:
      "Encra is a full-stack, end-to-end encrypted messaging platform featuring post-quantum key exchange, real-time Socket.IO messaging, and AES-256 hybrid encryption. Built with scalability, security, and performance in mind.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Post-Quantum Cryptography",
      "AES-256",
      "JWT",
      "Argon2",
      "MUI",
    ],
    liveLink: "https://encra-git-main-priyansh-dimris-projects.vercel.app/",
    repoLink: "https://github.com/priyansh-dimri/encra",
    videoLink: "https://youtu.be/VvuvK6gCZds",
    image: Encra,
  },
];

const ProjectsSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
