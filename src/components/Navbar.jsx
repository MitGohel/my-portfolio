import { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞' : '🌙'}
      </button>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
