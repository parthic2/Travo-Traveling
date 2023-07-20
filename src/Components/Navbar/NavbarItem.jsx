import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

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
                    <a
                        href="#"
                        className="desktop-item uppercase sm:text-black"
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
                                    <li>Marketing agency</li>
                                </ul>
                            </div>
                            <div className="row">
                                <span className="heading">Specialized</span>
                                <ul className="mega-links">
                                    <li>Restaurant</li>
                                    <li>Architecture</li>
                                    <li>Hotel & resort</li>
                                    <li>Travel agency</li>
                                    <li>Yoga & meditation</li>
                                    <li>Gym & fitness</li>
                                    <li>Spa salon</li>
                                    <li>Cafe</li>
                                    <li>Home decor</li>
                                    <li>Dentist</li>
                                    <li>Interior design</li>
                                </ul>
                            </div>
                            <div className="row">
                                <span className="heading">Portfolio</span>
                                <ul className="mega-links">
                                    <li>Design agency</li>
                                    <li>Web agency</li>
                                    <li>Creative agency</li>
                                    <li>Freelancer</li>
                                    <li>Branding agency</li>
                                    <li>Photography</li>
                                    <li>Personal portfolio</li>
                                    <li>Vertical portfolio</li>
                                    <li>Interactive portfolio</li>
                                    <li>Split portfolio</li>
                                    <li>Creative portfolio</li>
                                </ul>
                            </div>
                            <div className="row">
                                <span className="heading">Other</span>
                                <ul className="mega-links">
                                    <li>Furniture shop</li>
                                    <li>Fashion shop</li>
                                    <li>Magazine</li>
                                    <li>Lifestyle blog</li>
                                    <li>Classic blog</li>
                                    <li>Blog metro</li>
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
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
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
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
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
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
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
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
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
                            <li>
                                Portfolio classic
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-port">
                                    <li>Classic 2 column</li>
                                    <li>Classic 3 column</li>
                                    <li>Classic 4 column</li>
                                    <li>Classic masonry</li>
                                    <li>Classic metro</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Classic 2 column</li>
                                <li>Classic 3 column</li>
                                <li>Classic 4 column</li>
                                <li>Classic masonry</li>
                                <li>Classic metro</li>
                            </ul>
                            <li>
                                Portfolio boxed
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-port">
                                    <li>Boxed 2 column</li>
                                    <li>Boxed 3 column</li>
                                    <li>Boxed 4 column</li>
                                    <li>Boxed masonry</li>
                                    <li>Boxed metro</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Boxed 2 column</li>
                                <li>Boxed 3 column</li>
                                <li>Boxed 4 column</li>
                                <li>Boxed masonry</li>
                                <li>Boxed metro</li>
                            </ul>
                            <li>
                                Portfolio colorful
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-port">
                                    <li>Colorful 2 column</li>
                                    <li>Colorful 3 column</li>
                                    <li>Colorful 4 column</li>
                                    <li>Colorful masonry</li>
                                    <li>Colorful metro</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Colorful 2 column</li>
                                <li>Colorful 3 column</li>
                                <li>Colorful 4 column</li>
                                <li>Colorful masonry</li>
                                <li>Colorful metro</li>
                            </ul>
                            <li>
                                Portfolio bordered
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-port">
                                    <li>Bordered 2 column</li>
                                    <li>Bordered 3 column</li>
                                    <li>Bordered 4 column</li>
                                    <li>Bordered masonry</li>
                                    <li>Bordered metro</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Bordered 2 column</li>
                                <li>Bordered 3 column</li>
                                <li>Bordered 4 column</li>
                                <li>Bordered masonry</li>
                                <li>Bordered metro</li>
                            </ul>
                            <li>
                                Portfolio overlay
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-port">
                                    <li>Overlay 2 column</li>
                                    <li>Overlay 3 column</li>
                                    <li>Overlay 4 column</li>
                                    <li>Overlay masonry</li>
                                    <li>Overlay metro</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Overlay 2 column</li>
                                <li>Overlay 3 column</li>
                                <li>Overlay 4 column</li>
                                <li>Overlay masonry</li>
                                <li>Overlay metro</li>
                            </ul>
                            <li>
                                Portfolio switch images
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-port">
                                    <li>Switch Image 2 column</li>
                                    <li>Switch Image 3 column</li>
                                    <li>Switch Image 4 column</li>
                                    <li>Switch Image masonry</li>
                                    <li>Switch Image metro</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Switch Image 2 column</li>
                                <li>Switch Image 3 column</li>
                                <li>Switch Image 4 column</li>
                                <li>Switch Image masonry</li>
                                <li>Switch Image metro</li>
                            </ul>
                            <li>
                                Portfolio other
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-portfolio">
                                    <li>Portfolio scattered</li>
                                    <li>Justified gallery</li>
                                    <li>Portfolio slider</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Portfolio scattered</li>
                                <li>Justified gallery</li>
                                <li>Portfolio slider</li>
                            </ul>
                            <li>
                                Single project page
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-portfolio">
                                    <li>Single project page 01</li>
                                    <li>Single project page 02</li>
                                    <li>Single project page 03</li>
                                    <li>Single project page 04</li>
                                    <li>Single project page 05</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Single project page 01</li>
                                <li>Single project page 02</li>
                                <li>Single project page 03</li>
                                <li>Single project page 04</li>
                                <li>Single project page 05</li>
                            </ul>
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
                                <span className="heading">General</span>
                                <ul className="mega-links">
                                    <li>Accordions</li>
                                    <li>Buttons</li>
                                    <li>Teams</li>
                                    <li>Teams carousel</li>
                                    <li>Clients</li>
                                    <li>Client carousel</li>
                                    <li>Subscribe</li>
                                    <li>Call to action</li>
                                    <li>Tab</li>
                                    <li>Google map</li>
                                    <li>Contact form</li>
                                    <li>Image gallery</li>
                                </ul>
                            </div>
                            <div className="row">
                                <span className="heading">Content & infographics</span>
                                <ul className="mega-links">
                                    <li>Progress bar</li>
                                    <li>Icon with text</li>
                                    <li>Over line icon box</li>
                                    <li>Custom icon with text</li>
                                    <li>Counters</li>
                                    <li>Countdown</li>
                                    <li>Pie chart</li>
                                    <li>Fancy text box</li>
                                    <li>Text box</li>
                                    <li>Fancy text</li>
                                </ul>
                            </div>
                            <div className="row">
                                <span className="heading">Interactive</span>
                                <ul className="mega-links">
                                    <li>Testimonials</li>
                                    <li>Testimonials carousel</li>
                                    <li>Video</li>
                                    <li>Interactive banners</li>
                                    <li>Services</li>
                                    <li>Info banner</li>
                                    <li>Rotate box</li>
                                    <li>Process step</li>
                                    <li>Instagram</li>
                                    <li>Parallax scrolling</li>
                                    <li>Text slider</li>
                                </ul>
                            </div>
                            <div className="row">
                                <span className="heading">Text & containers</span>
                                <ul className="mega-links">
                                    <li>Heading</li>
                                    <li>Drop caps</li>
                                    <li>Columns</li>
                                    <li>Blockquote</li>
                                    <li>Highlights</li>
                                    <li>Message box</li>
                                    <li>Social icons</li>
                                    <li>Lists</li>
                                    <li>Separators</li>
                                    <li>Pricing table</li>
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
                            <li>
                                Header and menu
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-fea">
                                    <li>Transparent header</li>
                                    <li>White header</li>
                                    <li>Dark header</li>
                                    <li>Header with top bar</li>
                                    <li>Header with push</li>
                                    <li>Center navigation</li>
                                    <li>Center logo</li>
                                    <li>Top logo</li>
                                    <li>One page navigation</li>
                                    <li>Hamburger menu</li>
                                    <li>Left menu</li>
                                    <li>Header Type</li>
                                    <li>Mobile menu</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Transparent header</li>
                                <li>White header</li>
                                <li>Dark header</li>
                                <li>Header with top bar</li>
                                <li>Header with push</li>
                                <li>Center navigation</li>
                                <li>Center logo</li>
                                <li>Top logo</li>
                                <li>One page navigation</li>
                                <li>Hamburger menu</li>
                                <li>Left menu</li>
                                <li>Header Type</li>
                                <li>Mobile menu</li>
                            </ul>
                            <li>
                                Footer
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-fea">
                                    <li>Footer style 01</li>
                                    <li>Footer style 02</li>
                                    <li>Footer style 03</li>
                                    <li>Footer style 04</li>
                                    <li>Footer style 05</li>
                                    <li>Footer style 06</li>
                                    <li>Footer style 07</li>
                                    <li>Footer style 08</li>
                                    <li>Footer style 09</li>
                                    <li>Footer style 10</li>
                                    <li>Footer style 11</li>
                                    <li>Footer style 12</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Footer style 01</li>
                                <li>Footer style 02</li>
                                <li>Footer style 03</li>
                                <li>Footer style 04</li>
                                <li>Footer style 05</li>
                                <li>Footer style 06</li>
                                <li>Footer style 07</li>
                                <li>Footer style 08</li>
                                <li>Footer style 09</li>
                                <li>Footer style 10</li>
                                <li>Footer style 11</li>
                                <li>Footer style 12</li>
                            </ul>
                            <li>
                                Page title
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-fea">
                                    <li>Left alignment</li>
                                    <li>Right alignment</li>
                                    <li>Center alignment</li>
                                    <li>Colorful style</li>
                                    <li>Big typography</li>
                                    <li>Parallax background</li>
                                    <li>Separate breadcrumbs</li>
                                    <li>Gallery background</li>
                                    <li>Background video</li>
                                    <li>Mini version</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Left alignment</li>
                                <li>Right alignment</li>
                                <li>Center alignment</li>
                                <li>Colorful style</li>
                                <li>Big typography</li>
                                <li>Parallax background</li>
                                <li>Separate breadcrumbs</li>
                                <li>Gallery background</li>
                                <li>Background video</li>
                                <li>Mini version</li>
                            </ul>
                            <li>
                                Modal popup
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-fea">
                                    <li>Simple modal</li>
                                    <li>Subscription</li>
                                    <li>Contact form</li>
                                    <li>Youtube video</li>
                                    <li>Vimeo video</li>
                                    <li>Google map</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Simple modal</li>
                                <li>Subscription</li>
                                <li>Contact form</li>
                                <li>Youtube video</li>
                                <li>Vimeo video</li>
                                <li>Google map</li>
                            </ul>
                            <li>
                                Icon packs
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-fea">
                                    <li>Icons mind line</li>
                                    <li>Icons mind solid</li>
                                    <li>Feather</li>
                                    <li>Font awesome</li>
                                    <li>ET line</li>
                                    <li>Themify</li>
                                    <li>Simple line</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Icons mind line</li>
                                <li>Icons mind solid</li>
                                <li>Feather</li>
                                <li>Font awesome</li>
                                <li>ET line</li>
                                <li>Themify</li>
                                <li>Simple line</li>
                            </ul>
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
                            <li>
                                Post layout
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-blog">
                                    <li>Blog post layout 1</li>
                                    <li>Blog post layout 2</li>
                                    <li>Blog post layout 3</li>
                                    <li>Blog post layout 4</li>
                                    <li>Blog post layout 5</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Blog post layout 1</li>
                                <li>Blog post layout 2</li>
                                <li>Blog post layout 3</li>
                                <li>Blog post layout 4</li>
                                <li>Blog post layout 5</li>
                            </ul>

                            <li>
                                Post types
                                <span className="pl-1 hide">
                                    <FaChevronRight />
                                </span>
                                <ul className="dropdown-submenu-blog">
                                    <li>Standard post</li>
                                    <li>Galley post</li>
                                    <li>Slider post</li>
                                    <li>HTML5 video post</li>
                                    <li>Youtube video post</li>
                                </ul>
                            </li>
                            <ul className="dropdown-submenu-about">
                                <li>Standard post</li>
                                <li>Galley post</li>
                                <li>Slider post</li>
                                <li>HTML5 video post</li>
                                <li>Youtube video post</li>
                            </ul>
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
    )
}

export default NavbarItem;