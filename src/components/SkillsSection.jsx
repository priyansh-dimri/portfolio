import { motion } from "framer-motion";
import skillsData from "./SkillsData";
import Badge from "./Badge";

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex gap-4 items-start p-5
            bg-slate-200 dark:bg-zinc-800
            border border-r-0 border-b-0 border-gray-300 dark:border-zinc-700
            rounded-xl shadow-[1px_1px_2px_rgba(0,0,0,0.05)]"
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
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsSection;
