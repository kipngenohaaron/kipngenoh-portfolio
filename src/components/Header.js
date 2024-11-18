import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode }) => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;
