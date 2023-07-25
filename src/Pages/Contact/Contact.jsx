import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar1 from '../../Components/Navbar/Navabr1';

const Contact = () => {
  return (
    <div className="">
      <Navbar1 />
      <div className="container mx-auto px-4 py-10">
        <div className="flex min-h-screen flex-col">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="heading-3">Contact Us</h2>
          </div>

          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div className="mt-2">
                  <input id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="discover w-full">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;