import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsArrowUpRight } from 'react-icons/bs';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { projectData } from '../../Data/CarouselItem';
import { responsiveProject } from '../../Data/ResponsiveCarousel';

const Projects = () => {
  const fadeIn = useScrollAnimation(".animate");

  return (
    <section className={`py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] relative border-t border-[#e4e4e4] overflow-hidden animate ${fadeIn ? 'fade-in' : ''}`}>
      <div className="container-fluid">
        <div className="justify-center text-center mb-[98px] lg:mb-20 md:mb-16">
          <div className="">
            <span className="font-medium text-[#c3964e] text-base uppercase block mb-[10px]">interior Design</span>
            <h2 className="heading-5">Latest Projects</h2>
          </div>
        </div>

        <div className="">
          <div className="projectPadding">
            <div className="grid-wrapper">
              <Carousel
                className="mySwiper"
                draggable
                showDots={false}
                responsive={responsiveProject}
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
                {projectData.map((project, index) => (
                  <div className="portfolio-colorful" key={index}>
                    <div className="portfolio-box">
                      <div className="portfolio-image">
                        <img src={project.imageSrc} alt="portfolio" />

                        <div className="portfolio-hover justify-between flex">
                          <div className="portfolio-content">
                            <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">
                              {project.category}
                            </span>
                            <h3 className="text-[32px] font-semibold text-white uppercase mb-0">{project.title}</h3>
                          </div>

                          <BsArrowUpRight />
                        </div>
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

export default Projects;