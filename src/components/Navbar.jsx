import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) document.body.classList.add("dark-theme");
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.body.classList.toggle("dark-theme");
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""} sticky`}>
      {/* Left: Logo & Brand */}
      <div className="navbar-left">
        <Link to="/" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>YourBrand</Link>
      </div>

      {/* Middle: Desktop Nav Links - Now using Link */}
      <div className="navbar-center">
        <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
        <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
        <Link to="/services" className="nav-link" onClick={closeMobileMenu}>Services</Link>
        <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
        
        {/* Optional Dropdown Example */}
        {/* <div className="dropdown">
          <button className="dropbtn">More ▼</button>
          <div className="dropdown-content">
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div> */}
      </div>

      {/* Right: Dark Mode Toggle */}
      <div className="navbar-right">
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      <button 
        className="hamburger" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay - Now using Link */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
        <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
        <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</Link>
        <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link>
        <button onClick={toggleDarkMode} className="mobile-dark-mode-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;