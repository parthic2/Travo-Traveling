import React from 'react';
import { review } from '../../../Data/CarouselItem';
import { responsiveOneSlide } from '../../../Data/ResponsiveCarousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { VscQuote } from 'react-icons/vsc';

const ClientReview = () => {
  return (
    <div className="bg-[#f1edea]">
      <div className="items-center grid grid-cols-1 gap-4 p-9 lg:p-28 container mx-auto">
        <div className="flex justify-center items-center pb-10">
          <VscQuote className="text-[#c3964e] w-[37px] h-[30px]" />
        </div>
        <div className="">
          <div className="slider">
            <Carousel
              className="mySwiper"
              draggable
              showDots={false}
              responsive={responsiveOneSlide}
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
              {review.map((item, index) => (
                <div key={index}>
                  <h2 className="text-center font-semibold text-[15px] md:text-[20px] lg:text-[30px]">" {item.review} "</h2>
                  <div className="flex flex-col justify-center items-center">
                    <p className="pt-5 capitalize font-bold">{item.name}</p>
                    <p className="uppercase detail">Client of company</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientReview;