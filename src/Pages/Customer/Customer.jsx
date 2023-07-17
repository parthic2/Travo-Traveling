import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Customer = () => {
    const responsive = {
        superLargeDesktop: {
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

    // useEffect(() => {
    //     const animateColumns = () => {
    //         const leftColumn = document.querySelector('.customerLeftColumn');
    //         const rightColumn = document.querySelector('.customerRightColumn');

    //         if (isInView(leftColumn)) {
    //             leftColumn.classList.add('animate-left');
    //         }

    //         if (isInView(rightColumn)) {
    //             rightColumn.classList.add('animate-right');
    //         }
    //     };

    //     const isInView = (element) => {
    //         const rect = element.getBoundingClientRect();
    //         return rect.top < window.innerHeight;
    //     };

    //     animateColumns();

    //     window.addEventListener('scroll', animateColumns);

    //     return () => {
    //         window.removeEventListener('scroll', animateColumns);
    //     };
    // }, []);

    const testimonialItems = [
        {
            image: '/assets/home-interior-design-testimonial-img01.png',
            detail:
                'This theme has a wide variety of options and a really good customer support. But even so, the theme still gives a lot of features while prioritizing web speed.',
            customerName: 'Harvard Alexander',
            customerDes: 'Microsoft Design'
        },
        {
            image: '/assets/home-interior-design-testimonial-img02.png',
            detail:
                'Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies. Excellent company!',
            customerName: 'Mackangy Rose',
            customerDes: 'Creative director'
        },
        {
            image: '/assets/home-interior-design-testimonial-img03.png',
            detail:
                'Their team is easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Professional support.',
            customerName: 'Jonsan Donner',
            customerDes: 'Sales manager'
        }
    ];

    return (
        <section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-lg-4 customerLeftColumn">
                        <span className="title">Loved by our customers</span>
                        <h2 className="heading-5">What our clients are saying about our services</h2>
                    </div>

                    <div className="col-xs-12 col-md-8 xs:mt-10 sm:mt-10 customerRightColumn">
                        <div className="slider">
                            <Carousel
                                className="mySwiper"
                                draggable
                                showDots={false}
                                responsive={responsive}
                                ssr
                                infinite
                                autoPlay
                                autoPlaySpeed={2500}
                                keyBoardControl
                                customTransition="transform 300ms ease-in-out"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'superLargeDesktop']}
                            >
                                {testimonialItems.map((item, index) => (
                                    <div className="d-flex" key={index}>
                                        <img src={item.image} alt="customer" />
                                        <div>
                                            <p className="detail">{item.detail}</p>
                                            <div className="customerName">{item.customerName}</div>
                                            <span className="customerDes">{item.customerDes}</span>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customer;