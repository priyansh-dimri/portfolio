import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SunIcon from "../assets/images/sun.svg";
import MoonIcon from "../assets/images/moon.svg";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-tr-xl rounded-bl-xl lg:rounded-full border dark:border-zinc-700 border-slate-300 
                 bg-slate-200 dark:bg-zinc-800 hover:bg-slate-300 dark:hover:bg-zinc-700
                 transition-all"
    >
      <motion.img
        key={theme}
        src={theme === "dark" ? MoonIcon : SunIcon}
        alt="Theme Icon"
        className="h-5 w-5"
        initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    </button>
  );
};

export default ThemeToggle;
