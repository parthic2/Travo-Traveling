import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Dots from './Dots';
import { responsiveOneSlide } from '../../Data/ResponsiveCarousel';
import { slides } from '../../Data/CarouselItem';

const Slider = () => {
  return (
    <section className="relative">
      <Carousel
        className="mySwiper"
        draggable
        showDots
        responsive={responsiveOneSlide}
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
        {slides.map((slide) => (
          <div key={slide.id} className={`sliderImage-${slide.id}`}>
            <div className="flex flex-col justify-end ml-auto md:w-[550px] h-full xl:w-[550px] lg:w-[550px] sm:w-full">
              <div className="sliderCard">
                <div className="p-0 mb-[25px] md:inline-block items-center justify-center">
                  <span className="text-[#c3964e] inline-block font-medium align-middle">{`0${slide.id}`}</span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px]" />
                  <span className="inline-block text-[#c3964e] uppercase font-medium align-middle">{slide.category}</span>
                </div>

                <div className="w-[100%] p-0 justify-center mb-[10px]">
                  <div className="flex">
                    <h2 className="heading-1">{slide.title}</h2>

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