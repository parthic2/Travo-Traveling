import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { navigationItems } from '../../Data/NavbarItem';

const NavbarItem = ({ isSidebarOpen, textColor }) => {
  const location = useLocation();
  const isSubLinkActive = (subItems) => {
    return subItems && subItems.some((subItem) => subItem.link === location.pathname);
  };

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
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `list uppercase sm:text-black ${isActive || isSubLinkActive(item.subItems)
                  ? 'active-link'
                  : ''
                }`
              }
              style={{ color: textColor }}
            >
              {item.text}
            </NavLink>
            {item.icon ?
              <p className="dropdown-icon">{item.icon}</p>
              : ""}

            {item.subItems && (
              <ul>
                {item.subItems.map((subItems, subIndex) => (
                  <li key={subIndex}>
                    <NavLink to={subItems.link}>{subItems.text}</NavLink>
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