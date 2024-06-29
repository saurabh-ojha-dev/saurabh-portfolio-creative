import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div>
      {/* <!-- header starts here --> */}
      <header>
        <nav>
          <div className="left"><img src={require("../assets/images/logos_28.jpg")} height={"60px"} width={"60px"} alt="logo" style={{ paddingRight: "10px" }} />Saurabh's Portfolio</div>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; {/* This is a hamburger icon */}
          </div>
          <div className={`right ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link className="navigation-button" onClick={closeMenu} to="/">Home</Link></li>
              <li><Link className="navigation-button" onClick={closeMenu} to="/about">About</Link></li>
              <li><Link className="navigation-button" onClick={closeMenu} to="/projects">Projects</Link></li>
              <li><Link className="navigation-button" onClick={closeMenu} to="/contactme">Let's Connect</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <!-- header ends here --> */}
    </div>
  );
}

export default Header;
