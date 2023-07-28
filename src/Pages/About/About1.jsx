import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavbarInner from '../../Components/Navbar/NavbarInner';
import { team, review } from "../../Data/CarouselItem";
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const About1 = () => {
  return (
    <>
      <NavbarInner />
      <section className="pt-24">
        <div className="relative container mx-auto px-4">
          <div className="items-center justify-center grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="relative lg:mt-[30px] md:mb-36 sm:mb-36 md:mt-0">
              <div className="lg-no-parallax relative w-1/2 md:w-[70%] z-[2] mt-[20%] lg:mt-0 lg:mr-auto flex justify-center items-center">
                <img src="/assets/about1.png" alt="about" className="aboutImage-1" />
              </div>
              <div className="lg-no-parallax flex justify-center items-center w-[65%] bg-no-repeat absolute bottom-[-100px] right-[15px] lg:!left-auto lg:!right-0">
                <img src="/assets/about2.png" className="aboutImage-2" alt="about" />
              </div>
            </div>

            <div className="pt-35 lg:ml-20">
              <h2 className="heading-4 xl:w-full">
                It Takes More Than Good Design To Build A Successful Design Business
              </h2>
              <p className="detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <p className="detail">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="discover">discover</button>
            </div>
          </div>

          <div className="pt-28">
            <div className="lg:text-center md:text-left">
              <span className="text-[#c3964e] font-medium mb-[20px] uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
                OUR PROFESSIONALS
              </span>
              <h2 className="heading-5">
                Meet Our Skilled Team
              </h2>
              <p className="detail">
                Work with you to understand your business specifics and your target
                <br /> audience to our marketing fully strategy.
              </p>
            </div>

            <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
              {team.map((item, index) => (
                <div key={index} className="relative team-hover">
                  <img src={item.imageSrc} alt="portfolio" className="w-[100%] h-[350px]" />
                  <div className="icon-social">
                    <Link><BiLogoFacebook /></Link>
                    <Link><BiLogoInstagram /></Link>
                    <Link><AiOutlineTwitter /></Link>
                  </div>
                  <p className="pt-5 capitalize font-bold">{item.name}</p>
                  <p className="uppercase detail">{item.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#f1edea] mt-20">
          <div className="items-center grid grid-cols-1 gap-4 p-9 lg:p-28 container mx-auto">
            <div className="">
              <div className="slider">
                <Carousel
                  className="mySwiper"
                  draggable
                  showDots={false}
                  responsive={responsive}
                  ssr
                  infinite
                  // autoPlay
                  autoPlaySpeed={2500}
                  keyBoardControl
                  customTransition="transform 300ms ease-in-out"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                >
                  {review.map((item, index) => (
                    <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden mr-5 h-auto ease-in duration-100" key={index}>
                      <div className="feature-box-move-bottom-top">
                        <h2 className="">
                          <img src="http://templates.thememodern.com/ronmi/images/quote.png" alt="quote" />
                        </h2>
                        <div className="text mt-5">" {item.review} "</div>
                        <div className="detail !mb-0">{item.name}</div>
                        <div>
                          <div className="uppercase detail font-semibold">Client of company</div>
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
      <Footer />
    </>
  );
};

export default About1;