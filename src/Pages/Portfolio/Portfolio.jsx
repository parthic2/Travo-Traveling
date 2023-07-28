import React from 'react';
import NavbarInner from '../../Components/Navbar/NavbarInner';
import Footer from "../../Components/Footer/Footer";
import "../../Assets/Portfolio.css";
import { portfolio } from '../../Data/CarouselItem';

const Portfolio = () => {
  return (
    <>
      <NavbarInner />
      <section className="aboutPadding">
        <div className="px-4">
          <div className="items-center justify-center gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <div className="portfolio" key={index}>
                <div className="portfolio-box-card">
                  <div className="portfolio-image-card">
                    <img src={item.imgSrc} alt="portfolio" />

                    <div className="portfolio-hover-card justify-between flex">
                      <div className="portfolio-content">
                        <h3 className="text-[20px] font-semibold text-white uppercase mb-2">{item.title}</h3>
                        <span className="text-sm text-white mb-[5px] opacity-70 inline-block">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Portfolio;