import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="p-4 bg-gray-800 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-semibold">My SPA</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
            </div>
          </div>
        </nav>

        {/* Content Section */}
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center p-4 bg-gray-800 text-gray-400">
          &copy; {new Date().getFullYear()} My SPA
        </footer>
      </div>
    </Router>
  );
};

export default App;
