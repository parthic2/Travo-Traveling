import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar1 from '../../Components/Navbar/Navabr1';

const About = () => {
  return (
    <div className="">
      <Navbar1 />
      <div className="container mx-auto px-4 py-10 min-h-screen">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="">
            <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="about" />
          </div>
          <div className="">
            <h2 className="heading-4 xl:w-full">
              It Takes More Than Good Design To Build A Successful Design Business
            </h2>
            <p className="detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <p className="detail">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;