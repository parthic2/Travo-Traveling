import React from 'react';
import { BsPlay } from 'react-icons/bs';
import useScrollAnimationTrends from '../../Hooks/useScrollAnimationTrends';

const Trends = () => {

  const registerElement = useScrollAnimationTrends();

  return (
    <section className="relative py-[160px] lg:py-[100px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="" ref={(element) => registerElement(element)}>
            <h1 className="heading-3">We are interior design team based in New York</h1>

            <div className="lg:mt-20 w-[70%] mx:lg-0 md:mt-0 xs:w-1/2 xxs:w-[70%]">
              <div className="text-[#c3964e] hover:text-[#232323] underline underline-offset-4 font-medium cursor-pointer">
                hello@domain.com
              </div>
              <button className="aboutBtn">About Company</button>
            </div>
          </div>

          <div className="pt-30" ref={(element) => registerElement(element)}>
            <div className="uppercase text-xmd font-semibold text-[#232323] lg:mb-[25px] sm:mb-[15px]">
              New Design Trends 2020
            </div>
            <p className="detail">
              Sed ut perspiciatis unde omnis natus error sit voluptam accusantium natus error omnis iste natus error sit
              volupta accusantium sed perspiciatis unde omnis iste natus.
            </p>
            <p className="detail">
              Perspiciatis unde omnis natus error natus voluptatem accusantium natus omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>

          <div className="pt-30">
            <div className="outside-box-bottom relative lg:mb-[-10vw] sm:mb-0">
              <img
                src="/assets/home-interior-design-about-img01.png"
                alt="about"
                className="relative z-[1] w-full"
                width={360}
                height={542}
              />

              <div className="absolute bottom-0 right-0 z-[1] landscape:md:!-bottom-[25px]">
                <span className="inline-block">
                  <div className="achievement">
                    <button className="btn-sonar">
                      <BsPlay />
                    </button>
                    <span className="video-icon-text">Company Achievements</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;