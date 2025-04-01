import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";
import experiences from "./ExperienceData";

const Experience = () => {
  return (
    <section className="my-5">
      {experiences.map((section, index) => (
        <div key={index} className="relative">
          <div className="flex items-center gap-3 relative pb-4">
            <ImageComponent
              src={section.icon}
              alt={section.category}
              size={48}
              className="relative z-10"
            />
            <h2 className="text-2xl font-bold">{section.category}</h2>
          </div>

          {/* Experience/Education Items */}
          <div className="relative ml-5">
            {section.items.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: expIndex * 0.2 }}
                className={`relative pl-8 pb-5 ${
                  expIndex !== section.items.length - 1
                    ? "border-l-[1.5px] border-slate-300 dark:border-zinc-700"
                    : "ml-[1.5px]"
                }`}
              >
                {/* Dot */}
                <div
                  className="absolute left-[-8px] top-[-0.5px] w-3 h-3 bg-emerald-400
                    rounded-full border-5 border-slate-300 dark:border-zinc-700"
                ></div>

                <h3 className="text-md font-bold relative -top-2">
                  {exp.title}
                </h3>

                <span className="text-sm font-semibold text-emerald-500 font-['Manrope'] relative -top-2">
                  {exp.duration}
                </span>
                <p className="text-sm text-zinc-600 dark:text-slate-300 relative -top-2">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
