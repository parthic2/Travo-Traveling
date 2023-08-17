import React from 'react';
import useScrollAnimationTrends from '../../../Hooks/useScrollAnimationTrends';
import useScrollAnimation from '../../../Hooks/useScrollAnimation';
import ClientReview from './ClientReview';
import MeetOurTeam from './MeetOurTeam';
import WhyChooseUs from './WhyChooseUs';
import NavbarInner from '../../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../../Components/Footer/Footer';

const About3 = () => {
  window.scrollTo(0, 0);
  const registerElement = useScrollAnimationTrends();
  const fadeIn = useScrollAnimation(".animate");

  return (
    <>
      <NavbarInner />
      <div className="container mx-auto px-4 py-24">
        <div className="flex min-h-screen flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2" ref={(element) => registerElement(element)}>
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
              <div className="grid grid-cols-2 gap-2">
                <img src="/assets1/material-about1.jpg" alt="about2" />
                <img src="/assets1/material-about2.jpg" alt="about2" />
              </div>
            </div>
          </div>

          <WhyChooseUs registerElement={registerElement} />

          <MeetOurTeam />
        </div>
      </div>

      <ClientReview fadeIn={fadeIn} />
      <Footer />
    </>
  )
}

export default About3;