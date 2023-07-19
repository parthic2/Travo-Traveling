import React from 'react';
import useScrollAnimation from '../../Hooks/useScrollAnimation';

const About = () => {
    const fadeIn = useScrollAnimation(".aboutPadding");

    return (
        <section className={`cover-background aboutPadding ${fadeIn ? 'fade-in' : ''}`}>
            <div className="relative container">
                <div className="items-center justify-center row">
                    <div className="relative lg:mt-[30px] md:mb-36 sm:mb-36 md:mt-0 col-lg-6 col-md-10">
                        <div className="lg-no-parallax relative w-1/2 md:w-[70%] z-[2] mt-[20%] lg:mt-0 lg:mr-auto flex justify-center items-center">
                            <img src="/assets/home-interior-design-about-img02.png" alt="about" width={278} height={344} />
                        </div>
                        <div className="lg-no-parallax flex justify-center items-center w-[65%] bg-no-repeat absolute bottom-[-100px] right-[15px] lg:!left-auto lg:!right-0">
                            <img src="/assets/home-interior-design-about-img03.png" alt="about" width={380} height={554} />
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 col-md-10 pt-35">
                        <div className="small">
                            <span className="smallBorder" />
                            <div className="flex-grow-1">
                                <span className="text-[#c3964e] uppercase">about interior design</span>
                            </div>
                        </div>
                        <h2 className="heading-4 xl:w-full">
                            we highly followed the new trends of interior designs
                        </h2>
                        <p className="detail">
                            Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore ut enim ad minim veniam nostrud exercitation laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <button className="discover">discover litho</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;