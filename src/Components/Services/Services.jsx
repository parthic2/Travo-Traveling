import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import useScrollAnimationLogic from '../../Hooks/useScrollAnimationLogic';
import useScrollAnimationTrends from '../../Hooks/useScrollAnimationTrends';
import { carouselItems } from "../../Data/CarouselItem";
import { responsiveTwoSlide } from '../../Data/ResponsiveCarousel';
import { carouselSettings } from '../../Project.config';
import { animateColumn } from '../../helpers/animateColumn';

const Services = () => {
  const registerElement = useScrollAnimationTrends();

  useEffect(() => {
    animateColumn();
  }, []);

  useScrollAnimationLogic('.customerLeftColumn', '.customerRightColumn', animateColumn);

  return (
    <section className="bg-background-light pb-content-spacing lg:pb-content-spacing-lg md:pb-content-spacing-md sm:pb-content-spacing-xs overflow-hidden">
      <div className="overflow-hidden">
        <div className="overlap-section overflow-hidden relative -left-spacing-left-10 px-0 text-start font-semibold text-white-text xl:text-larger-text lg:text-larger-text-lg leading-l-154 -tracking-[2px] whitespace-nowrap hide z-10" ref={(element) => registerElement(element)} style={{ marginTop: "-61.6px" }}>
          achievements
        </div>
      </div>

      <div className="lg:pt-spacing-t-8 pt-25 container mx-auto px-4">
        <div className="flex lg:justify-center md:justify-start text-center lg:mb-16 md:mb-12 xs:mb-20">
          <div className="md:text-left">
            <span className="text-primary-strong font-medium mb-spacing-b-20 uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
              Home decoration services
            </span>
            <h2 className="heading-5 text-start">
              Simple is good, we turn ideas
              <span className="flex justify-center items-center start">into works of design art</span>
            </h2>
          </div>
        </div>

        <div className="items-center grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2 lg:col-span-1 pt-50 customerLeftColumn">
            <span className="mb-spacing-b-20 block uppercase font-medium text-grey-text">Expert services</span>
            <h1 className="heading-6">We like to make you feel more at home</h1>
          </div>

          <div className="col-span-2 customerRightColumn">
            <div className="slider">
              <Carousel
                className="mySwiper"
                responsive={responsiveTwoSlide}
                {...carouselSettings}
              >
                {carouselItems.map((item, index) => (
                  <div className="hover:bg-white border border-[#0000001a] overflow-hidden mr-5 h-72 ease-in duration-100" key={index}>
                    <div className="feature-box-move-bottom-top">
                      <h2 className="number">{item.number}</h2>
                      <div className="feature-box-content">
                        <span className="text">{item.text}</span>
                        <p className="detail">{item.detail}</p>
                      </div>
                      <div className="w-full flex justify-start xs:mt-0">
                        <span className="readBtn">Read More</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;