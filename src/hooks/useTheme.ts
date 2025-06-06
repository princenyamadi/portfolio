import { useState, useEffect } from "react";
import { STORAGE_KEYS } from "@/constants";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage first
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved) {
      return saved === "dark";
    }

    // Fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem(STORAGE_KEYS.THEME, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(STORAGE_KEYS.THEME, "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return {
    isDarkMode,
    toggleDarkMode,
  };
};
