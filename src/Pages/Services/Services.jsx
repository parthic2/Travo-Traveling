import React from 'react';
import NavbarInner from '../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../Components/Footer/Footer';
import { interests, packages, weekendPackages } from '../../Data/CarouselItem';

const Services = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <NavbarInner />
      <section className="bg-background-light py-32 min-h-screen">
        {renderSection('Top Trending Destinations', packages)}
        {renderSection('Holidays by Interest', interests, true)}
        {renderSection('Top Weekend Destinations', weekendPackages)}
      </section>
      <Footer />
    </>
  );
};

const renderSection = (title, items, isInterest = false) => (
  <div className="container mx-auto px-4 mt-5">
    <h1 className="heading-3">{title}</h1>
    <div className="items-center justify-center gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div key={index} className="relative image-container">
          <img className="rounded-md" src={item.img} alt="portfolio" />
          <div className={isInterest ? 'overlay' : 'overlay'}>
            <h3 className="text">{item.text}</h3>
            <span className="detail">{item.detail}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;