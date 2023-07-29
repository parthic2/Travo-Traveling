import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { countries } from '../../Data/CarouselItem';

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    message: "",
    subscribe: false
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    message: ""
  });

  // validation
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      number: "",
      country: "",
      message: ""
    };

    if (formValue.name.trim() === "") {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (formValue.email.trim() === "") {
      newErrors.email = "Email Address is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValue.email)) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }

    if (formValue.number.trim() === "") {
      newErrors.number = "Contact Number is required.";
      valid = false;
    } else if (!/^\d{10}$/.test(formValue.number)) {
      newErrors.number = "Contact Number must be a 10-digit number.";
      valid = false;
    }

    if (formValue.country === "" || formValue.country === "select country") {
      newErrors.country = "Please select a valid country.";
      valid = false;
    }

    if (formValue.message.trim() === "") {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  // For Sending Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, do not proceed with sending the email
    }

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
        toast.success("Message Sent Successfully!");
        setFormValue({
          name: "",
          email: "",
          number: "",
          country: "",
          message: "",
          subscribe: false
        });

        setFormErrors({
          name: "",
          email: "",
          number: "",
          country: "",
          message: ""
        });
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
        setFormValue({
          name: "",
          email: "",
          number: "",
          country: "",
          message: "",
          subscribe: false
        });
        setFormErrors({
          name: "",
          email: "",
          number: "",
          country: "",
          message: ""
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
      <ToastContainer position="top-left" style={{ padding: "20px" }} />
      <div className="lg:w-3/4 md:w-3/4 space-y-4 w-full">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
          {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={formValue.email}
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
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={formValue.number}
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
            className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={formValue.country}
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
            onChange={handleInputChange}
          />
          {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
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