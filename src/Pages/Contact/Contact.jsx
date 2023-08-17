import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import NavbarInner from '../../Components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <NavbarInner />
      <div className="container mx-auto px-4 py-24">
        <div className="flex min-h-screen flex-col">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="mt-5">
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