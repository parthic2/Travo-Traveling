import React from 'react';
import { team } from '../../../Data/CarouselItem';
import Carousel from 'react-multi-carousel';
import { responsiveSlide } from '../../../Data/ResponsiveCarousel';
import { carouselSettings } from '../../../Project.config';

const Packages = () => {
  return (
    <div className="pt-28">
      <div className="lg:text-center md:text-left">
        <span className="text-primary-strong font-medium mb-spacing-b-20 uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
          Tour Packages
        </span>
        <h2 className="heading-5">
          Best Selling Packages
        </h2>
        <p className="detail">
          Tourism of India brings to you international tours that offer outstanding deals
          <br /> and tailor-made tours and let you experience the best of any destination.
        </p>
      </div>

      <div className="col-span-2">
        <div className="slider">
          <Carousel
            className="mySwiper"
            responsive={responsiveSlide}
            {...carouselSettings}
          >
            {team.map((item, index) => (
              <div key={index} className="m-2 image-container-best">
                <img src={item.imageSrc} alt="portfolio" className="w-width-100 h-height-350" loading="lazy" />
                <div className="team-detail overlay-best">
                  <p className="pt-5 capitalize font-bold">{item.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Packages;