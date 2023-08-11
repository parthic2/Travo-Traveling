import React, { useRef } from 'react';
import { counterItems } from '../../Data/CarouselItem';
import CountUp from 'react-countup';
import useOnScreen from '../../Hooks/useOnScreen';

const Counter = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <section ref={ref} className="pb-content-spacing lg:pb-content-spacing-lg md:pb-content-spacing-md sm:pb-content-spacing-xs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 gap-y-10 items-center justify-center text-center">
          {counterItems.map((item, index) => (
            <div className="counter-style-02 text-black interiordesign-counter relative" key={index}>
              <h2 className="vertical-counter inline-flex mb-0">
                <span className="vertical-counter-number tracking-[-0.5px]">
                  <ul className="p-0 font-semibold text-counter-text">
                    {isVisible && (
                      <CountUp start={0} end={item.number} duration={5} separator='' />
                    )}
                  </ul>
                </span>
              </h2>
              <div>
                <span className="counter-content">
                  <span className="counter-title">{item.title}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;