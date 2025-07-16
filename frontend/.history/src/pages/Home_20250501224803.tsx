import ThemeToggle from "../themes/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./assets/images/logo.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </header>

      {/* Page content */}
      <main className="pt-24 px-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to FoliumVerse 📚</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore, organize, and review your personal library.
        </p>
      </main>
    </div>
  );
};

export default Home;
