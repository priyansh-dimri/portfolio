import CurrentlyExploring from "../components/CurrentlyExploring";
import GradientBar from "../components/GradientBar";
import WhatIDo from "../components/WhatIDo";

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

      <div className="text-xl font-bold mt-8 mb-3">What I Do</div>
      <WhatIDo />

      <div className="text-xl font-bold mt-8 mb-3">Currently Exploring</div>
      <CurrentlyExploring />
    </div>
  );
};

export default About;
