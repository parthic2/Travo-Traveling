import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import ClientReview from './ClientReview';
import NavbarInner from '../../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../../Components/Footer/Footer';
import AboutImg1 from "../../../img/material-about.jpg"
import Packages from './Package';

const About2 = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <NavbarInner />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div className="mt-5 self-center">
              <h2 className="heading-4 xl:w-full">
                It’s Time for a New journey
              </h2>
              <p className="detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

              <p className="detail">
                “ Lorem Ipsum is simply dummy text of the printing and typesetting industry ”
              </p>
              <button className="discover">discover</button>
            </div>

            <div className="pl-0 lg:pl-20">
              <img src={AboutImg1} alt="about2" loading="lazy" />
            </div>
          </div>

          <WhyChooseUs />
          <Packages />
        </div>
      </div>

      <ClientReview />
      <Footer />
    </>
  )
}

export default About2;