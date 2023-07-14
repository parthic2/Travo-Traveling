import React, { useEffect, useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  const [navbarColor, setNavbarColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#f4f4f4');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 100; // Adjust this value to your desired scroll threshold

      if (currentScrollY > threshold) {
        setNavbarColor('white'); // Replace 'your-color' with the desired background color
        setTextColor('#232323'); // Replace 'white' with the desired text color
      } else {
        setNavbarColor('transparent');
        setTextColor('#f4f4f4');
      }
    };

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (isDesktop) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call to set the correct colors on page load
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (isDesktop) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const threshold = 100; // Adjust this value to your desired scroll threshold

  //     if (currentScrollY > threshold) {
  //       setNavbarColor('white'); // Replace 'your-color' with the desired background color
  //       setTextColor('#232323'); // Replace 'white' with the desired text color
  //     } else {
  //       setNavbarColor('transparent');
  //       setTextColor('white');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <header className="container flex justify-between items-center">
                <div>Alpha</div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center uppercase gap-10">
                    <span className="hover:text-gray-900">Home</span>
                    <span className="hover:text-gray-900">Pages</span>
                    <span className="hover:text-gray-900">Portfolio</span>
                    <span className="hover:text-gray-900">Elements</span>
                    <span className="hover:text-gray-900">Features</span>
                    <span className="hover:text-gray-900">Blog</span>
                    <span className="hover:text-gray-900">Shop</span>
                </nav>
                <div className="inline-flex items-center gap-3">
                    <span><BiLogoFacebook /></span>
                    <span><BiLogoInstagram /></span>
                    <span><AiOutlineTwitter /></span>
                </div>
      </header> */}

      <header className="reverse-scroll">
        <nav id="headerBar" className="navbar" style={{ backgroundColor: navbarColor, color: textColor }}>
          <div className="sm:!px-0 container flex justify-between items-center">
            <div className="">
              <span className="logo" style={{ color: textColor }}>Alpha</span>
            </div>

            <div className="">
              <div className="justify-center">
                <div className="wrapper">
                  <input
                    type="radio"
                    name="slider"
                    id="menu-btn" />
                  <input
                    type="radio"
                    name="slider"
                    id="close-btn" />
                  <ul className="nav-links">
                    <li>
                      <a
                        href="#"
                        className="desktop-item uppercase"
                        style={{ color: textColor }}
                      >Home</a>
                      <input
                        type="checkbox"
                        id="showMega-home" />
                      <label
                        htmlFor="showMega-home"
                        className="mobile-item">
                        Home
                      </label>
                      <div className="mega-box">
                        <div className="content">
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="desktop-item uppercase"
                        style={{ color: textColor }}
                      >Pages</a>
                      <input
                        type="checkbox"
                        id="showDrop-page" />
                      <label
                        htmlFor="showDrop-page"
                        className="mobile-item"
                      >Pages
                      </label>
                      <ul className="drop-menu">
                        <div className="content">
                          <li>
                            About
                            <ul className="dropdown-submenu">
                              <li>About me</li>
                              <li>About us</li>
                              <li>Our story</li>
                              <li>Who we are</li>
                            </ul>
                          </li>
                          <ul className="dropdown-submenu-about">
                            <li>About me</li>
                            <li>About us</li>
                            <li>Our story</li>
                            <li>Who we are</li>
                          </ul>

                          <li>
                            Services
                            <ul className="dropdown-submenu">
                              <li>Our service</li>
                              <li>What we offer</li>
                              <li>Our process</li>
                            </ul>
                          </li>
                          <ul className="dropdown-submenu-service">
                            <li>Our service</li>
                            <li>What we offer</li>
                            <li>Our process</li>
                          </ul>

                          <li>
                            Contact
                            <ul className="dropdown-submenu">
                              <li>Contact simple</li>
                              <li>Contact classic</li>
                              <li>Contact modern</li>
                            </ul>
                          </li>
                          <ul className="dropdown-submenu-contact">
                            <li>Contact simple</li>
                            <li>Contact classic</li>
                            <li>Contact modern</li>
                          </ul>

                          <li>
                            Additional pages
                            <ul className="dropdown-submenu">
                              <li>Our team</li>
                              <li>Latest news</li>
                              <li>Pricing packages</li>
                              <li>Error 404</li>
                              <li>Maintenance</li>
                              <li>Coming soon</li>
                              <li>Coming soon - V2</li>
                              <li>FAQ's</li>
                              <li>Search result</li>
                            </ul>
                          </li>

                          <ul className="dropdown-submenu-pages">
                            <li>Our team</li>
                            <li>Latest news</li>
                            <li>Pricing packages</li>
                            <li>Error 404</li>
                            <li>Maintenance</li>
                            <li>Coming soon</li>
                            <li>Coming soon - V2</li>
                            <li>FAQ's</li>
                            <li>Search result</li>
                          </ul>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="desktop-item uppercase"
                        style={{ color: textColor }}
                      >Portfolio</a>
                      <input
                        type="checkbox"
                        id="showDrop-port" />
                      <label
                        htmlFor="showDrop-port"
                        className="mobile-item"
                      >Portfolio</label>
                      <ul className="drop-menu">
                        <div className="content">
                          <li>Portfolio classic</li>
                          <li>Portfolio boxed</li>
                          <li>Portfolio colorful</li>
                          <li>Portfolio bordered</li>
                          <li>Portfolio overlay</li>
                          <li>Portfolio switch images</li>
                          <li>Portfolio other</li>
                          <li>Single project page</li>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="desktop-item uppercase"
                        style={{ color: textColor }}
                      >Elements</a>
                      <input
                        type="checkbox"
                        id="showMega-ele" />
                      <label
                        htmlFor="showMega-ele"
                        className="mobile-item"
                      >Elements</label>
                      <div className="mega-box">
                        <div className="content">
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                          <div className="row">
                            <span className="heading">Corporate</span>
                            <ul className="mega-links">
                              <li>Startup</li>
                              <li>Business</li>
                              <li>Corporate</li>
                              <li>Finance</li>
                              <li>Application</li>
                              <li>Consulting</li>
                              <li>Digital agency</li>
                              <li>SEO agency</li>
                              <li>Events & conference</li>
                              <li> Marketing agency</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="desktop-item uppercase"
                        style={{ color: textColor }}
                      >Features</a>
                      <input
                        type="checkbox"
                        id="showDrop-fea" />
                      <label
                        htmlFor="showDrop-fea"
                        className="mobile-item"
                      >Features</label>
                      <ul className="drop-menu">
                        <div className="content">
                          <li>Header and menu</li>
                          <li>Footer</li>
                          <li>Page title</li>
                          <li>Modal popup</li>
                          <li>Icon packs</li>
                          <li>Animations</li>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="desktop-item uppercase"
                        style={{ color: textColor }}
                      >Blogs</a>
                      <input
                        type="checkbox"
                        id="showDrop-blog" />
                      <label
                        htmlFor="showDrop-blog"
                        className="mobile-item"
                      >Blogs</label>
                      <ul className="drop-menu">
                        <div className="content">
                          <li>Blog grid</li>
                          <li>Blog masonry</li>
                          <li>Blog classic</li>
                          <li>Blog simple</li>
                          <li>Blog side image</li>
                          <li>Blog metro</li>
                          <li>Blog overlay image</li>
                          <li>Blog modern</li>
                          <li>Blog clean</li>
                          <li>Blog widget</li>
                          <li>Blog standard</li>
                          <li>Post layout</li>
                          <li>Post types</li>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="desktop-item uppercase"
                        style={{ color: textColor }}
                      >Shop</a>
                      <input
                        type="checkbox"
                        id="showMega-shop" />
                      <label
                        htmlFor="showMega-shop"
                        className="mobile-item"
                      >Shop</label>
                      <div className="mega-box">
                        <div className="content">
                          <div className="row">
                            <span className="heading">Shop layout</span>
                            <ul className="mega-links">
                              <li>Shop wide</li>
                              <li>Left sidebar</li>
                              <li>Right sidebar</li>
                              <li>Only categories</li>
                              <li>Single product</li>
                            </ul>
                          </div>
                          <div className="row">
                            <span className="heading">Utility pages</span>
                            <ul className="mega-links">
                              <li>Shopping cart</li>
                              <li>Checkout</li>
                              <li>Shopping cart</li>
                              <li>Checkout</li>
                              <li>Login / Register</li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="/assets/menu-banner-02.png"
                              alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <div className="">
              <div className="social" style={{ color: textColor }}>

                <label
                  htmlFor="menu-btn"
                  className="btn menu-btn"
                  style={{ color: textColor }}
                ><FaBars /></label>

                <span><BiLogoFacebook /></span>
                <span><BiLogoInstagram /></span>
                <span><AiOutlineTwitter /></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;