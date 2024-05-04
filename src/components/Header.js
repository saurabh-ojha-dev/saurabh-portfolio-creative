import React from 'react'

function Header() {
  return (
    <div>
        {/* <!-- header starts here --> */}
        <header>
                <nav>
                    <div className="left">Saurabh's Portfolio</div>
                    <div className="right">
                        <ul>
                            <li> <a href="/">Home</a></li>
                            <li> <a href="/about">About Us</a></li>
                            <li> <a href="/projects">Projects</a></li>
                            <li> <a href="/contactme">Contact Me</a></li>
                        </ul>
                    </div>
                </nav>

            </header>
            {/* <!-- header ends here --> */}
      
    </div>
  )
}

export default Header;
