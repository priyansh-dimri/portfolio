import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Experience from "../views/Experience";
import Portfolio from "../views/Portfolio";
import Profiles from "../views/Profiles";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MainContent = () => {
  const [activeView, setActiveView] = useState("about");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sm:relative bg-slate-200 dark:bg-zinc-800
      border border-slate-300 dark:border-zinc-700 p-4 rounded-xl"
    >
      <motion.div
        className="sm:absolute sm:left-auto sm:bottom-auto sm:top-0 sm:right-0 sm:w-min
        fixed bottom-0 left-0 w-full flex justify-center items-center
        border border-slate-300 dark:border-zinc-700
        border-b-0 rounded-tl-xl rounded-tr-xl border-l-0 border-r-0
        sm:rounded-tr-xl sm:rounded-bl-xl sm:border-l sm:rounded-tl-none sm:border-t-0 sm:border-b
        bg-slate-200/40 dark:bg-zinc-800/40 backdrop-blur-md z-50"
      >
        <Navbar setActiveView={setActiveView} activeView={activeView} />
      </motion.div>

      <div className="my-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {activeView === "about" && <About />}
            {activeView === "experience" && <Experience />}
            {activeView === "portfolio" && <Portfolio />}
            {activeView === "profiles" && <Profiles />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MainContent;
