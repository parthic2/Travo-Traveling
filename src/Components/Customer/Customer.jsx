import React from 'react';
import Carousel from 'react-multi-carousel';
import { testimonialItems } from "../../Data/CarouselItem";
import { responsiveOneSlide } from '../../Data/ResponsiveCarousel';
import { carouselSettings } from '../../Project.config';

const Customer = () => {
  return (
    <section className="py-content-spacing lg:py-content-spacing-lg md:py-content-spacing-md xs:py-content-spacing-xs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <span className="title">Loved by our customers</span>
            <h2 className="heading-5">What our clients are saying about our services</h2>
          </div>

          <div className="col-span-2 xs:mt-10 sm:mt-10">
            <div className="slider">
              <Carousel
                className="mySwiper"
                responsive={responsiveOneSlide}
                {...carouselSettings}
              >
                {testimonialItems.map((item, index) => (
                  <div className="d-flex" key={index}>
                    <img src={item.image} alt="customer" loading="lazy" />
                    <div>
                      <p className="detail">{item.detail}</p>
                      <div className="customerName">{item.customerName}</div>
                      <span className="customerDes">{item.customerDes}</span>
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

export default Customer;