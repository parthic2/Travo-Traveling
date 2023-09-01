import React from 'react';
import { BiRadioCircle } from 'react-icons/bi';
import Choose1 from "../../../Images/choose-about6.jpg";
import Choose2 from "../../../Images/choose-about3.jpg";
import Choose3 from "../../../Images/choose-about4.jpg";
import Choose4 from "../../../Images/choose-about5.jpg";

const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 pt-28">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2">
          <img src={Choose1} alt="about2" loading="lazy" />
          <img src={Choose2} alt="about2" loading="lazy" />
          <img src={Choose3} alt="about2" loading="lazy" />
          <img src={Choose4} alt="about2" loading="lazy" />
        </div>
      </div>

      <div className="mt-5 pl-0 lg:pl-20 self-center">
        <div className="small">
          <span className="smallBorder" />
          <div className="flex-grow-1">
            <span className="text-primary-strong uppercase">WHY CHOOSE US</span>
          </div>
        </div>
        <h2 className="heading-4 xl:w-full">
          We will Provide You with the Gorgeous Services
        </h2>
        <p className="detail">
          A garden requires patient labor and attention. Plants don’t grow merely to satisfy ambitions.
        </p>

        <div>
          <ul className="detail">
            <li className="flex items-center">
              <BiRadioCircle className="text-primary-strong mr-2" />
              High-quality services
            </li>
            <li className="flex items-center">
              <BiRadioCircle className="text-primary-strong mr-2" />
              Massage to any taste
            </li>
            <li className="flex items-center">
              <BiRadioCircle className="text-primary-strong mr-2" />
              Qualified treatment
            </li>
            <li className="flex items-center">
              <BiRadioCircle className="text-primary-strong mr-2" />
              Pleasant prices
            </li>
          </ul>
        </div>
        <button className="discover">Our Service</button>
      </div>
    </div>
  )
}

export default WhyChooseUs;