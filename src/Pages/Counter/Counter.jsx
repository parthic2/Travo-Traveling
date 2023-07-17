import React from 'react';

const Counter = () => {
    const counterItems = [
        { number: '2500', title: 'working hours' },
        { number: '3250', title: 'photo capture' },
        { number: '2800', title: 'work completed' },
        { number: '2750', title: 'telephonic talk' },
    ];

    return (
        <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
            <div className="container">
                <div className="row-cols-1 row-cols-md-4 row-cols-sm-2 gap-y-10 items-center justify-center text-center row">
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