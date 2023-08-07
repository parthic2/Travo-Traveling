import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { FaGripLines } from 'react-icons/fa';
import NavbarItem from './NavbarItem';
import useScroll from '../../Hooks/useScroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { navbarVisible, navbarColor, textColor } = useScroll();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className="reverse-scroll"
      style={{ display: navbarVisible ? 'block' : 'none' }}
    >
      <nav id="headerBar" className="navbar flex justify-between items-center" style={{ backgroundColor: navbarColor, color: textColor }}>
        <div className="logo" style={{ color: textColor }}>
          <Link to="/">Alpha</Link>
        </div>

        <div className="justify-center">
          <NavbarItem isSidebarOpen={isSidebarOpen} textColor={textColor} />
        </div>

        <div className="flex gap-3">
          <div className="btn menu-btn">
            <FaGripLines onClick={handleSidebarToggle} />
          </div>

          <div className="social" style={{ color: textColor }}>
            <div><Link to="https://www.facebook.com/people/Stackholic-Infotech/100088083011866/?mibextid=ZbWKwL"><BiLogoFacebook /></Link></div>
            <div><Link to="https://www.instagram.com/stackholic_infotech/"><BiLogoInstagram /></Link></div>
            <div><Link to="https://www.linkedin.com/company/stackholic-infotech/"><BiLogoLinkedin /></Link></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;