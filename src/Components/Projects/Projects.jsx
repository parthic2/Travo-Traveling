import React from 'react';
import Carousel from 'react-multi-carousel';
import { BsArrowUpRight } from 'react-icons/bs';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { projectData } from '../../Data/CarouselItem';
import { responsiveProject } from '../../Data/ResponsiveCarousel';
import { carouselSettings } from '../../Project.config';

const Projects = () => {
  const fadeIn = useScrollAnimation(".animate");

  return (
    <section className={`py-content-spacing lg:py-content-spacing-lg md:py-content-spacing-md sm:py-content-spacing-xs relative border-t border-light-grey-border overflow-hidden animate ${fadeIn ? 'fade-in' : ''}`}>
      <div className="container-fluid">
        <div className="justify-center text-center mb-spacing-mb-heading lg:mb-20 md:mb-16">
          <div className="">
            <span className="font-medium text-primary-strong text-base uppercase block mb-spacing-m">interior Design</span>
            <h2 className="heading-5">Latest Projects</h2>
          </div>
        </div>

        <div className="projectPadding">
          <div className="grid-wrapper">
            <Carousel
              className="mySwiper"
              responsive={responsiveProject}
              {...carouselSettings}
            >
              {projectData.map((project, index) => (
                <div className="portfolio-colorful" key={index}>
                  <div className="portfolio-box">
                    <div className="portfolio-image">
                      <img src={project.imageSrc} alt="portfolio" />

                      <div className="portfolio-hover justify-between flex">
                        <div className="portfolio-content">
                          <span className="text-sm text-white uppercase mb-spacing-m-5 opacity-70 inline-block">
                            {project.category}
                          </span>
                          <h3 className="text-heading-text font-semibold text-white uppercase mb-0">{project.title}</h3>
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
    </section>
  );
};

export default Projects;