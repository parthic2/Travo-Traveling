import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="dark footer-style-09 bg-background-dark">
      <div className="py-spacing-p xs:py-spacing-p-13-f px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div>
            <div className="md:text-center text-start last:m-0 md:mt-spacing-m-25 text-white">
              <span>Decora</span>
              <p className="text-grey-text mt-3">© Copyright 2023 {" "}
                <span>Decora</span>
              </p>
            </div>
          </div>

          <div>
            <span className="mb-spacing-m-25 block sm:w-full text-start md:w-4/5 lg:text-start leading-l-18 mt-spacing-mb-15">
              <span className="text-white">Newsletter sign-up. </span>
              <span className="text-grey-text">Get monthly updates and resources.</span>
            </span>

            <div className="form w-[75%] justify-center md:justify-start xs:w-full">
              <div className="relative subscribe-style-05">
                <form className="relative">
                  <label className="block relative">
                    <input className="border small-input border-solid border-[rgba(255,255,255,0.2)] placeholder-dark-grey rounded-none	bg-transparent py-spacing-p-13 px-spacing-mb-15 text-md m-0 w-full xs:py-spacing-p-13 xs:px-spacing-mb-15" name="email" type="email" placeholder="Enter your email address" />
                  </label>
                </form>
              </div>
            </div>
          </div>

          <div className="mb-spacing-m text-grey-text lg:text-center">
            <span className="mb-spacing-mb-15 block leading-l-18 mt-spacing-mb-15">Connect with social</span>

            <ul className="flex gap-4 cursor-pointer lg:justify-center lg:items-center">
              <li><Link to="/" aria-label="Visit our Facebook page"><BiLogoFacebook /></Link></li>
              <li><Link to="/" aria-label="Visit our Instagram page"><BiLogoInstagram /></Link></li>
              <li><Link to="/" aria-label="Visit our LinkedIn page"><BiLogoLinkedin /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;