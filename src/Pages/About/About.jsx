import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavbarInner from '../../Components/Navbar/NavbarInner';

const About = () => {
  return (
    <>
      <NavbarInner />
      <section className="aboutPadding">
        <div className="relative container mx-auto px-4">
          <div className="items-center justify-center grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="relative lg:mt-[30px] md:mb-36 sm:mb-36 md:mt-0 col-lg-6 col-md-10">
              <div className="lg-no-parallax relative w-1/2 md:w-[70%] z-[2] mt-[20%] lg:mt-0 lg:mr-auto flex justify-center items-center">
                <img src="https://img.freepik.com/premium-photo/dining-room-with-chandelier-hanging-from-ceiling_752894-93.jpg?w=740" alt="about" className="aboutImage-1" />
              </div>
              <div className="lg-no-parallax flex justify-center items-center w-[65%] bg-no-repeat absolute bottom-[-100px] right-[15px] lg:!left-auto lg:!right-0">
                <img src="https://img.freepik.com/free-photo/home-interior-design-stairs_23-2148986631.jpg?w=360&t=st=1690347013~exp=1690347613~hmac=75cbc7e3abfcc8e5998c954c8b1ad6e6f8a93177efd5382c19cac9837f4468f4" className="aboutImage-2" alt="about" />
              </div>
            </div>

            <div className="pt-35 lg:ml-20">
              <h2 className="heading-4 xl:w-full">
                It Takes More Than Good Design To Build A Successful Design Business
              </h2>
              <p className="detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <p className="detail">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button className="discover">discover</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;