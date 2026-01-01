import ProjectCard from "./ProjectCard";
import Argus from "../assets/images/projects/argus.png";
import Encra from "../assets/images/projects/encra.png";
import WeatherApp from "../assets/images/projects/weather-app.png";
import TodoApp from "../assets/images/projects/todo.png";

const projects = [
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
  {
    title: "Weather App",
    description:
      "A simple weather app that fetches real-time weather data based on user input.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    liveLink: "https://priyansh-dimri.github.io/weather-app/",
    repoLink: "https://github.com/priyansh-dimri/weather-app",
    image: WeatherApp,
  },
  {
    title: "To-Do App",
    description:
      "A task management app to add, remove, and mark tasks as complete.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://priyansh-dimri.github.io/todo-list/",
    repoLink: "https://github.com/priyansh-dimri/todo-list",
    image: TodoApp,
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
