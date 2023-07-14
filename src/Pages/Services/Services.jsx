import React, { useEffect, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {

    const responsiveService = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    const animatedElements = useRef([]);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);

    useEffect(() => {
        const animateColumns = () => {
            const leftColumn = leftColumnRef.current;
            const rightColumn = rightColumnRef.current;

            if (isInView(leftColumn)) {
                leftColumn.classList.add('animate-left');
            }

            if (isInView(rightColumn)) {
                rightColumn.classList.add('animate-right');
            }
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top < window.innerHeight;
        };

        animateColumns();

        window.addEventListener('scroll', animateColumns);

        return () => {
            window.removeEventListener('scroll', animateColumns);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const elementsInView = animatedElements.current.filter((element) => {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                return top < windowHeight;
            });

            elementsInView.forEach((element) => {
                element.classList.add('animate');
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const registerElement = (element) => {
        animatedElements.current.push(element);
    };

    return (
        <section className="bg-[#f1edea] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] overflow-hidden xs:pt-[9%] xs:px-[15px]">
            <div className="row overflow-hidden" style={{ opacity: "1", transform: "translateY(0px) translateZ(0px)" }} ref={registerElement}>
                <div className="overlap-section overflow-hidden relative -left-[10px] px-0 text-start font-semibold text-[#fff] text-[154px] leading-[154px] -tracking-[2px] whitespace-nowrap hide" style={{ marginTop: "-61.6px" }}>achievements</div>
            </div>

            <div className="lg:pt-[8%] pt-25 container">
                <div className="flex lg:justify-center md:justify-start text-center lg:mb-16 md:mb-12 xs:mb-20">
                    <div className="md:text-left">
                        <span className="text-[#c3964e] font-medium mb-[20px] uppercase flex lg:justify-center md:justify-start" style={{ textAlign: "start" }}>
                            Home decoration services
                        </span>
                        <h2 className="heading-5 font-bold -tracking-[1px] uppercase text-[#232323] block md:text-start mb-0">
                            Simple is good, we turn ideas
                            <span className="flex justify-center items-center start">into works of design art</span>
                        </h2>
                    </div>
                </div>

                <div className="items-center row">
                    <div className="col-xs-12 col-md-4 col-lg-4 pt-50" ref={leftColumnRef}>
                        <span className="mb-[20px] block uppercase font-medium text-[#828282]">Expert services</span>
                        <h1 className="heading-6">We like to make you feel more on your home</h1>
                    </div>

                    <div className="col-xs-12 col-md-8 col-lg-8" ref={rightColumnRef}>
                        <div className="slider">
                            <Carousel
                                className="mySwiper"

                                draggable={true}
                                showDots={false}
                                responsive={responsiveService}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2500}
                                keyBoardControl={true}
                                customTransition="transform 300ms ease-in-out"
                                // customDot={<Dots />}
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                            >
                                <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden mr-5">
                                    <div className="feature-box-move-bottom-top">
                                        <h2 className="number">01</h2>
                                        <div className="feature-box-content">
                                            <span className="text">Lighting design</span>
                                            <p className="detail">Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt </p>
                                        </div>
                                        <div className="w-full flex justify-start mt-[15px] xs:mt-0">
                                            <span className="readBtn">Read More</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden mr-5">
                                    <div className="feature-box-move-bottom-top">
                                        <h2 className="number">02</h2>
                                        <div className="feature-box-content">
                                            <span className="text">Lighting design</span>
                                            <p className="detail">Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt </p>
                                        </div>
                                        <div className="w-full flex justify-start mt-[15px] xs:mt-0">
                                            <span className="readBtn">Read More</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden mr-5">
                                    <div className="feature-box-move-bottom-top">
                                        <h2 className="number">03</h2>
                                        <div className="feature-box-content">
                                            <span className="text">Lighting design</span>
                                            <p className="detail">Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt </p>
                                        </div>
                                        <div className="w-full flex justify-start mt-[15px] xs:mt-0">
                                            <span className="readBtn">Read More</span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services