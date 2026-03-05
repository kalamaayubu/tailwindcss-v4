import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="md:flex" aria-label="Toggle theme">
      {isDark ? (
        <Sun className="text-white size-5" />
      ) : (
        <Moon className="text-black size-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
