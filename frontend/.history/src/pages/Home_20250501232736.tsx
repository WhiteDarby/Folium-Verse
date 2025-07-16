// Home.tsx
import { Sun, Moon, LogIn } from "lucide-react";
import { useTheme } from "../themes/ThemeProvider";

function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      {/* Top Navigation Bar */}
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

      {/* Your existing Home page content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to My Website
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This is your homepage content. The theme can be toggled using the
            button in the navigation bar.
          </p>

          {/* Your existing homepage content would go here */}
        </div>
      </main>
    </div>
  );
}

export default Home;
