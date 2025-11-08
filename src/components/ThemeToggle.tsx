import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex items-center justify-center
        w-12 h-12 rounded-2xl
        backdrop-blur-md
        transition-all duration-300
        hover:scale-110 active:scale-95
        shadow-lg
        hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]
      "
      style={{
        background: "hsl(var(--card) / 0.3)",
        border: "1px solid hsl(var(--border))",
      }}
    >
      <span
        className={`
          absolute inset-0 rounded-2xl
          transition-all duration-300
          ${theme === "light" ? "opacity-0" : "opacity-20"}
        `}
        style={{
          background: "hsl(var(--primary))",
        }}
      ></span>

      <div
        className={`
          transition-all duration-500
          ${theme === "light" ? "rotate-0 scale-100" : "rotate-180 scale-75"}
        `}
      >
        {theme === "light" ? (
          <Moon
            className="h-6 w-6 text-[hsl(var(--primary))]"
          />
        ) : (
          <Sun
            className="h-7 w-7 text-[hsl(var(--accent))]"
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;