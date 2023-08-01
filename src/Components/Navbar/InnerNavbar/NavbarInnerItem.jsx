import React from 'react';
import { Link } from "react-router-dom";
import { navigationItems } from '../../../Data/NavbarItem';

const NavbarInnerItem = ({ isSidebarOpen, textColor }) => {
  return (
    <div className="wrapper">
      <input
        type="radio"
        name="slider"
        readOnly
        id="menu-btn"
        checked={isSidebarOpen} />
      <input
        type="radio"
        name="slider"
        readOnly
        id="close-btn"
        checked={!isSidebarOpen} />
      <ul className={`nav-links ${isSidebarOpen ? 'show' : ''}`}>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="item uppercase sm:text-black"
              style={{ color: textColor }}
            >
              {item.text}
            </Link>

            {item.subItems && (
              <ul>
                {item.subItems.map((subItems, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItems.link}>{subItems.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarInnerItem;