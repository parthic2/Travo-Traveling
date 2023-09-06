import { useState } from 'react';

export const useContactForm = () => {
  const initialFormValue = {
    name: '',
    email: '',
    number: '',
    country: '',
    message: '',
    subscribe: false,
  };

  const [formValue, setFormValue] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState(initialFormValue);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormValue({ ...formValue, subscribe: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, do not proceed with sending the email
    }

    setFormValue(initialFormValue);
    setFormErrors(initialFormValue);
  };

  return {
    formValue,
    formErrors,
    handleInputBlur,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  };
};