import ProjectCard from "./ProjectCard";
import MemoryCard from "../assets/images/projects/memory-card-game.png";
import WeatherApp from "../assets/images/projects/weather-app.png";
import TodoApp from "../assets/images/projects/todo.png";

const projects = [
  {
    title: "Memory Card Game",
    description:
      "A fun memory-based card game where players match pairs within a limited number of moves.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://me-mory-card-game.netlify.app/",
    repoLink: "https://github.com/priyansh-dimri/memory-card",
    image: MemoryCard,
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
