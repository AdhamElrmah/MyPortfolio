import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme !== null) {
          return savedTheme === "dark";
        }
      } catch (e) {
        console.warn("Failed to read theme from localStorage:", e);
      }
      return true; // Default to dark
    }
    return true;
  });

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("portfolio-theme", "light");
      }
    } catch (e) {
      console.warn("Failed to save theme to localStorage:", e);
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
};
