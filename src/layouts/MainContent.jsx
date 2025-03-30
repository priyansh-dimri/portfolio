import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Projects from "../views/Projects";
import Contact from "../views/Contact";

const MainContent = () => {
  const [activeView, setActiveView] = useState("about");
  return (
    <div
      className="sm:relative bg-slate-200 dark:bg-zinc-800
      border border-slate-300 dark:border-zinc-700 p-4 rounded-xl"
    >
      <div
        className="sm:absolute sm:left-auto sm:bottom-auto sm:top-0 sm:right-0 sm:w-min
        fixed bottom-0 left-0 w-full flex justify-center items-center
        border border-slate-300 dark:border-zinc-700
        border-b-0 rounded-tl-xl rounded-tr-xl border-l-0 border-r-0
        sm:rounded-tr-xl sm:rounded-bl-xl sm:border-l sm:rounded-tl-none sm:border-t-0 sm:border-b
        bg-slate-200/40 dark:bg-zinc-800/40 backdrop-blur-md"
      >
        <Navbar setActiveView={setActiveView} activeView={activeView} />
      </div>

      <div className="mt-4">
        {activeView === "about" && <About />}
        {activeView === "projects" && <Projects />}
        {activeView === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default MainContent;
