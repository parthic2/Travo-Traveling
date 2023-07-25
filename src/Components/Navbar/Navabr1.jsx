import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGripLines } from 'react-icons/fa';
import NavbarItem1 from './NavbarItem1';

const Navbar1 = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className="">
      <nav id="headerBar" className="navbar-inner">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-black cursor-pointer">Alpha</span>
          </div>

          <div className="justify-center">
            <NavbarItem1 isSidebarOpen={isSidebarOpen} />
          </div>

          <div className="social">
            <label
              htmlFor="menu-btn"
              className="btn menu-btn"
            ><FaGripLines onClick={handleSidebarToggle} /></label>

            <span className="text-black"><BiLogoFacebook /></span>
            <span className="text-black"><BiLogoInstagram /></span>
            <span className="text-black"><AiOutlineTwitter /></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar1;