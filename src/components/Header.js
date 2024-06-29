import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css'; // Make sure to create and include your CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* <!-- header starts here --> */}
      <header>
        <nav>
          <div className="left"><img src={require("../assets/images/logos_28.jpg")} height={"60px"} width={"60px"} alt="logo" style={{paddingRight:"10px"}}/>Saurabh's Portfolio</div>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; {/* This is a hamburger icon */}
          </div>
          <div className={`right ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link className="navigation-button" to="/">Home</Link></li>
              <li><Link className="navigation-button" to="/about">About</Link></li>
              <li><Link className="navigation-button" to="/projects">Projects</Link></li>
              <li><Link className="navigation-button" to="/contactme">Let's Connect</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <!-- header ends here --> */}
    </div>
  );
}

export default Header;
