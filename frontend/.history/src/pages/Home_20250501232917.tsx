// Home.tsx
import NavBar from "../components/navigationBar/TopNavbar"; // Import the separate NavBar component

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      {/* Use the NavBar component */}
      <NavBar />

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
