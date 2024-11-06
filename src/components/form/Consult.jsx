import React from 'react';
import './style.css';

const Consult = () => {
  return (
    <div className="bg-black text-white min-h-screen py-10">
      <div className="relative min-h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] h-[70vh] w-full"></div>
        <div className="absolute inset-0 h-[70vh] w-full bg-gradient-to-r from-black via-[#282828] to-[#3b3b3b] opacity-70"></div>
        
        <div className="relative max-w-full mx-auto flex justify-center py-20" style={{ paddingLeft: '20px', paddingRight: '0px' }}>
          <div className="bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] w-full lg:w-[calc(100%+20px)] xl:w-[calc(100%+20px)] p-12  shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">Book Consultation</h1>
            
            <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full md:w-64 p-3 border-2 border-black bg-transparent placeholder-black text-black focus:outline-none mx-auto"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full md:w-64 p-3 border-2 border-black bg-transparent placeholder-black text-black focus:outline-none mx-auto"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-64 p-3 border-2 border-black bg-transparent placeholder-black text-black focus:outline-none mx-auto"
              />
              <input
                type="text"
                placeholder="Previous Medication"
                className="w-full md:w-64 p-3 border-2 border-black bg-transparent placeholder-black text-black focus:outline-none mx-auto"
              />
              <input
                type="date"
                placeholder="Date"
                className="w-full md:w-64 p-3 border-2 border-black bg-transparent placeholder-black text-black focus:outline-none mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-4 mt-6">
            <div className="btn">
  <button className="bg-black py-2 px-4 rounded-md w-full md:w-auto relative animate-button1">
    <span className="bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-semibold">
      Ask Question
    </span>
  </button>
</div>


              <span className="font-semibold text-black">Or</span>
              <div className="btn">
  <button className="bg-black py-2 px-4 rounded-md w-full md:w-auto relative animate-button1">
    <span className="bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-semibold">
      Book Appoinment
    </span>
  </button>
</div>

            </div>

            <div className="flex items-start mt-4 text-black justify-center">
              <input type="checkbox" className="mr-2 bg-black" required />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Consult;
