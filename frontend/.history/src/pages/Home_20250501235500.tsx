import logo from "../assets/images/logo.svg"; // adjust if needed
import { LogIn } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="FoliumVerse logo" className="h-8 w-auto" />
              <span className="text-xl font-semibold hidden sm:inline">
                FoliumVerse
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                <LogIn size={18} className="mr-2" />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </div>
  );
}

export default Home;
