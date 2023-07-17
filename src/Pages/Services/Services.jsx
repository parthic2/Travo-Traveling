import React, { useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {
  const responsiveService = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // const animatedElements = useRef([]);
  // const columnsRef = useRef({ leftColumn: null, rightColumn: null });

  // useEffect(() => {
  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animate');
  //       }
  //     });
  //   };

  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.1
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, observerOptions);

  //   animatedElements.current.forEach((element) => {
  //     observer.observe(element);
  //   });

  //   const leftColumn = columnsRef.current.leftColumn;
  //   const rightColumn = columnsRef.current.rightColumn;

  //   if (leftColumn && isInView(leftColumn)) {
  //     leftColumn.classList.add('animate-left');
  //   }

  //   if (rightColumn && isInView(rightColumn)) {
  //     rightColumn.classList.add('animate-right');
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  // const isInView = (element) => {
  //   const rect = element.getBoundingClientRect();
  //   return rect.top < window.innerHeight;
  // };

  const carouselItems = [
    {
      number: '01',
      text: 'Lighting design',
      detail: 'Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt',
    },
    {
      number: '02',
      text: 'Lighting',
      detail: 'Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt',
    },
    {
      number: '03',
      text: 'design123',
      detail: 'Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt',
    },
  ];

  return (
    <section className="bg-[#f1edea] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] overflow-hidden xs:pt-[9%] xs:px-[15px]">
      {/* ref={(el) => animatedElements.current.push(el)} */}
      <div className="row overflow-hidden">
        <div className="overlap-section overflow-hidden relative -left-[10px] px-0 text-start font-semibold text-[#fff] text-[154px] leading-[154px] -tracking-[2px] whitespace-nowrap hide" style={{ marginTop: "-61.6px" }}>
          achievements
        </div>
      </div>

      <div className="lg:pt-[8%] pt-25 container">
        <div className="flex lg:justify-center md:justify-start text-center lg:mb-16 md:mb-12 xs:mb-20">
          <div className="md:text-left">
            <span className="text-[#c3964e] font-medium mb-[20px] uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
              Home decoration services
            </span>
            <h2 className="heading-5 text-start">
              Simple is good, we turn ideas
              <span className="flex justify-center items-center start">into works of design art</span>
            </h2>
          </div>
        </div>

        <div className="items-center row">
          {/* ref={(el) => (columnsRef.current.leftColumn = el)} */}
          <div className="col-xs-12 col-md-4 col-lg-4 pt-50">
            <span className="mb-[20px] block uppercase font-medium text-[#828282]">Expert services</span>
            <h1 className="heading-6">We like to make you feel more at home</h1>
          </div>

          {/*  ref={(el) => (columnsRef.current.rightColumn = el)} */}
          <div className="col-xs-12 col-md-8 col-lg-8">
            <div className="slider">
              <Carousel
                className="mySwiper"
                draggable
                showDots={false}
                responsive={responsiveService}
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
                {carouselItems.map((item, index) => (
                  <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden mr-5" key={index} >
                    {/* ref={(el) => animatedElements.current.push(el)} */}
                    <div className="feature-box-move-bottom-top">
                      <h2 className="number">{item.number}</h2>
                      <div className="feature-box-content">
                        <span className="text">{item.text}</span>
                        <p className="detail">{item.detail}</p>
                      </div>
                      <div className="w-full flex justify-start xs:mt-0">
                        <span className="readBtn">Read More</span>
                      </div>
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

export default Services;