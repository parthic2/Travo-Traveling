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

      <div className="fancy-text-box relative overflow-hidden h-[800px] xl:h-[500px] xs:h-[250px] z-[3]">
        <div className="fancy-text-content fancyPadding">
          <h3 className="fancy-content-text">{title}</h3>
          <div className="fancy-text-box-bottom justify-center">
            <div className="flex">
              <p className="mb-2 self-center text-[#fff] opacity-60 text-[14px] leading-[20px]">{description}</p>
              <span className="self-center text-center ml-auto">
                <span className="inline-flex justify-center items-center leading-10 rounded-full bg-[#232323] h-[40px] w-[40px] text-white">
                  <AiOutlineArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="feature-box-overlay bg-[#c3964e] transition-default" />
        </div>
      </div>
    </div>
  );
};

export default FancyBoxItem;