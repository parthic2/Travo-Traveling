import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsArrowUpRight } from 'react-icons/bs';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { projectData } from '../../Data/CarouselItem';

const responsiveProject = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2.5, partialVisibilityGutter: 30 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2.5, partialVisibilityGutter: 30 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1.5, partialVisibilityGutter: 30 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Projects = () => {
  const fadeIn = useScrollAnimation(".animate");

  return (
    <section className={`py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] relative border-t border-[#e4e4e4] overflow-hidden animate ${fadeIn ? 'fade-in' : ''}`}>
      <div className="container-fluid">
        <div className="row justify-center text-center mb-[98px] lg:mb-20 md:mb-16">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12">
            <span className="font-medium text-[#c3964e] text-base uppercase block mb-[10px]">interior Design</span>
            <h2 className="heading-5">Latest Projects</h2>
          </div>
        </div>

        <div className="row">
          <div className="col projectPadding">
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
                            <h3 className="heading-6 font-semibold text-white uppercase mb-0">{project.title}</h3>
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