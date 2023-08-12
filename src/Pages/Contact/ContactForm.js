import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { countries } from '../../Data/CarouselItem';
import { useContactForm } from '../../Utils/formUtils';

const ContactForm = () => {
  const {
    formValue,
    formErrors,
    handleInputBlur,
    handleInputChange,
    handleCheckboxChange,
    sendEmail,
  } = useContactForm();

  const form = useRef();

  return (
    <form ref={form} className="flex justify-center items-center" onSubmit={sendEmail} autoComplete="off">
      <ToastContainer position="top-left" style={{ padding: "20px" }} />
      <div className="lg:w-3/4 md:w-3/4 space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formValue.name}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
          {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            value={formValue.email}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
        </div>

        <div>
          <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
          <input
            id="number"
            name="number"
            type="text"
            maxLength="10"
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            value={formValue.number}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
          {formErrors.number && <p className="text-red-500">{formErrors.number}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <select
            id="country"
            name="country"
            type="text"
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            value={formValue.country}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          >
            <option>select country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {formErrors.country && <p className="text-red-500">{formErrors.country}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            value={formValue.message}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
          {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            className="bg-white rounded border custom-checkbox"
            checked={formValue.subscribe}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="subscribe" className="ml-2 text-sm font-medium leading-6 text-gray-900">Subscribe</label>
        </div>

        <div>
          <button type="submit" className="discover w-full">Contact Us</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;