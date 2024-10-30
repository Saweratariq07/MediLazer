'use client';
import React, { useState } from 'react';

function Privacy() {
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
              <h1 className="text-3xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
              <p className="text-white mb-4">Last updated on October 4, 2024</p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Who We Are</h2>
              <p className="text-white mb-4">
                We are French Park Medical Centre, committed to providing quality healthcare services. This website serves as a digital representation of our center, ensuring you have a seamless experience while navigating our site.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">What Personal Data We Collect</h2>
              <p className="text-white mb-4 text-start">
                We collect personal data to enhance your experience and provide quality healthcare services. You may provide this data directly, such as when filling out forms or communicating with us.
              </p>

              <ul className="list-disc list-inside mb-4 text-white text-start">
                <li>Service providers: We may collect data through service providers to understand your location based on your IP address for tailored content.</li>
                <li>Healthcare partners: With whom we collaborate for joint healthcare services.</li>
                <li>Public sources: Such as health databases or other publicly available information.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Why We Collect Personal Data</h2>
              <ul className="list-disc list-inside mb-4 text-white text-start">
                <li>Communications: Including sending health-related communications and appointment reminders.</li>
                <li>Advertising: To provide relevant healthcare marketing content.</li>
                <li>Website analytics: To improve user experience on our healthcare website.</li>
                <li>Technical troubleshooting: To resolve any issues related to our website’s functionality.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Your Rights Regarding Personal Data</h2>
              <ul className="list-disc list-inside mb-4 text-white text-start">
                <li>Access: You can request access to your personal data at any time.</li>
                <li>Rectification: You can ask us to update or correct any outdated or incorrect personal data free of charge.</li>
                <li>Opt-out: You may opt-out of receiving healthcare communications from us.</li>
                <li>Erasure: You can request the deletion of your personal data from our records.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-blue-400">How to Contact Us</h2>
              <p className="text-white mb-4">
                If you have any concerns or questions about our privacy practices, please contact our Data Protection Officer at 
                <a href="mailto:data-protection-info@frenchparkmedicalcentre.com" className="text-blue-600"> data-protection-info@frenchparkmedicalcentre.com</a>.
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

export default Privacy;
