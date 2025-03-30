import skillsData from "./SkillsData";
import Badge from "./Badge";

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((section, index) => (
        <div
          key={index}
          className="flex gap-4 items-start p-4 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm"
        >
          <img
            src={section.icon}
            alt={section.category}
            className="w-10 h-10"
          />

          <div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              {section.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, i) => (
                <Badge text={skill} key={i} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
