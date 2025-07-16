import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./themes/ThemeProvider";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <ThemeProvider>
          <Route path="/" element={<Home />} />
        </ThemeProvider>
      </Routes>
    </Router>
  );
}

export default App;
