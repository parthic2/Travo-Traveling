import React from 'react';
import { counterItems } from '../../Data/CarouselItem';

const Counter = () => {
  return (
    <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 gap-y-10 items-center justify-center text-center">
          {counterItems.map((item, index) => (
            <div className="counter-style-02 text-black interiordesign-counter relative" key={index}>
              <h2 className="vertical-counter inline-flex mb-0">
                <span className="vertical-counter-number tracking-[-0.5px]">
                  <ul className="p-0 font-semibold text-[40px]">
                    <li>{item.number}</li>
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