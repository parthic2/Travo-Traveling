import React from 'react';
import Carousel from 'react-multi-carousel';
import { VscQuote } from 'react-icons/vsc';
import { responsiveTwoSlide } from '../../../Data/ResponsiveCarousel';
import { review } from '../../../Data/CarouselItem';
import { carouselSettings } from '../../../Project.config';

const ClientReviews = () => {
  return (
    <div className="bg-background-light mt-20">
      <div className="items-center grid grid-cols-1 gap-4 p-9 lg:p-28 container mx-auto">
        <div className="">
          <div className="slider">
            <Carousel
              className="mySwiper"
              responsive={responsiveTwoSlide}
              {...carouselSettings}
            >
              {review.map((item, index) => (
                <div className="hover:bg-white border border-dark-border overflow-hidden mr-5 ease-in duration-100 h-height-100" key={index}>
                  <div className="feature-box-move-bottom-top">
                    <h2 className="">
                      <VscQuote className="text-primary-strong w-width-37 h-height-30" />
                    </h2>
                    <div className="text mt-5 clamp-3">{"\"" + item.review + "\""}</div>
                    <div className="detail !mb-0">{item.name}</div>
                    <div>
                      <div className="uppercase detail font-semibold">Client of company</div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;