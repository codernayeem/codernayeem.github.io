import { MouseEventHandler } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const [darkModeEnabled, toggle] = useDarkMode();

  return (
    <button
      onClick={toggle as MouseEventHandler<HTMLButtonElement>}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkModeEnabled ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={24} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggler;
