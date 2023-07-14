import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dots from '../../Dots';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
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

    return (
        <section className="relative">
            {/* <button aria-label="swiper prev button" className="swiper-button-prev absolute top-[48%] z-[2] left-[40px] text-[40px] text-white w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer after:hidden hover:opacity-50 transition-default">
          <BsArrowLeft className="text-[40px]" />
        </button>

        <button aria-label="swiper next button" className="swiper-button-next absolute top-[48%] z-[2] left-[40px] text-[40px] text-white w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer after:hidden hover:opacity-50 transition-default">
          <BsArrowRight className="line-icon-Arrow-OutLeft text-[40px]" />
        </button> */}

            <Carousel
                className="mySwiper"

                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                customDot={<Dots />}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
            >
                <div className="sliderImage-1">
                    <div className="flex flex-col justify-end ml-auto md:w-[550px] h-full xl:w-[550px] lg:w-[550px] sm:w-full">
                        <div className="sliderCard">
                            <div className="p-0 mb-[25px] md:inline-block items-center justify-center col">
                                <span className="text-[#c3964e] inline-block font-medium align-middle">01</span>
                                <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px]" />
                                <span className="inline-block text-[#c3964e] uppercase font-medium align-middle">Resident interior</span>
                            </div>

                            <div className="w-[100%] p-0 justify-center mb-[10px] col">
                                <div className="flex">
                                    <h2 className="heading-1">Concrete pent house</h2>

                                    <span className="self-center text-center ml-[30px]">
                                        <div className="leading-[65px] rounded-full bg-[#232323] w-[60px] h-[60px] flex justify-center items-center text-[25px] text-white">
                                            <AiOutlineArrowRight />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sliderImage-2">
                    <div className="flex flex-col justify-end ml-auto md:w-[550px] h-full xl:w-[550px] lg:w-[550px] sm:w-full">
                        <div className="sliderCard">
                            <div className="p-0 mb-[25px] md:inline-block items-center justify-center col">
                                <span className="text-[#c3964e] inline-block font-medium align-middle">02</span>
                                <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px]" />
                                <span className="inline-block text-[#c3964e] uppercase font-medium align-middle">Product design</span>
                            </div>

                            <div className="w-[100%] p-0 justify-center mb-[10px] col">
                                <div className="flex">
                                    <h2 className="heading-1">Modernism table pots</h2>

                                    <span className="self-center text-center ml-[30px]">
                                        <div className="leading-[65px] rounded-full bg-[#232323] w-[60px] h-[60px] flex justify-center items-center text-[25px] text-white">
                                            <AiOutlineArrowRight />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sliderImage-3">
                    <div className="flex flex-col justify-end ml-auto md:w-[550px] h-full xl:w-[550px] lg:w-[550px] sm:w-full">
                        <div className="sliderCard">
                            <div className="p-0 mb-[25px] md:inline-block items-center justify-center col">
                                <span className="text-[#c3964e] inline-block font-medium align-middle">03</span>
                                <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px]" />
                                <span className="inline-block text-[#c3964e] uppercase font-medium align-middle">Resident interior</span>
                            </div>

                            <div className="w-[100%] p-0 justify-center mb-[10px] col">
                                <div className="flex">
                                    <h2 className="heading-1">Comfort seating</h2>

                                    <span className="self-center text-center ml-[30px]">
                                        <div className="leading-[65px] rounded-full bg-[#232323] w-[60px] h-[60px] flex justify-center items-center text-[25px] text-white">
                                            <AiOutlineArrowRight />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default Slider