import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGripLines } from 'react-icons/fa';
import NavbarInnerItem from './NavbarInnerItem';
import { Link } from 'react-router-dom';

const NavbarInner = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className="">
      <nav id="headerBar" className="navbar-inner flex justify-between items-center">
        <div className="text-black cursor-pointer">
          <Link to="/">Alpha</Link>
        </div>

        <div className="justify-center">
          <NavbarInnerItem isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex gap-3">
          <div className="btn menu-btn">
            <FaGripLines onClick={handleSidebarToggle} />
          </div>

          <div className="social">
            <div className="text-black"><Link to="/"><BiLogoFacebook /></Link></div>
            <div className="text-black"><Link to="/"><BiLogoInstagram /></Link></div>
            <div className="text-black"><Link to="/"><AiOutlineTwitter /></Link></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarInner;