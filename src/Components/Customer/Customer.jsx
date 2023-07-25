import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useScrollAnimationLogic from '../../Hooks/useScrollAnimationLogic';
import { testimonialItems } from "../../Data/CarouselItem";
import { animateColumn } from '../../helpers/animateColumn';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Customer = () => {
  useEffect(() => {
    animateColumn();
  }, []);

  useScrollAnimationLogic('.customerLeftColumn', '.customerRightColumn', animateColumn);

  return (
    <section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2 lg:col-span-1 customerLeftColumn">
            <span className="title">Loved by our customers</span>
            <h2 className="heading-5">What our clients are saying about our services</h2>
          </div>

          <div className="col-span-2 xs:mt-10 sm:mt-10 customerRightColumn">
            <div className="slider">
              <Carousel
                className="mySwiper"
                draggable
                showDots={false}
                responsive={responsive}
                ssr
                infinite
                autoPlay
                autoPlaySpeed={2500}
                keyBoardControl
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'superLargeDesktop']}
              >
                {testimonialItems.map((item, index) => (
                  <div className="d-flex" key={index}>
                    <img src={item.image} alt="customer" />
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