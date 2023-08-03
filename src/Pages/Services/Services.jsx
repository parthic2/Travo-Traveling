import React from 'react';
import { service } from '../../Data/CarouselItem';
import NavbarInner from '../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../Components/Footer/Footer';

const Services = () => {
  return (
    <>
      <NavbarInner />
      <section className={`relative bg-background-light py-32`}>
        <div className="container-fluid">
          <div className="justify-center text-center">
            <div className="flex flex-col items-center text-center mb-24 lg:mb-16 md:mb-12 xs:mb-20">
              <h2 className="text-center text-normal-text-1 font-bold">
                Services Which We Offer And Expertise In Home And Commercial Interior Design Service
              </h2>
            </div>
          </div>
        </div>

        <div className="container-fluid px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
            {service.map((blog, index) => (
              <div className="mb-3" key={index}>
                <div
                  className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className={blog.category}>
                    <div className="h-full flex sm:flex-row flex-col sm:justify-start">
                      <img alt="team" className="blog-image" src={blog.imageSrc} style={{ height: "400px" }} />
                      <div className="p-spacing-p">
                        <div className="blog-title" style={{ width: "100%" }}>{blog.title}</div>
                        <p className="detail" style={{ marginBottom: "0" }}>{blog.detail}</p>
                        <div className="w-full flex justify-start xs:mt-0">
                          <span className="readBtn" style={{ display: "block", paddingTop: "25px" }}>Read More</span>
                        </div>
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
  );
};

export default Services;