import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGripLines } from 'react-icons/fa';
import NavbarItem from './NavbarItem';
import useScroll from '../../Hooks/useScroll';

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
      <nav id="headerBar" className="navbar" style={{ backgroundColor: navbarColor, color: textColor }}>
        <div className="sm:!px-0 container flex justify-between items-center">
          <div className="">
            <span className="logo" style={{ color: textColor }}>Alpha</span>
          </div>

          <div className="justify-center">
            <NavbarItem isSidebarOpen={isSidebarOpen} textColor={textColor} />
          </div>

          <div className="social" style={{ color: textColor }}>
            <label
              htmlFor="menu-btn"
              className="btn menu-btn"
            ><FaGripLines onClick={handleSidebarToggle} /></label>

            <span><BiLogoFacebook /></span>
            <span><BiLogoInstagram /></span>
            <span><AiOutlineTwitter /></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;