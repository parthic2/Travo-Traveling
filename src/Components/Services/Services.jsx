import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useScrollAnimationLogic from '../../Hooks/useScrollAnimationLogic';
import useScrollAnimationTrends from '../../Hooks/useScrollAnimationTrends';
import { carouselItems } from "../../Data/CarouselItem";
import { animateColumns } from '../../helpers/animateColumns';

const responsiveService = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Services = () => {
  const registerElement = useScrollAnimationTrends();

  useEffect(() => {
    animateColumns();
  }, []);

  useScrollAnimationLogic('.customerLeftColumns', '.customerRightColumns', animateColumns);

  return (
    <section className="bg-[#f1edea] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] overflow-hidden xs:pt-[9%] xs:px-[15px]">
      <div className="overflow-hidden">
        <div className="overlap-section overflow-hidden relative -left-[10px] px-0 text-start font-semibold text-[#fff] text-[154px] leading-[154px] -tracking-[2px] whitespace-nowrap hide" ref={(element) => registerElement(element)} style={{ marginTop: "-61.6px" }}>
          achievements
        </div>
      </div>

      <div className="lg:pt-[8%] pt-25 container mx-auto px-4">
        <div className="flex lg:justify-center md:justify-start text-center lg:mb-16 md:mb-12 xs:mb-20">
          <div className="md:text-left">
            <span className="text-[#c3964e] font-medium mb-[20px] uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
              Home decoration services
            </span>
            <h2 className="heading-5 text-start">
              Simple is good, we turn ideas
              <span className="flex justify-center items-center start">into works of design art</span>
            </h2>
          </div>
        </div>

        <div className="items-center grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2 lg:col-span-1 pt-50 customerLeftColumns">
            <span className="mb-[20px] block uppercase font-medium text-[#828282]">Expert services</span>
            <h1 className="heading-6">We like to make you feel more at home</h1>
          </div>

          <div className="col-span-2 customerRightColumns">
            <div className="slider">
              <Carousel
                className="mySwiper"
                draggable
                showDots={false}
                responsive={responsiveService}
                ssr
                infinite
                autoPlay
                autoPlaySpeed={2500}
                keyBoardControl
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
              >
                {carouselItems.map((item, index) => (
                  <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden mr-5 h-72 ease-in duration-100" key={index}>
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