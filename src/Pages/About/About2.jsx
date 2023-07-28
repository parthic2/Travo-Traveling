import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavbarInner from '../../Components/Navbar/NavbarInner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { team, review } from "../../Data/CarouselItem";
import { BiRadioCircle, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const responsiveService = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const About2 = () => {
  return (
    <>
      <NavbarInner />
      <div className="container mx-auto px-4 py-10">
        <div className="flex min-h-screen flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div className="mt-5 self-center">
              <h2 className="heading-4 xl:w-full">
                It’s Time for a New Material
              </h2>
              <p className="detail">
                Working closely with professional chefs drives our design process. Function is always paramount – every detail is cared for to help each piece fulfil its intended purpose.
              </p>

              <p className="detail">
                “ I curate and deliver hospitality environments and projects that seek to create. ”
              </p>
              <button className="discover">discover</button>
            </div>

            <div className="pl-0 lg:pl-20">
              <img src="/assets/material-about.png" alt="about2" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 pt-28">
            <div className="flex justify-center items-center">
              <img src="/assets/choose-about.png" alt="about2" />
            </div>

            <div className="mt-5 pl-0 lg:pl-20 self-center">
              <div className="small">
                <span className="smallBorder" />
                <div className="flex-grow-1">
                  <span className="text-[#c3964e] uppercase">WHY CHOOSE US</span>
                </div>
              </div>
              <h2 className="heading-4 xl:w-full">
                We will Provide You with the Gorgeous Services
              </h2>
              <p className="detail">
                A garden requires patient labor and attention. Plants don’t grow merely to satisfy ambitions.
              </p>

              <div>
                <ul className="detail">
                  <li className="flex items-center">
                    <BiRadioCircle className="text-[#c3964e] mr-2" />
                    High-quality services
                  </li>
                  <li className="flex items-center">
                    <BiRadioCircle className="text-[#c3964e] mr-2" />
                    Massage to any taste
                  </li>
                  <li className="flex items-center">
                    <BiRadioCircle className="text-[#c3964e] mr-2" />
                    Qualified treatment
                  </li>
                  <li className="flex items-center">
                    <BiRadioCircle className="text-[#c3964e] mr-2" />
                    Pleasant prices
                  </li>
                </ul>
              </div>
              <button className="discover">Our Service</button>
              <div className="grid grid-cols-2 gap-2 pt-4">
                <img src="/assets/choose-about1.png" alt="about2" />
                <img src="/assets/choose-about2.png" alt="about2" />
              </div>
            </div>
          </div>

          <div className="items-center grid grid-cols-2 lg:grid-cols-3 gap-4 pt-28">
            <div className="col-span-2 lg:col-span-1 pt-50">
              <div className="small">
                <span className="smallBorder" />
                <div className="flex-grow-1">
                  <span className="text-[#c3964e] uppercase">OUR PROFESSIONALS</span>
                </div>
              </div>
              <h2 className="heading-4 xl:w-full">
                Meet Our Skilled Team
              </h2>
              <p className="detail">
                Work with you to understand your business specifics and your target audience to our marketing fully strategy.
              </p>
            </div>

            <div className="col-span-2 pl-0 lg:pl-20">
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
                  {team.map((item, index) => (
                    <div key={index} className="relative team-hover">
                      <img src={item.imageSrc} alt="portfolio" className="w-[90%] h-[100%] border-2 border-[#c3964e]" />
                      <div className="icon-social" style={{ width: "88%" }}>
                        <Link><BiLogoFacebook /></Link>
                        <Link><BiLogoInstagram /></Link>
                        <Link><AiOutlineTwitter /></Link>
                      </div>
                      <p className="pt-5 capitalize font-bold">{item.name}</p>
                      <p className="uppercase detail">{item.designation}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1edea]">
        <div className="items-center grid grid-cols-1 gap-4 p-9 lg:p-28 container mx-auto">
          <div className="flex justify-center items-center pb-10">
            <img src="http://templates.thememodern.com/ronmi/images/quote.png" alt="quote" />
          </div>
          <div className="">
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
                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
              >
                {review.map((item, index) => (
                  <div key={index}>
                    <h2 className="text-center font-semibold text-[15px] md:text-[20px] lg:text-[30px]">" {item.review} "</h2>
                    <div className="flex flex-col justify-center items-center">
                      <p className="pt-5 capitalize font-bold">{item.name}</p>
                      <p className="uppercase detail">Client of company</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About2;