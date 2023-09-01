import React from 'react';
import ClientReview from './ClientReview';
import MeetOurTeam from './MeetOurTeam';
import WhyChooseUs from './WhyChooseUs';
import NavbarInner from '../../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../../Components/Footer/Footer';

const About3 = () => {
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
              <div className="grid grid-cols-2 gap-2">
                {/* <img src="/assets/material-about1.jpg" alt="about2" />
                <img src="/assets/material-about2.jpg" alt="about2" /> */}
              </div>
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

export default About3;