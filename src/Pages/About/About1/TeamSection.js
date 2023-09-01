import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { team } from '../../../Data/CarouselItem';
import useScrollAnimation from '../../../Hooks/useScrollAnimation';

const TeamSection = () => {
  const fadeIn = useScrollAnimation(".animate");
  return (
    <div className="pt-28">
      <div className="lg:text-center md:text-left">
        <span className="text-primary-strong font-medium mb-spacing-b-20 uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
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

      <div className={`animate items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 ${fadeIn ? 'fade-in' : ''}`}>
        {team.map((item, index) => (
          <div key={index} className="relative team-hover">
            <img src={item.imageSrc} alt="portfolio" className="w-width-100" loading="lazy" />
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
  );
};

export default TeamSection;