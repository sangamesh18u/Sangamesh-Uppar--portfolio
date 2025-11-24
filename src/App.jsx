import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Preloader from './components/Preloader';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for system preference
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemPref);

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="app">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
