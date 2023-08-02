import React from 'react';
import Carousel from "react-multi-carousel";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Dots from './Dots';
import { responsiveOneSlide } from '../../Data/ResponsiveCarousel';
import { slides } from '../../Data/CarouselItem';
import { carouselSlider } from '../../Project.config';

const Slider = () => {
  return (
    <section className="relative">
      <Carousel
        className="mySwiper"
        responsive={responsiveOneSlide}
        customDot={<Dots />}
        {...carouselSlider}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`sliderImage-${slide.id}`}>
            <div className="flex flex-col justify-end ml-auto md:w-slider-w h-full xl:w-slider-w lg:w-slider-w sm:w-full">
              <div className="sliderCard">
                <div className="p-0 mb-spacing-m-25 md:inline-block items-center justify-center">
                  <span className="text-primary-strong inline-block font-medium align-middle">{`0${slide.id}`}</span>
                  <span className="w-border-w h-[1px] inline-block align-middle bg-light-grey-border ml-spacing-left-22 mr-spacing-right-15" />
                  <span className="inline-block text-primary-strong uppercase font-medium align-middle">{slide.category}</span>
                </div>

                <div className="w-width-100 p-0 justify-center mb-spacing-m">
                  <div className="flex">
                    <h2 className="heading-1">{slide.title}</h2>

                    <span className="self-center text-center ml-spacing-left-30">
                      <div className="leading-icon-lh rounded-full bg-background-dark w-icon-w h-icon-h flex justify-center items-center text-normal-text-1 text-white">
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