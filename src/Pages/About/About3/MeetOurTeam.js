import React from 'react';
import { team } from '../../../Data/CarouselItem';
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveSlide } from '../../../Data/ResponsiveCarousel';

const MeetOurTeam = () => {
  return (
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
            responsive={responsiveSlide}
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
  )
}

export default MeetOurTeam;