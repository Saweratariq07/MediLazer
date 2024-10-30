import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import MyMap from '../map/MyMap';
// import { GiClock } from 'react-icons/gi';

const Contact = () => {
  return (
<div>
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

                {/* <div className="absolute inset-0 bg-[#031191] opacity-50"></div> */}

                <div className="relative z-10 pt-40 flex flex-col items-center justify-center h-full p-10  text-white space-y-8">
                    
               
       
   

    <div className="max-w-3xl mx-auto p-6 bg-transparent rounded-lg shadow-md">
      <h2 className="text-5xl md:text-3xl rounded-lg px-2 font-bold bg-[#1977cc] bg-opacity-50 text-[#ffffff] mb-4 inline-block p-2">CONTACT US</h2>
      <div className="grid grid-cols-1 bg-blue-600 rounded-lg bg-opacity-50 md:grid-cols-2 gap-6 mb-6">
  <div className="p-4 bg-transparent rounded-md flex items-center">
    <FaPhoneAlt className="text-[#ffffff] mr-2" size={24} />
    <div>
      <h3 className="text-lg font-semibold text-[#ffffff]">PHONE:</h3>
      <p className="text-white">+353(0)949870707</p>
    </div>
  </div>
  <div className="p-4 rounded-md flex items-center">
    <div>
      <h3 className="text-2xl font-semibold text-[#ffffff]">Hours of Operation</h3>
      <ul className="list-disc list-inside text-white">
        <li>Monday: 9am to 12:30pm, we reopen at 3pm to 5pm</li>
        <li>Tuesday: 9am to 12:30pm Only - Closed in Afternoon</li>
        <li>Wednesday: 9am to 12:30pm, we reopen at 3pm to 5pm</li>
        <li>Thursday: 9am to 12:30pm, we reopen at 3pm to 5pm</li>
        <li>Friday: 9am to 12:30pm, we reopen at 3pm to 5pm</li>
      </ul>
    </div>
  </div>
</div>

<div className="text-white bg-[#1977cc] text-lg p-2 rounded-lg bg-opacity-50 mb-6">
  <p>Our phone service is in operation from 9:30am to 12pm and 3pm to 5pm Monday to Friday.</p>
  <p>The surgery is closed on Tuesday afternoons from 12pm and Monday, Wednesday, Thursday, and Friday between 12:30pm and 3pm.</p>
  <p>Please refrain from coming to the practice as we are unable to answer the door during these times. Please ring us at our hours posted above.</p>
</div>

<div className="text-white mb-6 p-2 rounded-lg text-lg bg-blue-600 bg-opacity-50">
  <p>For Emergencies Only on Tuesday afternoons ring <strong>071 96 63386</strong>, all other calls please ring the surgery during our normal hours.</p>
  <p>Out of Hours West Doc covers the practice from 6pm, weekends, and bank holidays. They can be contacted on <strong>(0818) 360 000</strong>.</p>
</div>

      {/* <div className="mt-6">
        <img src="your-image-url-here" alt="Contact Us" className="w-full h-auto rounded-md" />
      </div> */}
    </div>
    </div>
    </div>
    <MyMap/>
    </div>
  );
};

export default Contact;
