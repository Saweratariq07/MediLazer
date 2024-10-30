import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black  pt-10">
      <div className="max-w-7xl mx-auto  bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        <div className="md:col-span-2">
          <img src="footer.png" alt="Logo" className="mb-4" /> 
          <p className="text-yello-400 text-start mb-4">Subscribe To Our Newsletter</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 text-black border border-yellow-400 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317]  placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-black bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent border-yellow-500 border-[1px] px-4 p-[9px]">
              →
            </button>
          </div>
        </div>

        <div>
          <h3 className=" bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        <div>
          <h3 className=" bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent mb-4">Blog</h3>
          <ul className="space-y-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className=" bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>info@onetwo.com</li>
            <li>www.onetwo.com</li>
            <Link to={'tel:0616784755'}>
            <li>0616784755</li>
            </Link>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className=" bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent mb-4">Opening Hours</h3>
          <ul className="space-y-2">
            <li>Mon-Fri</li>
            <li>9am-9pm</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="">
        <div className="w-full mx-auto flex justify-between items-center pt-4 ">
        <div className="bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317]  py-8 w-full">
        <p className="text-black bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317]   text-sm">
            &copy; 2024. All Rights Are Reserved
          </p>
        </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;