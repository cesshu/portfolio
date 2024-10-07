import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import { FaBars } from 'react-icons/fa'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Use the useLocation hook

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('dimmed', !menuOpen);
  };

  // Update currentPage whenever the location changes
  useEffect(() => {
    const path = location.pathname; // Get the current path
    if (path === '/portfolio') setCurrentPage('home');
    else if (path === '/about') setCurrentPage('about');
    else if (path === '/works') setCurrentPage('works');
  }, [location]); // Add location as a dependency

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Current Page Name */}
        <div className="current-page">
          {currentPage.split('').map((letter, index) => (
            <div key={index}>{letter}</div>
          ))}
        </div>

        {/* Signature */}
        <div className="signature">
          <span>&lt;/PJ&gt;</span> 
        </div>
      </div>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fullscreen-menu">
          <NavLink to="/portfolio" className="menu-link" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="menu-link" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/works" className="menu-link" onClick={toggleMenu}>
            Works
          </NavLink>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
