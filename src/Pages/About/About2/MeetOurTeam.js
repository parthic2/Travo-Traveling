import React from 'react';
import Carousel from 'react-multi-carousel';
import { team } from '../../../Data/CarouselItem';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { responsiveFourSlide } from '../../../Data/ResponsiveCarousel';
import { carouselSettings } from '../../../Project.config';

const MeetOurTeam = () => {
  return (
    <div className="items-center grid grid-cols-2 lg:grid-cols-3 gap-4 pt-28">
      <div className="col-span-2 lg:col-span-1 pt-50">
        <div className="small">
          <span className="smallBorder" />
          <div className="flex-grow-1">
            <span className="text-primary-strong uppercase">OUR PROFESSIONALS</span>
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
            responsive={responsiveFourSlide}
            {...carouselSettings}
          >
            {team.map((item, index) => (
              <div key={index} className="relative team-hover">
                <img src={item.imageSrc} alt="portfolio" className="w-width-90 h-height-100 border-2 border-primary-strong" loading="lazy" />
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
  )
}

export default MeetOurTeam;