import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const FancyBoxItem = ({ image, title, description, handleHover, handleMouseLeave }) => {
  return (
    <div
      className="fancy-box-item divider z-[3]"
      onMouseEnter={() => handleHover(image)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-banner-image bg-cover overflow-hidden bg-center relative z-0">
        <div className="opacity-very-light opacity-30 absolute top-0 left-0 w-full h-full bg-black" />
      </div>

      <div className="fancy-text-box relative overflow-hidden h-height-800 xl:h-height-500 xs:h-height-250 z-[3]">
        <div className="fancy-text-content fancyPadding">
          <h3 className="fancy-content-text">{title}</h3>
          <div className="fancy-text-box-bottom justify-center">
            <div className="flex">
              <p className="mb-2 self-center text-white-text opacity-60 text-small-text-size leading-l-20">{description}</p>
              <span className="self-center text-center ml-auto">
                <span className="inline-flex justify-center items-center leading-10 rounded-full bg-background-dark h-height-40 w-width-40 text-white">
                  <AiOutlineArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="feature-box-overlay bg-primary-strong transition-default" />
        </div>
      </div>
    </div>
  );
};

export default FancyBoxItem;