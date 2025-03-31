import GradientBar from "../components/GradientBar";
import SkillsSection from "../components/SkillsSection";

const About = () => {
  return (
    <div className="mx-2">
      <div className="text-2xl font-bold">About Me</div>
      <GradientBar />
      <div className="text-sm font-light font-['Manrope'] my-3">
        I’m a <strong>problem solver and tech enthusiast</strong> passionate
        about building <strong>scalable, efficient, and secure systems</strong>.
        With a deep understanding of{" "}
        <strong>web technologies and cybersecurity</strong>, I design
        <strong> high-performance applications</strong> that seamlessly
        integrate
        <strong>
          {" "}
          security, functionality, and exceptional user experience
        </strong>
        .
      </div>

      {/* <div className="grid sm:grid-cols-2 gap-6 mt-6">
        <div className="p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800">
          <h3 className="text-lg font-semibold mb-2">What I Do</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            I specialize in{" "}
            <strong>full-stack web development and cybersecurity</strong>,
            ensuring applications are built with{" "}
            <strong>performance, security, and scalability</strong> in mind.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800">
          <h3 className="text-lg font-semibold mb-2">Currently Exploring</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
            <li>
              Advanced **cybersecurity techniques** (penetration testing, secure
              coding)
            </li>
            <li>
              Optimized **full-stack architectures** for better scalability &
              security
            </li>
            <li>
              Efficient **developer workflows** to enhance productivity 🚀
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default About;
