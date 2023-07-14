import React, { useEffect, useRef, useState } from 'react';
import { BsPlay } from 'react-icons/bs';

const Trends = () => {

  const animatedElements = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const elementsInView = animatedElements.current.filter((element) => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        return top < windowHeight;
      });

      elementsInView.forEach((element) => {
        element.classList.add('animate');
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const registerElement = (element) => {
    animatedElements.current.push(element);
  };

  return (
    <section className="relative py-[160px] lg:py-[100px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-4" ref={registerElement}>
            <h1 className="heading-3">We are interior design team based on new york</h1>

            <div className="lg:mt-20 w-[70%] mx:lg-0 md:mt-0 xs:w-1/2 xxs:w-[70%]">
              <div className="text-[#c3964e] hover:text-[#232323] underline underline-offset-4 font-medium cursor-pointer">hello@domain.com</div>
              <button className="aboutBtn">About Company</button>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 pt-30" ref={registerElement}>
            <div className="uppercase text-xmd font-semibold text-[#232323] lg:mb-[25px] sm:mb-[15px]">
              New design trends 2020
            </div>
            <p className="detail">
              Sed ut perspiciatis unde omnis natus error sit voluptam accu santium natus error omnis iste natus error sit volupta accu santium sed perspiciatis unde omnis iste natus.
            </p>
            <p className="detail">
              Perspiciatis unde omnis natus error natus voluptatem accu santium natus omnis iste natus error sit voluptatem accu santium.
            </p>
          </div>

          <div className="col-xs-12 col-md-4 pt-30">
            <div className="outside-box-bottom relative lg:mb-[-10vw] sm:mb-0">
              <img src="/assets/home-interior-design-about-img01.png" alt="about" className="relative z-[1] w-full" width={360} height={542} />

              <div className="absolute bottom-0 right-0 z-[1] landscape:md:!-bottom-[25px]">
                <span className="inline-block">
                  <div className="achievement">
                    <button className="btn-sonar">
                      <BsPlay />
                    </button>
                    <span className="video-icon-text">company achievements</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trends