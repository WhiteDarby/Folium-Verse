// TopNavbar.tsx
import { Sun, Moon, LogIn } from "lucide-react";
import { useTheme } from "../../themes/ThemeProvider";

const TopNavbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <div className="h-8 w-8">
              {/* Replace with your actual logo.svg */}
              <svg
                viewBox="0 0 24 24"
                className="h-full w-full text-blue-600 dark:text-blue-400"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          {/* Right side with theme toggle and login button */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Login button */}
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              <LogIn size={18} className="mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
