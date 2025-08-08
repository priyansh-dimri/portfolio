import ExternalLink from "../assets/images/external-link.svg";
import VideoLink from "../assets/images/video-link.svg";
import Github from "../assets/images/github.svg";
import Badge from "./Badge";

const ProjectCard = ({
  title,
  description,
  techStack,
  liveLink,
  repoLink,
  videoLink,
  image,
}) => {
  return (
    <div
      className="bg-slate-200 dark:bg-zinc-800 p-4 rounded-xl
      border border-r-0 border-b-0 border-gray-300 dark:border-zinc-700
      shadow-md transition hover:shadow-lg relative group overflow-hidden"
    >
      <div className="relative w-full h-40 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover 
              scale-110 group-hover:scale-100 transition-transform duration-500 ease-in-out"
          />
        )}

        <div
          className="absolute bottom-2 right-2 flex items-center gap-1 opacity-70 
          group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-700 p-1.5 rounded-full shadow"
            >
              <img src={ExternalLink} alt="Live Demo" className="w-5 h-5" />
            </a>
          )}
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-700 p-1.5 rounded-full shadow"
            >
              <img src={VideoLink} alt="Live Demo" className="w-5 h-5" />
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-700 p-1.5 rounded-full shadow"
            >
              <img src={Github} alt="GitHub" className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-slate-300 mt-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 my-2">
        {techStack.map((tech, index) => (
          <Badge text={tech} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
