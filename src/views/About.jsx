import GradientBar from "../components/GradientBar";
import SkillsSection from "../components/SkillsSection";

const About = () => {
  return (
    <div className="mx-2">
      <div className="text-2xl font-bold">About Me</div>
      <GradientBar />
      <div className="text-sm font-light font-['Manrope'] my-3">
        I’m a problem solver and tech enthusiast who loves solving complex
        problems with efficient, scalable, and secure solutions. With a strong
        foundation in web technologies and cybersecurity, I build
        high-performance systems that are seamless, resilient, and optimized for
        the future.
      </div>
      <div className="text-sm font-light font-['Manrope'] my-3">
        Beyond just coding, I refine user experiences, fortify applications
        against threats, and push technology’s boundaries to create meaningful
        digital solutions.
      </div>
      <div className="text-sm font-light font-['Manrope'] my-3">
        🚀 Let’s build something impactful.
      </div>
      <div className="text-2xl font-bold mt-8 mb-3">Skills</div>
      <SkillsSection />
    </div>
  );
};

export default About;
