import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
      <iframe width="100%" height="600" title="map" className="absolute inset-0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(vnsgu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }} />

      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <span className="text-indigo-500 leading-relaxed">example@email.com</span>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
