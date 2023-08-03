import React, { useEffect } from 'react';
import { animateColumns } from '../../../helpers/animateColumns';
import useScrollAnimationLogic from '../../../Hooks/useScrollAnimationLogic';
import ClientReviews from './ClientReviews';
import TeamSection from './TeamSection';
import NavbarInner from '../../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../../Components/Footer/Footer';

const About1 = () => {

  useEffect(() => {
    animateColumns();
  }, []);

  useScrollAnimationLogic('.customerLeftColumns', '.customerRightColumns', animateColumns);

  return (
    <>
      <NavbarInner />
      <section className="pt-24">
        <div className="relative container mx-auto px-4">
          <div className="items-center justify-center grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="relative lg:mt-spacing-top md:mb-36 sm:mb-36 md:mt-0 customerLeftColumns">
              <div className="lg-no-parallax relative w-1/2 md:w-width-70 z-[2] mt-spacing-t lg:mt-0 lg:mr-auto flex justify-center items-center">
                <img src="/assets/about1.png" alt="about" className="aboutImage-1" />
              </div>
              <div className="lg-no-parallax flex justify-center items-center w-width-65 bg-no-repeat absolute bottom-spacing-b right-spacing-right-15 lg:!left-auto lg:!right-0">
                <img src="/assets/about2.png" className="aboutImage-2" alt="about" />
              </div>
            </div>

            <div className="pt-35 lg:ml-20 customerRightColumns">
              <h2 className="heading-4 xl:w-full">
                It Takes More Than Good Design To Build A Successful Design Business
              </h2>
              <p className="detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <p className="detail">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="discover">discover</button>
            </div>
          </div>

          <TeamSection />
        </div>

        <ClientReviews />
      </section>
      <Footer />
    </>
  );
};

export default About1;