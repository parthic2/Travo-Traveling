import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
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
            <div><Link to="/"><BiLogoFacebook /></Link></div>
            <div><Link to="/"><BiLogoInstagram /></Link></div>
            <div><Link to="/"><AiOutlineTwitter /></Link></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;