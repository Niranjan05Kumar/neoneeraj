import { useState, useEffect } from "react";
import { RiComputerLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Switch = () => {
  const getDefaultTheme = () => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getDefaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system theme change when on 'system' setting
  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  return (
    <div
      role="group"
      aria-label="Color theme selector"
      className="inline-flex items-center border border-border bg-surface p-[2px]"
    >
      <button
        type="button"
        title="Follow System Theme"
        aria-label="Follow System Theme"
        onClick={() => setTheme("system")}
        className={`px-2 py-1.5 transition-colors duration-150 flex items-center justify-center cursor-pointer ${
          theme === "system"
            ? "bg-surface-secondary text-accent border border-border"
            : "text-text-muted hover:text-text border border-transparent"
        }`}
      >
        <RiComputerLine size={14} />
      </button>

      <button
        type="button"
        title="Light Theme"
        aria-label="Light Theme"
        onClick={() => setTheme("light")}
        className={`px-2 py-1.5 transition-colors duration-150 flex items-center justify-center cursor-pointer ${
          theme === "light"
            ? "bg-surface-secondary text-accent border border-border"
            : "text-text-muted hover:text-text border border-transparent"
        }`}
      >
        <FiSun size={14} />
      </button>

      <button
        type="button"
        title="Dark Theme"
        aria-label="Dark Theme"
        onClick={() => setTheme("dark")}
        className={`px-2 py-1.5 transition-colors duration-150 flex items-center justify-center cursor-pointer ${
          theme === "dark"
            ? "bg-surface-secondary text-accent border border-border"
            : "text-text-muted hover:text-text border border-transparent"
        }`}
      >
        <BsFillMoonStarsFill size={13} />
      </button>
    </div>
  );
};

export default Switch;
