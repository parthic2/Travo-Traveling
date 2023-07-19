import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Dots from './Dots';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Slider = () => {
  return (
    <section className="relative">
      <Carousel
        className="mySwiper"
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={2500}
        keyBoardControl
        customTransition="transform 300ms ease-in-out"
        customDot={<Dots />}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
      >
        {[1, 2, 3].map((index) => (
          <div key={index} className={`sliderImage-${index}`}>
            <div className="flex flex-col justify-end ml-auto md:w-[550px] h-full xl:w-[550px] lg:w-[550px] sm:w-full">
              <div className="sliderCard">
                <div className="p-0 mb-[25px] md:inline-block items-center justify-center col">
                  <span className="text-[#c3964e] inline-block font-medium align-middle">{`0${index}`}</span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px]" />
                  <span className="inline-block text-[#c3964e] uppercase font-medium align-middle">Resident interior</span>
                </div>

                <div className="w-[100%] p-0 justify-center mb-[10px] col">
                  <div className="flex">
                    <h2 className="heading-1">
                      {index === 1
                        ? "Concrete pent house"
                        : index === 2
                          ? "Modernism table pots"
                          : "Comfort seating"}
                    </h2>

                    <span className="self-center text-center ml-[30px]">
                      <div className="leading-[65px] rounded-full bg-[#232323] w-[60px] h-[60px] flex justify-center items-center text-[25px] text-white">
                        <AiOutlineArrowRight />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;