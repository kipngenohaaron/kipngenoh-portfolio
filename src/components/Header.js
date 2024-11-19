// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ toggleDarkMode }) => {
//   return (
//     <header>
//       <h1>Kipngenoh</h1>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/skills">Skills</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>
//       <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Kipngenoh Aaron</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

