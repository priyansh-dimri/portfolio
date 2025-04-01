import GradientBar from "../components/GradientBar";
import SkillsSection from "../components/SkillsSection";
import ExperienceComponent from "../components/Experience";

const Experience = () => {
  return (
    <div className="mx-2">
      <div className="text-2xl font-bold">Experience</div>
      <GradientBar />
      <ExperienceComponent />
      <div className="text-xl font-bold mb-3">Skills</div>
      <SkillsSection />
    </div>
  );
};

export default Experience;
