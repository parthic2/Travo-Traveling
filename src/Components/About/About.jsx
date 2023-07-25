import React from 'react';
import useScrollAnimation from '../../Hooks/useScrollAnimation';

const About = () => {
  const fadeIn = useScrollAnimation(".aboutPadding");

  return (
    <section className={`cover-background aboutPadding ${fadeIn ? 'fade-in' : ''}`}>
      <div className="relative container mx-auto px-4">
        <div className="items-center justify-center grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative lg:mt-[30px] md:mb-36 sm:mb-36 md:mt-0 col-lg-6 col-md-10">
            <div className="lg-no-parallax relative w-1/2 md:w-[70%] z-[2] mt-[20%] lg:mt-0 lg:mr-auto flex justify-center items-center">
              <img src="/assets/home-interior-design-about-img02.png" alt="about" className="aboutImage-1" />
            </div>
            <div className="lg-no-parallax flex justify-center items-center w-[65%] bg-no-repeat absolute bottom-[-100px] right-[15px] lg:!left-auto lg:!right-0">
              <img src="/assets/home-interior-design-about-img03.png" className="aboutImage-2" alt="about" />
            </div>
          </div>

          <div className="pt-35 lg:ml-28">
            <div className="small">
              <span className="smallBorder" />
              <div className="flex-grow-1">
                <span className="text-[#c3964e] uppercase">about interior design</span>
              </div>
            </div>
            <h2 className="heading-4 xl:w-full">
              we highly followed the new trends of interior designs
            </h2>
            <p className="detail">
              Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore ut enim ad minim veniam nostrud exercitation laboris nisi ut aliquip ex ea commodo.
            </p>
            <button className="discover">discover litho</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;