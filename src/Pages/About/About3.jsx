import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavbarInner from '../../Components/Navbar/NavbarInner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { team, review } from "../../Data/CarouselItem";
import { BiRadioCircle, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineTwitter } from 'react-icons/ai';
import { VscQuote } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import useScrollAnimationTrends from '../../Hooks/useScrollAnimationTrends';
import useScrollAnimation from '../../Hooks/useScrollAnimation';

const responsiveService = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 530 }, items: 2 },
  mobile: { breakpoint: { max: 530, min: 0 }, items: 1 }
};

const About3 = () => {
  const registerElement = useScrollAnimationTrends();
  const fadeIn = useScrollAnimation(".animate");

  return (
    <>
      <NavbarInner />
      <div className="container mx-auto px-4 py-10">
        <div className="flex min-h-screen flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2" ref={(element) => registerElement(element)}>
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
              <div className="grid grid-cols-2 gap-2">
                <img src="/assets/material-about1.png" alt="about2" />
                <img src="/assets/material-about2.png" alt="about2" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 pt-28" ref={(element) => registerElement(element)}>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-2">
                <img src="/assets/choose-about6.png" alt="about2" />
                <img src="/assets/choose-about3.png" alt="about2" />
                <img src="/assets/choose-about4.png" alt="about2" />
                <img src="/assets/choose-about5.png" alt="about2" />
              </div>
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

            <div className="col-span-2">
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
                    <div key={index} className="bg-white p-5 shadow-inner m-2">
                      <div className="relative team-hover flex">
                        <img src={item.imageSrc} alt="portfolio" className="w-[140px] h-[140px] rounded-[100%] mr-3" />
                        <div className="team-detail">
                          <p className="pt-5 capitalize font-bold">{item.name}</p>
                          <p className="uppercase detail">{item.designation}</p>
                        </div>
                      </div>
                      <div className="icon-social-3">
                        <Link><BiLogoFacebook /></Link>
                        <Link><BiLogoInstagram /></Link>
                        <Link><AiOutlineTwitter /></Link>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1edea]">
        <div className={`animate items-center grid grid-cols-1 lg:grid-cols-2 gap-4 p-9 lg:p-28 container mx-auto ${fadeIn ? 'fade-in' : ''}`}>
          {review.map((item, index) => (
            <div key={index}>
              <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden lg:mr-5 md:mr-0 h-auto ease-in duration-100">
                <div className="feature-box-move-bottom-top">
                  <h2 className="">
                    <VscQuote className="text-[#c3964e] w-[37px] h-[30px]" />
                  </h2>
                  <div className="text mt-5">" {item.review} "</div>
                  <div className="detail !mb-0">{item.name}</div>
                  <div>
                    <div className="uppercase detail font-semibold">Client of company</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About3;