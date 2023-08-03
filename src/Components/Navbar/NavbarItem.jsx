import React from 'react';
import { Link } from "react-router-dom";
import { navigationItems } from '../../Data/NavbarItem';

const NavbarItem = ({ isSidebarOpen, textColor }) => {
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
              className="list uppercase sm:text-black"
              style={{ color: textColor }}
            >
              {item.text}
            </Link>
            {item.icon ?
              <p className="dropdown-icon">{item.icon}</p>
              : ""}

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

export default NavbarItem;