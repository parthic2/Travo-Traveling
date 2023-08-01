import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { VscQuote } from 'react-icons/vsc';
import { responsiveTwoSlide } from '../../../Data/ResponsiveCarousel';
import { review } from '../../../Data/CarouselItem';

const ClientReviews = () => {
  return (
    <div className="bg-[#f1edea] mt-20">
      <div className="items-center grid grid-cols-1 gap-4 p-9 lg:p-28 container mx-auto">
        <div className="">
          <div className="slider">
            <Carousel
              className="mySwiper"
              draggable
              showDots={false}
              responsive={responsiveTwoSlide}
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
                <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden mr-5 h-auto ease-in duration-100" key={index}>
                  <div className="feature-box-move-bottom-top">
                    <h2 className="">
                      <VscQuote className="text-[#c3964e] w-[37px] h-[30px]" />
                    </h2>
                    <div className="text mt-5">" {item.review} "</div>
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
