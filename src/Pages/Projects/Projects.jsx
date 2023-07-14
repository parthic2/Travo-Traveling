import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowUpRight } from 'react-icons/bs';

const Projects = () => {

    const responsiveProject = {
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

    return (
        <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] relative border-t border-[#e4e4e4] overflow-hidden">
            <div className="px-0">
                <div className="row justify-center text-center mb-[98px] lg:mb-20 md:mb-16">
                    <div className="flex flex-col items-center text-center col-xl-6 col-lg-7 col-md-8 col-sm-12">
                        <span className="font-medium text-[#c3964e] text-base uppercase block mb-[10px]">interior Design</span>
                        <h2 className="heading-5">Latest Projects</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="projectPadding col">
                        <div className="grid-wrapper">
                            <Carousel
                                className="mySwiper"

                                draggable={true}
                                showDots={false}
                                responsive={responsiveProject}
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
                                <div className="portfolio-colorful">
                                    <div className="portfolio-box">
                                        <div className="portfolio-image">
                                            <img className="" src="/assets/home-interior-design-portfolio-img01.png" alt="portfolio" />

                                            <div className="portfolio-hover justify-between flex">
                                                <div className="portfolio-content">
                                                    <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                                                    <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                                                </div>

                                                <BsArrowUpRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="portfolio-colorful">
                                    <div className="portfolio-box">
                                        <div className="portfolio-image">
                                            <img className="w-full" src="/assets/home-interior-design-portfolio-img02.png" alt="portfolio" style={{ height: "530px" }} />

                                            <div className="portfolio-hover justify-between flex">
                                                <div className="portfolio-content">
                                                    <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                                                    <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                                                </div>

                                                <BsArrowUpRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="portfolio-colorful">
                                    <div className="portfolio-box">
                                        <div className="portfolio-image">
                                            <img className="w-full" src="/assets/home-interior-design-portfolio-img03.png" alt="portfolio" />

                                            <div className="portfolio-hover justify-between flex">
                                                <div className="portfolio-content">
                                                    <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                                                    <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                                                </div>

                                                <BsArrowUpRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="portfolio-colorful">
                                    <div className="portfolio-box">
                                        <div className="portfolio-image">
                                            <img className="w-full" src="/assets/home-interior-design-portfolio-img04.png" alt="portfolio" />

                                            <div className="portfolio-hover justify-between flex">
                                                <div className="portfolio-content">
                                                    <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                                                    <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                                                </div>

                                                <BsArrowUpRight />
                                            </div>
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

export default Projects