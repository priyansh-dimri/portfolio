import CurrentlyExploring from "../components/CurrentlyExploring";
import GradientBar from "../components/GradientBar";
import WhatIDo from "../components/WhatIDo";

const About = () => {
  return (
    <div className="mx-2">
      <div className="text-2xl font-bold">About Me</div>
      <GradientBar />
      <div className="text-sm font-light font-['Manrope'] my-3 mt-4">
        I'm a software engineering student who enjoys building high-performance
        backend systems and exploring the engineering trade-offs behind them. My
        projects span database internals, application security, and distributed
        backend services, with a focus on writing reliable, maintainable, and
        efficient software.
      </div>

      <div className="text-xl font-bold mt-8 mb-3">What I Do</div>
      <WhatIDo />

      <div className="text-xl font-bold mt-8 mb-3">Currently Exploring</div>
      <CurrentlyExploring />
    </div>
  );
};

export default About;
