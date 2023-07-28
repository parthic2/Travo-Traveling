import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    message: "",
    subscribe: false
  });

  // For Sending Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const message = formValue.subscribe ? "Subscribe" : "Unsubscribe";

    const templateParams = {
      ...formValue,
      subscribe: message,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then(() => {
        // toast.success("Message Sent Successfully!");
        setFormValue({
          name: "",
          email: "",
          number: "",
          country: "",
          message: "",
          subscribe: false
        });
      })
      .catch((error) => {
        // toast.error("Something Went Wrong!");
        setFormValue({
          name: "",
          email: "",
          number: "",
          country: "",
          message: "",
          subscribe: false
        });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormValue({ ...formValue, subscribe: e.target.checked });
  };

  return (
    <form ref={form} className="flex justify-center items-center" onSubmit={sendEmail} autoComplete="off">
      <div className="lg:w-3/4 md:w-3/4 space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
            required
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={formValue.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
          <input
            id="number"
            name="number"
            type="text"
            maxLength="10"
            required
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={formValue.number}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <select
            id="country"
            name="country"
            type="text"
            required
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={formValue.country}
            onChange={handleInputChange}
          >
            <option>select country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Aland Islands">Aland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Austria">Austria</option>
            <option value="Canada">Canada</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            value={formValue.message}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            className="bg-white rounded border"
            checked={formValue.subscribe}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="subscribe" className="ml-4 text-sm font-medium leading-6 text-gray-900">Subscribe</label>
        </div>

        <div>
          <button type="submit" className="discover w-full">Contact Us</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;