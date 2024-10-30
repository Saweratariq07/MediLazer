'use client';
import React, { useState } from 'react';
import { FaCookie } from 'react-icons/fa'; // Importing React Icon for Cookie

function Cookie() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='bg-transparent'>
      <div className="relative w-full h-auto overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-[#031191] opacity-50"></div>

        <div className="relative z-10 pt-40 flex flex-col items-center justify-center h-full p-10 bg-black bg-opacity-50 text-white space-y-8">
          <div className="pt-24 bg-transparent py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto bg-transparent p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center">
                <FaCookie className="mr-2 text-blue-400" /> Cookie Policy
              </h2>
              <p className="text-white mb-4">
                Our website uses cookies to enhance your experience. Cookies are small text files that are placed on your device
                by the websites you visit. They help us remember your preferences and improve the functionality of the site.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">How We Use Cookies</h3>
              <ul className="list-disc list-inside mb-4 text-white text-start">
                <li>Essential cookies: These are necessary for the website to function properly.</li>
                <li>Performance cookies: These help us analyze how visitors interact with our website.</li>
                <li>Functional cookies: These allow us to remember your preferences and provide enhanced features.</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Managing Cookies</h3>
              <p className="text-white mb-4">
                You can manage your cookie preferences through your browser settings. Please note that disabling cookies may
                affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-blue-400 font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-64 p-2 border border-gray-300 rounded" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-blue-400 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-64 p-2 border border-gray-300 rounded" />
                </div>

                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
              </form>

              {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center">
                    <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
                    <p className="mb-4">Your submission has been received.</p>
                    <button onClick={closePopup} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookie;
