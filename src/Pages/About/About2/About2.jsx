import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import MeetOurTeam from './MeetOurTeam';
import ClientReview from './ClientReview';
import NavbarInner from '../../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../../Components/Footer/Footer';

const About2 = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <NavbarInner />
      <div className="container mx-auto px-4 py-24">
        <div className="flex min-h-screen flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div className="mt-5 self-center">
              <h2 className="heading-4 xl:w-full">
                It’s Time for a New Material
              </h2>
              <p className="detail">
                Working closely with professional chefs drives our design process. Function is always paramount – every detail is cared for to help each piece fulfil its intended purpose.
              </p>

              <p className="detail">
                “ I curate and deliver hospitality environments and projects that seek to create. ”
              </p>
              <button className="discover">discover</button>
            </div>

            <div className="pl-0 lg:pl-20">
              <img src="/assets1/material-about.jpg" alt="about2"  />
            </div>
          </div>

          <WhyChooseUs />
          <MeetOurTeam />
        </div>
      </div>

      <ClientReview />
      <Footer />
    </>
  )
}

export default About2;