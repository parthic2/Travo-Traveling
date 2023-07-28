import React from 'react';
import { Link } from "react-router-dom";

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
                <li>
                    <Link
                        to="/"
                        className="item uppercase sm:text-black"
                        style={{ color: textColor }}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        className="item uppercase sm:text-black"
                        style={{ color: textColor }}
                    >About</Link>
                    <ul>
                        <li>
                            <Link to="/About_1">
                                About 1
                            </Link>
                        </li>
                        <li>
                            <Link to="/About_2">
                                About 2
                            </Link>
                        </li>
                        <li>
                            <Link to="/About_3">
                                About 3
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        to="/Service"
                        className="item uppercase sm:text-black"
                        style={{ color: textColor }}
                    >Services</Link>
                </li>
                <li>
                    <Link
                        to="/Portfolio"
                        className="item uppercase sm:text-black"
                        style={{ color: textColor }}
                    >Portfolio</Link>
                </li>
                <li>
                    <Link
                        to="/Contact"
                        className="item uppercase sm:text-black"
                        style={{ color: textColor }}
                    >Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarItem;