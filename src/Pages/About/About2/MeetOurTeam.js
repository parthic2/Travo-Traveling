import React from 'react';
import Carousel from 'react-multi-carousel';
import { team } from '../../../Data/CarouselItem';
import { responsiveSlide } from '../../../Data/ResponsiveCarousel';
import { carouselSettings } from '../../../Project.config';

const MeetOurTeam = () => {
  return (
    <div className="items-center grid grid-cols-2 lg:grid-cols-3 gap-4 pt-28">
      <div className="col-span-2 lg:col-span-1 pt-50">
        <div className="small">
          <span className="smallBorder" />
          <div className="flex-grow-1">
            <span className="text-primary-strong uppercase">Tour Packages</span>
          </div>
        </div>
        <h2 className="heading-4 xl:w-full">
          Best Selling Packages
        </h2>
        <p className="detail">
          Tourism of India brings to you international tours that offer outstanding deals and tailor-made tours and let you experience the best of any destination.
        </p>
      </div>

      <div className="col-span-2 pl-0 lg:pl-20">
        <div className="slider">
          <Carousel
            className="mySwiper"
            responsive={responsiveSlide}
            {...carouselSettings}
          >
            {team.map((item, index) => (
              <div key={index}>
                <img src={item.imageSrc} alt="portfolio" className="w-width-90 h-height-250 border-2 border-primary-strong" loading="lazy" />
                <p className="pt-5 capitalize font-bold">{item.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam;