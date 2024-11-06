import React from "react";
import Faq from "../faqq/Faq";
import Laser from "../lazer/Lazer";

const About = () => {
  return (
    <div className="bg-black">
<div class="bg-black pt-44 min-h-screen py-12 flex items-center justify-center">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 items-center px-4 md:px-16 text-yellow-300">
        
        <div class="text-left">
            <h1 class="text-xl font-normal leading-snug">
                Welcome To MediLaser, Your Go-To Destination For Achieving Smooth, Hair-Free Skin. Our Experienced Team Of Certified Professionals Specializes In Safe And Effective Laser Hair Removal Tailored To Your Unique Needs. With Cutting-Edge Technology, We Prioritize Your Comfort And Safety At Every Step. From Your Initial Consultation To Personalized Follow-Up Care, We’re Dedicated To Providing An Exceptional Experience In A Welcoming Environment. Discover The Confidence That Comes With Beautifully Smooth Skin—Schedule Your Consultation At MediLaser Today!
            </h1>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-end space-x-0 md:space-x-4 md:space-y-0">
            <div class="relative w-full h-[300px] md:w-[250px] overflow-hidden rounded-lg shadow-inner mb-4 md:mb-0">
                <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
                <img src="2.jpg" alt="MediLaser" class="w-full h-full object-cover" />
            </div>

            <div class="flex flex-col space-y-4">
                <div class="w-24 h-32 overflow-hidden rounded-lg shadow-inner">
                    <img src="pi.png" alt="Team member" class="w-full h-full object-cover" />
                </div>
                <div class="w-24 h-32 overflow-hidden rounded-lg shadow-inner">
                    <img src="pi.png" alt="Another team member" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
</div>



<Faq/>
<div className="flex items-center justify-center space-x-4">
                        <img src="sun.png" alt="Sun" className="w-14 h-14" />
                        <h1 className="text-xl font-bold text-center bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent">
                        procedure
                        </h1>
                        <img src="sun.png" alt="Sun" className="w-14 h-14" />
                    </div>
<Laser/>
    <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-xl bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold mb-4 text-left">
          Why You Choose Us?
        </h2>
        <div className="flex justify-center flex-wrap">
          <div className="text-center mx-2">
            <img
              src="19.jpg"
              alt="Safety"
              className="w-80 h-64 object-cover rounded-lg"
            />
            <p className="mt-2 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold">Safety</p>
          </div>

          <div className="text-center mx-2">
            <img
              src="2.jpg"
              alt="Expertise"
              className="w-64 h-80 object-cover rounded-lg"
            />
            <p className="mt-2 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold">Expertise</p>
          </div>

          <div className="text-center mx-2">
            <img
              src="3.jpg"
              alt="Advanced Technology"
              className="w-80 h-64 object-cover rounded-lg"
            />
            <p className="mt-2 bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent font-bold">Advanced Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
