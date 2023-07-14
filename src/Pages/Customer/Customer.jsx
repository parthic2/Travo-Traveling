import React, { useEffect, useRef } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Customer = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);

    useEffect(() => {
        const animateColumns = () => {
            const leftColumn = leftColumnRef.current;
            const rightColumn = rightColumnRef.current;

            if (isInView(leftColumn)) {
                leftColumn.classList.add('animate-left');
            }

            if (isInView(rightColumn)) {
                rightColumn.classList.add('animate-right');
            }
        };

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top < window.innerHeight;
        };

        animateColumns();

        window.addEventListener('scroll', animateColumns);

        return () => {
            window.removeEventListener('scroll', animateColumns);
        };
    }, []);

    return (
        <section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-4 col-lg-4" ref={leftColumnRef}>
                        <span className="title">Loved by our customers</span>
                        <h2 className="heading-5">What our clients are saying about our services</h2>
                    </div>

                    <div className="col-xs-12 col-md-8 xs:mt-10 sm:mt-10" ref={rightColumnRef}>
                        <div className="slider">
                            <Carousel
                                className="mySwiper"

                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2500}
                                keyBoardControl={true}
                                customTransition="transform 300ms ease-in-out"
                                // customDot={<Dots />}
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                            >
                                <div className="d-flex">
                                    <img src="/assets/home-interior-design-testimonial-img01.png" alt="customer" />
                                    <div>
                                        <p className="detail">
                                            This theme has a wide variety of options and a really good customer support. But even so, the theme still gives a lot of features while prioritizing web speed.
                                        </p>
                                        <div className="customerName">harvard Alexander</div>
                                        <span className="customerDes">
                                            Microsoft Design
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <img src="/assets/home-interior-design-testimonial-img02.png" alt="customer" />
                                    <div>
                                        <p className="detail">
                                            Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies. Excellent company!
                                        </p>
                                        <div className="customerName">Mackangy Rose</div>
                                        <span className="customerDes">
                                            Creative director
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <img src="/assets/home-interior-design-testimonial-img03.png" alt="customer" />
                                    <div>
                                        <p className="detail">
                                            Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Professional support.
                                        </p>
                                        <div className="customerName">Jonsan Donner</div>
                                        <span className="customerDes">
                                            Sales manager
                                        </span>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer