import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link to="hero" smooth={true} duration={500}>
            Sangamesh<span>.</span>
          </Link>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
