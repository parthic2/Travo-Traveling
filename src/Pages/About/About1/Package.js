import React from 'react';
import { team } from '../../../Data/CarouselItem';
import useScrollAnimation from '../../../Hooks/useScrollAnimation';

const Packages = () => {
  const fadeIn = useScrollAnimation(".animate");
  return (
    <div className="pt-28">
      <div className="lg:text-center md:text-left">
        <span className="text-primary-strong font-medium mb-spacing-b-20 uppercase flex lg:justify-center md:justify-start" style={{ textAlign: 'start' }}>
          Tour Packages
        </span>
        <h2 className="heading-5">
          Best Selling Packages
        </h2>
        <p className="detail">
          Tourism of India brings to you international tours that offer outstanding deals
          <br /> and tailor-made tours and let you experience the best of any destination.
        </p>
      </div>

      <div className={`animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 ${fadeIn ? 'fade-in' : ''}`}>
        {team.map((item, index) => (
          <div key={index} className="image-container-best">
            <img src={item.imageSrc} alt="portfolio" className="w-width-100 h-height-350" loading="lazy" />
            <div className="overlay-best">
              <p className="pt-5 capitalize font-bold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;