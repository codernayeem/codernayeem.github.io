import { useEffect, useState } from "react";

const DARK_MODE_KEY = "darkMode";

const prefersDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const useDarkMode = () => {
  const [enabled, setEnabled] = useState(() => {
    const savedDarkMode = localStorage.getItem(DARK_MODE_KEY);
    return savedDarkMode ? savedDarkMode === "true" : prefersDarkMode();
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    const applyDarkMode = () => {
      localStorage.setItem(DARK_MODE_KEY, enabled.toString());
      if (enabled) {
        requestAnimationFrame(() => {
          htmlElement.classList.add("dark");
        });
      } else {
        requestAnimationFrame(() => {
          htmlElement.classList.remove("dark");
        });
      }
    };

    applyDarkMode();
  }, [enabled]);

  const toggle = () => setEnabled((prev) => !prev);

  return [enabled, toggle] as const;
};

export default useDarkMode;
