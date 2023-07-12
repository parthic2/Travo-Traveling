import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { AiOutlineArrowRight, AiOutlineInstagram, AiOutlineDribbble } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight, BsPlay, BsArrowUpRight, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import "./App.css";

const App = () => {
  return (
    <>
      {/* <section className="relative">
        <button aria-label="swiper prev button" className="swiper-button-prev absolute top-[48%] z-[2] left-[40px] text-[40px] text-white w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer after:hidden hover:opacity-50 transition-default">
          <BsArrowLeft className="text-[40px]" />
        </button>

        <button aria-label="swiper next button" className="swiper-button-next absolute top-[48%] z-[2] left-[40px] text-[40px] text-white w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer after:hidden hover:opacity-50 transition-default">
          <BsArrowRight className="line-icon-Arrow-OutLeft text-[40px]" />
        </button>

        <Swiper navigation={true} modules={[Navigation]} autoplay={true} className="mySwiper">
          <SwiperSlide>
            <div className="bg-contain w-[100%]">
              <img src="/assets/home-interior-design-slider-img01.png" alt="img1" className="w-[100%] h-[100vh]" />
            </div>
            <div className="flex flex-col justify-end ml-auto w-[600px] h-full fixed top-0 right-0">
              <div className="bg-white py-[70px] px-[84px] xl:py-20 xl:px-20 xs:p-10">
                <div className="p-0 mb-[25px] md:inline-block items-center justify-center col">
                  <span className="text-[#c3964e] inline-block font-medium align-middle">01</span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px] " />
                  <span className="inline-block text-[#c3964e] uppercase font-medium align-middle">Resident interior</span>
                </div>

                <div className="w-[100%] p-0 justify-center mb-[10px] col">
                  <div className="flex">
                    <h2 className="text-[47.9px] leading-[3.9rem] m-0 self-center text-[#232323] uppercase font-bold -tracking-[2px] w-[292px]">Concrete pent house</h2>

                    <span className="self-center text-center ml-[30px]">
                      <div className="leading-[65px] rounded-full bg-[#232323] w-[60px] h-[60px] flex justify-center items-center text-[25px] text-white">
                        <AiOutlineArrowRight />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover w-[100%]">
              <img src="/assets/home-interior-design-slider-img02.png" alt="img1" className="w-[100%] h-[100vh]" />
            </div>
            <div className="flex flex-col justify-end ml-auto w-[600px] h-full absolute top-0 left-[60%]">
              <div className="bg-white py-[70px] px-[84px] xl:py-20 xl:px-20 xs:p-10">
                <div className="p-0 mb-[25px] md:inline-block items-center justify-center col">
                  <span className="text-[#c3964e] inline-block font-medium align-middle">02</span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px] " />
                  <span className="inline-block  text-[#c3964e] uppercase font-medium align-middle">Resident interior</span>
                </div>

                <div className="w-[100%] p-0 justify-center mb-[10px] col">
                  <div className="flex">
                    <h2 className="text-[47.9px] leading-[3.9rem] m-0 self-center text-[#232323] uppercase font-bold -tracking-[2px] w-[292px]">Concrete pent house</h2>

                    <span className="self-center text-center ml-[30px]">
                      <div className="leading-[65px] rounded-full bg-[#232323] w-[60px] h-[60px] flex justify-center items-center text-[25px] text-white">
                        <AiOutlineArrowRight />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover w-[100%]">
              <img src="/assets/home-interior-design-slider-img03.png" alt="img1" className="w-[100%] h-[100vh]" />
            </div>
            <div className="flex flex-col justify-end ml-auto w-[600px] h-full absolute top-0 left-[60%]">
              <div className="bg-white py-[70px] px-[84px] xl:py-20 xl:px-20 xs:p-10">
                <div className="p-0 mb-[25px] md:inline-block items-center justify-center col">
                  <span className="text-[#c3964e] inline-block font-medium align-middle">03</span>
                  <span className="w-[35px] h-[1px] inline-block align-middle bg-[#e4e4e4] ml-[22px] mr-[15px] " />
                  <span className="inline-block  text-[#c3964e] uppercase font-medium align-middle">Resident interior</span>
                </div>

                <div className="w-[100%] p-0 justify-center mb-[10px] col">
                  <div className="flex">
                    <h2 className="text-[47.9px] leading-[3.9rem] m-0 self-center text-[#232323] uppercase font-bold -tracking-[2px] w-[292px]">Concrete pent house</h2>

                    <span className="self-center text-center ml-[30px]">
                      <div className="leading-[65px] rounded-full bg-[#232323] w-[60px] h-[60px] flex justify-center items-center text-[25px] text-white">
                        <AiOutlineArrowRight />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section> */}

      {/* <section className="relative py-[160px] lg:py-[100px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <div className="container">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <h1 className="heading-6 uppercase w-[75%] text-[#232323] font-bold mb-[15px] lg:w-[90%] md:w-[75%] md:mb-[10px]">We are interior design team based on new york</h1>

              <div className="lg:mt-20 w-[70%] mx:lg-0 md:mt-0 xs:w-1/2 xxs:w-[70%]">
                <div className="text-[#c3964e] hover:text-[#232323] underline underline-offset-4 font-medium">hello@domain.com</div>
                <button className="btn border-[2px] border-solid btn-sm mt-8 text-xxs btn-fancy tracking-[1px] rounded-none font-medium uppercase hover:text-white bg-[#fff]">About Company</button>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="uppercase text-xmd font-semibold text-[#232323] lg:mb-[25px] sm:mb-[15px]">
                New design trends 2020
              </div>
              <p className="w-[85%] xl:w-full mb-[20px] text-[#828282] leading-[29px]">
                Sed ut perspiciatis unde omnis natus error sit voluptam accu santium natus error omnis iste natus error sit volupta accu santium sed perspiciatis unde omnis iste natus.
              </p>
              <p className="w-[85%] xl:w-full text-[#828282] leading-[29px]">
                Perspiciatis unde omnis natus error natus voluptatem accu santium natus omnis iste natus error sit voluptatem accu santium.
              </p>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="outside-box-bottom relative lg:mb-[-10vw] sm:mb-0">
                <img src="/assets/home-interior-design-about-img01.png" alt="about" className="relative z-[1] w-full" width={360} height={542} />

                <div className="absolute bottom-0 right-0 z-[1] landscape:md:!-bottom-[25px]">
                  <span className="inline-block">
                    <div className="relative flex items-center p-[35px] right-0 bg-[#f1edea] bottom-[-25px] z-[2] lg:p-[25px] lg:bottom-0 w-[76%] ml-auto cursor-pointer">
                      <button className="border-[2px] border-solid btn-md relative btn-sonar btn btn-secondary">
                        <BsPlay />
                      </button>
                      <span className="flex-1 relative ml-3 video-icon-text font-serif text-darkgray text-md uppercase font-semibold">company achievements</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-[#f1edea] pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] overflow-hidden xs:pt-[9%] xs:px-[15px]">
        <div className="row overflow-hidden" style={{ opacity: "1", transform: "translateY(0px) translateZ(0px)" }}>
          <div className="overlap-section overflow-hidden relative -left-[10px] px-0 text-start font-semibold text-[#fff] text-[154px] leading-[154px] -tracking-[2px] whitespace-nowrap xl:block lg:hidden md:hidden sm:hidden" style={{ marginTop: "-61.6px" }}>achievements</div>
        </div>
        <div className="lg:pt-[8%] md:pt-0 container">
          <div className="flex lg:justify-center md:justify-start text-center lg:mb-16 md:mb-12 xs:mb-20">
            <div className="md:text-left xs:px-0 col-lg-6 col-sm-8">
              <span className="text-[#c3964e] font-medium mb-[20px] uppercase flex lg:justify-center md:justify-start" style={{ textAlign: "start" }}>
                Home decoration services
              </span>
              <h2 className="heading-5 font-bold -tracking-[1px] uppercase text-[#232323] block md:text-start mb-0">
                Simple is good, we turn ideas into works of design art
              </h2>
            </div>
          </div>

          <div className="items-center row">
            <div className="relative md:mb-[20px] col-xl-3 col-lg-4 col-md-6 pt-[65px] md:pt-0 xs:p-0">
              <span className="mb-[20px] block uppercase font-medium">Expert services</span>
              <h1 className="heading-6 uppercase text-[#232323] font-bold mb-[40px] md:mb-[20px]">We like to make you feel more on your home</h1>
            </div>

            <div className="col-lg-8 offset-xl-1">
              <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                autoplay={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  583: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden">
                    <div className="feature-box-move-bottom-top py-12 px-16 md:py-8 md:px-10 sm:py-12 sm:px-[4.5rem] xs:pt-16">
                      <h2 className="heading-4 font-medium text-[#c3964e] mb-[20px] -tracking-[2px]">01</h2>
                      <div className="feature-box-content">
                        <span className="font-semibold text-[#232323] title uppercase text-xmd mb-[10px] inline-block">Lighting design</span>
                        <p>Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt </p>
                      </div>
                      <div className="move-bottom-top w-full flex justify-start mt-[15px] xs:mt-0">
                        <span className="btn border-[2px] border-solid btn-lg font-medium uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-[#232323] hover:text-[#c3964e] text-[#c3964e] ">Read more</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden">
                    <div className="feature-box-move-bottom-top py-12 px-16 md:py-8 md:px-10 sm:py-12 sm:px-[4.5rem] xs:pt-16">
                      <h2 className="heading-4 font-medium text-[#c3964e] mb-[20px] -tracking-[2px]">01</h2>
                      <div className="feature-box-content">
                        <span className="font-semibold text-[#232323] title uppercase text-xmd mb-[10px] inline-block">Lighting design</span>
                        <p>Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt </p>
                      </div>
                      <div className="move-bottom-top w-full flex justify-start mt-[15px] xs:mt-0">
                        <span className="btn border-[2px] border-solid btn-lg font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-[#232323] hover:text-[#c3964e] text-[#c3964e] ">Read more</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      <section className="cover-background py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:pt-[100px]">
        <div className="relative container">
          <div className="items-center justify-center row">
            <div className="relative lg:mt-[30px] md:mb-36 sm:mb-36 md:mt-0 col-lg-6 col-md-10">
              <div className="lg-no-parallax relative w-1/2 md:w-[70%] z-[2] mt-[20%] lg:mt-0 lg:mr-auto">
                <img src="/assets/home-interior-design-about-img02.png" alt="about" width={278} height={344} />
              </div>
              <div className="lg-no-parallax flex justify-center items-center w-[65%] bg-no-repeat absolute bottom-[-100px] right-[15px] lg:!left-auto lg:!right-0">
                <img src="/assets/home-interior-design-about-img03.png" alt="about" width={380} height={554} />
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 col-md-10">
              <div className="font font-medium mb-[30px] flex">
                <span className="flex-shrink-0 w-[30px] h-[1px] bg-[#c3964e] opacity-70 self-center mr-5" />
                <div className="flex-grow-1">
                  <span className="text-#c3964e uppercase">about interior design</span>
                </div>
              </div>
              <h2 className="heading-5 uppercase text-[#232323] font-bold w-[85%] mb-[30px] xl:w-full">
                we highly followed the new trends of interior designs
              </h2>
              <p className="w-[75%] xl:w-full mb-[25px]">
                Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore ut enim ad minim veniam nostrud exercitation laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="btn border-[2px] border-solid btn-sm mt-8 text-xxs btn-fancy tracking-[1px] rounded-none font-medium uppercase hover:text-black hover:bg-white bg-black text-white">discover litho</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cover-background aboutPadding">
        <div class="container">
          <div class="items-center justify-center row">

            <div class="col-xs-12 col-sm-8">
              <div className="relative lg:mt-[30px] md:mb-36 sm:mb-36 md:mt-0 col-lg-6 col-md-10">
                <div className="lg-no-parallax relative w-1/2 md:w-[70%] z-[2] mt-[20%] lg:mt-0 lg:mr-auto">
                  <img src="/assets/home-interior-design-about-img02.png" alt="about" width={278} height={344} />
                </div>
                <div className="justify-center items-center bg-no-repeat absolute bottom-[-100px] right-[15px]">
                  <img src="/assets/home-interior-design-about-img03.png" alt="about" width={380} height={554} />
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6">
              <div class="box">
                <p>class="col-xs-12 col-sm-6"</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] relative border-t border-[#e4e4e4] overflow-hidden">
        <div className="px-0">
          <div className="row justify-center text-center mb-[98px] lg:mb-20 md:mb-16">
            <div className="flex flex-col items-center text-center col-xl-6 col-lg-7 col-md-8 col-sm-12">
              <span className="font-medium text-[#c3964e] text-base uppercase block mb-[10px]">interior Design</span>
              <h2 className="heading-5 font-bold -tracking-[1px] text-[#232323] block uppercase mb-0">Latest Projects</h2>
            </div>
          </div>

          <div className="row">
            <div className="pl-40 lg:pl-24 md:pl-0 col">
              <div className="grid-wrapper">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  grabCursor={true}
                  autoplay={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="portfolio-colorful">
                      <div className="portfolio-box">
                        <div className="portfolio-image">
                          <img className="w-full" src="/assets/home-interior-design-portfolio-img01.png" alt="portfolio" style={{ width: "650px", height: "530px" }} />

                          <div className="portfolio-hover justify-between flex">
                            <div className="portfolio-content">
                              <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                              <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                            </div>

                            <BsArrowUpRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio-colorful">
                      <div className="portfolio-box">
                        <div className="portfolio-image">
                          <img className="w-full bg-contain" src="/assets/home-interior-design-portfolio-img02.png" alt="portfolio" style={{ width: "650px", height: "530px" }} />

                          <div className="portfolio-hover justify-between flex">
                            <div className="portfolio-content">
                              <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                              <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                            </div>

                            <BsArrowUpRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio-colorful">
                      <div className="portfolio-box">
                        <div className="portfolio-image">
                          <img className="w-full" src="/assets/home-interior-design-portfolio-img03.png" alt="portfolio" style={{ width: "650px", height: "530px" }} />

                          <div className="portfolio-hover justify-between flex">
                            <div className="portfolio-content">
                              <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                              <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                            </div>

                            <BsArrowUpRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio-colorful">
                      <div className="portfolio-box">
                        <div className="portfolio-image">
                          <img className="w-full" src="/assets/home-interior-design-portfolio-img04.png" alt="portfolio" style={{ width: "650px", height: "530px" }} />

                          <div className="portfolio-hover justify-between flex">
                            <div className="portfolio-content">
                              <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                              <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                            </div>

                            <BsArrowUpRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio-colorful">
                      <div className="portfolio-box">
                        <div className="portfolio-image">
                          <img className="w-full" src="/assets/home-interior-design-portfolio-img05.png" alt="portfolio" style={{ width: "650px", height: "530px" }} />

                          <div className="portfolio-hover justify-between flex">
                            <div className="portfolio-content">
                              <span className="text-sm text-white uppercase mb-[5px] opacity-70 inline-block">Interior</span>
                              <h3 className="heading-6 font-semibold text-white uppercase mb-0">Sphere</h3>
                            </div>

                            <BsArrowUpRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* complete */}
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

      {/* <section className="bg-[#232323] cover1-background overflow-hidden">
        <div className="px-0">
          <div className="fancy-text-box-05 row row-cols-1 row-cols-xl-4 row-cols-sm-2 gx-0 px-0 row">
            <div className="col justify-center">
              <div className="fancy-box-item divide-x divide-[#ffffff33] lg:divide-y z-[3] col">
                <div className="bg-banner-image bg-cover overflow-hidden bg-center relative z-0">
                  <div className="opacity-very-light opacity-30 absolute top-0 left-0 w-full h-full bg-black" />
                </div>

                <div className="fancy-text-box relative overflow-hidden h-[800px] xl:h-[500px] xs:h-[250px] z-[3]">
                  <div className="fancy-text-content px-[5rem] py-[4.5rem] xl:px-[2rem] xl:py-[1.5rem] lg:p-16">
                    <h3 className="text-[24px] font-semibold text-[#fff] uppercase w-[85%] xl:w-full lg:w-3/5 md:w-[80%]">interior design is a business of trust</h3>
                    <div className="fancy-text-box-bottom justify-center">
                      <div className="flex">
                        <p className="m-0 self-center w-[75%] text-[#fff] opacity-60">
                          Lorem ipsum dolor consectetur adipiscing dolor incididunt.
                        </p>
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
            </div>
            <div className="col justify-center">
              <div className="fancy-box-item divide-x divide-[#ffffff33] lg:divide-y z-[3] col">
                <div className="bg-banner-image bg-cover overflow-hidden bg-center relative z-0">
                  <div className="opacity-very-light opacity-30 absolute top-0 left-0 w-full h-full bg-black" />
                </div>

                <div className="fancy-text-box relative overflow-hidden h-[800px] xl:h-[500px] xs:h-[250px] z-[3]">
                  <div className="fancy-text-content px-[5rem] py-[4.5rem] xl:px-[2rem] xl:py-[1.5rem] lg:p-16">
                    <h3 className="text-[24px] font-semibold text-[#fff] uppercase w-[85%] xl:w-full lg:w-3/5 md:w-[80%]">we believe in the power of design</h3>
                    <div className="fancy-text-box-bottom justify-center">
                      <div className="flex">
                        <p className="m-0 self-center w-[75%] text-[#fff] opacity-60">
                          Lorem ipsum dolor consectetur adipiscing dolor incididunt.
                        </p>
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
            </div>
            <div className="col justify-center">
              <div className="fancy-box-item divide-x divide-[#ffffff33] lg:divide-y z-[3] col">
                <div className="bg-banner-image bg-cover overflow-hidden bg-center relative z-0">
                  <div className="opacity-very-light opacity-30 absolute top-0 left-0 w-full h-full bg-black" />
                </div>

                <div className="fancy-text-box relative overflow-hidden h-[800px] xl:h-[500px] xs:h-[250px] z-[3]">
                  <div className="fancy-text-content px-[5rem] py-[4.5rem] xl:px-[2rem] xl:py-[1.5rem] lg:p-16">
                    <h3 className="text-[24px] font-semibold text-[#fff] uppercase w-[85%] xl:w-full lg:w-3/5 md:w-[80%]">design is process of discovery</h3>
                    <div className="fancy-text-box-bottom justify-center">
                      <div className="flex">
                        <p className="m-0 self-center w-[75%] text-[#fff] opacity-60">
                          Lorem ipsum dolor consectetur adipiscing dolor incididunt.
                        </p>
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
            </div>
            <div className="col justify-center">
              <div className="fancy-box-item divide-x divide-[#ffffff33] lg:divide-y z-[3] col">
                <div className="bg-banner-image bg-cover overflow-hidden bg-center relative z-0">
                  <div className="opacity-very-light opacity-30 absolute top-0 left-0 w-full h-full bg-black" />
                </div>

                <div className="fancy-text-box relative overflow-hidden h-[800px] xl:h-[500px] xs:h-[250px] z-[3]">
                  <div className="fancy-text-content px-[5rem] py-[4.5rem] xl:px-[2rem] xl:py-[1.5rem] lg:p-16">
                    <h3 className="text-[24px] font-semibold text-[#fff] uppercase w-[85%] xl:w-full lg:w-3/5 md:w-[80%]">we want to bring interior design</h3>
                    <div className="fancy-text-box-bottom justify-center">
                      <div className="flex">
                        <p className="m-0 self-center w-[75%] text-[#fff] opacity-60">
                          Lorem ipsum dolor consectetur adipiscing dolor incididunt.
                        </p>
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
            </div>
          </div>
        </div>
      </section> */}

      {/* complete */}
      <section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-4 col-lg-4">
              <span className="title">Loved by our customers</span>
              <h2 className="heading-5">What our clients are saying about our services</h2>
            </div>


            <div className="col-xs-12 col-md-8 xs:mt-10 sm:mt-10">
              <div className="slider">
                <Swiper>
                  <SwiperSlide>
                    <div className="flex">
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
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex">
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
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex">
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
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px] relative bg-[#f1edea]">
        <div className="container-fluid">
          <div className="justify-center text-center row">
            <div className="flex flex-col items-center text-center mb-24 lg:mb-16 md:mb-12 xs:mb-20 col-xl-6 col-lg-7 col-md-8 col-sm-12">
              <span className="font-medium text-[#c3964e] text-base uppercase block m-[10px]">
                interior posts
              </span>
              <h2 className="heading-5 text-[32px] font-bold -tracking-[1px] text-[#232323] block w-3/5 mb-0 uppercase">
                Latest Blogs
              </h2>
            </div>
          </div>
        </div>

        <div className="px-[6%] container-fluid">
          <div className="justify-center row">
            <div className="interiordesign-blog col-xl-12 col-lg-12 col-sm-10">
              <div className="grid-wrapper">
                <ul className="grid-container grid grid-3col xl-grid-2col lg-grid-2col md-grid-1col sm-grid-1col xs-grid-1col gutter-double-extra-large relative h-[798px]">
                  <li className="grid-sizer"></li>
                  <li className="grid-item creative absolute left-0 top-0 w-[593px]">
                    <div className="blog-Simple xs:block">
                      <div className="blog-post-image xs:h-[250px] w-full">
                        <a href="#"></a>
                      </div>
                      <div className="post-details">
                        <a href="#" className="blog-category">CREATIVE</a>
                        <a href="#" className="blog-title">Creativity is nothing but a mind set free</a>
                        <p className="mb-[25px] xl:mb-[25px] md:mb-[20px] xs:mb-[15px]">Lorem ipsum is simply dummy text printing...</p>
                        <a href="#" className="blog-author">Jeremy dupont</a>
                      </div>
                    </div>
                  </li>
                  <li className="grid-item concept absolute left-2/4 top-0 w-[593px]">
                    <div className="blog-Simple xs:block">
                      <div className="blog-post-image xs:h-[250px] w-full">
                        <a href="#"></a>
                      </div>
                      <div className="post-details">
                        <a href="#" className="blog-category">CREATIVE</a>
                        <a href="#" className="blog-title">Creativity is nothing but a mind set free</a>
                        <p className="mb-[25px] xl:mb-[25px] md:mb-[20px] xs:mb-[15px]">Lorem ipsum is simply dummy text printing...</p>
                        <a href="#" className="blog-author">Jeremy dupont</a>
                      </div>
                    </div>
                  </li>
                  <li className="grid-item concept absolute left-0 top-[399px] w-[593px]">
                    <div className="blog-Simple xs:block">
                      <div className="blog-post-image xs:h-[250px] w-full">
                        <a href="#"></a>
                      </div>
                      <div className="post-details">
                        <a href="#" className="blog-category">CREATIVE</a>
                        <a href="#" className="blog-title">Creativity is nothing but a mind set free</a>
                        <p className="mb-[25px] xl:mb-[25px] md:mb-[20px] xs:mb-[15px]">Lorem ipsum is simply dummy text printing...</p>
                        <a href="#" className="blog-author">Jeremy dupont</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* complete */}
      <section className="bg-cover padding" >
        <div className="background" />
        <div className="container">
          <div className="items-center justify-center">
            <div className="text-center relative">
              <h2 className="bannerHeading">
                Are you ready to work with us? {" "}
                <span className="startLink">start a project</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* complete */}
      <footer className="dark footer-style-09 bg-[#232323]" >
        <div className="py-[6%] xs:py-[13%] container">
          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="md:text-center text-start last:m-0 md:mt-[25px] text-white">
                <span>Alpha</span>
                <p className="text-[#828282] mt-3">© Copyright 2023 <span>Alpha</span></p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <span className="mb-[25px] block sm:w-full md:text-start md:w-4/5 sm:text-center leading-[18px] mt-[15px]">
                <span className="text-white">Newsletter sign-up. </span>
                <span className="text-[#828282]">Get monthly updates and resources.</span>
              </span>

              <div className="form w-[75%] justify-center md:justify-start xs:w-full">
                <div className="relative subscribe-style-05">
                  <form className="relative">
                    <label className="block relative">
                      <input className="border-[1px] small-input border-solid border-[rgba(255,255,255,0.2)] placeholder-[#A6A6A6] rounded-none	bg-transparent py-[13px] px-[15px] text-md m-0 w-full xs:py-[13px] xs:px-[15px]" name="email" type="email" placeholder="Enter your email address" />
                    </label>
                    {/* <button type="submit" className="text-xs tracking-[1px] py-[12px] px-[28px] top-1/2 translate-y-2/4 uppercase xs:text-center dark">
                      <span className="far fa-envelope text-lg leading-none m-0 mr-[10px] text-[#c3964e] xs:mr-0"><GoMail /></span>
                    </button> */}
                  </form>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 mb-[10px] text-[#828282]">
              <span className="mb-[15px] block leading-[18px] mt-[15px]">Connect with social</span>

              <ul className="flex gap-4">
                <li><FaFacebookF /></li>
                <li><AiOutlineDribbble /></li>
                <li><BsTwitter /></li>
                <li><AiOutlineInstagram /></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default App;