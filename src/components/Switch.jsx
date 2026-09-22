import { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Switch = () => {
  const getDefaultTheme = () => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getDefaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      className="w-9 h-9 shrink-0 flex items-center justify-center border border-border bg-surface text-text hover:border-accent hover:text-accent transition-colors duration-150 cursor-pointer"
    >
      {theme === "dark" ? (
        <FiSun size={17} />
      ) : (
        <BsFillMoonStarsFill size={15} />
      )}
    </button>
  );
};

export default Switch;
