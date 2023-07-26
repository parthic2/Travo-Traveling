import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import NavbarInner from '../../Components/Navbar/NavbarInner';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <>
      <NavbarInner />
      <div className="container mx-auto px-4 py-10">
        <div className="flex min-h-screen flex-col">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <ContactForm />
            </div>

            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;