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
    localStorage.setItem(DARK_MODE_KEY, enabled.toString());
    if (enabled) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [enabled]);

  const toggle = () => setEnabled((prev) => !prev);

  return [enabled, toggle] as const;
};

export default useDarkMode;
