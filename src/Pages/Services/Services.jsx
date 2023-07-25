import React from 'react';
import Navbar1 from '../../Components/Navbar/Navabr1';
import Footer from '../../Components/Footer/Footer';

const Services = () => {
  return (
    <div className="">
      <Navbar1 />
      <div className="container mx-auto px-4 py-10 min-h-screen">
        <h2 className="text-center text-[25px] font-bold">
          Services Which We Offer And Expertise In Home And Commercial Interior Design Service
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/2d.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">2D/ 3D Design Layout</h1>
                <p className="mt-2 text-[#828282]">We Do All Types Of 2D And 3D design Elegant Innovative Luxurious Computerized Design Interior And Exterior Design Which Is Already Vastu Approved Design</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/master.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">Master Bathroom</h1>
                <p className="mt-2 text-[#828282]"> We Do Master Bathroom Designing And Decoration And Luxury Bathroom Designing</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/office.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">Office Interior</h1>
                <p className="mt-2 text-[#828282]">We Do All Types Of Interior Designing Solution And Decoration Of Office And Other Commercial Space That Creates An Environment Which Perfectly Blends With Your Mind To Grow Your Business</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/kitchen.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">Modular Kitchen</h1>
                <p className="mt-2 text-[#828282]">We Do All Types Of Modular Kitchen Designing And Decoration And Luxury Kitchen Designing So To Make Your Kitchen Your Favorite Place</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/residential.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">Residential Interior</h1>
                <p className="mt-2 text-[#828282]">We Do All Types Of Interior Designing, Decoration And Furnishing Of Bed Room, Living Room, Dinning Room, Hall Room, Home Entertainment Room, Kids Room, Study Room, Guest Room So That Each Room Can Perfectly Brighten Up Your Environment And Enhance Your Mood</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/furniture.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">Furniture & Fixture</h1>
                <p className="mt-2 text-[#828282]">We Make Custom Design Furniture And Deals With All Types Of Other Modular Furniture And Fixture, So That You Can Get Exactly What You Want</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/false.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">False Ceiling</h1>
                <p className="mt-2 text-[#828282]"> We Make Custom Made False Ceiling And Do All Types Of Ceiling Work. We Also Do 3D False Ceiling Work So That You Always Look Up In Your Home And In Your Life</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/restaurants.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">Restaurants & Cafeteria</h1>
                <p className="mt-2 text-[#828282]">All Types Of Interior Designing For Restaurant, Coffee Shops And Cafeteria, So That People Get A Reason To Spend More Time In Your Place</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src="/assets/glass.png" alt="" />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="mt-5 text-xl font-semibold">Glass & Lightening</h1>
                <p className="mt-2 text-[#828282]">All Types Of Glass Decoration And Light Decoration With Innovative Modern Glass And Lightning So That Your Space Can Get A Look Of Masterpiece</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services;