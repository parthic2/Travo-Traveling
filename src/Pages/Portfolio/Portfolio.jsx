import React from 'react';
import { portfolio } from '../../Data/CarouselItem';
import NavbarInner from '../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../Components/Footer/Footer';

const Portfolio = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <NavbarInner />
      <section className="aboutPadding min-h-screen">
        <div className="px-4">
          <div className="items-center justify-center gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <div className="portfolio" key={index}>
                <div className="portfolio-box-card">
                  <div className="portfolio-image-card">
                    {/* <img src={item.imgSrc} alt="portfolio"  /> */}

                    <div className="portfolio-hover-card justify-between flex">
                      <div className="portfolio-content">
                        <h3 className="text-normal-text font-semibold text-white uppercase mb-2">{item.title}</h3>
                        <span className="text-sm text-white mb-spacing-b-5 opacity-70 inline-block">
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