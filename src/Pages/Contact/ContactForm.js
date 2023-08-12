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

  // Validation function for each field
  const validateName = (value) => {
    if (value.trim() === "") {
      return "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      return "Name should contain only characters.";
    } else {
      return "";
    }
  };

  const validateEmail = (value) => {
    if (value.trim() === "") {
      return "Email Address is required.";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(value)) {
      return "Invalid email address.";
    } else {
      return "";
    }
  };

  const validateNumber = (value) => {
    if (value.trim() === "") {
      return "Contact Number is required.";
    } else if (!/^\d{10}$/.test(value)) {
      return "Contact Number must be a 10-digit number.";
    } else {
      return "";
    }
  };

  const validateCountry = (value) => {
    if (value === "" || value === "select country") {
      return "Please select a valid country.";
    } else {
      return "";
    }
  };

  const validateMessage = (value) => {
    if (value.trim() === "") {
      return "Message is required.";
    } else {
      return "";
    }
  };

  // Handle onBlur event for each input field
  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });

    // Validate the current field and set the error message
    if (name === 'name') {
      setFormErrors({ ...formErrors, [name]: validateName(value) });
    } else if (name === 'email') {
      setFormErrors({ ...formErrors, [name]: validateEmail(value) });
    } else if (name === 'number') {
      setFormErrors({ ...formErrors, [name]: validateNumber(value) });
    } else if (name === 'country') {
      setFormErrors({ ...formErrors, [name]: validateCountry(value) });
    } else if (name === 'message') {
      setFormErrors({ ...formErrors, [name]: validateMessage(value) });
    }
  };

  const validateForm = () => {
    // Validate all form fields and set the error messages
    const newErrors = {
      name: validateName(formValue.name),
      email: validateEmail(formValue.email),
      number: validateNumber(formValue.number),
      country: validateCountry(formValue.country),
      message: validateMessage(formValue.message)
    };

    setFormErrors(newErrors);

    // Check if the form is valid by checking if there are no error messages
    return !Object.values(newErrors).some((error) => error !== "");
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
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
          {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
            className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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