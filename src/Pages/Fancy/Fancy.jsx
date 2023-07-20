import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import useScrollAnimation from '../../Hooks/useScrollAnimation';

const defaultImage = '/assets/home-interior-design-services.png';

const FancyBoxItem = ({ image, title, description, handleHover, handleMouseLeave }) => {
  return (
    <div
      className="fancy-box-item divider z-[3] col"
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

const Fancy = () => {
  const handleHover = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(defaultImage);
  };

  const [hoveredImage, setHoveredImage] = useState(defaultImage);
  const fadeIn = useScrollAnimation(".cover1-background");

  return (
    <section className={`cover1-background  ${fadeIn ? 'fade-in' : ''}`} style={{ backgroundImage: `url(${hoveredImage})` }}>
      <div className="px-0">
        <div className="fancy-text-box-05 row row-cols-1 row-cols-xl-4 row-cols-sm-2 gx-0 px-0 row">
          <div className="col justify-center" style={{ opacity: 1 }}>
            <FancyBoxItem
              image="/assets/home-interior-design-services.png"
              title="interior design is a business of trust"
              description="Lorem ipsum dolor consectetur adipiscing dolor incididunt."
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          </div>

          <div className="col justify-center" style={{ opacity: 1 }}>
            <FancyBoxItem
              image="/assets/home-interior-design-services-02.png"
              title="we believe in the power of design"
              description="Lorem ipsum dolor consectetur adipiscing dolor incididunt."
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          </div>

          <div className="col justify-center" style={{ opacity: 1 }}>
            <FancyBoxItem
              image="/assets/home-interior-design-services-03.png"
              title="design is process of discovery"
              description="Lorem ipsum dolor consectetur adipiscing dolor incididunt."
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          </div>

          <div className="col justify-center" style={{ opacity: 1 }}>
            <FancyBoxItem
              image="/assets/home-interior-design-services-04.png"
              title="we want to bring interior design"
              description="Lorem ipsum dolor consectetur adipiscing dolor incididunt."
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fancy;