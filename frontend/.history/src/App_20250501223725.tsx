import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav className="p-4 border-b border-gray-300 dark:border-gray-700">
        <Link to="/" className="mr-4 text-blue-600 dark:text-blue-300">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 dark:text-blue-300">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Example future route */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
