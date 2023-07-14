import React from 'react';

const Counter = () => {
    return (
        <section className="pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
            <div className="container">
                <div className="row-cols-1 row-cols-md-4 row-cols-sm-2 gap-y-10 items-center justify-center text-center row">
                    <div className="counter-style-02 text-black interiordesign-counter relative">
                        <h2 className="vertical-counter inline-flex mb-0">
                            <span className="vertical-counter-number tracking-[-0.5px]">
                                <ul className="p-0 font-semibold text-[40px]" style={{ transform: "translateY(-20%) translateZ(0px)" }}>
                                    <li>2500</li>
                                </ul>
                            </span>
                        </h2>
                        <div>
                            <span className="counter-content">
                                <span className="counter-title">working</span>hours
                            </span>
                        </div>
                    </div>
                    <div className="counter-style-02 text-black interiordesign-counter relative">
                        <h2 className="vertical-counter inline-flex mb-0">
                            <span className="vertical-counter-number tracking-[-0.5px]">
                                <ul className="p-0 font-semibold text-[40px]" style={{ transform: "translateY(-20%) translateZ(0px)" }}>
                                    <li>3250</li>
                                </ul>
                            </span>
                        </h2>
                        <div>
                            <span className="counter-content">
                                <span className="counter-title">photo</span>capture
                            </span>
                        </div>
                    </div>
                    <div className="counter-style-02 text-black interiordesign-counter relative">
                        <h2 className="vertical-counter inline-flex mb-0">
                            <span className="vertical-counter-number tracking-[-0.5px]">
                                <ul className="p-0 font-semibold text-[40px]" style={{ transform: "translateY(-20%) translateZ(0px)" }}>
                                    <li>2800</li>
                                </ul>
                            </span>
                        </h2>
                        <div>
                            <span className="counter-content">
                                <span className="counter-title">work</span>completed
                            </span>
                        </div>
                    </div>
                    <div className="counter-style-02 text-black interiordesign-counter relative">
                        <h2 className="vertical-counter inline-flex mb-0">
                            <span className="vertical-counter-number tracking-[-0.5px]">
                                <ul className="p-0 font-semibold text-[40px]" style={{ transform: "translateY(-20%) translateZ(0px)" }}>
                                    <li>2750</li>
                                </ul>
                            </span>
                        </h2>
                        <div>
                            <span className="counter-content">
                                <span className="counter-title">telephonic</span>talk
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;