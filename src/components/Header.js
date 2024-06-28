import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      {/* <!-- header starts here --> */}
      <header>
        <nav>
          <div className="left">Saurabh's Portfolio</div>
          <div className="right">
            <ul>
              <li> <Link className="navigation-button" to="/">         Home       </Link></li>
              <li> <Link className="navigation-button" to="/about">    About</Link></li>
              <li> <Link className="navigation-button" to="/projects"> Projects   </Link></li>
              <li> <Link className="navigation-button" to="/contactme">Contact Me </Link></li>
            </ul>
          </div>
        </nav>

      </header>
      {/* <!-- header ends here --> */}

    </div>
  )
}

export default Header;
