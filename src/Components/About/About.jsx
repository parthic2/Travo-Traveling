import React from 'react';
import useScrollAnimation from '../../Hooks/useScrollAnimation';

const About = () => {
  const fadeIn = useScrollAnimation(".aboutPadding");

  return (
    <section className={`cover-background aboutPadding ${fadeIn ? 'fade-in' : ''}`}>
      <div className="relative container mx-auto px-4">
        <div className="items-center justify-center grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <div className="lg-no-parallax relative w-1/2 md:w-width-70 z-10 mt-spacing-t lg:mt-0 lg:mr-auto flex justify-center items-center">
              <img src="/assets1/home-interior-design-about-img02.jpg" alt="about" className="aboutImage-1" />
            </div>
            <div className="lg-no-parallax flex justify-center items-center w-width-65 bg-no-repeat absolute bottom-spacing-b right-spacing-right-15 lg:!left-auto lg:!right-0">
              <img src="/assets1/home-interior-design-about-img03.jpg" className="aboutImage-2" alt="about" />
            </div>
          </div>

          <div className="pt-35 lg:ml-28">
            <div className="small">
              <span className="smallBorder" />
              <div className="flex-grow-1">
                <span className="text-primary-strong uppercase">about interior design</span>
              </div>
            </div>
            <h2 className="heading-4 xl:w-full">
              we highly followed the new trends of interior designs
            </h2>
            <p className="detail">
              Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore ut enim ad minim veniam nostrud exercitation laboris nisi ut aliquip ex ea commodo.
            </p>
            <button className="discover">discover</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;