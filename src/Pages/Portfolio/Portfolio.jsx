import React from 'react';
import NavbarInner from '../../Components/Navbar/NavbarInner';
import Footer from "../../Components/Footer/Footer";
import "../../Assets/Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <NavbarInner />
      <section className="aboutPadding">
        <div className="px-4">
          <div className="items-center justify-center gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/hotel-interior-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Hotel Interior Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/modern-home-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Modern Home Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/home-office-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Home Office Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/apartments-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Apartments Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/bedroom-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Bedroom Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/dining-room-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Dining Room Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/kids-room-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Kids Room Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/studio-apartments-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Studio Apartments Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-box-card">
                <div className="portfolio-image-card">
                  <img src="/assets/bathroom-design.png" alt="portfolio" />

                  <div className="portfolio-hover-card justify-between flex">
                    <div className="portfolio-content">
                      <h3 className="text-[20px] font-semibold text-white uppercase mb-2">Bathroom Design</h3>
                      <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Portfolio;