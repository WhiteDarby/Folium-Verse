import { LogIn, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../themes/ThemeProvider";

const useTheme = (): ThemeContextType => useContext(ThemeContext);

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-8 w-8">
                <svg
                  viewBox="0 0 24 24"
                  className={`h-full w-full ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* ThemeToggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              {/* LoginButton */}
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                <LogIn size={18} className="mr-2" />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Welcome to My Website
          </h1>
          <p
            className={`mt-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            This is your homepage content. The theme can be toggled using the
            button in the navigation bar.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
