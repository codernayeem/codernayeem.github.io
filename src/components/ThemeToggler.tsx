import { MouseEventHandler } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const [darkModeEnabled, toggle] = useDarkMode();

  return (
    <button
      onClick={toggle as MouseEventHandler<HTMLButtonElement>}
      className="relative p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
      aria-label={darkModeEnabled ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkModeEnabled ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-neutral-400"
          >
            <Moon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-neutral-600"
          >
            <Sun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggler;
